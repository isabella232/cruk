var _olay = {
	cdn : null,
	host : null,
	site : null,
	affiliateSite : null,
	agency : null,
	policies : {
		navigation: null,
		scroll: null,
		exit: null,
		demand: null,
		idle: null
	},
	loggedIn : null,
	autoTrigger : null,
	doCheckDFP : false,
	microsite : null,
	clientId : null,
	root : null,
	mask : null,
	content : null,
	container : null,
	closeButton : null,
	layoutType : 'overlay',
	initialised : false,
	onscreen : false,
	overrideSuppression : false,
	exitTimer: null,
	disableKeyExit: false,
	disable:false,
	disableCompanion:false,
	dclTime: 0,
	sessionStart:0,
	win: null,
	doc: null,
	mpl: null,
	ma: null,
	ml: null,
	msai: null,
	msd: null,
	muu: null,
	cookieDomain: null,
	counter: 0,
	debug: false,
	bustIframe: true,
	floater: null,
	logger: [],
	revealFunc: null,
	oframe: null,
	closeTimer: null,
	scrollPos : null,
	isIOS : false,
	isSmallScreen : false,
	listeners : [],
	eventActivated:true,
	sliderExpanded: false,
	page: null,
	hideElm: null,
	fadeElm: null,
	idleTimer : null,
	segments: {
		list: [],
		add: function(p) {
			this.list.push(p);
			try {
				_olay.setCookie('_msegments', JSON.stringify(this.list), 24 * 30);
			} catch(e){};
		},
		get: function(id) {
			for (var x in this.list) {
				if (id == this.list[x].id) return this.list[x];
			}
		},
		isControlGroup: function() {
			for (var x in this.list) {
				if (this.list[x].displayStyle) {
					if (_olay.policy && this.list[x].suppress && this.list[x].displayStyle == _olay.policy.displayStyle) return true;
				}
				else if (this.list[x].suppress) return true;
			}
			return false;
		},
		load: function() {
			var c = _olay.getCookie('_msegments');
			if (c) {
				try {
					this.list = JSON.parse(c);
				} catch(e){}
			}
		}
	},
	pageNumber : 1,
	utmTags : ["utm_campaign", "utm_content", "utm_medium", "utm_source", "utm_term"],
	trkTags : ["_msegments"],
	events : {
		type : null,
		tracker : null,
		runtimeImpressionURL: null,
		runtimeClickURL: null,
		display : function() {
			this.fire(_olay.policy.displayEvent);
			this.layoutEvent('policy_display');
			if (this.runtimeImpressionURL) {
				var img = new Image();
				img.src = this.runtimeImpressionURL;
				_olay.log("impression " + this.runtimeImpressionURL);
			}
		},
		formSubmit : function() {
			if (this.runtimeClickURL) {
				var img = new Image();
				img.src = this.runtimeClickURL;
				_olay.log("click " + this.runtimeClickURL);
			}
		},
		success : function() {
			this.fire(_olay.policy.successEvent);
			this.layoutEvent('policy_success');
			this.formSubmit();
		},
		fail : function() {
			this.fire(_olay.policy.failEvent);
			this.layoutEvent('policy_fail');
			this.formSubmit();
		},
		registered : function() {
			this.fire(_olay.policy.registeredEvent);
			this.layoutEvent('policy_duplicate');
			this.formSubmit();
		},
		close : function() {
			this.fire(_olay.policy.closeEvent);
			this.layoutEvent('policy_close');
		},
		companionDisplay : function() {
			if (_olay.policy) {
				this.fire(_olay.policy.companionDisplayEvent);
				this.layoutEvent('policy_companion');
			}
		},
		companionClick : function() {
			if (_olay.policy) {
				this.fire(_olay.policy.companionClickEvent);
				this.layoutEvent('policy_click');
			}
		},
		suppressDisplay : function() {
			if (_olay.policy) {
				this.fire(_olay.policy.suppressDisplayEvent);
				this.layoutEvent('policy_suppress');
			}
		},
		layoutEvent : function(event) {
			if(_olay.eventActivated){
				try {
					var ad = _olay.policy.adId || (_olay.microsite ? _olay.microsite.adId : 0);
					(new Image()).src = '//' + _olay.host + '/li/event?_ma=' + ad + '&_mgrp=' + _olay.policy.adGroupId + '&_ms=' + _olay.policy.siteId + '&_mlt=' + _olay.policy.layoutType + '&_ml=' + _olay.policy.layoutId + '&_mpl=' + _olay.mpl + '&_mp=' + _olay.policy.entityId + '&_msai=' + _olay.msai + '&eventName=' + event + '&img=1&referer=' + encodeURIComponent(_olay.page);
				} catch(e){}
			}
		},
		fire : function(payload) {
			if (payload) {
				try {
					if (this.tracker === null) {
						if (_olay.policy.trackerName) {
							this.tracker = _olay.win[_olay.policy.trackerName];
						}
						if (_olay.policy.trackerType) {
							this.type = _olay.policy.trackerType;
						}
					}
					if (_olay.microsite) {
						payload = _olay.mergeVars(_olay.microsite, payload);
					}
					payload = _olay.mergeVars(_olay.policy, payload);
					payload = payload.replace(new RegExp('\{\{pageNumber\}\}', 'g'), _olay.pageNumber);
					var triggerTimeOrScroll = _olay.policy.triggerEvent == 'scroll' ? _olay.policy.scrollPercent : Math.round(_olay.getTimeOnPage()/1000);
					payload = payload.replace(new RegExp('\{\{triggerTimeOrScroll\}\}', 'g'), triggerTimeOrScroll);
					payload = payload.replace(new RegExp('\{\{[a-zA-Z]+\}\}', 'g'), '');
					if (this.type == 'google' && this.tracker instanceof Function && this.tracker.getAll instanceof Function) {
						var json = JSON.parse(payload);
						var gas = this.tracker.getAll();
						for (var x = 0; x < gas.length; x++) {
							var ref = (gas[x].get('name') != null && !gas[x].get('name') == '') ? gas[x].get("name") + ".send" : "send";
							this.tracker(ref, 'event', json.category, json.action, json.label, ((json.value) ? json.value : null));
						}
					} else if (this.type == 'ga' && this.tracker instanceof Object) {
						var json = JSON.parse(payload);
						this.tracker.push(['_trackEvent', json.category, json.action, json.label, ((json.value) ? json.value : null)]);
					} else if (this.type == 'webtrends' && this.tracker instanceof Object) {
						var json = JSON.parse(payload);
						this.tracker.push(json);
					} else {
						eval(payload);
					}
				} catch (err) {
					_olay.log("analytics fail: " + err);
				}
				_olay.log("event payload: " + payload);
			}
		}
	},
	log : function(message, success, time) {
		var time = time || (new Date().getTime() - this.dclTime);
		var mess = "dcl+" + time + ": " + message;
		if (this.debug && this.win._mlog){
			if (typeof success == 'boolean') {
				mess = "<span style='color:" + (success ? "#b8fb9e" : "#ff9e9e") + "'>" + mess + "</span>";
			}
			if (console) {
				console.log("olay " + mess);
			}
			this.win._mlog.innerHTML += "> " + mess + "<br>";
		}
		this.logger.push([message,success, time]);
	},
	loggedInCheck : function() {
		return null;
	},
	mergeVars : function(obj, payload) {
		Object.getOwnPropertyNames(obj).forEach(
			function (x, idx, array) {
				var val = obj[x] ? obj[x] : '';
				if (typeof val === 'object') {
					payload = _olay.mergeVars(val, payload);
				} else {
					payload = payload.replace(new RegExp('\{\{' + x + '\}\}', 'g'), val);
				}
			}
		);
		return payload;
	},
	setCookie : function(c_name, value, exhours) {
		var exdate = new Date();
		exdate.setMilliseconds(exdate.getMilliseconds() + exhours * 60 * 60
				* 1000);
		var c_value = encodeURIComponent(value)
				+ ((exhours == null) ? "" : "; expires=" + exdate.toUTCString())
				+ "; path=/"
				+ ((this.cookieDomain) ? "; domain=" + this.cookieDomain : "");
		this.doc.cookie = c_name + "=" + c_value;
	},
	getCookie : function(c_name) {
		var i, x, y, ARRcookies = this.doc.cookie.split(";");
		for (i = 0; i < ARRcookies.length; i++) {
			x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
			y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
			x = x.replace(/^\s+|\s+$/g, "");
			if (x == c_name) {
				return decodeURIComponent(y);
			}
		}
		return null;
	},
	setCookieDomain : function() {
		var ccSLDs = [ "com", "net", "org", "gov", "edu", "ac", "co", "name", "sch", "mil"];
		var bits = window.location.hostname.split('.').reverse();
		var i = 1;
		for (i; i<bits.length; i++){
			if (this.isObjectInArray(bits[i], ccSLDs)){
				continue;
			}
			this.cookieDomain = '.'+bits.slice(0,i+1).reverse().join('.');
			//this.log('testing '+this.cookieDomain);
			if (this.areCookiesEnabled()){
				break;
			}
		}
	},
	isObjectInArray : function(obj, ary) {
		if (!ary || !obj) {
			return false;
		}
		for (var i = 0; i < ary.length; i++) {
			if (obj == ary[i]) {
				return true;
			}
		}
		return false;
	},
	cleanString : function(s, len) {
		if (s) {
			if (s.length > len)
				s = s.substr(0, len);
		}
		return s;
	},

	getQueryParam : function(name, altname) {
		var qr = this.win.location.search.substring(1);
		if (qr) {
			qr = qr.replace("?", "&"); // fix malformed urls
			var parm = qr.split(/&|;/);
			for (var i = 0; i < parm.length; i++) {
				var kv = parm[i].split("=");
				if (kv[0] == name || (altname && kv[0] == altname)) {
					try {
						return this.cleanString(decodeURIComponent(kv[1]), kv[0] == "_msd" ? 200 : 50);
					} catch(e) {
						return null;
					}
				}
			}
		}
		return null;
	},
	storeParamTrk : function() {
		var utm = [];
		for (var i = 0; i < this.utmTags.length; i++) {
			var v = this.getQueryParam(this.utmTags[i]);
			if (v) {
				utm.push(this.utmTags[i] + '=' + encodeURIComponent(this.cleanString(v, 50)));
			}
		}
		if (utm.length > 0) {
			this.setCookie('_mutm', utm.join("|"), 24*30);
		}
	},
	appendParamTrk : function(url) {
		var c = this.getCookie('_mutm');
		if (c) {
			var tgs = c.split('|');
			var sep = (url.indexOf('?') >= 0) ? '&' : '?';
			for (var i = 0; i < tgs.length; i++) {
				if(tgs[i]) {
					url += sep + tgs[i];
					sep = '&';
				}
			}
		}
		return url;
	},
	appendCkTrk : function(url) {
		var sep = (url.indexOf('?') >= 0) ? '&' : '?';
		for (var i = 0; i < this.trkTags.length; i++) {
			var v = this.getCookie(this.trkTags[i]);
			if(v) {
				url += sep + this.trkTags[i] + '=' + encodeURIComponent(v);
				sep = '&';
			}
		}
		return url;
	},

	script : function(src, async, onload, onerror) {
		var tk = this.doc.createElement('script');
		tk.type = 'text/javascript';
		if (async)
			tk.async = true;
		if (onerror)
			tk.onerror = onerror;
		if (onload) {
			tk.onload = onload;
			if (typeof this.doc.attachEvent === "object") {
				tk.onreadystatechange = function() {
					if (this.readyState==='loaded'||this.readyState==='complete') {
						onload();
						this.onreadystatechange = null;
					}
				}
			}
		}
		tk.src = src;
		var s = this.doc.getElementsByTagName('head')[0];
		s.appendChild(tk);
	},
	callbackAdTracking : function(resp) {
		if (resp) {
			if (resp.policies && resp.policies.length > 0) {
				this.setupPolicies(resp.policies);
			} else {
				this.log("no matching policy");
			}
			if (resp.muu) {
				this.muu = this.muu || resp.muu;
				this.setCookie("_muu",this.muu,24 * 365);
			}
		} else {
			this.log("no policy response");
		}
		this.initialiseEvents();
	},
	setupPolicies : function(policies) {
		if (Object.prototype.toString.call(policies) === '[object Array]') {
			//not currently configurable
			var session = 1;
			var start = Number(this.getCookie("_mst")) || new Date().getTime();
			this.setCookie("_mst", start, session);
			this.sessionStart = start;
			this.counter = Number(this.getCookie("_mi")) || 0;
			this.counter++;
			this.setCookie("_mi", this.counter, session);
			var opt = this.getCookie("_mo");
			var displayed = Number(this.getCookie("_mdisp")) || 0;

			for (var i=0; i < policies.length; i++){
				this.log("processing " + policies[i].triggerEvent + " policy");
				if (policies[i].triggerEvent == 'ondemand') {
					this.setupDemand(policies[i]);
					continue;
				}

				var logMessage = "";
				if (opt && policies[i].suppressDisplayScope == "all") {
					this.log(policies[i].triggerEvent + ": already opted in to an ad");
					continue;
				}
				if (policies[i].ipFrequencyCap && displayed >= policies[i].ipFrequencyCap) {
					this.log(policies[i].triggerEvent + ": hit frequency cap " + displayed + ">" + policies[i].ipFrequencyCap);
					continue;
				}
				var opt = this.getCookie("_mo");
				if (opt && opt.split(",").indexOf("" + policies[i].adId) >= 0) {
					this.log(policies[i].triggerEvent + ": already opted in to ad " + policies[i].adId);
					continue;
				}

				var nextImpThreshold = policies[i].trigger.impressionCount || 0;
				switch(policies[i].behaviourOnClose) {
					case 'show_exponential_delay':
						nextImpThreshold = nextImpThreshold * (Math.pow(2, displayed));
						break;
					case 'reset_cookies':
						nextImpThreshold = this.counter + Math.ceil(this.counter % nextImpThreshold) * nextImpThreshold;
						break;
					case 'suppress_display':
						if (displayed > 0) {
							this.log(policies[i].triggerEvent + ": do not show again");
							continue;
						}
						break;
					case 'show_next_impression':
					default:
						break;
				}
				var doActivate = nextImpThreshold > 0 && this.counter >= nextImpThreshold;
				if (nextImpThreshold > 0 && !doActivate) {
					logMessage = "not enough impressions " + this.counter + "<" + nextImpThreshold;
				}
				doActivate |= policies[i].trigger.millisOnSite && this.getTimeOnSite() - (policies[i].trigger.millisOnSite || 0) > 0;
				if (!doActivate) {
					logMessage += " too early " + this.getTimeOnSite() + "<" + policies[i].trigger.millisOnSite;
				}
				if (!doActivate){
					this.log(policies[i].triggerEvent + ": " + logMessage);
					continue;
				}
				switch(policies[i].triggerEvent){
					case 'navigation':
						this.setupNavigation(policies[i]);
						break;
					case 'scroll':
						this.setupScroll(policies[i]);
						break;
					case 'exit':
						this.setupExit(policies[i]);
						break;
					case 'ondemand':
						this.setupDemand(policies[i]);
						break;
					case 'idle':
						this.setupIdle(policies[i]);
						break;
				}
			}

		}
	},
	standardisePolicy : function(policy) {
		if (typeof policy.trigger === 'undefined') {
			policy.trigger = {millisOnPage: 0};
		}
		if (typeof policy.layoutId === 'undefined' && typeof policy.overlayMicrositeLayoutId !== 'undefined') {
			policy.layoutId = policy.overlayMicrositeLayoutId;
		}
		if (typeof policy.displayStyle === 'undefined') {
			policy.displayStyle = 'modal';
		}
	},
	setupDemand : function(policy) {
		this.log("adding " + policy.triggerEvent + " policy");
		this.standardisePolicy(policy);
		this.policies.demand = policy;
		this.initOnDemand();
	},
	setupScroll : function(policy) {
		this.log("adding " + policy.triggerEvent + " policy");
		this.standardisePolicy(policy);
		this.policies.scroll = policy;
		this.initOnScroll();
	},
	setupExit : function(policy) {
		this.log("adding " + policy.triggerEvent + " policy");
		this.standardisePolicy(policy);
		this.policies.exit = policy;
		this.initOnExit();
	},
	setupNavigation : function(policy) {
		this.log("adding " + policy.triggerEvent + " policy");
		this.standardisePolicy(policy);
		this.policies.navigation = policy;
		//if we're here then the policy will trigger.
		this.policy = this.policies.navigation;
		this.setCookie("_mp", policy.entityId, 14 * 24);
		this.timerDisplay(this.policies.navigation);
	},
    setupIdle : function(policy) {
        this.log("adding " + policy.triggerEvent + " policy");
        this.standardisePolicy(policy);
        this.policies.idle = policy;
        this.timerDisplay(this.policies.idle);
        this.initOnIdle();
    },
	evaluatePolicies : function() {
		if (!(this.autoTrigger === 0)) {
			//all other policies are event driven. re-evaluate navigation only
			if (this.policies.navigation != null) {
				this.timerDisplay(this.policies.navigation);
			}
		}
	},
	closure : function() {
		var s = Array.prototype.slice, a = s.call(arguments), o = a.shift(), m = a.shift();
		return function() {
			return m.apply(o, a.concat(s.call(arguments)));
		};
	},
	getTimeOnPage : function() {
		return (new Date().getTime() - this.dclTime);
	},
	getTimeOnSite : function() {
		return (new Date().getTime() - this.sessionStart);
	},
	timerDisplay : function(pol) {
		var isIdle = pol.triggerEvent === 'idle';
		var pause = Math.max((pol.trigger.millisOnPage | 0) - (isIdle ? 0 : this.getTimeOnPage()), 0);
		var t = setTimeout(this.closure(this, function(){ this.policy = pol; this.display(); }), pause);
		if (isIdle) {
            this.idleTimer = t;
		}
	},
    resetIdleTimer : function() {
		if (this.policies.idle) {
            clearTimeout(this.idleTimer);
            this.timerDisplay(this.policies.idle);
        }
    },
	initMask : function(colour) {
		var mask = this.doc.createElement('div');
		mask.style.visibility = 'hidden';
		mask.style.opacity = 0;
		mask.style.width = 'auto';
		mask.style.height = 'auto';
		if (this.isIOS) {
			mask.style.position = 'absolute';
		} else {
			mask.style.position = 'fixed';
		}
		mask.style.top = 0;
		mask.style.left = 0;
		mask.style.bottom = 0;
		mask.style.right = 0;
		try {
			mask.style.backgroundColor = colour;
		} catch (e) {
			mask.style.background = 'url(//'+this.cdn+'/assets/static/alpha.png) repeat';
		}
		mask.style.zIndex = "2147483645";
		mask.style.transition = "opacity 0.5s ease-out";
		mask.id = "_mmask";
		this.mask = mask;
	},
	//legacy method
	displayOnDemand : function(ma, ml, showClose) {
		this.policy = {
			displayCloseButton: !showClose ? false : true,
			adId: ma,
			layoutId: ml
		};
		this.standardisePolicy(this.policy);
		this.display(true);
	},
	displayOnEvent : function() {
		if (this.policy) {
			if (((this.policy.trigger.millisOnPage || 0) - this.getTimeOnPage() < 0) && ((this.policy.trigger.millisOnSite || 0) - this.getTimeOnSite() <= 0) ) {
				this.display();
			}
		} else if (this.ma && this.ml) {
			this.displayOnDemand(this.ma, this.ml, true);
			this.disable = true;
		}
	},
	display : function(force) {
		if (this.onscreen && force) {
			this.focusOnScreen();
			return false;
		}
		if (!this.suppress(this.policy) || force) {
			if (force && this.policy == null && this.policies.demand) {
				//legacy support for ondemand
				this.policy = this.policies.demand;
			}

			if (this.policy.companionDisplayStyle == 'before') {
				this.loadCompanion(this.policy.adId, this.policy.adGroupId, this.policy.companionPosition);
				this.disableCompanion = true;
			} else {
				this.clearListeners();
				var scr = '//' + this.host
					+ '/track?jsonp=_olay.callbackLayout&_mlt=' + this.layoutType
					+ '&_ms=' + this.affiliateSite
					+ '&w=800&h=600&mpl=' + this.mpl;
				if (this.policy.adId) {
					scr += '&_ma=' + this.policy.adId;
				}
				if (this.policy.adGroupId) {
					scr += '&_mba=' + this.policy.adGroupId;
				}
				if (this.policy.layoutId && this.policy.layoutId > 0) {
					scr += '&overrideLayouts=' + this.policy.layoutId;
				} else if (this.policy.displayStyle) {
					scr += '&_mds=' + this.policy.displayStyle;
				}
				this.script(scr, true);
				this.setOnScreen(true);
				this.disable = true;
			}

			this.incrementViews();

			return true;
		} else {
			this.clearListeners();
		}
		return false;
	},
	focusOnScreen: function() {
		this.css("@keyframes shake {10%, 90% {transform: translate3d(-1px, 0, 0);} 20%, 80% {transform: translate3d(2px, 0, 0);} 30%, 50%, 70% {transform: translate3d(-4px, 0, 0);} 40%, 60% {transform: translate3d(4px, 0, 0);}}" +
			".LI-shake {animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both; /*transform: translate3d(0, 0, 0);*/ backface-visibility: hidden;perspective: 1000px;}");
		if (this.onscreen) {
			this.addClassName(this.container, 'LI-shake');
			setTimeout(function(){_olay.removeClassName(_olay.container, 'LI-shake');}, 1000);
		}
	},
	setOnScreen : function(isOnScreen) {
		this.onscreen = isOnScreen;
		this.win["DoNotDisplayIA"] = isOnScreen ? 1 : null;
	},
	newClose : function() {
		var close = new Image();
		close.style.position = 'absolute';
		close.style.cursor = 'pointer';
		close.style.overflow = 'hidden';
		close.style.zIndex = "2147483647";
		close.onclick = this.closure(this, this.close);
		close.style.width = '30px';
		close.style.height = '30px';
		close.id = 'mag-olay-close-btn';
		if (this.microsite && this.microsite.closeButton) {
			close.style.top = this.microsite.closeButtonY +'px';
			close.style.right = this.microsite.closeButtonX +'px';
			close.src = this.microsite.closeButton;
		} else {
			close.style.top = '8px';
			close.style.right = '8px';
			close.src = '//'+this.cdn+'/assets/static/close2x.png';
		}
		return close;
	},
	getWindowWidth : function() {
		return this.win.innerWidth || this.doc.documentElement.clientWidth;
	},
	getWindowHeight : function() {
		return this.win.innerHeight || this.doc.documentElement.clientHeight;
	},
	newDisclaimer : function() {
		var d = this.policy.disclaimer;
		var a = this.doc.createElement('div');
		a.style.position='absolute';
		a.style.width=d.width+"px";
		a.style.height=d.height+"px";
		var cs=this.policy.disclaimerCorner.split('_',2);
		a.style[cs[0]]=this.policy.disclaimerY + "px";
		a.style[cs[1]]=this.policy.disclaimerX + "px";
		var img=d.image;
		var c=img.indexOf(":");
		if (c>0) img=img.substring(c+1);
		a.style.background='url('+img+') no-repeat center top';
		a.style.overflow="hidden";
		a.style.cursor="pointer";
		a.style.zIndex = 2147483647;
		a.onclick = this.closure(this, this.showDisclaimer);
		a.className="LI-disclaimer";
		a.style.margin="30px 10px 10px";//close button
		return a;
	},
	addClassName : function(obj, className) {
		var pattern = new RegExp('(?:^|\\s)' + className + '(?:\\s|$)');
		if (obj) {
			if (!pattern.test(obj.className)) {
				obj.className += " " + className;
			}
		}
	},
	removeClassName : function(obj, className) {
		var pattern = new RegExp('(?:^|\\s)' + className + '(?:\\s|$)', 'g');
		if (obj) {
			if (obj.className && pattern.test(obj.className)) {
				obj.className = obj.className.replace(pattern, "").replace(/^\s+|\s+$/g, '');
			}
		}
	},
	rm : function(node) {
		if (node && node.parentNode) {
			node.parentNode.removeChild(node);
		}
	},
	close : function() {
		if (this.closeTimer) clearTimeout(this.closeTimer);
		if (this.mpl && (
			this.mpl === '8wtv6b6j'
			|| this.mpl === 'd44wph9s'
			|| this.mpl === '1c8jft6x'
			|| this.mpl === '3gk6m0o2'
			|| this.mpl === 'z2cddn5n'
			|| this.mpl === 'ih1z3uh4'
			|| this.mpl === 'x75130ch'
			|| this.mpl === 'qbs5gkfc'
			|| this.mpl === '5shdboq5'
			|| this.mpl === 'r6q4ws19'
			|| this.mpl === 'pt3y8qvf'
		)) {
			var days = this.policy.triggerEvent == 'scroll' ? 14 : 30;
			this.setCookie("_mout", "1", 24 * days);
		}
		if (this.mpl && this.mpl === 'wlq97d4t') {
			this.setCookie("_mout_"+this.policy.entityId, "1", 30 * days);
		}
		this.events.close();
		this.rm(this.content);
		this.content = null;
		this.rm(this.mask);
		this.mask = null;
		this.rm(this.closeButton);
		this.closeButton = null;
		this.showContent();
		this.setOnScreen(false);
		this.eventRemove(this.win, 'resize', this.revealFunc);
		this.removeClassName(this.doc.body, "LI-host-body");
		this.removeClassName(this.doc.documentElement, "LI-host-html");
		if (this.scrollPos && this.scrollPos != this.win.scrollY) {
			this.win.scrollTo(0, this.scrollPos);
		}
		if (this.policy.companionDisplayStyle == 'after' && this.microsite.adId) {
			this.loadCompanion(this.microsite.adId, this.policy.adGroupId);
		}
		this.revealFunc = null;
		this.hasRun = false;
		},
	success : function() {
		var d = this.getCookie("_mo");
		if (!d)
			d = "";
		d += this.microsite.adId + ",";
		this.setCookie("_mo", d, 365 * 24);
		this.addCloseButton();
	},

	fail : function() {
		this.success();
	},

	listener : function(event) {
		if (event && typeof event.data === 'string') {
			try {
				switch (event.data) {
				case '_msuccess':
					this.events.success();
					this.success();
					break;
				case '_mfail':
					this.events.fail();
					this.fail();
					break;
				case '_mshowClose':
					this.addCloseButton();
					this.log("event: " + event.data);
					break;
				case '_mclose':
					this.close();
					this.log("event: " + event.data);
					break;
				case '_mregistered':
					this.events.registered();
					this.success();
					break;
				case '_mloaded':
					this.log("micro loaded");
					this.reveal();
					this.events.display();
					break;
				case '_mcompanionLoaded':
					this.log("companion loaded");
					this.events.companionDisplay();
					break;
				case '_mcompanionClick':
					this.log("companion clicked");
					this.events.companionClick();
					break;
				case '_mresize':
					this.log("micro resized");
					this.setPosition();
					break;
				}
				if (event.data.indexOf('_mpage-') == 0) {
					this.events.success();
					this.pageNumber = event.data.substr(7);
				}
			} catch (e) {
			}
		}
	},
	eventPush : function(obj, event, handler, register) {
		if (typeof obj !== 'undefined' && obj != null) {
			if (obj === this.win && event === 'load') {
				//check if already loaded;
				if (obj.document.readyState === 'interactive' || obj.document.readyState === 'complete') {
					handler();
					return;
				}
				obj = obj.document;
				event = (typeof obj.attachEvent === 'object') ? 'readystatechange' : 'DOMContentLoaded';
			}
			if (obj.addEventListener) {
				obj.addEventListener(event, handler, false);
			} else if (obj.attachEvent) {
				obj.attachEvent('on' + event, handler);
			}
			if (register) {
				this.listeners.push([obj, event, handler]);
			}
		}
	},
	eventRemove : function(obj, event, handler) {
		if (!obj)
			return;
		if (obj.removeEventListener) {
			obj.removeEventListener(event, handler, false);
		} else if (obj.detachEvent) {
			obj.detachEvent('on' + event, handler);
		}
	},
	clearListeners : function() {
		while(this.listeners.length > 0) {
			var l = this.listeners.pop();
			this.eventRemove(l[0],l[1],l[2]);
		}
	},
	addCloseButton : function() {
		if (!this.closeButton) {
			this.closeButton = this.newClose();
			if (this.policy.displayStyle === 'fullscreen' || this.policy.displayStyle === 'embedded') {
				if (this.content) {
					this.content.appendChild(this.closeButton);
				}
			} else {
				if (this.container) {
					this.container.appendChild(this.closeButton);
				}
			}
		}
	},
	addDisclaimer : function() {
		if (this.policy.disclaimer) {
			if (this.container) {
				var d = this.newDisclaimer();
				this.container.appendChild(d);
			}
		}
	},
	fadeIn : function(obj, time, callback) {
		if (typeof  obj !== 'undefined' && obj) {
			obj.style.visibility = 'visible';
			var fps = 30;
			var frames = Math.round(fps * time / 1000);
			var frequency = 1000 / fps;
			this.animateMe(obj, frequency, 1, frames, 'in', callback);
		}
	},
	fadeOut : function(obj, time, callback) {
		if (typeof  obj !== 'undefined' && obj) {
			var fps = 30;
			var frames = Math.round(fps * time / 1000);
			var frequency = 1000 / fps;
			this.animateMe(obj, frequency, 1, frames, 'out', callback);
		}
	},
	animateMe : function(obj, frequency, frame, limit, direction, callback) {
		var f = frame;
		obj.style.opacity = (1 + ((direction == 'in' ? -1 : 1 ) * Math.cos(f / limit * Math.PI))) / 2;
		if (frame < limit) {
			f++;
			setTimeout(function () {
				_olay.animateMe(obj, frequency, f, limit, direction, callback)
			}, frequency);
		} else if (callback instanceof Function) {
			callback();
		}
	},
	setupModal : function(alpha) {
		this.initMask('rgba(255,255,255,'+alpha+')');
		this.doc.body.appendChild(this.mask);
	},
	setupEmbedded : function() {
		var t = this.policy.embeddedTarget || '#olay-embedded';
		var elm = this.get(t);
		if (!elm) {
			this.log("cannot setup embedded as "+t+" does not exist");
			return;
		}
		this.root = this.content = this.container = this.doc.createElement('div');
		this.root.style.position = 'relative';
		this.root.style.height = '0';
		this.root.style.overflow = 'hidden';
		this.root.style.zIndex = '99999';
        this.root.style.transition = 'opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1), height 0.3s';
        elm.appendChild(this.root);
	},
	setupSlider : function(){
		var w = this.microsite.micrositeWidth;

		var d = this.doc.createElement('div');
		d.style.backgroundColor = "#FFFFFF";
		d.style.visibility = 'hidden';
		d.style.opacity = 0;
		d.style.width = '100%';
		d.style.maxWidth = w + 'px';
		d.style.position = 'fixed';
		d.style.webkitOverflowScrolling = 'touch';
		d.style.height = '50px';
		d.style.zIndex = "2147483646";
		d.style.fontSize = 0;
		d.style.lineHeight = "0";
		d.id = "_mroot";
		d.style.cssText += "-webkit-box-shadow:  0px 0px 50px 0px rgba(0,0,0,0.5); box-shadow:  0px 0px 50px 0px rgba(0,0,0,0.5);-moz-box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.5)";

		var p = this.policy.position;
		if (!p) p = 'middle_centre';
		var axis = 'x';
		var direction = '';
		var pos = p.split('_');
		switch (pos[1]) {
			case 'centre':
				axis = 'y';
				if (pos[0] === 'bottom') {
					direction = '';
				} else {
					direction = '-';
				}
				break;
			case 'left':
				axis = 'x';
				direction = '-';
				break;
			case 'right':
				axis = 'x';
				direction = '';
				break;
		}

		//animation
		d.style.transition = 'opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1), height 0.3s';
		d.style.transform = 'translate' + axis + '( ' + direction + '100%)';
		this.doc.body.appendChild(d);
		this.root = d;
		this.content = d;
		this.container = d;
		if (this.isIOS) {
			// this.css("#olay-frame { -webkit-transform: translate3d(0,0,0);} ");
		}
	},
	setupWall : function(){
		var width = this.microsite.micrositeWidth;
		this.setupModal( (this.policy.displayStyle === 'fullscreen' ? 0.95 : 0.8) );

		var content = this.doc.createElement('div');
		content.id = "_mcontent";
		content.style.visibility = 'hidden';
		content.style.opacity = 0;
		content.style.width = '100%';
		content.style.height = '100%';
		content.style.overflowX = 'hidden';
		content.style.overflowY = 'scroll';
		if (this.isIOS) {
			content.style.position = 'absolute';
			content.style.webkitOverflowScrolling = 'touch';
		} else {
			content.style.position = 'fixed';
		}
		content.style.top = 0;
		content.style.left = 0;
		content.style.bottom = 0;
		content.style.right = 0;
		content.style.fontSize = 0;
		content.style.backgroundColor = 'transparent';
		content.style.zIndex = "2147483646";

		this.content = content;
		this.doc.body.appendChild(content);

		var centre = this.doc.createElement('div');
		centre.style.clear = "both";
		centre.style.position = "relative";

		centre.style.maxWidth = width + "px";
		centre.style.boxSizing = "border-box";
		content.appendChild(centre);
		this.container = centre;

		var frame = this.doc.createElement('div');
		if (!this.isSmallScreen && this.policy.displayStyle != 'fullscreen') {
			frame.style.cssText = "-webkit-box-shadow:  0px 0px 50px 0px rgba(0,0,0,0.5); box-shadow:  0px 0px 50px 0px rgba(0,0,0,0.5);-moz-box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.5)";
		}
		if (this.policy.displayStyle != 'fullscreen') {
			frame.style.backgroundColor = "#FFFFFF";
		}
		frame.style.width = "100%";
		frame.style.height = "100%";
		frame.style.lineHeight = "0";
		frame.style.overflow = "hidden";
		frame.id = "_mroot";

		//animation
		if (this.isSmallScreen) {
			content.style.transition = 'opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1), height 0.3s';
			content.style.transform = 'translatex(100%)';
		} else {
			content.style.transition = 'opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)';
			frame.style.transition = 'transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1), transform-origin 0.5s cubic-bezier(0.215, 0.61, 0.355, 1), height 0.3s';
			frame.style.transform = 'scale(0.9, 0.9)';
			// frame.style.transform = 'perspective(400px) rotateX(-5deg)';
			// frame.style.transformOrigin = 'center 0 20px';
		}

		centre.appendChild(frame);
		this.root = frame;
		// this.setPosition();
	},
	setupIOS : function(){
		var d = this.doc.createElement('div');
		this.setupModal(1);
		if (this.policy.displayStyle != 'fullscreen') {
			d.style.backgroundColor = "#FFFFFF";
		}
		d.style.visibility = 'hidden';
		d.style.opacity = 0;
		d.style.width = '100%';
		d.style.position = 'absolute';
		d.style.webkitOverflowScrolling = 'touch';
		d.style.top = 0;
		d.style.left = 0;
		d.style.bottom = 0;
		d.style.right = 0;
		d.style.zIndex = "2147483646";
		d.style.fontSize = 0;
		d.style.lineHeight = "0";
		d.id = "_mroot";

		//animation
		d.style.transition = 'opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1), height 0.3s';
		d.style.transform = 'translatex(100%)';
		this.doc.body.appendChild(d);
		this.root = d;
		this.content = d;
		this.container = d;
		// this.setPosition();
	},
	callbackLayout : function(resp) {
		this.microsite = resp.layout || resp.microsite;
		if (!this.microsite.id) {
			this.microsite.id = this.microsite.MicrositeLayoutId;
		}
		if (!this.microsite.type) {
			this.microsite.type = 'microsite';
		}
		this.fromAd = this.microsite.fromAdId;

		if (this.segments.isControlGroup() && this.policy.triggerEvent != 'ondemand') {
			this.log("suppressed");
			this.events.suppressDisplay();
			return;
		}

        this.hideContent();

        switch(this.policy.displayStyle) {
			case 'slider':
				this.setupSlider();
				break;
			case 'fullscreen':
			case 'modal':
				if (this.isIOS) {
					this.setupIOS();
				} else {
					this.setupWall();
				}
				break;
			case 'embedded':
				this.setupEmbedded();
				break;
		}

		this.loadMicrosite();

		if (this.policy.displayCloseButton !== false) {
			this.addCloseButton();
		}
		this.addDisclaimer();
	},
	loadMicrosite : function() {
		this.log("init micro");
		this.css('.LI-disclaimer:hover{background-position:center bottom !important}');
		if (this.policy.displayStyle !== 'embedded') {
			if (this.isIOS) {
				this.css('.LI-host-html, .LI-host-body {overflow: hidden; height:100%}');
			} else {
				this.css('.LI-host-html, .LI-host-body {overflow: hidden;}');
			}
		}
		var config = "var _im = {"+
			"host : '" + this.host + "'," +
			"ad : " + this.microsite.adId + "," +
			"site : " + this.affiliateSite + "," +
			"mpl : '" + this.nullToEmpty(this.mpl) + "'," +
			"mp : '" + this.nullToEmpty(this.policy.entityId) + "'," +
			"msai : '" + this.nullToEmpty(this.msai) + "'," +
			"msd : '" + this.nullToEmpty(this.msd) + "'," +
			"layout : " + this.microsite.id + "," +
			"layoutType : 'overlay' ," +
			"fromAd : " + this.microsite.fromAdId + "," +
			"clientId : '" + this.nullToEmpty(this.clientId) + "'," +
			"iframe : true" +
			"};";

		this.oframe = this.createIframe(this.root);
		this.eventPush(this.oframe.contentWindow, 'load', this.closure(this, window.parent._olay.setHeight));
		this.oframe.contentWindow.document.open();
		var frCss = "<style>body{margin:0;padding:0;}</style>";
		// var frCss = "<style>body{margin:0;padding:0;} body * {-webkit-transform: translate3d(0,0,0);}</style>";
		// if (this.isIOS) {
		//	 frCss = "<style>html,body{height: 100%;overflow: auto;-webkit-overflow-scrolling: touch;} body{margin:0;padding:0;}</style>";
		// }
		this.oframe.contentWindow.document.write("<!DOCTYPE html><html><head><title>overlay</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta charset=\"utf-8\"><script>" + config + "</script><script src='//"+this.cdn+"/in-microsite/loader.js?v=7'></script>" + frCss + "</head><body></body></html>");
		this.oframe.contentWindow.document.close();
	},
	createIframe: function (obj) {
		var f = document.createElement('iframe');
		f.id = "olay-frame";
		f.style.width = '100%';
		f.style.height = 'auto';
		f.scrolling = "no";
		f.style.zIndex = "2147483646";
		f.style.backgroundColor = "transparent";
		f.style.border = f.marginwidth = f.marginheight = f.frameborder = 0;
		obj.appendChild(f);
		return f;
	},
	setCloseTimer : function () {
		if (this.policy.autoCloseMillis) {
			this.log("set auto close in "+this.policy.autoCloseMillis+"ms");
			this.stopCloser();
			this.closeTimer = setTimeout(this.closure(this, this.close), this.policy.autoCloseMillis);
			var e = this.oframe.contentWindow.document;
			this.eventPush(e, 'click', this.closure(this,this.stopCloser,"click"));
			this.eventPush(e, 'mouseover', this.closure(this,this.pauseCloser,"mouse"));
			this.eventPush(e, 'mouseout', this.closure(this,this.restartCloser,"mouse"));
			this.eventPush(e, 'touchstart', this.closure(this,this.pauseCloser,"touch"));
			this.eventPush(e, 'touchend', this.closure(this,this.restartCloser,"touch"));
		}
	},
	stopCloser : function(source) {
		if (this.closeTimer) {
			clearTimeout(this.closeTimer);
			this.closeTimer = null;
			this.log(source + " cleared auto close timer");
		}
	},
	pauseCloser : function(source) {
		if (this.closeTimer) {
			clearTimeout(this.closeTimer);
			this.log(source + " paused auto close timer");
		}
	},
	restartCloser : function(source) {
		if (this.closeTimer) {
			clearTimeout(this.closeTimer);
			this.closeTimer = setTimeout(this.closure(this, this.close), this.policy.autoCloseMillis);
			this.log(source + " restarted auto close timer");
		}
	},
	reveal : function() {
		this.log('reveal overlay');
		this.setCloseTimer();
		if (this.policy.displayStyle !== 'slider') {
			this.scrollPos = this.win.scrollY;
			this.addClassName(this.doc.documentElement, "LI-host-html");
			this.addClassName(this.doc.body, "LI-host-body");
			if (this.isIOS) {
				this.win.scrollTo(0,0);
			}
		}
		this.setPosition();
		this.content.style.visibility = 'visible';
		this.content.style.opacity = '1';

		//animation
		if (this.isSmallScreen || this.policy.displayStyle === 'slider') {
			this.content.style.transform = 'translatex(0) translatey(0)';
		} else {
			this.root.style.transform = 'scale(1,1)';
			// this.root.style.transform = 'perspective(400px) rotateX(0deg)';
			// this.root.style.transformOrigin = 'center 0 0';
		}

		if (this.mask) {
			this.mask.style.visibility = 'visible';
			this.mask.style.opacity = '1';
		}
		this.revealFunc = this.closure(this, this.setPosition);
		this.eventPush(this.win, 'resize', this.revealFunc);
	},
	setHeight : function() {
		if (!this.oframe) return;
		var e =  this.oframe.contentWindow.document.body || this.oframe.contentWindow.document.documentElement;
		var fHeight = Math.round(e.getBoundingClientRect().height) || e.scrollHeight;
		this.oframe.style.height = fHeight + 'px';
		this.root.style.height = fHeight + 'px';
		this.rePaint();
		this.log("resize: window=" + this.getWindowWidth() + "x" + this.getWindowHeight() + ', frame=' + this.root.clientWidth + " x " + fHeight);
		return fHeight;
	},
	rePaint : function() {
		if (this.isIOS) { // force iOS repaint
			var r = this.root;
			// r.style.visibility = 'hidden';
			r.offsetHeight;
			// r.style.visibility = 'visible';
		}
	},
	setPosition : function() {
		if (this.revealFunc != null && !this.hasRun) {
			this.hasRun = true;
			this.root.style.transition += ', margin-top 0.5s, top 0.5s';
		}
		var fHeight = this.setHeight();
		var w = this.microsite.micrositeWidth;
		var top = 0;
		var p = this.policy.position;
		if (!p) p = this.policy.position = 'middle_centre';
		var pos = p.split('_');
		var d = this.container;
		switch (this.policy.displayStyle) {
			case 'embedded':
				//do nothing
				break;
			case 'slider':
				if (pos[1] === 'right'){
					d.style.right =  0;
				} else if (pos[1] === 'left') {
					d.style.left = 0;
				} else { //centre
					d.style.left = (Math.max((this.getWindowWidth() - w) / 2, 0)) + 'px';
				}
				if (this.getWindowHeight() > fHeight) {
					switch (pos[0]) {
						case 'middle':
							d.style.top = this.getTop(fHeight) + 'px';
							if (this.isSmallScreen) {
								pos[0] = 'top';
							} else {
								break;
							}
						case 'top':
							d.style.top = this.isSmallScreen ? '0' : '10px';
							break;
						case 'bottom':
							if (this.checkDFP()) {
								d.style.bottom = '60px';
								d.style.top = (this.getWindowHeight() - fHeight - 60) + 'px';
							} else {
								d.style.bottom = 0;
								d.style.top = (this.getWindowHeight() - fHeight) + 'px';
							}
							break;
					}
				} else {
					d.style.bottom = '';
					d.style.top = '0px';
					if (!this.isIOS) {
						d.style.height = this.getWindowHeight() + 'px';
						d.style.overflowX = 'scroll';
					}
				}
				var scale = 1;
				if (!this.sliderExpanded) {
					scale = Math.min(1, Math.sqrt((0.29 * this.getWindowWidth() * this.getWindowHeight()) / (fHeight * this.root.clientWidth)) );
					this.log('scale: ' +scale);
				}
				try {
					this.root.style.transform = 'scale(' + scale + ')';
					this.root.style.transformOrigin = (pos[0] == 'middle' ? 'center' : pos[0]) + ' ' + (pos[1] == 'centre' ? 'center' : pos[1]);
				}catch(e){}
				break;
			case 'modal':
				if (pos[1] === 'left'){
					d.style.margin = "0 auto 0 0";
				} else if (pos[1] === 'right'){
					d.style.margin = "0 0 0 auto";
				} else {
					d.style.margin = "0 auto";
				}
				top = this.getTop(fHeight);
				break;
			case 'fullscreen':
				d.style.margin = "0 auto";
				top = this.getTop(fHeight);
				break;
		}

		this.root.style.marginTop = top + 'px';
		this.log("setHeight: "+top);

		this.rePaint();
	},
	getTop : function(fHeight) {
		var top = 0;
		if (!this.isSmallScreen && this.getWindowHeight() > fHeight) {
			var p = this.policy.position;
			if (p.indexOf('bottom_') == 0) {
				top = (this.getWindowHeight() - fHeight);
			} else if (p.indexOf('middle_') == 0) {
				top = (this.getWindowHeight() - fHeight) / 2;
			}
			top = Math.round(top);
		}
		return top;
	},
	openSlider : function() {
		this.root.style.transition+= ', top 0.2s, transform 0s';
		if (this.isIOS) {
			// // this.root.style.top = 0;
			// // this.root.style.bottom = 0;
			// // this.root.style.height = 'auto';
			//
			this.root.style.overflowY = 'scroll';
			this.scrollPos = this.win.scrollY;
			if (this.policy.position.indexOf('bottom') < 0) {
				this.win.scrollTo(0, 0);
			}
			this.addClassName(this.doc.documentElement, "LI-host-html");
			this.addClassName(this.doc.body, "LI-host-body");
			this.root.style.overflowX = 'hidden';
			this.root.style.overflowY = 'auto';
			this.root.style.position = 'absolute';
		}
		this.sliderExpanded = true;
		this.setPosition();
	},
	get : function(e, getAll) {
		if (!e) return null;
        var elm = [];
        if (!/^(?:\.|#).*/.test(e)) {
            e = '#'+e;
        }
        if (e.substring(0,1) == '.') {
            elm = Array.prototype.slice.call(this.doc.getElementsByClassName(e.substring(1)));
        } else if (e.substring(0,1) == '#') {
        	var eId = this.doc.getElementById(e.substring(1));
        	if (eId) {
                elm[0] = eId
			}
        }
        if (getAll) {
        	return elm;
		} else if (elm && elm.length >= 0){
            return elm[0];
        } else {
        	return null;
		}
	},
	getAll : function(e) {
		return this.get(e, true);
	},
	hideContent : function() {
		var e = this.policy.hideTarget;
		if (e) {
			var elm = this.get(e);
			if (elm) {
				var newElm = document.createElement('div');
				this.hideElm = newElm;
				newElm.style.overflow = 'hidden';
				newElm.style.position = 'relative';
				newElm.style.height = elm.scrollHeight + 'px';
				newElm.style.transition = 'height 0.2s';

				var fade = document.createElement('div');
				fade.style.height = '100%';
                fade.style.maxHeight = '150px';
				fade.style.width = '100%';
				fade.style.position = 'absolute';
				fade.style.bottom = 0;
				this.fadeElm = fade;

				var colour = this.getParentBGColour(elm);
                fade.style.background = 'linear-gradient(to bottom, '+this.makeTransparent(colour)+', '+colour+')';

                while (elm.firstChild) {
					var c = elm.firstChild;
					elm.removeChild(c);
					newElm.appendChild(c);
				}
				elm.appendChild(newElm);
				newElm.appendChild(fade);
				newElm.style.height = (this.policy.hideHeight || 0) + 'px';
			}
		}
	},
	makeTransparent: function(colour) {
		return (colour || '').replace(/,[0-9\.]+\)/,',0)');
	},
    getParentBGColour : function (elm) {
		var bc;
        while (this.isTransparent(bc = this.colourToRGBA(window.getComputedStyle(elm).getPropertyValue('background-color')))) {
            if (elm.tagName === 'BODY') {
                this.log("no colour - assume white");
                return 'rgba(255,255,255,0)';
            }
            elm = elm.parentNode;
        }
        this.log('found color: '+bc);
        return bc;
	},
	colourToRGBA : function(hex, alpha) {
		if (!hex) {
			return 'rgba(0,0,0,0)';
		}
		hex = hex.replace(/\s+/g,'').toLowerCase();
		if (hex.substring(0,5) == 'rgba(') {
			return hex;
		}
		var r,g,b;
		if (hex.substring(0,1) == '#') {
            var len = hex.length == 7 ? 2 : 1;
            r = parseInt(hex.slice(1, len + 1), 16);
			g = parseInt(hex.slice(len + 1, 2 * len + 1), 16);
			b = parseInt(hex.slice(2 * len + 1, 3 * len + 1), 16);
        } else if (hex.substring(0,4) == 'rgb(') {
			c = hex.substring(4,hex.length-1).split(',');
			r = parseInt(c[0].trim());
			g = parseInt(c[1].trim());
			b = parseInt(c[2].trim());
		} else {
			//assume transparent
			r = b = g = alpha = 0;
		}
		return "rgba(" + r + "," + g + "," + b + "," + (alpha || 1) + ")";
	},
	isTransparent : function(colour) {
		if (!colour) return true;
        var c = this.colourToRGBA(colour);
        return c.endsWith(',0)');
	},
	showContent : function() {
		if (this.hideElm) {
	   		this.hideElm.style.height = "auto";
            this.hideElm.style.overflow = "visible";
            this.hideElm.removeChild(this.fadeElm);
		}
	},
	incrementViews : function() {
		if (this.policy.displayStyle === 'embedded') return;
		var displayed = Number(this.getCookie("_mdisp")) || 0;
		displayed++;
		var capHours = 24;
		if (this.policy.ipFrequencyCapPeriod) {
			if (this.policy.ipFrequencyCapPeriod >= 1000 * 60 * 60) {
				capHours = this.policy.ipFrequencyCapPeriod / 1000 / 60 / 60;
			} else {
				capHours = this.policy.ipFrequencyCapPeriod;
			}
		}
		this.setCookie("_mdisp", displayed, capHours);
	},
	callbackLoginCheck : function(func) {
		this.loggedInCheck = func;
		this.eventPush(this.win, 'load', this.closure(this, this.doLoginCheck));
		this.log("got login check");
	},
	doLoginCheck : function() {
		if (!this.initialised) {
			this.initialised = true;
			if (typeof this.loggedInCheck === 'function') {
				this.loggedIn = this.loggedInCheck();
			}
			if (this.segments.isControlGroup()) {
				_olay.log("Assigned to control group - all overlays will be suppressed");
			}
			this.getPolicies();
		}
	},
	getPolicies : function() {
		var param = this.loggedIn == null ? "" : "&loggedIn="+ (this.loggedIn ? 1 : 0);
		var id = this.muu != null && this.muu != 'null' ? "&_muu="+this.muu : "";
		var u = '//'
			+ this.host
			+ '/track?jsonp=_olay.callbackAdTracking&embed=1&layouts=0&layoutType=overlay&version=3'
			+ '&agencyId=' + this.agency + '&siteId=' + this.site + '&_mpl=' + this.mpl
			+ param + id
			+ '&referer=' + encodeURIComponent(this.page)
			+ '&trk=' + encodeURIComponent(this.getTParams());
		this.script(u);
	},
	getTParams : function() {
		var t = this.appendParamTrk('');
		t = this.appendCkTrk(t);
		t += this.affiliateSite ? "&_ms=" + this.affiliateSite : "";
		t += this.msai ? "&_msai=" + this.msai : "";
		t += this.msd ? "&_msd=" + this.msd : "";
		var mp = this.getCookie("_mp");
		t += mp != null ? "&_mp=" + mp : "";
		return t;
	},
	areCookiesEnabled : function() {
		var r = this.host && (this.host.indexOf('127.0.0.1') == 0 || this.host.indexOf('192.168.') == 0);
		this.setCookie("mgtest", "v", 24);
		if (this.getCookie("mgtest")) {
			r = true;
			this.setCookie("mgtest", "", -24);
		}
		return r;
	},
	isDisabled : function() {
		var url = this.win.location.href;
		var disabled = url.indexOf("_mout=1") != -1;
		if (disabled) {
			this.setCookie("_mout", "1", 24);
		}
		if (!this.mpl || this.mpl != 'wlq97d4t') {
			disabled |= this.getCookie("_mout");
		}
		if (this.policy) {
			disabled |= this.getCookie("_mout_"+this.policy.entityId);
		}
		if (disabled) this.log("optout present");
		return disabled;
	},
	suppress : function(_pol) {
		if (this.onscreen) {this.log("overlay already on screen"); return true;}
		if (_pol && _pol.companionDisplayStyle && _pol.companionDisplayStyle == 'before' && this.disableCompanion) {this.log("companion already displayed"); return true;}
		if (this.disable) {this.log("overlay already displayed or suppressed"); return true;}
		if (this.overrideSuppression) {this.log("ignoring suppression"); return false;}
		if (this.autoTrigger === 0) {this.log("autoTrigger disabled"); return true;}
		if (this.checkDFP()) {this.log("DFP overlay already served"); return true;}
		return this.isDisabled();
	},
	checkDFP : function() {
		if (!this.doCheckDFP) return false;
		var suppress = 0;
		if (typeof this.win["DoNotDisplayIA"] == 'number') return suppress;
		try {
			if (this.win.googletag && this.win.googletag.apiReady && this.win.googletag.pubadsReady) {
				this.win.googletag.pubads().getSlots().forEach(function (_slot) {
					suppress |= _slot.getOutOfPage() && _slot.getResponseInformation() != null;
					_slot.getSizes().forEach(function (_size) {
						suppress |= _size.getWidth() == 320 && _slot.getOutOfPage();
					});
				});
			}
		} catch(e) {}
		return suppress;
	},
	setAffiliateSite : function() {
		var s = this.getQueryParam("_ms", "site_id");
		var cs = this.getCookie("_ms");
		var sd = this.getQueryParam("_msd");
		var csd = this.getCookie("_msd");
		var sai = this.getQueryParam("_msai");
		var csai = this.getCookie("_msai");
		if (s) {
			this.affiliateSite = s;
			this.setCookie("_ms", s, 30 * 24);
			if (sd){
				this.msd = sd;
				this.setCookie("_msd", sd, 30 * 24);
			} else {
				this.setCookie("_msd", '', 0);
			}
			if (sai){
				this.msai = sai;
				this.setCookie("_msai", sai, 30 * 24);
			} else {
				this.setCookie("_msai", '', 0);
			}
		} else if (cs) {
			// clean up
			var idx = cs.indexOf("?");
			if (idx >= 0) {
				cs = cs.substring(0, idx);
			}
			this.affiliateSite = cs;
			if (csd){
				this.msd = csd;
			}
			if (csai){
				this.msai = csai;
			}
		} else if (this.site) {
			this.setCookie("_ms", this.site, 30 * 24);
		}
	},
	initOnScroll: function() {
		this.eventPush(this.win, 'scroll', this.closure(this,this.handleScroll), true);
		if (this.policies.scroll && this.policies.scroll.onDemandTarget) {
            var names = [];
            Array.prototype.push.apply(names, this.policies.scroll.onDemandTarget.split(','));
			var options = {
				root: null,
				rootMargin: '0px',
				threshold: 1.0
			};
			var observer = new IntersectionObserver(function (entries, observer) {
				entries.forEach(function (_e) {
					if (_e.isIntersecting) {
						var name = _e.target.id ? '#'+_e.target.id : (_e.target.className ? '.'+_e.target.className : _olay.policies.scroll.onDemandTarget);
						_olay.log(name + " now visible");
						_olay.policy = _olay.policies.scroll;
						_olay.displayOnEvent();
					}
				})
			}, options);
			if (observer != null) {
				for (var i = 0; i < names.length; i++) {
					var elms = this.getAll(names[i]);
					for (var j=0; j < elms.length; j++){
						observer.observe(elms[j]);
					}
				}
			}
		}

	},
    initOnIdle: function() {
        this.eventPush(this.win, 'scroll', this.closure(this,this.resetIdleTimer), true);
        this.eventPush(this.win, 'mousemove', this.closure(this,this.resetIdleTimer), true);
        this.eventPush(this.win, 'keypress', this.closure(this,this.resetIdleTimer), true);
    },
	handleScroll: function(e) {
		var docH = this.doc.documentElement.scrollHeight || this.doc.body.scrollHeight;
		var scrollTop = this.doc.documentElement.scrollTop || this.doc.body.scrollTop;
		var winH = this.win.innerHeight;
		var percent = this.policies.scroll.scrollPercent || 80;
		if (docH > winH && (scrollTop / (docH - winH) * 100 >= percent)) {
			this.policy = this.policies.scroll;
			this.log("received scroll event");
			this.displayOnEvent();
		}
	},
	initOnExit: function() {
		this.eventPush(this.doc.documentElement, 'mouseout', this.closure(this,this.handleMouseOut), true);
		this.eventPush(this.doc.documentElement, 'mouseleave', this.closure(this,this.handleMouseleave), true);
		this.eventPush(this.doc.documentElement, 'mouseenter', this.closure(this,this.handleMouseenter), true);
		this.eventPush(this.doc.documentElement, 'keydown', this.closure(this,this.handleKeydown), true);
	},
	initOnDemand: function() {
		//traverse dom
		//this.doc
		if (this.policies.demand) {
			var names = [];
			names.push("#olay-on-demand");
			if (this.policies.demand.onDemandTarget) {
				Array.prototype.push.apply(names, this.policies.demand.onDemandTarget.split(','));
			}
			var clkFunc = this.closure(this, this.handleOnDemand);
			names.forEach(this.closure(this, function(_val) {
				var elms = this.getAll(_val);
				for (var i=0; i < elms.length; i++){
					this.attachOnDemandClick(elms[i], clkFunc);
				}
			}));
		}
	},
	attachOnDemandClick: function(elm, clkFunc) {
		this.eventRemove(elm, 'click', clkFunc);
		this.eventPush(elm, 'click', clkFunc);
	},
	handleOnDemand : function() {
		if (this.policies.demand) {
			this.policy = this.policies.demand;
			this.display(true);
		}
	},
	handleUnload: function(e) {
		this.log("received unload exit event");
		this.policy = this.policies.exit;
		this.displayOnEvent();
		var confirmationMessage = "computer says no";
		e = e ? e : window.event;
		if (e) e.returnValue = confirmationMessage;
		return confirmationMessage;
	},
	handleMouseOut: function(e) {
		e = e ? e : window.event;
		var from = e.relatedTarget || e.toElement;
		if(from) return;
		if (e.clientY > 20) return;
		this.log("received mouseout exit event");
		this.policy = this.policies.exit;
		clearTimeout(this.exitTimer);
		this.exitTimer = setTimeout(this.closure(this,this.displayOnEvent), 200);
	},
	handleMouseleave: function(e) {
		if (e.clientY > 20) return;
		this.log("received mouseleave exit event");
		this.policy = this.policies.exit;
		clearTimeout(this.exitTimer);
		this.exitTimer = setTimeout(this.closure(this,this.displayOnEvent), 200);
	},
	handleMouseenter: function(e) {
		if (this.exitTimer) {
			clearTimeout(this.exitTimer);
			this.exitTimer = null;
		}
	},
	handleKeydown: function(e) {
		if (this.disableKeyExit || this.suppress()) return;
		else if(!e.metaKey || e.keyCode !== 76) return;
		this.log("received key exit event");
		this.disableKeyExit = true;
		this.policy = this.policies.exit;
		clearTimeout(this.exitTimer);
		this.exitTimer = setTimeout(this.closure(this,this.displayOnEvent), 200);
	},
	css : function(css) {
		var style = this.doc.createElement('style');
		style.type = 'text/css';
		this.doc.getElementsByTagName("head")[0].appendChild(style);
		if (style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			style.innerHTML = css;
		}
	},
	setParent : function() {
		//check friendly iframe
		if (typeof inDapIF !== 'undefined' && inDapIF) {
			this.win = window.parent;
		} else {
			try {
				if (this.bustIframe && window.self !== window.top && window.top.document) {
					this.win = window.top;
				} else {
					this.win = window;
				}
			} catch (e) {
				this.win = window;
			}
		}
		this.doc = this.win.document;
		this.win._olay = this;
	},
	setDclTime : function() {
		try {
			var t = performance.timing;
			if (t.domContentLoadedEventStart > 0) {
				var dcl = t.domContentLoadedEventStart - t.domLoading;
				this.dclTime = t.domContentLoadedEventStart;
				this.log("domContentLoaded at " + dcl + "ms");
			} else {
				this.dclTime = new Date().getTime();
				this.eventPush(this.win, 'load', this.closure(this,this.setDclTime));
			}
		} catch(e){
			this.dclTime = new Date().getTime();
		}
	},
	init : function(mgo) {
		this.cdn = mgo.cdn || 'd39ion77s0ucuz.cloudfront.net';
		this.bustIframe = !(mgo.bustIframe === false);
		this.host = mgo.host;
		this.site = mgo.site;
		this.mpl = mgo.place;
		this.affiliateSite = mgo.site;
		this.agency = mgo.agency;
		this.loggedIn = mgo.loggedIn;
		this.setParent();
		this.setCookieDomain();
		this.startDebug();
		this.setDclTime();
		this.page = this.win.location.href;
		if (mgo.clientId) {
			this.clientId = mgo.clientId;
		}
		if (mgo.ma) {
			this.ma = mgo.ma;
		}
		if (mgo.ml) {
			this.ml = mgo.ml;
		}
		if (mgo.override) {
			this.overrideSuppression = mgo.override;
		}
		if (mgo.onExit) {
			this.initOnExit();
		}
		if (typeof mgo.eventActivated != 'undefined'){
			this.eventActivated = mgo.eventActivated;
		}
		this.muu = this.getQueryParam("_muu", "muu") || this.getCookie("_muu");
		this.setAffiliateSite();
		this.setCompanionMicrositeCookie();
		this.storeParamTrk();
		this.segments.load();
		this.isIOS = /iphone|ipod|ipad/.test( window.navigator.userAgent.toLowerCase() );
		this.isSmallScreen = this.getWindowWidth() <= 414 || this.getWindowHeight() <= 414 ;
		if (this.areCookiesEnabled() && !mgo.skipPolicies) {
			if (this.loggedIn == null) {
				this.script('//' + this.host + '/login-check?jsonp=_olay.callbackLoginCheck&site=' + this.site + '&mpl=' + this.mpl,
					true, null, this.closure(
					this, this.callbackLoginCheck,
					function() {
						return this.loggedIn
					}));
			} else {
				this.eventPush(this.win, 'load', this.closure(this, this.getPolicies));
			}
		} else {
			this.initialiseEvents();
		}
	},
	showDisclaimer: function() {
		var src="//"+this.host+"/m/disclaimer/?flt=publisher_text&fl="+this.layoutId;
		try{
			var d = document.createElement('iframe');
			d.style.position="fixed";
			d.style.left=d.style.top=d.style.border=d.marginwidth=d.marginheight=d.frameborder=0;
			d.scrolling="no";
			d.width=d.height="100%";
			d.style.zIndex="2147483648";
			d.style.backgroundColor="transparent";
			d.src=src;
			d.style.visibility='hidden';
			this.doc.body.appendChild(d);
			d.onload=function() {d.style.visibility='visible';}
			function removeDisclaimer(event){
				if (event.data=="removeDisclaimer"){
					document.body.removeChild(d);
					top.removeEventListener("message", removeDisclaimer, false);
				}
			}
			top.addEventListener("message", removeDisclaimer, false);
		} catch(e) {
			window.open(src);
		}
	},
	initialiseEvents: function() {
		if (typeof _mev != 'undefined') {
			if (this.win != window) {
				if (typeof this.win._mev != 'undefined') {
					Array.prototype.push.apply(_mev,this.win._mev);
				}
				this.win._mev = _mev;
			}
			_mev.isInitialised = true;
			_mev.push = function(){
				if (arguments){
					for (var i =0; i < arguments.length; i++) {
						_olay.processEvent(arguments[i]);
						if (typeof _ib != 'undefined') {
							_ib.processEvent(arguments[i]);
						}
					}
				}
				return Array.prototype.push.apply(this,arguments);
			};
			for (var i = 0; i <  _mev.length; i++) {
				this.processEvent(_mev[i]);
			}
			this.log("events initialised");
		}
		//setup listener
		this.eventPush(this.win, 'message', this.closure(this, this.listener));
	},
	setCompanionMicrositeCookie: function() {
		var _ma = this.nullOrNumber(this.getQueryParam("_ma"));
		var _ms = this.nullOrNumber(this.getQueryParam("_ms"));
		if (_ma && _ms) {
			var _ml = this.nullOrNumber(this.getQueryParam("_ml"));
			var _msd = this.getQueryParam("_msd");
			var _msai = this.getQueryParam("_msai");
			var _mflt = this.getQueryParam("_mflt");
			var _mfl = this.nullOrNumber(this.getQueryParam("_mfl"));
			var _mfln = this.getQueryParam("_mfln");
			var ck = _ms + "|" + this.nullToEmpty(_ml) + "|" + this.nullToEmpty(_msai) + "|" + this.nullToEmpty(_msd) + "|" + this.nullToEmpty(_mflt) + "|" + this.nullToEmpty(_mfl) + "|"
					+ this.nullToEmpty(_mfln);
			this.setCookie("_magnet" + _ma, ck, 30);
			this.setCookie("_magnetOverride", _ma, 1);
		}
	},
	nullOrNumber : function(s) {
		if (s) {
			var r = new RegExp("^[0-9]+$", "ig");
			if (r.test(s))
				return s;
		}
		return null;
	},
	nullToEmpty : function(s) {
		return s || "";
	},
	processEvent: function(ev) {
		switch (ev[0]) {
			case 'page':
				this.action('trk', ev[1], null, null, null, true);
				break;
			case 'sale':
			case 'trk':
				if (ev.length > 2) {
					this.action('trk', ev[1], ev[2], (ev.length > 3 ? ev[3] : null), (ev.length > 4 ? ev[4] : null), false);
				}
				break;
			case 'trkpixel':
				if (ev.length > 2) {
					this.actionPixel('trk', ev[1], (ev.length > 2 ? ev[2] : null), (ev.length > 3 ? ev[3] : null), (ev.length > 4 ? ev[4] : null));
				}
				break;
			case 'autoTrigger':
				// if on, can't turn off;
				this.autoTrigger |= ev[1];
				this.log('autoTrigger ' + (this.autoTrigger ? 'en' :'dis') + 'abled');
				this.evaluatePolicies();
				break;
			case 'onDemand':
				this.setupDemand(ev[1]);
				break;
			case 'displayOnDemand':
				this.handleOnDemand();
				break;
			case 'displayFromCompanion':
				this.events.companionClick();
				this.handleOnDemand();
				break;
			case 'onLoad':
				this.setupNavigation(ev[1]);
				break;
			case 'onExit':
				this.setupExit(ev[1]);
				break;
			case 'bustIframe':
				this.bustIframe = (ev[1] === true);
				this.setParent();
				break;
			case 'viewURL':
				this.events.runtimeImpressionURL = ev[1];
				break;
			case 'clickURL':
				this.events.runtimeClickURL = ev[1];
				break;
			case 'checkDFP':
				this.doCheckDFP = (ev[1] === true);
				break;
		}
	},
	action: function (ev, ev_ma, ev_mact, ev_val, ev_id, trkImp) {
		try {
			var url = '//' + this.host + '/'+ev+'?_ma='+ev_ma+'&_ms='+this.affiliateSite
				+ '&resp=iframe'
				+ (ev_mact!=null ? '&_mact='+ev_mact : '')
				+ (ev_val!=null ? '&_mval='+encodeURIComponent(ev_val) : '')
				+ (ev_id!=null ? '&_mtrans='+encodeURIComponent(ev_id) : '')
				+ (this.page? '&referer='+encodeURIComponent(this.page) : '')
				+ (this.muu != null ? '&_muu='+this.muu : '')
				+ (this.msd != null ? '&_msd='+this.msd : '')
				+ (this.msai != null ? '&_msai='+this.msai : '')
				+ (this.mpl ? '&_mpl='+this.mpl : '')
				+ (this.policy ? '&_mp='+this.policy.entityId : '')
				+ (trkImp ? '&imp=1' : '');
			var frm = document.createElement('iframe');
			frm.style.width = frm.style.height = 0;
			frm.style.display = 'none';
			frm.src = url;
			var func = function(e) {
				_olay.log("event " + e.type + ": " + this.src, e.type == 'load');
			};
			frm.onload=func;
			frm.onerror=func;
			this.doc.body.appendChild(frm);
		} catch(e){
			_olay.log(e);
		}
	},
	actionPixel: function (ev, ev_mpxl, ev_val, ev_id, ev_txt) {
		try {
			var url = '//' + this.host + '/'+ev+'?_mpxl='+ev_mpxl
				+ '&resp=iframe'	
				+ (ev_val!=null ? '&_mval='+encodeURIComponent(ev_val) : '')
				+ (ev_id!=null ? '&_mtrans='+encodeURIComponent(ev_id) : '')
				+ (ev_txt!=null ? '&_mtxt='+encodeURIComponent(ev_txt) : '')
				+ (this.page? '&referer='+encodeURIComponent(this.page) : '')
				+ (this.muu != null ? '&_muu='+this.muu : '');
			var frm = document.createElement('iframe');
			frm.style.width = frm.style.height = 0;
			frm.style.display = 'none';
			frm.src = url;
			var func = function(e) {
				_olay.log("event " + e.type + ": " + this.src, e.type == 'load');
			};
			frm.onload=func;
			frm.onerror=func;
			this.doc.body.appendChild(frm);
		} catch(e){
			_olay.log(e);
		}
	},
	resetViewCookies : function() {
		this.setCookie("_mst", null, -1);
		this.setCookie("_mi", null, -1);
		this.setCookie("_mo", null, -1);
		this.setCookie("_mdisp", null, -1);
		this.setCookie("_mout", null, -1);
		this.setCookie("_msegments", null, -1);
	},
	startDebug : function(force) {
		this.debug = this.getQueryParam('_mdebug') != null || this.getCookie('_mdebug') != null || force;
		if (this.debug) {
			this.eventPush(this.win, 'load', this.closure(this, this.addLogPanel));
			this.setCookie('_mdebug', 1, 1);
		}
	},
	endDebug : function() {
		this.debug = false;
		if (this.win._mlog) {
			this.rm(this.win._mlog);
			this.win._mlog = null;
		}
		this.setCookie('_mdebug',null ,-365);
	},
	addLogPanel : function() {
		if (!this.win._mlog) {
			var elm = document.createElement('div');
			elm.style.cssText = 'position:fixed; z-index: 2147483648; bottom:10px; left:10px; padding: 5px; background-color:rgba(0,0,0,0.8); box-shadow:0 0 5px rgba(0,0,0,0.25); border-radius:2px; width: 300px; height: 300px; font-size: 10px; color:#FFFFFF; font-family:courier; overflow-y:auto; line-height:12px;';
			elm.innerHTML = "> debug log started<br>>> <a href='' onclick='_olay.endDebug();return false;' style='color:#98d8ff;'>end debug session</a><br>" +
				">> <a href='' onclick='_olay.resetViewCookies();return false;' style='color:#98d8ff;'>reset cookies</a><br>";
			this.win._mlog = elm;
			try {
				this.doc.body.appendChild(elm);
			} catch(e){};
		}
		this.eventPush(this.doc, 'visibilitychange', function() {
			var state = 'unknown';
			try {
				state = _olay.doc.visibilityState;
			} catch(e){}
			_olay.log("visibilitychange: " + state );
		});
		try {
			this.logger.forEach(function (_e) {
				_olay.log(_e[0], _e[1], _e[2]);
			});
		} catch(e){}
	},
	loadCompanion: function(a, b, p) {
		if (this.floater) {
			this.rm(this.floater);
			this.floater = null;
		}
		this.floater = this.doc.createElement('div');
		this.floater.id = new Date().getTime() + '-' + Math.random();
		this.doc.body.appendChild(this.floater);
		this.win['__ib'] = this.win['__ib'] || {
			host : this.host,
			site : this.affiliateSite,
			agency : this.agency
		};
		_mev.push(['loadPlacement',{target: ''+this.floater.id, ma: '' + a, mgrp: '' + b, w: 120, h: 120, position: p, mpl: this.mpl, policy: this.policy }]);
		if (typeof _ib == 'undefined') {
			this.script('//'+this.cdn+'/in-banner/loader.js?v=3', true);
		}
	}
};
var _mev = _mev || [];
_olay.init(_mgo);