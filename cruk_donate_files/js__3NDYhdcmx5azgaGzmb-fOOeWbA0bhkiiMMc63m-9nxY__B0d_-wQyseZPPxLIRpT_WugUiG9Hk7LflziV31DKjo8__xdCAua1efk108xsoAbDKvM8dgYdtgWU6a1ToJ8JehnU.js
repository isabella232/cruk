/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});
;/*})'"*/
;/*})'"*/
/*!
 * jQuery Form Plugin
 * version: 3.09 (16-APR-2012)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses:
 *    http://malsup.github.com/mit-license.txt
 *    http://malsup.github.com/gpl-license-v2.txt
 */
/*global ActiveXObject alert */
;(function($) {
"use strict";

/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });
    
    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });
    
    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * Feature detection
 */
var feature = {};
feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
feature.formdata = window.FormData !== undefined;

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }
    
    var method, action, url, $form = this;

    if (typeof options == 'function') {
        options = { success: options };
    }

    method = this.attr('method');
    action = this.attr('action');
    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: method || 'GET',
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var traditional = options.traditional;
    if ( traditional === undefined ) {
        traditional = $.ajaxSettings.traditional;
    }
    
    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
        options.extraData = options.data;
        qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
        q = ( q ? (q + '&' + qx) : qx );
    }    
    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || options;    // jQuery 1.4+ supports scope context 
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    // are there files to upload?
    var fileInputs = $('input:file:enabled[value]', this); // [value] (issue #113)
    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
        // hack to fix Safari hang (thanks to Tim Molendijk for this)
        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
        if (options.closeKeepAlive) {
            $.get(options.closeKeepAlive, function() {
                fileUploadIframe(a);
            });
        }
          else {
            fileUploadIframe(a);
          }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
        fileUploadXhr(a);
    }
    else {
        $.ajax(options);
    }

    // clear element array
    for (var k=0; k < elements.length; k++)
        elements[k] = null;

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // This is a utility function to fix deep serialization issues when doing file uploads
    // eg params show up as "[object Object]" rather than what it should be
    function formDeepSerialize(extraData){
      var serialized = $.param(extraData).replace(/\+/g, '%20').split('&');
      var result = {};
      var n;
      for(var i=0, l=serialized.length; i < l; i++){
        n = serialized[i].split('=')
        result[decodeURIComponent(n[0])] = decodeURIComponent(n[1])
      }
      return result;
    }

     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
        var formdata = new FormData();

        for (var i=0; i < a.length; i++) {
            formdata.append(a[i].name, a[i].value);
        }

        if (options.extraData) {
            var serializedData = formDeepSerialize(options.extraData);
            for (var p in serializedData)
                if (serializedData.hasOwnProperty(p))
                    formdata.append(p, serializedData[p]);
        }

        options.data = null;

        var s = $.extend(true, {}, $.ajaxSettings, options, {
            contentType: false,
            processData: false,
            cache: false,
            type: 'POST'
        });
        
        if (options.uploadProgress) {
            // workaround because jqXHR does not expose upload property
            s.xhr = function() {
                var xhr = jQuery.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.onprogress = function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position; /*event.position is deprecated*/
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                        }
                        options.uploadProgress(event, position, total, percent);
                    };
                }
                return xhr;
            };
        }

        s.data = null;
          var beforeSend = s.beforeSend;
          s.beforeSend = function(xhr, o) {
              o.data = formdata;
            if(beforeSend)
                beforeSend.call(o, xhr, options);
        };
        $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var useProp = !!$.fn.prop;

        if ($(':input[name=submit],:input[id=submit]', form).length) {
            // if there is an input with a name or id of 'submit' then we won't be
            // able to invoke the submit fn on the form (at least not x-browser)
            alert('Error: Form elements must not have name or id of "submit".');
            return;
        }
        
        if (a) {
            // ensure that every serialized input is still enabled
            for (i=0; i < elements.length; i++) {
                el = $(elements[i]);
                if ( useProp )
                    el.prop('disabled', false);
                else
                    el.removeAttr('disabled');
            }
        }

        s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        id = 'jqFormIO' + (new Date().getTime());
        if (s.iframeTarget) {
            $io = $(s.iframeTarget);
            n = $io.attr('name');
            if (!n)
                 $io.attr('name', id);
            else
                id = n;
        }
        else {
            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        }
        io = $io[0];


        xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;
                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error)
                    s.error.call(s.context, xhr, e, status);
                if (g)
                    $.event.trigger("ajaxError", [xhr, s, e]);
                if (s.complete)
                    s.complete.call(s.context, xhr, e);
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            return;
        }
        if (xhr.aborted) {
            return;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }
        
        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;

        function getDoc(frame) {
            var doc = frame.contentWindow ? frame.contentWindow.document : frame.contentDocument ? frame.contentDocument : frame.document;
            return doc;
        }
        
        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr('target'), a = $form.attr('action');

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }
            
            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized')
                        setTimeout(checkState,50);
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle)
                        clearTimeout(timeoutHandle);
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                            extraInputs.push(
                                $('<input type="hidden" name="'+n+'">').attr('value',s.extraData[n])
                                    .appendTo(form)[0]);
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                    if (io.attachEvent)
                        io.attachEvent('onload', cb);
                    else
                        io.addEventListener('load', cb, false);
                }
                setTimeout(checkState,15);
                form.submit();
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            try {
                doc = getDoc(io);
            }
            catch(ex) {
                log('cannot access response document: ', ex);
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut)
                    return;
            }
            if (io.detachEvent)
                io.detachEvent('onload', cb);
            else    
                io.removeEventListener('load', cb, false);

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml)
                    s.dataType = 'xml';
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowerCase();
                var scr = /(json|script|text)/.test(dt);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                        }
                        else if (b) {
                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
                        }
                    }
                }
                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (e) {
                    status = 'parsererror';
                    xhr.error = errMsg = (e || status);
                }
            }
            catch (e) {
                log('error caught: ',e);
                status = 'error';
                xhr.error = errMsg = (e || status);
            }

            if (xhr.aborted) {
                log('upload aborted');
                status = null;
            }

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (status === 'success') {
                if (s.success)
                    s.success.call(s.context, data, 'success', xhr);
                if (g)
                    $.event.trigger("ajaxSuccess", [xhr, s]);
            }
            else if (status) {
                if (errMsg === undefined)
                    errMsg = xhr.statusText;
                if (s.error)
                    s.error.call(s.context, xhr, status, errMsg);
                if (g)
                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
            }

            if (g)
                $.event.trigger("ajaxComplete", [xhr, s]);

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            if (s.complete)
                s.complete.call(s.context, xhr, status);

            callbackProcessed = true;
            if (s.timeout)
                clearTimeout(timeoutHandle);

            // clean up
            setTimeout(function() {
                if (!s.iframeTarget)
                    $io.remove();
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            /*jslint evil:true */
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                if ($.error)
                    $.error('parsererror');
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);
    
    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    if ( options.delegation ) {
        $(document)
            .off('submit.form-plugin', this.selector, doAjaxSubmit)
            .off('click.form-plugin', this.selector, captureSubmittingElement)
            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
        return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
};

// private event handlers    
function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
        e.preventDefault();
        $(this).ajaxSubmit(options);
    }
}
    
function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is(":submit,input:image"))) {
        // is this a child element of the submit el?  (ex: a span within a button)
        var t = $el.closest(':submit');
        if (t.length === 0) {
            return;
        }
        target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
        if (e.offsetX !== undefined) {
            form.clk_x = e.offsetX;
            form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
}


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic, elements) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    if (!els) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(!el.disabled && form.clk == el) {
                a.push({name: n, value: $(el).val(), type: el.type });
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            if (elements) 
                elements.push(el);
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (feature.fileapi && el.type == 'file' && !el.disabled) {
            if (elements) 
                elements.push(el);
            var files = el.files;
            if (files.length) {
                for (j=0; j < files.length; j++) {
                    a.push({name: n, value: files[j], type: el.type});
                }
            }
            else {
                // #180
                a.push({ name: n, value: '', type: el.type });
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            if (elements) 
                elements.push(el);
            a.push({name: n, value: v, type: el.type, required: el.required});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && !input.disabled && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array)
            $.merge(val, v);
        else
            val.push(v);
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
    return this.each(function() {
        $('input,select,textarea', this).clearFields(includeHidden);
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
        else if (includeHidden) {
            // includeHidden can be the valud true, or it can be a selector string
            // indicating a special test; for example:
            //  $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ( (includeHidden === true && /hidden/.test(t)) ||
                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) )
                this.value = '';
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
    if (!$.fn.ajaxSubmit.debug) 
        return;
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
    if (window.console && window.console.log) {
        window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
        window.opera.postError(msg);
    }
}

})(jQuery);

;/*})'"*/
;/*})'"*/
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,m,g,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,m=_.height,g=_.offset,v=t.extend({},g),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=m:"center"===e.at[1]&&(v.top+=m/2),a=i(k.at,p,m),v.left+=a[0],v.top+=a[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,T=d+_+s(this,"marginBottom")+w.height,C=t.extend({},v),M=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?C.left-=u:"center"===e.my[0]&&(C.left-=u/2),"bottom"===e.my[1]?C.top-=d:"center"===e.my[1]&&(C.top-=d/2),C.left+=M[0],C.top+=M[1],t.support.offsetFractions||(C.left=h(C.left),C.top=h(C.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](C,{targetWidth:p,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:T,offset:[a[0]+M[0],a[1]+M[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=g.left-C.left,s=i+p-u,n=g.top-C.top,a=n+m-d,h={target:{element:b,left:g.left,top:g.top,width:p,height:m},element:{element:c,left:C.left,top:C.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>m&&m>r(n+a)&&(h.vertical="middle"),h.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(C,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-o-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-o-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>c?(s=t.top+p+f+m+e.collisionHeight-o-a,t.top+p+f+m>c&&(0>s||r(c)>s)&&(t.top+=p+f+m)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-h,t.top+p+f+m>u&&(i>0||u>r(i))&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);
;/*})'"*/
;/*})'"*/
(function ($) {

/**
 * Provides Ajax page updating via jQuery $.ajax (Asynchronous JavaScript and XML).
 *
 * Ajax is a method of making a request via JavaScript while viewing an HTML
 * page. The request returns an array of commands encoded in JSON, which is
 * then executed to make any changes that are necessary to the page.
 *
 * Drupal uses this file to enhance form elements with #ajax['path'] and
 * #ajax['wrapper'] properties. If set, this file will automatically be included
 * to provide Ajax capabilities.
 */

Drupal.ajax = Drupal.ajax || {};

Drupal.settings.urlIsAjaxTrusted = Drupal.settings.urlIsAjaxTrusted || {};

/**
 * Attaches the Ajax behavior to each Ajax form element.
 */
Drupal.behaviors.AJAX = {
  attach: function (context, settings) {
    // Load all Ajax behaviors specified in the settings.
    for (var base in settings.ajax) {
      if (!$('#' + base + '.ajax-processed').length) {
        var element_settings = settings.ajax[base];

        if (typeof element_settings.selector == 'undefined') {
          element_settings.selector = '#' + base;
        }
        $(element_settings.selector).each(function () {
          element_settings.element = this;
          Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
        });

        $('#' + base).addClass('ajax-processed');
      }
    }

    // Bind Ajax behaviors to all items showing the class.
    $('.use-ajax:not(.ajax-processed)').addClass('ajax-processed').each(function () {
      var element_settings = {};
      // Clicked links look better with the throbber than the progress bar.
      element_settings.progress = { 'type': 'throbber' };

      // For anchor tags, these will go to the target of the anchor rather
      // than the usual location.
      if ($(this).attr('href')) {
        element_settings.url = $(this).attr('href');
        element_settings.event = 'click';
      }
      var base = $(this).attr('id');
      Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
    });

    // This class means to submit the form to the action using Ajax.
    $('.use-ajax-submit:not(.ajax-processed)').addClass('ajax-processed').each(function () {
      var element_settings = {};

      // Ajax submits specified in this manner automatically submit to the
      // normal form action.
      element_settings.url = $(this.form).attr('action');
      // Form submit button clicks need to tell the form what was clicked so
      // it gets passed in the POST request.
      element_settings.setClick = true;
      // Form buttons use the 'click' event rather than mousedown.
      element_settings.event = 'click';
      // Clicked form buttons look better with the throbber than the progress bar.
      element_settings.progress = { 'type': 'throbber' };

      var base = $(this).attr('id');
      Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
    });
  }
};

/**
 * Ajax object.
 *
 * All Ajax objects on a page are accessible through the global Drupal.ajax
 * object and are keyed by the submit button's ID. You can access them from
 * your module's JavaScript file to override properties or functions.
 *
 * For example, if your Ajax enabled button has the ID 'edit-submit', you can
 * redefine the function that is called to insert the new content like this
 * (inside a Drupal.behaviors attach block):
 * @code
 *    Drupal.behaviors.myCustomAJAXStuff = {
 *      attach: function (context, settings) {
 *        Drupal.ajax['edit-submit'].commands.insert = function (ajax, response, status) {
 *          new_content = $(response.data);
 *          $('#my-wrapper').append(new_content);
 *          alert('New content was appended to #my-wrapper');
 *        }
 *      }
 *    };
 * @endcode
 */
Drupal.ajax = function (base, element, element_settings) {
  var defaults = {
    url: 'system/ajax',
    event: 'mousedown',
    keypress: true,
    selector: '#' + base,
    effect: 'none',
    speed: 'none',
    method: 'replaceWith',
    progress: {
      type: 'throbber',
      message: Drupal.t('Please wait...')
    },
    submit: {
      'js': true
    }
  };

  $.extend(this, defaults, element_settings);

  this.element = element;
  this.element_settings = element_settings;

  // Replacing 'nojs' with 'ajax' in the URL allows for an easy method to let
  // the server detect when it needs to degrade gracefully.
  // There are five scenarios to check for:
  // 1. /nojs/
  // 2. /nojs$ - The end of a URL string.
  // 3. /nojs? - Followed by a query (with clean URLs enabled).
  //      E.g.: path/nojs?destination=foobar
  // 4. /nojs& - Followed by a query (without clean URLs enabled).
  //      E.g.: ?q=path/nojs&destination=foobar
  // 5. /nojs# - Followed by a fragment.
  //      E.g.: path/nojs#myfragment
  this.url = element_settings.url.replace(/\/nojs(\/|$|\?|&|#)/g, '/ajax$1');
  // If the 'nojs' version of the URL is trusted, also trust the 'ajax' version.
  if (Drupal.settings.urlIsAjaxTrusted[element_settings.url]) {
    Drupal.settings.urlIsAjaxTrusted[this.url] = true;
  }

  this.wrapper = '#' + element_settings.wrapper;

  // If there isn't a form, jQuery.ajax() will be used instead, allowing us to
  // bind Ajax to links as well.
  if (this.element.form) {
    this.form = $(this.element.form);
  }

  // Set the options for the ajaxSubmit function.
  // The 'this' variable will not persist inside of the options object.
  var ajax = this;
  ajax.options = {
    url: ajax.url,
    data: ajax.submit,
    beforeSerialize: function (element_settings, options) {
      return ajax.beforeSerialize(element_settings, options);
    },
    beforeSubmit: function (form_values, element_settings, options) {
      ajax.ajaxing = true;
      return ajax.beforeSubmit(form_values, element_settings, options);
    },
    beforeSend: function (xmlhttprequest, options) {
      ajax.ajaxing = true;
      return ajax.beforeSend(xmlhttprequest, options);
    },
    success: function (response, status, xmlhttprequest) {
      // Sanity check for browser support (object expected).
      // When using iFrame uploads, responses must be returned as a string.
      if (typeof response == 'string') {
        response = $.parseJSON(response);
      }

      // Prior to invoking the response's commands, verify that they can be
      // trusted by checking for a response header. See
      // ajax_set_verification_header() for details.
      // - Empty responses are harmless so can bypass verification. This avoids
      //   an alert message for server-generated no-op responses that skip Ajax
      //   rendering.
      // - Ajax objects with trusted URLs (e.g., ones defined server-side via
      //   #ajax) can bypass header verification. This is especially useful for
      //   Ajax with multipart forms. Because IFRAME transport is used, the
      //   response headers cannot be accessed for verification.
      if (response !== null && !Drupal.settings.urlIsAjaxTrusted[ajax.url]) {
        if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
          var customMessage = Drupal.t("The response failed verification so will not be processed.");
          return ajax.error(xmlhttprequest, ajax.url, customMessage);
        }
      }

      return ajax.success(response, status);
    },
    complete: function (xmlhttprequest, status) {
      ajax.ajaxing = false;
      if (status == 'error' || status == 'parsererror') {
        return ajax.error(xmlhttprequest, ajax.url);
      }
    },
    dataType: 'json',
    type: 'POST'
  };

  // Bind the ajaxSubmit function to the element event.
  $(ajax.element).bind(element_settings.event, function (event) {
    if (!Drupal.settings.urlIsAjaxTrusted[ajax.url] && !Drupal.urlIsLocal(ajax.url)) {
      throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {'!url': ajax.url}));
    }
    return ajax.eventResponse(this, event);
  });

  // If necessary, enable keyboard submission so that Ajax behaviors
  // can be triggered through keyboard input as well as e.g. a mousedown
  // action.
  if (element_settings.keypress) {
    $(ajax.element).keypress(function (event) {
      return ajax.keypressResponse(this, event);
    });
  }

  // If necessary, prevent the browser default action of an additional event.
  // For example, prevent the browser default action of a click, even if the
  // AJAX behavior binds to mousedown.
  if (element_settings.prevent) {
    $(ajax.element).bind(element_settings.prevent, false);
  }
};

/**
 * Handle a key press.
 *
 * The Ajax object will, if instructed, bind to a key press response. This
 * will test to see if the key press is valid to trigger this event and
 * if it is, trigger it for us and prevent other keypresses from triggering.
 * In this case we're handling RETURN and SPACEBAR keypresses (event codes 13
 * and 32. RETURN is often used to submit a form when in a textfield, and 
 * SPACE is often used to activate an element without submitting. 
 */
Drupal.ajax.prototype.keypressResponse = function (element, event) {
  // Create a synonym for this to reduce code confusion.
  var ajax = this;

  // Detect enter key and space bar and allow the standard response for them,
  // except for form elements of type 'text' and 'textarea', where the 
  // spacebar activation causes inappropriate activation if #ajax['keypress'] is 
  // TRUE. On a text-type widget a space should always be a space.
  if (event.which == 13 || (event.which == 32 && element.type != 'text' && element.type != 'textarea')) {
    $(ajax.element_settings.element).trigger(ajax.element_settings.event);
    return false;
  }
};

/**
 * Handle an event that triggers an Ajax response.
 *
 * When an event that triggers an Ajax response happens, this method will
 * perform the actual Ajax call. It is bound to the event using
 * bind() in the constructor, and it uses the options specified on the
 * ajax object.
 */
Drupal.ajax.prototype.eventResponse = function (element, event) {
  // Create a synonym for this to reduce code confusion.
  var ajax = this;

  // Do not perform another ajax command if one is already in progress.
  if (ajax.ajaxing) {
    return false;
  }

  try {
    if (ajax.form) {
      // If setClick is set, we must set this to ensure that the button's
      // value is passed.
      if (ajax.setClick) {
        // Mark the clicked button. 'form.clk' is a special variable for
        // ajaxSubmit that tells the system which element got clicked to
        // trigger the submit. Without it there would be no 'op' or
        // equivalent.
        element.form.clk = element;
      }

      ajax.form.ajaxSubmit(ajax.options);
    }
    else {
      ajax.beforeSerialize(ajax.element, ajax.options);
      $.ajax(ajax.options);
    }
  }
  catch (e) {
    // Unset the ajax.ajaxing flag here because it won't be unset during
    // the complete response.
    ajax.ajaxing = false;
    alert("An error occurred while attempting to process " + ajax.options.url + ": " + e.message);
  }

  // For radio/checkbox, allow the default event. On IE, this means letting
  // it actually check the box.
  if (typeof element.type != 'undefined' && (element.type == 'checkbox' || element.type == 'radio')) {
    return true;
  }
  else {
    return false;
  }

};

/**
 * Handler for the form serialization.
 *
 * Runs before the beforeSend() handler (see below), and unlike that one, runs
 * before field data is collected.
 */
Drupal.ajax.prototype.beforeSerialize = function (element, options) {
  // Allow detaching behaviors to update field values before collecting them.
  // This is only needed when field values are added to the POST data, so only
  // when there is a form such that this.form.ajaxSubmit() is used instead of
  // $.ajax(). When there is no form and $.ajax() is used, beforeSerialize()
  // isn't called, but don't rely on that: explicitly check this.form.
  if (this.form) {
    var settings = this.settings || Drupal.settings;
    Drupal.detachBehaviors(this.form, settings, 'serialize');
  }

  // Prevent duplicate HTML ids in the returned markup.
  // @see drupal_html_id()
  options.data['ajax_html_ids[]'] = [];
  $('[id]').each(function () {
    options.data['ajax_html_ids[]'].push(this.id);
  });

  // Allow Drupal to return new JavaScript and CSS files to load without
  // returning the ones already loaded.
  // @see ajax_base_page_theme()
  // @see drupal_get_css()
  // @see drupal_get_js()
  options.data['ajax_page_state[theme]'] = Drupal.settings.ajaxPageState.theme;
  options.data['ajax_page_state[theme_token]'] = Drupal.settings.ajaxPageState.theme_token;
  for (var key in Drupal.settings.ajaxPageState.css) {
    options.data['ajax_page_state[css][' + key + ']'] = 1;
  }
  for (var key in Drupal.settings.ajaxPageState.js) {
    options.data['ajax_page_state[js][' + key + ']'] = 1;
  }
};

/**
 * Modify form values prior to form submission.
 */
Drupal.ajax.prototype.beforeSubmit = function (form_values, element, options) {
  // This function is left empty to make it simple to override for modules
  // that wish to add functionality here.
};

/**
 * Prepare the Ajax request before it is sent.
 */
Drupal.ajax.prototype.beforeSend = function (xmlhttprequest, options) {
  // For forms without file inputs, the jQuery Form plugin serializes the form
  // values, and then calls jQuery's $.ajax() function, which invokes this
  // handler. In this circumstance, options.extraData is never used. For forms
  // with file inputs, the jQuery Form plugin uses the browser's normal form
  // submission mechanism, but captures the response in a hidden IFRAME. In this
  // circumstance, it calls this handler first, and then appends hidden fields
  // to the form to submit the values in options.extraData. There is no simple
  // way to know which submission mechanism will be used, so we add to extraData
  // regardless, and allow it to be ignored in the former case.
  if (this.form) {
    options.extraData = options.extraData || {};

    // Let the server know when the IFRAME submission mechanism is used. The
    // server can use this information to wrap the JSON response in a TEXTAREA,
    // as per http://jquery.malsup.com/form/#file-upload.
    options.extraData.ajax_iframe_upload = '1';

    // The triggering element is about to be disabled (see below), but if it
    // contains a value (e.g., a checkbox, textfield, select, etc.), ensure that
    // value is included in the submission. As per above, submissions that use
    // $.ajax() are already serialized prior to the element being disabled, so
    // this is only needed for IFRAME submissions.
    var v = $.fieldValue(this.element);
    if (v !== null) {
      options.extraData[this.element.name] = Drupal.checkPlain(v);
    }
  }

  // Disable the element that received the change to prevent user interface
  // interaction while the Ajax request is in progress. ajax.ajaxing prevents
  // the element from triggering a new request, but does not prevent the user
  // from changing its value.
  $(this.element).addClass('progress-disabled').attr('disabled', true);

  // Insert progressbar or throbber.
  if (this.progress.type == 'bar') {
    var progressBar = new Drupal.progressBar('ajax-progress-' + this.element.id, eval(this.progress.update_callback), this.progress.method, eval(this.progress.error_callback));
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  }
  else if (this.progress.type == 'throbber') {
    this.progress.element = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
    if (this.progress.message) {
      $('.throbber', this.progress.element).after('<div class="message">' + this.progress.message + '</div>');
    }
    $(this.element).after(this.progress.element);
  }
};

/**
 * Handler for the form redirection completion.
 */
Drupal.ajax.prototype.success = function (response, status) {
  // Remove the progress element.
  if (this.progress.element) {
    $(this.progress.element).remove();
  }
  if (this.progress.object) {
    this.progress.object.stopMonitoring();
  }
  $(this.element).removeClass('progress-disabled').removeAttr('disabled');

  Drupal.freezeHeight();

  for (var i in response) {
    if (response.hasOwnProperty(i) && response[i]['command'] && this.commands[response[i]['command']]) {
      this.commands[response[i]['command']](this, response[i], status);
    }
  }

  // Reattach behaviors, if they were detached in beforeSerialize(). The
  // attachBehaviors() called on the new content from processing the response
  // commands is not sufficient, because behaviors from the entire form need
  // to be reattached.
  if (this.form) {
    var settings = this.settings || Drupal.settings;
    Drupal.attachBehaviors(this.form, settings);
  }

  Drupal.unfreezeHeight();

  // Remove any response-specific settings so they don't get used on the next
  // call by mistake.
  this.settings = null;
};

/**
 * Build an effect object which tells us how to apply the effect when adding new HTML.
 */
Drupal.ajax.prototype.getEffect = function (response) {
  var type = response.effect || this.effect;
  var speed = response.speed || this.speed;

  var effect = {};
  if (type == 'none') {
    effect.showEffect = 'show';
    effect.hideEffect = 'hide';
    effect.showSpeed = '';
  }
  else if (type == 'fade') {
    effect.showEffect = 'fadeIn';
    effect.hideEffect = 'fadeOut';
    effect.showSpeed = speed;
  }
  else {
    effect.showEffect = type + 'Toggle';
    effect.hideEffect = type + 'Toggle';
    effect.showSpeed = speed;
  }

  return effect;
};

/**
 * Handler for the form redirection error.
 */
Drupal.ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
  Drupal.displayAjaxError(Drupal.ajaxError(xmlhttprequest, uri, customMessage));
  // Remove the progress element.
  if (this.progress.element) {
    $(this.progress.element).remove();
  }
  if (this.progress.object) {
    this.progress.object.stopMonitoring();
  }
  // Undo hide.
  $(this.wrapper).show();
  // Re-enable the element.
  $(this.element).removeClass('progress-disabled').removeAttr('disabled');
  // Reattach behaviors, if they were detached in beforeSerialize().
  if (this.form) {
    var settings = this.settings || Drupal.settings;
    Drupal.attachBehaviors(this.form, settings);
  }
};

/**
 * Provide a series of commands that the server can request the client perform.
 */
Drupal.ajax.prototype.commands = {
  /**
   * Command to insert new content into the DOM.
   */
  insert: function (ajax, response, status) {
    // Get information from the response. If it is not there, default to
    // our presets.
    var wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
    var method = response.method || ajax.method;
    var effect = ajax.getEffect(response);

    // We don't know what response.data contains: it might be a string of text
    // without HTML, so don't rely on jQuery correctly iterpreting
    // $(response.data) as new HTML rather than a CSS selector. Also, if
    // response.data contains top-level text nodes, they get lost with either
    // $(response.data) or $('<div></div>').replaceWith(response.data).
    var new_content_wrapped = $('<div></div>').html(response.data);
    var new_content = new_content_wrapped.contents();

    // For legacy reasons, the effects processing code assumes that new_content
    // consists of a single top-level element. Also, it has not been
    // sufficiently tested whether attachBehaviors() can be successfully called
    // with a context object that includes top-level text nodes. However, to
    // give developers full control of the HTML appearing in the page, and to
    // enable Ajax content to be inserted in places where DIV elements are not
    // allowed (e.g., within TABLE, TR, and SPAN parents), we check if the new
    // content satisfies the requirement of a single top-level element, and
    // only use the container DIV created above when it doesn't. For more
    // information, please see http://drupal.org/node/736066.
    if (new_content.length != 1 || new_content.get(0).nodeType != 1) {
      new_content = new_content_wrapped;
    }

    // If removing content from the wrapper, detach behaviors first.
    switch (method) {
      case 'html':
      case 'replaceWith':
      case 'replaceAll':
      case 'empty':
      case 'remove':
        var settings = response.settings || ajax.settings || Drupal.settings;
        Drupal.detachBehaviors(wrapper, settings);
    }

    // Add the new content to the page.
    wrapper[method](new_content);

    // Immediately hide the new content if we're using any effects.
    if (effect.showEffect != 'show') {
      new_content.hide();
    }

    // Determine which effect to use and what content will receive the
    // effect, then show the new content.
    if ($('.ajax-new-content', new_content).length > 0) {
      $('.ajax-new-content', new_content).hide();
      new_content.show();
      $('.ajax-new-content', new_content)[effect.showEffect](effect.showSpeed);
    }
    else if (effect.showEffect != 'show') {
      new_content[effect.showEffect](effect.showSpeed);
    }

    // Attach all JavaScript behaviors to the new content, if it was successfully
    // added to the page, this if statement allows #ajax['wrapper'] to be
    // optional.
    if (new_content.parents('html').length > 0) {
      // Apply any settings from the returned JSON if available.
      var settings = response.settings || ajax.settings || Drupal.settings;
      Drupal.attachBehaviors(new_content, settings);
    }
  },

  /**
   * Command to remove a chunk from the page.
   */
  remove: function (ajax, response, status) {
    var settings = response.settings || ajax.settings || Drupal.settings;
    Drupal.detachBehaviors($(response.selector), settings);
    $(response.selector).remove();
  },

  /**
   * Command to mark a chunk changed.
   */
  changed: function (ajax, response, status) {
    if (!$(response.selector).hasClass('ajax-changed')) {
      $(response.selector).addClass('ajax-changed');
      if (response.asterisk) {
        $(response.selector).find(response.asterisk).append(' <span class="ajax-changed">*</span> ');
      }
    }
  },

  /**
   * Command to provide an alert.
   */
  alert: function (ajax, response, status) {
    alert(response.text, response.title);
  },

  /**
   * Command to provide the jQuery css() function.
   */
  css: function (ajax, response, status) {
    $(response.selector).css(response.argument);
  },

  /**
   * Command to set the settings that will be used for other commands in this response.
   */
  settings: function (ajax, response, status) {
    if (response.merge) {
      $.extend(true, Drupal.settings, response.settings);
    }
    else {
      ajax.settings = response.settings;
    }
  },

  /**
   * Command to attach data using jQuery's data API.
   */
  data: function (ajax, response, status) {
    $(response.selector).data(response.name, response.value);
  },

  /**
   * Command to apply a jQuery method.
   */
  invoke: function (ajax, response, status) {
    var $element = $(response.selector);
    $element[response.method].apply($element, response.arguments);
  },

  /**
   * Command to restripe a table.
   */
  restripe: function (ajax, response, status) {
    // :even and :odd are reversed because jQuery counts from 0 and
    // we count from 1, so we're out of sync.
    // Match immediate children of the parent element to allow nesting.
    $('> tbody > tr:visible, > tr:visible', $(response.selector))
      .removeClass('odd even')
      .filter(':even').addClass('odd').end()
      .filter(':odd').addClass('even');
  },

  /**
   * Command to add css.
   *
   * Uses the proprietary addImport method if available as browsers which
   * support that method ignore @import statements in dynamically added
   * stylesheets.
   */
  add_css: function (ajax, response, status) {
    // Add the styles in the normal way.
    $('head').prepend(response.data);
    // Add imports in the styles using the addImport method if available.
    var match, importMatch = /^@import url\("(.*)"\);$/igm;
    if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
      importMatch.lastIndex = 0;
      while (match = importMatch.exec(response.data)) {
        document.styleSheets[0].addImport(match[1]);
      }
    }
  },

  /**
   * Command to update a form's build ID.
   */
  updateBuildId: function(ajax, response, status) {
    $('input[name="form_build_id"][value="' + response['old'] + '"]').val(response['new']);
  }
};

})(jQuery);

;/*})'"*/
;/*})'"*/
(function (D) {
  var beforeSerialize = D.ajax.prototype.beforeSerialize;
  D.ajax.prototype.beforeSerialize = function (element, options) {
    beforeSerialize.call(this, element, options);
    options.data['ajax_page_state[jquery_version]'] = D.settings.ajaxPageState.jquery_version;
  }
})(Drupal);

;/*})'"*/
;/*})'"*/
(function ($) {
  //Define a Drupal behaviour with a custom name
  Drupal.behaviors.cruk_config_webformValidator = {
    attach: function (context) {
      $(document).bind('clientsideValidationAddCustomRules', function(event) {
        jQuery.validator.addMethod("matchingPasswordFields", function(value, element, param) {
          if ( $('input[name="' + param.match  +'"]').is('*') && $('input[name="' + param.match  +'"]').val() != value ) {
            return false;
          }
          else {
            return true;
          }
        }, jQuery.format('Your passwords must match'));
      });
    }
  }
})(jQuery);
;/*})'"*/
;/*})'"*/
(function ($) {
  'use strict';
  Drupal.behaviors.cruk_donate = {
    attach: function (context, settings) {

      // load apple pay widget if supported
      if (window.ApplePaySession) {
          if (ApplePaySession.canMakePayments) {
             if (settings.apple_pay_widget == undefined) {
                $('.pane-bundle-donation-pane').addClass('visible');
            } else {
                $('.pane-bundle-donation-pane').replaceWith(settings.apple_pay_widget);
            }
          }
      } else {
          $('.pane-bundle-donation-pane').addClass('visible');
      }

      // If donating a custom amount set the donate button to be disabled until the
      // 'other amount' field contains something. Do not disable if the custom amount field
      // contains a value (this can happen if user presses 'Back' on donation form)
      if (!$('.input-other-amnt').val()) {
        $('.pane-bundle-donation-pane .submit-btn-donate-amnt').attr('disabled', 'disabled');
      }

      $('.pane-bundle-donation-pane .input-other-amnt').keyup(function() {
        if ($(this).val() !== '') {
          $('.pane-bundle-donation-pane .submit-btn-donate-amnt').removeAttr('disabled');
        }
        else {
          $('.pane-bundle-donation-pane .submit-btn-donate-amnt').attr('disabled', 'disabled');
        }
      });

      // Do a similar thing with the 'donate now' button on WCD page.
      $('.pane-bundle-text-donation .input-amnt').keyup(function() {
        if ($(this).val() !== '') {
          $('.pane-bundle-text-donation .submit-btn').removeAttr('disabled');
        }
        else {
          $('.pane-bundle-text-donation .submit-btn').attr('disabled', 'disabled');
        }
      });

      // If we don't have support for SVG then use the normal image icon file instead.
      if (!Modernizr.svg) {
        $('.pane-bundle-donate-with-restriction-pane .res-item .svg-container').each(function () {
          $(this).replaceWith('<img class="res-icon" typeof="foaf:Image" src="' + $(this).attr('data-svg-fallback') + '" alt="Diagnosing cancer early" title="Diagnosing cancer early">');
        });
      }

      // Use native select menu in some circumstances.
      var useNativeSelect = false;
      var ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf("iphone") > -1 || ua.indexOf("ipad") > -1 || ua.indexOf("mobile") > -1) {
        useNativeSelect = true;
      }
      else if ($('html').hasClass('ie8')) {
        useNativeSelect = true;
      }

      // Make the select menu on the Donate with Restriction pane use the jQuery UI Selectmenu Widget.
      if (useNativeSelect !== true) {
        $('.pane-bundle-donate-with-restriction-pane .ctools-jump-menu-select').selectmenu({
          open: function(e, object){
            var menuHeight = $('.ui-selectmenu-menu-dropdown').height();
            var remainingSpace = window.innerHeight - e.screenY + e.layerY + 64;
            if (menuHeight > remainingSpace) {
              $('.pane-bundle-donate-with-restriction-pane .ui-selectmenu').addClass('direction-up');
              $('.ui-selectmenu-menu-dropdown').addClass('direction-up');
            }
            else {
              $('.pane-bundle-donate-with-restriction-pane .ui-selectmenu').addClass('direction-down');
              $('.ui-selectmenu-menu-dropdown').addClass('direction-down');
            }
          },
          close: function(e, object){
            $('.pane-bundle-donate-with-restriction-pane .ui-selectmenu').removeClass('direction-up direction-down');
            $('.ui-selectmenu-menu-dropdown').removeClass('direction-up direction-down');
          }
        });
      }

      $('.pane-bundle-donate-with-restriction-pane .ctools-jump-menu-select').change(function() {
        if ($(this).val() == 'donate-to-other-research') {
          $('.donate-with-restriction-pane-overlay').show();
        }
      });

      $('.pane-bundle-donate-with-restriction-pane .back-btn').click(function() {
        $('.donate-with-restriction-pane-overlay').hide();
        $('.ctools-jump-menu-select').selectmenu('value', '');
        $('.ctools-jump-menu-select').val('');
      });

      // Make the select menu on the Restriction widget use the jQuery UI Selectmenu Widget.
      if (useNativeSelect !== true) {
        $('.pane-bundle-donation-pane .res-select-dropdown').selectmenu({
          open: function(e, object){
            var menuHeight = $('.ui-selectmenu-menu-dropdown').height();
            var remainingSpace = window.innerHeight - e.screenY + e.layerY + 64;
            if (menuHeight > remainingSpace) {
              $('.pane-bundle-donation-pane .ui-selectmenu').addClass('direction-up');
              $('.ui-selectmenu-menu-dropdown').addClass('direction-up');
            }
            else {
              $('.pane-bundle-donation-pane .ui-selectmenu').addClass('direction-down');
              $('.ui-selectmenu-menu-dropdown').addClass('direction-down');
            }
          },
          close: function(e, object){
            $('.pane-bundle-donation-pane .ui-selectmenu').removeClass('direction-up direction-down');
            $('.ui-selectmenu-menu-dropdown').removeClass('direction-up direction-down');
          }
        });
      }

      // Override ctools-jump-menu-change so that if the value is 'donate-to-other-research'
      // or empty then nothing is triggered.
      $('.ctools-jump-menu-change')
        .once('ctools-jump-menu')
        .change(function() {
          var loc = $(this).val();
          if (loc == 'donate-to-other-research' || loc == '') {
            return false;
          }
          var urlArray = loc.split('::');
          if (urlArray[1]) {
            location.href = urlArray[1];
          }
          else {
            location.href = loc;
          }
          return false;
        });

      // GTM tracking - preset amount
      $('.donate-amnt-btn').once('donate-amount-btn').click(function() {
        if ($(this).hasClass('donate-amnt-btn-monthly')) {
          var frequency = 'Donate monthly';
        }
        else {
          var frequency = 'Donate single';
        }
        dataLayer.push({
          'event': 'click',
          'panelStep': '8',
          'ui-element':'Button',
          'value': frequency  + ' | ' + $(this).attr('data-donate-btn-amount')
        });
      });

      // GTM tracking - other amount
      $('.submit-btn-donate-amnt').once('submit-btn-donate-amnt').click(function() {
        if ($(this).hasClass('submit-btn-donate-monthly')) {
          var frequency = 'Donate monthly';
        }
        else {
          var frequency = 'Donate single';
        }
        dataLayer.push({
          'event': 'click',
          'panelStep': '8',
          'ui-element':'Button',
          'value': frequency + ' | ' + $(this).parent().find('.input-other-amnt').val()
        });
      });

      // Add a but of custom CSS for Flag Day hero when viewed on mobile.
      if (window.innerWidth < 480) {
        var flag_day_hero_mb = $('.flag_day .pane-content').height() + 60;
        $('.flag_day .pane-bundle-background-image-pane').css('margin-bottom', flag_day_hero_mb + 'px');
      }

    }
  };

  // AJAX GTM stuff.
  Drupal.ajax.prototype.commands.gtmTracking = function(ajax, response, status) {
    dataLayer.push({
      'event': response.event,
      'panelStep': response.step,
      'ui-element': response.element,
      'value': response.value
    });
  };

  // GTM tracking - Restriction widget
  $('.pane-bundle-donate-with-restriction-pane .res-item > a')
    .once('pane-bundle-donate-with-restriction-pane-res-item-a')
    .click(function() {
      if ($(this).attr('href').match(/\?restriction\=/)) {
        var res = $(this).attr('href').split("?restriction=")[1];
        var uiElement = $(this).parent('div.res-item').data('ui-element');
        dataLayer.push({
          'event': 'click',
          'panelStep': '10',
          'ui-element': uiElement,
          'value': res
        });
      }
    });

  $('.pane-bundle-donate-with-restriction-pane #edit-jump')
    .once('pane-bundle-donate-with-restriction-pane-edit-jump')
    .change(function() {
      if ($(this).val().match(/\?restriction\=/)) {
        var res = $(this).val().split("?restriction=")[1];
        dataLayer.push({
          'event': 'click',
          'panelStep': '10',
          'ui-element': 'Dropdown',
          'value': res
        });
      }
    });

})(jQuery);

;/*})'"*/
;/*})'"*/
/*! jquery.kinetic - v2.1.1 - 2015-07-20 http://the-taylors.org/jquery.kinetic 
 * Copyright (c) 2015 Dave Taylor; Licensed MIT */
!function(a){"use strict";var b="kinetic-active";window.requestAnimationFrame||(window.requestAnimationFrame=function(){return window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}()),a.support=a.support||{},a.extend(a.support,{touch:"ontouchend"in document});var c=function(){return!1},d=function(b,c){return this.settings=c,this.el=b,this.$el=a(b),this._initElements(),this};d.DATA_KEY="kinetic",d.DEFAULTS={cursor:"move",decelerate:!0,triggerHardware:!1,threshold:0,y:!0,x:!0,slowdown:.9,maxvelocity:40,throttleFPS:60,movingClass:{up:"kinetic-moving-up",down:"kinetic-moving-down",left:"kinetic-moving-left",right:"kinetic-moving-right"},deceleratingClass:{up:"kinetic-decelerating-up",down:"kinetic-decelerating-down",left:"kinetic-decelerating-left",right:"kinetic-decelerating-right"}},d.prototype.start=function(b){this.settings=a.extend(this.settings,b),this.velocity=b.velocity||this.velocity,this.velocityY=b.velocityY||this.velocityY,this.settings.decelerate=!1,this._move()},d.prototype.end=function(){this.settings.decelerate=!0},d.prototype.stop=function(){this.velocity=0,this.velocityY=0,this.settings.decelerate=!0,a.isFunction(this.settings.stopped)&&this.settings.stopped.call(this)},d.prototype.detach=function(){this._detachListeners(),this.$el.removeClass(b).css("cursor","")},d.prototype.attach=function(){this.$el.hasClass(b)||(this._attachListeners(this.$el),this.$el.addClass(b).css("cursor",this.settings.cursor))},d.prototype._initElements=function(){this.$el.addClass(b),a.extend(this,{xpos:null,prevXPos:!1,ypos:null,prevYPos:!1,mouseDown:!1,throttleTimeout:1e3/this.settings.throttleFPS,lastMove:null,elementFocused:null}),this.velocity=0,this.velocityY=0,a(document).mouseup(a.proxy(this._resetMouse,this)).click(a.proxy(this._resetMouse,this)),this._initEvents(),this.$el.css("cursor",this.settings.cursor),this.settings.triggerHardware&&this.$el.css({"-webkit-transform":"translate3d(0,0,0)","-webkit-perspective":"1000","-webkit-backface-visibility":"hidden"})},d.prototype._initEvents=function(){var b=this;this.settings.events={touchStart:function(a){var c;b._useTarget(a.target,a)&&(c=a.originalEvent.touches[0],b.threshold=b._threshold(a.target,a),b._start(c.clientX,c.clientY),a.stopPropagation())},touchMove:function(a){var c;b.mouseDown&&(c=a.originalEvent.touches[0],b._inputmove(c.clientX,c.clientY),a.preventDefault&&a.preventDefault())},inputDown:function(a){b._useTarget(a.target,a)&&(b.threshold=b._threshold(a.target,a),b._start(a.clientX,a.clientY),b.elementFocused=a.target,"IMG"===a.target.nodeName&&a.preventDefault(),a.stopPropagation())},inputEnd:function(a){b._useTarget(a.target,a)&&(b._end(),b.elementFocused=null,a.preventDefault&&a.preventDefault())},inputMove:function(a){b.mouseDown&&(b._inputmove(a.clientX,a.clientY),a.preventDefault&&a.preventDefault())},scroll:function(c){a.isFunction(b.settings.moved)&&b.settings.moved.call(b,b.settings),c.preventDefault&&c.preventDefault()},inputClick:function(a){return Math.abs(b.velocity)>0?(a.preventDefault(),!1):void 0},dragStart:function(a){return b._useTarget(a.target,a)&&b.elementFocused?!1:void 0}},this._attachListeners(this.$el,this.settings)},d.prototype._inputmove=function(b,c){{var d=this.$el;this.el}if((!this.lastMove||new Date>new Date(this.lastMove.getTime()+this.throttleTimeout))&&(this.lastMove=new Date,this.mouseDown&&(this.xpos||this.ypos))){var e=b-this.xpos,f=c-this.ypos;if(this.threshold>0){var g=Math.sqrt(e*e+f*f);if(this.threshold>g)return;this.threshold=0}this.elementFocused&&(a(this.elementFocused).blur(),this.elementFocused=null,d.focus()),this.settings.decelerate=!1,this.velocity=this.velocityY=0;var h=this.scrollLeft(),i=this.scrollTop();this.scrollLeft(this.settings.x?h-e:h),this.scrollTop(this.settings.y?i-f:i),this.prevXPos=this.xpos,this.prevYPos=this.ypos,this.xpos=b,this.ypos=c,this._calculateVelocities(),this._setMoveClasses(this.settings.movingClass),a.isFunction(this.settings.moved)&&this.settings.moved.call(this,this.settings)}},d.prototype._calculateVelocities=function(){this.velocity=this._capVelocity(this.prevXPos-this.xpos,this.settings.maxvelocity),this.velocityY=this._capVelocity(this.prevYPos-this.ypos,this.settings.maxvelocity)},d.prototype._end=function(){this.xpos&&this.prevXPos&&this.settings.decelerate===!1&&(this.settings.decelerate=!0,this._calculateVelocities(),this.xpos=this.prevXPos=this.mouseDown=!1,this._move())},d.prototype._useTarget=function(b,c){return a.isFunction(this.settings.filterTarget)?this.settings.filterTarget.call(this,b,c)!==!1:!0},d.prototype._threshold=function(b,c){return a.isFunction(this.settings.threshold)?this.settings.threshold.call(this,b,c):this.settings.threshold},d.prototype._start=function(a,b){this.mouseDown=!0,this.velocity=this.prevXPos=0,this.velocityY=this.prevYPos=0,this.xpos=a,this.ypos=b},d.prototype._resetMouse=function(){this.xpos=!1,this.ypos=!1,this.mouseDown=!1},d.prototype._decelerateVelocity=function(a,b){return 0===Math.floor(Math.abs(a))?0:a*b},d.prototype._capVelocity=function(a,b){var c=a;return a>0?a>b&&(c=b):0-b>a&&(c=0-b),c},d.prototype._setMoveClasses=function(a){var b=this.settings,c=this.$el;c.removeClass(b.movingClass.up).removeClass(b.movingClass.down).removeClass(b.movingClass.left).removeClass(b.movingClass.right).removeClass(b.deceleratingClass.up).removeClass(b.deceleratingClass.down).removeClass(b.deceleratingClass.left).removeClass(b.deceleratingClass.right),this.velocity>0&&c.addClass(a.right),this.velocity<0&&c.addClass(a.left),this.velocityY>0&&c.addClass(a.down),this.velocityY<0&&c.addClass(a.up)},d.prototype._move=function(){var b=(this.$el,this.el),c=this,d=c.settings;d.x&&b.scrollWidth>0?(this.scrollLeft(this.scrollLeft()+this.velocity),Math.abs(this.velocity)>0&&(this.velocity=d.decelerate?c._decelerateVelocity(this.velocity,d.slowdown):this.velocity)):this.velocity=0,d.y&&b.scrollHeight>0?(this.scrollTop(this.scrollTop()+this.velocityY),Math.abs(this.velocityY)>0&&(this.velocityY=d.decelerate?c._decelerateVelocity(this.velocityY,d.slowdown):this.velocityY)):this.velocityY=0,c._setMoveClasses(d.deceleratingClass),a.isFunction(d.moved)&&d.moved.call(this,d),Math.abs(this.velocity)>0||Math.abs(this.velocityY)>0?this.moving||(this.moving=!0,window.requestAnimationFrame(function(){c.moving=!1,c._move()})):c.stop()},d.prototype._getScroller=function(){var b=this.$el;return(this.$el.is("body")||this.$el.is("html"))&&(b=a(window)),b},d.prototype.scrollLeft=function(a){var b=this._getScroller();return"number"!=typeof a?b.scrollLeft():(b.scrollLeft(a),void(this.settings.scrollLeft=a))},d.prototype.scrollTop=function(a){var b=this._getScroller();return"number"!=typeof a?b.scrollTop():(b.scrollTop(a),void(this.settings.scrollTop=a))},d.prototype._attachListeners=function(){var b=this.$el,d=this.settings;a.support.touch&&b.bind("touchstart",d.events.touchStart).bind("touchend",d.events.inputEnd).bind("touchmove",d.events.touchMove),b.mousedown(d.events.inputDown).mouseup(d.events.inputEnd).mousemove(d.events.inputMove),b.click(d.events.inputClick).scroll(d.events.scroll).bind("selectstart",c).bind("dragstart",d.events.dragStart)},d.prototype._detachListeners=function(){var b=this.$el,d=this.settings;a.support.touch&&b.unbind("touchstart",d.events.touchStart).unbind("touchend",d.events.inputEnd).unbind("touchmove",d.events.touchMove),b.unbind("mousedown",d.events.inputDown).unbind("mouseup",d.events.inputEnd).unbind("mousemove",d.events.inputMove),b.unbind("click",d.events.inputClick).unbind("scroll",d.events.scroll).unbind("selectstart",c).unbind("dragstart",d.events.dragStart)},a.Kinetic=d,a.fn.kinetic=function(b,c){return this.each(function(){var e=a(this),f=e.data(d.DATA_KEY),g=a.extend({},d.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data(d.DATA_KEY,f=new d(this,g)),"string"==typeof b&&f[b](c)})}}(window.jQuery||window.Zepto);
;/*})'"*/
;/*})'"*/
(function ($) {

Drupal.behaviors.timeline = {
    attach: function (context) {


        // Checks User Agent String against Android, will return -1 if false.
        // Very broad check but will work for our use.
        var userAgentCheck = navigator.userAgent;
        var isAndroid = userAgentCheck.indexOf('Android') === -1;

        // Check to see if target element exists, if so, run script.
        var elementExists = document.getElementById('grand-challenge-timeline');

        if (typeof(elementExists) !== 'undefined' && elementExists !== null) {


            var filePath = '/' + Drupal.settings.crukGcTimeline.fileLocation;
            var res;
            var $timeline;
            var dataLoaded = false;
            var mobileBreak = 640;
            var $window = $(window);

            // Ajax request to retrieve timeline data. On success timeline function is called.
            $timeline = $('.timeline');
            var getDataLink = $timeline.attr('data-timeline-fpid');
            var dataLink = "/panel-pane/timeline/json/" + getDataLink;

            if (dataLoaded) {
              return;
            }

            $.ajax({
              url: dataLink,
              success: function(data){
                res = data;
                timelineStart();
                dataLoaded = true;
              },
              error: function(){
                return;
              }
            });

            var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

            function timelineStart() {

                // Create DOM Elements.
                var timelineWrapper = $('<div class="timeline-wrapper">');
                var timelineTitle = $('<div class="timeline-title">');
                var timelineInner = $('<div class="timeline-inner">');
                var timelineLeft = $('<div class="timeline-left">');
                var overlay = $('<div class="overlay">');
                var overlayInner = $('<div class="overlay-inner">');
                var overlayNav = $('<div class="stageNav">');
                var overlayNavLeft = $('<div class="navLeft">');
                var overlayNavRight = $('<div class="navRight">');
                var rightNavText = $('<span>Next</span>');
                var leftNavText = $('<span>Previous</span>');
                var leftNavImage = $('<img src="' + filePath + '/js/images/assets/navLeft.png"/>');
                var rightNavImage = $('<img src="' + filePath + '/js/images/assets/navRight.png"/>');
                var closeImage = $('<img src="' + filePath + '/js/images/assets/closeButton.png"/>');
                var timelineContent = $('<div class="timeline-content">');
                var timelineRight = $('<div class="timeline-right">');
                var overlayButton = $('<div class="overlay-button">');
                var timelineControls = $('<ul class="controls">');
                var overviewButtonText = res.button.text;
                var closeOverlay = $('<div class="closeOverlay">');

                // Append created DOM elements to target $timeline.
                closeOverlay.append(closeImage);
                overlayButton.append(overviewButtonText);
                overlayNavLeft.append(leftNavImage, leftNavText);
                overlayNavRight.append(rightNavText, rightNavImage);
                overlayNav.append(overlayNavLeft, overlayNavRight);
                overlay.append(overlayInner, overlayNav, closeOverlay);
                timelineContent.append(timelineControls);
                timelineInner.append(overlayButton, overlay, timelineContent, timelineLeft, timelineRight);
                timelineWrapper.append(timelineTitle, timelineInner);
                $timeline.append(timelineWrapper);

                var $ul = $('.controls');
                var $pop = $('.overlay');
                var $popInner = $('.overlay-inner');
                var $popButton = $('.overlay-button');
                var $popHide = $('.timeline-content');
                var $close = $('.closeOverlay');

                var dates = ['jan 2015', 'feb 2015', 'mar 2015', 'apr 2015', 'may 2015', 'jun 2015', 'jul 2015', 'aug 2015',
                    'sep 2015', 'oct 2015', 'nov 2015', 'dec 2015', 'jan 2016', 'feb 2016', 'mar 2016', 'apr 2016', 'may 2016', 'jun 2016', 'jul 2016',
                    'aug 2016', 'sep 2016', 'oct 2016', 'nov 2016', 'dec 2016'
                ];

                // Get today.
                var getWhichDate = new Date();
                var whichDay = getWhichDate.getDate();
                var whichMonthDigit = getWhichDate.getMonth();
                var whichMonth = months[whichMonthDigit];
                var whichYear = getWhichDate.getFullYear();
                var whichDate = whichDay + "-" + whichMonth + whichYear;
                var checkActiveValue = whichMonth + whichYear;

                // Loop through data.
                var i;

                // Loop: Drupal data.
                var stage, $stageIcon, title, start, end, startFin, endFin, subDate, tag,
                    intro, text, $contentWrap, $titleCont, $contentTitle, $contentInner, $contentTop, $contentLeft, $contentRight, dateCont, $introCont, $textCont, where, howHigh,
                    l, r, width, whereFin, $cont, $contInner, $subDateCont;

                // Loop: Dates - used to create timeline.
                for (i = 0; i < dates.length; i++) {
                    var $li = $('<li class="controlCont">');
                    var $span = $('<span class="control">');
                    var date = dates[i];
                    var className = date.replace(/\s+/g, '');
                    var finalDate = $span.append(date);

                    $li.addClass(className);
                    $li.append(finalDate);
                    timelineControls.append($li);
                }

                // Returns an array of dates between the two dates.
                var getDates = function (startDate, endDate) {
                    var returnedDates = [],
                        currentDate = startDate,
                        addDays = function (days) {
                            var returnedDate = new Date(this.valueOf());
                            returnedDate.setDate(returnedDate.getDate() + days);
                            return returnedDate;
                        };
                    while (currentDate <= endDate) {
                        returnedDates.push(currentDate);
                        currentDate = addDays.call(currentDate, 1);
                    }
                    return returnedDates;
                };

                // Usage.
                var timelineDates = getDates(new Date("01 Jan 2015"), new Date("31 Dec 2016"));
                timelineDates.forEach(function (timelineDate) {
                    var day = timelineDate.getDate();
                    var month = timelineDate.getMonth();
                    var year = timelineDate.getFullYear();
                    var date = months[month] + "" + year;
                    var dateFinal = date.toString();
                    var dayCont = $('<div class="day ' + day + '-' + dateFinal + '">');
                    $('.' + dateFinal).append(dayCont);
                });

                // Loop: Data - used to add stages to timeline.
                var $overviewCont = $('<div class="overviewContainer">');
                var overviewTitle = "Overview";
                var $overviewTitleCont = $('<div class="overviewTitle cont-title">');
                var overviewStrap = res.overview.strapline;
                var overviewText = res.overview.body;
                var $overviewStrapCont = $('<div class="content-intro">');
                var $overviewTextCont = $('<div class="content-text">');
                var $overviewStages = $('<ul class="overview-stages">');

                $overviewTitleCont.append(overviewTitle);
                $contentRight = $('<div class="content-right">');
                $contentLeft = $('<div class="content-left">');
                $contentRight.append($overviewStages);
                $contentLeft.append($overviewTitleCont);
                $overviewCont.append($contentLeft, $contentRight);
                $popInner.prepend($overviewCont);

                if (overviewStrap) {
                  $overviewStrapCont.append(overviewStrap);
                  $contentLeft.append($overviewStrapCont);
                }

                if (overviewText) {
                  $overviewTextCont.append(overviewText);
                  $contentLeft.append($overviewTextCont);
                }

                for (i = 0; i < res.stages.length; i++) {

                        var $stageEvents = $('<ul class="stageEvents">');
                        var $stageEvents2 = $('<ul class="stageEvents">');
                        stage = res.stages[i];
                        var stageTitle = stage.title;
                        var stageStrapLine = stage.strapline;
                        var dateStart = stage.dateStart;
                        var dateEnd = stage.dateEnd;
                        var dateEndLower = dateEnd.toLowerCase();
                        var dateStartLower = dateStart.toLowerCase();
                        var startDateNoSpace = dateStart.replace(' ', '-')
                        .replace(/\s+/g, '')
                        .toLowerCase()
                        .replace(/^[0]+/g,"");
                        var endDateNoSpace = dateEnd.replace(' ', '-')
                        .replace(/\s+/g, '')
                        .toLowerCase()
                        .replace(/^[0]+/g,"");
                        subDate = dateStart + " - " + dateEnd;

                        // Pass dateStart and dateEnd to getDates which returns inbetween dates.
                        var checkActiveFinal = [];
                        var checkIfActive = getDates(new Date(dateStart), new Date(dateEnd));
                        checkIfActive.forEach(function (checkIfActive) {
                            var checkMonth = checkIfActive.getMonth();
                            var checkYear = checkIfActive.getFullYear();
                            checkActiveFinal.push(months[checkMonth] + checkYear);
                        });

                        // Check if current date is in Array. This will return 0 if true.
                        var returnedIfActiveValue = $.inArray(checkActiveValue, checkActiveFinal);

                        // Can't append the same string more than once, so create new.
                        var stageTitleOverview = stage.title;
                        var subDateOverview = dateStart + " - " + dateEnd;
                        var stageOverviewTag = "stage" + i;
                        var $stageOverviewTitle = $('<div class="overview-stage-title">');
                        var $stageIconOverview = $('<img class="overview-stage-icon">');
                        var $stageOverviewDateCont = $('<div class="overview-stage-date">');
                        var $stageOverviewCont = $('<li class="overview-stage" data-stage="' + stageOverviewTag + '">');
                        var stageOverviewButtonTitle = stage.buttonTitle;
                        var stageOverviewButtonUrl = stage.buttonUrl;

                        $stageOverviewDateCont.append(subDateOverview);
                        $stageIconOverview.attr('src', stage.icon);
                        $stageOverviewTitle.append(stageTitleOverview, $stageIconOverview);
                        $stageOverviewCont.append($stageOverviewTitle, $stageOverviewDateCont);
                        $overviewStages.append($stageOverviewCont);

                        var stageText = stage.body;
                        tag = "stage" + i;

                        for (k = 0; k < res.stages[i].steps.length; k++) {
                            var currentSubEvent = res.stages[i].steps[k];
                            var subEventName = currentSubEvent.eventName;
                            var subEventDateStart = currentSubEvent.dateStart;
                            var subEventInfo = currentSubEvent.body;
                            var $stageEvent = $('<li class="stageEvent">');
                            var subEventDateCont = $('<span class="subEventDate">');
                            var subEventTitleCont = $('<span class="subEventTitle">');
                            subEventDateCont.append(subEventDateStart);
                            subEventTitleCont.append(subEventName);
                            $stageEvent.append(subEventDateCont, subEventTitleCont);
                            $stageEvents.append($stageEvent);

                            var subEventName2 = currentSubEvent.eventName;
                            var subEventDateStart2 = currentSubEvent.dateStart;
                            var subEventInfo2 = currentSubEvent.body;
                            var $stageEvent2 = $('<li class="stageEvent">');
                            var $subEventDateCont2 = $('<span class="subEventDate">');
                            var $subEventTitleCont2 = $('<span class="subEventTitle">');
                            $subEventDateCont2.append(subEventDateStart2);
                            $subEventTitleCont2.append(subEventName2);
                            $stageEvent2.append($subEventTitleCont2, $subEventDateCont2);
                            $stageEvents2.append($stageEvent2);
                        }

                        $contentWrap = $('<div class="content-wrap">');
                        $contentWrap.attr('data-stage', tag);
                        $introCont = $('<p class="content-intro">');
                        $textCont = $('<p class="content-text">');
                        $textCont.append(stageText);
                        $contentInner = $('<div class="content-inner grand-timeline-closed">');
                        $contentTop = $('<div class="contTop grand-timeline-plus">');
                        $contentTitle = $('<div class="cont-title">');
                        $contentDate = $('<span class="cont-date">');
                        $contentRight = $('<div class="content-right">');
                        $contentLeft = $('<div class="content-left">');
                        $contentDate.append(subDate);
                        $contentTitle.append(stageTitle);
                        $contentTop.append($contentTitle, $contentDate);
                        $contentLeft.append($textCont);
                        $contentInner.append($contentLeft, $contentRight);
                        $contentWrap.append($contentTop, $contentInner);
                        $popInner.append($contentWrap);

                        if (stageStrapLine) {
                          $introCont.append(stageStrapLine);
                          $contentLeft.prepend($introCont);
                        }

                        $stageIcon = $('<img class="title-icon ' + title + '">');
                        $stageIcon.attr('src', stage.icon);
                        $stageIcon2 = $('<img class="title-icon ' + title + '">');
                        $stageIcon2.attr('src', stage.icon);
                        $contentTitle.append($stageIcon);
                        where = startDateNoSpace;
                        howHigh = stage.position;
                        $l = $('.' + startDateNoSpace);
                        $r = $('.' + endDateNoSpace);
                        width = $r.offset().left - $l.offset().left;

                        whereFin = $('.' + where);
                        $cont = $('<div class="stage">');
                        $cont.attr('data-stage', tag);
                        $contInner = $('<div class="stageInner">');
                        $titleCont = $('<div class="stageTitle">');
                        $subDateCont = $('<span class="subDate">');

                        $titleCont.append(stageTitle, $stageIcon2);
                        $subDateCont.append(subDate);
                        $cont.addClass(howHigh);
                        $cont.css({
                            width: width
                        });

                        $contInner.append($titleCont);
                        $contentRight.append($stageEvents2);
                        $cont.append($contInner, $stageEvents);
                        whereFin.append($cont);

                        if (stage.buttonTitle) {
                            var stageOverviewButtonTitle = stage.buttonTitle;
                            var stageOverviewButtonUrl = stage.buttonUrl;
                            var $stageOverviewButton = $('<a href="' + stageOverviewButtonUrl + '"class="stage-overview-button" target="_blank">' + stageOverviewButtonTitle + '</a>');
                            $contentRight.append($stageOverviewButton);
                        }

                        // If stage is in current month apply active class.
                        // returnedIfActiveValue will be -1 if false and 0 if true.
                        if (returnedIfActiveValue > -1) {
                              $('[data-stage="' + tag + '"]').find('.stageTitle').addClass('activeStage');
                              $('[data-stage="' + tag + '"]').find('.contTop').addClass('mobileActiveStage');
                        }

                } // End loop.

                var placeMeWidth = $('.controls li').width();
                var placeMe = placeMeWidth / 31; // Find the amount of days in each month.
                $('.day').css('width', placeMe);
                var $today = $('<div class="today">');

                $('.' + whichDate).append($today);

                // Interactive functions.
                var $stage = $('.stage');
                var $overviewStage = $('.overview-stage');
                var $navLeft = $('.navLeft');
                var $navRight = $('.navRight');
                var $overview = $('.overviewContainer');
                var $timelineLeft = $('.timeline-left');
                var $timelineRight = $('.timeline-right');
                var $content = $('.content-wrap');
                var $closeOpen = $('.contTop');
                var $inner;

                // The following gives every 1st, 2nd, 3rd .stage a unique position.
                var classes = ['grand-timeline-top', 'grand-timeline-middle', 'grand-timeline-low'];
                var returnStages = $('.stage');

                returnStages.each(function (index) {
                    $(this).addClass(classes[index % 3]);
                });

                // Open overlay.
                function overlayShow() {
                    $pop.show();
                    $pop.removeClass('showMe');
                    $pop.addClass('hideMe');
                    $popButton.hide();
                    $popHide.hide();
                    $timelineLeft.hide();
                    $timelineRight.hide();

                    if ($($content[0]).is(':hidden') && $(".content-wrap:last-child").is(':hidden')) {
                        $navRight.show();
                        $navLeft.show();
                    }

                    else if ($($content[0]).is(':visible')) {
                        $navRight.show();
                    }

                    else if ($('.content-wrap:last-child').is(':visible')) {
                        $navLeft.show();
                    }
                }

                // Close overlay.
                function overlayHide() {
                    $pop.hide();
                    $pop.removeClass('hideMe');
                    $pop.addClass('showMe');
                    $popButton.show();
                    $popHide.show();
                    $timelineLeft.show();
                    $timelineRight.show();
                    $navRight.hide();
                    $navLeft.hide();
                    $overview.hide();
                    $('.content-wrap').hide();
                    setTimeline.setTimelinePosition();
                }

                // Mobile tabs - open and close.
                $closeOpen.on('click', function () {
                    var me = $(this);
                    var target = me.closest('.content-wrap').find('.content-inner');

                    if (me.hasClass('grand-timeline-minus')) {
                        me.removeClass('grand-timeline-minus');
                        me.addClass('grand-timeline-plus');
                        target.removeClass('grand-timeline-open');
                        target.addClass('grand-timeline-closed');
                    }

                    else {
                        $('.grand-timeline-open').addClass('grand-timeline-closed').removeClass('grand-timeline-open');
                        $('.grand-timeline-minus').addClass('grand-timeline-plus').removeClass('grand-timeline-closed');
                        me.removeClass('grand-timeline-plus');
                        me.addClass('grand-timeline-minus');
                        target.removeClass('grand-timeline-closed');
                        target.addClass('grand-timeline-open');
                    }
                });

                // Show main overview content.
                $popButton.on('click', function () {
                    overlayShow();
                    $navLeft.hide();
                    $navRight.hide();
                    $overview.show();
                });

                // Checks what content to show using screenTarget's data-stage.
                function contentShow(screenTarget) {
                  var stageTag = screenTarget.attr('data-stage');
                  if (stageTag.length > 0) {
                    var targetTag = $('[data-stage="' + stageTag + '"]');
                  }

                  $(targetTag[1]).show();
                }

                $overviewStage.on('click', function () {
                  contentShow($(this));
                  $('.overviewContainer').hide();
                  overlayShow();
                });

                $overviewStage.on('touchstart', function () {
                  contentShow($(this));
                  $('.overviewContainer').hide();
                  overlayShow();
                });

                $stage.on('touchstart', function() {
                  contentShow($(this));
                  $('.overviewContainer').hide();
                  overlayShow();
                });

                $stage.on('click', function () {
                    contentShow($(this));
                    overlayShow();
                });

                // Navigate to clicked month.
                function slideTo(tar) {
                    var $start = $('.timeline-content');
                    var $control = $(tar);
                    var target = $(tar).closest('li');
                    var position = $(target).position();
                    var offsetValue = target.width();
                    var posFin = position.left;
                    var numbers = $start.scrollLeft();

                    $('.controlActive').removeClass('controlActive');
                    $control.addClass('controlActive');

                    $start.animate({
                        scrollLeft: posFin - offsetValue
                    });
                }

                // Navigate timeline using arrows.
                $timelineLeft = $('.timeline-left');
                $timelineRight = $('.timeline-right');

                function moveTimeline(direction) {
                    var $scrollMe = $('.timeline-content');

                    if ($(direction).is($timelineRight)) {
                        $scrollMe.animate({
                            scrollLeft: '+=180'
                        });
                    }

                    else if ($(direction).is($timelineLeft)) {
                        $scrollMe.animate({
                            scrollLeft: '-=180'
                        });
                    }

                    else {
                        return;
                    }
                }

                $timelineLeft.on('click', function () {
                    moveTimeline(this);
                });

                $timelineRight.on('click', function () {
                    moveTimeline(this);
                });

                $ul.on('click', 'span.control', function (e) {
                    slideTo(this);
                });

                $close.on('click', function (e) {
                    overlayHide();
                });


                // Navigation between stages in pop up.
                function switchContent(direction) {
                    var switchStart = $('.content-wrap:visible').attr('data-stage');
                    var $old = $('[data-stage="' + switchStart + '"]');

                    if ($(direction).is('.navRight') && $('.content-wrap:last-child').is(':hidden')) {
                        $($old[1]).hide();
                        $($old[1]).next().show();
                    }

                    else if ($(direction).is('.navLeft') && $($content[0]).is(':hidden')) {
                        $($old[1]).hide();
                        $($old[1]).prev().show();
                    }

                    else {
                        return;
                    }

                    if ($('.navRight').is(':hidden') && $('.content-wrap:last-child').is(':hidden')) {
                        $navRight.show();
                    }

                    else if ($('.navLeft').is(':hidden') && $($content[0]).is(':hidden')) {
                        $navLeft.show();
                    }

                    else if ($('.navLeft').is(':visible') && $($content[0]).is(':visible')) {
                        $navLeft.hide();
                    }

                    else if ($('.navRight').is(':visible') && $('.content-wrap:last-child').is(':visible')) {
                        $navRight.hide();
                    }

                    else {
                        return;
                    }
                }

                $('.navRight').on('click', function() {
                    switchContent(this);
                });

                $('.navLeft').on('click', function() {
                    switchContent(this);
                });

                // Set position of timeline relative to today.
                // Has to find and use it's container so we can use .position().
                var setTimeline = {
                  setTimelinePosition: function () {
                    var timelineStartTarget = $('.today').closest('.controlCont');
                    var timelineStart = timelineStartTarget.position().left - timelineStartTarget.width();
                    $('.timeline-content').scrollLeft(timelineStart);
                  }
                }

                setTimeline.setTimelinePosition();

                var currentDay = $('.day').find('.today');
                var currentDayTarget = currentDay.parent().siblings('.control');
                currentDayTarget.addClass('controlActive');

                // Kinetic - external plugin used for dragging timeline.
                if (isAndroid && $window.width() > mobileBreak) {
                  $('.timeline-content').kinetic({
                      filterTarget: function(target, e) {
                          if (!(/down|start/.test(e.type))) {
                              return !(/area|a|input/i.test(target.tagName));
                          }
                      },
                      triggerHardware: true,
                      x: true,
                      y: false
                  });
                }

                else {
                  $('.timeline-content').css({
                    overflowX: "scroll"
                  });
                }

            } // End timelineStart()
        }

        else {
            return;
        }

    }
};

})(jQuery);


;/*})'"*/
;/*})'"*/
(function ($) {
  Drupal.behaviors.geofieldMapInit = {
    attach: function (context, settings) {

      // Init all maps in Drupal.settings.
      if (settings.geofield_gmap) {
        $.each(settings.geofield_gmap, function(mapid, options) {
          geofield_gmap_initialize({
            lat: options.lat,
            lng: options.lng,
            zoom: options.zoom,
            latid: options.latid,
            lngid: options.lngid,
            searchid: options.searchid,
            mapid: options.mapid,
            widget: options.widget,
            map_type: options.map_type,
            confirm_center_marker: options.confirm_center_marker,
            click_to_place_marker: options.click_to_place_marker,
          });
        });
      }

    }
  };
})(jQuery);

var geofield_gmap_geocoder;
var geofield_gmap_data = [];

// Center the map to the marker location.
function geofield_gmap_center(mapid) {
  google.maps.event.trigger(geofield_gmap_data[mapid].map, 'resize');
  geofield_gmap_data[mapid].map.setCenter(geofield_gmap_data[mapid].marker.getPosition());
}

// Place marker at the current center of the map.
function geofield_gmap_marker(mapid) {
  if (geofield_gmap_data[mapid].confirm_center_marker) {
    if (!window.confirm('Change marker position ?')) return;
  }

  google.maps.event.trigger(geofield_gmap_data[mapid].map, 'resize');
  var position = geofield_gmap_data[mapid].map.getCenter();
  geofield_gmap_data[mapid].marker.setPosition(position);
  geofield_gmap_data[mapid].lat.val(position.lat());
  geofield_gmap_data[mapid].lng.val(position.lng());

  if (geofield_gmap_data[mapid].search) {
    geofield_gmap_geocoder.geocode({'latLng': position}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          geofield_gmap_data[mapid].search.val(results[0].formatted_address);
        }
      }
    });
  }
}

// Init google map.
function geofield_gmap_initialize(params) {
  geofield_gmap_data[params.mapid] = params;
  jQuery.noConflict();

  if (!geofield_gmap_geocoder) {
    geofield_gmap_geocoder = new google.maps.Geocoder();
  }

  var location = new google.maps.LatLng(params.lat, params.lng);
  var options = {
    zoom: params.zoom,
    center: location,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    scaleControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE
    }
  };

  switch (params.map_type) {
    case "ROADMAP":
      options.mapTypeId = google.maps.MapTypeId.ROADMAP;
      break;
    case "SATELLITE":
      options.mapTypeId = google.maps.MapTypeId.SATELLITE;
      break;
    case "HYBRID":
      options.mapTypeId = google.maps.MapTypeId.HYBRID;
      break;
    case "TERRAIN":
      options.mapTypeId = google.maps.MapTypeId.TERRAIN;
      break;
    default:
      options.mapTypeId = google.maps.MapTypeId.ROADMAP;
  }

  var map = new google.maps.Map(document.getElementById(params.mapid), options);
  geofield_gmap_data[params.mapid].map = map;

  // Fix http://code.google.com/p/gmaps-api-issues/issues/detail?id=1448.
  google.maps.event.addListener(map, "idle", function () {
    google.maps.event.trigger(map, 'resize');
  });

  // Fix map issue in fieldgroups / vertical tabs
  // https://www.drupal.org/node/2474867.
  google.maps.event.addListenerOnce(map, "idle", function () {
    // Show all map tiles when a map is shown in a vertical tab.
    jQuery('#' + params.mapid).closest('div.vertical-tabs').find('.vertical-tab-button a').click(function () {
      google.maps.event.trigger(map, 'resize');
      geofield_gmap_center(params.mapid);
    });
    // Show all map tiles when a map is shown in a collapsible fieldset.
    jQuery('#' + params.mapid).closest('fieldset.collapsible').find('a.fieldset-title').click(function () {
      google.maps.event.trigger(map, 'resize');
      geofield_gmap_center(params.mapid);
    });
  });

  // Place map marker.
  var marker = new google.maps.Marker({
    map: map,
    draggable: params.widget
  });
  geofield_gmap_data[params.mapid].marker = marker;
  marker.setPosition(location);

  if (params.widget && params.latid && params.lngid) {
    geofield_gmap_data[params.mapid].lat = jQuery("#" + params.latid);
    geofield_gmap_data[params.mapid].lng = jQuery("#" + params.lngid);
    if (params.searchid) {
      geofield_gmap_data[params.mapid].search = jQuery("#" + params.searchid);
      geofield_gmap_data[params.mapid].search.autocomplete({
        // This bit uses the geocoder to fetch address values.
        source: function (request, response) {
          geofield_gmap_geocoder.geocode({'address': request.term }, function (results, status) {
            response(jQuery.map(results, function (item) {
              return {
                label: item.formatted_address,
                value: item.formatted_address,
                latitude: item.geometry.location.lat(),
                longitude: item.geometry.location.lng()
              };
            }));
          });
        },
        // This bit is executed upon selection of an address.
        select: function (event, ui) {
          geofield_gmap_data[params.mapid].lat.val(ui.item.latitude);
          geofield_gmap_data[params.mapid].lng.val(ui.item.longitude);
          var location = new google.maps.LatLng(ui.item.latitude, ui.item.longitude);
          marker.setPosition(location);
          map.setCenter(location);
        }
      });

      // Geocode user input on enter.
      geofield_gmap_data[params.mapid].search.keydown(function (e) {
        if (e.which == 13) {
          var input = geofield_gmap_data[params.mapid].search.val();
          // Execute the geocoder
          geofield_gmap_geocoder.geocode({'address': input }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[0]) {
                // Set the location
                var location = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
                marker.setPosition(location);
                map.setCenter(location);
                // Fill the lat/lon fields with the new info
                geofield_gmap_data[params.mapid].lat.val(marker.getPosition().lat());
                geofield_gmap_data[params.mapid].lng.val(marker.getPosition().lng());
              }
            }
          });
        }
      });

      // Add listener to marker for reverse geocoding.
      google.maps.event.addListener(marker, 'drag', function () {
        geofield_gmap_geocoder.geocode({'latLng': marker.getPosition()}, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              geofield_gmap_data[params.mapid].search.val(results[0].formatted_address);
              geofield_gmap_data[params.mapid].lat.val(marker.getPosition().lat());
              geofield_gmap_data[params.mapid].lng.val(marker.getPosition().lng());
            }
          }
        });
      });
    }

    if (params.click_to_place_marker) {
      // Change marker position with mouse click.
      google.maps.event.addListener(map, 'click', function (event) {
        var position = new google.maps.LatLng(event.latLng.lat(), event.latLng.lng());
        marker.setPosition(position);
        geofield_gmap_data[params.mapid].lat.val(position.lat());
        geofield_gmap_data[params.mapid].lng.val(position.lng());
        //google.maps.event.trigger(geofield_gmap_data[params.mapid].map, 'resize');
      });
    }

    geofield_onchange = function () {
      var location = new google.maps.LatLng(
        parseInt(geofield_gmap_data[params.mapid].lat.val()),
        parseInt(geofield_gmap_data[params.mapid].lng.val()));
      marker.setPosition(location);
      map.setCenter(location);
    };

    geofield_gmap_data[params.mapid].lat.change(geofield_onchange);
    geofield_gmap_data[params.mapid].lng.change(geofield_onchange);
  }
}

;/*})'"*/
;/*})'"*/
/**
 * @file
 * Lazyloader JQuery plugin
 *
 * @author: Daniel Honrade http://drupal.org/user/351112
 *
 * Settings:
 * - distance = distance of the image to the viewable browser screen before it gets loaded
 * - icon     = animating image that appears before the actual image is loaded
 *
 */

(function($){

  // Window jQuery object global reference.
  var $window;

  // Process lazyloader
  $.fn.lazyloader = function(options){
    var settings = $.extend($.fn.lazyloader.defaults, options);
    var images = this;

    if (typeof($window) == 'undefined') {
      $window = $(window);
    }

    // add the loader icon
    if(settings['icon'] != '') $('img[data-src]').parent().css({ position: 'relative', display: 'block'}).prepend('<img class="lazyloader-icon" src="' + settings['icon'] + '" />');

    // Load on refresh
    loadActualImages(images, settings);

    // Load on scroll
    $window.bind('scroll', function(e) {
      loadActualImages(images, settings);
    });

    // Load on resize
    $window.resize(function(e) {
      loadActualImages(images, settings);
    });

    return this;
  };

  // Defaults
  $.fn.lazyloader.defaults = {
    distance: 0, // the distance (in pixels) of image when loading of the actual image will happen
    icon: ''    // display animating icon
  };


  // Loading actual images
  function loadActualImages(images, settings){
    clearTimeout($.fn.lazyloader.timeout);

    $.fn.lazyloader.timeout = setTimeout(function(){
      images.each(function(){
        var $image = $(this);
        var imageHeight = $image.height(), imageWidth = $image.width();
        var iconTop = Math.round(imageHeight/2), iconLeft = Math.round(imageWidth/2), iconFactor = Math.round($image.siblings('.lazyloader-icon').height()/2);
        $image.siblings('.lazyloader-icon').css({ top: iconTop - iconFactor, left: iconLeft - iconFactor });

        if (windowView(this, settings) && ($image.attr('data-src'))) {
          loadImage(this);
          $image.fadeIn('slow');
        }
      });
    }, Drupal.settings.lazyloader.loadImageDelay);
  }


  // Check if the images are within the window view (top, bottom, left and right)
  function windowView(image, settings){
    var $image = $(image);
    // window variables
    var windowHeight = $window.height(),
        windowWidth  = $window.width(),

        windowBottom = windowHeight + $window.scrollTop(),
        windowTop    = windowBottom - windowHeight,
        windowRight  = windowWidth + $window.scrollLeft(),
        windowLeft   = windowRight - windowWidth,

        // image variables
        imageHeight  = $image.height(),
        imageWidth   = $image.width(),

        imageTop     = $image.offset().top - settings['distance'],
        imageBottom  = imageTop + imageHeight + settings['distance'],
        imageLeft    = $image.offset().left - settings['distance'],
        imageRight   = imageLeft + imageWidth + settings['distance'];

           // This will return true if any corner of the image is within the screen
    return (((windowBottom >= imageTop) && (windowTop <= imageTop)) || ((windowBottom >= imageBottom) && (windowTop <= imageBottom))) &&
           (((windowRight >= imageLeft) && (windowLeft <= imageLeft)) || ((windowRight >= imageRight) && (windowLeft <= imageRight)));
  }


  // Load the image
  function loadImage(image){
    var $image = $(image);
    $image.hide().attr('src', $image.data('src')).removeAttr('data-src');
    $image.load(function() {
      $image.siblings('.lazyloader-icon').remove();
    });
  }

})(jQuery);

;/*})'"*/
;/*})'"*/
/**
 * @file
 */

(function ($) {

  'use strict';

  Drupal.extlink = Drupal.extlink || {};

  Drupal.extlink.attach = function (context, settings) {
    if (!settings.hasOwnProperty('extlink')) {
      return;
    }

    // Strip the host name down, removing ports, subdomains, or www.
    var pattern = /^(([^\/:]+?\.)*)([^\.:]{1,})((\.[a-z0-9]{1,253})*)(:[0-9]{1,5})?$/;
    var host = window.location.host.replace(pattern, '$2$3');
    var subdomain = window.location.host.replace(host, '');

    // Determine what subdomains are considered internal.
    var subdomains;
    if (settings.extlink.extSubdomains) {
      subdomains = '([^/]*\\.)?';
    }
    else if (subdomain === 'www.' || subdomain === '') {
      subdomains = '(www\\.)?';
    }
    else {
      subdomains = subdomain.replace('.', '\\.');
    }

    // Build regular expressions that define an internal link.
    var internal_link = new RegExp('^https?://([^@]*@)?' + subdomains + host, 'i');

    // Extra internal link matching.
    var extInclude = false;
    if (settings.extlink.extInclude) {
      extInclude = new RegExp(settings.extlink.extInclude.replace(/\\/, '\\'), 'i');
    }

    // Extra external link matching.
    var extExclude = false;
    if (settings.extlink.extExclude) {
      extExclude = new RegExp(settings.extlink.extExclude.replace(/\\/, '\\'), 'i');
    }

    // Extra external link CSS selector exclusion.
    var extCssExclude = false;
    if (settings.extlink.extCssExclude) {
      extCssExclude = settings.extlink.extCssExclude;
    }

    // Extra external link CSS selector explicit.
    var extCssExplicit = false;
    if (settings.extlink.extCssExplicit) {
      extCssExplicit = settings.extlink.extCssExplicit;
    }

    // Define the jQuery method (either 'append' or 'prepend') of placing the icon, defaults to 'append'.
    var extIconPlacement = settings.extlink.extIconPlacement || 'append';

    // Find all links which are NOT internal and begin with http as opposed
    // to ftp://, javascript:, etc. other kinds of links.
    // When operating on the 'this' variable, the host has been appended to
    // all links by the browser, even local ones.
    // In jQuery 1.1 and higher, we'd use a filter method here, but it is not
    // available in jQuery 1.0 (Drupal 5 default).
    var external_links = [];
    var mailto_links = [];
    $('a:not(.' + settings.extlink.extClass + ', .' + settings.extlink.mailtoClass + '), area:not(.' + settings.extlink.extClass + ', .' + settings.extlink.mailtoClass + ')', context).each(function (el) {
      try {
        var url = '';
        if (typeof this.href == 'string') {
          url = this.href.toLowerCase();
        }
        // Handle SVG links (xlink:href).
        else if (typeof this.href == 'object') {
          url = this.href.baseVal;
        }
        if (url.indexOf('http') === 0
          && ((!url.match(internal_link) && !(extExclude && url.match(extExclude))) || (extInclude && url.match(extInclude)))
          && !(extCssExclude && $(this).is(extCssExclude))
          && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
          && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
          external_links.push(this);
        }
        // Do not include area tags with begin with mailto: (this prohibits
        // icons from being added to image-maps).
        else if (this.tagName !== 'AREA'
          && url.indexOf('mailto:') === 0
          && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
          && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
          mailto_links.push(this);
        }
      }
      // IE7 throws errors often when dealing with irregular links, such as:
      // <a href="node/10"></a> Empty tags.
      // <a href="http://user:pass@example.com">example</a> User:pass syntax.
      catch (error) {
        return false;
      }
    });

    if (settings.extlink.extClass) {
      Drupal.extlink.applyClassAndSpan(external_links, settings.extlink.extClass, extIconPlacement);
    }

    if (settings.extlink.mailtoClass) {
      Drupal.extlink.applyClassAndSpan(mailto_links, settings.extlink.mailtoClass, extIconPlacement);
    }

    if (settings.extlink.extTarget) {
      // Apply the target attribute to all links.
      $(external_links).attr('target', settings.extlink.extTarget);
      // Add rel attributes noopener and noreferrer.
      $(external_links).attr('rel', function (i, val) {
        // If no rel attribute is present, create one with the values noopener and noreferrer.
        if (val == null) {
          return 'noopener noreferrer';
        }
        // Check to see if rel contains noopener or noreferrer. Add what doesn't exist.
        if (val.indexOf('noopener') > -1 || val.indexOf('noreferrer') > -1) {
          if (val.indexOf('noopener') === -1) {
            return val + ' noopener';
          }
          if (val.indexOf('noreferrer') === -1) {
            return val + ' noreferrer';
          }
          // Both noopener and noreferrer exist. Nothing needs to be added.
          else {
            return val;
          }
        }
        // Else, append noopener and noreferrer to val.
        else {
          return val + ' noopener noreferrer';
        }
      });
    }

    Drupal.extlink = Drupal.extlink || {};

    // Set up default click function for the external links popup. This should be
    // overridden by modules wanting to alter the popup.
    Drupal.extlink.popupClickHandler = Drupal.extlink.popupClickHandler || function () {
      if (settings.extlink.extAlert) {
        return confirm(settings.extlink.extAlertText);
      }
    };

    $(external_links).click(function (e) {
      return Drupal.extlink.popupClickHandler(e, this);
    });
  };

  /**
   * Apply a class and a trailing <span> to all links not containing images.
   *
   * @param {object[]} links
   *   An array of DOM elements representing the links.
   * @param {string} class_name
   *   The class to apply to the links.
   * @param {string} icon_placement
   *   'append' or 'prepend' the icon to the link.
   */
  Drupal.extlink.applyClassAndSpan = function (links, class_name, icon_placement) {
    var $links_to_process;
    if (Drupal.settings.extlink.extImgClass) {
      $links_to_process = $(links);
    }
    else {
      var links_with_images = $(links).find('img').parents('a');
      $links_to_process = $(links).not(links_with_images);
    }
    $links_to_process.addClass(class_name);
    var i;
    var length = $links_to_process.length;
    for (i = 0; i < length; i++) {
      var $link = $($links_to_process[i]);
      if ($link.css('display') === 'inline' || $link.css('display') === 'inline-block') {
        if (class_name === Drupal.settings.extlink.mailtoClass) {
          $link[icon_placement]('<span class="' + class_name + '" aria-label="' + Drupal.settings.extlink.mailtoLabel + '"></span>');
        }
        else {
          $link[icon_placement]('<span class="' + class_name + '" aria-label="' + Drupal.settings.extlink.extLabel + '"></span>');
        }
      }
    }
  };

  Drupal.behaviors.extlink = Drupal.behaviors.extlink || {};
  Drupal.behaviors.extlink.attach = function (context, settings) {
    // Backwards compatibility, for the benefit of modules overriding extlink
    // functionality by defining an "extlinkAttach" global function.
    if (typeof extlinkAttach === 'function') {
      extlinkAttach(context);
    }
    else {
      Drupal.extlink.attach(context, settings);
    }
  };

})(jQuery);

;/*})'"*/
;/*})'"*/
(function ($) {
  Drupal.behaviors.respImg = {
    attach: function (context) {
      Drupal.respImg_processSuffixes();
      $(window).resize(function() {
        if ($(window).width() > 10) {
          Drupal.respImg_processSuffixes();
        }
      });
    }
  }

  Drupal.respImg_getOptimalSuffix = function() {
    var devicePixelRatio = 1;
    if(window.devicePixelRatio !== undefined && Drupal.settings.respImg.useDevicePixelRatio) {
      devicePixelRatio = window.devicePixelRatio;
    }
    $.cookie(
      "respimg_ratio",
      devicePixelRatio,
      {
        path: Drupal.settings.basePath,
        expires: 1
      }
    );
    // Helper function to calculate width off border and scrollbars
    function borderAndScroll() {
      if (typeof borderAndScroll.current == 'undefined' ) {
        borderAndScroll.current = 0;
        if (window.innerWidth && window.outerWidth) {
          borderAndScroll.current = window.outerWidth - window.innerWidth;
        }
        else if (document.body.offsetWidth && document.body.clientWidth) {
          borderAndScroll.current = document.body.offsetWidth - document.body.clientWidth;
        }
      }
      return borderAndScroll.current;
    }

    var suffix = '';
    var suffix_set = false;
    var cookie_set = false;
    $.each(Drupal.settings.respImg.suffixes, function(index, value) {
      var breakpoint = value - borderAndScroll();
      if (breakpoint <= $(window).width() && !cookie_set) {
        // set cookie with new width
        $.cookie(
          "respimg",
          value,
          {
            path: Drupal.settings.basePath,
            expires: 1
          }
        );
        cookie_set = true;
      }
      if ((breakpoint / devicePixelRatio) <= $(window).width() && !suffix_set) {
        suffix = index;
        suffix_set = true;
      }
      if (cookie_set && suffix_set) {
        return false; // break .each
      }
    });
    return suffix;
  }

  Drupal.respImg_processSuffixes = function() {
    // Redirect user if needed / wanted
    if (Drupal.settings.respImg.current_suffix === false && Drupal.settings.respImg.forceRedirect == "1") {
      // Make sure browser accepts cookies
      if (Drupal.respImg_cookiesEnabled()) {
        var suffix = Drupal.respImg_getOptimalSuffix();
        location.replace(location.href);
        return;
      }
    }

    // get currently used suffix, or default
    var current_suffix = Drupal.settings.respImg.current_suffix;
    if (Drupal.settings.respImg.current_suffix === false) {
      current_suffix = Drupal.settings.respImg.default_suffix;
    }

    // get optimal suffix
    var suffix = Drupal.respImg_getOptimalSuffix();

    if (Drupal.settings.respImg.reloadOnResize == "1" && suffix !== '' && suffix !== current_suffix && Drupal.respImg_cookiesEnabled()) {
      setTimeout(function() {location.reload(true)}, 100);
      return;
    }

    if (Drupal.settings.respImg.forceResize == "1" && suffix !== '' && suffix !== current_suffix) {
      // support for images
      $('img').each(function() {
        var img = $(this);
        var src = img.attr('src').replace(current_suffix, suffix);
        img.attr('src', src);
        img.removeAttr('width');
        img.removeAttr('height');
      });

      // support for colorbox links
      $('a.colorbox').each(function() {
        var a = $(this);
        var href = a.attr('href').replace(current_suffix, suffix);
        a.attr('href', href);
      });

      // support for field_slideshow (kind of)
      if (typeof(Drupal.behaviors.field_slideshow) == "object") {
        $('div.field-slideshow-processed')
          .cycle('destroy')
          .removeClass('field-slideshow-processed')
          .css('width', '')
          .css('height', '')
          .css('padding-bottom', '')
          .each(function() {
            var $field = $(this);
            var $child = $field.children('div.field-slideshow-slide').first();
            $field.css('width', $child.css('width'));
          });
        $('div.field-slideshow-slide').css('width', '').css('height', '');
        Drupal.behaviors.field_slideshow.attach();
      }

      // store last used suffix
      Drupal.settings.respImg.current_suffix = suffix;
    }
  }

  Drupal.respImg_cookiesEnabled = function() {
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled)
    {
        $.cookie('respimg_test', 'ok');
        cookieEnabled = ($cookie('respimg_test') === 'ok');
    }
    return cookieEnabled;
  }
} (jQuery));

;/*})'"*/
;/*})'"*/
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);

;/*})'"*/
;/*})'"*/

(function($) {
  Drupal.behaviors.CToolsJumpMenu = {
    attach: function(context) {
      $('.ctools-jump-menu-hide')
        .once('ctools-jump-menu')
        .hide();

      $('.ctools-jump-menu-change')
        .once('ctools-jump-menu')
        .change(function() {
          var loc = $(this).val();
          var urlArray = loc.split('::');
          if (urlArray[1]) {
            location.href = urlArray[1];
          }
          else {
            location.href = loc;
          }
          return false;
        });

      $('.ctools-jump-menu-button')
        .once('ctools-jump-menu')
        .click(function() {
          // Instead of submitting the form, just perform the redirect.

          // Find our sibling value.
          var $select = $(this).parents('form').find('.ctools-jump-menu-select');
          var loc = $select.val();
          var urlArray = loc.split('::');
          if (urlArray[1]) {
            location.href = urlArray[1];
          }
          else {
            location.href = loc;
          }
          return false;
        });
    }
  }
})(jQuery);

;/*})'"*/
;/*})'"*/
(function ($) {
  'use strict';
  Drupal.behaviors.cruk_core_info = {
    attach: function (context, settings) {
		  $(document).ready(function(){
			  if ($(".pane-fieldable-panels-pane").hasClass( "pane-bundle-cruk-core-info" )) {

					// Add hidden content to be displayed when there are no results.
					$('#core-info-filter-form').closest('.pane-content').append("<div class=\"no-results container hidden\"><p>There are no results that match your search criteria.</p></div>");

			  	// Make layout full width.
			  	$('.page .container:first').removeClass('container').addClass('container-fluid ci-timeline');
			  	$('.container-fluid.ci-timeline .pane-node-body').addClass('container');
			  	$('h2.pane-title').wrapInner('<div class="container"></div>');

			  	// Set button to use clipboard plugin.
					var clipboard = new Clipboard('.btn-copy-link');

					// Show confirmation messages.
					clipboard.on('success', function(e) {
						$('.success').finish().show().delay(1000).fadeOut("slow");
					});
					clipboard.on('error', function(e) {
						$('.success span').text('Link not copied');
						$('.success').finish().show().delay(1000).fadeOut("slow");
					});

					// Add code for url query popup modal.
					$('#core-info-filter-form .container').append('<div id="share-modal" class="share-modal ci_modal"><div class="modal-content"><span class="close">&times;</span><input class="filter-params" value=""><br /><button type="button" class="btn btn-copy-link" data-clipboard-target=".filter-params">Copy link to clipboard<span></span></button><div class="success"><span>Link copied.</span></div></div></div>');
					$('#core-info-filter-form .container .filter-params').prop("readonly",true);

			  	// Add button to trigger function for getting url with query string.
			  	$('#core-info-filter-form .container.form-wrapper').append("<button type=\"button\" class=\"btn btn-share\">Share<span></span></button>");

					// Query Modal Popup.
					// Open the url query modal.
					$('button.btn-share').click(function() {
						$('#share-modal').css('display', 'block');
					});

					// Modal Popup.
					// Get the target id of the clicked info box btn, find modal with matching id and make it visible.
					$('.ci_btn').click(function() {
						var modal = document.getElementById($(this).attr("data-target"));
						modal.style.display = "block";
					});

					// When 'x' is clicked, get the id of the open modal and make it invisible.
					$('.close').click(function() {
						$(this).closest(".ci_modal").css('display', 'none');
					});

					// When clicking outside of the open modal, get the id of the open modal and make it invisible.
					$(window).click(function(event) {
						var $modal = $(".ci_modal:visible");
						if (event.target == $modal[0]) {
					  	$modal.css('display', 'none');
						}
					});

					// Create list of cancer types in use.
					var list = $(".ci_info_box").map(function(){return $(this).data("texts");}).get().toString().replace(/ /g, ',').replace(/all-cancer-types,/g, '').replace(/all-cancer-types/g, '').replace(/-/g, ' ').split(',');

					// Remove duplicates and alphabetize.
					var filteredList = list.filter(function(item, index, itemsList) {
            return itemsList.indexOf(item) === index;
          }).sort();

					// Append the list of cancer types to the dropdown/select box.
          filteredList.forEach(function (cancerType) {
            $('<option/>').val(cancerType).text(cancerType).appendTo('#edit-cancer-type');
          });
          // Add selected attribute to selected option.
          var select = $('#edit-cancer-type');
          var select2 = $('#edit-box-type');
          var select3 = $('#edit-year-from');
          var select4 = $('#edit-year-to');

					// Remove empty select options if no cancer types are selected.
					select.find('option[value=""]').remove();

					// Add cancer type name as a class to each select option.
					$('#edit-cancer-type option').addClass(function() {
					    return this.value.replace(/ /g, '-').replace(/['()]+/g, '');
					});

					// Add box type name as a class to each select option.
					$('#edit-box-type option').addClass(function() {
					    return this.value.replace(/ /g, '-');
					});


					// Set default selected options for dropdowns.
					select[0].options[select[0].selectedIndex].setAttribute('selected','selected');
					select2[0].options[select2[0].selectedIndex].setAttribute('selected','selected');
					select3[0].options[select3[0].selectedIndex].setAttribute('selected','selected');
					select4[0].options[select4[0].selectedIndex].setAttribute('selected','selected');

					// CHANGE EVENT.
					// Run process function when dropdown filters are changed and re-run sticky headers function.
					$('#edit-cancer-type, #edit-box-type, #edit-year-from, #edit-year-to').change(function() {

						// Add 'selected' attribute to each selected dropdown option and remove from all others.
						$('option:selected', this).attr('selected',true).siblings().removeAttr('selected');

            Drupal.behaviors.cruk_core_info.process_filters();
            Drupal.behaviors.cruk_core_info.reset_sticky_headers();

					});


					// URL QUERY.
					// eg. ?ctype=all-cancer-types&btype=improving-treatments&yearfrom=1950&yearto=2010
					// Read a page's GET URL variables and store them as an associative array.
          var urlVars = [];
          var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
          hashes.forEach(function (hashKeypair) {
            var hash = hashKeypair.split('=');
            urlVars.push(hash[0]);
            urlVars[hash[0]] = hash[1];
          });

					// Get filter values from url query string array.
					var ctype = urlVars.ctype;
					var btype = urlVars.btype;
					var yearfrom = urlVars.yearfrom;
					var yearto = urlVars.yearto;

					// Get options with class names that match the url query string.
					var matchedCtype = $('#edit-cancer-type option.' + ctype);
					var matchedBtype = $('#edit-box-type option.' + btype);
					var matchedYearFrom = $('#edit-year-from option[value="'+ yearfrom +'"]');
					var matchedYearTo = $('#edit-year-to option[value="'+ yearto +'"]');

					// Apply 'selected' attribute to the matching options in each filter.
					$(matchedCtype, this).prop('selected', true).siblings().prop('selected', false);
					$(matchedBtype, this).prop('selected', true).siblings().prop('selected', false);
					$(matchedYearFrom, this).prop('selected', true).siblings().prop('selected', false);
					$(matchedYearTo, this).prop('selected', true).siblings().prop('selected', false);

					// Initiate popup displaying url with query string.
					$("#core-info-filter-form .btn-share").on('click', this, function() {
						// Get values of selected filter options.
						var selectedCtype = $('#edit-cancer-type option:selected').attr('class');
						var selectedBtype = $('#edit-box-type option:selected').attr('class');
						var selectedYearFrom = $('#edit-year-from option:selected').val();
						var selectedYearTo = $('#edit-year-to option:selected').val();

						// Create query string, add to current url then populate the popup input field.
						var fullPath = window.location.origin + window.location.pathname;
						var queryLink = fullPath + '?ctype=' + selectedCtype + '&btype=' + selectedBtype + '&yearfrom=' + selectedYearFrom + '&yearto=' + selectedYearTo;
						$('#share-modal .filter-params').val(queryLink);
					});

					// Sticky Filter.
					// Add anchor div for sticky Filter menu.
					$('.pane-cruk-core-info-core-info-filter').wrap('<div></div>').parent().prepend('<div id="sticky-anchor"></div>');

					$(function() {
							$(window).scroll(Drupal.behaviors.cruk_core_info.sticky_relocate);
              Drupal.behaviors.cruk_core_info.sticky_relocate();
					});

          Drupal.behaviors.cruk_core_info.process_filters();
          Drupal.behaviors.cruk_core_info.reset_sticky_headers();

					// Reset sticky headers after page has fully loaded as mobile menu and cookies popup load last and affects height.
					$(window).bind("load", function() {
            Drupal.behaviors.cruk_core_info.reset_sticky_headers();
					});

					// Reset sticky headers after cookies popup has been closed.
					$(function() {
					  $("#sliding-popup").on("remove", function () {
					    setTimeout(Drupal.behaviors.cruk_core_info.reset_sticky_headers, 50);
					  });
					});

				}
		  });
    },
    // Function for processing each filter and combining the results.
    process_filters: function () {

      // Disable Year To options if they are smaller than the selected Year From option.
      var yearfromSelected = $('#edit-year-from').attr('selected',true).val();
      $('#edit-year-to option').each( function() {
        if (yearfromSelected > $(this).val()) {
          $(this).attr('disabled','disabled').removeAttr('selected');
        } else {
          $(this).removeAttr('disabled');
        }

        // If no Year To option is selected then set the first/highest option as selected.
        if($("#edit-year-to").attr("selectedIndex") === 0) {
          $('#edit-year-to option').first().attr('selected',true).siblings().removeAttr('selected');
        }
      });

      // Get class names of selected dropdown options.
      var selectedClassCtype = $('#edit-cancer-type option:selected').attr('class');
      var selectedClassBtype = $('#edit-box-type option:selected').attr('class');

      // Get the value of selected dropdown options.
      var selectedClassYearFrom = parseInt($('#edit-year-from option:selected').val());
      // Get End Date filter option and add 10 to include results for that decade.
      var selectedClassYearTo = parseInt($('#edit-year-to option:selected').val()) + 10;

      // Get the year data from each info box.
      $('.ci_info_box').each( function() {
        var boxYearData = parseInt($(this).data("year"));
        // Check if the year data falls within the date range selected from dropdowns and add/remove relevant classes.
        if (selectedClassYearFrom <= boxYearData && boxYearData < selectedClassYearTo) {
          $(this).removeClass("wrong-year-range").addClass("right-year-range");
        } else {
          $(this).removeClass("right-year-range").addClass("wrong-year-range");
        }
      });

      // Add hidden class to all info boxes.
      $('.ci_info_box').addClass('hidden').removeClass('visible');
      // Remove hidden class from info boxes with matching class name.
      $('.ci_info_box.' + selectedClassCtype + '.' + selectedClassBtype + '.right-year-range').removeClass('hidden').addClass('visible');

      // Reset all panels as not hidden.
      $('.pane-bundle-cruk-core-info, .cruk_core_info-panel_heading').removeClass('hidden').addClass('visible');

      $('.pane-bundle-cruk-core-info').each( function() {
        // Hide entire panel if all child info boxes are hidden.
        $(this).find('.ci_info_box:visible').first().addClass('first').siblings().removeClass('first');
        if ($(this).find('.ci_info_box:visible').length === 0)  {
          $(this).addClass('hidden').removeClass('visible');
          $(this).find('.cruk_core_info-panel_heading').addClass('hidden').removeClass('visible');
        }

        // Show panels that contain at least one info box that is not hidden.
        if (!$(this).find(".ci_info_box").hasClass('hidden')) {
          $(this).removeClass('hidden').addClass('visible');
          $(this).find('.cruk_core_info-panel_heading').removeClass('hidden').addClass('visible');
        }

        // Get the survival rate from each panel pane and move it in to header.
        var header = $(this).find('h2.cruk_core_info-panel_heading .container');
        $(header).wrapInner('<div class="header-year"></div>');
        $(this).find('.survival').prependTo(header);

        // Show custom content if all panels boxes are hidden.
        if ($(".pane-bundle-cruk-core-info:visible").length === 0)  {
          $('.no-results').removeClass("hidden");
        } else {
          $('.no-results').addClass("hidden");
        }
      });

      // Remove odd and even classes from all info boxes.
      $('.ci_info_box').removeClass('odd even');
      // Add odd and even classes to each visible info box.
      $('.ci_info_box:visible:odd').addClass('odd');
      $('.ci_info_box:visible:even').addClass('even');

    },
    reset_sticky_headers: function () {
      // Sticky Headers.
      var stickyHeaders = (function() {

        // Get height of filter block.
        var filterHeight = $('.pane-cruk-core-info-core-info-filter').outerHeight();

        var $window = $(window),
          $stickies;

        var load = function(stickies) {

          if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {

            $stickies = stickies.each(function() {

              var $thisSticky = $(this).wrap('<div class="followWrap" />');

              $thisSticky
                .data('originalPosition', $thisSticky.offset().top - filterHeight)
                .data('originalHeight', $thisSticky.outerHeight())
                .parent()
                .height($thisSticky.outerHeight() + "px");
            });

            $window.off("scroll.stickies").on("scroll.stickies", function() {
              _whenScrolling();
            });
          }
        };

        var _whenScrolling = function() {
          $stickies.each(function(i) {

            var $thisSticky = $(this),
              $stickyPosition = $thisSticky.data('originalPosition');

            // If the sticky header is above or equal to the top of the page.
            if ($stickyPosition <= $window.scrollTop()) {

              var $nextSticky = $stickies.eq(i + 1),
                $nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');

              if (!$thisSticky.hasClass('fixed')){
                $thisSticky.addClass("fixed").css("top", filterHeight + "px");
              }

              if ($nextSticky.length > 0 && ($thisSticky.offset().top - filterHeight) >= $nextStickyPosition) {
                if (!$thisSticky.hasClass('absolute')){
                  $thisSticky.addClass("absolute").css("top", $nextStickyPosition + filterHeight + "px");
                }
              }

            } else {

              var $prevSticky = $stickies.eq(i - 1);

              if ($thisSticky.hasClass('fixed')){
                $thisSticky.removeClass("fixed").removeAttr("style");
              }

              if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalPosition') - $thisSticky.data('originalHeight')) {
                if ($prevSticky.hasClass('absolute')){
                  $prevSticky.removeClass("absolute").css("top", filterHeight + "px");
                }
              }

            }

            if ( i + 1 === $stickies.length ) {
              if ( $window.scrollTop() >= $thisSticky.data('originalPosition') + $thisSticky.closest('.pane-bundle-core-info').outerHeight() ) {
                if ($thisSticky.hasClass('fixed')){
                  $thisSticky.removeClass("fixed").removeAttr("style");
                }
              }
            }

          });
        };

        return {
          load: load
        };
      })();

      // Scroll to top of page.
      $('html, body').scrollTop(0);
      // Reset the styling of visible headings.
      $('.cruk_core_info-panel_heading').removeClass('fixed absolute');
      var $visibleHeadings = $('.cruk_core_info-panel_heading.visible');
      $visibleHeadings.css("top", "auto");
      $('.followWrap .cruk_core_info-panel_heading').unwrap();
      // Run sticky header function.
      stickyHeaders.load($visibleHeadings);
    },
    sticky_relocate: function () {
      var window_top = $(window).scrollTop();
      var div_top = $('#sticky-anchor').offset().top;
      if (window_top > div_top) {
        $('.pane-cruk-core-info-core-info-filter').addClass('stick');
        $('#sticky-anchor').height($('.pane-cruk-core-info-core-info-filter').outerHeight());
      } else {
        $('.pane-cruk-core-info-core-info-filter').removeClass('stick');
        $('#sticky-anchor').height(0);
      }
    }
  };
})(jQuery);


;/*})'"*/
;/*})'"*/
/*!
 * clipboard.js v1.7.1
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,o){function i(a,c){if(!n[a]){if(!e[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return i(n||t)},u,u.exports,t,e,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(t,e,n){function o(t,e){for(;t&&t.nodeType!==i;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var i=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}e.exports=o},{}],2:[function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}var r=t("./closest");e.exports=o},{"./closest":1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{}],4:[function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return i(t,e,n);if(c.nodeList(t))return r(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return l(document.body,t,e,n)}var c=t("./is"),l=t("delegate");e.exports=o},{"./is":3,delegate:2}],5:[function(t,e,n){function o(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(t),o.removeAllRanges(),o.addRange(i),e=o.toString()}return e}e.exports=o},{}],6:[function(t,e,n){function o(){}o.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;r<a;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},e.exports=o},{}],7:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","select"],r);else if(void 0!==o)r(n,e("select"));else{var a={exports:{}};r(a,i.select),i.clipboardAction=a.exports}}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function t(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function t(){var e=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function t(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function t(){this.selectedText=(0,i.default)(this.target),this.copyText()}},{key:"copyText",value:function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function t(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function t(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function t(){this.removeFake()}},{key:"action",set:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function t(){return this._target}}]),t}();t.exports=c})},{select:5}],8:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if(void 0!==o)r(n,e("./clipboard-action"),e("tiny-emitter"),e("good-listener"));else{var a={exports:{}};r(a,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=a.exports}}(this,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var s=i(e),u=i(n),f=i(o),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(t,n){r(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return c(e,t),h(e,[{key:"resolveOptions",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===d(e.container)?e.container:document.body}},{key:"listenClick",value:function t(e){var n=this;this.listener=(0,f.default)(e,"click",function(t){return n.onClick(t)})}},{key:"onClick",value:function t(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(n),target:this.target(n),text:this.text(n),container:this.container,trigger:n,emitter:this})}},{key:"defaultAction",value:function t(e){return l("action",e)}},{key:"defaultTarget",value:function t(e){var n=l("target",e);if(n)return document.querySelector(n)}},{key:"defaultText",value:function t(e){return l("text",e)}},{key:"destroy",value:function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],n="string"==typeof e?[e]:e,o=!!document.queryCommandSupported;return n.forEach(function(t){o=o&&!!document.queryCommandSupported(t)}),o}}]),e}(u.default);t.exports=p})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});
;/*})'"*/
;/*})'"*/
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.3.15
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,g,e=this;if(e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",onBeforeChange:null,onAfterChange:null,onInit:null,onReInit:null,onSetPosition:null,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rtl:!1,slide:"div",slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.paused=!1,e.positionProp=null,e.respondTo=null,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.windowWidth=0,e.windowTimer=null,e.options=a.extend({},e.defaults,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,f=e.options.responsive||null,f&&f.length>-1){e.respondTo=e.options.respondTo||"window";for(g in f)f.hasOwnProperty(g)&&(e.breakpoints.push(f[g].breakpoint),e.breakpointSettings[f[g].breakpoint]=f[g].settings);e.breakpoints.sort(function(a,b){return b-a})}e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.init(),e.checkResponsive()}var b=0;return c}(),b.prototype.addSlide=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateSlide=function(b,c){var d={},e=this;if(1===e.options.slidesToShow&&e.options.adaptiveHeight===!0&&e.options.vertical===!1){var f=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.animate({height:f},e.options.speed)}e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}}):(e.applyTransition(),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=null!=c.options.asNavFor?a(c.options.asNavFor).getSlick():null;null!=d&&d.slideHandler(b,!0)},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow=a(b.options.prevArrow),b.$nextArrow=a(b.options.nextArrow),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.appendTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled"))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("index",b)}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),b.options.centerMode===!0&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.options.accessibility===!0&&b.$list.prop("tabIndex",0),b.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.checkResponsive=function(){var c,d,e,b=this,f=b.$slider.width(),g=window.innerWidth||a(window).width();if("window"===b.respondTo?e=g:"slider"===b.respondTo?e=f:"min"===b.respondTo&&(e=Math.min(g,f)),b.originalSettings.responsive&&b.originalSettings.responsive.length>-1&&null!==b.originalSettings.responsive){d=null;for(c in b.breakpoints)b.breakpoints.hasOwnProperty(c)&&e<b.breakpoints[c]&&(d=b.breakpoints[c]);null!==d?null!==b.activeBreakpoint?d!==b.activeBreakpoint&&(b.activeBreakpoint=d,b.options=a.extend({},b.originalSettings,b.breakpointSettings[d]),b.refresh()):(b.activeBreakpoint=d,b.options=a.extend({},b.originalSettings,b.breakpointSettings[d]),b.refresh()):null!==b.activeBreakpoint&&(b.activeBreakpoint=null,b.options=b.originalSettings,b.refresh())}},b.prototype.changeSlide=function(b,c){var f,g,h,i,j,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),h=0!==d.slideCount%d.options.slidesToScroll,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var k=0===b.data.index?0:b.data.index||a(b.target).parent().index()*d.options.slidesToScroll;if(i=d.getNavigableIndexes(),j=0,i[k]&&i[k]===k)if(k>i[i.length-1])k=i[i.length-1];else for(var l in i){if(k<i[l]){k=j;break}j=i[l]}d.slideHandler(k,!1,c);default:return}},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(){var b=this;b.autoPlayClear(),b.touchObject={},a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides.parent().hasClass("slick-track")&&b.$slides.unwrap().unwrap(),b.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("index").css({position:"",left:"",top:"",zIndex:"",opacity:"",width:""}),b.$slider.removeClass("slick-slider"),b.$slider.removeClass("slick-initialized"),b.$list.off(".slick"),a(window).off(".slick-"+b.instanceUid),a(document).off(".slick-"+b.instanceUid)},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b,c){var d=this;d.cssTransitions===!1?(d.$slides.eq(b).css({zIndex:1e3}),d.$slides.eq(b).animate({opacity:1},d.options.speed,d.options.easing,c),d.$slides.eq(a).animate({opacity:0},d.options.speed,d.options.easing)):(d.applyTransition(b),d.applyTransition(a),d.$slides.eq(b).css({opacity:1,zIndex:1e3}),d.$slides.eq(a).css({opacity:0}),c&&setTimeout(function(){d.disableTransition(b),d.disableTransition(a),c.call()},d.options.speed))},b.prototype.filterSlides=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)d=Math.ceil(a.slideCount/a.options.slidesToScroll);else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,g,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=-1*(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth,e=-1*(b.options.slidesToShow-(a-b.slideCount))*d):(b.slideOffset=-1*b.slideCount%b.options.slidesToScroll*b.slideWidth,e=-1*b.slideCount%b.options.slidesToScroll*d))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(g=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=g[0]?-1*g[0].offsetLeft:0,b.options.centerMode===!0&&(g=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=g[0]?-1*g[0].offsetLeft:0,c+=(b.$list.width()-g.outerWidth())/2)),c},b.prototype.getNavigableIndexes=function(){for(var a=this,b=0,c=0,d=[];b<a.slideCount;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlideCount=function(){var c,b=this;if(b.options.swipeToSlide===!0){var d=null;return b.$slideTrack.find(".slick-slide").each(function(c,e){return e.offsetLeft+a(e).outerWidth()/2>-1*b.swipeLeft?(d=e,!1):void 0}),c=Math.abs(a(d).attr("index")-b.currentSlide)}return b.options.slidesToScroll},b.prototype.init=function(){var b=this;a(b.$slider).hasClass("slick-initialized")||(a(b.$slider).addClass("slick-initialized"),b.buildOut(),b.setProps(),b.startLoad(),b.loadSlider(),b.initializeEvents(),b.updateArrows(),b.updateDots()),null!==b.options.onInit&&b.options.onInit.call(this,b)},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",function(){b.paused=!0,b.autoPlayClear()}).on("mouseleave.slick",function(){b.paused=!1,b.autoPlay()})},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),b.options.pauseOnHover===!0&&b.options.autoplay===!0&&(b.$list.on("mouseenter.slick",function(){b.paused=!0,b.autoPlayClear()}),b.$list.on("mouseleave.slick",function(){b.paused=!1,b.autoPlay()})),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.options.slide,b.$slideTrack).on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,function(){b.checkResponsive(),b.setPosition()}),a(window).on("resize.slick.slick-"+b.instanceUid,function(){a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.setPosition()},50))}),a("*[draggable!=true]",b.$slideTrack).on("dragstart",function(a){a.preventDefault()}),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}})},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy");b.load(function(){b.animate({opacity:1},200)}).css({opacity:0}).attr("src",c).removeAttr("data-lazy").removeClass("slick-loading")})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.postSlide=function(a){var b=this;null!==b.options.onAfterChange&&b.options.onAfterChange.call(this,b,a),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(){var b=this,c=b.currentSlide;b.destroy(),a.extend(b,b.initials),b.init(),b.changeSlide({data:{message:"index",index:c}},!0)},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.options.focusOnSelect===!0&&a(b.options.slide,b.$slideTrack).on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),null!==b.options.onReInit&&b.options.onReInit.call(this,b)},b.prototype.removeSlide=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,d.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?a+"px":"0px",e="top"==b.positionProp?a+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var b=this;if(b.options.vertical===!1?b.options.centerMode===!0&&b.$list.css({padding:"0px "+b.options.centerPadding}):(b.$list.height(b.$slides.first().outerHeight(!0)*b.options.slidesToShow),b.options.centerMode===!0&&b.$list.css({padding:b.options.centerPadding+" 0px"})),b.listWidth=b.$list.width(),b.listHeight=b.$list.height(),b.options.vertical===!1&&b.options.variableWidth===!1)b.slideWidth=Math.ceil(b.listWidth/b.options.slidesToShow),b.$slideTrack.width(Math.ceil(b.slideWidth*b.$slideTrack.children(".slick-slide").length));else if(b.options.variableWidth===!0){var c=0;b.slideWidth=Math.ceil(b.listWidth/b.options.slidesToShow),b.$slideTrack.children(".slick-slide").each(function(){c+=Math.ceil(a(this).outerWidth(!0))}),b.$slideTrack.width(Math.ceil(c)+1)}else b.slideWidth=Math.ceil(b.listWidth),b.$slideTrack.height(Math.ceil(b.$slides.first().outerHeight(!0)*b.$slideTrack.children(".slick-slide").length));var d=b.$slides.first().outerWidth(!0)-b.$slides.first().width();b.options.variableWidth===!1&&b.$slideTrack.children(".slick-slide").width(b.slideWidth-d)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:800,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:800,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:900,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),null!==a.options.onSetPosition&&a.options.onSetPosition.call(this,a)},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),d=b.$slider.find(".slick-slide"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active"):d.length<=b.options.slidesToShow?d.addClass("slick-active"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.selectHandler=function(b){var c=this,d=parseInt(a(b.target).parents(".slick-slide").attr("index"));return d||(d=0),c.slideCount<=c.options.slidesToShow?(c.$slider.find(".slick-slide").removeClass("slick-active"),c.$slides.eq(d).addClass("slick-active"),c.options.centerMode===!0&&(c.$slider.find(".slick-slide").removeClass("slick-center"),c.$slides.eq(d).addClass("slick-center")),c.asNavFor(d),void 0):(c.slideHandler(d),void 0)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,i=null,j=this;return b=b||!1,j.animating===!0&&j.options.waitForAnimate===!0||j.options.fade===!0&&j.currentSlide===a||j.slideCount<=j.options.slidesToShow?void 0:(b===!1&&j.asNavFor(a),d=a,i=j.getLeft(d),g=j.getLeft(j.currentSlide),j.currentLeft=null===j.swipeLeft?g:j.swipeLeft,j.options.infinite===!1&&j.options.centerMode===!1&&(0>a||a>j.getDotCount()*j.options.slidesToScroll)?(j.options.fade===!1&&(d=j.currentSlide,c!==!0?j.animateSlide(g,function(){j.postSlide(d)}):j.postSlide(d)),void 0):j.options.infinite===!1&&j.options.centerMode===!0&&(0>a||a>j.slideCount-j.options.slidesToScroll)?(j.options.fade===!1&&(d=j.currentSlide,c!==!0?j.animateSlide(g,function(){j.postSlide(d)}):j.postSlide(d)),void 0):(j.options.autoplay===!0&&clearInterval(j.autoPlayTimer),e=0>d?0!==j.slideCount%j.options.slidesToScroll?j.slideCount-j.slideCount%j.options.slidesToScroll:j.slideCount+d:d>=j.slideCount?0!==j.slideCount%j.options.slidesToScroll?0:d-j.slideCount:d,j.animating=!0,null!==j.options.onBeforeChange&&a!==j.currentSlide&&j.options.onBeforeChange.call(this,j,j.currentSlide,e),f=j.currentSlide,j.currentSlide=e,j.setSlideClasses(j.currentSlide),j.updateDots(),j.updateArrows(),j.options.fade===!0?(c!==!0?j.fadeSlide(f,e,function(){j.postSlide(e)}):j.postSlide(e),void 0):(c!==!0?j.animateSlide(i,function(){j.postSlide(e)}):j.postSlide(e),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":"vertical"},b.prototype.swipeEnd=function(){var b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":b.slideHandler(b.currentSlide+b.getSlideCount()),b.currentDirection=0,b.touchObject={};break;case"right":b.slideHandler(b.currentSlide-b.getSlideCount()),b.currentDirection=1,b.touchObject={}}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var c,d,e,f,b=this;return f=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||f&&1!==f.length?!1:(c=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==f?f[0].pageX:a.clientX,b.touchObject.curY=void 0!==f?f[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),d=b.swipeDirection(),"vertical"!==d?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),e=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.swipeLeft=b.options.vertical===!1?c+b.touchObject.swipeLength*e:c+b.touchObject.swipeLength*(b.$list.height()/b.listWidth)*e,b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible").css("width","")},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.options.infinite!==!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.removeClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")):a.currentSlide>a.slideCount-a.options.slidesToShow+b&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active"))},a.fn.slick=function(a){var c=this;return c.each(function(c,d){d.slick=new b(d,a)})},a.fn.slickAdd=function(a,b,c){var d=this;return d.each(function(d,e){e.slick.addSlide(a,b,c)})},a.fn.slickCurrentSlide=function(){var a=this;return a.get(0).slick.getCurrent()},a.fn.slickFilter=function(a){var b=this;return b.each(function(b,c){c.slick.filterSlides(a)})},a.fn.slickGoTo=function(a,b){var c=this;return c.each(function(c,d){d.slick.changeSlide({data:{message:"index",index:parseInt(a)}},b)})},a.fn.slickNext=function(){var a=this;return a.each(function(a,b){b.slick.changeSlide({data:{message:"next"}})})},a.fn.slickPause=function(){var a=this;return a.each(function(a,b){b.slick.autoPlayClear(),b.slick.paused=!0})},a.fn.slickPlay=function(){var a=this;return a.each(function(a,b){b.slick.paused=!1,b.slick.autoPlay()})},a.fn.slickPrev=function(){var a=this;return a.each(function(a,b){b.slick.changeSlide({data:{message:"previous"}})})},a.fn.slickRemove=function(a,b){var c=this;return c.each(function(c,d){d.slick.removeSlide(a,b)})},a.fn.slickRemoveAll=function(){var a=this;return a.each(function(a,b){b.slick.removeSlide(null,null,!0)})},a.fn.slickGetOption=function(a){var b=this;return b.get(0).slick.options[a]},a.fn.slickSetOption=function(a,b,c){var d=this;return d.each(function(d,e){e.slick.options[a]=b,c===!0&&(e.slick.unload(),e.slick.reinit())})},a.fn.slickUnfilter=function(){var a=this;return a.each(function(a,b){b.slick.unfilterSlides()})},a.fn.unslick=function(){var a=this;return a.each(function(a,b){b.slick&&b.slick.destroy()})},a.fn.getSlick=function(){var a=null,b=this;return b.each(function(b,c){a=c.slick}),a}});
;/*})'"*/
;/*})'"*/
(function ($) {
  'use strict';
  Drupal.behaviors.cruk_shine_dropdown = {
    attach: function (context, settings) {

      // Use native select menu in some circumstances.
      var useNativeSelect = false;
      var ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf("iphone") > -1 || ua.indexOf("ipad") > -1 || ua.indexOf("mobile") > -1) {
        useNativeSelect = true;
      }
      else if ($('html').hasClass('ie8')) {
        useNativeSelect = true;
      }

      // Make the select menu on the Shine Regions Dropdown webform use the jQuery UI Selectmenu Widget.
      if (useNativeSelect !== true) {
        $('.shine-regions select#edit-submitted-shine-regions').selectmenu({
          open: function(e, object){
            var menuHeight = $('.ui-selectmenu-menu-dropdown').height();
            var remainingSpace = window.innerHeight - e.screenY + e.layerY + 64;
            if (menuHeight > remainingSpace) {
              $('.pane-bundle-donate-with-restriction-pane .ui-selectmenu').addClass('direction-up');
              $('.ui-selectmenu-menu-dropdown').addClass('direction-up');
            }
            else {
              $('.shine-regions .ui-selectmenu').addClass('direction-down');
              $('.ui-selectmenu-menu-dropdown').addClass('direction-down');
            }
          },
          close: function(e, object){
            $('.shine-regions .ui-selectmenu').removeClass('direction-up direction-down');
            $('.ui-selectmenu-menu-dropdown').removeClass('direction-up direction-down');
          }
        });
      }

    }
  };

})(jQuery);

;/*})'"*/
;/*})'"*/
// Initialise the container on page Load.
jQuery( document ).ready(function( $ ) {

  // Test for localstorage to avoid javascript errors on IOS private browsing and
  // Chrome with with "Block third-party cookies and site data" enabled
  // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/storage/localstorage.js
  function hasStorage(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
  }

  if(hasStorage()) {
    //Arrays to feed into localStorage
    var eventTitle = [];
    var eventImage = [];
    var eventSummary= [];
    var eventCtaUrl = [];
    var eventCtaTitle = [];

    // Arrays populated when extracting localStorage content
    var savedEventTitle = [];
    var savedEventImage = [];
    var savedEventSummary = [];
    var savedEventCtaUrl = [];
    var savedEventCtaTitle = [];

    // lifetime
    if (localStorage.time == null) {
      localStorage.time = new Date();
    }

    // Wrokout session lifetime
    var currentTime = new Date();
    var sessionLifetime = currentTime - Date.parse(localStorage.time);
    sessionLifetime = sessionLifetime / (1000 * 60);

    // clear session after 60 minutes
    if (sessionLifetime > 60 )
    {
      localStorage.clear();
    }

    // push geo panels in an array
    var $panels = $('.geo') ;

    // Instantiate containers with a Loading message
    for (var i = 0; i < $panels.length; i++) {

      var $currentPanel = $panels.eq(i);
      // Load saved seesion from HTLM 5 local storage in not emprty
      if (localStorage.eventTitle != null) {

        savedEventTitle = JSON.parse(localStorage.eventTitle);
        $currentPanel.find('.pane-title').text(savedEventTitle[i]);

        savedEventImage = JSON.parse(localStorage.image);
        $currentPanel.find('.field-type-image img').attr('src', savedEventImage[i]);

        savedEventSummary = JSON.parse(localStorage.bodysummary);
        $currentPanel.find('.field-type-text-with-summary p').text(savedEventSummary[i]);

        savedEventCtaUrl = JSON.parse(localStorage.ctaUrl);
        $currentPanel.find('.more').html(savedEventCtaUrl[i]);

        $currentPanel.find('.more a').html('More about this event');

      }

      else {
        // Instantiate each panel.
        $currentPanel.find('.pane-title').text('');
        //$currentPanel.find('.pane-title').append('<img src=\'/sites/all/themes/custom/cruk/images/event_loader.GIF\' style=\'width:35px; height:20px;\'/>');
        //$currentPanel.find('.field-type-image img').attr('src', 'hhh');
        $currentPanel.find('.field-type-image img').attr('src', '');
        $currentPanel.find('.field-type-text-with-summary p').text('Loading your nearest events...');
        $currentPanel.find('.more').html('');
        $currentPanel.find('.more a').html('');
      }

    }

    if ($panels.length != 0){

      // Build ajax request - Query url - Get geolocated content back.
      function fetchEvents(location) {
          $.ajax({
          // For the ajax call to work we feed a URL query into it.
          url: Drupal.settings.basePath + 'geolocation-events?search_api_aggregation_4='
          +'&field_geofield_1_latlon%5Bradius%5D=10000'
          +'&field_geofield_1_latlon%5Bradius_min%5D=5'
          +'&field_geofield_1_latlon%5Bradius_max%5D=100'
          +'&field_geofield_1_latlon%5Bradius_units%5D=km'
          +'&field_geofield_1_latlon%5Blat%5D=51.03826129999999'
          +'&field_geofield_1_latlon%5Blng%5D=3.7125661000000036',
          type: 'GET',
          data: {
            // Pass device location into the adress.
            address:        location,
            items_per_page: '3'
          },

          // If the Ajax call was a succes then we map the content
          // to our panels and display it.
          success: function(data) {
            //localStorage.setItem('lStorageEventsTitle', JSON.stringify(data));

            for (var i = 0; i < $panels.length; i++) {

              $feed = data.Events[i].Event;

              // get current pannel.
              var $currentPanel = $panels.eq(i);

              // Do only if local storage is empty
              // Map to each panel field.
              if (savedEventTitle.length < 3 ) {

                $currentPanel.find('.pane-title').text($feed.title);
                $currentPanel.find('.field-type-image img').attr('src', $feed.Event);
                $currentPanel.find('.field-type-text-with-summary p').text($feed.body_summary);
                $currentPanel.find('.more').html($feed.view_node);
                $currentPanel.find('.more a').html('More about this event');

              }

              // save session using the html5 localStorage
              // Title
              eventTitle[i] = $feed.title;
              localStorage.eventTitle = JSON.stringify(eventTitle);

              // Image
              eventImage[i] = $feed.Event;
              localStorage.image = JSON.stringify(eventImage);

              // Summary
              eventSummary[i] = $feed.body_summary;
              localStorage.bodysummary = JSON.stringify(eventSummary);

              // CTA
              eventCtaUrl[i] = $feed.view_node;
              localStorage.ctaUrl = JSON.stringify(eventCtaUrl);

            }

          },

          // If for some reason the ajax call fails then we handle the error.
          error: function() {
            return 'Error';
          }
        });
      }


      // Success
      function success(position) {
        // We then fetch device cordinates (lat and long).
        var coordinates = position.coords.latitude + "," + position.coords.longitude;
        // Pass coordinates to custom function and fetch nearest results.
        fetchEvents(coordinates);
      }
      // Error
      function error(error) {
      var defaultLocation = '';
      // We need to know exactly what caused the error so that we
      // can act upon it accordingly.
      switch(error.code)
        {
          case error.PERMISSION_DENIED:
            // User denied the request for Geolocation.
            fetchEvents(defaultLocation);
            break;
          case error.POSITION_UNAVAILABLE:
            // Location information is unavailable.
            fetchEvents(defaultLocation);
            break;
          case error.TIMEOUT:
            // The request to get user location timed out.
            fallBackGeolocate();
            break;
          case error.UNKNOWN_ERROR:
            // An unknown error occurred.
            fetchEvents(defaultLocation);
            break;
          default: fallBackGeolocate();
        }
      }

      // We first want to know if geolocation is available on the browser.
      if (navigator.geolocation) {
        // If we have geolocation available on the browser
        // then we want to check if we can use it.
        navigator.geolocation.getCurrentPosition(success, error, {timeout: 15000});
      }

      else if (!navigator.geolocation) {
        // fallback
        fallBackGeolocate()
      }

     function fallBackGeolocate()
     {
              // If we have no geolocation service available on the browser.
          // then we need a fallback. www.google.com/jsapi api does just that.
          var cache;
          geolocation = window.navigator.geolocation = {};
          geolocation.getCurrentPosition = function(callback){

            if (cache) callback(cache);

            $.getScript('//www.google.com/jsapi',function(){

             // Sometimes ClientLocation comes back null.
             if (google.loader.ClientLocation) {
               cache = {
                coords : {
                  "latitude": google.loader.ClientLocation.latitude,
                  "longitude": google.loader.ClientLocation.longitude
                }
              };
             }
            });

          };

          geolocation.watchPosition = geolocation.getCurrentPosition;
          fetchEvents(geolocation.watchPosition);
     }

    } //End IF GEO
  }
});





;/*})'"*/
;/*})'"*/
 /*
 * jQuery UI Selectmenu version 1.5.0pre
 *
 * Copyright (c) 2009-2010 filament group, http://filamentgroup.com
 * Copyright (c) 2010-2014 Felix Nagel, http://www.felixnagel.com
 * Licensed under the MIT (MIT-LICENSE.txt)
 *
 * https://github.com/fnagel/jquery-ui/wiki/Selectmenu
 */

(function( $ ) {

$.widget("ui.selectmenu", {
	options: {
		appendTo: "body",
		typeAhead: 1000,
		style: 'dropdown',
		positionOptions: null,
		width: null,
		menuWidth: null,
		handleWidth: 26,
		maxHeight: null,
		icons: null,
		format: null,
		escapeHtml: false,
		bgImage: function() {}
	},

	_create: function() {
		var self = this, o = this.options;

		// make / set unique id
		var selectmenuId = this.element.uniqueId().attr( "id" );

		// quick array of button and menu id's
		this.ids = [ selectmenuId, selectmenuId + '-button', selectmenuId + '-menu' ];

		// define safe mouseup for future toggling
		this._safemouseup = true;
		this.isOpen = false;

		// create menu button wrapper
		this.newelement = $( '<a />', {
			'class': 'ui-selectmenu ui-widget ui-state-default ui-corner-all',
			'id' : this.ids[ 1 ],
			'role': 'button',
			'href': '#nogo',
			'tabindex': this.element.attr( 'disabled' ) ? 1 : 0,
			'aria-haspopup': true,
			'aria-owns': this.ids[ 2 ]
		});
		this.newelementWrap = $( "<span />" )
			.append( this.newelement )
			.insertAfter( this.element );

		// transfer tabindex
		var tabindex = this.element.attr( 'tabindex' );
		if ( tabindex ) {
			this.newelement.attr( 'tabindex', tabindex );
		}

		// save reference to select in data for ease in calling methods
		this.newelement.data( 'selectelement', this.element );

		// menu icon
		this.selectmenuIcon = $( '<span class="ui-selectmenu-icon ui-icon"></span>' )
			.prependTo( this.newelement );

		// append status span to button
		this.newelement.prepend( '<span class="ui-selectmenu-status" />' );

		// make associated form label trigger focus
		this.element.bind({
			'click.selectmenu':  function( event ) {
				self.newelement.focus();
				event.preventDefault();
			}
		});

		// click toggle for menu visibility
		this.newelement
			.bind( 'mousedown.selectmenu', function( event ) {
				self._toggle( event, true );
				// make sure a click won't open/close instantly
				if ( o.style == "popup" ) {
					self._safemouseup = false;
					setTimeout( function() { self._safemouseup = true; }, 300 );
				}

				event.preventDefault();
			})
			.bind( 'click.selectmenu', function( event ) {
				event.preventDefault();
			})
			.bind( "keydown.selectmenu", function( event ) {
				var ret = false;
				switch ( event.keyCode ) {
					case $.ui.keyCode.ENTER:
						ret = true;
						break;
					case $.ui.keyCode.SPACE:
						self._toggle( event );
						break;
					case $.ui.keyCode.UP:
						if ( event.altKey ) {
							self.open( event );
						} else {
							self._moveSelection( -1 );
						}
						break;
					case $.ui.keyCode.DOWN:
						if ( event.altKey ) {
							self.open( event );
						} else {
							self._moveSelection( 1 );
						}
						break;
					case $.ui.keyCode.LEFT:
						self._moveSelection( -1 );
						break;
					case $.ui.keyCode.RIGHT:
						self._moveSelection( 1 );
						break;
					case $.ui.keyCode.TAB:
						ret = true;
						break;
					case $.ui.keyCode.PAGE_UP:
					case $.ui.keyCode.HOME:
						self.index( 0 );
						break;
					case $.ui.keyCode.PAGE_DOWN:
					case $.ui.keyCode.END:
						self.index( self._optionLis.length );
						break;
					default:
						ret = true;
				}
				return ret;
			})
			.bind( 'keypress.selectmenu', function( event ) {
				if ( event.which > 0 ) {
					self._typeAhead( event.which, 'mouseup' );
				}
				return true;
			})
			.bind( 'mouseover.selectmenu', function() {
				if ( !o.disabled ) $( this ).addClass( 'ui-state-hover' );
			})
			.bind( 'mouseout.selectmenu', function() {
				if ( !o.disabled ) $( this ).removeClass( 'ui-state-hover' );
			})
			.bind( 'focus.selectmenu', function() {
				if ( !o.disabled ) $( this ).addClass( 'ui-state-focus' );
			})
			.bind( 'blur.selectmenu', function() {
				if (!o.disabled) $( this ).removeClass( 'ui-state-focus' );
			});

		// document click closes menu
		$( document ).bind( "mousedown.selectmenu-" + this.ids[ 0 ], function( event ) {
			//check if open and if the clicket targes parent is the same
			if ( self.isOpen && !$( event.target ).closest( "#" + self.ids[ 1 ] ).length ) {
				self.close( event );
			}
		});

		// change event on original selectmenu
		this.element
			.bind( "click.selectmenu", function() {
				self._refreshValue();
			})
			// FIXME: newelement can be null under unclear circumstances in IE8
			// TODO not sure if this is still a problem (fnagel 20.03.11)
			.bind( "focus.selectmenu", function() {
				if ( self.newelement ) {
					self.newelement[ 0 ].focus();
				}
			});

		// set width when not set via options
		if ( !o.width ) {
			o.width = this.element.outerWidth();
		}
		// set menu button width
		this.newelement.width( o.width );

		// hide original selectmenu element
		this.element.hide();

		// create menu portion, append to body
		this.list = $( '<ul />', {
			'class': 'ui-widget ui-widget-content',
			'aria-hidden': true,
			'role': 'listbox',
			'aria-labelledby': this.ids[ 1 ],
			'id': this.ids[ 2 ]
		});
		this.listWrap = $( "<div />", {
			'class': 'ui-selectmenu-menu'
		}).append( this.list ).appendTo( o.appendTo );

		// transfer menu click to menu button
		this.list
			.bind("keydown.selectmenu", function(event) {
				var ret = false;
				switch ( event.keyCode ) {
					case $.ui.keyCode.UP:
						if ( event.altKey ) {
							self.close( event, true );
						} else {
							self._moveFocus( -1 );
						}
						break;
					case $.ui.keyCode.DOWN:
						if ( event.altKey ) {
							self.close( event, true );
						} else {
							self._moveFocus( 1 );
						}
						break;
					case $.ui.keyCode.LEFT:
						self._moveFocus( -1 );
						break;
					case $.ui.keyCode.RIGHT:
						self._moveFocus( 1 );
						break;
					case $.ui.keyCode.HOME:
						self._moveFocus( ':first' );
						break;
					case $.ui.keyCode.PAGE_UP:
						self._scrollPage( 'up' );
						break;
					case $.ui.keyCode.PAGE_DOWN:
						self._scrollPage( 'down' );
						break;
					case $.ui.keyCode.END:
						self._moveFocus( ':last' );
						break;
					case $.ui.keyCode.ENTER:
					case $.ui.keyCode.SPACE:
						self.close( event, true);
						$( event.target ).parents( 'li:eq(0)' ).trigger( 'mouseup' );
						break;
					case $.ui.keyCode.TAB:
						ret = true;
						self.close( event, true );
						$( event.target ).parents( 'li:eq(0)' ).trigger( 'mouseup' );
						break;
					case $.ui.keyCode.ESCAPE:
						self.close( event, true );
						break;
					default:
						ret = true;
				}
				return ret;
			})
			.bind( 'keypress.selectmenu', function( event ) {
				if ( event.which > 0 ) {
					self._typeAhead( event.which, 'focus' );
				}
				return true;
			})
			// this allows for using the scrollbar in an overflowed list
			.bind( 'mousedown.selectmenu mouseup.selectmenu', function() { return false; });

		// needed when window is resized
		$( window ).bind( "resize.selectmenu-" + this.ids[ 0 ], $.proxy( self.close, this ) );
	},

	_init: function() {
		var self = this, o = this.options;

		// serialize selectmenu element options
		var selectOptionData = [];
		this.element.find( 'option' ).each( function() {
			var opt = $( this );
			selectOptionData.push({
				value: opt.attr( 'value' ),
				text: self._formatText( opt.text(), opt ),
				selected: opt.attr( 'selected' ),
				disabled: opt.attr( 'disabled' ),
				classes: opt.attr( 'class' ),
				typeahead: opt.attr( 'typeahead'),
				parentOptGroup: opt.parent( 'optgroup' ),
				bgImage: o.bgImage.call( opt )
			});
		});

		// active state class is only used in popup style
		var activeClass = ( self.options.style == "popup" ) ? " ui-state-active" : "";

		// empty list so we can refresh the selectmenu via selectmenu()
		this.list.html( "" );

		// write li's
		if ( selectOptionData.length ) {
			for ( var i = 0; i < selectOptionData.length; i++ ) {
				var thisLiAttr = { role : 'presentation' };
				if ( selectOptionData[ i ].disabled ) {
					thisLiAttr[ 'class' ] = 'ui-state-disabled';
				}
				var thisAAttr = {
					html: selectOptionData[ i ].text || '&nbsp;',
					href: '#nogo',
					tabindex : -1,
					role: 'option',
					'aria-selected' : false
				};
				if ( selectOptionData[ i ].disabled ) {
					thisAAttr[ 'aria-disabled' ] = true;
				}
				if ( selectOptionData[ i ].typeahead ) {
					thisAAttr[ 'typeahead' ] = selectOptionData[ i ].typeahead;
				}
				var thisA = $( '<a/>', thisAAttr )
					.bind( 'focus.selectmenu', function() {
						$( this ).parent().mouseover();
					})
					.bind( 'blur.selectmenu', function() {
						$( this ).parent().mouseout();
					});
				var thisLi = $( '<li/>', thisLiAttr )
					.append( thisA )
					.data( 'index', i )
					.addClass( selectOptionData[ i ].classes )
					.data( 'optionClasses', selectOptionData[ i ].classes || '' )
					.bind( "mouseup.selectmenu", function( event ) {
						if ( self._safemouseup && !self._disabled( event.currentTarget ) && !self._disabled( $( event.currentTarget ).parents( "ul > li.ui-selectmenu-group " ) ) ) {
							self.index( $( this ).data( 'index' ) );
							self.select( event );
							self.close( event, true );
						}
						return false;
					})
					.bind( "click.selectmenu", function() {
						return false;
					})
					.bind('mouseover.selectmenu', function( e ) {
						// no hover if disabled
						if ( !$( this ).hasClass( 'ui-state-disabled' ) && !$( this ).parent( "ul" ).parent( "li" ).hasClass( 'ui-state-disabled' ) ) {
							if ( self._typeAhead_timer === undefined ) {
								e.optionValue = self.element[ 0 ].options[ $( this ).data( 'index' ) ].value;
								self._trigger( "hover", e, self._uiHash() );
								self._selectedOptionLi().addClass( activeClass );
								self._focusedOptionLi().removeClass( 'ui-selectmenu-item-focus ui-state-hover' );
								$( this ).removeClass( 'ui-state-active' ).addClass( 'ui-selectmenu-item-focus ui-state-hover' );
							}
						}
					})
					.bind( 'mouseout.selectmenu', function( e ) {
						if ( $( this ).is( self._selectedOptionLi() ) ) {
							$( this ).addClass( activeClass );
						}
						e.optionValue = self.element[ 0 ].options[ $( this ).data( 'index' ) ].value;
						self._trigger( "blur", e, self._uiHash() );
						$( this ).removeClass( 'ui-selectmenu-item-focus ui-state-hover' );
					});

				// optgroup or not...
				if ( selectOptionData[ i ].parentOptGroup.length ) {
					var optGroupName = 'ui-selectmenu-group-' + this.element.find( 'optgroup' ).index( selectOptionData[ i ].parentOptGroup );
					if ( this.list.find( 'li.' + optGroupName ).length ) {
						this.list.find( 'li.' + optGroupName + ':last ul' ).append( thisLi );
					} else {
						$( '<li role="presentation" class="ui-selectmenu-group ' + optGroupName + ( selectOptionData[ i ].parentOptGroup.attr( "disabled" ) ? ' ' + 'ui-state-disabled" aria-disabled="true"' : '"' ) + '><span class="ui-selectmenu-group-label">' + selectOptionData[ i ].parentOptGroup.attr( 'label' ) + '</span><ul></ul></li>' )
							.appendTo( this.list )
							.find( 'ul' )
							.append( thisLi );
					}
				} else {
					thisLi.appendTo( this.list );
				}

				// append icon if option is specified
				if ( o.icons ) {
					for ( var j in o.icons ) {
						if (thisLi.is(o.icons[ j ].find)) {
							thisLi
								.data( 'optionClasses', selectOptionData[ i ].classes + ' ui-selectmenu-hasIcon' )
								.addClass( 'ui-selectmenu-hasIcon' );
							var iconClass = o.icons[ j ].icon || "";
							thisLi
								.find( 'a:eq(0)' )
								.prepend( '<span class="ui-selectmenu-item-icon ui-icon ' + iconClass + '"></span>' );
							if ( selectOptionData[ i ].bgImage ) {
								thisLi.find( 'span' ).css( 'background-image', selectOptionData[ i ].bgImage );
							}
						}
					}
				}
			}
		} else {
			$('<li role="presentation"><a href="#nogo" tabindex="-1" role="option"></a></li>' ).appendTo( this.list );
		}
		// we need to set and unset the CSS classes for dropdown and popup style
		var isDropDown = ( o.style == 'dropdown' );
		this.newelement
			.toggleClass( 'ui-selectmenu-dropdown', isDropDown )
			.toggleClass( 'ui-selectmenu-popup', !isDropDown );
		this.list
			.toggleClass( 'ui-selectmenu-menu-dropdown ui-corner-bottom', isDropDown )
			.toggleClass( 'ui-selectmenu-menu-popup ui-corner-all', !isDropDown )
			// add corners to top and bottom menu items
			.find( 'li:first' )
			.toggleClass( 'ui-corner-top', !isDropDown )
			.end().find( 'li:last' )
			.addClass( 'ui-corner-bottom' );
		this.selectmenuIcon
			.toggleClass( 'ui-icon-triangle-1-s', isDropDown )
			.toggleClass( 'ui-icon-triangle-2-n-s', !isDropDown );

		// set menu width to either menuWidth option value, width option value, or select width
		if ( o.style == 'dropdown' ) {
			this.list.width( o.menuWidth ? o.menuWidth : o.width );
		} else {
			this.list.width( o.menuWidth ? o.menuWidth : o.width - o.handleWidth );
		}

		// Android 2 (Gingerbread) doesn't support internal scrollable divs.
		// Don't limit the menu height for that browser.
		if ( !navigator.userAgent.match( /Android 2/ ) ) {
			var listH = this.listWrap.height();
			var winH = $( window ).height();
			// calculate default max height
			var maxH = o.maxHeight ? Math.min( o.maxHeight, winH ) : winH / 3;
			if ( listH > maxH ) this.list.height( maxH );
		}

		// save reference to actionable li's (not group label li's)
		this._optionLis = this.list.find( 'li:not(.ui-selectmenu-group)' );

		// transfer disabled state
		if ( this.element.attr( 'disabled' ) ) {
			this.disable();
		} else {
			this.enable();
		}

		// update value
		this._refreshValue();

		// set selected item so movefocus has intial state
		this._selectedOptionLi().addClass( 'ui-selectmenu-item-focus' );

		// needed when selectmenu is placed at the very bottom / top of the page
		clearTimeout( this.refreshTimeout );
		this.refreshTimeout = window.setTimeout( function () {
			self._refreshPosition();
		}, 200 );
	},

	destroy: function() {
		this.element.removeData( this.widgetName )
			.removeClass( 'ui-selectmenu-disabled' + ' ' + 'ui-state-disabled' )
			.removeAttr( 'aria-disabled' )
			.unbind( ".selectmenu" );

		$( window ).unbind( ".selectmenu-" + this.ids[ 0 ] );
		$( document ).unbind( ".selectmenu-" + this.ids[ 0 ] );

		this.newelementWrap.remove();
		this.listWrap.remove();

		// unbind click event and show original select
		this.element
			.unbind( ".selectmenu" )
			.show();

		// call widget destroy function
		$.Widget.prototype.destroy.apply( this, arguments );
	},

	_typeAhead: function( code, eventType ) {
		var self = this,
			c = String.fromCharCode( code ).toLowerCase(),
			matchee = null,
			nextIndex = null;

		// Clear any previous timer if present
		if ( self._typeAhead_timer ) {
			window.clearTimeout( self._typeAhead_timer );
			self._typeAhead_timer = undefined;
		}
		// Store the character typed
		self._typeAhead_chars = ( self._typeAhead_chars === undefined ? "" : self._typeAhead_chars ).concat( c );
		// Detect if we are in cyciling mode or direct selection mode
		if ( self._typeAhead_chars.length < 2 || ( self._typeAhead_chars.substr( -2, 1 ) === c && self._typeAhead_cycling ) ) {
			self._typeAhead_cycling = true;
			// Match only the first character and loop
			matchee = c;
		} else {
			// We won't be cycling anymore until the timer expires
			self._typeAhead_cycling = false;
			// Match all the characters typed
			matchee = self._typeAhead_chars;
		}

		// We need to determine the currently active index, but it depends on
		// the used context: if it's in the element, we want the actual
		// selected index, if it's in the menu, just the focused one
		var selectedIndex = ( eventType !== 'focus' ? this._selectedOptionLi().data( 'index' ) : this._focusedOptionLi().data( 'index' )) || 0;
		for ( var i = 0; i < this._optionLis.length; i++ ) {
			var thisText = this._optionLis.eq( i ).text().substr( 0, matchee.length ).toLowerCase();
			if ( thisText === matchee ) {
				if ( self._typeAhead_cycling ) {
					if ( nextIndex === null )
						nextIndex = i;
					if ( i > selectedIndex ) {
						nextIndex = i;
						break;
					}
				} else {
					nextIndex = i;
					break;
				}
			}
		}

		if ( nextIndex !== null ) {
			// Why using trigger() instead of a direct method to select the index? Because we don't what is the exact action to do,
			// it depends if the user is typing on the element or on the popped up menu
			this._optionLis.eq( nextIndex ).find( "a" ).trigger( eventType );
		}

		self._typeAhead_timer = window.setTimeout( function() {
			self._typeAhead_timer = undefined;
			self._typeAhead_chars = undefined;
			self._typeAhead_cycling = undefined;
		}, self.options.typeAhead );
	},

	// returns some usefull information, called by callbacks only
	_uiHash: function() {
		var index = this.index();
		return {
			index: index,
			option: $( "option", this.element ).get( index ),
			value: this.element[ 0 ].value
		};
	},

	open: function( event ) {
		if ( this.newelement.attr( "aria-disabled" ) != 'true' ) {
			var self = this,
				o = this.options,
				selected = this._selectedOptionLi(),
				link = selected.find("a");

			self._closeOthers( event );
			self.newelement.addClass( 'ui-state-active' );
			self.list.attr( 'aria-hidden', false );
			self.listWrap.addClass( 'ui-selectmenu-open' );

			if ( o.style == "dropdown" ) {
				self.newelement.removeClass( 'ui-corner-all' ).addClass( 'ui-corner-top' );
			} else {
				// center overflow and avoid flickering
				this.list
					.css( "left", -5000 )
					.scrollTop( this.list.scrollTop() + selected.position().top - this.list.outerHeight() / 2 + selected.outerHeight() / 2 )
					.css( "left", "auto" );
			}

			self._refreshPosition();

			if ( link.length ) {
				link[ 0 ].focus();
			}

			self.isOpen = true;
			self._trigger( "open", event, self._uiHash() );
		}
	},

	close: function( event, retainFocus ) {
		if ( this.newelement.is( '.ui-state-active') ) {
			this.newelement.removeClass( 'ui-state-active' );
			this.listWrap.removeClass( 'ui-selectmenu-open' );
			this.list.attr( 'aria-hidden', true );
			if ( this.options.style == "dropdown" ) {
				this.newelement.removeClass( 'ui-corner-top' ).addClass( 'ui-corner-all' );
			}
			if ( retainFocus ) {
				this.newelement.focus();
			}
			this.isOpen = false;
			this._trigger( "close", event, this._uiHash() );
		}
	},

	change: function( event ) {
		this.element.trigger( "change" );
		this._trigger( "change", event, this._uiHash() );
	},

	select: function( event ) {
		if ( this._disabled( event.currentTarget ) ) { return false; }
		this._trigger( "select", event, this._uiHash() );
	},

	widget: function() {
		return this.listWrap.add( this.newelementWrap );
	},

	_closeOthers: function( event ) {
		$( '.ui-selectmenu.ui-state-active' ).not( this.newelement ).each( function() {
			$( this ).data( 'selectelement' ).selectmenu( 'close', event );
		});
		$( '.ui-selectmenu.ui-state-hover' ).trigger( 'mouseout' );
	},

	_toggle: function( event, retainFocus ) {
		if ( this.isOpen ) {
			this.close( event, retainFocus );
		} else {
			this.open( event );
		}
	},

	_formatText: function( text, opt ) {
		if ( this.options.format ) {
			text = this.options.format( text, opt );
		} else if ( this.options.escapeHtml ) {
			text = $( '<div />' ).text( text ).html();
		}
		return text;
	},

	_selectedIndex: function() {
		return this.element[ 0 ].selectedIndex;
	},

	_selectedOptionLi: function() {
		return this._optionLis.eq( this._selectedIndex() );
	},

	_focusedOptionLi: function() {
		return this.list.find( '.ui-selectmenu-item-focus' );
	},

	_moveSelection: function( amt, recIndex ) {
		// do nothing if disabled
		if ( !this.options.disabled ) {
			var currIndex = parseInt( this._selectedOptionLi().data( 'index' ) || 0, 10 );
			var newIndex = currIndex + amt;
			// do not loop when using up key
			if ( newIndex < 0 ) {
				newIndex = 0;
			}
			if ( newIndex > this._optionLis.size() - 1 ) {
				newIndex = this._optionLis.size() - 1;
			}
			// Occurs when a full loop has been made
			if ( newIndex === recIndex ) {
				return false;
			}

			if ( this._optionLis.eq( newIndex ).hasClass( 'ui-state-disabled' ) ) {
				// if option at newIndex is disabled, call _moveFocus, incrementing amt by one
				( amt > 0 ) ? ++amt : --amt;
				this._moveSelection( amt, newIndex );
			} else {
				this._optionLis.eq( newIndex ).trigger( 'mouseover' ).trigger( 'mouseup' );
			}
		}
	},

	_moveFocus: function( amt, recIndex ) {
		if ( !isNaN( amt ) ) {
			var currIndex = parseInt( this._focusedOptionLi().data( 'index' ) || 0, 10 );
			var newIndex = currIndex + amt;
		} else {
			var newIndex = parseInt( this._optionLis.filter( amt ).data( 'index' ), 10 );
		}

		if ( newIndex < 0 ) {
			newIndex = 0;
		}
		if ( newIndex > this._optionLis.size() - 1 ) {
			newIndex = this._optionLis.size() - 1;
		}

		//Occurs when a full loop has been made
		if ( newIndex === recIndex ) {
			return false;
		}

		var activeID = 'ui-selectmenu-item-' + Math.round( Math.random() * 1000 );

		this._focusedOptionLi().find( 'a:eq(0)' ).attr( 'id', '' );

		if ( this._optionLis.eq( newIndex ).hasClass( 'ui-state-disabled' ) ) {
			// if option at newIndex is disabled, call _moveFocus, incrementing amt by one
			( amt > 0 ) ? ++amt : --amt;
			this._moveFocus( amt, newIndex );
		} else {
			this._optionLis.eq( newIndex ).find( 'a:eq(0)' ).attr( 'id',activeID ).focus();
		}

		this.list.attr( 'aria-activedescendant', activeID );
	},

	_scrollPage: function( direction ) {
		var numPerPage = Math.floor( this.list.outerHeight() / this._optionLis.first().outerHeight() );
		numPerPage = ( direction == 'up' ? -numPerPage : numPerPage );
		this._moveFocus( numPerPage );
	},

	_setOption: function( key, value ) {
		this.options[ key ] = value;
		if ( key == 'disabled' ) {
			if ( value ) this.close();
			this.element
				.add( this.newelement )
				.add( this.list )[ value ? 'addClass' : 'removeClass' ]( 'ui-selectmenu-disabled ' + 'ui-state-disabled' )
				.attr( "aria-disabled" , value )
				.attr( "tabindex" , value ? 1 : 0 );
		}
	},

	disable: function( index, type ){
		// if options is not provided, call the parents disable function
		if ( typeof( index ) == 'undefined' ) {
			this._setOption( 'disabled', true );
		} else {
			this._toggleEnabled( ( type || "option" ), index, false );
		}
	},

	enable: function( index, type ) {
		// if options is not provided, call the parents enable function
		if ( typeof( index ) == 'undefined' ) {
			this._setOption( 'disabled', false );
		} else {
			this._toggleEnabled( ( type || "option" ), index, true );
		}
	},

	_disabled: function( elem ) {
		return $( elem ).hasClass( 'ui-state-disabled' );
	},

	// true = enabled, false = disabled
	_toggleEnabled: function( type, index, flag ) {
		var element = this.element.find( type ).eq( index ),
			elements = ( type === "optgroup" ) ? this.list.find( 'li.ui-selectmenu-group-' + index ) : this._optionLis.eq( index );

		if ( elements ) {
			elements
				.toggleClass( 'ui-state-disabled', !flag )
				.attr( "aria-disabled", !flag );

			if ( flag ) {
				element.removeAttr( "disabled" );
			} else {
				element.attr( "disabled", "disabled" );
			}
		}
	},

	index: function( newIndex ) {
		if ( arguments.length ) {
			if ( !this._disabled( $( this._optionLis[ newIndex ] ) ) && newIndex != this._selectedIndex() ) {
				this.element[ 0 ].selectedIndex = newIndex;
				this._refreshValue();
				this.change();
			} else {
				return false;
			}
		} else {
			return this._selectedIndex();
		}
	},

	value: function( newValue ) {
		if ( arguments.length && newValue != this.element[ 0 ].value ) {
			this.element[ 0 ].value = newValue;
			this._refreshValue();
			this.change();
		} else {
			return this.element[ 0 ].value;
		}
	},

	_refreshValue: function() {
		var activeClass = ( this.options.style == "popup" ) ? " ui-state-active" : "";
		var activeID = 'ui-selectmenu-item-' + Math.round( Math.random() * 1000 );
		// deselect previous
		this.list
			.find( '.ui-selectmenu-item-selected' )
			.removeClass( "ui-selectmenu-item-selected" + activeClass )
			.find('a')
			.attr( 'aria-selected', 'false' )
			.attr( 'id', '' );
		// select new
		this._selectedOptionLi()
			.addClass( "ui-selectmenu-item-selected" + activeClass )
			.find( 'a' )
			.attr( 'aria-selected', 'true' )
			.attr( 'id', activeID );

		// toggle any class brought in from option
		var currentOptionClasses = ( this.newelement.data( 'optionClasses' ) ? this.newelement.data( 'optionClasses' ) : "" );
		var newOptionClasses = ( this._selectedOptionLi().data( 'optionClasses' ) ? this._selectedOptionLi().data( 'optionClasses' ) : "" );
		this.newelement
			.removeClass( currentOptionClasses )
			.data( 'optionClasses', newOptionClasses )
			.addClass( newOptionClasses )
			.find( '.ui-selectmenu-status' )
			.html( this._selectedOptionLi().find( 'a:eq(0)' ).html() );

		this.list.attr( 'aria-activedescendant', activeID );
	},

	_refreshPosition: function() {
		var o = this.options,
			positionDefault = {
				of: this.newelement,
				my: "left top",
				at: "left bottom",
				collision: 'flip'
			};

		// if its a pop-up we need to calculate the position of the selected li
		if ( o.style == "popup" ) {
			var selected = this._selectedOptionLi();
			positionDefault.my = "left top" + ( this.list.offset().top - selected.offset().top - ( this.newelement.outerHeight() + selected.outerHeight() ) / 2 );
			positionDefault.collision = "fit";
		}

		this.listWrap
			.removeAttr( 'style' )
			.zIndex( this.element.zIndex() + 2 )
			.position( $.extend( positionDefault, o.positionOptions ) );
	}
});

})( jQuery );

;/*})'"*/
;/*})'"*/
