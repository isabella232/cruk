;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.optin : stack1)) != null ? stack1.giftaid : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			.checkbox-group-giftaid-optin {\n				background-color: "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.ga_button_colour : stack1), depth0))
    + ";\n			}\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			.checkbox-group-giftaid-optin {\n				background-color: "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.ga_button_not_colour : stack1), depth0))
    + ";\n			}\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.hidedonationtype : depth0), {"name":"unless","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "		<fieldset>\n			<h2>Donation type</h2>\n\n			<p class=\"sub\">Is this donation your personal money?</p>\n\n			<p>We'll be able to claim gift aid if this is your personal money and does not depend on receiving goods in return.</p>\n\n			<label class=\"checkbox-button-group personal-switch";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.ispersonal : stack1), "!==", (depth0 != null ? depth0.fundraisingConstant : depth0), {"name":"ifCond","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" for=\"personal-money\">\n				<input type=\"radio\" id=\"personal-money\" name=\"is-personal\" data-type=\"personal\"";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.ispersonal : stack1), "!==", (depth0 != null ? depth0.fundraisingConstant : depth0), {"name":"ifCond","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " />\n				Yes, this donation is my personal money\n			</label>\n\n			<label class=\"checkbox-button-group personal-switch";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.ispersonal : stack1), "===", (depth0 != null ? depth0.fundraisingConstant : depth0), {"name":"ifCond","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" for=\"not-personal-money\">\n				<input type=\"radio\" id=\"not-personal-money\" name=\"is-personal\" data-type=\"fundraising\"";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.ispersonal : stack1), "===", (depth0 != null ? depth0.fundraisingConstant : depth0), {"name":"ifCond","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " />\n				No, this is money I've collected from others\n			</label>\n		</fieldset>\n";
},"8":function(depth0,helpers,partials,data) {
  return " active";
  },"10":function(depth0,helpers,partials,data) {
  return " checked=\"checked\"";
  },"12":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.collection_payment : stack1)) != null ? stack1.active : stack1), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"13":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.collection_payment : stack1)) != null ? stack1.codes : stack1)) != null ? stack1.length : stack1), ">", 1, {"name":"ifCond","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"14":function(depth0,helpers,partials,data) {
  return "			<fieldset id=\"fundraising-options\"></fieldset>\n";
  },"16":function(depth0,helpers,partials,data) {
  return " hidden";
  },"18":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.gift_aid : stack1)) != null ? stack1.gift_aid_not_ticked_copy : stack1), {"name":"if","hash":{},"fn":this.program(19, data),"inverse":this.program(21, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"19":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "						";
  stack1 = ((helpers.returnGiftAidStatement || (depth0 && depth0.returnGiftAidStatement) || helperMissing).call(depth0, false, (depth0 != null ? depth0.form : depth0), (depth0 != null ? depth0.activeDonation : depth0), {"name":"returnGiftAidStatement","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"21":function(depth0,helpers,partials,data) {
  var stack1, buffer = "	            <span class=\"text1\">With Gift Aid, your donation of </span>\n	            <span class=\"larger\" id=\"giftaid-donation-base-amount\">&pound;";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_amount : stack1), {"name":"if","hash":{},"fn":this.program(22, data),"inverse":this.program(24, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </span>\n	            <span class=\"text2\">would be worth </span>\n	            <span class=\"larger\" id=\"giftaid-donation-gross-amount\">&pound;";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_amount : stack1), {"name":"if","hash":{},"fn":this.program(26, data),"inverse":this.program(28, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </span>\n	            <span class=\"text3\">at no extra cost to you.</span>\n";
},"22":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_amount : stack1), depth0));
  },"24":function(depth0,helpers,partials,data) {
  return "20";
  },"26":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helpers.giftAidValue || (depth0 && depth0.giftAidValue) || helperMissing).call(depth0, (depth0 != null ? depth0.activeDonation : depth0), {"name":"giftAidValue","hash":{},"data":data})));
  },"28":function(depth0,helpers,partials,data) {
  return "25";
  },"30":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.gift_aid : stack1)) != null ? stack1.gift_aid_ticked_copy : stack1), {"name":"if","hash":{},"fn":this.program(31, data),"inverse":this.program(33, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"31":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "						";
  stack1 = ((helpers.returnGiftAidStatement || (depth0 && depth0.returnGiftAidStatement) || helperMissing).call(depth0, true, (depth0 != null ? depth0.form : depth0), (depth0 != null ? depth0.activeDonation : depth0), {"name":"returnGiftAidStatement","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"33":function(depth0,helpers,partials,data) {
  var stack1, buffer = "	              <span class=\"text1\">Gift Aid has now been added to your donation of </span>\n	              <span class=\"larger\" id=\"giftaid-donation-base-amount\">&pound;";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_amount : stack1), {"name":"if","hash":{},"fn":this.program(22, data),"inverse":this.program(24, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " </span>\n	              <span class=\"text2\">making it worth </span>\n	              <span class=\"larger\" id=\"giftaid-donation-gross-amount\">&pound;";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_amount : stack1), {"name":"if","hash":{},"fn":this.program(26, data),"inverse":this.program(28, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </span>\n	              <span class=\"text3\">at no extra cost to you. </span>\n";
},"35":function(depth0,helpers,partials,data) {
  return "			<p class=\"gift-aid-bubble gift-aid-added\">Gift Aid added</p>\n";
  },"37":function(depth0,helpers,partials,data) {
  return "			<p class=\"gift-aid-bubble add-gift-aid\">Add 25% Gift Aid</p>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<style>\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.theme_option : stack1), "!==", "su2c", {"name":"ifCond","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</style>\n\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.type : depth0), "===", "single", {"name":"ifCond","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.ispersonal : stack1), "===", (depth0 != null ? depth0.fundraisingConstant : depth0), {"name":"ifCond","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n<fieldset class=\"gift-aid-container";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.ispersonal : stack1), "===", (depth0 != null ? depth0.fundraisingConstant : depth0), {"name":"ifCond","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n\n	<img src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.gift_aid : stack1)) != null ? stack1.logo : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.gift_aid : stack1)) != null ? stack1.logo : stack1)) != null ? stack1.title : stack1), depth0))
    + "\" id=\"gift-aid-logo\" />\n\n	<h2 id=\"gift-aid-title\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.gift_aid : stack1)) != null ? stack1.title : stack1), depth0))
    + "</h2>\n\n	<p class=\"sub\" id=\"giftaid-statement\">\n";
  stack1 = helpers.unless.call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.optin : stack1)) != null ? stack1.giftaid : stack1), {"name":"unless","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.optin : stack1)) != null ? stack1.giftaid : stack1), {"name":"if","hash":{},"fn":this.program(30, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</p>\n\n	<label class=\"checkbox-group-giftaid-optin checkbox-button-group";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.optin : stack1)) != null ? stack1.giftaid : stack1), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" for=\"gift-aid-opt-in\">\n		<input type=\"checkbox\" id=\"gift-aid-opt-in\" name=\"optin-giftaid\" data-field-name=\"optin.giftaid\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.optin : stack1)) != null ? stack1.giftaid : stack1), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " />\n		"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.gift_aid : stack1)) != null ? stack1.gift_aid_button_copy : stack1), depth0))
    + "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.optin : stack1)) != null ? stack1.giftaid : stack1), {"name":"if","hash":{},"fn":this.program(35, data),"inverse":this.program(37, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</label>\n\n\n	<div id=\"gift-aid-legal\">\n		";
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.gift_aid : stack1)) != null ? stack1.gift_aid_tscs : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n	</div>\n\n</fieldset>\n";
},"useData":true});

},{"hbsfy/runtime":82}],2:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "<div class=\"cant-find\">\n        ";
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.research_not_found_copy : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n	<a class=\"close\" href=\"\">\n		<span>Back</span>\n	</a>\n</div>\n";
},"useData":true});

},{"hbsfy/runtime":82}],3:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "	<h3>You are donating ";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.type : stack1), "===", "cancer", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<em>"
    + escapeExpression(((helpers.lowercase || (depth0 && depth0.lowercase) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1), {"name":"lowercase","hash":{},"data":data})))
    + "</em></h3>\n\n	<div class=\"image-container\">\n		<img src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.image_large : stack1), {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" />\n		<span>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span>\n	</div>\n\n	<a id=\"change-restriction\" data-code=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.code : stack1), depth0))
    + "\" class=\"edit\" href=\"\">Edit</a>\n";
},"2":function(depth0,helpers,partials,data) {
  return "to help beat ";
  },"4":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <h3>You are donating <em>to beat all cancers sooner</em></h3>\n\n    <div class=\"image-container\">\n        <img src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/all-cancers-220x220.png", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Where the need is greatest\" />\n        <span>Where the need is greatest</span>\n    </div>\n\n    <a id=\"change-restriction\" data-code=\"all\" class=\"edit\" href=\"\">Edit</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"summary-container\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.model : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});

},{"hbsfy/runtime":82}],4:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.featured : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "		<li data-value=\""
    + escapeExpression(lambda((depth0 != null ? depth0.code : depth0), depth0))
    + "\"";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (data && data.index), "===", 0, {"name":"ifCond","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n			<img src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, (depth0 != null ? depth0.image : depth0), {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\""
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "\" />\n			<span>"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</span>\n		</li>\n";
},"3":function(depth0,helpers,partials,data) {
  return " class=\"first\"";
  },"5":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "				<option value=\""
    + escapeExpression(lambda((depth0 != null ? depth0.code : depth0), depth0))
    + "\">"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<h3>Donate by cancer type or research area</h3>\n\n<p>Choose where you'd like your money to go from the options below or see the drop down for more.</p>\n\n<ul class=\"cancer-types\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.collection : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <li data-value=\"all\">\n        <img src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/all-cancers-80x80.png", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Where the need is greatest\" />\n        <span>Give where need is greatest</span>\n    </li>\n</ul>\n\n<div class=\"cancer-selection\">\n	<label for=\"cancer-options\">View all the cancer types and areas of research to which you can donate</label>\n		<select onchange=\"this.blur()\" id=\"cancer-options\" name=\"cancer-options\">\n			<option value=\"\">Please select from all options</option>\n					<option value=\"all\">Give where need is greatest</option>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.collectionAlpha : depth0), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			<option value=\"none\">I want to donate to other research</option>\n		</select>\n</div>\n";
},"useData":true});

},{"hbsfy/runtime":82}],5:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.summary : depth0), {"name":"unless","hash":{},"fn":this.program(2, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	<div class=\"donation-amount-option-container\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.gift_array_single_donation : stack1), {"name":"each","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n		<div class=\"amount-wrapper\">\n			<div id=\"amount-container\">\n				<h4>"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.default_copy_other_amount : stack1), depth0))
    + "</h4>\n				<div class=\"donation-amount-container\">\n					<span class=\"currency\">&pound;</span>\n					<input class=\"text donation-other-amount js-donation-other-amount";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_amount : stack1), {"name":"if","hash":{},"fn":this.program(11, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\"single-donation-other-amount\" name=\"single-donation-other-amount\" value=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_amount : stack1), {"name":"if","hash":{},"fn":this.program(13, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" />\n				</div>\n			</div>\n		</div>\n		<div id=\"amount-error\"></div>\n	</div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "		<h2>Donation amount</h2>\n		<p class=\"sub\">Please choose an amount for your single donation.\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.recurrent_payment : stack1)) != null ? stack1.active : stack1), "===", true, {"name":"ifCond","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</p>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.template_setup : stack1)) != null ? stack1.donation_type_switch : stack1), "===", true, {"name":"ifCond","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  return "					<span id=\"change-donation-type\">Or change to make a <a href=\"#regular\">regular donation</a></span>\n";
  },"6":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "			<label for=\"donation-"
    + escapeExpression(lambda(depth0, depth0))
    + "\" class=\"radio-group-option js-donation-amount";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depths[1] != null ? depths[1].activeDonation : depths[1])) != null ? stack1.payment_amount : stack1), "===", depth0, {"name":"ifCond","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n				&pound;"
    + escapeExpression(lambda(depth0, depth0))
    + "\n				<input type=\"radio\" id=\"donation-"
    + escapeExpression(lambda(depth0, depth0))
    + "\" value=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\" name=\"donation-"
    + escapeExpression(lambda(depth0, depth0))
    + "\"";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depths[1] != null ? depths[1].activeDonation : depths[1])) != null ? stack1.payment_amount : stack1), "===", depth0, {"name":"ifCond","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " />\n			</label>\n";
},"7":function(depth0,helpers,partials,data) {
  return " active";
  },"9":function(depth0,helpers,partials,data) {
  return " checked=\"checked\"";
  },"11":function(depth0,helpers,partials,data) {
  return " valid";
  },"13":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helpers.twoDecimalPlaces || (depth0 && depth0.twoDecimalPlaces) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_amount : stack1), {"name":"twoDecimalPlaces","hash":{},"data":data})));
  },"15":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.summary : depth0), {"name":"unless","hash":{},"fn":this.program(16, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	<div class=\"donation-amount-option-container\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.gift_array_regular_donation : stack1), {"name":"each","hash":{},"fn":this.program(20, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n		<div class=\"amount-wrapper\">\n			<div id=\"amount-container\">\n				<h4>"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.default_copy_other_amount : stack1), depth0))
    + "</h4>\n				<div class=\"donation-amount-container\">\n					<span class=\"currency\">&pound;</span>\n					<input class=\"text donation-other-amount js-donation-other-amount";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_amount : stack1), {"name":"if","hash":{},"fn":this.program(11, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\"regular-donation-other-amount\" name=\"regular-donation-other-amount\" value=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_amount : stack1), {"name":"if","hash":{},"fn":this.program(13, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" />\n				</div>\n			</div>\n		</div>\n		<div id=\"amount-error\"></div>\n	</div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.summary : depth0), {"name":"if","hash":{},"fn":this.program(22, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	<div class=\"donation-frequency-container\">\n		<label class=\"radio-group-option js-donation-frequency";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.frequency : stack1), "===", "monthly", {"name":"ifCond","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" for=\"donation-frequency-monthly\">\n			<input type=\"radio\" id=\"donation-frequency-monthly\" value=\"monthly\" name=\"donation-frequency\"";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.frequency : stack1), "===", "monthly", {"name":"ifCond","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " />\n			Monthly\n		</label>\n\n		<label class=\"radio-group-option js-donation-frequency";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.frequency : stack1), "===", "quarterly", {"name":"ifCond","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" for=\"donation-frequency-quarterly\">\n			<input type=\"radio\" id=\"donation-frequency-quarterly\" value=\"quarterly\" name=\"donation-frequency\"";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.frequency : stack1), "===", "quarterly", {"name":"ifCond","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " />\n			Quarterly\n		</label>\n\n		<label class=\"radio-group-option js-donation-frequency";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.frequency : stack1), "===", "annually", {"name":"ifCond","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" for=\"donation-frequency-annually\">\n			<input type=\"radio\" id=\"donation-frequency-annually\" value=\"annually\" name=\"donation-frequency\"";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.frequency : stack1), "===", "annually", {"name":"ifCond","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " />\n			Annually\n		</label>\n\n		<div id=\"donation-frequency-error\"></div>\n	</div>\n";
},"16":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "		<h2>Donation amount</h2>\n		<p class=\"sub\">Please choose an amount for your regular donation.\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.single_payment : stack1)) != null ? stack1.active : stack1), "===", true, {"name":"ifCond","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</p>\n";
},"17":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.template_setup : stack1)) != null ? stack1.donation_type_switch : stack1), "===", true, {"name":"ifCond","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"18":function(depth0,helpers,partials,data) {
  return "					<span id=\"change-donation-type\">Or change to make a <a href=\"#single\">single donation</a></span>\n";
  },"20":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "			<label for=\"donation-"
    + escapeExpression(lambda(depth0, depth0))
    + "\" class=\"radio-group-option js-donation-amount";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depths[1] != null ? depths[1].activeDonation : depths[1])) != null ? stack1.payment_amount : stack1), "===", depth0, {"name":"ifCond","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n				&pound;"
    + escapeExpression(lambda(depth0, depth0))
    + "\n				<input type=\"radio\" id=\"donation-"
    + escapeExpression(lambda(depth0, depth0))
    + "\" value=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\" name=\"donation-"
    + escapeExpression(lambda(depth0, depth0))
    + "\" ";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depths[1] != null ? depths[1].activeDonation : depths[1])) != null ? stack1.payment_amount : stack1), "===", depth0, {"name":"ifCond","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " />\n			</label>\n";
},"22":function(depth0,helpers,partials,data) {
  return "		<h3>Donation frequency</h3>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.type : depth0), "===", "single", {"name":"ifCond","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.type : depth0), "===", "regular", {"name":"ifCond","hash":{},"fn":this.program(15, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true,"useDepths":true});

},{"hbsfy/runtime":82}],6:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "		";
  stack1 = ((helper = (helper = helpers.payment_error_html || (depth0 != null ? depth0.payment_error_html : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"payment_error_html","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"3":function(depth0,helpers,partials,data) {
  return "		<div id=\"connection-error\">\n			<h2>Want to donate by credit card instead?</h2>\n			<p class=\"error\">Don't worry, no payment has been taken yet. Please select a payment method and donate now to help beat cancer sooner.</p>\n		</div>\n";
  },"5":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "		<div id=\"donation-method-toggle\">\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.status : stack1), "!==", "Cancelled", {"name":"ifCond","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n    		<label for=\"credit-card-payment\" class=\"checkbox-button-group donation-method js-donation-method\">\n				<input type=\"radio\" id=\"credit-card-payment\" name=\"donation-method\" data-target=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.template_setup : stack1)) != null ? stack1.gateway : stack1), depth0))
    + "\" data-applepay=\"false\" value=\"credit-card-payment\" />\n				Credit/Debit card\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.theme : depth0), "===", "su2c", {"name":"ifCond","hash":{},"fn":this.program(11, data, depths),"inverse":this.program(13, data, depths),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "			</label>\n\n    		<label for=\"paypal-payment\" class=\"checkbox-button-group donation-method js-donation-method\">\n				<input type=\"radio\" id=\"paypal-payment\" name=\"donation-method\" data-target=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.paypal_gateway : stack1), depth0))
    + "\" data-applepay=\"false\" value=\"paypal-payment\" />\n				PayPal\n				<img src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/paypal.png", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Pay with PayPal\" class=\"paypal-logo\" />\n			</label>\n\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.showApplePay : depth0), "===", true, {"name":"ifCond","hash":{},"fn":this.program(15, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n";
},"6":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? depths[1].activeDonation : depths[1])) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.ispersonal : stack1), "!==", (depths[1] != null ? depths[1].fundraisingConstant : depths[1]), {"name":"ifCond","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? depths[1].activeDonation : depths[1])) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.ispersonal : stack1), "===", (depths[1] != null ? depths[1].fundraisingConstant : depths[1]), {"name":"ifCond","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  return "  			   <h2>How would you like to donate?</h2>\n";
  },"9":function(depth0,helpers,partials,data) {
  return "          <h2>How would you like to pay?</h2>\n";
  },"11":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "					<img src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/credit-debit-card-su2c.png", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Pay with Credit/Debit cards\" />\n";
},"13":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "					<img src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "https://d77hrzbdrgc46.cloudfront.net/assets/themes/cruk/campaign/images/credit-debit-card.png", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Pay with Credit/Debit cards\" />\n";
},"15":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return "			<label for=\"applepay-payment\" class=\"checkbox-button-group donation-method js-donation-method\">\n				<input type=\"radio\" id=\"applepay-payment\" name=\"donation-method\" data-target=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.template_setup : stack1)) != null ? stack1.gateway : stack1), depth0))
    + "\" data-applepay=\"true\" value=\"appleypay-payment\" />\n				Apple Pay\n				<img src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/applepay.png", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Pay with Apple Pay\" class=\"applepay-logo\" />\n			</label>\n";
},"17":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "		<div id=\"direct-debit-logo\">\n			<img width=\"63\" height=\"20\" class=\"dd-logo-svg\" src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/direct-debit-trans.svg", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Direct Debit Logo\" />\n		</div>\n		<h2>Your bank account details</h2>\n		<p class=\"small\">In order to set up a Direct Debit instruction online, you must be the account holder of a personal bank or building society account. If you are NOT the only required signatory on your account, you can access the <a href=\"http://www.cancerresearchuk.org/sites/default/files/direct_debit_donation_form.pdf\" target=\"_blank\">Direct Debit PDF form</a> here.</p>\n\n		<div id=\"direct-debit-details\">\n			<div class=\"row\">\n				<div class=\"col-sm-5 form-label\">\n					<label for=\"account-holder-name\">Name(s) of account holder(s)</label>\n				</div>\n\n				<div class=\"col-sm-5\">\n					<input type=\"text\" class=\"text payment-field\" id=\"bank_account-account_name\" name=\"bank_account-account-name\" data-field-name=\"bank_account.account_name\" value=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.bank_account : stack1)) != null ? stack1.account_name : stack1), depth0))
    + "\" maxlength=\"50\" />\n				</div>\n			</div>\n\n			<div class=\"row\">\n				<div class=\"col-sm-5 form-label\">\n					<label for=\"account-number\">Bank / building society account number</label>\n				</div>\n\n				<div class=\"col-sm-5\">\n					<input type=\"number\" class=\"text payment-field\" id=\"bank_account-account_number\" name=\"bank_account-account-number\" data-field-name=\"bank_account.account_number\" value=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.bank_account : stack1)) != null ? stack1.account_number : stack1), depth0))
    + "\" maxlength=\"10\" />\n				</div>\n			</div>\n\n			<div class=\"row\">\n				<div class=\"col-sm-5 form-label\">\n					<label for=\"sort-code\">Branch sort code</label>\n				</div>\n\n				<div class=\"col-sm-5\">\n					<input type=\"tel\" class=\"text bank_account-sort_code\" id=\"bank_account-sort_code_1\" name=\"bank_account-sort_code1\" maxlength=\"2\" placeholder=\"00\" />\n					<input type=\"tel\" class=\"text bank_account-sort_code\" id=\"bank_account-sort_code_2\" name=\"bank_account-sort_code2\" maxlength=\"2\" placeholder=\"00\" />\n					<input type=\"tel\" class=\"text bank_account-sort_code\" id=\"bank_account-sort_code_3\" name=\"bank_account-sort_code3\" maxlength=\"2\" placeholder=\"00\" />\n					<div id=\"sort-code-error\">\n						<label for=\"sortCodeGroup\" class=\"error\"></label>\n					</div>\n				</div>\n\n			</div>\n\n		</div>\n\n		<div class=\"row\">\n			<div class=\"col-sm-5 form-label\">\n				<label for=\"payment-date\">Donation date</label>\n			</div>\n\n			<label for=\"payment-date-5\" class=\"checkbox-button-group payment-date-group js-payment-date-group";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.day : stack1), "===", 5, {"name":"ifCond","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n				<input type=\"radio\" name=\"payment-date\" id=\"payment-date-5\"";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.day : stack1), "===", 5, {"name":"ifCond","hash":{},"fn":this.program(20, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " value=\"5\" />\n				5th\n			</label>\n\n			<label for=\"payment-date-19\" class=\"checkbox-button-group payment-date-group js-payment-date-group";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.day : stack1), "===", 19, {"name":"ifCond","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n				<input type=\"radio\" name=\"payment-date\" id=\"payment-date-19\"";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.day : stack1), "===", 19, {"name":"ifCond","hash":{},"fn":this.program(22, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " value=\"19\" />\n				19th\n			</label>\n\n			<div id=\"payment-date-error\"></div>\n		</div>\n		</div> <!-- /#direct-debit-details -->\n";
},"18":function(depth0,helpers,partials,data) {
  return " active";
  },"20":function(depth0,helpers,partials,data) {
  return " checked=\"checked\"";
  },"22":function(depth0,helpers,partials,data) {
  return "checked=\"checked\"";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<fieldset class=\"fieldset\">\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.status : stack1), "===", "Cancelled", {"name":"ifCond","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.type : depth0), "===", "single", {"name":"ifCond","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.type : depth0), "===", "regular", {"name":"ifCond","hash":{},"fn":this.program(17, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</fieldset>\n\n<div id=\"credit-card-details-container\"></div>\n";
},"useData":true,"useDepths":true});

},{"hbsfy/runtime":82}],7:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  return "                    <li id=\"amex\"></li>\n";
  },"3":function(depth0,helpers,partials,data) {
  return "                    <option value=\"\">Month</option>\n                    <option value=\"01\">01</option>\n                    <option value=\"02\">02</option>\n                    <option value=\"03\">03</option>\n                    <option value=\"04\">04</option>\n                    <option value=\"05\">05</option>\n                    <option value=\"06\">06</option>\n                    <option value=\"07\">07</option>\n                    <option value=\"08\">08</option>\n                    <option value=\"09\">09</option>\n                    <option value=\"10\">10</option>\n                    <option value=\"11\">11</option>\n                    <option value=\"12\">12</option>\n";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                    <option value=\"\">Year</option>\n					";
  stack1 = ((helper = (helper = helpers.cardStartYears || (depth0 != null ? depth0.cardStartYears : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cardStartYears","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                    <option value=\"\">Year</option>\n					";
  stack1 = ((helper = (helper = helpers.cardExpiryYears || (depth0 != null ? depth0.cardExpiryYears : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cardExpiryYears","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "          <input type=\"tel\" class=\"text payment-field\" id=\"payment_card-cvc\" name=\"payment_card-cvc\" maxlength=\"4\" data-field-name=\"payment_card.cvc\" value=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_card : stack1)) != null ? stack1.cvc : stack1), depth0))
    + "\" autocomplete=\"off\"/>\n";
},"11":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "          <input type=\"tel\" class=\"text payment-field\" id=\"payment_card-cvc\" name=\"payment_card-cvc\" maxlength=\"3\" data-field-name=\"payment_card.cvc\" value=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_card : stack1)) != null ? stack1.cvc : stack1), depth0))
    + "\" autocomplete=\"off\"/>\n";
},"13":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <div class=\"row row2\">\n                    <div class=\"col-xs-6 omega\"><img src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/amex-ccv.gif", {"name":"filter_asset","hash":{},"data":data})))
    + "\"></div>\n                    <div class=\"col-xs-6\">\n                        <p>Other, American Express cards for example, have a four-digit number printed on the front of the card, above the account number.</p>\n                    </div>\n                </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "<fieldset class=\"fieldset\">\n\n<div id=\"credit-card-details\">\n\n    <h2>Donation method: Credit/debit card</h2>\n\n    <div class=\"row cc-row\">\n        <div class=\"col-sm-3 form-label\">\n            <label for=\"cc-number\">Cardholder name</label>\n        </div>\n\n        <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"text payment-field required\" id=\"payment_card-name\" name=\"payment_card-name\" data-field-name=\"payment_card.name\" value=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_card : stack1)) != null ? stack1.name : stack1), depth0))
    + "\"/>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-3 form-label\">\n            <label for=\"cc-number\">Card number</label>\n        </div>\n\n        <div class=\"col-sm-8\">\n            <input type=\"tel\" class=\"text payment-field\" id=\"payment_card-number\" name=\"payment_card-number\" data-field-name=\"payment_card.number\" value=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_card : stack1)) != null ? stack1.number : stack1), depth0))
    + "\" autocomplete=\"off\"/>\n            <ul id=\"cc-types\">\n                <li id=\"visa\"></li>\n                <li id=\"visa_electron\"></li>\n                <li id=\"mastercard\"></li>\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.theme : depth0), "!==", "su2c", {"name":"ifCond","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "                <li id=\"jcb\"></li>\n                <li id=\"maestro\"></li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"row\" id=\"start-date-container\">\n        <div class=\"col-sm-3 form-label\">\n            <label for=\"payment_card-expiry_date-month\">Start date</label>\n        </div>\n        <div class=\"col-sm-3\">\n            <select class=\"payment-field\" id=\"payment_card-start_date-month\" name=\"payment_card-start_date-month\" data-field-name=\"payment_card.start_date.month\">\n";
  stack1 = ((helpers.select || (depth0 && depth0.select) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_card : stack1)) != null ? stack1.start_date : stack1)) != null ? stack1.month : stack1), {"name":"select","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </select>\n\n\n            <select class=\"payment-field\" id=\"payment_card-start_date-year\" name=\"payment_card-start_date-year\" data-field-name=\"payment_card.start_date.year\">\n";
  stack1 = ((helpers.select || (depth0 && depth0.select) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_card : stack1)) != null ? stack1.start_date : stack1)) != null ? stack1.year : stack1), {"name":"select","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </select>\n            <div id=\"start-date-error\">\n                <label for=\"ccStartDateFields\" class=\"error\">\n\n                </label>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-3 form-label\">\n            <label for=\"payment_card-expiry_date-month\">Expiry date</label>\n        </div>\n        <div class=\"col-sm-3\">\n            <select class=\"payment-field\" id=\"payment_card-expiry_date-month\" name=\"payment_card-expiry_date-month\" data-field-name=\"payment_card.expiry_date.month\">\n";
  stack1 = ((helpers.select || (depth0 && depth0.select) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_card : stack1)) != null ? stack1.expiry_date : stack1)) != null ? stack1.month : stack1), {"name":"select","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </select>\n\n            <select class=\"payment-field\" id=\"payment_card-expiry_date-year\" name=\"payment_card-expiry_date-year\" data-field-name=\"payment_card.expiry_date.year\">\n";
  stack1 = ((helpers.select || (depth0 && depth0.select) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_card : stack1)) != null ? stack1.expiry_date : stack1)) != null ? stack1.year : stack1), {"name":"select","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </select>\n\n            <div id=\"date-error\">\n                <label for=\"ccDateFields\" class=\"error\">\n\n                </label>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row cc-security-col input-small\">\n      <div class=\"form-label\">\n          <label class=\"security-code-label\" for=\"payment_card-cvc\">Security code</label>\n      </div>\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.theme : depth0), "!==", "su2c", {"name":"ifCond","hash":{},"fn":this.program(9, data),"inverse":this.program(11, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "        <a id=\"ccvInfo\" class=\"cvv-toggle\" href=\"#\">What's this?</a>\n        <div id=\"modal-bg-ccv\" class=\"modal-bg\"></div>\n        <div id=\"ccvInfo-hidden\">\n\n            <div id=\"ccvClose\" class=\"cvv-toggle\">Close [X]</div>\n            <div class=\"row row1\">\n                <div class=\"col-xs-6 omega\"><img src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/visa-ccv.gif", {"name":"filter_asset","hash":{},"data":data})))
    + "\"></div>\n                <div class=\"col-xs-6\">\n                    <p>Some cards, many UK-issued cards for example, have a three-digit number printed at the top of the signature strip on the reverse of the card.</p>\n                </div>\n            </div>\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.theme : depth0), "!==", "su2c", {"name":"ifCond","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n\n    </div>\n\n    <label for=\"diff-billing-addr\" class=\"checkbox-button-group js-billing-address-toggle\">\n      <input type=\"checkbox\" id=\"diff-billing-addr\" name=\"diff-billing-addr\" />\n      My billing address is different to my home address\n    </label>\n\n    <div id=\"billing-details\" class=\"hidden\">\n\n        <h2>Your details</h2>\n\n        <div class=\"row form-details-row\">\n            <div class=\"col-sm-5 form-label\">\n                <label for=\"home-address\">Address line 1</label>\n            </div>\n            <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"text diff-billing-field\" id=\"billing_address-line1\" name=\"billing_address-line1\"  data-field-name=\"billing_address.line1\"/>\n            </div>\n        </div>\n\n        <div class=\"row form-details-row\">\n            <div class=\"col-sm-5 form-label\">\n                <label for=\"address-2\">Address line 2</label>\n            </div>\n            <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"text diff-billing-field address-field\" id=\"billing_address-line2\" name=\"billing_address-line2\"  data-field-name=\"billing_address.line2\"/>\n            </div>\n        </div>\n\n        <div class=\"row form-details-row\">\n            <div class=\"col-sm-5 form-label\">\n                <label for=\"address-3\">Address line 3</label>\n            </div>\n            <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"text diff-billing-field address-field\" id=\"billing_address-line3\" name=\"billing_address-line3\"  data-field-name=\"billing_address.line3\"/>\n            </div>\n        </div>\n\n        <div class=\"row form-details-row\">\n            <div class=\"col-sm-5 form-label\">\n                <label for=\"town-city\">Town/City</label>\n            </div>\n            <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"text diff-billing-field address-field\" id=\"billing_address-town\" name=\"billing_address-town\" data-field-name=\"billing_address.town\"/>\n            </div>\n        </div>\n\n        <div class=\"row form-details-row\">\n            <div class=\"col-sm-5 form-label\">\n                <label for=\"post-code\">Postcode</label>\n            </div>\n            <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"text diff-billing-field address-field\" id=\"billing_address-postal_code\" name=\"billing_address-postal_code\"  data-field-name=\"billing_address.postal_code\"/>\n            </div>\n        </div>\n\n        <div class=\"row form-details-row\">\n            <div class=\"col-sm-5 form-label\">\n                <label for=\"country\">Country</label>\n            </div>\n            <div class=\"col-sm-6\">\n                <select id=\"billing_address-country\" class=\"diff-billing-field address-field\" name=\"billing_address-country\" data-field-name=\"billing_address.country\">\n                    <option value=\"GB\" selected=\"selected\">United Kingdom</option>\n                    <option value=\"AF\">Afghanistan</option>\n                    <option value=\"AL\">Albania</option>\n                    <option value=\"DZ\">Algeria</option>\n                    <option value=\"AS\">American Samoa</option>\n                    <option value=\"AD\">Andorra</option>\n                    <option value=\"AO\">Angola</option>\n                    <option value=\"AI\">Anguilla</option>\n                    <option value=\"AG\">Antigua &amp; Barbuda</option>\n                    <option value=\"AR\">Argentina</option>\n                    <option value=\"AA\">Armenia</option>\n                    <option value=\"AW\">Aruba</option>\n                    <option value=\"AU\">Australia</option>\n                    <option value=\"AT\">Austria</option>\n                    <option value=\"AZ\">Azerbaijan</option>\n                    <option value=\"BS\">Bahamas</option>\n                    <option value=\"BH\">Bahrain</option>\n                    <option value=\"BD\">Bangladesh</option>\n                    <option value=\"BB\">Barbados</option>\n                    <option value=\"BY\">Belarus</option>\n                    <option value=\"BE\">Belgium</option>\n                    <option value=\"BZ\">Belize</option>\n                    <option value=\"BJ\">Benin</option>\n                    <option value=\"BM\">Bermuda</option>\n                    <option value=\"BT\">Bhutan</option>\n                    <option value=\"BO\">Bolivia</option>\n                    <option value=\"BL\">Bonaire</option>\n                    <option value=\"BA\">Bosnia &amp; Herzegovina</option>\n                    <option value=\"BW\">Botswana</option>\n                    <option value=\"BR\">Brazil</option>\n                    <option value=\"BC\">British Indian Ocean Ter</option>\n                    <option value=\"BN\">Brunei</option>\n                    <option value=\"BG\">Bulgaria</option>\n                    <option value=\"BF\">Burkina Faso</option>\n                    <option value=\"BI\">Burundi</option>\n                    <option value=\"KH\">Cambodia</option>\n                    <option value=\"CM\">Cameroon</option>\n                    <option value=\"CA\">Canada</option>\n                    <option value=\"IC\">Canary Islands</option>\n                    <option value=\"CV\">Cape Verde</option>\n                    <option value=\"KY\">Cayman Islands</option>\n                    <option value=\"CF\">Central African Republic</option>\n                    <option value=\"TD\">Chad</option>\n                    <option value=\"CD\">Channel Islands</option>\n                    <option value=\"CL\">Chile</option>\n                    <option value=\"CN\">China</option>\n                    <option value=\"CI\">Christmas Island</option>\n                    <option value=\"CS\">Cocos Island</option>\n                    <option value=\"CO\">Colombia</option>\n                    <option value=\"CC\">Comoros</option>\n                    <option value=\"CG\">Congo</option>\n                    <option value=\"CK\">Cook Islands</option>\n                    <option value=\"CR\">Costa Rica</option>\n                    <option value=\"CT\">Cote D'Ivoire</option>\n                    <option value=\"HR\">Croatia</option>\n                    <option value=\"CU\">Cuba</option>\n                    <option value=\"CB\">Curacao</option>\n                    <option value=\"CY\">Cyprus</option>\n                    <option value=\"CZ\">Czech Republic</option>\n                    <option value=\"DK\">Denmark</option>\n                    <option value=\"DJ\">Djibouti</option>\n                    <option value=\"DM\">Dominica</option>\n                    <option value=\"DO\">Dominican Republic</option>\n                    <option value=\"TM\">East Timor</option>\n                    <option value=\"EC\">Ecuador</option>\n                    <option value=\"EG\">Egypt</option>\n                    <option value=\"SV\">El Salvador</option>\n                    <option value=\"GQ\">Equatorial Guinea</option>\n                    <option value=\"ER\">Eritrea</option>\n                    <option value=\"EE\">Estonia</option>\n                    <option value=\"ET\">Ethiopia</option>\n                    <option value=\"FA\">Falkland Islands</option>\n                    <option value=\"FO\">Faroe Islands</option>\n                    <option value=\"FJ\">Fiji</option>\n                    <option value=\"FI\">Finland</option>\n                    <option value=\"FR\">France</option>\n                    <option value=\"GF\">French Guiana</option>\n                    <option value=\"PF\">French Polynesia</option>\n                    <option value=\"FS\">French Southern Ter</option>\n                    <option value=\"GA\">Gabon</option>\n                    <option value=\"GM\">Gambia</option>\n                    <option value=\"GE\">Georgia</option>\n                    <option value=\"DE\">Germany</option>\n                    <option value=\"GH\">Ghana</option>\n                    <option value=\"GI\">Gibraltar</option>\n                    <option value=\"GB\">Great Britain</option>\n                    <option value=\"GR\">Greece</option>\n                    <option value=\"GL\">Greenland</option>\n                    <option value=\"GD\">Grenada</option>\n                    <option value=\"GP\">Guadeloupe</option>\n                    <option value=\"GU\">Guam</option>\n                    <option value=\"GT\">Guatemala</option>\n                    <option value=\"GN\">Guinea</option>\n                    <option value=\"GY\">Guyana</option>\n                    <option value=\"HT\">Haiti</option>\n                    <option value=\"HW\">Hawaii</option>\n                    <option value=\"HN\">Honduras</option>\n                    <option value=\"HK\">Hong Kong</option>\n                    <option value=\"HU\">Hungary</option>\n                    <option value=\"IS\">Iceland</option>\n                    <option value=\"IN\">India</option>\n                    <option value=\"ID\">Indonesia</option>\n                    <option value=\"IA\">Iran</option>\n                    <option value=\"IQ\">Iraq</option>\n                    <option value=\"IR\">Ireland</option>\n                    <option value=\"IM\">Isle of Man</option>\n                    <option value=\"IL\">Israel</option>\n                    <option value=\"IT\">Italy</option>\n                    <option value=\"JM\">Jamaica</option>\n                    <option value=\"JP\">Japan</option>\n                    <option value=\"JO\">Jordan</option>\n                    <option value=\"KZ\">Kazakhstan</option>\n                    <option value=\"KE\">Kenya</option>\n                    <option value=\"KI\">Kiribati</option>\n                    <option value=\"NK\">Korea North</option>\n                    <option value=\"KS\">Korea South</option>\n                    <option value=\"KW\">Kuwait</option>\n                    <option value=\"KG\">Kyrgyzstan</option>\n                    <option value=\"LA\">Laos</option>\n                    <option value=\"LV\">Latvia</option>\n                    <option value=\"LB\">Lebanon</option>\n                    <option value=\"LS\">Lesotho</option>\n                    <option value=\"LR\">Liberia</option>\n                    <option value=\"LY\">Libya</option>\n                    <option value=\"LI\">Liechtenstein</option>\n                    <option value=\"LT\">Lithuania</option>\n                    <option value=\"LU\">Luxembourg</option>\n                    <option value=\"MO\">Macau</option>\n                    <option value=\"MK\">Macedonia</option>\n                    <option value=\"MG\">Madagascar</option>\n                    <option value=\"MY\">Malaysia</option>\n                    <option value=\"MW\">Malawi</option>\n                    <option value=\"MV\">Maldives</option>\n                    <option value=\"ML\">Mali</option>\n                    <option value=\"MT\">Malta</option>\n                    <option value=\"MH\">Marshall Islands</option>\n                    <option value=\"MQ\">Martinique</option>\n                    <option value=\"MR\">Mauritania</option>\n                    <option value=\"MU\">Mauritius</option>\n                    <option value=\"ME\">Mayotte</option>\n                    <option value=\"MX\">Mexico</option>\n                    <option value=\"MI\">Midway Islands</option>\n                    <option value=\"MD\">Moldova</option>\n                    <option value=\"MC\">Monaco</option>\n                    <option value=\"MN\">Mongolia</option>\n                    <option value=\"MS\">Montserrat</option>\n                    <option value=\"MA\">Morocco</option>\n                    <option value=\"MZ\">Mozambique</option>\n                    <option value=\"MM\">Myanmar</option>\n                    <option value=\"NA\">Nambia</option>\n                    <option value=\"NU\">Nauru</option>\n                    <option value=\"NP\">Nepal</option>\n                    <option value=\"AN\">Netherland Antilles</option>\n                    <option value=\"NL\">Netherlands (Holland, Europe)</option>\n                    <option value=\"NV\">Nevis</option>\n                    <option value=\"NC\">New Caledonia</option>\n                    <option value=\"NZ\">New Zealand</option>\n                    <option value=\"NI\">Nicaragua</option>\n                    <option value=\"NE\">Niger</option>\n                    <option value=\"NG\">Nigeria</option>\n                    <option value=\"NW\">Niue</option>\n                    <option value=\"NF\">Norfolk Island</option>\n                    <option value=\"NO\">Norway</option>\n                    <option value=\"OM\">Oman</option>\n                    <option value=\"PK\">Pakistan</option>\n                    <option value=\"PW\">Palau Island</option>\n                    <option value=\"PS\">Palestine</option>\n                    <option value=\"PA\">Panama</option>\n                    <option value=\"PG\">Papua New Guinea</option>\n                    <option value=\"PY\">Paraguay</option>\n                    <option value=\"PE\">Peru</option>\n                    <option value=\"PH\">Philippines</option>\n                    <option value=\"PO\">Pitcairn Island</option>\n                    <option value=\"PL\">Poland</option>\n                    <option value=\"PT\">Portugal</option>\n                    <option value=\"PR\">Puerto Rico</option>\n                    <option value=\"QA\">Qatar</option>\n                    <option value=\"ME\">Republic of Montenegro</option>\n                    <option value=\"RS\">Republic of Serbia</option>\n                    <option value=\"RE\">Reunion</option>\n                    <option value=\"RO\">Romania</option>\n                    <option value=\"RU\">Russia</option>\n                    <option value=\"RW\">Rwanda</option>\n                    <option value=\"NT\">St Barthelemy</option>\n                    <option value=\"EU\">St Eustatius</option>\n                    <option value=\"HE\">St Helena</option>\n                    <option value=\"KN\">St Kitts-Nevis</option>\n                    <option value=\"LC\">St Lucia</option>\n                    <option value=\"MB\">St Maarten</option>\n                    <option value=\"PM\">St Pierre &amp; Miquelon</option>\n                    <option value=\"VC\">St Vincent &amp; Grenadines</option>\n                    <option value=\"SP\">Saipan</option>\n                    <option value=\"SO\">Samoa</option>\n                    <option value=\"AS\">Samoa American</option>\n                    <option value=\"SM\">San Marino</option>\n                    <option value=\"ST\">Sao Tome &amp; Principe</option>\n                    <option value=\"SA\">Saudi Arabia</option>\n                    <option value=\"SN\">Senegal</option>\n                    <option value=\"RS\">Serbia</option>\n                    <option value=\"SC\">Seychelles</option>\n                    <option value=\"SL\">Sierra Leone</option>\n                    <option value=\"SG\">Singapore</option>\n                    <option value=\"SK\">Slovakia</option>\n                    <option value=\"SI\">Slovenia</option>\n                    <option value=\"SB\">Solomon Islands</option>\n                    <option value=\"OI\">Somalia</option>\n                    <option value=\"ZA\">South Africa</option>\n                    <option value=\"ES\">Spain</option>\n                    <option value=\"LK\">Sri Lanka</option>\n                    <option value=\"SD\">Sudan</option>\n                    <option value=\"SR\">Suriname</option>\n                    <option value=\"SZ\">Swaziland</option>\n                    <option value=\"SE\">Sweden</option>\n                    <option value=\"CH\">Switzerland</option>\n                    <option value=\"SY\">Syria</option>\n                    <option value=\"TA\">Tahiti</option>\n                    <option value=\"TW\">Taiwan</option>\n                    <option value=\"TJ\">Tajikistan</option>\n                    <option value=\"TZ\">Tanzania</option>\n                    <option value=\"TH\">Thailand</option>\n                    <option value=\"TG\">Togo</option>\n                    <option value=\"TK\">Tokelau</option>\n                    <option value=\"TO\">Tonga</option>\n                    <option value=\"TT\">Trinidad &amp; Tobago</option>\n                    <option value=\"TN\">Tunisia</option>\n                    <option value=\"TR\">Turkey</option>\n                    <option value=\"TU\">Turkmenistan</option>\n                    <option value=\"TC\">Turks &amp; Caicos Is</option>\n                    <option value=\"TV\">Tuvalu</option>\n                    <option value=\"UG\">Uganda</option>\n                    <option value=\"UA\">Ukraine</option>\n                    <option value=\"AE\">United Arab Emirates</option>\n                    <option value=\"GB\">United Kingdom</option>\n                    <option value=\"US\">United States</option>\n                    <option value=\"UY\">Uruguay</option>\n                    <option value=\"UZ\">Uzbekistan</option>\n                    <option value=\"VU\">Vanuatu</option>\n                    <option value=\"VS\">Vatican City State</option>\n                    <option value=\"VE\">Venezuela</option>\n                    <option value=\"VN\">Vietnam</option>\n                    <option value=\"VB\">Virgin Islands (Brit)</option>\n                    <option value=\"VA\">Virgin Islands (USA)</option>\n                    <option value=\"WK\">Wake Island</option>\n                    <option value=\"WF\">Wallis &amp; Futana Is</option>\n                    <option value=\"YE\">Yemen</option>\n                    <option value=\"ZR\">Zaire</option>\n                    <option value=\"ZM\">Zambia</option>\n                    <option value=\"ZW\">Zimbabwe</option>\n                </select>\n            </div>\n        </div>\n    </div>\n\n</div><!-- / #credit-card-details -->\n\n</fieldset>\n";
},"useData":true});

},{"hbsfy/runtime":82}],8:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  return "    <h3>Where your donation goes</h3>\n";
  },"3":function(depth0,helpers,partials,data) {
  return "    <h2>Where your donation goes</h2>\n";
  },"5":function(depth0,helpers,partials,data) {
  return " active";
  },"7":function(depth0,helpers,partials,data) {
  return " checked=\"checked\"";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.summary : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n<p class=\"sub\">Choose how you would like your donation to fund our work</p>\n\n<label for=\"restriction-greatest\" class=\"checkbox-button-group";
  stack1 = helpers.unless.call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplmentary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.restriction : stack1), {"name":"unless","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n  <input type=\"radio\" id=\"restriction-greatest\" value=\"greatest\" name=\"donation-restriction\"";
  stack1 = helpers.unless.call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplmentary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.restriction : stack1), {"name":"unless","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " />\n    Where the need is greatest - \n    <span>Your donation will help beat all cancers sooner</span>\n</label>\n\n<label for=\"restriction-cancer\" class=\"checkbox-button-group cancer\">\n  <input type=\"radio\" id=\"restriction-cancer\" value=\"cancer\" name=\"donation-restriction\" />\n  Choose a cancer type or an area of research\n</label>\n";
},"useData":true});

},{"hbsfy/runtime":82}],9:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "  <fieldset>\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.theme_option : stack1), "===", "su2c", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.gateway : stack1), "===", ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.template_setup : stack1)) != null ? stack1.gateway : stack1), {"name":"ifCond","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.gateway : stack1), "===", ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.template_setup : stack1)) != null ? stack1.gateway_paypal : stack1), {"name":"ifCond","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </fieldset>\n";
},"2":function(depth0,helpers,partials,data) {
  return "          <p class=\"disclaimer\">By pressing ‘Complete my donation’ I confirm that the above details are correct and I have read and agreed to Stand Up To Cancer's <a href=\"http://www.standuptocancer.org.uk/information/terms-and-conditions\" target=\"_blank\">Terms and Conditions</a>.</p>\n          <p class=\"disclaimer\">The information supplied will be collected and maintained by Cancer Research UK in accordance with its <a href=\"http://www.cancerresearchuk.org/privacy-statement\" target=\"_blank\">Privacy Policy</a>.\n            Channel 4 is the promoter of Stand Up To Cancer only and is not responsible for the collection of donations or the administration of funds.\n            Cancer Research UK may share personal data with Channel 4 solely for the purpose of supporting and promoting Stand Up To Cancer.</p>\n";
  },"4":function(depth0,helpers,partials,data) {
  return "          <p class=\"disclaimer\">By pressing 'Complete my donation' I confirm that the above details are correct and that I have read and agreed to Cancer Research UK's <a href=\"http://www.cancerresearchuk.org/about-us/utilities/terms-and-conditions/\" target=\"_blank\">terms and conditions</a> and <a target=\"_blank\"  href=\"http://www.cancerresearchuk.org/about-us/utilities/privacy-statement/\">privacy statement</a>.</p>\n";
  },"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.useApplePay : depth0), "===", "Y", {"name":"ifCond","hash":{},"fn":this.program(7, data),"inverse":this.program(9, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  return "            <button id=\"complete-applepay-donation\"></button>\n";
  },"9":function(depth0,helpers,partials,data) {
  return "            <button class=\"btn\" id=\"complete-single-donation\">Complete my donation</button>\n";
  },"11":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "	  	";
  stack1 = ((helper = (helper = helpers.payment_error_html || (depth0 != null ? depth0.payment_error_html : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"payment_error_html","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"13":function(depth0,helpers,partials,data) {
  return "        <button class=\"btn\" id=\"complete-paypal-donation\">Complete my donation</button>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.show : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

},{"hbsfy/runtime":82}],10:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  return "checked=\"checked\"";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<h3>Donation type</h3>\n<div class=\"radio-button-group single-donation-type custom-radio-group\">\n    <label for=\"donation-single\">Single</label>\n    <input type=\"radio\" id=\"donation-single\" value=\"single\" name=\"donation-type\" class=\"single-donation donation-type\" ";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.type : depth0), "===", "single", {"name":"ifCond","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " />\n</div>\n<div class=\"radio-button-group regular-donation-type radio-group-donation-type custom-radio-group\">\n    <label for=\"donation-regular\">Regular</label>\n    <input type=\"radio\" id=\"donation-regular\" value=\"regular\" name=\"donation-type\" class=\"regular-donation donation-type\" ";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.type : depth0), "===", "regular", {"name":"ifCond","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " />\n</div>";
},"useData":true});

},{"hbsfy/runtime":82}],11:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "		";
  stack1 = ((helper = (helper = helpers.payment_error_html || (depth0 != null ? depth0.payment_error_html : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"payment_error_html","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"3":function(depth0,helpers,partials,data) {
  return "		<h2>Oops, something went wrong</h2>\n\n		<p class=\"error\">We’re sorry, we haven't been able to complete your donation this time (don't worry, no payment has been taken).</p>\n\n		<p>Please try again or contact our supporter services team on 0300 123 1861 or email <a href=\"mailto:supporter.services@cancer.org.uk\">supporter.services@cancer.org.uk</a> for more help.</p>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"error-message\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.payment_error_html : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});

},{"hbsfy/runtime":82}],12:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda;
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.form_intro_copy : stack1), depth0);
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});

},{"hbsfy/runtime":82}],13:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n  <div class=\"footer-inner\">\n        <div class=\"social-pages container-full\">\n          <div class=\"\">\n            <div class=\"\">\n              <ul>\n                <li class=\"social-link\">\n                  <a href=\"https://www.facebook.com/standuptocancerUK\" target=\"_blank\">\n                    <img src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/footer_facebook.png", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Facebook\" title=\"Like us on Facebook\" />\n                  </a>\n                </li>\n                <li class=\"social-link\">\n                  <a href=\"https://twitter.com/standup2c\" target=\"_blank\">\n                    <img src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/footer_twitter.png", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Twitter\" title=\"Follow us on Twitter\" />\n                  </a>\n                </li>\n                <li class=\"social-link\">\n                  <a href=\"http://instagram.com/standup2canceruk\" target=\"_blank\">\n                    <img src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/footer_instagram.png", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Instagram\" title=\"Instagram\" />\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"footer-sponsors container-full clearfix\">\n          <div class=\"\">\n            <div class=\"\">\n              <div class=\"col-xs-12\">\n                <small id=\"core\">Our core sponsors</small><br />\n                <span id=\"bt-logo\" class=\"footer-sponsor\">\n                  <a href=\"http://www.standuptocancer.org.uk/bt\">\n                    <img src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/footer_bt_80.jpg", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Sponsored by BT\" title=\"Sponsored by BT\" />\n                  </a>\n                </span>\n                <span id=\"sp-logo\" class=\"footer-sponsor\">\n                  <a href=\"http://www.standuptocancer.org.uk/scottish-power\">\n                    <img src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/footer_sp_80.png", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Sponsored by Scottish Power\" title=\"Sponsored by Scottish Power\" />\n                  </a>\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"footer-menu container-full clearfix\">\n          <div>\n            <div class=\"\">\n              <ul class=\"section-links\"><li class=\"col-sm-3 col-xs-6\"><a href=\"http://www.standuptocancer.org.uk/information/terms-and-conditions\" title=\"\">Terms and Conditions</a></li>\n                <li class=\"col-sm-3 col-xs-6\"><a href=\"https://www.standuptocancer.org.uk/information/terms-and-conditions\" title=\"\">Shop FAQs</a></li>\n                <li class=\"col-sm-3 col-xs-6\"><a href=\"http://www.standuptocancer.org.uk/information/press-enquiries\" title=\"\">Press Enquiries</a></li>\n                <li class=\"col-sm-3 col-xs-6\"><a href=\"http://www.standuptocancer.org.uk/information/accessibility\" title=\"\">Accessibility</a></li>\n                <li class=\"col-sm-3 col-xs-6\"><a href=\"http://www.cancerresearchuk.org\" title=\"\" class=\"ext\">Cancer Research UK</a></li>\n                <li class=\"col-sm-3 col-xs-6\"><a href=\"https://www.standuptocancer.org.uk/information/terms-and-conditions\" title=\"\">Delivery Information</a></li>\n                <li class=\"col-sm-3 col-xs-6\"><a href=\"https://www.standuptocancer.org.uk/partners\" title=\"\">Partners</a></li>\n                <li class=\"col-sm-3 col-xs-6\"><a href=\"https://www.cancerresearchuk.org/terms-and-conditions/cookies-policy\" title=\"\">Cookies</a></li>\n                <li class=\"col-sm-3 col-xs-6\"><a href=\"http://www.cancerresearchuk.org/funding-for-researchers\" title=\"\" class=\"ext\">Funding for researchers</a></li>\n                <li class=\"col-sm-3 col-xs-6\"><a href=\"https://www.standuptocancer.org.uk/information/terms-and-conditions\" title=\"\">Returns policy</a></li>\n                <li class=\"col-sm-3 col-xs-6\"><a href=\"https://www.standuptocancer.org.uk/information/terms-and-conditions#contact\" title=\"\">Contact Us</a></li>\n                <li class=\"col-sm-3 col-xs-6\"><a href=\"http://www.standuptocancer.org.uk/information/safety\" title=\"\">Safety</a></li>\n                <li class=\"col-sm-3 col-xs-6\"><a href=\"http://www.cancerresearchuk.org/support-us/volunteer/become-a-media-volunteer\" title=\"\" class=\"ext\">Share your story</a></li>\n                <li class=\"col-sm-3 col-xs-6\"><a href=\"http://www.standuptocancer.org.uk/privacy\" title=\"\">Privacy</a></li>\n              </ul>\n              <small class=\"col-xs-12\"><p>Stand Up To Cancer and Stand Up To Cancer Brand Marks are registered trademarks of the Entertainment Industry Foundation. Cancer Research UK is a registered charity in England and Wales (1089464), Scotland (SC041666) and the Isle of Man (1103). Cancer Research UK is registered as a company limited by guarantee in England &amp; Wales No. 4325234. Cancer Research UK's registered address: Angel Building, 407 St John Street, London EC1V 4AD. Donations will be made to Cancer Research UK in support of the Stand Up To Cancer campaign.</p></small>\n            </div>\n          </div>\n        </div>\n  </div>\n\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "\n  <div class=\"footer-inner\">\n      <div id=\"footer-links\">\n          <a target=\"_blank\" href=\"http://www.cancerresearchuk.org/about-us/utilities/terms-and-conditions/\">Terms &amp; Conditions</a> |\n          <a target=\"_blank\" href=\"http://www.cancerresearchuk.org/about-us/utilities/privacy-statement/\">Privacy</a> |\n          <a target=\"_blank\" href=\"https://www.cancerresearchuk.org/terms-and-conditions/cookies-policy\">Cookies</a> |\n          <a target=\"_blank\" href=\"http://www.cancerresearchuk.org/accessibility\">Accessibility</a> |\n          <a target=\"_blank\" href=\"https://www.cancerresearchuk.org/sitemap\">Site map</a>\n      </div>\n      <p>Cancer Research UK is a registered charity in England and Wales (1089464), Scotland (SC041666) and the Isle of Man (1103). A company limited by guarantee. Registered company in England and Wales (4325234) and the Isle of Man (5713F). Registered address: Angel Building, 407 St John Street, London EC1V 4AD.</p>\n  </div>\n\n  <style>\n    .footer-inner {\n      background-color: "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.footer_colour : stack1), depth0))
    + ";\n    }\n  </style>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.theme_option : stack1), "===", "su2c", {"name":"ifCond","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

},{"hbsfy/runtime":82}],14:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<option value=\""
    + escapeExpression(lambda((depth0 != null ? depth0.source_code : depth0), depth0))
    + "\" data-event=\""
    + escapeExpression(lambda((depth0 != null ? depth0.event_code : depth0), depth0))
    + "\">"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<h2>How did you fundraise?</h2>\n\n<div class=\"row\">\n	<label for=\"fundraising-select\" class=\"sub\">Please let us know how you raised this money.</label>\n\n	<select onchange=\"this.blur()\" id=\"fundraising-select\" name=\"fundraising_activity-items\" class=\"payment-field\" data-field-name=\"collection_payment.codes\">\n		<option value=\"\">Please select</option>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.collection_payment : stack1)) != null ? stack1.codes : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</select>\n</div>\n";
},"useData":true});

},{"hbsfy/runtime":82}],15:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n    <div class=\"header-inner clearfix\">\n\n        <div class=\"su2c-logo\">\n            <a href=\"https://www.standuptocancer.org.uk/\" title=\"Home\">\n                <img src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/su2c_logo.png", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Stand up to cancer\">\n            </a>\n        </div>\n\n        <div class=\"cr-c4-logo\">\n            <a href=\"http://www.cancerresearchuk.org/\" target=\"_blank\" title=\"Cancer Research UK\">\n                <img class=\"logo-cr\" src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/su2c_cruk_logo.png", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Stand up to cancer\">\n            </a>\n        </div>\n\n    </div>\n\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "\n  <style>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.header : stack1)) != null ? stack1.url : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.header_locked : stack1)) != null ? stack1.url : stack1), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "  </style>\n\n    <div class=\"header-inner clearfix\">\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.logo_option : stack1), "===", "dual", {"name":"ifCond","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n        <p id=\"strapline\" class=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.logo_option : stack1), depth0))
    + "\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.strap_line : stack1), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.program(14, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </p>\n\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.logo_option : stack1), "===", "dual", {"name":"ifCond","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "      #cruk-logo {\n        background: url("
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.header : stack1)) != null ? stack1.url : stack1), depth0))
    + ") no-repeat;\n      }\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "      #cruk-logo-locked {\n          background: url("
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.header_locked : stack1)) != null ? stack1.url : stack1), depth0))
    + ") no-repeat;\n      }\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <a target=\"_blank\" id=\"cruk-logo\" href=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.header_link : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.header : stack1)) != null ? stack1.alt_text : stack1), depth0))
    + "\">\n                Cancer Research UK\n            </a>\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <a target=\"_blank\" id=\"cruk-logo-locked\" href=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.header_link : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.header_locked : stack1)) != null ? stack1.alt_text : stack1), depth0))
    + "\">\n                Cancer Research UK\n            </a>\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.strap_line : stack1), depth0))
    + "\n";
},"14":function(depth0,helpers,partials,data) {
  return "                Together we will beat cancer\n";
  },"16":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.header_right : stack1)) != null ? stack1.url : stack1), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"17":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                <div id=\"secondary-header-image\">\n                    <img src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.header_right : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.header_right : stack1)) != null ? stack1.alt : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.header_right : stack1)) != null ? stack1.alt : stack1), depth0))
    + "\" />\n                </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.theme_option : stack1), "===", "su2c", {"name":"ifCond","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

},{"hbsfy/runtime":82}],16:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<fieldset class=\"fieldset\">\n	<h2>Join Us</h2>\n	<p>Become part of the movement to bring forward the day when all cancers are cured. Hear about our latest breakthroughs, campaigns and how you can support our life saving work.</p>\n	<h3>Would you like to hear from us by:</h3>\n\n	<div class=\"join-us-option\">\n		<label for=\"email-opt-in\" class=\"label-group\">Email</label>\n\n		<label for=\"optin-email-yes\" class=\"checkbox-button-group js-optin-option";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.suppression_email : stack1), "===", "PYEM", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n			<input type=\"radio\" id=\"optin-email-yes\" name=\"optin-email\" data-field-name=\"supplementary.private.suppression_email\"";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.suppression_email : stack1), "===", "PYEM", {"name":"ifCond","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " value=\"PYEM\" />\n			Yes\n		</label>\n\n		<label for=\"optin-email-no\" class=\"checkbox-button-group js-optin-option";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.suppression_email : stack1), "===", "PNEM", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n			<input type=\"radio\" id=\"optin-email-no\" name=\"optin-email\" data-field-name=\"supplementary.private.suppression_email\"";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.suppression_email : stack1), "===", "PNEM", {"name":"ifCond","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " value=\"PNEM\" />\n			No\n		</label>\n	</div>\n\n	<div class=\"join-us-option\">\n		<label for=\"sms-opt-in\" class=\"label-group\">Text message</label>\n\n		<label for=\"optin-sms-yes\" class=\"checkbox-button-group js-optin-option";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.suppression_text : stack1), "===", "PYSM", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n			<input type=\"radio\" id=\"optin-sms-yes\" name=\"optin-sms\" data-field-name=\"supplementary.private.suppression_text\"";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.suppression_text : stack1), "===", "PYSM", {"name":"ifCond","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " value=\"PYSM\" />\n			Yes\n		</label>\n\n		<label for=\"optin-sms-no\" class=\"checkbox-button-group js-optin-option";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.suppression_text : stack1), "===", "PNSM", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n			<input type=\"radio\" id=\"optin-sms-no\" name=\"optin-sms\" data-field-name=\"supplementary.private.suppression_text\"";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.suppression_text : stack1), "===", "PNSM", {"name":"ifCond","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " value=\"PNSM\" />\n			No\n		</label>\n	</div>\n\n	<div class=\"join-us-option\">\n		<label for=\"post-opt-in\" class=\"label-group\">Post</label>\n\n		<label for=\"optin-post-yes\" class=\"checkbox-button-group js-optin-option";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.suppression_post : stack1), "===", "PYPO", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n			<input type=\"radio\" id=\"optin-post-yes\" name=\"optin-post\" data-field-name=\"supplementary.private.suppression_post\"";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.suppression_post : stack1), "===", "PYPO", {"name":"ifCond","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " value=\"PYPO\" />\n			Yes\n		</label>\n\n		<label for=\"optin-post-no\" class=\"checkbox-button-group js-optin-option";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.suppression_post : stack1), "===", "PNPO", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n			<input type=\"radio\" id=\"optin-post-no\" name=\"optin-post\" data-field-name=\"supplementary.private.suppression_post\"";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.suppression_post : stack1), "===", "PNPO", {"name":"ifCond","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " value=\"PNPO\" />\n			No\n		</label>\n	</div>\n\n	<div class=\"join-us-option\">\n		<label for=\"phone-opt-in\" class=\"label-group\">Phone</label>\n\n		<label for=\"optin-phone-yes\" class=\"checkbox-button-group js-optin-option";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.suppression_phone : stack1), "===", "PYPH", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n			<input type=\"radio\" id=\"optin-phone-yes\" name=\"optin-phone\" data-field-name=\"supplementary.private.suppression_phone\"";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.suppression_phone : stack1), "===", "PYPH", {"name":"ifCond","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " value=\"PYPH\" />\n			Yes\n		</label>\n\n		<label for=\"optin-phone-no\" class=\"checkbox-button-group js-optin-option";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.suppression_phone : stack1), "===", "PNPH", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n			<input type=\"radio\" id=\"optin-phone-no\" name=\"optin-phone\" data-field-name=\"supplementary.private.suppression_phone\"";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.suppression_phone : stack1), "===", "PNPH", {"name":"ifCond","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " value=\"PNPH\" />\n			No\n		</label>\n\n	</div>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.social_feed : stack1)) != null ? stack1.active : stack1), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.attributes : stack1)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.communication_preferences : stack1)) != null ? stack1.join_us_bubble : stack1)) != null ? stack1.url : stack1), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n	<p style=\"margin-top:20px\">You can change your mind at any time by contacting us on <span class=\"phone-number\"><a class=\"mobile\" href=\"tel:+443001233379\">0300 123 3379</a><span class=\"desktop\">0300 123 3379</span></span> or <a href=\"mailto:preferences@cancer.org.uk\">preferences@cancer.org.uk</a> or via <a href=\"https://www.cancerresearchuk.org/about-us/contact-us/tell-us\" target=\"_blank\">this form</a>.</p>\n	<p>Your details are safe with us. Check out our <a href=\"https://www.cancerresearchuk.org/privacy-statement\" target=\"_blank\">Privacy Policy</a> for more details.</p>\n\n	<div class=\"contact-research\">\n		<p>To make our fundraising efforts targeted and effective and understand how much you may be able to give, we may research you using publicly available sources.</p>\n		<p><span class=\"contact-research-more-toggle\">Find out more and how to opt out here</span></p>\n		<div class=\"contact-research-more\">\n			<p>Examples of publicly available sources we may use include public registers, corporate websites, the news or social media.</p>\n			<p>This information is stored securely and protected from unauthorised access or disclosure. Find out more in <a target=\"_blank\"  href=\"https://www.cancerresearchuk.org/privacy-statement\">our privacy policy</a>.</p>\n			<p>If you don't want us to do this research in relation to you, you can tell us anytime by contacting <span class=\"phone-number\"><a class=\"mobile\" href=\"tel:+443001233379\">0300 123 3379</a><span class=\"desktop\">0300 123 3379</span></span> or <a href=\"mailto:preferences@cancer.org.uk\">preferences@cancer.org.uk</a>.</p>\n		</div>\n	</div>\n	<div class=\"contact-research\">\n		<p>We may try to obtain up-to-date contact details for you using external sources if you move house, so that we can stay in touch.</p>\n		<p><span class=\"contact-research-more-toggle\">Find out more and how to opt out here</span></p>\n		<div class=\"contact-research-more\">\n			<p>We may try to obtain up-to-date contact details for you using external sources such as 3rd party organisations (if you previously provided consent to share your data), or the post office national change of address database. This means that we can ensure we have an accurate record of our supporters and ensure that we continue to communicate with you in accordance with your wishes.</p>\n			<p>If you don't want us to do this research in relation to you, you can tell us anytime by contacting <span class=\"phone-number\"><a class=\"mobile\" href=\"tel:+443001233379\">0300 123 3379</a><span class=\"desktop\">0300 123 3379</span></span> or <a href=\"mailto:preferences@cancer.org.uk\">preferences@cancer.org.uk</a>.</p>\n		</div>\n	</div>\n</fieldset>\n";
},"2":function(depth0,helpers,partials,data) {
  return " active";
  },"4":function(depth0,helpers,partials,data) {
  return " checked=\"checked\"";
  },"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "		<div class=\"join-us-option\">\n			<label for=\"social-opt-in\" class=\"label-group\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.social_feed : stack1)) != null ? stack1.copy : stack1), depth0))
    + "</label>\n\n			<label for=\"optin-social-yes\" class=\"checkbox-button-group js-optin-option";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.optin : stack1)) != null ? stack1.social_feed : stack1), "===", "true", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n				<input type=\"radio\" id=\"optin-social-yes\" name=\"optin-social\" data-field-name=\"optin.social_feed\"";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.optin : stack1)) != null ? stack1.social_feed : stack1), "===", "true", {"name":"ifCond","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " value=\"true\" />\n				Yes\n			</label>\n\n			<label for=\"optin-social-no\" class=\"checkbox-button-group js-optin-option";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.optin : stack1)) != null ? stack1.social_feed : stack1), "===", "false", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n				<input type=\"radio\" id=\"optin-social-no\" name=\"optin-social\" data-field-name=\"optin.social_feed\"";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.optin : stack1)) != null ? stack1.social_feed : stack1), "===", "false", {"name":"ifCond","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " value=\"false\" />\n				No\n			</label>\n\n		</div>\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "		<div id=\"coming-to-get-you\">\n			<img src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.attributes : stack1)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.communication_preferences : stack1)) != null ? stack1.join_us_bubble : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" />';\n		</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.show : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

},{"hbsfy/runtime":82}],17:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.type : stack1), "===", "cancer", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.type : stack1), "===", "research", {"name":"ifCond","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "	<p>Your ";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.frequency : stack1), "===", "annually", {"name":"ifCond","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.frequency : stack1), "!==", "annually", {"name":"ifCond","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " gift will be used to fund research into "
    + escapeExpression(((helpers.lowercase || (depth0 && depth0.lowercase) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.title : stack1), {"name":"lowercase","hash":{},"data":data})))
    + ".\n	In the future the research projects we’re supporting may change.\n	If funding for research into "
    + escapeExpression(((helpers.lowercase || (depth0 && depth0.lowercase) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.title : stack1), {"name":"lowercase","hash":{},"data":data})))
    + " is no longer needed, your donation will be used where it is needed the most, to help cure all cancers sooner.</p>\n";
},"3":function(depth0,helpers,partials,data) {
  return "annual";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.frequency : stack1), depth0));
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "	<p>Your ";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.frequency : stack1), "===", "annually", {"name":"ifCond","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.frequency : stack1), "!==", "annually", {"name":"ifCond","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " gift will be used to fund research "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.title : stack1), depth0))
    + ".\n		In the future the research projects we’re supporting may change.\n		If funding for research "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.title : stack1), depth0))
    + " is no longer needed, your donation will be used where it is needed the most, to help cure all cancers sooner.</p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.title : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});

},{"hbsfy/runtime":82}],18:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "	<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.image : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" />\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.type : stack1), "===", "cancer", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.type : stack1), "===", "research", {"name":"ifCond","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        Your gift will help us to beat "
    + escapeExpression(((helpers.lowercase || (depth0 && depth0.lowercase) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.title : stack1), {"name":"lowercase","hash":{},"data":data})))
    + " sooner.\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "        Your gift will help to fund our work "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.title : stack1), depth0))
    + ".\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.type : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});

},{"hbsfy/runtime":82}],19:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<fieldset class=\"fieldset\">\n\n	<script type=\"text/javascript\" src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/lib/captureplus/captureplus-2.20.js", {"name":"filter_asset","hash":{},"data":data})))
    + "\"></script>\n\n	<h2>"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.personal_details : stack1)) != null ? stack1.heading : stack1), depth0))
    + "</h2>\n\n	<div class=\"row form-details-row\">\n		<div class=\"col-sm-5 form-label input-small\">\n			<label for=\"address-salutation\">Title</label>\n		</div>\n		<div class=\"col-sm-6\">\n			<!-- render titles -->\n			";
  stack1 = ((helpers.formFields || (depth0 && depth0.formFields) || helperMissing).call(depth0, (depth0 != null ? depth0.form : depth0), "titles", (depth0 != null ? depth0.activeDonation : depth0), false, {"name":"formFields","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n    <div id=\"address-salutation-other-wrapper\" class=\"row form-details-row";
  stack1 = helpers.unless.call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.address : stack1)) != null ? stack1.other : stack1), {"name":"unless","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n		<div class=\"col-sm-5 form-label\">\n			<label for=\"address-salutation-other\">Title (if other)</label>\n		</div>\n		<div class=\"col-sm-6\">\n			<input id=\"address-salutation-other\" name=\"address-salutation-other\" class=\"text address-salutation required\" value=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.address : stack1)) != null ? stack1.other : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n		</div>\n	</div>\n\n	<!-- render 'other' fields -->\n	";
  stack1 = ((helpers.formFields || (depth0 && depth0.formFields) || helperMissing).call(depth0, (depth0 != null ? depth0.form : depth0), "other", (depth0 != null ? depth0.activeDonation : depth0), false, {"name":"formFields","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n\n	<!-- render address fields -->\n	";
  stack1 = ((helpers.formFields || (depth0 && depth0.formFields) || helperMissing).call(depth0, (depth0 != null ? depth0.form : depth0), "address", (depth0 != null ? depth0.activeDonation : depth0), false, {"name":"formFields","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n\n	<div class=\"row form-details-row\">\n		<div class=\"col-sm-5 form-label\">\n			<label for=\"address-country\">Country</label>\n		</div>\n		<div class=\"col-sm-6\">\n			<select id=\"address-country\" class=\"payment-field address-country-1 address-field\" name=\"address-country\" data-field-name=\"address.country\">\n				<option value=\"GB\" selected=\"selected\">United Kingdom</option>\n				<option value=\"AF\">Afghanistan</option>\n				<option value=\"AL\">Albania</option>\n				<option value=\"DZ\">Algeria</option>\n				<option value=\"AS\">American Samoa</option>\n				<option value=\"AD\">Andorra</option>\n				<option value=\"AG\">Angola</option>\n				<option value=\"AI\">Anguilla</option>\n				<option value=\"AG\">Antigua &amp; Barbuda</option>\n				<option value=\"AR\">Argentina</option>\n				<option value=\"AA\">Armenia</option>\n				<option value=\"AW\">Aruba</option>\n				<option value=\"AU\">Australia</option>\n				<option value=\"AT\">Austria</option>\n				<option value=\"AZ\">Azerbaijan</option>\n				<option value=\"BS\">Bahamas</option>\n				<option value=\"BH\">Bahrain</option>\n				<option value=\"BD\">Bangladesh</option>\n				<option value=\"BB\">Barbados</option>\n				<option value=\"BY\">Belarus</option>\n				<option value=\"BE\">Belgium</option>\n				<option value=\"BZ\">Belize</option>\n				<option value=\"BJ\">Benin</option>\n				<option value=\"BM\">Bermuda</option>\n				<option value=\"BT\">Bhutan</option>\n				<option value=\"BO\">Bolivia</option>\n				<option value=\"BL\">Bonaire</option>\n				<option value=\"BA\">Bosnia &amp; Herzegovina</option>\n				<option value=\"BW\">Botswana</option>\n				<option value=\"BR\">Brazil</option>\n				<option value=\"BC\">British Indian Ocean Ter</option>\n				<option value=\"BN\">Brunei</option>\n				<option value=\"BG\">Bulgaria</option>\n				<option value=\"BF\">Burkina Faso</option>\n				<option value=\"BI\">Burundi</option>\n				<option value=\"KH\">Cambodia</option>\n				<option value=\"CM\">Cameroon</option>\n				<option value=\"CA\">Canada</option>\n				<option value=\"IC\">Canary Islands</option>\n				<option value=\"CV\">Cape Verde</option>\n				<option value=\"KY\">Cayman Islands</option>\n				<option value=\"CF\">Central African Republic</option>\n				<option value=\"TD\">Chad</option>\n				<option value=\"CD\">Channel Islands</option>\n				<option value=\"CL\">Chile</option>\n				<option value=\"CN\">China</option>\n				<option value=\"CI\">Christmas Island</option>\n				<option value=\"CS\">Cocos Island</option>\n				<option value=\"CO\">Colombia</option>\n				<option value=\"CC\">Comoros</option>\n				<option value=\"CG\">Congo</option>\n				<option value=\"CK\">Cook Islands</option>\n				<option value=\"CR\">Costa Rica</option>\n				<option value=\"CT\">Cote D'Ivoire</option>\n				<option value=\"HR\">Croatia</option>\n				<option value=\"CU\">Cuba</option>\n				<option value=\"CB\">Curacao</option>\n				<option value=\"CY\">Cyprus</option>\n				<option value=\"CZ\">Czech Republic</option>\n				<option value=\"DK\">Denmark</option>\n				<option value=\"DJ\">Djibouti</option>\n				<option value=\"DM\">Dominica</option>\n				<option value=\"DO\">Dominican Republic</option>\n				<option value=\"TM\">East Timor</option>\n				<option value=\"EC\">Ecuador</option>\n				<option value=\"EG\">Egypt</option>\n				<option value=\"SV\">El Salvador</option>\n				<option value=\"GQ\">Equatorial Guinea</option>\n				<option value=\"ER\">Eritrea</option>\n				<option value=\"EE\">Estonia</option>\n				<option value=\"ET\">Ethiopia</option>\n				<option value=\"FA\">Falkland Islands</option>\n				<option value=\"FO\">Faroe Islands</option>\n				<option value=\"FJ\">Fiji</option>\n				<option value=\"FI\">Finland</option>\n				<option value=\"FR\">France</option>\n				<option value=\"GF\">French Guiana</option>\n				<option value=\"PF\">French Polynesia</option>\n				<option value=\"FS\">French Southern Ter</option>\n				<option value=\"GA\">Gabon</option>\n				<option value=\"GM\">Gambia</option>\n				<option value=\"GE\">Georgia</option>\n				<option value=\"DE\">Germany</option>\n				<option value=\"GH\">Ghana</option>\n				<option value=\"GI\">Gibraltar</option>\n				<option value=\"GB\">Great Britain</option>\n				<option value=\"GR\">Greece</option>\n				<option value=\"GL\">Greenland</option>\n				<option value=\"GD\">Grenada</option>\n				<option value=\"GP\">Guadeloupe</option>\n				<option value=\"GU\">Guam</option>\n				<option value=\"GT\">Guatemala</option>\n				<option value=\"GN\">Guinea</option>\n				<option value=\"GY\">Guyana</option>\n				<option value=\"HT\">Haiti</option>\n				<option value=\"HW\">Hawaii</option>\n				<option value=\"HN\">Honduras</option>\n				<option value=\"HK\">Hong Kong</option>\n				<option value=\"HU\">Hungary</option>\n				<option value=\"IS\">Iceland</option>\n				<option value=\"IN\">India</option>\n				<option value=\"ID\">Indonesia</option>\n				<option value=\"IA\">Iran</option>\n				<option value=\"IQ\">Iraq</option>\n				<option value=\"IR\">Ireland</option>\n				<option value=\"IM\">Isle of Man</option>\n				<option value=\"IL\">Israel</option>\n				<option value=\"IT\">Italy</option>\n				<option value=\"JM\">Jamaica</option>\n				<option value=\"JP\">Japan</option>\n				<option value=\"JO\">Jordan</option>\n				<option value=\"KZ\">Kazakhstan</option>\n				<option value=\"KE\">Kenya</option>\n				<option value=\"KI\">Kiribati</option>\n				<option value=\"NK\">Korea North</option>\n				<option value=\"KS\">Korea South</option>\n				<option value=\"KW\">Kuwait</option>\n				<option value=\"KG\">Kyrgyzstan</option>\n				<option value=\"LA\">Laos</option>\n				<option value=\"LV\">Latvia</option>\n				<option value=\"LB\">Lebanon</option>\n				<option value=\"LS\">Lesotho</option>\n				<option value=\"LR\">Liberia</option>\n				<option value=\"LY\">Libya</option>\n				<option value=\"LI\">Liechtenstein</option>\n				<option value=\"LT\">Lithuania</option>\n				<option value=\"LU\">Luxembourg</option>\n				<option value=\"MO\">Macau</option>\n				<option value=\"MK\">Macedonia</option>\n				<option value=\"MG\">Madagascar</option>\n				<option value=\"MY\">Malaysia</option>\n				<option value=\"MW\">Malawi</option>\n				<option value=\"MV\">Maldives</option>\n				<option value=\"ML\">Mali</option>\n				<option value=\"MT\">Malta</option>\n				<option value=\"MH\">Marshall Islands</option>\n				<option value=\"MQ\">Martinique</option>\n				<option value=\"MR\">Mauritania</option>\n				<option value=\"MU\">Mauritius</option>\n				<option value=\"ME\">Mayotte</option>\n				<option value=\"MX\">Mexico</option>\n				<option value=\"MI\">Midway Islands</option>\n				<option value=\"MD\">Moldova</option>\n				<option value=\"MC\">Monaco</option>\n				<option value=\"MN\">Mongolia</option>\n				<option value=\"MS\">Montserrat</option>\n				<option value=\"MA\">Morocco</option>\n				<option value=\"MZ\">Mozambique</option>\n				<option value=\"MM\">Myanmar</option>\n				<option value=\"NA\">Nambia</option>\n				<option value=\"NU\">Nauru</option>\n				<option value=\"NP\">Nepal</option>\n				<option value=\"AN\">Netherland Antilles</option>\n				<option value=\"NL\">Netherlands (Holland, Europe)</option>\n				<option value=\"NV\">Nevis</option>\n				<option value=\"NC\">New Caledonia</option>\n				<option value=\"NZ\">New Zealand</option>\n				<option value=\"NI\">Nicaragua</option>\n				<option value=\"NE\">Niger</option>\n				<option value=\"NG\">Nigeria</option>\n				<option value=\"NW\">Niue</option>\n				<option value=\"NF\">Norfolk Island</option>\n				<option value=\"NO\">Norway</option>\n				<option value=\"OM\">Oman</option>\n				<option value=\"PK\">Pakistan</option>\n				<option value=\"PW\">Palau Island</option>\n				<option value=\"PS\">Palestine</option>\n				<option value=\"PA\">Panama</option>\n				<option value=\"PG\">Papua New Guinea</option>\n				<option value=\"PY\">Paraguay</option>\n				<option value=\"PE\">Peru</option>\n				<option value=\"PH\">Philippines</option>\n				<option value=\"PO\">Pitcairn Island</option>\n				<option value=\"PL\">Poland</option>\n				<option value=\"PT\">Portugal</option>\n				<option value=\"PR\">Puerto Rico</option>\n				<option value=\"QA\">Qatar</option>\n				<option value=\"ME\">Republic of Montenegro</option>\n				<option value=\"RS\">Republic of Serbia</option>\n				<option value=\"RE\">Reunion</option>\n				<option value=\"RO\">Romania</option>\n				<option value=\"RU\">Russia</option>\n				<option value=\"RW\">Rwanda</option>\n				<option value=\"NT\">St Barthelemy</option>\n				<option value=\"EU\">St Eustatius</option>\n				<option value=\"HE\">St Helena</option>\n				<option value=\"KN\">St Kitts-Nevis</option>\n				<option value=\"LC\">St Lucia</option>\n				<option value=\"MB\">St Maarten</option>\n				<option value=\"PM\">St Pierre &amp; Miquelon</option>\n				<option value=\"VC\">St Vincent &amp; Grenadines</option>\n				<option value=\"SP\">Saipan</option>\n				<option value=\"SO\">Samoa</option>\n				<option value=\"AS\">Samoa American</option>\n				<option value=\"SM\">San Marino</option>\n				<option value=\"ST\">Sao Tome &amp; Principe</option>\n				<option value=\"SA\">Saudi Arabia</option>\n				<option value=\"SN\">Senegal</option>\n				<option value=\"RS\">Serbia</option>\n				<option value=\"SC\">Seychelles</option>\n				<option value=\"SL\">Sierra Leone</option>\n				<option value=\"SG\">Singapore</option>\n				<option value=\"SK\">Slovakia</option>\n				<option value=\"SI\">Slovenia</option>\n				<option value=\"SB\">Solomon Islands</option>\n				<option value=\"OI\">Somalia</option>\n				<option value=\"ZA\">South Africa</option>\n				<option value=\"ES\">Spain</option>\n				<option value=\"LK\">Sri Lanka</option>\n				<option value=\"SD\">Sudan</option>\n				<option value=\"SR\">Suriname</option>\n				<option value=\"SZ\">Swaziland</option>\n				<option value=\"SE\">Sweden</option>\n				<option value=\"CH\">Switzerland</option>\n				<option value=\"SY\">Syria</option>\n				<option value=\"TA\">Tahiti</option>\n				<option value=\"TW\">Taiwan</option>\n				<option value=\"TJ\">Tajikistan</option>\n				<option value=\"TZ\">Tanzania</option>\n				<option value=\"TH\">Thailand</option>\n				<option value=\"TG\">Togo</option>\n				<option value=\"TK\">Tokelau</option>\n				<option value=\"TO\">Tonga</option>\n				<option value=\"TT\">Trinidad &amp; Tobago</option>\n				<option value=\"TN\">Tunisia</option>\n				<option value=\"TR\">Turkey</option>\n				<option value=\"TU\">Turkmenistan</option>\n				<option value=\"TC\">Turks &amp; Caicos Is</option>\n				<option value=\"TV\">Tuvalu</option>\n				<option value=\"UG\">Uganda</option>\n				<option value=\"UA\">Ukraine</option>\n				<option value=\"AE\">United Arab Emirates</option>\n				<option value=\"GB\">United Kingdom</option>\n				<option value=\"US\">United States</option>\n				<option value=\"UY\">Uruguay</option>\n				<option value=\"UZ\">Uzbekistan</option>\n				<option value=\"VU\">Vanuatu</option>\n				<option value=\"VS\">Vatican City State</option>\n				<option value=\"VE\">Venezuela</option>\n				<option value=\"VN\">Vietnam</option>\n				<option value=\"VB\">Virgin Islands (Brit)</option>\n				<option value=\"VA\">Virgin Islands (USA)</option>\n				<option value=\"WK\">Wake Island</option>\n				<option value=\"WF\">Wallis &amp; Futana Is</option>\n				<option value=\"YE\">Yemen</option>\n				<option value=\"ZR\">Zaire</option>\n				<option value=\"ZM\">Zambia</option>\n				<option value=\"ZW\">Zimbabwe</option>\n			</select>\n		</div>\n	</div>\n</fieldset>\n";
},"2":function(depth0,helpers,partials,data) {
  return " hidden";
  },"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.address : stack1)) != null ? stack1.salutation : stack1), depth0));
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.show : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

},{"hbsfy/runtime":82}],20:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  return "	<h2>Edit your details</h2>\n";
  },"3":function(depth0,helpers,partials,data) {
  return "	<h2>Your donation</h2>\n";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "	<div id=\"donation-type\"></div>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_amount : stack1), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.motivation : stack1)) != null ? stack1.heading_required : stack1), "&&", ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplemntary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.motivation_in_honour_of : stack1), {"name":"ifCond","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.restriction : stack1), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  return "		<div id=\"donation-amount\"></div>\n";
  },"8":function(depth0,helpers,partials,data) {
  return "		<div id=\"your-motivation\"></div>\n";
  },"10":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.flags : depth0)) != null ? stack1.restrictions : stack1), {"name":"unless","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"11":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.restriction_preferences : stack1)) != null ? stack1.active : stack1), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"12":function(depth0,helpers,partials,data) {
  return "				<div id=\"donation-restriction\"></div>\n";
  },"14":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "    <div class=\"summary-container";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.restriction : depth0), {"name":"unless","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.type : depth0), "===", "single", {"name":"ifCond","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.type : depth0), "===", "regular", {"name":"ifCond","hash":{},"fn":this.program(25, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.restriction : depth0), {"name":"if","hash":{},"fn":this.program(31, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n        <a class=\"edit\" href=\"\">Edit</a>\n    </div>\n";
},"15":function(depth0,helpers,partials,data) {
  return " full-width";
  },"17":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.inMemory : depth0), "&&", ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.motivation_in_honour_of : stack1), {"name":"ifCond","hash":{},"fn":this.program(18, data),"inverse":this.program(23, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"18":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "				<h3>You're making a donation of <em>&pound;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_amount : stack1), depth0))
    + "</em>.\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.restriction : depth0), {"name":"if","hash":{},"fn":this.program(19, data),"inverse":this.program(21, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </h3>\n";
},"19":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                        Your gift is in memory of <em>"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.motivation_in_honour_of : stack1), depth0))
    + "</em> and will help beat "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.title : stack1), depth0))
    + "\n";
},"21":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                        Your gift is in memory of <em>"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.motivation_in_honour_of : stack1), depth0))
    + "</em> and will help beat cancer sooner.\n";
},"23":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "				<h3>You're making a donation of <em>&pound;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_amount : stack1), depth0))
    + "</em>.</h3>\n\n";
},"25":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.inMemory : depth0), "&&", ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.motivation_in_honour_of : stack1), {"name":"ifCond","hash":{},"fn":this.program(26, data),"inverse":this.program(29, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"26":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                <h3>You're making a monthly donation of <em>&pound;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_amount : stack1), depth0))
    + "</em>.\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.restriction : depth0), {"name":"if","hash":{},"fn":this.program(27, data),"inverse":this.program(21, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</h3>\n";
},"27":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                    	Your gift is in memory of <em>"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.motivation_in_honour_of : stack1), depth0))
    + "</em> and will help beat "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.title : stack1), depth0))
    + "\n";
},"29":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                <h3>You're making a monthly donation of <em>&pound;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_amount : stack1), depth0))
    + "</em>.</h3>\n";
},"31":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "			<div class=\"image-container\">\n				<img src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.image_large : stack1), {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" />\n				<span>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span>\n			</div>\n";
},"33":function(depth0,helpers,partials,data) {
  return "	<a class=\"action-button save\" href=\"\">Confirm changes</a>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.edit : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.edit : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.edit : depth0), {"name":"unless","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.edit : depth0), {"name":"if","hash":{},"fn":this.program(33, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

},{"hbsfy/runtime":82}],21:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "	<h3>"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.motivation : stack1)) != null ? stack1.heading : stack1), depth0))
    + "</h3>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "	<h2>"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.motivation : stack1)) != null ? stack1.heading : stack1), depth0))
    + "</h2>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "		<option value=\"None provided\">Please select</option>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.randomisedMotivations : depth0), {"name":"each","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<option value=\""
    + escapeExpression(lambda((depth0 != null ? depth0.text : depth0), depth0))
    + "\">"
    + escapeExpression(lambda((depth0 != null ? depth0.text : depth0), depth0))
    + "</option>\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "	<div id=\"motivation-honour-memory\">\n		<p class=\"description\">If you'd like to dedicate your donation in memory of someone, please enter their name.</p>\n		<input type=\"text\" class=\"payment-field alphaspace\" name=\"supplementary-private-motivation-honour\" id=\"your-motivation-honour\" data-field-name=\"supplementary.private.motivation_in_honour_of\" value=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.motivation_in_honour_of : stack1), depth0))
    + "\"\n		/>\n	</div>\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "	<div id=\"motivation-other\">\n		<p class=\"description\">Enter other reason.</p>\n		<input type=\"text\" class=\"payment-field\" id=\"your-motivation-other\" name=\"supplementary-private-motivation-other\" data-field-name=\"supplementary.private.motivation_other\" value=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.motivation_other : stack1), depth0))
    + "\" />\n	</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.summary : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n<label for=\"motivation\" class=\"sub\">";
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.motivation : stack1)) != null ? stack1.intro_copy : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</label>\n\n<select onchange=\"this.blur()\" id=\"motivation\" class=\"select-full-width\" name=\"supplementary-private-motivation\" class=\"payment-field\" data-field-name=\"supplementary.private.motivation\">\n";
  stack1 = ((helpers.select || (depth0 && depth0.select) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.motivation : stack1), {"name":"select","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</select>\n\n<a id=\"motivation-why\" href=\"#\" class=\"small toggle-motivation\">Why are we asking this?</a>\n<div id=\"modal-bg-motivation\" class=\"modal-bg\"></div>\n<div id=\"motivation-why-hidden\">\n	<div id=\"motivation-why-close\" class=\"toggle-motivation\">Close [X]</div>\n	<div class=\"clearfix\">\n		<p>We may use this information to tailor messages, or to send you information which may be helpful to you. We will keep this information confidential, but you do not need to provide a response if you’re not comfortable.</p>\n	</div>\n</div>\n\n";
  stack1 = ((helpers.if_is_in_honour || (depth0 && depth0.if_is_in_honour) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.motivation : stack1), {"name":"if_is_in_honour","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.if_is_different || (depth0 && depth0.if_is_different) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.motivation : stack1), {"name":"if_is_different","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

},{"hbsfy/runtime":82}],22:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div>\n	<h1>We're sorry!</h1>\n\n	<div class=\"alert alert-info\">";
  stack1 = ((helper = (helper = helpers.payment_error_html || (depth0 != null ? depth0.payment_error_html : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"payment_error_html","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n</div>";
},"useData":true});

},{"hbsfy/runtime":82}],23:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  return " regular ";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "				";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.recurrent_payment : stack1)) != null ? stack1.active : stack1), "===", true, {"name":"ifCond","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n				";
},"4":function(depth0,helpers,partials,data) {
  return " or ";
  },"6":function(depth0,helpers,partials,data) {
  return " single\n";
  },"8":function(depth0,helpers,partials,data) {
  return "		  <a href=\"#regular\" class=\"donate-select checkbox-button-group\" id=\"regular-donation\">Regular donation</a>\n";
  },"10":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.recurrent_payment : stack1)) != null ? stack1.active : stack1), "===", "true", {"name":"ifCond","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"11":function(depth0,helpers,partials,data) {
  return "				<span id=\"donate-select-or\"> or </span>\n";
  },"13":function(depth0,helpers,partials,data) {
  return "			<a href=\"#single\" class=\"donate-select checkbox-button-group\" id=\"single-donation\">Single donation</a>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "<form id=\"donation-form\" class=\"theme-"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.url_name : stack1), depth0))
    + "\">\n\n	<h1>Your donation</h1>\n\n	<fieldset id=\"donation-type\">\n		<h2>Donation type</h2>\n\n		<p class=\"sub\">Please choose if you would like to make a\n			";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.recurrent_payment : stack1)) != null ? stack1.active : stack1), "===", true, {"name":"ifCond","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.single_payment : stack1)) != null ? stack1.active : stack1), "===", true, {"name":"ifCond","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.single_payment : stack1)) != null ? stack1.active : stack1), "===", true, {"name":"ifCond","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "			donation.\n		</p>\n\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.recurrent_payment : stack1)) != null ? stack1.active : stack1), "===", true, {"name":"ifCond","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.single_payment : stack1)) != null ? stack1.active : stack1), "||", ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.collection_payment : stack1)) != null ? stack1.active : stack1), {"name":"ifCond","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.single_payment : stack1)) != null ? stack1.active : stack1), "||", ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.collection_payment : stack1)) != null ? stack1.active : stack1), {"name":"ifCond","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n	</fieldset>\n</form>\n";
},"useData":true});

},{"hbsfy/runtime":82}],24:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  return "        <fieldset id=\"your-donation-summary\"></fieldset>\n";
  },"3":function(depth0,helpers,partials,data) {
  return "        <fieldset id=\"donation-amount\"></fieldset>\n";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.urlParams : depth0)) != null ? stack1.summary : stack1), {"name":"unless","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  return "            <fieldset id=\"motivation-container\"></fieldset>\n";
  },"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.restriction_preferences : stack1)) != null ? stack1.active : stack1), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.urlParams : depth0)) != null ? stack1.summary : stack1), {"name":"unless","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  return "				<fieldset id=\"donation-restriction\"></fieldset>\n";
  },"12":function(depth0,helpers,partials,data) {
  return "        <p class=\"disclaimer\">By pressing ‘Complete my donation’ I confirm that the above details are correct and I have read and agreed to Stand Up To Cancer's <a href=\"http://www.standuptocancer.org.uk/information/terms-and-conditions\" target=\"_blank\">Terms and Conditions</a>.</p>\n        <p class=\"disclaimer\">The information supplied will be collected and maintained by Cancer Research UK in accordance with its <a href=\"http://www.cancerresearchuk.org/privacy-statement\" target=\"_blank\">Privacy Policy</a>.\n          Channel 4 is the promoter of Stand Up To Cancer only and is not responsible for the collection of donations or the administration of funds.\n          Cancer Research UK may share personal data with Channel 4 solely for the purpose of supporting and promoting Stand Up To Cancer.</p>\n";
  },"14":function(depth0,helpers,partials,data) {
  return "			<p class=\"disclaimer\">By pressing 'Complete my donation' I confirm that the above details are correct and that I have read and agreed to Cancer Research UK's <a href=\"http://www.cancerresearchuk.org/about-us/utilities/terms-and-conditions/\" target=\"_blank\">terms and conditions</a> and <a target=\"_blank\"  href=\"http://www.cancerresearchuk.org/about-us/utilities/privacy-statement/\">privacy statement</a>.</p>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "<style>\n    .radio-group-donation-amount {\n        background-color: "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.ga_radio_button_not_selected_colour : stack1), depth0))
    + ";\n    }\n\n    .radio-group-donation-amount.active {\n        background-color: "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.ga_radio_button_selected_colour : stack1), depth0))
    + ";\n    }\n\n    .btn {\n      background-color: "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.complete_donation_button_colour : stack1), depth0))
    + ";\n    }\n</style>\n\n<form id=\"donation-form\" class=\"theme-"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.url_name : stack1), depth0))
    + " regular-donation\">\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.urlParams : depth0)) != null ? stack1.summary : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.urlParams : depth0)) != null ? stack1.summary : stack1), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.motivation : stack1)) != null ? stack1.heading_required : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.flags : depth0)) != null ? stack1.RESTRICTIONS : stack1), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	<div id=\"about-your-donation\"></div>\n\n	<div id=\"your-details\"></div>\n\n	<div id=\"join-us\"></div>\n\n	<div class=\"direct-debit\" id=\"donation-method\"></div>\n\n	<div id=\"submit\">\n	<fieldset>\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.theme_option : stack1), "===", "su2c", {"name":"ifCond","hash":{},"fn":this.program(12, data),"inverse":this.program(14, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n		<button id=\"complete-regular-donation\" class=\"btn\">Complete my donation</button>\n	</fieldset>\n    </div>\n\n</form>\n";
},"useData":true});

},{"hbsfy/runtime":82}],25:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  return "		<fieldset id=\"your-donation-summary\"></fieldset>\n";
  },"3":function(depth0,helpers,partials,data) {
  return "		<fieldset id=\"donation-amount\"></fieldset>\n";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.urlParams : depth0)) != null ? stack1.summary : stack1), {"name":"unless","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  return "			<fieldset id=\"motivation-container\"></fieldset>\n";
  },"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.restriction_preferences : stack1)) != null ? stack1.active : stack1), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.urlParams : depth0)) != null ? stack1.summary : stack1), {"name":"unless","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  return "				<fieldset class=\"step-1\" id=\"donation-restriction\"></fieldset>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<style>\n    .radio-group-donation-amount {\n        background-color: "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.ga_radio_button_not_selected_colour : stack1), depth0))
    + ";\n    }\n\n    .radio-group-donation-amount.active {\n        background-color: "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.ga_radio_button_selected_colour : stack1), depth0))
    + ";\n    }\n\n    .btn {\n      background-color: "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.theme : stack1)) != null ? stack1.complete_donation_button_colour : stack1), depth0))
    + ";\n    }\n</style>\n\n<form id=\"donation-form\" class=\"theme-"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.url_name : stack1), depth0))
    + "\">\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.urlParams : depth0)) != null ? stack1.summary : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.urlParams : depth0)) != null ? stack1.summary : stack1), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.form : stack1)) != null ? stack1.motivation : stack1)) != null ? stack1.heading_required : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.flags : depth0)) != null ? stack1.RESTRICTIONS : stack1), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n	<div class=\"step-1\" id=\"about-your-donation\"></div>\n\n	<div id=\"donation-method\"></div>\n\n	<div id=\"your-details\"></div>\n\n	<div id=\"join-us\"></div>\n\n	<div id=\"submit\"></div>\n\n</form>\n";
},"useData":true});

},{"hbsfy/runtime":82}],26:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, functionType="function", buffer = "			<h1>";
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page_recurring : stack1)) != null ? stack1.compiled : stack1)) != null ? stack1.heading : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</h1>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page_recurring : stack1)) != null ? stack1.copy_subheading : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.type : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.motivation : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			<div class=\"thank-you-copy-1\">\n				";
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page_recurring : stack1)) != null ? stack1.compiled : stack1)) != null ? stack1.copy_1 : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			</div>\n\n			<div class=\"thank-you-copy-2\">\n				";
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page_recurring : stack1)) != null ? stack1.compiled : stack1)) != null ? stack1.copy_2 : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			</div>\n\n			<div id=\"ddInfo\">\n				<p>Full details of your Direct Debit will be sent to you in the post no later than 10 working days before the first collection date. You can read the full Direct Debit Guarantee at the bottom of this page.</p>\n				<p>Cancer Research UK will show on your bank statement against this Direct Debit.</p>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.copy : stack1), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n				<table border=\"0\" id=\"transInfo\">\n					<thead>\n						<tr>\n							<td colspan=\"3\">\n								<h3 class=\"dd\">Transaction details</h3></td>\n						</tr>\n					</thead>\n					<tbody>\n						<tr>\n							<td>Reference number</td>\n							<td width=\"10\"></td>\n							<td align=\"right\"><strong>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.public_id : stack1), depth0))
    + "</strong></td>\n						</tr>\n						<tr>\n							<td>Transaction amount</td>\n							<td width=\"10\"></td>\n							<td align=\"right\"><strong>&pound;"
    + escapeExpression(((helpers.formatCurrency || (depth0 && depth0.formatCurrency) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.payment_amount : stack1), {"name":"formatCurrency","hash":{},"data":data})))
    + "</strong></td>\n						</tr>\n						<tr>\n							<td>Frequency</td>\n							<td width=\"10\"></td>\n							<td align=\"right\"><strong>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.frequency : stack1), depth0))
    + "</strong></td>\n						</tr>\n						<tr>\n							<td>Start date</td>\n							<td width=\"10\"></td>\n							<td align=\"right\"><strong>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.day : stack1), depth0))
    + "th</strong></td>\n						</tr>\n					</tbody>\n				</table>\n\n				<table border=\"0\" id=\"ddInstruction\">\n					<thead>\n						<tr>\n							<td colspan=\"3\">\n								<h3 class=\"dd\">Direct Debit Instruction</h3></td>\n						</tr>\n					</thead>\n					<tbody>\n						<tr>\n							<td colspan=\"3\" id=\"ddLogo\"><img class=\"dd-logo-svg\" width=\"63\" height=\"20\" src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/direct-debit-trans.svg", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Direct Debit Logo\" />Please print off and retain for your records</td>\n						</tr>\n						<tr>\n							<td valign=\"top\" class=\"half-width\">\n								<p class=\"cruk-add\"><strong>\n                  Cancer Research UK<br />\n                  Angel Building<br />\n                  407 St John Street<br />\n                  London<br />\n                  EC1V 4AD</strong>\n								</p>\n								<p>\n									Name(s) of Account Holder(s):\n									<br />\n									<strong>"
    + escapeExpression(((helpers.returnBankDetails || (depth0 && depth0.returnBankDetails) || helperMissing).call(depth0, "account_holder", {"name":"returnBankDetails","hash":{},"data":data})))
    + "</strong></p>\n								<p>\n									Bank / building society Account Number:\n									<br />\n									<strong>"
    + escapeExpression(((helpers.returnBankDetails || (depth0 && depth0.returnBankDetails) || helperMissing).call(depth0, "account_number", {"name":"returnBankDetails","hash":{},"data":data})))
    + "</strong></p>\n								<p>\n									Branch Sort Code:\n									<br />\n									<strong>"
    + escapeExpression(((helpers.returnBankDetails || (depth0 && depth0.returnBankDetails) || helperMissing).call(depth0, "sort_code", {"name":"returnBankDetails","hash":{},"data":data})))
    + "</strong></p>\n								<p>\n									Name and full postal address of your bank or building society:\n									<br /> ";
  stack1 = ((helpers.returnBankDetails || (depth0 && depth0.returnBankDetails) || helperMissing).call(depth0, "bank_details", {"name":"returnBankDetails","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n								</p>\n							</td>\n							<td width=\"10\"></td>\n							<td valign=\"top\" class=\"half-width\">\n								<p>\n									Instruction to your bank or building society to pay by Direct Debit\n								</p>\n								<p>\n									Service User Number:\n									<br />\n									<strong>768268</strong></p>\n								<p>\n									Reference:\n									<br />\n									<strong>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.public_id : stack1), depth0))
    + "</strong></p>\n								<p>\n									<p>\n										Instruction to your bank or building society:\n										<br /> Please pay Cancer Research UK Direct Debits from the account detailed in this Instruction subject to the safeguards assured by the Direct Debit Guarantee. I understand that this instruction may remain with Cancer Research UK and, if so, details\n										will be passed electronically to my bank/building society.\n									</p>\n									<p>\n										Date:\n										<br />\n										<strong>"
    + escapeExpression(((helper = (helper = helpers.returnDate || (depth0 != null ? depth0.returnDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"returnDate","hash":{},"data":data}) : helper)))
    + "</strong>\n									</p>\n							</td>\n						</tr>\n					</tbody>\n				</table>\n\n			</div>\n\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.optin : stack1)) != null ? stack1.giftaid : stack1), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.program(12, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			<div class=\"thank-you-copy-3\">\n				";
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page_recurring : stack1)) != null ? stack1.compiled : stack1)) != null ? stack1.copy_3 : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			</div>\n\n			<div id=\"thank-you-asset\">\n				";
  stack1 = ((helpers.thankYouAsset || (depth0 && depth0.thankYouAsset) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page_recurring : stack1), {"name":"thankYouAsset","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n			</div>\n\n	</div>\n\n\n\n\n\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "				<h2>";
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page_recurring : stack1)) != null ? stack1.compiled : stack1)) != null ? stack1.copy_subheading : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</h2>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "				<div id=\"restriction-thanks\">\n					";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.type : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n				</div>\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "				<div id=\"donation-motivation\">\n					";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0.motivation : depth0)) != null ? stack1.copy : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n				</div>\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "					<div class=\"small\">\n						";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.copy : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					</div>\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "				<div class=\"row\" id=\"giftaid-row\">\n					<div class=\"col-sm-3 giftaid-image\">\n						<img class=\"ga-logo\" src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/gift_aid_logo.png", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Giftaid Logo\" />\n						<img class=\"ga-encourage\" src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page_recurring : stack1)) != null ? stack1.gift_aid_yes_image : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page_recurring : stack1)) != null ? stack1.gift_aid_yes_image : stack1)) != null ? stack1.description : stack1), depth0))
    + "\" />\n					</div>\n					<div class=\"col-sm-9 giftaid-copy\">\n						";
  stack1 = ((helpers.renderGiftAidYesCopy || (depth0 && depth0.renderGiftAidYesCopy) || helperMissing).call(depth0, (depth0 != null ? depth0.form : depth0), (depth0 != null ? depth0.activeDonation : depth0), {"name":"renderGiftAidYesCopy","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					</div>\n				</div>\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "				<div class=\"row\" id=\"giftaid-row\">\n					<div class=\"col-sm-3 giftaid-image\">\n						<img class=\"ga-logo\" src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/gift_aid_logo.png", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Giftaid Logo\" />\n						<img class=\"ga-encourage\" src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page_recurring : stack1)) != null ? stack1.gift_aid_no_image : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page_recurring : stack1)) != null ? stack1.gift_aid_no_image : stack1)) != null ? stack1.description : stack1), depth0))
    + "\" />\n					</div>\n					<div class=\"col-sm-9 giftaid-copy\">\n						";
  stack1 = ((helpers.renderGiftAidNoCopy || (depth0 && depth0.renderGiftAidNoCopy) || helperMissing).call(depth0, (depth0 != null ? depth0.form : depth0), (depth0 != null ? depth0.activeDonation : depth0), {"name":"renderGiftAidNoCopy","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					</div>\n				</div>\n";
},"14":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.ispersonal : stack1), "!==", (depth0 != null ? depth0.fundraisingConstant : depth0), {"name":"ifCond","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.supplementary : stack1)) != null ? stack1['private'] : stack1)) != null ? stack1.ispersonal : stack1), "===", (depth0 != null ? depth0.fundraisingConstant : depth0), {"name":"ifCond","hash":{},"fn":this.program(22, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n";
},"15":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, helperMissing=helpers.helperMissing, buffer = "			<h1>";
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page : stack1)) != null ? stack1.compiled : stack1)) != null ? stack1.heading : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</h1>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page : stack1)) != null ? stack1.copy_subheading : stack1), {"name":"if","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.type : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.motivation : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			<div class=\"thank-you-copy-1\">\n				";
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page : stack1)) != null ? stack1.compiled : stack1)) != null ? stack1.copy_1 : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			</div>\n\n			<div class=\"thank-you-copy-2\">\n				";
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page : stack1)) != null ? stack1.compiled : stack1)) != null ? stack1.copy_2 : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			</div>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.optin : stack1)) != null ? stack1.giftaid : stack1), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.program(20, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			<div class=\"thank-you-copy-3\">\n				";
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page : stack1)) != null ? stack1.compiled : stack1)) != null ? stack1.copy_3 : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			</div>\n\n			<div id=\"thank-you-asset\">\n				";
  stack1 = ((helpers.thankYouAsset || (depth0 && depth0.thankYouAsset) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page : stack1), {"name":"thankYouAsset","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n			</div>\n";
},"16":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "				<h2>";
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page : stack1)) != null ? stack1.compiled : stack1)) != null ? stack1.copy_subheading : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</h2>\n";
},"18":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "				<div class=\"row\" id=\"giftaid-row\">\n					<div class=\"col-sm-3 giftaid-image\">\n						<img class=\"ga-logo\" src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/gift_aid_logo.png", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Giftaid Logo\" />\n						<img class=\"ga-encourage\" src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page : stack1)) != null ? stack1.gift_aid_yes_image : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page : stack1)) != null ? stack1.gift_aid_yes_image : stack1)) != null ? stack1.description : stack1), depth0))
    + "\" />\n					</div>\n					<div class=\"col-sm-9 giftaid-copy\">\n						";
  stack1 = ((helpers.renderGiftAidYesCopy || (depth0 && depth0.renderGiftAidYesCopy) || helperMissing).call(depth0, (depth0 != null ? depth0.form : depth0), (depth0 != null ? depth0.activeDonation : depth0), {"name":"renderGiftAidYesCopy","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					</div>\n				</div>\n";
},"20":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "				<div class=\"row\" id=\"giftaid-row\">\n					<div class=\"col-sm-3 giftaid-image\">\n						<img class=\"ga-logo\" src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/gift_aid_logo.png", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Giftaid Logo\" />\n						<img class=\"ga-encourage\" src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page : stack1)) != null ? stack1.gift_aid_no_image : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page : stack1)) != null ? stack1.gift_aid_no_image : stack1)) != null ? stack1.description : stack1), depth0))
    + "\" />\n					</div>\n					<div class=\"col-sm-9 giftaid-copy\">\n						";
  stack1 = ((helpers.renderGiftAidNoCopy || (depth0 && depth0.renderGiftAidNoCopy) || helperMissing).call(depth0, (depth0 != null ? depth0.form : depth0), (depth0 != null ? depth0.activeDonation : depth0), {"name":"renderGiftAidNoCopy","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					</div>\n				</div>\n";
},"22":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, helperMissing=helpers.helperMissing, buffer = "			<h1>";
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page_collection : stack1)) != null ? stack1.compiled : stack1)) != null ? stack1.heading : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</h1>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page_collection : stack1)) != null ? stack1.copy_subheading : stack1), {"name":"if","hash":{},"fn":this.program(23, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.restriction : depth0)) != null ? stack1.type : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.motivation : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			<div class=\"thank-you-copy-1\">\n				";
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page_collection : stack1)) != null ? stack1.compiled : stack1)) != null ? stack1.copy_1 : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			</div>\n\n			<div class=\"thank-you-copy-2\">\n				";
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page_collection : stack1)) != null ? stack1.compiled : stack1)) != null ? stack1.copy_2 : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			</div>\n\n			<div class=\"thank-you-copy-3\">\n				";
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page_collection : stack1)) != null ? stack1.compiled : stack1)) != null ? stack1.copy_3 : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n			</div>\n\n			<div id=\"thank-you-asset\">\n				";
  stack1 = ((helpers.thankYouAsset || (depth0 && depth0.thankYouAsset) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page_collection : stack1), {"name":"thankYouAsset","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n			</div>\n";
},"23":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "				<h2>";
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page_collection : stack1)) != null ? stack1.compiled : stack1)) != null ? stack1.copy_subheading : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</h2>\n";
},"25":function(depth0,helpers,partials,data) {
  return "	<!-- Don't render promos -->\n";
  },"27":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "		<section id=\"donation-thank-you-widget-container\" ";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page : stack1)) != null ? stack1.cross_sells_mode : stack1), "===", "2 promos", {"name":"ifCond","hash":{},"fn":this.program(28, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page : stack1)) != null ? stack1.cross_sells_mode : stack1), "===", "4 promos", {"name":"ifCond","hash":{},"fn":this.program(30, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n\n			<div class=\"clearfix\"></div>\n\n		</section>\n";
},"28":function(depth0,helpers,partials,data) {
  return " class=\"equalHeights\" ";
  },"30":function(depth0,helpers,partials,data) {
  return " class=\"equalHeights\"\n						 ";
  },"32":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "	<section id=\"ddGuarantee\">\n		<p>Please print off and retain for your records</p>\n		<img width=\"63\" height=\"20\" class=\"dd-logo-svg\" src=\""
    + escapeExpression(((helpers.filter_asset || (depth0 && depth0.filter_asset) || helperMissing).call(depth0, "/assets/themes/cruk/campaign/images/direct-debit-trans.svg", {"name":"filter_asset","hash":{},"data":data})))
    + "\" alt=\"Direct Debit Logo\" />\n		<h3 class=\"dd\">The Direct Debit Guarantee</h3>\n		<ul>\n			<li>This Guarantee is offered by all banks and building societies that accept instructions to pay Direct Debits.</li>\n			<li>If there are any changes to the amount, date or frequency of your Direct Debit Cancer Research UK will notify you 10 working days in advance of your account being debited or as otherwise agreed. If you request Cancer Research UK to collect a payment,\n				confirmation of the amount and date will be given to you at the time of the request.</li>\n			<li>If an error is made in the payment of your Direct Debit by Cancer Research UK or your bank or building society you are entitled to a full and immediate refund of the amount paid from your bank or building society.</li>\n			<li>If you receive a refund you are not entitled to, you must pay it back when Cancer Research UK asks you to.</li>\n			<li>You can cancel a Direct Debit at any time by simply contacting your bank or building society. Written confirmation may be required. Please also notify us.</li>\n		</ul>\n	</section>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<section id=\"donation-thank-you\">\n\n	<div id=\"thanks\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.frequency : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(14, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n</section>\n\n\n\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.campaign : stack1)) != null ? stack1.thank_you_page : stack1)) != null ? stack1.cross_sells_mode : stack1), "===", "no promos", {"name":"ifCond","hash":{},"fn":this.program(25, data),"inverse":this.program(27, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.activeDonation : depth0)) != null ? stack1.frequency : stack1), {"name":"if","hash":{},"fn":this.program(32, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

},{"hbsfy/runtime":82}],27:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
require('jquery.scrollTo');
require('jquery.geturlparam');
var amplify = require('amplify');

var PaymentModel = require('../../site/js/model/Payment');
var RecurrentPaymentModel = require('../../site/js/model/RecurrentPayment');

var CampaignModel = require('../../site/js/model/Campaign');

var HeaderView          = require('./View/components/Header');
var FooterView          = require('./View/components/Footer');
var LandingView         = require('./View/Landing');
var RegularDonationView = require('./View/RegularDonation');
var SingleDonationView  = require('./View/SingleDonation');
var ThanksView          = require('./View/Thanks');
var ThanksPreviewView   = require('./View/ThanksPreview');
var ErrorView           = require('./View/Error');

module.exports = Backbone.Router.extend({

    currentView: null,

    routes: {
		'': 'index',
		'_=_': 'index', // Facebook callback handler
		'regular': 'regular_donation',
        'regular/error': 'regular_donation',
		'single': 'single_donation',
		'single/error/:paymentId': 'single_donation',
		'single/error': 'single_donation',
		'single/cancelled': 'single_cancelled',
		'retry': 'single_donation',
		'thanks/:mode/preview': 'thanks_preview',
		'thanks/:mode/:id': 'thanks',
        'confirm-payment/:paymentId': 'paypal_donation',
        'confirm-payment/error/:paymentId': 'paypal_donation',
		'error': 'error'
    },

    initialize: function(options) {
        _.bindAll(this, 'onPaypalSuccess', 'onPaymentDetailsSuccess', 'onThanksDonationSuccess');

        this.urlParams = {};

        this.campaignModel = options.campaignModel;
		this.flags = options.flags;

		APP.Models.ActiveDonation = new PaymentModel();
		APP.Models.RecurrentDonation = new RecurrentPaymentModel();

    if (this.campaignModel.get('campaign').theme.theme_option === 'su2c') {
      $('body').addClass('su2c');
    }

        this.headerView = new HeaderView({ el: '#header', model: this.campaignModel });
        this.footerView = new FooterView({ el: '#footer', model: this.campaignModel });

		this.setParams();

		Backbone.history.start();
    },

	setParams: function() {
		var $document = $(document);
		var tributeeParam = $document.getUrlParam('tributee');
		var sourceCodeParam = $document.getUrlParam('sourcecode');
    var eventCodeParam = $document.getUrlParam('eventcode');
		var paypalGateway;

    APP.Models.ActiveDonation.set('supplementary.private.ispersonal', APP.Constants.GetCruk('PERSONAL_PAYMENT'));
    APP.Models.RecurrentDonation.set('supplementary.private.ispersonal', APP.Constants.GetCruk('PERSONAL_PAYMENT'));

		if( APP.previewMode ) {
			window.PreviewMode = true;
			$(document).ready(function(){
				$('body').prepend('<div style="height:30px"><div id="preview-message" style="height:30px; color:white; background-color:black; text-align:center; vertical-align:middle; line-height:30px; position:fixed; width:100%; z-index:1000">THIS IS A CONTENT PREVIEW. NO PAYMENT DATA WILL BE SUBMITTED.</div></div>');
			});
      //make sure that we only allow access to the draft only in case that preview was set
      if( $document.getUrlParam('draft') === '1' ) {
              this.campaignModel=new CampaignModel(APP.draft);
      }
		}

		if ($document.getUrlParam('frequency')) {
			APP.Models.ActiveDonation.set('frequency', $document.getUrlParam('frequency'));
			APP.Models.RecurrentDonation.set('frequency', $document.getUrlParam('frequency'));
		}

		if (sourceCodeParam) {
			this.urlParams.sourceCode = sourceCodeParam;
			APP.Models.ActiveDonation.set('source_code', sourceCodeParam);
			APP.Models.RecurrentDonation.set('source_code', sourceCodeParam);
		}

		if (eventCodeParam) {
			this.urlParams.eventCode = eventCodeParam;
			APP.Models.ActiveDonation.set('supplementary.private.event_code', eventCodeParam);
      APP.Models.RecurrentDonation.set('supplementary.private.event_code', eventCodeParam);
		}

		if ($document.getUrlParam('inmemory') === '1') {
			this.urlParams.inMemory = true;
		}

		if( $document.getUrlParam('summary') === '1' ) {
			this.urlParams.summary = true;
		}

		if( $document.getUrlParam('type') ) {
			var type = $document.getUrlParam('type');

			if (type === 'single') {
				location.href = '#single';
			}

			if (type === 'regular') {
				location.href = '#regular';
			}

      if (type === 'collection') {
        APP.Models.ActiveDonation.set('supplementary.private.ispersonal', APP.Constants.GetCruk('FUNDRISING_PAYMENT'));
        APP.Models.RecurrentDonation.set('supplementary.private.ispersonal', APP.Constants.GetCruk('FUNDRISING_PAYMENT'));
        location.href = '#single';
      }
		}

		if( $document.getUrlParam('amount') ) {
			this.urlParams.amount = true;
			APP.Models.ActiveDonation.set( 'payment_amount', parseFloat(parseFloat( $document.getUrlParam('amount') ).toFixed(2)) );
			APP.Models.RecurrentDonation.set( 'payment_amount', parseFloat(parseFloat( $document.getUrlParam('amount') ).toFixed(2)) );
		}

		if( $document.getUrlParam('giftaid') === '1' ) {
			this.urlParams.giftaid = true;
			APP.Models.ActiveDonation.set('optin.giftaid', true);
			APP.Models.RecurrentDonation.set('optin.giftaid', true);
			APP.Models.ActiveDonation.set('supplementary.private.ispersonal', APP.Constants.GetCruk('PERSONAL_PAYMENT'));
			APP.Models.RecurrentDonation.set('supplementary.private.ispersonal', APP.Constants.GetCruk('PERSONAL_PAYMENT'));
		}

    if ( $document.getUrlParam('hidedonationtype') === 'true') {
      this.urlParams.hidedonationtype = true;
    }

		if(tributeeParam) {
			var tributee = tributeeParam ? decodeURIComponent( tributeeParam ) : '';
			this.urlParams.tributee = true;
			APP.Models.ActiveDonation.set('supplementary.private.motivation_in_honour_of', tributee);
			APP.Models.RecurrentDonation.set('supplementary.private.motivation_in_honour_of', tributee);
		}

		if( $document.getUrlParam('prepop') ) {
			this.urlParams.preprop = true;
			APP.Models.ActiveDonation.prepopulate();
			APP.Models.RecurrentDonation.prepopulate();
		}

		if ( $document.getUrlParam('restriction') ) {
			this.urlParams.restriction = true;
			APP.Models.ActiveDonation.set('supplementary.private.restriction', $document.getUrlParam('restriction') );
			APP.Models.RecurrentDonation.set('supplementary.private.restriction', $document.getUrlParam('restriction') );
		}

		paypalGateway = this.campaignModel.get('campaign').template_setup.gateway_paypal;

		APP.Models.ActiveDonation.set('paypal_gateway', paypalGateway);
		APP.Models.RecurrentDonation.set('paypal_gateway', paypalGateway);
	},

    changeView: function(view) {

		var fragment = Backbone.history.fragment;

		if (view.options && !view.activeDonation.has('status')) {
			this.copyPaymentModel(view);
		}

		if ( this.validRoute(fragment) ) {

			if ( null !== this.currentView ) {
				this.currentView.undelegateEvents();
			}

			this.currentView = view;
			this.showApp();
			this.currentView.render();

			if ( $('.cancelled-error').length ) {
				$('html, body').animate({
					scrollTop: $('.cancelled-error').offset().top
				}, 1000);
			} else {
				$.scrollTo(0);
			}

			if (fragment === '') {
				this.reRoute();
			}

		} else {
			this.navigate('/', {trigger: true});
		}
	},

	reRoute: function() {
		var single = this.campaignModel.get('campaign').single_payment.active;
		var collection = this.campaignModel.get('campaign').collection_payment.active;
		var regular = this.campaignModel.get('campaign').recurrent_payment.active;

		if ( (!single && !collection) && regular) {
			this.navigate('regular', {trigger: true});
		}

		if ( (single && !collection) && !regular) {
			this.navigate('single', {trigger: true});
		}

		if ( (!single && collection) && !regular) {
			this.navigate('single', {trigger: true});
		}
	},

	copyPaymentModel: function(view) {
		switch (view.options.type) {
			case 'single':
				APP.Models.ActiveDonation.attributes = APP.Models.RecurrentDonation.attributes;
				break;
			case 'regular':
				APP.Models.RecurrentDonation.attributes = APP.Models.ActiveDonation.attributes;
				break;
		}
	},

	validRoute: function(route) {
		var valid = true;

		var routeMap = {
			'single': 'single_payment',
			'regular': 'recurrent_payment',
			'collection': 'single_payment'
		};

		var type = routeMap[route];

		if (type) {
			if (!this.campaignModel.get('campaign')[type].active) {
				valid = false;
			}
		}

		return valid;
	},

    index: function() {
		this.changeView(new LandingView({
			el: '#app',
			model: this.campaignModel,
			activeDonation: APP.Models.ActiveDonation
		}));
    },

    regular_donation: function() {
		APP.Models.RecurrentDonation.set('type', 'regular');

        this.changeView(new RegularDonationView({
			el: '#app',
			model: this.campaignModel,
			activeDonation: APP.Models.RecurrentDonation,
			urlParams: this.urlParams,
			collection: APP.Collections.Restrictions,
			router: this,
			flags: this.flags,
			type: 'regular'
		}));
    },

	single_donation: function(id) {
		if (id) {
			APP.Models.ActiveDonation.url = APP.Models.ActiveDonation.paymentUrl(id);

			APP.Models.ActiveDonation.fetch()
				.done(this.onPaymentDetailsSuccess);
		} else {
			this.onPaymentDetailsSuccess();
		}
	},

	onPaymentDetailsSuccess: function() {
		APP.Models.ActiveDonation.set('type', 'single');

		this.changeView(new SingleDonationView({
			el: '#app',
			model: this.campaignModel,
			activeDonation: APP.Models.ActiveDonation,
			urlParams: this.urlParams,
			collection: APP.Collections.Restrictions,
			router: this,
			flags: this.flags,
			type: 'single'
		}));
	},

	single_cancelled: function() {
		APP.Models.ActiveDonation = new PaymentModel( amplify.store.sessionStorage('paymentModel') );
		APP.Models.ActiveDonation.set('status', 'Cancelled');

		this.changeView(new SingleDonationView({
			el: '#app',
			model: this.campaignModel,
			activeDonation: APP.Models.ActiveDonation,
			urlParams: this.urlParams,
			collection: APP.Collections.Restrictions,
			router: this,
			flags: this.flags,
			type: 'single'
		}));
	},

    thanks: function(mode, id) {
		this.mode = mode;
		var paypalGateway;

		if (mode === 'regular') {
			APP.Models.ActiveDonation = new RecurrentPaymentModel({id: id});
		} else {
			APP.Models.ActiveDonation = new PaymentModel({id: id});
		}

		paypalGateway = this.campaignModel.get('campaign').template_setup.gateway_paypal;

		APP.Models.ActiveDonation.set('paypal_gateway', paypalGateway);

		APP.Models.ActiveDonation.url = APP.Models.ActiveDonation.paymentUrl(id);

		APP.Models.ActiveDonation.fetch()
			.done(this.onThanksDonationSuccess);
    },

	onThanksDonationSuccess: function() {
		this.changeView(new ThanksView({
			el: '#app',
			model: this.campaignModel,
			activeDonation: APP.Models.ActiveDonation,
			mode: this.mode,
			router: this,
			restrictionsCollection: APP.Collections.Restrictions,
			flags: this.flags
		}));
	},

	thanks_preview: function() {
		this.changeView(new ThanksPreviewView({
			el: '#app',
			model: this.campaignModel,
			activeDonation: APP.Models.ActiveDonation
		}));
	},

    paypal_donation: function(id) {
		APP.Models.ActiveDonation.url = APP.Models.ActiveDonation.paymentUrl(id);

		APP.Models.ActiveDonation.fetch()
            .always(this.onPaypalSuccess);
    },

    onPaypalSuccess: function() {
		var activeDonation = APP.Models.ActiveDonation;

		var mode = activeDonation.get('supplementary.private.ispersonal') === window.APP.Constants.GetCruk('FUNDRISING_PAYMENT') ? 'collection' : 'single';

		// check for success and redirect - or go to error
		if(activeDonation.get('required_action.type') === 'show_success_page'){
			location.href = '#thanks/' + mode + '/' + activeDonation.get('id');
		} else {
			location.href = '#error';
		}
    },

	error: function() {
		this.changeView(new ErrorView({
			el: '#app',
            model: this.campaignModel
		}));
	},

    showApp: function(){
      $('#app').show();
      $('#loading').hide();
    },

    showLoading: function(){
      $('#app').hide();
      $('#loading').show();
    }
});

},{"../../site/js/model/Campaign":86,"../../site/js/model/Payment":88,"../../site/js/model/RecurrentPayment":89,"./View/Error":30,"./View/Landing":31,"./View/RegularDonation":32,"./View/SingleDonation":33,"./View/Thanks":34,"./View/ThanksPreview":35,"./View/components/Footer":42,"./View/components/Header":44,"amplify":56,"backbone":63,"jquery":83,"jquery.geturlparam":58,"jquery.scrollTo":60,"underscore":84}],28:[function(require,module,exports){
'use strict';

module.exports = {
        Get: function(namespace,localname) {
			var constants = window.APP.constants;

			if (typeof constants === 'undefined' || typeof constants[namespace] === 'undefined' || typeof constants[namespace][localname] === 'undefined') {
				location.href = '#error';
				throw 'constant error: ';
			}

            return constants[namespace][localname];
        },


        GetCruk: function(localname) {
            return this.Get('CRUK',localname);
        }
};

},{}],29:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var amplify = require('amplify');
var Modal = require('../helpers/modal');
var PaymentModel = require('../../../site/js/model/Payment');

var FatHeaderView = require('./components/FatHeader');

require('jquery.geturlparam');

require('../helpers/validationMethods');
require('../../../site/js/IFrameReceiver');

module.exports = Backbone.View.extend({

	paymentAttempts: 0,

	initialize: function(options) {
		this.options = options;
		this.activeDonation = options.activeDonation;

		$('body').on('click', '.modal-bg', function(){
	      if ($('#motivation-why-hidden').is(':visible')) {
	        $('#motivation-why-hidden').hide();
	        $('.modal-bg').hide();
	        return;
	      }
	      if ($('#ccvInfo-hidden').is(':visible')) {
	        $('#ccvInfo-hidden').hide();
	        $('.modal-bg').hide();
	        return;
	      }

		});

	},

	setFormData: function(activeDonation, type, paypal) {
		var $amountInput = $('#single-donation-other-amount');
		var salutation = $('#address-salutation').val();
		var amount;

		if (paypal) {
			activeDonation.set({
				'gateway': activeDonation.get('paypal_gateway')
			}, {silent: true});
		} else {
			activeDonation.set('payment_card.type', activeDonation.get('payment_card.type'));
		}

		if (type === 'regular') {
			$amountInput = $('#regular-donation-other-amount');


			$('.payment-field', this.$el).each(function() {
				var el = $(this);

				// Omit credit card fields
				if (el.parents('#cc').length > 0) {
					return;
				}

				if ( el.hasClass('checkbox-field') && el.is(':checked') ) {
					activeDonation.set(el.data('field-name'), true);
				}

				activeDonation.set(el.data('field-name'), el.val());
			});

			activeDonation.set({
				'gateway': 'DIRECTDEBIT',
				'day': parseInt($('[name="payment-date"]:checked').val(), 10),
				'frequency': $('[name="donation-frequency"]:checked').val(),
				'bank_account': {
					'sort_code': $('#bank_account-sort_code_1').val() + '-' + $('#bank_account-sort_code_2').val() + '-' + $('#bank_account-sort_code_3').val()
				}
			}, {silent: true});
		}

		amount = parseFloat(parseFloat( $amountInput.val()).toFixed(2));

		activeDonation.set({
			'receiver': {
				'id': this.model.get('id'),
				'type': 'campaign'
			},
			'address': {
				'salutation': salutation === 'Other' ? $('#address-salutation-other').val() : salutation,
				'first_name': $('#address-first_name').val(),
				'last_name': $('#address-last_name').val(),
				'email': $('#address-email').val(),
				'phone': $('#address-phone').val(),
				'line1': $('#address-line1').val(),
				'line2': $('#address-line2').val(),
				'line3': $('#address-line3').val(),
				'town': $('#address-town').val(),
				'postal_code': $('#address-postal_code').val(),
				'country': $('#address-country').val()
			},
			'payment_currency': 'GBP',
			'payment_amount': amount,
			'supplementary': {
				'private': {
					'form_id': this.model.get('don_id'),
					'name': this.model.get('name'),
					'description': 'cancer research uk'
				}
			}
		}, {silent: true});

		if (type === 'single' || type === 'collection') {
			if( $('#diff-billing-addr').is(':checked') ) {
				$('.diff-billing-field').each(function() {
					var index = $(this).data('field-name');
					var value = $(this).val();

					activeDonation.set(index, value);
					activeDonation.set( 'billing_address.email', $('#address-email').val() );
				});
			} else {
				activeDonation.set( 'billing_address', activeDonation.get('address') );
			}

			activeDonation.set({
				'address': {
					'salutation': salutation === 'Other' ? $('#address-salutation-other').val() : salutation
				}
			});

			$('.payment-field', this.$el).each(function() {
				var el = $(this);

				// Omit debit card fields
				if (el.parents('#selector').length > 0) {
					return;
				}

				if (el.attr('id') === 'payment_card-name' && el.val() === 'THREED') {
					activeDonation.set(el.data('field-name'), '3D');
                    return;
				}

				if ( el.hasClass('checkbox-field') && el.is(':checked') ) {
					activeDonation.set(el.data('field-name'), true);
                    return;
				}

                if (el.val() !== '') {
                    activeDonation.set( el.data('field-name'), el.val() );
                }
			});

			if (!paypal && activeDonation.get('payment_card') && activeDonation.get('payment_card').type === 'maestro') {
				activeDonation.set({
					'payment_card': {
						'start_date': {
							'month': $('#payment_card-start_date-month').val(),
							'year': $('#payment_card-start_date-year').val()
						}
					}
				}, {silent: true});
			}
		}

		if (type === 'regular') {
			activeDonation.set( 'supplementary.private.ispersonal', $('.giftaid-switch:checked').val(), {silent: true});
		}

		if (this.options.flags.RESTRICTIONS) {
			if ($('#change-restriction').length) {

				var code = $('#change-restriction').data('code');

				if ( code === 'all') {
					activeDonation.unset('supplementary.private.restriction', {silent: true});
				} else {
					activeDonation.set({
						'supplementary': {
							'private': {
								'restriction': code
							}
						}
					}, {silent: true});
				}
			}
		}

		if ( $('#gift-aid-opt-in').length ) {
			activeDonation.set({
				'optin': {
					'giftaid': $('#gift-aid-opt-in').is(':checked')
				}
			}, {silent: true});
		}

		amplify.store.sessionStorage( 'paymentModel', activeDonation.toJSON() );
	},

    assertGiftaid: function(activeDonation){
        if (activeDonation.get('supplementary.private.ispersonal') === APP.constants.CRUK.FUNDRISING_PAYMENT) {
            activeDonation.set('optin.giftaid', false);
        }
    },

	savePaypalDonation: function(activeDonation, type, createPaypal, confirmPaypal) {
        this.assertGiftaid(activeDonation);
		this.setFormData(activeDonation, type, createPaypal);
		this.submitPayment(activeDonation, type, createPaypal, confirmPaypal);
	},

	submitPayment: function(payment_model, mode, createPaypal, confirmPaypal) {
		var controller = this;

		if( !$('#donation-form').valid() ) {
			var firstErrorOffset = $('label.error:visible').first().closest('.fieldset').offset().top;
			window.scrollTo(0, firstErrorOffset);
			return false;
		}

		// if in preview mode go straight to the thank you page
		if(window.PreviewMode){
			location.href = '#thanks/' + mode + '/preview';
			return false;
		}

        this.assertGiftaid(payment_model);

		payment_model.save(null, {
			success: function (model, response) {
				controller.handlePaymentResponse(model, response, mode);
			},
			error: function() {
				if (++controller.paymentAttempts >= 3) {
                    location.href = '#error';
                    return;
                }

                var gateway = controller.activeDonation.get('gateway');
				var id = controller.activeDonation.get('id');

                controller.activeDonation = new PaymentModel();

                controller.activeDonation.set('gateway', gateway);

				var url = mode + '/error';

				if (confirmPaypal) {
					url = 'confirm-payment/error/' + id;
				}

				Backbone.history.navigate(url, {trigger: true});
			}
		});
	},

	handlePaymentResponse: function(model, response, mode) {
		if (response.required_action && response.required_action.type) {

			if (model.attributes.token) {
				amplify.store.sessionStorage('PaymentCache', {
					'token': model.attributes.token
				});
			}

            var gateway = this.activeDonation.get('gateway');
            var cardType = this.activeDonation.get('payment_card.type');

			switch (response.required_action.type) {

				case 'redirect':
					var ppImg = APP.assetsPrefix + '/themes/cruk/campaign/images/paypal-logo-small.png';
					$('body').prepend('<div style="position:fixed;width:100%;height:100%;background:white; z-index:2000"><p style="margin:10px">Please wait... redirecting to <img src="'+ppImg+'" style="display:inline-block; vertical-align:middle; margin-left:5px"/></p></div>');
					location.href=response.required_action.value;
					break;

				case 'show_success_page':
					location.href = '#thanks/' + mode + '/' + response.id;
					break;

				case 'report_failed_validation':
					this.handleFailedValidation(response.required_action);
					break;

				case 'report_refused_payment':
					if (++this.paymentAttempts >= 3) {
						location.href = '#error';
						return;
					}

                    this.activeDonation = new PaymentModel();
                    this.activeDonation.set('gateway', gateway);

                    if ( gateway.indexOf('PAYPAL').length !== -1 ) {
                        this.activeDonation.set('payment_card.type', cardType);
                    }

					break;

				case 'show_failed_page':
					location.href = '#error';
                    this.activeDonation = new PaymentModel();
                    this.activeDonation.set('gateway',gateway);

                    if ( gateway.indexOf('PAYPAL').length !== -1 ) {
                        this.activeDonation.set('payment_card.type', cardType);
                    }

					break;

				case 'report_gateway_failure':
                    this.activeDonation.unset('id', {silent: true});
                    this.activeDonation.unset('external_id', {silent: true});
                    this.activeDonation.unset('created', {silent: true});
                    this.activeDonation.unset('public_id', {silent: true});
                    this.activeDonation.unset('last_updated', {silent: true});
                    this.activeDonation.unset('required_action', {silent: true});
                    this.activeDonation.unset('settlement_currency', {silent: true});
                    this.activeDonation.set('supplementary.private.modified_address', 'NV', {silent: true});
					this.activeDonation.unset('originating_host', {silent: true});
					this.activeDonation.unset('status_qualifier', {silent: true});
					break;

				case 'request_3d_security':
					this.show3DS(response.required_action);
					break;
			}

			return;
		}

		alert('Error: Unexpected required action!');
	},

	handleFailedValidation: function(required_action) {

        $('#validation-error').removeClass('hidden');

        switch (required_action.meta) {
            case 'BANK_ACCOUNT_NOT_VALID':
				$('#bank_account-account_number, .bank_account-sort_code').addClass('error');
				break;

            default:
                alert('An unexpected error has occurred. Please try again later.');
        }
    },

	show3DS: function(required_action) {

		var controller = this;

		var url = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port: '') +
				  '/api/rpc/worldpay/3ds/' +
				  required_action.value +
				  '?action=' + encodeURIComponent(required_action.data.IssuerURL) +
				  '&pa_request=' + encodeURIComponent(required_action.data.PaRequest);

		// Register handler
		window.IFrameController.RegisterHandler('3ds_complete', function() {

			controller.activeDonation.save(null, {

				success: function (model, response) {

					controller.handlePaymentResponse(model,response,'single');

				},
				error: function () {
					alert('Error: API request failed');
				}
			});
		});

		Modal.show({template:'<iframe src="'+url+'"><iframe>'});
	},

	cleanFormData: function(status, paymentModel) {
		if (this.options.urlParams && this.options.urlParams.amount) {
			this.activeDonation.set('payment_amount', parseFloat(parseFloat($(document).getUrlParam('amount')).toFixed(2)).toFixed(2), {silent: true});
		} else if (status !== 'Cancelled') {
			this.activeDonation.unset('payment_amount', {silent: true});
		}

		this.activeDonation.unset('gateway', {silent: true});

		switch(status) {
			case 'Successful':
				var paypalGateway = this.activeDonation.get('paypal_gateway');
				this.activeDonation = paymentModel;
				this.activeDonation.set('paypal_gateway', paypalGateway);
				break;

			case 'Cancelled':
				if (this.type === 'regular') {
					this.activeDonation.unset('status');
				}
				break;

			default:
				break;
		}
	},

	remove: function() {
		this.aboutYourDonationView.remove();
		this.donationMethodView.remove();
		this.yourDetailsView.remove();
		this.joinUsView.remove();

		if (this.donationAmountView) {
			this.donationAmountView.remove();
		}

		if (this.yourDonationView) {
			this.yourDonationView.remove();
		}

		if (this.donationRestrictionView) {
			this.donationRestrictionView.remove();
		}

		if (this.motivationView) {
			this.motivationView.remove();
		}

		if (this.fundraisingOptionsView) {
			this.fundraisingOptionsView.remove();
		}

		return Backbone.View.prototype.remove.call(this);
	},

	renderFatHeader: function() {

		if (this.model.get('campaign').form.form_intro_copy.length > 0) {
			this.FatHeaderView = new FatHeaderView({
				el: '#fatheader',
				model: this.model
			})
				.render();
		}

	}
});

},{"../../../site/js/IFrameReceiver":85,"../../../site/js/model/Payment":88,"../helpers/modal":52,"../helpers/validationMethods":53,"./components/FatHeader":41,"amplify":56,"backbone":63,"jquery":83,"jquery.geturlparam":58}],30:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var template = require('../../handlebars/error.handlebars');
var errorMessageTemplate = require('../../handlebars/components/error-message.handlebars');

module.exports = Backbone.View.extend({

	render: function() {
		this.$el.html(template({
			payment_error_html: errorMessageTemplate({
				payment_error_html: this.model.get('campaign').form.payment_error_html
			})
		}));

		return this;
	}
});

},{"../../handlebars/components/error-message.handlebars":11,"../../handlebars/error.handlebars":22,"backbone":63,"jquery":83}],31:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

require('../helpers/handlebarsHelpers');

var template = require('../../handlebars/landing.handlebars');
var FatHeaderView = require('./components/FatHeader');

module.exports = Backbone.View.extend({

	render: function() {
		this.$el.html( template({
			form: this.model.toJSON()
		}));

		// Populate field values
		$('.payment-field', this.$el).each(function(){
			var el = $(this);
			el.val(this.activeDonation.get(el.data('field-name')));
		});
		
		this.renderFatHeader();

		return this;
	},

	renderFatHeader: function() {

		if (this.model.get('campaign').form.form_intro_copy.length > 0) {
			this.FatHeaderView = new FatHeaderView({
				el: '#fatheader',
				model: this.model
			})
				.render();
		}

	}
});

},{"../../handlebars/landing.handlebars":23,"../helpers/handlebarsHelpers":51,"./components/FatHeader":41,"backbone":63,"jquery":83}],32:[function(require,module,exports){
'use strict';

var $ = require('jquery');
require('jquery.jsonp');

var CommonView = require('./CommonView');

var PaymentModel = require('../../../site/js/model/RecurrentPayment');

var YourDonationView = require('./components/YourDonation');
var DonationAmountView = require('./components/DonationAmount');
var AboutYourDonationView = require('./components/AboutYourDonation');
var DonationMethodView = require('./components/DonationMethod');
var YourDetailsView = require('./components/YourDetails');
var JoinUsView = require('./components/JoinUs');
var DonationRestrictionView = require('./components/DonationRestriction');
var MotivationView = require('./components/YourMotivation');

require('../helpers/handlebarsHelpers');
require('../helpers/validationMethods');

var template = require('../../handlebars/regular-donation.handlebars');

module.exports = CommonView.extend({

	type: 'regular',

	paymentAttempts: 0,

	events: {
		'click #complete-regular-donation': 'checkBankDetails'
	},

	render: function() {

		this.$el.html(template({
			form: this.model.toJSON(),
			activeDonation: this.activeDonation.toJSON(),
			urlParams: this.options.urlParams,
			flags: this.options.flags
		}));

		this.formValidation();

		this.cleanFormData( this.activeDonation.get('status'), new PaymentModel() );

    this.renderComponents();

		this.renderFatHeader();

		return this;
	},

	renderComponents: function() {
		if (this.options.urlParams.summary) {
			this.yourDonationView = new YourDonationView({
				el: '#your-donation-summary',
				model: this.model,
				activeDonation: this.activeDonation,
				type: this.type,
				urlParams: this.options.urlParams,
				collection: this.collection,
				flags: this.options.flags
			})
				.render();
		}

		if ( !this.options.urlParams.summary ) {
			this.donationAmountView = new DonationAmountView({
				el: '#donation-amount',
				model: this.model,
				activeDonation: this.activeDonation,
				type: this.type,
				summary: this.summary,
				commonView: this
			})
				.render();
		}

		if (this.model.get('campaign').form.motivation.heading_required && !this.options.urlParams.summary ) {
			this.motivationView = new MotivationView({
				el: '#motivation-container',
				model: this.model,
				activeDonation: this.activeDonation,
				urlParams: this.options.urlParams
			})
				.render();
		}

		if ( this.options.flags.RESTRICTIONS && !this.options.urlParams.summary && this.model.get('campaign').form.restriction_preferences.active ) {
			this.donationRestrictionView = new DonationRestrictionView({
				el: '#donation-restriction',
				activeDonation: this.activeDonation,
				collection: this.collection,
				model: this.model
			});
		}

		this.aboutYourDonationView = new AboutYourDonationView({
			el: '#about-your-donation',
			model: this.model,
			activeDonation: this.activeDonation,
			flags: this.options.flags,
			type: this.type
		})
			.render();

		this.donationMethodView = new DonationMethodView({
			el: '#donation-method',
			model: this.model,
			activeDonation: this.activeDonation,
			type: this.type,
			commonView: this,
			flags: this.options.flags
		})
			.render();

		this.yourDetailsView = new YourDetailsView({
			el: '#your-details',
			model: this.model,
			activeDonation: this.activeDonation,
			commonView: this,
			type: this.type,
			flags: this.options.flags
		})
			.render();

		this.joinUsView = new JoinUsView({
			el: '#join-us',
			model: this.model,
			activeDonation: this.activeDonation,
			type: this.type,
			flags: this.options.flags
		})
			.render();
	},

	checkBankDetails: function(e) {
		e.preventDefault();

		var self = this;

		if (!$('#donation-form').valid()) {
			return;
		}

		// validate bank details
		var lookupUrl = '//services.postcodeanywhere.co.uk/BankAccountValidation/Interactive/Validate/v2.00/json3.ws?' +
                    'Key=' + APP.PCAKey.Bank + '&AccountNumber=' +
                    $('#bank_account-account_number').val() +
                    '&SortCode=' + $('#bank_account-sort_code_1').val() +
                    '-' + $('#bank_account-sort_code_2').val() +
                    '-' + $('#bank_account-sort_code_3').val() +
                    '&callback=?';

        var bankDetailCB = function(data) {
			// PCA service error
			if( $.isNumeric(data.Items[0].Error) ){
				location.href = '#error';
				return;
			}
			// invalid bank details
            if (data.Items[0].IsCorrect === false) {
                $('#bank_account-account_number, #bank_account-sort_code_1, #bank_account-sort_code_2, #bank_account-sort_code_3').removeClass('valid').addClass('error');
                $('#sort-code-error label').html('Please enter a valid branch sort code and bank/building society account number');
                $('#sort-code-error, #sort-code-error label').show();
                return;
            }
            // valid bank details
            if (data.Items[0].IsCorrect === true) {
                // collect bank details for thankyou page
                window.bank_temp = {};
                window.bank_temp.bank_name = data.Items[0].Bank;
                window.bank_temp.bank_add1 = data.Items[0].ContactAddressLine1;
                window.bank_temp.bank_add2 = data.Items[0].ContactAddressLine2;
                window.bank_temp.bank_town = data.Items[0].ContactPostTown;
                window.bank_temp.bank_postcode = data.Items[0].ContactPostcode;
                window.bank_temp.account_name = $('#bank_account-account_name').val();
                window.bank_temp.bank_account = $('#bank_account-account_number').val();
                window.bank_temp.sort_code = $('#bank_account-sort_code_1').val() + '-' + $('#bank_account-sort_code_2').val() + '-' + $('#bank_account-sort_code_3').val();
                $('#bank_account-account_number, #bank_account-sort_code_1, #bank_account-sort_code_2, #bank_account-sort_code_3').removeClass('error').addClass('valid');
                $('#sort-code-error').hide();
                self.saveRecurrentDonation(self.activeDonation);
                return;
            }
            // catch all: if the data returned is in an unpected format, display the error page
            location.href = '#error';
        };

        // do cross domain request - attach fail callback to the returned promise
        var jqxhr = $.jsonp({
			url: lookupUrl
		});
        jqxhr.done(bankDetailCB);
        jqxhr.fail(function() {
			location.href = '#error';
		});
	},

	saveRecurrentDonation: function(activeDonation) {
		this.setFormData(activeDonation, this.type);
		this.submitPayment(activeDonation, this.type);
	},

	formValidation: function() {

		$('#donation-form').validate({

			onfocusout: function(element) {
				$(element).valid();
			},

			submitHandler: function() {
				$('#amount-container').find('input').blur();
				return false;
			},

			invalidHandler: function(form, validator) {
				if ( !validator.numberOfInvalids() ) {
					return;
				}

				$('html, body').animate({
					scrollTop: $(validator.errorList[0].element).offset().top - 30
				}, 1000);
			},

			errorPlacement: function(error, element) {
				if (element.attr('id') === 'regular-donation-other-amount') {
					error.insertAfter('#amount-error');
				} else if (element.attr('name') === 'donation-frequency') {
					error.insertAfter('#donation-frequency-error');
				} else if (element.attr('name') === 'payment-date') {
					error.insertAfter('#payment-date-error');
				} else if (element.attr('name') === 'bank_account-sort_code') {
					error.insertAfter('#sort-code-error');
				} else {
					error.insertAfter(element);
				}
			},

			groups: {
			  sortCodeGroup: 'bank_account-sort_code1 bank_account-sort_code2 bank_account-sort_code3'
			},

			onkeyup: false //turn off auto validate whilst typing
		});
	}
});

},{"../../../site/js/model/RecurrentPayment":89,"../../handlebars/regular-donation.handlebars":24,"../helpers/handlebarsHelpers":51,"../helpers/validationMethods":53,"./CommonView":29,"./components/AboutYourDonation":36,"./components/DonationAmount":37,"./components/DonationMethod":38,"./components/DonationRestriction":39,"./components/JoinUs":45,"./components/YourDetails":47,"./components/YourDonation":48,"./components/YourMotivation":49,"jquery":83,"jquery.jsonp":59}],33:[function(require,module,exports){
'use strict';

var $ = require('jquery');
var amplify = require('amplify');

var CommonView = require('./CommonView');

var PaymentModel = require('../../../site/js/model/Payment');

var YourDonationView = require('./components/YourDonation');
var DonationAmountView = require('./components/DonationAmount');
var AboutYourDonationView = require('./components/AboutYourDonation');
var DonationMethodView = require('./components/DonationMethod');
var YourDetailsView = require('./components/YourDetails');
var JoinUsView = require('./components/JoinUs');
var DonationRestrictionView = require('./components/DonationRestriction');
var MotivationView = require('./components/YourMotivation');
var SubmitView = require('./components/Submit');

var applePayHelper = require('../helpers/applePay');

require('../helpers/handlebarsHelpers');
require('jquery.creditcardvalidator');
require('../helpers/validationMethods');

var template = require('../../handlebars/single-donation.handlebars');

module.exports = CommonView.extend({

	type: 'single',

	events: {
		'click #complete-single-donation': 'saveOneOffDonation',
		'click #complete-applepay-donation': 'saveApplePayDonation',
		'click #complete-paypal-donation': 'savePaypalDonation'
	},

	render: function() {

		this.type = this.options.type || this.type;

		this.$el.html(template({
			form: this.model.toJSON(),
			activeDonation: this.activeDonation.toJSON(),
			urlParams: this.options.urlParams,
			flags: this.options.flags,
			type: this.type
		}));

		this.formValidation();

		this.cleanFormData( this.activeDonation.get('status'), new PaymentModel() );

		this.renderComponents();

		this.renderFatHeader();

		return this;
	},

	renderComponents: function() {

		if (this.options.urlParams.summary) {
			this.yourDonationView = new YourDonationView({
				el: '#your-donation-summary',
				model: this.model,
				activeDonation: this.activeDonation,
				type: this.type,
				urlParams: this.options.urlParams,
				collection: this.collection,
				flags: this.options.flags
			})
				.render();
		}

		if ( !this.options.urlParams.summary ) {
			this.donationAmountView = new DonationAmountView({
				el: '#donation-amount',
				model: this.model,
				activeDonation: this.activeDonation,
				type: this.type,
				summary: this.summary,
				commonView: this
			})
				.render();
		}

		if (this.model.get('campaign').form.motivation.heading_required && !this.options.urlParams.summary ) {
			this.motivationView = new MotivationView({
				el: '#motivation-container',
				model: this.model,
				activeDonation: this.activeDonation,
				urlParams: this.options.urlParams
			})
				.render();
		}

		if ( this.options.flags.RESTRICTIONS && !this.options.urlParams.summary && this.model.get('campaign').form.restriction_preferences.active ) {
			this.donationRestrictionView = new DonationRestrictionView({
				el: '#donation-restriction',
				activeDonation: this.activeDonation,
				collection: this.collection,
				model: this.model
			});
		}

		this.aboutYourDonationView = new AboutYourDonationView({
			el: '#about-your-donation',
			model: this.model,
			activeDonation: this.activeDonation,
			flags: this.options.flags,
			type: this.type,
			urlParams: this.options.urlParams
		})
			.render();

		this.donationMethodView = new DonationMethodView({
			el: '#donation-method',
			model: this.model,
			activeDonation: this.activeDonation,
			type: this.type,
			commonView: this,
			flags: this.options.flags
		})
			.render();

		this.yourDetailsView = new YourDetailsView({
			el: '#your-details',
			model: this.model,
			activeDonation: this.activeDonation,
			commonView: this,
			type: this.type,
			flags: this.options.flags
		})
			.render();

		this.joinUsView = new JoinUsView({
			el: '#join-us',
			model: this.model,
			activeDonation: this.activeDonation,
			type: this.type,
			flags: this.options.flags
		})
			.render();

		this.submitView = new SubmitView({
			el: '#submit',
			model: this.model,
			activeDonation: this.activeDonation,
			type: this.type,
			flags: this.options.flags
		})
			.render();
	},

	formValidation: function() {

		$('#donation-form').validate({

			ignore: ':hidden',

			onfocusout: function(element) {
				var id = $(element).attr('id');
					if (id === 'payment_card-expiry_date-year' || id === 'payment_card-expiry_date-month') {
						// do not validate
					} else {
						$(element).valid();
				}
			},

			submitHandler: function() {
				$('#amount-container').find('input').blur();
				return false;
			},

			errorPlacement: function(error, element) {
				if (element.attr('id') === 'single-donation-other-amount') {
					error.insertAfter('#amount-error');
				} else if (element.attr('name').match(/payment_card-expiry_date-/)) {
					error.insertAfter('#date-error');
				} else {
					error.insertAfter(element);
				}
			},

			invalidHandler: function(form, validator) {
				if ( !validator.numberOfInvalids() ) {
					return;
				}

				$('html, body').animate({
					scrollTop: $(validator.errorList[0].element).offset().top - 30
				}, 1000);
			},

			groups: {
				ccDateFields: 'payment_card-expiry_date-month payment_card-expiry_date-year',
				ccStartDateFields: 'payment_card-start_date-month payment_card-start_date-year'
			},

			onkeyup: false //turn off auto validate whilst typing
		});
	},

	saveOneOffDonation: function(e) {
		e.preventDefault();

		this.setFormData(this.activeDonation, this.type);
		this.submitPayment(this.activeDonation, this.type);
	},

	saveApplePayDonation: function(e) {
		e.preventDefault();

		if( !$('#donation-form').valid() ) {
			var firstErrorOffset = $('label.error:visible').first().closest('.fieldset').offset().top;
			window.scrollTo(0, firstErrorOffset);
			return false;
		}

		this.setFormData(this.activeDonation, this.type);
		this.assertGiftaid(this.activeDonation);
		applePayHelper.submitApplePayDonation(this.activeDonation, this.type, this);
	},

	savePaypalDonation: function(e) {
		e.preventDefault();

        this.assertGiftaid(this.activeDonation);
		this.setFormData(this.activeDonation, 'paypal', true);
		this.submitPaypalPayment(this.activeDonation, this.type);
	},

	submitPaypalPayment: function(payment_model, mode) {
		var controller = this;

		if( !$('#donation-form').valid() ) {
			var firstErrorOffset = $('label.error:visible').first().closest('.fieldset').offset().top;
			window.scrollTo(0, firstErrorOffset);
			return false;
		}

		// if in preview mode go straight to the thank you page
		if(window.PreviewMode){
			location.href = '#thanks/' + mode + '/preview';
			return false;
		}

		payment_model.save(null, {
			success: function (model, response) {
				controller.handlePaypalPaymentResponse(model,response,mode);
			},
			error: function () {
				location.href = '#error';
			}
		});
	},

	handlePaypalPaymentResponse: function(model, response, mode) {

		if (response.required_action && response.required_action.type) {

			if (model.attributes.token) {
				amplify.store.sessionStorage('PaymentCache', {
					'token': model.attributes.token
				});
			}

			switch (response.required_action.type) {
				case 'redirect':
					var ppImg = APP.assetsPrefix + '/themes/cruk/campaign/images/paypal-logo-small.png';
					$('body').prepend('<div style="position:fixed;width:100%;height:100%;background:white; z-index:2000"><p style="margin:10px">Please wait... redirecting to <img src="'+ppImg+'" style="display:inline-block; vertical-align:middle; margin-left:5px"/></p></div>');
					location.href=response.required_action.value;
					break;

				case 'show_success_page':
					location.href = '#thanks/' + mode + '/' + response.id;
					break;

				case 'report_failed_validation':
					this.handleFailedValidation(response.required_action);
					break;

				case 'report_refused_payment':
					if (++this.PaymentAttempts >= 3) {
						location.href = '#error';
						return;
					}

					break;

				case 'request_3d_security':
					this.show3DS(response.required_action);
					break;
			}

			return;
		}

		alert('Error: Unexpected required action!');
	}
});

},{"../../../site/js/model/Payment":88,"../../handlebars/single-donation.handlebars":25,"../helpers/applePay":50,"../helpers/handlebarsHelpers":51,"../helpers/validationMethods":53,"./CommonView":29,"./components/AboutYourDonation":36,"./components/DonationAmount":37,"./components/DonationMethod":38,"./components/DonationRestriction":39,"./components/JoinUs":45,"./components/Submit":46,"./components/YourDetails":47,"./components/YourDonation":48,"./components/YourMotivation":49,"amplify":56,"jquery":83,"jquery.creditcardvalidator":57}],34:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var Handlebars = require('handlebars');

require('../helpers/handlebarsHelpers');

var MotivationsCollection = require('../../../site/js/model/Motivations');

var template = require('../../handlebars/thanks.handlebars');
var restrictionTypeTemplate = require('../../handlebars/components/thanks/restrictions/restriction-type.handlebars');
var restrictionRegularTemplate = require('../../handlebars/components/thanks/restrictions/restriction-regular-copy.handlebars');

module.exports = Backbone.View.extend({

	asset_base: '/assets/themes/cruk/appeal',

	initialize: function(options) {
		_.bindAll(this, 'onRenderMotivation', 'onLoad');

		this.flags = options.flags;
		this.mode = options.mode;
		this.activeDonation = options.activeDonation;
		this.restrictionsCollection = options.restrictionsCollection;

		this.$el.on('render', this.onLoad);
	},

	onLoad: function() {
		this.equalHeights();
	},

	appeal_url: function() {
		return document.location.protocol +
			'//' + document.location.host +
			'/appeal/' +
			this.model.attributes.url_name;
	},

	render: function() {

		var motivation;

		if (typeof this.activeDonation.get('supplementary') !== undefined && typeof this.activeDonation.get('supplementary.private.motivation') !== undefined) {
			motivation = this.activeDonation.get('supplementary.private.motivation');
		}

		var transactionAmount = this.activeDonation.get('payment_amount');
		var transactionTax = this.activeDonation.get('optin.giftaid') ? transactionAmount * 1.25 : 0;
		var restriction = this.activeDonation.get('supplementary.private.restriction');

		if (transactionTax > 0) {
			transactionTax = transactionTax - transactionAmount;
		}

		var transactionTotal = transactionAmount + transactionTax * 1;
		var transactionProducts_name = this.mode + ' gift';
		var transactionProducts_cat = (this.activeDonation.get('supplementary.private.ispersonal') === window.APP.Constants.GetCruk('PERSONAL_PAYMENT') ||
			this.activeDonation.get('supplementary.private.ispersonal') === window.APP.Constants.GetCruk('PERSONAL_PAYMENT_OLD')) ? 'donation - single' : 'pay in fundraised money';

		var transactionProducts_sku;

		switch (this.activeDonation.get('gateway')) {
			case this.activeDonation.get('paypal_gateway'):
				transactionProducts_sku = 'paypal';
				break;

			case 'DIRECTDEBIT':
				transactionProducts_sku = 'direct debit | ' + this.activeDonation.get('frequency');
				transactionProducts_cat = 'donation - regular';
				break;

			default:
				transactionProducts_sku = 'credit card';
				break;
		}

		var transactionId = '';

		if (this.activeDonation.get('frequency') === undefined) {
			transactionId = 'S';
		} else {
			if (this.activeDonation.get('frequency') === 'monthly') {
				transactionId = 'M';
			} else if (this.activeDonation.get('frequency') === 'quarterly') {
				transactionId = 'Q';
			} else if (this.activeDonation.get('frequency') === 'annually') {
				transactionId = 'A';
			}
		}

		transactionId += '-' + this.activeDonation.get('supplementary.private.form_id');
		transactionId += '-' + this.activeDonation.get('source_code');
		transactionId += typeof restriction !== 'undefined' ? '-' + restriction : '-nocode';
		transactionId += '-' + this.activeDonation.get('public_id');

		transactionProducts_name += '|' + this.activeDonation.get('supplementary.private.form_id');
		transactionProducts_name += '|' + this.activeDonation.get('source_code');
		transactionProducts_name += typeof restriction !== 'undefined' ? '|' + restriction : '|nocode';
		transactionProducts_name += typeof this.activeDonation.get('supplementary.private.motivation') !== 'undefined' ? '|' + motivation : '|nomotivation';

		// Track only in non-preview modes
		dataLayer.push({
			'event': 'donation-complete',
			'donation-motivation': motivation,
			'transactionId': transactionId,
			'transactionAffiliation': 'CRUK main donation - ' + this.mode,
			'transactionTotal': transactionTotal.toFixed(2),
			'transactionTax': transactionTax.toFixed(2),
			'transactionProducts': [{
				'sku': transactionProducts_sku,
				'name': transactionProducts_name,
				'category': transactionProducts_cat,
				'price': transactionAmount,
				'quantity': 1
			}]
		});

		this.compileTokens();

		if (motivation) {
			this.motivationsCollection = new MotivationsCollection();
			this.motivationsCollection.fetch()
				.done(this.onRenderMotivation);
		} else {
			this.onRender();
		}

		return this;
	},

	onRender: function() {
		this.$el.render(template({
			form: this.model.toJSON(),
			activeDonation: this.activeDonation.toJSON(),
			asset_base: this.asset_base,
			restriction: this.restrictionCopy(),
			mode: this.mode,
			fundraisingConstant: APP.Constants.GetCruk('FUNDRISING_PAYMENT')
		}));

		return this;
	},

	onRenderMotivation: function() {
		this.$el.render(template({
			form: this.model.toJSON(),
			activeDonation: this.activeDonation.toJSON(),
			asset_base: this.asset_base,
			motivation: this.getMotivation(this.activeDonation.get('supplementary.private.motivation')),
			restriction: this.restrictionCopy(),
			mode: this.mode,
			fundraisingConstant: APP.Constants.GetCruk('FUNDRISING_PAYMENT')
		}));

		return this;
	},

	compileTokens: function() {
		var thankyouObject = 'campaign.thank_you_page' + (this.mode === 'regular' ? '_recurring' : this.activeDonation.get('supplementary.private.ispersonal') === APP.Constants.GetCruk('FUNDRISING_PAYMENT') ? '_collection' : '');
		var contentObject = this.model.get(thankyouObject);

		this.compiledObject = {};

		this.compileNested(contentObject);

		this.model.set(thankyouObject + '.compiled', this.compiledObject);
	},

	compileNested: function(contentObject) {
		_.each(contentObject, function(value, key) {
			switch (typeof value) {
				case 'boolean':
					break;
				case 'string':
					this.compiledObject[key] = this.compileTemplate(value);
					break;
				case 'object': // Arrays return 'object' type
					if (!_.isEmpty(value)) {
						this.compiledObject[key] = _.isObject(value) ? {} : [];

						_.each(value, function(childValue, childKey) {
							if (_.isObject(childValue)) {
								this.compiledObject[key][childKey] = {};

								_.each(childValue, function(nestedValue, nestedKey) {
									if (typeof nestedValue === 'boolean') {
										return;
									}

									if (_.isObject(nestedValue) && !_.isEmpty(nestedValue)) {
										this.compiledObject[key][childKey][nestedKey] = {};

										_.each(nestedValue, function(nestedValue1, nestedKey1) {
											if (typeof nestedValue1 === 'boolean') {
												return;
											}

											if (_.isObject(nestedValue1) && !_.isEmpty(nestedValue1)) {

												this.compiledObject[key][childKey][nestedKey][nestedKey1] = {};

												_.each(nestedValue1, function(nestedValue2, nestedKey2) {
													this.compiledObject[key][childKey][nestedKey][nestedKey1][nestedKey2] = this.compileTemplate(nestedValue2);
												}, this);
											} else {
												this.compiledObject[key][childKey][nestedKey][nestedKey1] = this.compileTemplate(nestedValue1);
											}


										}, this);
									} else if (_.isEmpty(nestedValue)) {
										return;
									} else if (!_.isObject(value)) {
										this.compiledObject[key][childKey][nestedKey] = this.compileTemplate(nestedValue);
									}
								}, this);
							} else {
								this.compiledObject[key][childKey] = this.compileTemplate(childValue);
							}
						}, this);
					}
					break;
			}
		}, this);
	},

	compileTemplate: function(value) {
		var template = Handlebars.compile(value);
		var url = document.location.protocol + '//' + document.location.host + '/api/callback/' + this.activeDonation.get('id');

		// eventlabel === event-copy - duplicated so we don't break any existing content
		return template({
			'callback_url': url,
			'fname': this.getFirstName(),
			'amount': this.getAmount(),
			'reference-number': this.activeDonation.get('public_id'),
			'motivation': this.getMotivationText(),
			'payment-frequency': this.getPaymentFrequency(),
			'event-title': this.activeDonation.get('supplementary.private.sourcelabel'),
			'eventlabel': this.activeDonation.get('supplementary.private.source_altlabel'),
			'event-copy': this.activeDonation.get('supplementary.private.source_altlabel')
		});
	},

	getFirstName: function() {
		var fname = '';

		if (this.activeDonation.get('address') && this.activeDonation.get('address.first_name')) {
			fname = this.activeDonation.get('address.first_name');
		}

		return fname;
	},

	getAmount: function() {
		var amount = '';

		if (this.activeDonation.get('payment_amount')) {
			amount = this.activeDonation.get('payment_amount').toFixed(2);
		}

		return amount;
	},

	getPaymentFrequency: function() {
		var frequency = this.activeDonation.get('frequency') || '';

		if (frequency === 'annually') {
			frequency = 'annual';
		}

		return frequency;
	},

	getMotivationText: function() {
		var motivator = 'None provided';
		var motivation = '';
		var inMemoryOfName;

		if (this.activeDonation.get('supplementary')) {
			if (this.activeDonation.get('supplementary.private')) {
				motivator = this.activeDonation.get('supplementary.private.motivation');
			}
		}

		if (motivator === window.APP.Constants.GetCruk('HONOUR_LOVED_ONE')) {

			inMemoryOfName = this.activeDonation.get('supplementary.private.motivation_in_honour_of');

			if (inMemoryOfName) {
				motivation = ' in memory of ' + inMemoryOfName;
			} else {
				motivation = ' in memory';
			}
		}

		return motivation;
	},

	getMotivation: function(motivation) {
		var defaultMotivation = window.APP.Constants.GetCruk('DIFFERENT_REASON');
		var motivationObject = this.motivationsCollection.where({ text: motivation });

		if (motivation === 'None provided' || motivationObject.length === 0) {
			motivation = defaultMotivation;
		}

		return this.motivationsCollection.where({
			text: motivation
		})[0].toJSON();
	},

	equalHeights: function() {
		if ($('.equalHeights').length > 0) {
			var height0 = $('.equalHeights .widget-0').outerHeight();
			var height1 = $('.equalHeights .widget-1').outerHeight();
			if (height0 > height1) {
				$('.equalHeights .widget-0, .equalHeights .widget-1, .equalHeights .widget-2, .equalHeights .widget-3').css('height', height0);
			} else {
				$('.equalHeights .widget-0, .equalHeights .widget-1, .equalHeights .widget-2, .equalHeights .widget-3').css('height', height1);
			}
		}
	},

	getRestriction: function(restriction) {
		if (restriction === 'all') {
			return false;
		}

		if (restriction) {
			var chosenRestriction = this.restrictionsCollection.where({
				code: restriction
			})[0].toJSON();

			if (chosenRestriction.type === 'research') {
				chosenRestriction.title = this.mapRestrictionText(chosenRestriction.title);
			}

			return chosenRestriction;
		}
	},

	mapRestrictionText: function(restriction) {
		var map = {
			'Understanding cancer': 'to understand cancer better',
			'Developing better treatments': 'to develop better treatments',
			'Diagnosing cancer early': 'to diagnose cancer earlier',
			'Preventing cancer': 'to prevent cancer'
		};

		return map[restriction];
	},

	restrictionCopy: function() {
		var restriction = {};
		var currentRestriction = this.activeDonation.get('supplementary.private.restriction');
		var currentRestrictionDetails;

		if (this.model.get('campaign').form.restriction_preferences.active && this.flags.RESTRICTIONS && currentRestriction) {
			currentRestrictionDetails = this.getRestriction(currentRestriction);
		} else {
			restriction.type = false;
			restriction.copy = false;
		}

		restriction.type = restrictionTypeTemplate({
			restriction: currentRestrictionDetails
		});

		if (this.mode === 'regular') {
			restriction.copy = restrictionRegularTemplate({
				restriction: currentRestrictionDetails,
				activeDonation: this.activeDonation.toJSON()
			});
		}

		return restriction;
	}
});

},{"../../../site/js/model/Motivations":87,"../../handlebars/components/thanks/restrictions/restriction-regular-copy.handlebars":17,"../../handlebars/components/thanks/restrictions/restriction-type.handlebars":18,"../../handlebars/thanks.handlebars":26,"../helpers/handlebarsHelpers":51,"backbone":63,"handlebars":80,"jquery":83,"underscore":84}],35:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var Handlebars = require('handlebars');

var template = require('../../handlebars/thanks.handlebars');

module.exports = Backbone.View.extend({

	initialize: function(options) {
		this.activeDonation = options.activeDonation;

		this.activeDonation.set('payment_amount', 100);
		this.activeDonation.set('external_id', 'PREVIEW');
		this.activeDonation.set('optin.giftaid', true);
	},

	render: function() {

		this.compileTokens();

		this.$el.html( template({
			form: this.model.toJSON(),
			activeDonation: this.activeDonation.toJSON(),
			fundraisingConstant: APP.Constants.GetCruk('FUNDRISING_PAYMENT')
		}));

		return this;
	},

	compileTokens: function() {
		var thankyouObject = 'campaign.thank_you_page' + (this.mode === 'regular' ? '_recurring' : this.activeDonation.get('supplementary.private.ispersonal') === APP.Constants.GetCruk('FUNDRISING_PAYMENT') ? '_collection' : '');
		var contentObject = this.model.get(thankyouObject);

		this.compiledObject = {};

		this.compileNested(contentObject);

		this.model.set(thankyouObject + '.compiled', this.compiledObject);
	},

	compileNested: function(contentObject) {
		_.each(contentObject, function(value, key) {
			switch (typeof value) {
				case 'boolean':
					break;
				case 'string':
					this.compiledObject[key] = this.compileTemplate(value);
					break;
				case 'object': // Arrays return 'object' type
					if ( !_.isEmpty(value) ) {
						this.compiledObject[key] = _.isObject(value) ? {} : [];

						_.each(value, function(childValue, childKey) {
							if ( _.isObject(childValue) ) {
								this.compiledObject[key][childKey] = {};

								_.each(childValue, function(nestedValue, nestedKey) {
									if (typeof nestedValue === 'boolean') {
										return;
									}

									if ( _.isObject(nestedValue) && !_.isEmpty(nestedValue) ) {
										this.compiledObject[key][childKey][nestedKey] = {};

										_.each(nestedValue, function(nestedValue1, nestedKey1) {
											if (typeof nestedValue1 === 'boolean') {
												return;
											}

											if ( _.isObject(nestedValue1) && !_.isEmpty(nestedValue1) ) {

												this.compiledObject[key][childKey][nestedKey][nestedKey1] = {};

												_.each(nestedValue1, function(nestedValue2, nestedKey2) {
													this.compiledObject[key][childKey][nestedKey][nestedKey1][nestedKey2] = this.compileTemplate(nestedValue2);
												}, this);
											} else {
												this.compiledObject[key][childKey][nestedKey][nestedKey1] = this.compileTemplate(nestedValue1);
											}


										}, this);
									} else if (_.isEmpty(nestedValue) ) {
										return;
									} else if ( !_.isObject(value) ) {
										this.compiledObject[key][childKey][nestedKey] = this.compileTemplate(nestedValue);
									}
								}, this);
							} else {
								this.compiledObject[key][childKey] = this.compileTemplate(childValue);
							}
						}, this);
					}
					break;
			}
		}, this);
	},

	compileTemplate: function(value) {
		var template = Handlebars.compile(value);
		var url = document.location.protocol + '//' + document.location.host + '/api/callback/' + this.activeDonation.get('id');

		return template({
			'callback_url': url,
			'fname': this.getFirstName(),
			'amount': this.getAmount(),
			'eventlabel': this.activeDonation.get('supplementary.private.source_altlabel'),
			'reference-number': this.activeDonation.get('public_id'),
			'motivation': this.getMotivationText(),
			'payment-frequency': this.getPaymentFrequency()
		});
	},

	getFirstName: function() {
		var fname = '';

		if ( this.activeDonation.get('address') && this.activeDonation.get('address.first_name') ) {
			fname = this.activeDonation.get('address.first_name');
		}

		return fname;
	},

	getAmount: function() {
		var amount = '';

		if( this.activeDonation.get('payment_amount') ) {
			amount = this.activeDonation.get('payment_amount').toFixed(2);
		}

		return amount;
	},

	getMotivationText: function() {
		var motivator = 'None provided';
		var motivation = '';
		var inMemoryOfName;

		if ( this.activeDonation.get('supplementary') ) {
			if( this.activeDonation.get('supplementary.private') ) {
				motivator = this.activeDonation.get('supplementary.private.motivation');
			}
		}

		if ( motivator === window.APP.Constants.GetCruk('HONOUR_LOVED_ONE') ) {

			inMemoryOfName = this.activeDonation.get('supplementary.private.motivation_in_honour_of');

			if (inMemoryOfName) {
				motivation = ' in memory of ' + inMemoryOfName;
			} else {
				motivation = ' in memory';
			}
		}

		return motivation;
	},

	getPaymentFrequency: function() {
		var frequency = this.activeDonation.get('frequency') || '';

		if (frequency === 'annually') {
			frequency = 'annual';
		}

		return frequency;
	},
});

},{"../../handlebars/thanks.handlebars":26,"backbone":63,"handlebars":80,"jquery":83,"underscore":84}],36:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var FundraisingOptionsView = require('./FundraisingOptions');

var template = require('../../../handlebars/components/about-your-donation.handlebars');

module.exports = Backbone.View.extend({

	events: {
		'click .giftaid-switch': 'onGiftAidSwitch',
		'change .checkbox-group-giftaid-optin': 'onGiftAidToggle',
		'change .personal-switch': 'onPersonalSwitch'
	},

	initialize: function(options) {
		this.activeDonation = options.activeDonation;
		this.flags = options.flags;
		this.type = options.type;
		this.urlParams = options.urlParams;

		this.listenTo(this.activeDonation, 'change:optin.giftaid', this.render);
		this.listenTo(this.activeDonation, 'change:supplementary.private.ispersonal', this.render);
		this.listenTo(this.activeDonation, 'change:payment_amount', this.render);
	},

	render: function() {
		this.$el.html(template({
			form: this.model.toJSON(),
			activeDonation: this.activeDonation.toJSON(),
			fundraisingConstant: APP.Constants.GetCruk('FUNDRISING_PAYMENT'),
			type: this.type,
			hidedonationtype: this.urlParams ? this.urlParams.hidedonationtype : false
		}));

		if (this.activeDonation.get('supplementary').private.ispersonal === APP.Constants.GetCruk('FUNDRISING_PAYMENT')) {
				if (this.model.get('campaign').collection_payment.active && this.model.get('campaign').collection_payment.codes.length > 1) {
					this.fundraisingOptionsView = new FundraisingOptionsView({
						el: '#fundraising-options',
						model: this.model,
						activeDonation: this.activeDonation,
						urlParams: this.urlParams
					})
						.render();
				}
			}

			return this;
	},

	onGiftAidSwitch: function(e) {
		this.activeDonation.set('supplementary.private.ispersonal', $(e.currentTarget).val());

		$('#donation-method').removeClass('hidden');

		return false;
	},

	onGiftAidToggle: function(e) {
		var $input = $(e.target);
		var checked = $input.is(':checked');

		this.activeDonation.set('optin.giftaid', checked);
	},

	onPersonalSwitch: function(e) {
		var $input = $(e.target);
		var type = window.APP.Constants.GetCruk('PERSONAL_PAYMENT');

		if ($input.data('type') === 'fundraising') {
			type= window.APP.Constants.GetCruk('FUNDRISING_PAYMENT');
		}

		this.activeDonation.set('supplementary.private.ispersonal', type);
	},

	remove: function() {
		if (this.fundraisingOptionsView) {
			this.fundraisingOptionsView.remove();
		}
	}
});

},{"../../../handlebars/components/about-your-donation.handlebars":1,"./FundraisingOptions":43,"backbone":63,"jquery":83}],37:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

require('../../helpers/validationMethods');

var template = require('../../../handlebars/components/donation-amount.handlebars');

module.exports = Backbone.View.extend({

	events: {
		'change .js-donation-amount': 'onDonationAmountChange',
		'change .js-donation-other-amount': 'onDonationAmountChange',
		'change .js-donation-frequency': 'onDonationFrequencyChange'
	},

	initialize: function(options) {
		this.activeDonation = options.activeDonation;
		this.type = options.type;
		this.summary = options.summary;

		this.listenTo(this.activeDonation, 'change:payment_amount', this.render);
		this.listenTo(this.activeDonation, 'change:frequency', this.render);
	},

	render: function() {
		this.$el.html(template({
			form: this.model.toJSON(),
			activeDonation: this.activeDonation.toJSON(),
			type: this.type,
			summary: this.summary,
			enteredAmount: this.enteredAmount
		}));

		this.setupValidation();

		return this;
	},

	onDonationAmountChange: function(e) {
		var $input = $(e.target);
		var value = $input.val();

		if ($input.valid()) {
				this.activeDonation.set('payment_amount', parseFloat(value));
		}
	},

	onDonationFrequencyChange: function(e) {
		var $input = $(e.target);

		this.activeDonation.set('frequency', $input.val());
	},

	setupValidation: function() {
		if ($('.js-donation-other-amount').length) {
			$('.js-donation-other-amount').rules('add', {
				required: true,
				number: true,
				min: 2,
				money: true,
				max: 100000,
				messages: {
					required: 'Please select or type in the amount you\'d like to donate',
					number: 'Please enter an amount using numbers and a decimal point only',
					posInt: 'Please enter an amount of £2 or greater',
					max: 'Please enter an amount less than £100,001',
					min: 'Please enter an amount of £2 or greater'
				}
			});
		}

		if ($('[name="donation-frequency"]').length) {
			$('[name="donation-frequency"]').rules('add', {
				required: true,
				messages: {
					required: 'Please select how often you\'d like to make your donation'
				}
			});
		}
	}
});

},{"../../../handlebars/components/donation-amount.handlebars":5,"../../helpers/validationMethods":53,"backbone":63,"jquery":83}],38:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');

var Validation = require('../../helpers/validationRules');
require('../../helpers/validationMethods');
var applePayHelper = require('../../helpers/applePay');

var template = require('../../../handlebars/components/donation-method.handlebars');
var creditCardTemplate = require('../../../handlebars/components/donation-method/credit-card-details.handlebars');
var errorMessageTemplate = require('../../../handlebars/components/error-message.handlebars');

module.exports = Backbone.View.extend({

	events: {
		'click input[name="donation-method"]': 'onDonationMethodChange',
		'change .js-payment-date-group': 'onPaymentDateChange',
		'change .js-billing-address-toggle': 'toggleAltBillingAddr',
		'click .cvv-toggle': 'toggleCVV',
		'keyup .bank_account-sort_code': 'focusNextSortCodeField',
		'change #billing_address-country': 'vaildateBillingCountryUK'
	},

	initialize: function(options) {
		this.activeDonation = options.activeDonation;
		this.type = options.type;
		this.commonView = options.commonView;
		this.flags = options.flags;

		this.listenTo(this.activeDonation, 'change:gateway', this.renderView);
	},


	paymentAmountChange: function() {
		if (this.activeDonation.get('gateway') === this.model.get('campaign.template_setup.gateway_paypal')) {
			this.renderPaypalConfirmation();
		}
	},

	renderView: function() {
		var self = this;

		var isCreditCard = false;
		if (this.activeDonation.get('gateway') !== this.activeDonation.get('paypal_gateway') && this.activeDonation.get('supplementary.private.apple_pay_used') === 'N') {
			isCreditCard = true;
		}

		if(isCreditCard){
			this.$el.find('#credit-card-details-container').html(creditCardTemplate({
				activeDonation: this.activeDonation.toJSON(),
				theme: APP.campaign.campaign.theme.theme_option
			}));

			setTimeout(function() {
				self.setSelectedCountry();
			}, 1500);

			this.setupSingleValidation();
			this.validateCreditCard();
		} else {
			this.$el.find('#credit-card-details-container').empty();
		}
	},

	setSelectedCountry: function() {
		var value = 'GB';

		if (this.activeDonation.get('billing_address.country')) {
			value = this.activeDonation.get('billing_address.country');
		}

		var option = $('#billing_address-country').find('[value="' + value + '"]');
		option.attr({
			'selected': 'selected'
		});
		$('#billing_address-country').trigger('change');
	},

	render: function() {

		if (this.activeDonation.has('gateway') && this.activeDonation.get('gateway') !== this.model.get('campaign.template_setup.gateway_paypal') && (this.type === 'single')) {
			this.renderView();
		} else {
			this.$el.html(template({
				model: this.model.toJSON(),
				activeDonation: this.activeDonation.toJSON(),
				type: this.type,
				error: location.href.indexOf('error') !== -1,
				payment_error_html: errorMessageTemplate({
					payment_error_html: this.model.get('campaign').form.payment_error_html
				}),
				fundraisingConstant: APP.Constants.GetCruk('FUNDRISING_PAYMENT'),
				theme: APP.campaign.campaign.theme.theme_option,
				showApplePay: applePayHelper.applePayAvailable() && APP.campaign.campaign.template_setup.apple_pay_active
			}));
		}

		if (this.type === 'single') {
			this.setupSingleValidation();
		} else {
			this.setupRegularValidation();
		}

		var self = this;

		if (location.href.indexOf('error') !== -1 || this.activeDonation.status === 'Cancelled') {
			setTimeout(function() {
				window.scrollTo(0, self.$el.offset().top);
			}, 500);
		}

		return this;
	},

	onDonationMethodChange: function(e) {

		var $input = $(e.target);

		if($input.data('applepay')){
			this.activeDonation.set('supplementary.private.apple_pay_used','Y');
		} else {
			this.activeDonation.set('supplementary.private.apple_pay_used','N');
		}

		this.activeDonation.unset('gateway', { silent: true });
		this.activeDonation.set('gateway', $input.data('target'));
	},

	onPaymentDateChange: function(e) {
		var $input = $(e.target);

		$input.parent().addClass('active').siblings().removeClass('active');

		this.activeDonation.set('day', parseInt($input.val(), 10));
	},

	toggleAltBillingAddr: function(e) {
		var $input = $(e.target);

		$input.parent().toggleClass('active');

		$('#billing-details').toggleClass('hidden');
	},

	toggleCVV: function(e) {
		e.preventDefault();

		$('#modal-bg-ccv').hide();

		if ($('#ccvInfo-hidden').is(':visible')) {
			$('#ccvInfo-hidden').hide();
			return;
		}
		if ($('#ccvInfo-hidden').is(':hidden')) {
			$('#ccvInfo-hidden').show();
			$('#modal-bg-ccv').show();
			return;
		}
	},

	focusNextSortCodeField: function(event) {

		if ($(event.target).val().length === 2) {
			var isNumber = !isNaN($(event.target).val());

			if ($(event.target.id) !== 'bank_account-sort_code_3' && isNumber) {
				//$(event.target).next().focus();
			} else {
				$('#donation-form').validate().element($(event.target));
			}
		}
	},

	// disable postcode required validation if country not GB
	vaildateBillingCountryUK: function(event) {
		if (event.target.value !== 'GB') {
			$('#billing_address-postal_code').rules('remove', 'required postcode minlength');
			$('label[for="post-code"] span').hide();
		} else {
			$('#billing_address-postal_code').rules('add', {
				required: true,
				minlength: 5,
				maxlength: 8,
				postcode: true,
				messages: {
					required: 'Please enter your postcode',
					minlength: 'Minimum 5 characters',
					maxlength: 'Maximum 8 characters'
				}
			});
			$('label[for="post-code"] span').show();
		}
		if ($('#billing_address-postal_code').val() !== '') {
			$('#donation-form').validate().element('#billing_address-postal_code');
		}
	},

	validateCreditCard: function() {

		var _this = this;
		var valid_card_types;
		if (APP.campaign.campaign.theme.theme_option === 'su2c') {
			valid_card_types = ['jcb', 'visa_debit', 'visa_electron', 'visa', 'mastercard', 'maestro'];
		} else {
			valid_card_types = ['amex', 'jcb', 'visa_debit', 'visa_electron', 'visa', 'mastercard', 'maestro'];
		}

		// Validate CC
		$('#payment_card-number').validateCreditCard(function(result) {

			if (result.card_type !== null) {

				_this.paymentCard = result;

				var valid = _.indexOf(valid_card_types, result.card_type.name);

				// valid cc card
				if (result.luhn_valid === true && result.length_valid === true && valid !== -1) {
					window.cardfound = true;
					window.unsupportedCard = false;
				}
				// unsupported cc card
				else if (result.luhn_valid === true && valid === -1) {
					window.cardfound = true;
					window.unsupportedCard = true;
				} else {
					window.cardfound = false;
					window.unsupportedCard = false;
				}
				if (!window.unsupportedCard) {
					$('ul#cc-types li').css('opacity', 0.2);
					$('li#' + result.card_type.name).css('opacity', 1);
				}

				_this.activeDonation.set('payment_card.type', result.card_type.name.toUpperCase());

				if (result.card_type.name === 'maestro') {
					_this.showStartDate();
				} else {
					_this.hideStartDate();
				}

			} else {
				$('ul#cc-types li').css('opacity', 1);
				_this.hideStartDate();
			}



		});
	},

	showStartDate: function() {
		$('#start-date-container').show();
	},

	hideStartDate: function() {
		$('#start-date-container').hide();
	},


	setupSingleValidation: function() {
		// **********************************************************************
		// Credit card validation (conditional, not present on paypal)
		// **********************************************************************

		if ($('input#payment_card-number').length) {
			$('input#payment_card-number').rules('add', {
				required: true,
				digits: true,
				jQValidCC: true,
				messages: {
					digits: 'Please only use numbers',
					required: 'Please enter the number on the front of your card'
				}
			});
		}

		if ($('input#payment_card-name').length) {

			// Credit card validation
			Validation.Add(
				'input#payment_card-name',
				'requiredCardName', {
					message: 'Please enter the name of the cardholder as it appears on the card',
					min: 2,
					max: 50
				}
			);
		}

		if ($('select#payment_card-start_date-month').length) {
			$('select#payment_card-start_date-month').rules('add', {
				validStartCCMonth: true,
				validStartCCDates: true
			});
		}

		if ($('select#payment_card-start_date-year').length) {
			$('select#payment_card-start_date-year').rules('add', {
				validStartCCYear: true,
				validStartCCDates: true
			});
		}

		if ($('select#payment_card-expiry_date-month').length) {
			$('select#payment_card-expiry_date-month').rules('add', {
				validCCMonth: true,
				validCCDates: true
			});
		}

		if ($('select#payment_card-expiry_date-year').length) {
			$('select#payment_card-expiry_date-year').rules('add', {
				validCCYear: true,
				validCCDates: true
			});
		}

		if ($('input#payment_card-cvc').length) {
			$('input#payment_card-cvc').rules('add', {
				required: true,
				digits: true,
				minlength: 3,
				messages: {
					required: 'Please enter a credit card security code',
					digits: 'Please only use numbers',
					minlength: 'Your security code should have 3-4 characters'
				}
			});
		}

		Validation.Add(
			'select#billing_address-salutation',
			'required', {
				message: 'Please select a title'
			}
		);

		Validation.Add(
			'#billing_address-salutation-other',
			'required', {
				message: 'If you\'ve selected other, please type in your title'
			}
		);

		Validation.Add(
			'input#billing_address-first_name',
			'requiredLimitAlpha', {
				message: 'Please enter your first name',
				min: 2,
				max: 100
			}
		);

		Validation.Add(
			'input#billing_address-last_name',
			'requiredLimitAlpha', {
				message: 'Please enter your last name',
				min: 2,
				max: 100
			}
		);

		Validation.Add(
			'input#billing_address-email',
			'requiredEmail', {
				message: 'Please enter your email address'
			}
		);

		Validation.Add(
			'input#billing_address-phone',
			'requiredPhone', {}
		);

		Validation.Add(
			'input#billing_address-line1',
			'requiredAddress', {
				message: 'Please complete home address'
			}
		);

		Validation.Add(
			'input#billing_address-line2',
			'nonRequiredAddress', {
				message: 'Please complete address line 2'
			}
		);

		Validation.Add(
			'input#billing_address-line3',
			'nonRequiredAddress', {
				message: 'Please complete address line 3'
			}
		);

		Validation.Add(
			'input#billing_address-town',
			'town', {}
		);

		Validation.Add(
			'input#billing_address-postal_code',
			'postcode', {}
		);

		Validation.Add(
			'select#billing_address-country',
			'required', {
				message: 'Please select your country'
			}
		);
	},

	setupRegularValidation: function() {
		// ***********************************
		// Direct debit validation
		// ***********************************

		$('input#bank_account-account_number').rules('add', {
			required: true,
			digits: true,
			minlength: 8,
			maxlength: 10,
			messages: {
				required: 'Please enter your Bank / building society account number',
				digits: 'Please enter a valid Bank / building society account number',
				minlength: 'Your account number should have 8-10 characters',
				maxlength: 'Your account number should have 8-10 characters'
			}
		});

		$('input#bank_account-account_name').rules('add', {
			required: true,
			alpha: true,
			minlength: 2,
			messages: {
				required: 'Please enter the account holder name',
				alpha: 'Account holder name may only contain letters and hyphens',
				minlength: 'Minimum 2 characters'
			}
		});

		$('input#bank_account-sort_code_1').rules('add', {
			required: true,
			digits: true,
			sortCode: true,
			minlength: 2,
			messages: {
				required: 'Please enter your sort code',
				digits: 'Please enter a valid sort code',
				minlength: 'Your sort code should have 6 characters'
			}
		});

		$('input#bank_account-sort_code_2').rules('add', {
			required: true,
			digits: true,
			sortCode: true,
			minlength: 2,
			messages: {
				required: 'Please enter your sort code',
				digits: 'Please enter a valid sort code',
				minlength: 'Your sort code should have 6 characters'
			}
		});

		$('input#bank_account-sort_code_3').rules('add', {
			required: true,
			digits: true,
			sortCode: true,
			minlength: 2,
			messages: {
				required: 'Please enter your sort code',
				digits: 'Please enter a valid sort code',
				minlength: 'Your sort code should have 6 characters'
			}
		});

		$('[name="payment-date"]').rules('add', {
			required: true,
			messages: {
				required: 'Please select the date you\'d like to make your donation on'
			}
		});
	}
});

},{"../../../handlebars/components/donation-method.handlebars":6,"../../../handlebars/components/donation-method/credit-card-details.handlebars":7,"../../../handlebars/components/error-message.handlebars":11,"../../helpers/applePay":50,"../../helpers/validationMethods":53,"../../helpers/validationRules":54,"backbone":63,"jquery":83,"underscore":84}],39:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var restrictionTemplate = require('../../../handlebars/components/donation-restriction.handlebars');
var DonateByTypeTemplate = require('../../../handlebars/components/donate-by-cancer-type.handlebars');
var chosenRestrictionTemplate = require('../../../handlebars/components/chosen-restriction.handlebars');
var cantFindTemplate = require('../../../handlebars/components/cant-find.handlebars');

module.exports = Backbone.View.extend({

	events: {
		'change [name="donation-restriction"]': 'onRestrictionTypeChange',
		'change #cancer-options': 'onRestrictionChange',
		'click #change-restriction': 'onRestrictionTypeChange',
		'click .close': 'onRestrictionTypeChange',
		'click .cancer-types li': 'onRestrictionChange',
		'change .checkbox-button-group.cancer': 'onRadioButtonGroupSelection'
	},

	initialize: function(options) {
		this.activeDonation = options.activeDonation;
		this.summary = options.summary;
                this.model=options.model;

		if ( this.activeDonation.get('supplementary.private.restriction') ) {
			this.onRestrictionRender();
		} else {
			this.render(restrictionTemplate);
		}

		this.listenTo(this.activeDonation, 'change:supplementary.private.restriction', function() {
			this.onRestrictionRender();
		});
	},

	onRestrictionRender: function() {
		this.chosenRestriction = this.getRestrictionDetails( this.activeDonation.get('supplementary.private.restriction') );

		if (this.chosenRestriction && this.chosenRestriction.type === 'research') {
			this.chosenRestriction.title = this.mapRestrictionText(this.chosenRestriction.title);
		}

		this.renderChosenRestriction();
	},

	getRestrictionDetails: function(code) {
		if (code !== 'all') {
			return this.collection.where({code: code})[0].toJSON();
		}
	},

	render: function(template) {
		this.$el.html( template({
			collection: this.collection.filtered(this.model.get('campaign').form.restriction_preferences, false),
			collectionAlpha: this.collection.filtered(this.model.get('campaign').form.restriction_preferences, true),
			activeDonation: this.activeDonation.toJSON(),
			summary: this.summary,
			form:this.model.toJSON()
		}) );

		return this;
	},

	renderChosenRestriction: function() {
		this.$el.html(chosenRestrictionTemplate({
			model: this.chosenRestriction
		}));

		return this;
	},

	mapRestrictionText: function(restriction) {
		var map = {
			'Understanding cancer': 'to understand cancer better',
			'Developing better treatments': 'to develop better treatments',
			'Diagnosing cancer early': 'to diagnose cancer earlier',
			'Preventing cancer': 'to prevent cancer',
			'Translational research': 'to get treatments to patients more quickly'
		};

		return map[restriction];
	},

	onRestrictionTypeChange: function() {
		this.render(DonateByTypeTemplate);
		$('#donation-restriction').removeClass('cant-find-restriction');

		return false;
	},

	onRestrictionChange: function(e) {
		var value;

		if ( $(e.currentTarget).val() ) {
			value = $(e.currentTarget).val();
		} else {
			value = $(e.currentTarget).data('value');
		}

		if (value !== 'none') {
			this.activeDonation.unset('supplementary.private.restriction', {silent: true});
			this.activeDonation.set('supplementary.private.restriction', value);
		} else {
			this.render(cantFindTemplate);
			$('#donation-restriction').addClass('cant-find-restriction');
		}
	},

	onRadioButtonGroupSelection: function() {
		this.onRestrictionTypeChange();
	}
});

},{"../../../handlebars/components/cant-find.handlebars":2,"../../../handlebars/components/chosen-restriction.handlebars":3,"../../../handlebars/components/donate-by-cancer-type.handlebars":4,"../../../handlebars/components/donation-restriction.handlebars":8,"backbone":63,"jquery":83}],40:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var template = require('../../../handlebars/components/donation-type.handlebars');

module.exports = Backbone.View.extend({

	events: {
		'click .donation-type': 'onDonationTypeChange'
	},

	initialize: function(options) {
		this.type = options.type;
	},

	render: function() {
		this.$el.html(template({
			type: this.type
		}));

		return this;
	},

	onDonationTypeChange: function(e) {
		var $currentTarget = $(e.currentTarget);

		$('.donation-type').removeClass('active');
		$currentTarget.addClass('active');

		location.href = location.search + '#' + $currentTarget.val();
	}
});
},{"../../../handlebars/components/donation-type.handlebars":10,"backbone":63,"jquery":83}],41:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

require('../../helpers/handlebarsHelpers');

var template = require('../../../handlebars/components/fatheader.handlebars');

module.exports = Backbone.View.extend({

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(template({
            model: this.model.toJSON()
        }));

        return this;
    }
});
},{"../../../handlebars/components/fatheader.handlebars":12,"../../helpers/handlebarsHelpers":51,"backbone":63,"jquery":83}],42:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

require('../../helpers/handlebarsHelpers');

var template = require('../../../handlebars/components/footer.handlebars');

module.exports = Backbone.View.extend({

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(template({
            model: this.model.toJSON()
        }));

        return this;
    }
});

},{"../../../handlebars/components/footer.handlebars":13,"../../helpers/handlebarsHelpers":51,"backbone":63,"jquery":83}],43:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var template = require('../../../handlebars/components/fundraising-options.handlebars');

module.exports = Backbone.View.extend({

	events: {
		'change #fundraising-select': 'onSelect'
	},

	initialize: function(options) {
		this.activeDonation = options.activeDonation;
		this.urlParams = options.urlParams;
	},

	render: function() {
		this.$el.html(template({
			form: this.model.toJSON(),
			activeDonation: this.activeDonation.toJSON()
		}));

		this.setupValidation();

		return this;
	},

	onSelect: function(e) {
		var $currentTarget = $(e.currentTarget);
		var eventCode = $currentTarget.find(':selected').data('event');

		if (!this.urlParams.sourceCode) {
			this.activeDonation.set('source_code', $currentTarget.val());
		}

		if (!this.urlParams.eventCode && typeof eventCode !== 'undefined') {
			this.activeDonation.set('supplementary.private.event_code', eventCode);
		}
	},

	setupValidation: function() {
		this.$el.find('#fundraising-select').rules('add', {
			required: true,
			messages: {
				required: 'Please select a fundraising activity'
			}
		});
	}
});

},{"../../../handlebars/components/fundraising-options.handlebars":14,"backbone":63,"jquery":83}],44:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

require('../../helpers/handlebarsHelpers');

var template = require('../../../handlebars/components/header.handlebars');

module.exports = Backbone.View.extend({

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(template({
			model: this.model.toJSON()
		}));

		return this;
	}
});

},{"../../../handlebars/components/header.handlebars":15,"../../helpers/handlebarsHelpers":51,"backbone":63,"jquery":83}],45:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var template = require('../../../handlebars/components/join-us.handlebars');

module.exports = Backbone.View.extend({

	events: {
		'change .js-optin-option': 'onPreferenceChange',
		'click .contact-research-more-toggle': 'onContactResearchToggle'
	},

	initialize: function(options) {
		this.activeDonation = options.activeDonation;
		this.type = options.type;
		this.flags = options.flags;
		this.view = options.view;

		this.listenTo(this.activeDonation, 'change:gateway', this.render);
		this.listenTo(this.activeDonation, 'change:supplementary.private.ispersonal', this.setShow);
	},

	setShow: function() {
		if (this.activeDonation.has('gateway') || this.type === 'regular'){
			this.showEl = true;
			this.render();
		}
	},

	render: function() {
		var showEl = false;

		if (this.activeDonation.has('gateway') || this.type === 'regular'){
			showEl = true;
		} else {
			showEl = false;
		}

		this.$el.html(template({
			form: this.model.toJSON(),
			activeDonation: this.activeDonation.toJSON(),
			type: this.type,
			show: showEl
		}));

		return this;
	},

	onPreferenceChange: function(e) {
		var $input = $(e.target);

		this.activeDonation.set($input.data('field-name'), $input.val());

		this.render();
	},

	onContactResearchToggle: function(event){
		var $el = $(event.target);
		var $infoBlock = $($el.parent().siblings('.contact-research-more')[0]);
		if($infoBlock.hasClass('show')){
			$el.removeClass('open');
			$infoBlock.removeClass('show');
		} else {
			$el.addClass('open');
			$infoBlock.addClass('show');
		}
	}
});

},{"../../../handlebars/components/join-us.handlebars":16,"backbone":63,"jquery":83}],46:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var template = require('../../../handlebars/components/donation-submit.handlebars');
var errorTemplate = require('../../../handlebars/components/error-message.handlebars');

module.exports = Backbone.View.extend({

	initialize: function(options) {
		this.activeDonation = options.activeDonation;
		this.type = options.type;
		this.flags = options.flags;

		this.listenTo(this.activeDonation, 'change:gateway', this.render);
		this.listenTo(this.activeDonation, 'change:required_action.type', this.onRequiredActionTypeChange);
		this.listenTo(this.activeDonation, 'change:supplementary.private.ispersonal', this.setShow);
	},

	onRequiredActionTypeChange: function(model, type) {
		this.paymentError = (type === 'report_refused_payment' || type === 'report_gateway_failure') ? true : false;

		this.render();
	},

	setShow: function() {
		if (this.activeDonation.has('gateway') ) {
			this.showEl = true;
			this.render();
		}
	},

	render: function() {
		var showEl = false;

		if (this.activeDonation.has('gateway')){
			showEl = true;
		} else {
			showEl = false;
		}

		this.$el.html(template({
			form: this.model.toJSON(),
			activeDonation: this.activeDonation.toJSON(),
			type: this.type,
			flags: this.flags,
			show: showEl,
			error: location.href.indexOf('error') !== -1 || this.paymentError,
			payment_error_html: errorTemplate({
			    payment_error_html: this.model.get('campaign').form.payment_error_html
			}),
			useApplePay: this.activeDonation.get('supplementary.private.apple_pay_used')
		}));

		return this;
	}
});
},{"../../../handlebars/components/donation-submit.handlebars":9,"../../../handlebars/components/error-message.handlebars":11,"backbone":63,"jquery":83}],47:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');

var Validation = require('../../helpers/validationRules');
require('../../helpers/validationMethods');

var template = require('../../../handlebars/components/your-details.handlebars');

module.exports = Backbone.View.extend({

	events: {
		'change #address-salutation': 'toggleOtherAddressSalutation',
		'change #address-country': 'vaildateCountryUK',
		'input .address-field': 'onAddressInputChange',
		'input .payment-field': 'setAddress',
		'propertychange .address-field': 'onAddressPropertyChange'
	},

	initialize: function(options) {
		this.activeDonation = options.activeDonation;
		this.type = options.type;
		this.commonView = options.commonView;
		this.flags = options.flags;

		_.bindAll(this, 'onCapturePlusReturn');

		$(window).on('addressReturned', this.onCapturePlusReturn);

		this.listenTo(this.activeDonation, 'change:gateway', this.render);
		this.listenTo(this.activeDonation, 'change:supplementary.private.ispersonal', this.setShow);
	},

	setShow: function() {
		if (typeof this.model.get('campaign').template_setup.gateway !== 'undefined' && this.activeDonation.get('gateway') === this.model.get('campaign').template_setup.gateway) {
			this.showEl = true;
			this.render();
		}
		if ( this.type === 'regular' ) {
			this.showEl = true;
			this.render();
		}
	},

	onAddressInputChange: function() {
		this.setAddress();
		this.setModifiedAddress('NV');
	},

	onAddressPropertyChange: function(e) {
		if (e.originalEvent.propertyName === 'value') {
			this.setAddress();
			this.setModifiedAddress('NV');
		}
	},

	setModifiedAddress: function(modifier) {
		this.activeDonation.set('supplementary.private.modified_address', modifier);
	},

	onCapturePlusReturn: function() {
		this.validateCapturePlus();
		this.setAddress();
		this.setModifiedAddress('VB');
	},

	setAddress: function() {
		var other = $('#address-salutation').val() === 'Other' ? true : false;

		this.activeDonation.set({
			'address': {
				'salutation': other ? $('#address-salutation-other').val() : $('#address-salutation').val(),
				'other': other,
				'first_name': $('#address-first_name').val(),
				'last_name': $('#address-last_name').val(),
				'email': $('#address-email').val(),
				'phone': $('#address-phone').val(),
				'line1': $('#address-line1').val(),
				'line2': $('#address-line2').val(),
				'line3': $('#address-line3').val(),
				'town': $('#address-town').val(),
				'postal_code': $('#address-postal_code').val(),
				'country': $('#address-country').val()
			}
		});
	},

	render: function() {
		var self = this;

		var showEl = false;

		if (this.activeDonation.has('gateway') || this.type === 'regular'){
			showEl = true;
		} else {
			showEl = false;
		}

		this.$el.html(template({
			form: this.model.toJSON(),
			activeDonation: this.activeDonation.toJSON(),
			type: this.type,
			show: showEl
		}));

		this.setupValidation();

		setTimeout(function() {
			self.setSelectedCountry();
		}, 700);

		return this;
	},

	setSelectedCountry: function() {
		var value = 'GB';

		if (this.activeDonation.get('address.country')) {
			value = this.activeDonation.get('address.country');
		}

		var option = $('#address-country').find('[value="' + value + '"]');
		option.attr({
			'selected': 'selected'
		});
		$('#address-country').trigger('change');
	},

	toggleOtherAddressSalutation: function(event) {
		if ($(event.target).val() === 'Other') {
			$('#address-salutation-other-wrapper').removeClass('hidden');
		} else {
			$('#address-salutation-other-wrapper').addClass('hidden');
		}
		this.setAddress();
	},

	// disable postcode required validation if country not GB
	vaildateCountryUK: function() {
		if ($('#address-postal_code').val() !== '') {
			$('#donation-form').validate().element('#address-postal_code');
		}
	},

	validateCapturePlus: function() {
		var $donationForm = $('#donation-form');

		if ($('#address-line1').val() !== '') {
			$donationForm.validate().element('#address-line1');
			$donationForm.validate().element('#address-line2');
			$donationForm.validate().element('#address-line3');
			$donationForm.validate().element('#address-town');
			$donationForm.validate().element('#address-postal_code');
		}
		if ($('#billing_address-line1').is(':visible')) {
			$donationForm.validate().element('#billing_address-line1');
			$donationForm.validate().element('#billing_address-line2');
			$donationForm.validate().element('#billing_address-line3');
			$donationForm.validate().element('#billing_address-town');
			$donationForm.validate().element('#billing_address-postal_code');
		}
	},

	setupValidation: function() {
		Validation.Add(
			'select#address-salutation',
			'required', {
				message: 'Please select a title'
			}
		);

		Validation.Add(
			'#address-salutation-other',
			'otherTitle', {
				message: 'If you\'ve selected other, please type in your title',
				min: 2,
				max: 50
			}
		);

		Validation.Add(
			'input#address-first_name',
			'requiredName', {
				message: 'Please enter your first name',
				min: 1,
				max: 50
			}
		);

		Validation.Add(
			'input#address-last_name',
			'requiredName', {
				message: 'Please enter your last name',
				min: 2,
				max: 50
			}
		);

		Validation.Add(
			'input#address-email',
			'requiredEmail', {
				message: 'Please enter your email address'
			}
		);

		Validation.Add(
			'input#address-line1',
			'requiredAddress', {
				message: 'Please complete home address'
			}
		);

		Validation.Add(
			'input#address-line2',
			'nonRequiredAddress', {
				message: 'Please complete address line 2'
			}
		);

		Validation.Add(
			'input#address-line3',
			'nonRequiredAddress', {
				message: 'Please complete address line 3'
			}
		);

		Validation.Add(
			'input#address-town',
			'town', {}
		);

		Validation.Add(
			'input#address-postal_code',
			'postcode', {}
		);

		Validation.Add(
			'select#address-country',
			'required', {
				message: 'Please select your country'
			}
		);

		if ($('input#address-phone').length) {
			$('input#address-phone').rules('add', {
				validphone: true,
				minlength: 7,
				maxlength: 15,
				messages: {
					validphone: 'Please only use numbers',
					minlength: 'Minimum 7 characters',
					maxlength: 'Maximum of 15 characters'
				}
			});
		}

	}
});

},{"../../../handlebars/components/your-details.handlebars":19,"../../helpers/validationMethods":53,"../../helpers/validationRules":54,"backbone":63,"jquery":83,"underscore":84}],48:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var DonationTypeView = require('./DonationType');
var DonationAmountView = require('./DonationAmount');
var YourMotivationView = require('./YourMotivation');
var DonationRestrictionView = require('./DonationRestriction');

var template = require('../../../handlebars/components/your-donation.handlebars');

module.exports = Backbone.View.extend({

	events: {
		'click .edit': 'onEdit',
		'click .save': 'onSave'
	},

	onEdit: function(e) {
		e.preventDefault();

		this.render(true);
	},

	onSave: function(e) {
		e.preventDefault();

		this.render();
	},

    initialize: function(options) {
        this.activeDonation = options.activeDonation;
        this.type = options.type;
		this.urlParams = options.urlParams;
		this.flags = options.flags;

        this.listenTo(this.activeDonation, 'change:supplementary.private.motivation_in_honour_of', this.render);
	},

    render: function(edit) {
        this.$el.html(template({
            form: this.model.toJSON(),
            activeDonation: this.activeDonation.toJSON(),
            type: this.type,
            inMemory: this.urlParams.inMemory,
			edit: edit,
			restriction: this.getRestrictionDetails( this.activeDonation.get('supplementary.private.restriction') ),
			flags: this.flags
		}));

		if (edit) {
			this.renderComponents();
		}

        return this;
    },

	getRestrictionDetails: function(code) {
		var matchingCode = this.collection.where({code: code})[0];

		if (!code) {
			return;
		}

		if (!matchingCode) {
			alert('Restriction code is invalid!');
			return false;
		}

		return matchingCode.toJSON();
	},

	renderComponents: function() {
		this.donationTypeView = new DonationTypeView({
			el: '#donation-type',
			type: this.type
		})
			.render();

		if ( this.activeDonation.get('payment_amount') ) {
			this.donationAmountView = new DonationAmountView({
				el: '#donation-amount',
				model: this.model,
				activeDonation: this.activeDonation,
				type: this.type,
				summary: this.urlParams.summary
			})
				.render();
		}

		if (this.model.get('campaign').form.motivation.heading_required && this.activeDonation.get('supplementary').private.motivation_in_honour_of) {
			this.yourMotivationView = new YourMotivationView({
				el: '#your-motivation',
				model: this.model,
				activeDonation: this.activeDonation,
				urlParams: this.urlParams
			})
				.render();
		}

		if ( this.flags.RESTRICTIONS && this.activeDonation.get('supplementary').private.restriction ) {
			this.donationRestrictionView = new DonationRestrictionView({
				el: '#donation-restriction',
				activeDonation: this.activeDonation,
				summary: this.urlParams.summary,
				collection: this.collection
			});
		}
	},

	remove: function() {
		this.donationTypeView.remove();
		this.donationAmountView.remove();
		this.donationRestrictionView.remove();

		if (this.yourMotivationView) {
			this.yourMotivationView.remove();
		}

		return Backbone.View.prototype.remove.call(this);
	}
});
},{"../../../handlebars/components/your-donation.handlebars":20,"./DonationAmount":37,"./DonationRestriction":39,"./DonationType":40,"./YourMotivation":49,"backbone":63,"jquery":83}],49:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

require('../../helpers/validationMethods');

var template = require('../../../handlebars/components/your-motivation.handlebars');

module.exports = Backbone.View.extend({

	events: {
		'click .toggle-motivation': 'motivationWhyToggle',
		'change #motivation': 'onMotivationSelect',
		'change #your-motivation-honour': 'onMotivationHonourFreeTextChange',
		'change #your-motivation-other': 'onMotivationOtherFreeTextChange'
	},

	initialize: function(options) {
		this.inMemory = options.urlParams.inMemory;
		this.activeDonation = options.activeDonation;
		this.summary = options.urlParams.summary;

		this.listenTo(this.activeDonation, 'change:supplementary.private.motivation', this.render);
	},

	render: function() {
		this.checkInMemory();

		this.$el.html(template({
			form: this.model.toJSON(),
			activeDonation: this.activeDonation.toJSON(),
			inMemory: this.inMemory,
			summary: this.summary,
			randomisedMotivations: this.randomisedMotivations()
		}));

		this.setupValidation();

		return this;
	},

	motivationWhyToggle: function(e) {
		e.preventDefault();

		$('#modal-bg-motivation').hide();

		if ($('#motivation-why-hidden').is(':visible')) {
			$('#motivation-why-hidden').hide();
			return;
		}
		if ($('#motivation-why-hidden').is(':hidden')) {
			$('#motivation-why-hidden').show();
			$('#modal-bg-motivation').show();
			return;
		}
	},

	onMotivationSelect: function(e) {
		this.activeDonation.set('supplementary.private.motivation', $(e.currentTarget).val());
	},

	checkInMemory: function() {
		if (this.inMemory) {
			this.activeDonation.set('supplementary.private.motivation', window.APP.Constants.GetCruk('HONOUR_LOVED_ONE'));
		}
	},

	onMotivationHonourFreeTextChange: function(e) {
		var text = $(e.currentTarget).val();

		this.activeDonation.set('supplementary.private.motivation_in_honour_of', text);
	},

	onMotivationOtherFreeTextChange: function(e) {
		var text = $(e.currentTarget).val();

		this.activeDonation.set('supplementary.private.motivation_other', text);
	},

	randomisedMotivations: function() {
		function shuffle(array, exclusion) {
			var currentIndex = array.length;
			var temporaryValue;
			var randomIndex;

			// While there remain elements to shuffle...
			while (0 !== currentIndex) {
				// Pick a remaining element...
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;

				if (array[currentIndex].text !== exclusion) {
					// And swap it with the current element.
					temporaryValue = array[currentIndex];
					array[currentIndex] = array[randomIndex];
					array[randomIndex] = temporaryValue;
				}
			}

			return array;
		}


		var array = this.model.get('campaign.form.motivation.items');
		return shuffle(array, window.APP.Constants.GetCruk('DIFFERENT_REASON'));
	},

	setupValidation: function() {
		if ($('#your-motivation-honour').length) {
			$('#your-motivation-honour').rules('add', {
				maxlength: 100,
				messages: {
					maxlength: 'Maximum 100 characters'
				}
			});
		}
	}
});

},{"../../../handlebars/components/your-motivation.handlebars":21,"../../helpers/validationMethods":53,"backbone":63,"jquery":83}],50:[function(require,module,exports){
'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
var PaymentModel = require('../../../site/js/model/Payment');

module.exports = {

    applePayAvailable: function() {
        if (window.ApplePaySession) {
          if (window.ApplePaySession.canMakePayments()) {
            return true;
          }
        }

        return false;
     },

     /**
     * Apple Pay Logic
     * Our entry point for Apple Pay interactions.
     * Triggered when the Apple Pay button is pressed
     */
    submitApplePayDonation: function(paymentModel, mode, controller) {

        var paymentRequest = {
            countryCode: 'GB',
            currencyCode: 'GBP',
            total: {
                label: 'CRUK Donate',
                amount: paymentModel.get('payment_amount'),
            },
            supportedNetworks: ['amex', 'jcb', 'masterCard', 'visa'],
            merchantCapabilities: ['supports3DS'],
            requiredBillingContactFields: ['postalAddress', 'name'],
            requiredShippingContactFields: ['email', 'phone']
        };

        var session = new window.ApplePaySession(2, paymentRequest);

        /**
         * Merchant Validation
         * We call our merchant session endpoint
         */
        session.onvalidatemerchant = function(event) {
            console.log(event);

            $.ajax( '/api/applepay/session/worldpay',{
                method: 'POST',
                'contentType': 'application/json',
                processData: false,
                'dataType': 'json',
                data: JSON.stringify({
                    validationURL: event.validationURL,
                    merchantCode: paymentModel.get('gateway')
                })
            })
            .done(function(response) {
                console.log(response);
                session.completeMerchantValidation(response);
            })
            .fail(function(response) {
                console.log( 'Merchant validation failed' );
                console.log(response);
            });
            
        };

        /**
         * Payment Authorization
         * Here you receive the encrypted payment data. You would then send it
         * on to your payment provider for processing, and return an appropriate
         * status in session.completePayment()
         */
        session.onpaymentauthorized = function(event) {
            console.log(event);
            var data = event.payment;

            if (data) {
                // check for payment data
                var paymentDataReturned = false;

                if (data.token && data.token.paymentData) {
                    // we need to send this as base64 encoded json
                    var token = window.btoa(JSON.stringify(data.token.paymentData));
                    paymentModel.set('payment_token',{
                        'applepay-paymentdata': token
                    });
                    paymentDataReturned = true;
                }

                // if we have an apple pay payment token we can complete the payment
                if (paymentDataReturned) {
                    // make sure there is no payment card property
                    paymentModel.unset('payment_card');
                    console.log(paymentModel);

                    paymentModel.save(null, {
                        success: function (model, response) {
                            controller.handlePaymentResponse(model, response, mode);
                            session.completePayment(window.ApplePaySession.STATUS_SUCCESS);
                        },
                        error: function() {
                            if (++controller.paymentAttempts >= 3) {
                                location.href = '#error';
                                return;
                            }
            
                            var gateway = controller.activeDonation.get('gateway');
                            controller.activeDonation = new PaymentModel();
                            controller.activeDonation.set('gateway', gateway);
            
                            session.completePayment(window.ApplePaySession.STATUS_FAILURE);

                            var url = mode + '/error';
                            Backbone.history.navigate(url, {trigger: true});
                        }
                    });
                } else {
                    // TODO handle no payment data returned from payment sheet
                    console.log('TODO handle no payment data returned from payment sheet');
                    session.completePayment(window.ApplePaySession.STATUS_FAILURE);
                }
            } else {
                // TODO handle no payment object returned from payment sheet
                console.log('TODO handle unexpected payment event: ' + JSON.stringify(event));
                session.completePayment(window.ApplePaySession.STATUS_FAILURE);

            }
        };

        session.oncancel = function(event) {
            // TODO handle payment cancelled
            console.log('TODO handle payment cancelled' + JSON.stringify(event));
        };

        // All our handlers are setup - start the Apple Pay payment
        session.begin();
    }

};
},{"../../../site/js/model/Payment":88,"backbone":63,"jquery":83}],51:[function(require,module,exports){
'use strict';

var Handlebars = require('hbsfy/runtime');
var $ = require('jquery');

// Thank you page media asset helper
Handlebars.registerHelper('thankYouAsset', function(thank_you_page) {

    var assetType = thank_you_page.asset_type;

    if (assetType === 'image') {
      var imgUrl = thank_you_page.image.url;
      var imgAlt = thank_you_page.image.description || '';
      var imgCaption = thank_you_page.image.title || '';
      var linkUrl = thank_you_page.linkurl || '';

      if (imgUrl === '' || imgUrl === undefined) {
        return '';
      } else {
        if (linkUrl !== '') {
          return '<a href="'+linkUrl+'" target="_blank"><img src="'+imgUrl+'" alt="'+imgAlt+'" title="'+imgCaption+'" /></a><p>'+imgCaption+'</p>';
        } else {
          return '<img src="'+imgUrl+'" alt="'+imgAlt+'" title="'+imgCaption+'" /><p>'+imgCaption+'</p>';
        }
      }

    }

    function getEmbeddedPlayer(url) {
        var output = '';

		if (url) {
			var youtubeUrl = url.match(/watch\?v=([a-zA-Z0-9\-_]+)/);
			var vimeoUrl = url.match(/^http:\/\/(www\.)?vimeo\.com\/(clip\:)?(\d+).*$/);
			var youtubeShareUrl = url.match(/^http:\/\/youtu\.be\/([a-zA-Z0-9\-_]+)/);

			if (youtubeUrl !== null) {
				output = '<iframe  id="thank-you-video" src="//www.youtube.com/embed/' + youtubeUrl[1] + '?rel=0" height="281" width="100%" allowfullscreen="" frameborder="0"></iframe>';
			}

			if (youtubeShareUrl !== null) {
				output = '<iframe  id="thank-you-video" src="//www.youtube.com/embed/' + youtubeShareUrl[1] + '?rel=0" height="281" width="100%" allowfullscreen="" frameborder="0"></iframe>';
			}
			if (vimeoUrl !== null) {
				output = '<iframe id="thank-you-video" src="//player.vimeo.com/video/' + vimeoUrl[3] + '" width="100%" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
			}
		}
        return output;
    }

    if (assetType === 'video') {
      var videoUrl = thank_you_page.video;
      return getEmbeddedPlayer(videoUrl);
    }
});


// form fields helper
Handlebars.registerHelper('formFields', function(form, section, activeDonation, prefill) {

    var html = '';
    var i = 0;
    var required = false;
    var field_name = '';
    var req_class = '';
    var text = '';
    var type;
	var value = '';

  switch(section) {

    case 'titles':

          var titles = form.campaign.form.personal_details.titles;

		if (activeDonation.address) {
			if (activeDonation.address.other) {
				value = 'Other';
			} else {
				value = activeDonation.address.salutation;
			}
		}

          html = '<select id="address-salutation" class="required address-salutation" name="address-salutation" data-field-name="address.salutation"><option value="">Please Select</option>';
          for (i=0;i<titles.length;i++) {
            html += '<option value="'+titles[i].text+'"' + (value === titles[i].text ? ' selected="selected"' : '') + '>'+titles[i].text+'</option>';
          }
          html += '</select>';
          return html;

    case 'other':

          var other = form.campaign.form.personal_details.other_fields;

          for (i=0; i<other.length;i++) {

            required = other[i].require;
            field_name = other[i].field_name;
            text = other[i].text;

            if (field_name === 'phone') {
                required = false;
                type = 'tel';
            } else if (field_name === 'email') {
                type = 'email';
            } else {
                type = 'text';
            }

            if (required === true) {
                req_class = ' required ';
            } else {
              req_class = '';
            }
            // don't render country field
            if (text !== 'Country') {

				if (activeDonation.address) {
					value = activeDonation.address[field_name] ? activeDonation.address[field_name] : '';
				}

				if (prefill) {
					value = activeDonation.required_action.address[field_name] ? activeDonation.required_action.address[field_name]: '';
				}

                html += '<div class="row form-details-row"><div class="col-sm-5 form-label"><label for="address-' + field_name + '">' + text + '</label></div><div class="col-sm-6"><input type="'+type+'"  class="text payment-field" id="address-'+field_name+'" name="'+field_name+'" data-field-name="address.'+field_name+'" value="' + value + '" /></div></div>';
            }
          }
          return html;

    case 'address':

          var address = form.campaign.form.personal_details.address_fields;

          for (i=0;i<address.length;i++) {
            required = address[i].require;
            field_name = address[i].field_name;
            text = address[i].text;

            if ((field_name !== 'line2' && field_name !== 'line3') && required === true) {
              req_class = ' required ';
            } else {
              req_class = '';
            }

            if (field_name !== 'country') {
              var description;

              if(field_name === 'line1') {
                description = '<p>Start typing your address or postcode<p>';
              } else {
                description = '';
              }

				if (activeDonation.address) {
					value = activeDonation.address[field_name] ? activeDonation.address[field_name] : '';
				}

				if (prefill) {
					value = activeDonation.required_action.address[field_name] ? activeDonation.required_action.address[field_name]: '';
				}

              html += '<div class="row form-details-row"><div class="col-sm-5 form-label"><label for="address-' + field_name + '">' + text + '</label></div><div class="col-sm-6">'+description+'<input type="text" class="text payment-field address-field' + '" id="address-'+field_name+'" name="address-'+field_name+'" data-field-name="address.'+field_name+'" value="' + value + '" /></div></div>';

            }

        }
          return html;

  }

});

// form fields helper
Handlebars.registerHelper('promoWidgets', function(form) {

  var promos = form.campaign.thank_you_page.promo;
  var html = '';
  var title = '';
  if (promos) {
    for (var i=0;i<promos.length;i++) {
      if (promos[i].heading_required === true) {
        title = '<h3>'+promos[i].heading+'</h3>';
      } else {
        title = '';
      }
      html += '<div class="donation-thank-you-widget widget-'+i+'">'+title+'<img class="promo-widget-image" src="'+promos[i].image.url+'" alt="'+promos[i].image.alt_text+'" title="'+promos[i].image.title+' "/>'+promos[i].intro_copy+'<p><a target="_blank" href="'+promos[i].link+'" class="chevron">'+promos[i].link_text+'</a></p></div>';
    }
  }
  return html;

});

// social follow links
Handlebars.registerHelper('socialFollowLinks', function(form) {

  var html = '';
  var social_follow = form.campaign.thank_you_page.social_follow;
  if (social_follow.copy_1) {
    html += '<p class="social-follow-link"><a target="_blank" href="'+social_follow.link_1+'" class="chevron">'+social_follow.copy_1+'</a></p>';
  }
  if (social_follow.copy_2) {
    html += '<p class="social-follow-link"><a target="_blank" href="'+social_follow.link_2+'" class="chevron">'+social_follow.copy_2+'</a></p>';
  }
  if (social_follow.copy_3) {
    html += '<p class="social-follow-link"><a target="_blank" href="'+social_follow.link_3+'" class="chevron">'+social_follow.copy_3+'</a></p>';
  }
  return html;

});

// Giftaid helper {for thankyou page}
Handlebars.registerHelper('gaValue', function(amount) {
  return (amount*1.25).toFixed(2);
});

// Giftaid value helper
Handlebars.registerHelper('giftAidValue', function(activeDonation) {
  var amount = (activeDonation.payment_amount * 1.25).toFixed(2);
  return amount;
});


// Giftaid value helper
Handlebars.registerHelper('renderGiftAidYesCopy', function(form, activeDonation) {
  var amount = activeDonation.payment_amount;
  var gaAmount = (amount * 1.25).toFixed(2);
  var copy = form.campaign.thank_you_page.gift_aid_yes_copy.replace('{{giftaid}}', '<span class="amount">'+amount+'</span>').replace('{{giftaid-adjusted}}', '<span class="ga-amount">'+gaAmount+'</span>');
  return copy;
});
Handlebars.registerHelper('renderGiftAidNoCopy', function(form, activeDonation) {
  var amount = activeDonation.payment_amount;
  var gaAmount = (amount * 1.25).toFixed(2);
  var copy = form.campaign.thank_you_page.gift_aid_no_copy.replace('{{giftaid}}', '<span class="amount">'+amount+'</span>').replace('{{giftaid-adjusted}}', '<span class="ga-amount">'+gaAmount+'</span>');
  return copy;
});


// Giftaid value helper
Handlebars.registerHelper('returnGiftAidStatement', function(checked, form, activeDonation) {
	var paymentAmount = activeDonation.payment_amount ? activeDonation.payment_amount : 20;
  var giftaid_unchecked_copy = form.campaign.form.gift_aid.gift_aid_not_ticked_copy.replace('{{giftaid}}','<span id="giftaid-donation-base-amount" class="color-not-selected">&pound;' + paymentAmount + '</span>').replace('{{giftaid-adjusted}}','<span id="giftaid-donation-gross-amount" class="color-not-selected">&pound;' + (paymentAmount * 1.25).toFixed(2) + '</span>');
  var giftaid_checked_copy = form.campaign.form.gift_aid.gift_aid_ticked_copy.replace('{{giftaid}}','<span id="giftaid-donation-base-amount" class="color-not-selected">&pound;' + paymentAmount + '</span>').replace('{{giftaid-adjusted}}','<span id="giftaid-donation-gross-amount" class="color-not-selected">&pound;' + (paymentAmount * 1.25).toFixed(2) + '</span>');

  if (checked) {
    return giftaid_checked_copy;
  } else {
    return giftaid_unchecked_copy;
  }

});

Handlebars.registerHelper('round', function(value) {

  value = parseFloat(value);

  if (Math.floor(value) === value) {
	  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});

Handlebars.registerHelper('commas', function(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});

Handlebars.registerHelper('commas_exact', function(value) {
  return value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});

Handlebars.registerHelper('commas_round', function(value) {
  return value.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});

Handlebars.registerHelper('returnBankDetails', function(value) {

  if (value === 'bank_details') {
    if (window.bank_temp !== undefined) {
      var html = '<p class="bank_details"><strong>';
      html +=  window.bank_temp.bank_name + '<br />';
      if (window.bank_temp.bank_add1.length > 0) {
        html +=  window.bank_temp.bank_add1 + '<br />';
      }
      if (window.bank_temp.bank_add2.length > 0) {
        html +=  window.bank_temp.bank_add2 + '<br />';
      }
      html +=  window.bank_temp.bank_town + '<br />';
      html +=  window.bank_temp.bank_postcode + '</strong></p>';
      return html;
    } else {
      return '';
    }
  }
  if (window.bank_temp !== undefined) {
    if (value === 'account_holder')  {
      var account_holder = window.bank_temp.account_name || '';
      return account_holder;
    }
    if (value === 'account_number')  {
      var account_number = window.bank_temp.bank_account || '';
      return account_number;
    }
    if (value === 'sort_code')  {
      var sort_code = window.bank_temp.sort_code || '';
      return sort_code;
    }
  }
});


Handlebars.registerHelper('returnDate', function() {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthName = months[mm];
    var yyyy = today.getFullYear();

    return dd + ' ' + monthName + ' '+ yyyy;

});

Handlebars.registerHelper('debug', function(optionalValue) {
    console.log('Current Context');
    console.log('====================');
    console.log(this);

    if (optionalValue) {
        console.log('Value');
        console.log('====================');
        console.log(optionalValue);
    }
});

Handlebars.registerHelper('log', function(something) {
    return console.log(something);
});

Handlebars.registerHelper('select', function(value, options) {
    var $el = $('<select />').html( options.fn(this) );

    $el.find('[value="' + value + '"]').attr({'selected':'selected'});

    return $el.html();
});

Handlebars.registerHelper('ifCond', function(v1, operator, v2, options) {
    switch (operator) {
		    case '===':
            return (v1===v2)?options.fn(this):options.inverse(this);

        case '!==':
            return (v1!==v2)?options.fn(this):options.inverse(this);

        case '&&':
            return (v1&&v2)?options.fn(this):options.inverse(this);

        case '||':
            return (v1||v2)?options.fn(this):options.inverse(this);

        case '<':
            return (v1<v2)?options.fn(this):options.inverse(this);

        case '<=':
            return (v1<=v2)?options.fn(this):options.inverse(this);

        case '>':
            return (v1>v2)?options.fn(this):options.inverse(this);

        case '>=':
            return (v1>=v2)?options.fn(this):options.inverse(this);

        default:
            return options.fn(this);
    }
});

Handlebars.registerHelper('cardExpiryYears', function() {
	var currentYear = new Date().getFullYear();
	var years = [currentYear];
	var html = '';

	for (var j = 0; j < 20; j++) {
		years.push(years[j] + 1);
	}

	for (var i = 0; i < years.length; i++) {
		html += '<option value="' + years[i] + '">' + years[i] + '</option>';
	}

	return html;
});

Handlebars.registerHelper('cardStartYears', function() {
	var currentYear = new Date().getFullYear();
	var years = [currentYear];
	var html = '';

	for (var j = 0; j < 20; j++) {
		years.push(years[j] - 1);
	}

	for (var i = 0; i < years.length; i++) {
		html += '<option value="' + years[i] + '">' + years[i] + '</option>';
	}

	return html;
});

Handlebars.registerHelper('ifMod', function(v1, v2, options) {
	return (v1 % v2 === 0) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('if_or', function(value, v1, v2, options) {
	return (value === v1 || value === v2) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('if_and_not', function(value, v1, v2, options) {
	return (value !== v1 && value !== v2) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('filter_asset', function(value) {
	return value.replace('/assets/', APP.assetsPrefix);
});

Handlebars.registerHelper('formatCurrency', function(value) {

    value = value.toFixed(2);
    return value;

});
Handlebars.registerHelper('crukConstant', function(value) {
        return window.APP.Constants.GetCruk(value);
});

Handlebars.registerHelper('if_is_fundrising', function(value, options) {
	if(window.APP.Constants.GetCruk('FUNDRISING_PAYMENT') === value || typeof value === 'undefined'){
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});

Handlebars.registerHelper('if_is_in_honour', function(value, options) {
	if (window.APP.Constants.GetCruk('HONOUR_LOVED_ONE') === value){
		return options.fn(this);
	}  {
		return options.inverse(this);
	}
});
Handlebars.registerHelper('if_is_different', function(value, options) {
	if( window.APP.Constants.GetCruk('DIFFERENT_REASON') === value || window.APP.Constants.GetCruk('DIFFERENT_REASON_OLD') === value){
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});

Handlebars.registerHelper('lowercase', function(value) {
	return value.toLowerCase();
});

Handlebars.registerHelper('twoDecimalPlaces', function(value) {
	return parseFloat(value).toFixed(2);
});

},{"hbsfy/runtime":82,"jquery":83}],52:[function(require,module,exports){
'use strict';

var $ = require('jquery');

module.exports = {

	el: '#modal-frame',

	bindEvents: function() {
		$(this.el).find('.close').on('click', $.proxy( this.remove, this) );
	},

	unbindEvents: function() {
		$(this.el).find('.close').off();
	},

	show: function(options) {
		$(this.el).append(options.template)
			.removeClass('hidden');
		this.bindEvents();
	},

	remove: function(e) {

        if (typeof e !== 'undefined') {
            e.preventDefault();
        }

		this.unbindEvents();
		$(this.el).addClass('hidden')
			.empty();
	}
};

},{"jquery":83}],53:[function(require,module,exports){
'use strict';

var $ = require('jquery');
require('jquery.validate');

// postcode
$.validator.addMethod('postcode', function(value) {


    if ( $('#address-country').val() !== 'GB' ) {

        if ( $('#billing_address-country').val() && $('#billing_address-country').val() !== 'GB' ) {

            return (/^[a-zA-Z0-9 ]*$/).test(value);
        }

        return (/^[a-zA-Z0-9 ]*$/).test(value);
    }

    return (/^([A-PR-UWYZ][A-HK-Y0-9][A-HJKSTUW0-9]?[ABEHMNPRVWXY0-9]?)*\s?[0-9][ABD-HJLN-UW-Z]{2}$/i).test(value);
}, 'Please enter a valid postcode');

// alpha/accented characters
$.validator.addMethod('alpha', function(value, element) {
    return this.optional(element) || /^[A-Za-zāåàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸēçÇŒßØøÅåÆæœÞÐŠŽº\-\ \"'"]+$/i.test(value);
}, 'Please only use letters and hyphens');

// alphanumeric/accented characters
$.validator.addMethod('alphanumeric', function(value, element) {
    return this.optional(element) || /^[0-9A-Za-zāåàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸēçÇŒßØøÅåÆæœÞÐŠŽº\-\ \"'"]+$/i.test(value);
}, 'Please only use letters, numbers and hyphens');

// phone number - up to 15 digits
$.validator.addMethod('validphone', function(value, element) {
    return this.optional(element) || /^[0-9]+$/.test(value);
}, 'Please enter a valid contact number');

// alphanumeric/accented characters, including amperstand and comma
$.validator.addMethod('validaddress', function(value, element) {
    return this.optional(element) || /^[a-zA-Z0-9\-\/\.', ]+$/i.test(value);
}, 'Please only use letters, numbers and the following: - \' / . ,');

$.validator.addMethod('validtown', function(value, element) {
    return this.optional(element) || /^[a-zA-Z\-/\.' ]*$/i.test(value);
}, 'Please only use letters and the following: - \' / .');

// no ' and '
$.validator.addMethod('noand', function(value, element) {
    return this.optional(element) || /^(?:(?!\ and | And ).)*$\r?\n?/g.test(value);
}, 'Please enter only one name');

// nospace
$.validator.addMethod('nospace', function(value, element) {
    return this.optional(element) || /^[a-zA-Z]+$/g.test(value);
}, 'Please enter your title without spaces or punctuation');

$.validator.addMethod('lettersonly', function(value, element) {
	return this.optional(element) || /^[a-zA-Z]+$/g.test(value);
}, 'Please only use letters without spaces or punctuation');

// no comma
$.validator.addMethod('nocomma', function(value, element) {
    return this.optional(element) || /^(?:(?!\,).)*$\r?\n?/g.test(value);
}, 'Please enter the different lines of your address separately');

// numebers and spaces
$.validator.addMethod('numberspace', function(value, element) {
    return this.optional(element) || /^\d[\d ]*\d$/g.test(value);
}, 'Please only use numbers and spaces');

// letters and spaces
$.validator.addMethod('alphaspace', function(value, element) {
    return this.optional(element) || /^[a-zA-Z ]+$/g.test(value);
}, 'Please only use letters and spaces');

// letters, numebers and spaces
$.validator.addMethod('letternumberspace', function(value, element) {
    return this.optional(element) || /^[A-Za-z0-9 ]+$/g.test(value);
}, 'This field may only contain letters, numbers and spaces');

// digits
$.validator.addMethod('digits', function(value, element) {
    return this.optional(element) || /^[0-9]+$/g.test(value);
}, 'Only numbers are allowed in this field');

// cash to 2 decimal places
$.validator.addMethod('money', function(value, element) {
    var isValidMoney = /^\d{0,12}(\.\d{0,2})?$/.test(value);
    return this.optional(element) || isValidMoney;
}, 'Please only use up to two decimal places');

$.validator.addMethod(
        'regex',
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        'Please only use numbers'
);

// valid email
$.validator.addMethod('validemail', function(value, element) {
    var url = '//services.postcodeanywhere.co.uk/EmailValidation/Interactive/Validate/v1.10/json3.ws?Key=' + APP.PCAKey.Email + '&Email=' + value + '&Timeout=3';
    var paValid = true;
    $.ajax({
        url: url,
        dataType: 'json',
        async: false,
        success: function(data) {
            if ( !(data.Items[0].FoundDnsRecord && data.Items[0].ValidFormat) ) {
                $('#address-email').addClass('error');
                $('#address-email label').html('Please enter a valid email address.');
                paValid = false;
                // allow email lookup to fail silently
                if ( $.isNumeric( data.Items[0].Error ) ) {
                    paValid = true;
                }
            }
        }

    });

    return this.optional(element) || paValid && /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/.test(value);
}, 'Please enter a valid email address');

var nameRegexp=/^[a-zA-Z'\s\-\.ƼƽÁáÀàȦȧÂâÄäǍǎĂăĀāÃãÅåĄąȺǠǡǺǻǞǟȀȁȂȃɐɑɒÆæǼǽǢǣƀɃƁɓƂƃƄƅĆćĊċĈĉČčÇçȻȼƇƈƆɔɕĎďĐđƋƌƊɗÐðƍȸǱǲǳǄǅǆƉɖȡÉéÈèĖėÊêËëĚěĔĕĒēĘęȨȩɆɇȄȅȆȇƐɛƎǝƏəɚɘɜɝɞȜȝƑƒǴǵĠġĜĝǦǧĞğĢģǤǥƓƔĤĥȞȟĦħƕǶıÍíÌìİÎîÏïǏǐĬĭĪīĨĩĮįƗȈȉȊȋƖĲĳȷĴĵǰɈɉɟĸǨǩĶķƘƙĹĺĿŀĽľĻļƚȽŁłƛǇǈǉȴƜŃńǸǹŇňÑñŅņƝŉƞȠǊǋǌȵŊŋÓóÒòȮȯÔôÖöǑǒŎŏŌōÕõǪǫŐőƟØøȰȱȪȫǾǿȬȭǬǭȌȍȎȏƠơƢƣŒœȢȣƤƥɊɋȹƦŔŕŘřŖŗɌɍȐȑȒȓŚśŜŝŠšŞşȘșȿƩƧƨƪßſŤťŢţƬƭƫƮȚțȾȶÞþŦŧÚúÙùÛûÜüǓǔŬŭŪūŨũŮůŲųŰűɄǗǘǛǜǙǚǕǖȔȕȖȗƯưƱƲɅŴŵƿǷÝýŶŷÿŸȲȳɎɏƳƴŹźŻżŽžƵƶȤȥɀƷǮǯƸƹƺƾɁɂ]+$/;

$.validator.addMethod('validname', function(value, element) {

    var parts = value.split(/\s/);

    if (parts.length > 2) {
        return false;
    }

    return this.optional(element) || nameRegexp.test(value);
}, 'Please only use letters and hyphens');

$.validator.addMethod('validcardname', function(value, element) {
    // exception for 3DS testing
    if(/^3D.*$/.test(value)){
        return true;
    }
    return this.optional(element) || nameRegexp.test(value);
}, 'Please only use letters and hyphens');


// Valid amount
$.validator.addMethod('posInt', function(value) {
    return Number(value) > 0;
}, 'Please enter an amount greater than zero');

// Valid start cc month
$.validator.addMethod('validStartCCMonth', function() {
    var month = $('#payment_card-start_date-month').val();
    var year = $('#payment_card-start_date-year').val();

    if(month.length === 0 && year.length === 0) {
        $.validator.messages.validStartCCMonth = 'Please enter a valid start date';
        return false;
    }

    if(month.length === 0 && year.length > 0) {
        $.validator.messages.validStartCCMonth = 'Please select a month';
        return false;
    }
    return true;
}, $.validator.messages.validStartCCMonth);

// Valid start cc year
$.validator.addMethod('validStartCCYear', function() {
    var month = $('#payment_card-start_date-month').val();
    var year = $('#payment_card-start_date-year').val();

    if(month.length === 0 && year.length === 0) {
        $.validator.messages.validStartCCYear = 'Please enter a valid start date';
        return false;
    }

    if(month.length > 0 && year.length === 0) {
        $.validator.messages.validStartCCYear = 'Please select a year';
        return false;
    }
    return true;
}, $.validator.messages.validStartCCYear);

// Valid cc month
$.validator.addMethod('validCCMonth', function() {
    var month = $('#payment_card-expiry_date-month').val();
    var year = $('#payment_card-expiry_date-year').val();

    if(month.length === 0 && year.length === 0) {
        $.validator.messages.validCCMonth = 'Please enter a valid expiry date';
        return false;
    }

    if(month.length === 0 && year.length > 0) {
        $.validator.messages.validCCMonth = 'Please select a month';
        return false;
    }
    return true;
}, $.validator.messages.validCCMonth);

// Valid cc year
$.validator.addMethod('validCCYear', function() {
    var month = $('#payment_card-expiry_date-month').val();
    var year = $('#payment_card-expiry_date-year').val();

    if(month.length === 0 && year.length === 0) {
        $.validator.messages.validCCYear = 'Please enter a valid expiry date';
        return false;
    }

    if(month.length > 0 && year.length === 0) {
        $.validator.messages.validCCYear = 'Please select a year';
        return false;
    }
    return true;
}, $.validator.messages.validCCYear);


$.validator.addMethod('validCCDates', function() {
    var month = $('#payment_card-expiry_date-month').val() * 1;
    var year = $('#payment_card-expiry_date-year').val() *1 ;
    var date = new Date();
    var currentMonth = date.getMonth() + 1;
    var currentYear = date.getFullYear();
    if (year > currentYear) {
        // date valid
    } else {
        if (month < currentMonth) {
            // expiry month in past
            $.validator.messages.validCCDates = 'Please enter a valid expiry date';
            return false;
        }
    }
    if(month.length === 0 && year.length === 0) {
        $.validator.messages.validCCDates = 'Please select the expiry date on your card';
        return false;
    }
    return true;
}, $.validator.messages.validCCDates);

$.validator.addMethod('validStartCCDates', function() {
    var month = $('#payment_card-start_date-month').val() * 1;
    var year = $('#payment_card-start_date-year').val() *1 ;
    var date = new Date();
    var currentMonth = date.getMonth() + 1;
    var currentYear = date.getFullYear();

    if (year > currentYear) {
        // date valid
    } else {
        if (year === currentYear && month > currentMonth) {
            // start month in future
            $.validator.messages.validStartCCDates = 'Please enter a valid start date';
            return false;
        }
    }
    if(month === 0 && year === 0) {
        $.validator.messages.validStartCCDates = 'Please enter a valid start date';
        return false;
    }
    return true;
}, $.validator.messages.validStartCCDates);


// Sort code
$.validator.addMethod('sortCode', function(){
    if ($('#bank_account-sort_code_1').val().length === 2) {
        return true;
    }
    if ($('#bank_account-sort_code_2').val().length === 2) {
        return true;
    }
    if ($('#bank_account-sort_code_3').val().length === 2) {
        return true;
    }
}, 'Your sort code must be 6 characters');


// valid credit card
$.validator.addMethod('jQValidCC', function() {
    if(window.cardfound && !window.unsupportedCard){
        return true;
    }
    if(window.cardfound && window.unsupportedCard){
        $.validator.messages.jQValidCC = 'Unfortunately we don\'t currently accept your card type, please choose another card type or pay via PayPal.';
        $('ul#cc-types li').css('opacity', 1);
        return false;
    }
    if(!window.cardfound){
        $.validator.messages.jQValidCC = 'Please enter a valid card number';
        return false;
    }
}, $.validator.messages.jQValidCC);

$.validator.addMethod('gbp', function(value, element) {
    return this.optional(element) || /^\$?(?!0.00)(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\.[0-9]{2})?$/.test(value);
}, 'Please specify an amount in the form X.XX');

},{"jquery":83,"jquery.validate":61}],54:[function(require,module,exports){
'use strict';

var $ = require('jquery');

module.exports = {
	required: function(args) {

		return {
			required: true,
			messages: {
				required: args.message
			}
		};
	},
	requiredLimitAlpha: function(args) {

		return {
			required: true,
			minlength: args.min,
			maxlength: args.max,
			alpha: true,
			messages: {
				required: args.message,
				minlength: 'Minimum '+args.min+' characters',
				maxlength: 'Maximum '+args.max+' characters'
			}
		};
	},

	nonRequiredLimitAlpha: function(args) {

		return {
			minlength: args.min,
			maxlength: args.max,
			alpha: true,
			messages: {
				minlength: 'Minimum '+args.min+' characters',
				maxlength: args.message
			}
		};
	},

	requiredName: function(args) {

		return {
			required: true,
			minlength: args.min,
			maxlength: args.max,
			validname: true,
			messages: {
				required: args.message,
				minlength: 'Minimum '+args.min+' characters',
				maxlength: 'Maximum '+args.max+' characters'
			}
		};
	},
	requiredCardName: function(args) {

		return {
			required: true,
			minlength: args.min,
			maxlength: args.max,
			validcardname: true,
			messages: {
				required: args.message,
				minlength: 'Minimum '+args.min+' characters',
				maxlength: 'Maximum '+args.max+' characters'
			}
		};
	},

	requiredEmail: function(args) {
		return {
			required: true,
			minlength: 2,
			maxlength: 100,
			validemail: true,
			messages: {
				required: args.message,
				maxlength: 'Maximum 100 characters'
			}
		};
	},

	requiredPhone: function() {
		return {
			required: true,
			minlength: 7,
			maxlength: 15,
			validphone: true,
			messages: {
				required: 'Please enter your contact number',
				number: 'Please only use numbers',
				minlength: 'Minimum 7 characters',
				maxlength: 'Maximum of 15 characters'
			}
		};
	},

	nonRequiredPhone: function() {
		return {
			validphone: true,
			minlength: 7,
			maxlength: 15,
			messages: {
				validphone: 'Please only use numbers',
				minlength: 'Minimum 7 characters',
				maxlength: 'Maximum of 15 characters'
			}
		};
	},

	requiredAddress: function(args) {
		return {
			required: true,
			minlength: 2,
			maxlength: 200,
			validaddress: true,
			messages: {
				required: args.message,
				minlength: 'Minimum 2 characters',
				maxlength: 'Maximum 200 characters'
			}
		};
	},

	nonRequiredAddress: function(args) {
		return {
			required: false,
			minlength: 2,
			maxlength: 100,
			validaddress: true,
			messages: {
				required: args.message,
				minlength: 'Minimum 2 characters',
				maxlength: 'Maximum 100 characters'
			}
		};
	},

	town: function() {
		return {
			required: true,
			minlength: 1,
			maxlength: 50,
			validtown: true,
			messages: {
				required: 'Please enter your town or city',
				minlength: 'Minimum 1 characters',
				maxlength: 'Maximum 50 characters'
			}
		};
	},

	postcode: function() {
		return {
		  required: true,
			minlength: 2,
			maxlength: 8,
			postcode: true,
			messages: {
				required: 'Please enter your postcode',
				minlength: 'Minimum 2 characters',
				maxlength: 'Maximum 8 characters'
			}
		};
	},

	otherTitle: function(args) {

		return {
			required: true,
			minlength: args.min,
			maxlength: args.max,
			lettersonly: true,
			messages: {
				required: args.message,
				minlength: 'Minimum ' + args.min + ' characters',
				maxlength: 'Maximum ' + args.max + ' characters'
			}
		};
	},

	Add: function(selector, rule, args, blur) {

		var el = $(selector);

		if (!el.length) {
			return;
		}

		if (typeof blur === 'function') {
			el.focusout(blur);
		}

        if (typeof args.regex !== 'undefined') {
            el.rules('add', { regex: args.regex });
        }

		el.rules('add', this[rule](args));
	}
};

},{"jquery":83}],55:[function(require,module,exports){
'use strict';

var $ = require('jquery');

var Router = require('./AppRouter');
var Constants = require('./Constants');
var CampaignModel = require('../../site/js/model/Campaign');
var RestrictionsCollection = require('../../site/js/model/Restrictions');

APP.Collections.Restrictions = new RestrictionsCollection(APP.restrictions);

APP.Constants=Constants;
APP.Router = new Router({
	campaignModel: new CampaignModel(APP.campaign),
	flags: APP.FLAGS
});

$(document).ajaxStart(function() {
	$('#spinner').removeClass('hidden');
})

.ajaxStop(function() {
    $('#spinner').addClass('hidden');
});

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});


    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/* override .html() with .render() to trigger render event after handlebars has rendered template */
(function($) {
	$.fn.render = function(htmlString) {
		var selector = this;
		selector.html(htmlString);
		selector.trigger('render');
	};
})($);

},{"../../site/js/model/Campaign":86,"../../site/js/model/Restrictions":91,"./AppRouter":27,"./Constants":28,"jquery":83}],56:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
; jQuery = global.jQuery = require("jquery");
; var __browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/*!
 * Amplify 1.1.2
 *
 * Copyright 2011 - 2013 appendTo LLC. (http://appendto.com/team)
 * Dual licensed under the MIT or GPL licenses.
 * http://appendto.com/open-source-licenses
 *
 * http://amplifyjs.com
 */
(function( global, undefined ) {

var slice = [].slice,
	subscriptions = {};

var amplify = global.amplify = {
	publish: function( topic ) {
		if ( typeof topic !== "string" ) {
			throw new Error( "You must provide a valid topic to publish." );
		}

		var args = slice.call( arguments, 1 ),
			topicSubscriptions,
			subscription,
			length,
			i = 0,
			ret;

		if ( !subscriptions[ topic ] ) {
			return true;
		}

		topicSubscriptions = subscriptions[ topic ].slice();
		for ( length = topicSubscriptions.length; i < length; i++ ) {
			subscription = topicSubscriptions[ i ];
			ret = subscription.callback.apply( subscription.context, args );
			if ( ret === false ) {
				break;
			}
		}
		return ret !== false;
	},

	subscribe: function( topic, context, callback, priority ) {
		if ( typeof topic !== "string" ) {
			throw new Error( "You must provide a valid topic to create a subscription." );
		}

		if ( arguments.length === 3 && typeof callback === "number" ) {
			priority = callback;
			callback = context;
			context = null;
		}
		if ( arguments.length === 2 ) {
			callback = context;
			context = null;
		}
		priority = priority || 10;

		var topicIndex = 0,
			topics = topic.split( /\s/ ),
			topicLength = topics.length,
			added;
		for ( ; topicIndex < topicLength; topicIndex++ ) {
			topic = topics[ topicIndex ];
			added = false;
			if ( !subscriptions[ topic ] ) {
				subscriptions[ topic ] = [];
			}

			var i = subscriptions[ topic ].length - 1,
				subscriptionInfo = {
					callback: callback,
					context: context,
					priority: priority
				};

			for ( ; i >= 0; i-- ) {
				if ( subscriptions[ topic ][ i ].priority <= priority ) {
					subscriptions[ topic ].splice( i + 1, 0, subscriptionInfo );
					added = true;
					break;
				}
			}

			if ( !added ) {
				subscriptions[ topic ].unshift( subscriptionInfo );
			}
		}

		return callback;
	},

	unsubscribe: function( topic, context, callback ) {
		if ( typeof topic !== "string" ) {
			throw new Error( "You must provide a valid topic to remove a subscription." );
		}

		if ( arguments.length === 2 ) {
			callback = context;
			context = null;
		}

		if ( !subscriptions[ topic ] ) {
			return;
		}

		var length = subscriptions[ topic ].length,
			i = 0;

		for ( ; i < length; i++ ) {
			if ( subscriptions[ topic ][ i ].callback === callback ) {
				if ( !context || subscriptions[ topic ][ i ].context === context ) {
					subscriptions[ topic ].splice( i, 1 );
					
					// Adjust counter and length for removed item
					i--;
					length--;
				}
			}
		}
	}
};

}( this ) );

(function( amplify, undefined ) {

var store = amplify.store = function( key, value, options ) {
	var type = store.type;
	if ( options && options.type && options.type in store.types ) {
		type = options.type;
	}
	return store.types[ type ]( key, value, options || {} );
};

store.types = {};
store.type = null;
store.addType = function( type, storage ) {
	if ( !store.type ) {
		store.type = type;
	}

	store.types[ type ] = storage;
	store[ type ] = function( key, value, options ) {
		options = options || {};
		options.type = type;
		return store( key, value, options );
	};
};
store.error = function() {
	return "amplify.store quota exceeded";
};

var rprefix = /^__amplify__/;
function createFromStorageInterface( storageType, storage ) {
	store.addType( storageType, function( key, value, options ) {
		var storedValue, parsed, i, remove,
			ret = value,
			now = (new Date()).getTime();

		if ( !key ) {
			ret = {};
			remove = [];
			i = 0;
			try {
				// accessing the length property works around a localStorage bug
				// in Firefox 4.0 where the keys don't update cross-page
				// we assign to key just to avoid Closure Compiler from removing
				// the access as "useless code"
				// https://bugzilla.mozilla.org/show_bug.cgi?id=662511
				key = storage.length;

				while ( key = storage.key( i++ ) ) {
					if ( rprefix.test( key ) ) {
						parsed = JSON.parse( storage.getItem( key ) );
						if ( parsed.expires && parsed.expires <= now ) {
							remove.push( key );
						} else {
							ret[ key.replace( rprefix, "" ) ] = parsed.data;
						}
					}
				}
				while ( key = remove.pop() ) {
					storage.removeItem( key );
				}
			} catch ( error ) {}
			return ret;
		}

		// protect against name collisions with direct storage
		key = "__amplify__" + key;

		if ( value === undefined ) {
			storedValue = storage.getItem( key );
			parsed = storedValue ? JSON.parse( storedValue ) : { expires: -1 };
			if ( parsed.expires && parsed.expires <= now ) {
				storage.removeItem( key );
			} else {
				return parsed.data;
			}
		} else {
			if ( value === null ) {
				storage.removeItem( key );
			} else {
				parsed = JSON.stringify({
					data: value,
					expires: options.expires ? now + options.expires : null
				});
				try {
					storage.setItem( key, parsed );
				// quota exceeded
				} catch( error ) {
					// expire old data and try again
					store[ storageType ]();
					try {
						storage.setItem( key, parsed );
					} catch( error ) {
						throw store.error();
					}
				}
			}
		}

		return ret;
	});
}

// localStorage + sessionStorage
// IE 8+, Firefox 3.5+, Safari 4+, Chrome 4+, Opera 10.5+, iPhone 2+, Android 2+
for ( var webStorageType in { localStorage: 1, sessionStorage: 1 } ) {
	// try/catch for file protocol in Firefox and Private Browsing in Safari 5
	try {
		// Safari 5 in Private Browsing mode exposes localStorage
		// but doesn't allow storing data, so we attempt to store and remove an item.
		// This will unfortunately give us a false negative if we're at the limit.
		window[ webStorageType ].setItem( "__amplify__", "x" );
		window[ webStorageType ].removeItem( "__amplify__" );
		createFromStorageInterface( webStorageType, window[ webStorageType ] );
	} catch( e ) {}
}

// globalStorage
// non-standard: Firefox 2+
// https://developer.mozilla.org/en/dom/storage#globalStorage
if ( !store.types.localStorage && window.globalStorage ) {
	// try/catch for file protocol in Firefox
	try {
		createFromStorageInterface( "globalStorage",
			window.globalStorage[ window.location.hostname ] );
		// Firefox 2.0 and 3.0 have sessionStorage and globalStorage
		// make sure we default to globalStorage
		// but don't default to globalStorage in 3.5+ which also has localStorage
		if ( store.type === "sessionStorage" ) {
			store.type = "globalStorage";
		}
	} catch( e ) {}
}

// userData
// non-standard: IE 5+
// http://msdn.microsoft.com/en-us/library/ms531424(v=vs.85).aspx
(function() {
	// IE 9 has quirks in userData that are a huge pain
	// rather than finding a way to detect these quirks
	// we just don't register userData if we have localStorage
	if ( store.types.localStorage ) {
		return;
	}

	// append to html instead of body so we can do this from the head
	var div = document.createElement( "div" ),
		attrKey = "amplify";
	div.style.display = "none";
	document.getElementsByTagName( "head" )[ 0 ].appendChild( div );

	// we can't feature detect userData support
	// so just try and see if it fails
	// surprisingly, even just adding the behavior isn't enough for a failure
	// so we need to load the data as well
	try {
		div.addBehavior( "#default#userdata" );
		div.load( attrKey );
	} catch( e ) {
		div.parentNode.removeChild( div );
		return;
	}

	store.addType( "userData", function( key, value, options ) {
		div.load( attrKey );
		var attr, parsed, prevValue, i, remove,
			ret = value,
			now = (new Date()).getTime();

		if ( !key ) {
			ret = {};
			remove = [];
			i = 0;
			while ( attr = div.XMLDocument.documentElement.attributes[ i++ ] ) {
				parsed = JSON.parse( attr.value );
				if ( parsed.expires && parsed.expires <= now ) {
					remove.push( attr.name );
				} else {
					ret[ attr.name ] = parsed.data;
				}
			}
			while ( key = remove.pop() ) {
				div.removeAttribute( key );
			}
			div.save( attrKey );
			return ret;
		}

		// convert invalid characters to dashes
		// http://www.w3.org/TR/REC-xml/#NT-Name
		// simplified to assume the starting character is valid
		// also removed colon as it is invalid in HTML attribute names
		key = key.replace( /[^\-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-" );
		// adjust invalid starting character to deal with our simplified sanitization
		key = key.replace( /^-/, "_-" );

		if ( value === undefined ) {
			attr = div.getAttribute( key );
			parsed = attr ? JSON.parse( attr ) : { expires: -1 };
			if ( parsed.expires && parsed.expires <= now ) {
				div.removeAttribute( key );
			} else {
				return parsed.data;
			}
		} else {
			if ( value === null ) {
				div.removeAttribute( key );
			} else {
				// we need to get the previous value in case we need to rollback
				prevValue = div.getAttribute( key );
				parsed = JSON.stringify({
					data: value,
					expires: (options.expires ? (now + options.expires) : null)
				});
				div.setAttribute( key, parsed );
			}
		}

		try {
			div.save( attrKey );
		// quota exceeded
		} catch ( error ) {
			// roll the value back to the previous value
			if ( prevValue === null ) {
				div.removeAttribute( key );
			} else {
				div.setAttribute( key, prevValue );
			}

			// expire old data and try again
			store.userData();
			try {
				div.setAttribute( key, parsed );
				div.save( attrKey );
			} catch ( error ) {
				// roll the value back to the previous value
				if ( prevValue === null ) {
					div.removeAttribute( key );
				} else {
					div.setAttribute( key, prevValue );
				}
				throw store.error();
			}
		}
		return ret;
	});
}() );

// in-memory storage
// fallback for all browsers to enable the API even if we can't persist data
(function() {
	var memory = {},
		timeout = {};

	function copy( obj ) {
		return obj === undefined ? undefined : JSON.parse( JSON.stringify( obj ) );
	}

	store.addType( "memory", function( key, value, options ) {
		if ( !key ) {
			return copy( memory );
		}

		if ( value === undefined ) {
			return copy( memory[ key ] );
		}

		if ( timeout[ key ] ) {
			clearTimeout( timeout[ key ] );
			delete timeout[ key ];
		}

		if ( value === null ) {
			delete memory[ key ];
			return null;
		}

		memory[ key ] = value;
		if ( options.expires ) {
			timeout[ key ] = setTimeout(function() {
				delete memory[ key ];
				delete timeout[ key ];
			}, options.expires );
		}

		return value;
	});
}() );

}( this.amplify = this.amplify || {} ) );

/*global amplify*/

(function( amplify, undefined ) {
'use strict';

function noop() {}
function isFunction( obj ) {
	return ({}).toString.call( obj ) === "[object Function]";
}

function async( fn ) {
	var isAsync = false;
	setTimeout(function() {
		isAsync = true;
	}, 1 );
	return function() {
		var that = this,
			args = arguments;
		if ( isAsync ) {
			fn.apply( that, args );
		} else {
			setTimeout(function() {
				fn.apply( that, args );
			}, 1 );
		}
	};
}

amplify.request = function( resourceId, data, callback ) {
	// default to an empty hash just so we can handle a missing resourceId
	// in one place
	var settings = resourceId || {};

	if ( typeof settings === "string" ) {
		if ( isFunction( data ) ) {
			callback = data;
			data = {};
		}
		settings = {
			resourceId: resourceId,
			data: data || {},
			success: callback
		};
	}

	var request = { abort: noop },
		resource = amplify.request.resources[ settings.resourceId ],
		success = settings.success || noop,
		error = settings.error || noop;

	settings.success = async( function( data, status ) {
		status = status || "success";
		amplify.publish( "request.success", settings, data, status );
		amplify.publish( "request.complete", settings, data, status );
		success( data, status );
	});

	settings.error = async( function( data, status ) {
		status = status || "error";
		amplify.publish( "request.error", settings, data, status );
		amplify.publish( "request.complete", settings, data, status );
		error( data, status );
	});

	if ( !resource ) {
		if ( !settings.resourceId ) {
			throw "amplify.request: no resourceId provided";
		}
		throw "amplify.request: unknown resourceId: " + settings.resourceId;
	}

	if ( !amplify.publish( "request.before", settings ) ) {
		settings.error( null, "abort" );
		return;
	}

	amplify.request.resources[ settings.resourceId ]( settings, request );
	return request;
};

amplify.request.types = {};
amplify.request.resources = {};
amplify.request.define = function( resourceId, type, settings ) {
	if ( typeof type === "string" ) {
		if ( !( type in amplify.request.types ) ) {
			throw "amplify.request.define: unknown type: " + type;
		}

		settings.resourceId = resourceId;
		amplify.request.resources[ resourceId ] =
			amplify.request.types[ type ]( settings );
	} else {
		// no pre-processor or settings for one-off types (don't invoke)
		amplify.request.resources[ resourceId ] = type;
	}
};

}( amplify ) );


(function( amplify, $, undefined ) {
'use strict';

var xhrProps = [ "status", "statusText", "responseText", "responseXML", "readyState" ],
		rurlData = /\{([^\}]+)\}/g;

amplify.request.types.ajax = function( defnSettings ) {
	defnSettings = $.extend({
		type: "GET"
	}, defnSettings );

	return function( settings, request ) {
		var xhr, handleResponse,
			url = defnSettings.url,
			abort = request.abort,
			ajaxSettings = $.extend( true, {}, defnSettings, { data: settings.data } ),
			aborted = false,
			ampXHR = {
				readyState: 0,
				setRequestHeader: function( name, value ) {
					return xhr.setRequestHeader( name, value );
				},
				getAllResponseHeaders: function() {
					return xhr.getAllResponseHeaders();
				},
				getResponseHeader: function( key ) {
					return xhr.getResponseHeader( key );
				},
				overrideMimeType: function( type ) {
					return xhr.overrideMimeType( type );
				},
				abort: function() {
					aborted = true;
					try {
						xhr.abort();
					// IE 7 throws an error when trying to abort
					} catch( e ) {}
					handleResponse( null, "abort" );
				},
				success: function( data, status ) {
					settings.success( data, status );
				},
				error: function( data, status ) {
					settings.error( data, status );
				}
			};

		handleResponse = function( data, status ) {
			$.each( xhrProps, function( i, key ) {
				try {
					ampXHR[ key ] = xhr[ key ];
				} catch( e ) {}
			});
			// Playbook returns "HTTP/1.1 200 OK"
			// TODO: something also returns "OK", what?
			if ( /OK$/.test( ampXHR.statusText ) ) {
				ampXHR.statusText = "success";
			}
			if ( data === undefined ) {
				// TODO: add support for ajax errors with data
				data = null;
			}
			if ( aborted ) {
				status = "abort";
			}
			if ( /timeout|error|abort/.test( status ) ) {
				ampXHR.error( data, status );
			} else {
				ampXHR.success( data, status );
			}
			// avoid handling a response multiple times
			// this can happen if a request is aborted
			// TODO: figure out if this breaks polling or multi-part responses
			handleResponse = $.noop;
		};

		amplify.publish( "request.ajax.preprocess",
			defnSettings, settings, ajaxSettings, ampXHR );

		$.extend( ajaxSettings, {
			isJSONP: function () {
				return (/jsonp/gi).test(this.dataType);
			},
			cacheURL: function () {
				if (!this.isJSONP()) {
					return this.url;
				}

				var callbackName = 'callback';

				// possible for the callback function name to be overridden
				if (this.hasOwnProperty('jsonp')) {
					if (this.jsonp !== false) {
						callbackName = this.jsonp;
					} else {
						if (this.hasOwnProperty('jsonpCallback')) {
							callbackName = this.jsonpCallback;
						}
					}
				}

				// search and replace callback parameter in query string with empty string
				var callbackRegex = new RegExp('&?' + callbackName + '=[^&]*&?', 'gi');
				return this.url.replace(callbackRegex, '');
			},
			success: function( data, status ) {
				handleResponse( data, status );
			},
			error: function( _xhr, status ) {
				handleResponse( null, status );
			},
			beforeSend: function( _xhr, _ajaxSettings ) {
				xhr = _xhr;
				ajaxSettings = _ajaxSettings;
				var ret = defnSettings.beforeSend ?
					defnSettings.beforeSend.call( this, ampXHR, ajaxSettings ) : true;
				return ret && amplify.publish( "request.before.ajax",
					defnSettings, settings, ajaxSettings, ampXHR );
			}
		});

		// cache all JSONP requests
		if (ajaxSettings.cache && ajaxSettings.isJSONP()) {
			$.extend(ajaxSettings, {
				cache: true
			});
		}

		$.ajax( ajaxSettings );

		request.abort = function() {
			ampXHR.abort();
			abort.call( this );
		};
	};
};



amplify.subscribe( "request.ajax.preprocess", function( defnSettings, settings, ajaxSettings ) {
	var mappedKeys = [],
		data = ajaxSettings.data;

	if ( typeof data === "string" ) {
		return;
	}

	data = $.extend( true, {}, defnSettings.data, data );

	ajaxSettings.url = ajaxSettings.url.replace( rurlData, function ( m, key ) {
		if ( key in data ) {
			mappedKeys.push( key );
			return data[ key ];
		}
	});

	// We delete the keys later so duplicates are still replaced
	$.each( mappedKeys, function ( i, key ) {
		delete data[ key ];
	});

	ajaxSettings.data = data;
});



amplify.subscribe( "request.ajax.preprocess", function( defnSettings, settings, ajaxSettings ) {
	var data = ajaxSettings.data,
		dataMap = defnSettings.dataMap;

	if ( !dataMap || typeof data === "string" ) {
		return;
	}

	if ( $.isFunction( dataMap ) ) {
		ajaxSettings.data = dataMap( data );
	} else {
		$.each( defnSettings.dataMap, function( orig, replace ) {
			if ( orig in data ) {
				data[ replace ] = data[ orig ];
				delete data[ orig ];
			}
		});
		ajaxSettings.data = data;
	}
});



var cache = amplify.request.cache = {
	_key: function( resourceId, url, data ) {
		data = url + data;
		var length = data.length,
			i = 0;

		/*jshint bitwise:false*/
		function chunk() {
			return data.charCodeAt( i++ ) << 24 |
				data.charCodeAt( i++ ) << 16 |
				data.charCodeAt( i++ ) << 8 |
				data.charCodeAt( i++ ) << 0;
		}

		var checksum = chunk();
		while ( i < length ) {
			checksum ^= chunk();
		}
		/*jshint bitwise:true*/

		return "request-" + resourceId + "-" + checksum;
	},

	_default: (function() {
		var memoryStore = {};
		return function( resource, settings, ajaxSettings, ampXHR ) {
			// data is already converted to a string by the time we get here
			var cacheKey = cache._key( settings.resourceId,
					ajaxSettings.cacheURL(), ajaxSettings.data ),
				duration = resource.cache;

			if ( cacheKey in memoryStore ) {
				ampXHR.success( memoryStore[ cacheKey ] );
				return false;
			}
			var success = ampXHR.success;
			ampXHR.success = function( data ) {
				memoryStore[ cacheKey ] = data;
				if ( typeof duration === "number" ) {
					setTimeout(function() {
						delete memoryStore[ cacheKey ];
					}, duration );
				}
				success.apply( this, arguments );
			};
		};
	}())
};

if ( amplify.store ) {
	$.each( amplify.store.types, function( type ) {
		cache[ type ] = function( resource, settings, ajaxSettings, ampXHR ) {
			var cacheKey = cache._key( settings.resourceId,
					ajaxSettings.cacheURL(), ajaxSettings.data ),
				cached = amplify.store[ type ]( cacheKey );

			if ( cached ) {
				ajaxSettings.success( cached );
				return false;
			}
			var success = ampXHR.success;
			ampXHR.success = function( data ) {
				amplify.store[ type ]( cacheKey, data, { expires: resource.cache.expires } );
				success.apply( this, arguments );
			};
		};
	});
	cache.persist = cache[ amplify.store.type ];
}

amplify.subscribe( "request.before.ajax", function( resource ) {
	var cacheType = resource.cache;
	if ( cacheType ) {
		// normalize between objects and strings/booleans/numbers
		cacheType = cacheType.type || cacheType;
		return cache[ cacheType in cache ? cacheType : "_default" ]
			.apply( this, arguments );
	}
});



amplify.request.decoders = {
	// http://labs.omniti.com/labs/jsend
	jsend: function( data, status, ampXHR, success, error ) {
		if ( data.status === "success" ) {
			success( data.data );
		} else if ( data.status === "fail" ) {
			error( data.data, "fail" );
		} else if ( data.status === "error" ) {
			delete data.status;
			error( data, "error" );
		} else {
			error( null, "error" );
		}
	}
};

amplify.subscribe( "request.before.ajax", function( resource, settings, ajaxSettings, ampXHR ) {
	var _success = ampXHR.success,
		_error = ampXHR.error,
		decoder = $.isFunction( resource.decoder ) ?
			resource.decoder :
			resource.decoder in amplify.request.decoders ?
				amplify.request.decoders[ resource.decoder ] :
				amplify.request.decoders._default;

	if ( !decoder ) {
		return;
	}

	function success( data, status ) {
		_success( data, status );
	}
	function error( data, status ) {
		_error( data, status );
	}
	ampXHR.success = function( data, status ) {
		decoder( data, status, ampXHR, success, error );
	};
	ampXHR.error = function( data, status ) {
		decoder( data, status, ampXHR, success, error );
	};
});

}( amplify, jQuery ) );

; browserify_shim__define__module__export__(typeof amplify != "undefined" ? amplify : window.amplify);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

},{"jquery":83}],57:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
; jQuery = global.jQuery = require("jquery");
; var __browserify_shim_require__=require;(function browserifyShim(module, define, require) {
// Generated by CoffeeScript 1.7.1

/*
jQuery Credit Card Validator

Copyright 2012 Pawel Decowski

This work is licensed under the Creative Commons Attribution-ShareAlike 3.0
Unported License. To view a copy of this license, visit:

http://creativecommons.org/licenses/by-sa/3.0/

or send a letter to:

Creative Commons, 444 Castro Street, Suite 900,
Mountain View, California, 94041, USA.
 */

(function() {
  var $,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  $ = jQuery;

  $.fn.validateCreditCard = function(callback, options) {
    var card, card_type, card_types, get_card_type, is_valid_length, is_valid_luhn, normalize, validate, validate_number, _i, _len, _ref;
    card_types = [
      {
        name: 'amex',
        pattern: /^3[47]/,
        valid_length: [15]
      }, {
        name: 'diners_club_carte_blanche',
        pattern: /^30[0-5]/,
        valid_length: [14]
      }, {
        name: 'diners_club_international',
        pattern: /^36/,
        valid_length: [14]
      }, {
        name: 'jcb',
        pattern: /^35(2[89]|[3-8][0-9])/,
        valid_length: [16]
      }, {
        name: 'laser',
        pattern: /^(6304|670[69]|6771)/,
        valid_length: [16, 17, 18, 19]
      }, {
        name: 'visa_debit',
        pattern: /^(400626|40770(4|5)|408367|40845(6|7)|40940[0-2]|41228(5|6)|41378(7|8)|418760|41917[6-9]|419772|419776|420672|42159[2-4]|421682|423769|431072|43253(4|5)|441078|444001|44400(5|6)|444008|4462(0[0-9]|1[0,1])|4462(1[3-9]|[2-4][0-9]|5[0-4])|4462(5[7-9]|6[0-9]|7[0-2])|4462(7[4-9]|8[0-3])|446286|44629(1|2)|446294|450875|45397(8|9)|454313|45443[2-5]|454742|45670(5|6)|4567(2[5-9]|3[0-9]|4[0-5])|458046|459305|4593(3(8|9)|40)|459362|459364|459389|459470|459(499|50[01])|45951[12]|459545|45956[6-8]|459[67][0-9]{2}|459847|460024|4658[3-7][0-9]|4659(0[1-9]|[1-4][0-9]|50)|472628|472684|474503|474551|4751[1-5][0-9]|475183|4757[1-5][0-9]|4762[2-6][0-9]|4763[4-8][0-9]|480240|484412|484415|484417|484427|489342|4909[67][0-9]|49218[12]|492912|495065|495067|49509[0-4]|498824|499806|49984[4-6]|499902)/,
        valid_length: [16, 17, 18, 19]
      }, {
        name: 'visa_electron',
        pattern: /^(4026|417500|4508|4844|491(3|7)|400115|40083[7-9]|41292[1-3]|417935|41974[0-1]|41977[3-5]|424519|42496[23]|437860|444000|459472|4844(0[6-9]|1[01])|48441[34]|4844(1[89]|2[0-6])|4844(2[89]|[34][0-9]|5[0-5])|4917[3-5][0-9])/,
        valid_length: [16, 17, 18, 19]
      }, {
        name: 'visa',
        pattern: /^4/,
        valid_length: [16, 17, 18, 19]
      }, {
        name: 'mastercard',
        pattern: /^5[1-5]/,
        valid_length: [16]
      }, {
        name: 'maestro',
        pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
        valid_length: [12, 13, 14, 15, 16, 17, 18, 19]
      }, {
        name: 'discover',
        pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
        valid_length: [16]
      }
    ];
    if (options == null) {
      options = {};
    }
    if (options.accept == null) {
      options.accept = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = card_types.length; _i < _len; _i++) {
          card = card_types[_i];
          _results.push(card.name);
        }
        return _results;
      })();
    }
    _ref = options.accept;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      card_type = _ref[_i];
      if (__indexOf.call((function() {
        var _j, _len1, _results;
        _results = [];
        for (_j = 0, _len1 = card_types.length; _j < _len1; _j++) {
          card = card_types[_j];
          _results.push(card.name);
        }
        return _results;
      })(), card_type) < 0) {
        throw "Credit card type '" + card_type + "' is not supported";
      }
    }
    get_card_type = function(number) {
      var _j, _len1, _ref1;
      _ref1 = (function() {
        var _k, _len1, _ref1, _results;
        _results = [];
        for (_k = 0, _len1 = card_types.length; _k < _len1; _k++) {
          card = card_types[_k];
          if (_ref1 = card.name, __indexOf.call(options.accept, _ref1) >= 0) {
            _results.push(card);
          }
        }
        return _results;
      })();
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        card_type = _ref1[_j];
        if (number.match(card_type.pattern)) {
          return card_type;
        }
      }
      return null;
    };
    is_valid_luhn = function(number) {
      var digit, n, sum, _j, _len1, _ref1;
      sum = 0;
      _ref1 = number.split('').reverse();
      for (n = _j = 0, _len1 = _ref1.length; _j < _len1; n = ++_j) {
        digit = _ref1[n];
        digit = +digit;
        if (n % 2) {
          digit *= 2;
          if (digit < 10) {
            sum += digit;
          } else {
            sum += digit - 9;
          }
        } else {
          sum += digit;
        }
      }
      return sum % 10 === 0;
    };
    is_valid_length = function(number, card_type) {
      var _ref1;
      return _ref1 = number.length, __indexOf.call(card_type.valid_length, _ref1) >= 0;
    };
    validate_number = function(number) {
      var length_valid, luhn_valid;
      card_type = get_card_type(number);
      luhn_valid = false;
      length_valid = false;
      if (card_type != null) {
        luhn_valid = is_valid_luhn(number);
        length_valid = is_valid_length(number, card_type);
      }
      return callback({
        card_type: card_type,
        luhn_valid: luhn_valid,
        length_valid: length_valid
      });
    };
    validate = function() {
      var number;
      number = normalize($(this).val());
      return validate_number(number);
    };
    normalize = function(number) {
      return number.replace(/[ -]/g, '');
    };
    this.bind('input', function() {
      $(this).unbind('keyup');
      return validate.call(this);
    });
    this.bind('keyup', function() {
      return validate.call(this);
    });
    if (this.length !== 0) {
      validate.call(this);
    }
    return this;
  };


  /*
  jQuery Credit Card Validator

  Copyright 2012 Pawel Decowski

  This work is licensed under the Creative Commons Attribution-ShareAlike 3.0
  Unported License. To view a copy of this license, visit:

  http://creativecommons.org/licenses/by-sa/3.0/

  or send a letter to:

  Creative Commons, 444 Castro Street, Suite 900,
  Mountain View, California, 94041, USA.
   */

  $ = jQuery;

  $.fn.validateCreditCard = function(callback, options) {
    var card, card_type, card_types, get_card_type, is_valid_length, is_valid_luhn, normalize, validate, validate_number, _i, _len, _ref;
    card_types = [
      {
        name: 'amex',
        pattern: /^3[47]/,
        valid_length: [15]
      }, {
        name: 'diners_club_carte_blanche',
        pattern: /^30[0-5]/,
        valid_length: [14]
      }, {
        name: 'diners_club_international',
        pattern: /^36/,
        valid_length: [14]
      }, {
        name: 'jcb',
        pattern: /^35(2[89]|[3-8][0-9])/,
        valid_length: [16]
      }, {
        name: 'laser',
        pattern: /^(6304|670[69]|6771)/,
        valid_length: [16, 17, 18, 19]
      }, {
        name: 'visa_electron',
        pattern: /^(4026|417500|4508|4844|491(3|7))/,
        valid_length: [16]
      }, {
        name: 'visa',
        pattern: /^4/,
        valid_length: [16]
      }, {
        name: 'mastercard',
        pattern: /^5[1-5]/,
        valid_length: [16]
      }, {
        name: 'maestro',
        pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
        valid_length: [12, 13, 14, 15, 16, 17, 18, 19]
      }, {
        name: 'discover',
        pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
        valid_length: [16]
      }
    ];
    if (options == null) {
      options = {};
    }
    if (options.accept == null) {
      options.accept = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = card_types.length; _i < _len; _i++) {
          card = card_types[_i];
          _results.push(card.name);
        }
        return _results;
      })();
    }
    _ref = options.accept;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      card_type = _ref[_i];
      if (__indexOf.call((function() {
        var _j, _len1, _results;
        _results = [];
        for (_j = 0, _len1 = card_types.length; _j < _len1; _j++) {
          card = card_types[_j];
          _results.push(card.name);
        }
        return _results;
      })(), card_type) < 0) {
        throw "Credit card type '" + card_type + "' is not supported";
      }
    }
    get_card_type = function(number) {
      var _j, _len1, _ref1;
      _ref1 = (function() {
        var _k, _len1, _ref1, _results;
        _results = [];
        for (_k = 0, _len1 = card_types.length; _k < _len1; _k++) {
          card = card_types[_k];
          if (_ref1 = card.name, __indexOf.call(options.accept, _ref1) >= 0) {
            _results.push(card);
          }
        }
        return _results;
      })();
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        card_type = _ref1[_j];
        if (number.match(card_type.pattern)) {
          return card_type;
        }
      }
      return null;
    };
    is_valid_luhn = function(number) {
      var digit, n, sum, _j, _len1, _ref1;
      sum = 0;
      _ref1 = number.split('').reverse();
      for (n = _j = 0, _len1 = _ref1.length; _j < _len1; n = ++_j) {
        digit = _ref1[n];
        digit = +digit;
        if (n % 2) {
          digit *= 2;
          if (digit < 10) {
            sum += digit;
          } else {
            sum += digit - 9;
          }
        } else {
          sum += digit;
        }
      }
      return sum % 10 === 0;
    };
    is_valid_length = function(number, card_type) {
      var _ref1;
      return _ref1 = number.length, __indexOf.call(card_type.valid_length, _ref1) >= 0;
    };
    validate_number = function(number) {
      var length_valid, luhn_valid;
      card_type = get_card_type(number);
      luhn_valid = false;
      length_valid = false;
      if (card_type != null) {
        luhn_valid = is_valid_luhn(number);
        length_valid = is_valid_length(number, card_type);
      }
      return callback({
        card_type: card_type,
        luhn_valid: luhn_valid,
        length_valid: length_valid
      });
    };
    validate = function() {
      var number;
      number = normalize($(this).val());
      return validate_number(number);
    };
    normalize = function(number) {
      return number.replace(/[ -]/g, '');
    };
    this.bind('input', function() {
      $(this).unbind('keyup');
      return validate.call(this);
    });
    this.bind('keyup', function() {
      return validate.call(this);
    });
    if (this.length !== 0) {
      validate.call(this);
    }
    return this;
  };

}).call(this);
}).call(global, module, undefined, undefined);

},{"jquery":83}],58:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
; jQuery = global.jQuery = require("jquery");
; var __browserify_shim_require__=require;(function browserifyShim(module, define, require) {
/* Copyright (c) 2006-2007 Mathias Bank (http://www.mathias-bank.de)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version 2.3
 *
 * Thanks to
 * Hinnerk Ruemenapf - http://hinnerk.ruemenapf.de/ for bug reporting and fixing.
 * Tom Leonard for some improvements
 * John Griffiths for cleaning the code with JSLint, fixing missing semicolons and == to ===
 * sokai for wrapping around the anonymous function to avoid conflicts and cleaning the code more up
 * Sailias for adding the ability to return array parameter
 */
(function ($) {
	$.fn.extend({
		/**
		* Returns get parameters.
		*
		* If the desired param does not exist, null will be returned
		*
		* To get the document params:
		* @example value = $(document).getUrlParam("paramName");
		*
		* To get the params of a html-attribut (uses src attribute)
		* @example value = $('#imgLink').getUrlParam("paramName");
		*/
		getUrlParam: function (strParamName) {
			strParamName = escape(unescape(strParamName));

			var returnVal = [];
			var qString = null;
			var i = 0;

			if ($(this).attr('nodeName') === '#document') { //document-handler
				if (escape(unescape(window.location.search)).search(strParamName) > -1) {
					qString = window.location.search.substr(1, window.location.search.length).split('&');
				}

			} else if ($(this).attr('src') !== 'undefined') {

			var strHref = $(this).attr('src');
			if (strHref.indexOf('?') > -1) {
				var strQueryString = strHref.substr(strHref.indexOf('?') + 1);
				qString = strQueryString.split('&');
			}
			} else if ($(this).attr('href') !== 'undefined') {
				var strHref = $(this).attr('href');
				if (strHref.indexOf('?') > -1) {
					var strQueryString = strHref.substr(strHref.indexOf('?') + 1);
					qString = strQueryString.split('&');
				}
			} else {
				return null;
			}

			if (qString === null) {
				return null;
			}

			for (i; i < qString.length;  i++) {
				if (escape(unescape(qString[i].split('=')[0])) === strParamName) {
					returnVal.push(qString[i].split('=')[1]);
				}
			}

			if (returnVal.length === 0) {
				return null;
			} else if (returnVal.length === 1) {
				return returnVal[0];
			} else {
				return returnVal;
			}
		}
	});
})(jQuery);

}).call(global, module, undefined, undefined);

},{"jquery":83}],59:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
; jQuery = global.jQuery = require("jquery");
; var __browserify_shim_require__=require;(function browserifyShim(module, define, require) {
/*
 * jQuery JSONP Core Plugin 2.4.0 (2012-08-21)
 *
 * https://github.com/jaubourg/jquery-jsonp
 *
 * Copyright (c) 2012 Julian Aubourg
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 */
( function( $ ) {

	// ###################### UTILITIES ##

	// Noop
	function noop() {
	}

	// Generic callback
	function genericCallback( data ) {
		lastValue = [ data ];
	}

	// Call if defined
	function callIfDefined( method , object , parameters ) {
		return method && method.apply( object.context || object , parameters );
	}

	// Give joining character given url
	function qMarkOrAmp( url ) {
		return /\?/ .test( url ) ? "&" : "?";
	}

	var // String constants (for better minification)
		STR_ASYNC = "async",
		STR_CHARSET = "charset",
		STR_EMPTY = "",
		STR_ERROR = "error",
		STR_INSERT_BEFORE = "insertBefore",
		STR_JQUERY_JSONP = "_jqjsp",
		STR_ON = "on",
		STR_ON_CLICK = STR_ON + "click",
		STR_ON_ERROR = STR_ON + STR_ERROR,
		STR_ON_LOAD = STR_ON + "load",
		STR_ON_READY_STATE_CHANGE = STR_ON + "readystatechange",
		STR_READY_STATE = "readyState",
		STR_REMOVE_CHILD = "removeChild",
		STR_SCRIPT_TAG = "<script>",
		STR_SUCCESS = "success",
		STR_TIMEOUT = "timeout",

	// Window
		win = window,
	// Deferred
		Deferred = $.Deferred,
	// Head element
		head = $( "head" )[ 0 ] || document.documentElement,
	// Page cache
		pageCache = {},
	// Counter
		count = 0,
	// Last returned value
		lastValue,

	// ###################### DEFAULT OPTIONS ##
		xOptionsDefaults = {
			//beforeSend: undefined,
			//cache: false,
			callback: STR_JQUERY_JSONP,
			//callbackParameter: undefined,
			//charset: undefined,
			//complete: undefined,
			//context: undefined,
			//data: "",
			//dataFilter: undefined,
			//error: undefined,
			//pageCache: false,
			//success: undefined,
			//timeout: 0,
			//traditional: false,
			url: location.href
		},

	// opera demands sniffing :/
		opera = win.opera,

	// IE < 10
		oldIE = !!$( "<div>" ).html( "<!--[if IE]><i><![endif]-->" ).find("i").length;

	// ###################### MAIN FUNCTION ##
	function jsonp( xOptions ) {

		// Build data with default
		xOptions = $.extend( {} , xOptionsDefaults , xOptions );

		// References to xOptions members (for better minification)
		var successCallback = xOptions.success,
			errorCallback = xOptions.error,
			completeCallback = xOptions.complete,
			dataFilter = xOptions.dataFilter,
			callbackParameter = xOptions.callbackParameter,
			successCallbackName = xOptions.callback,
			cacheFlag = xOptions.cache,
			pageCacheFlag = xOptions.pageCache,
			charset = xOptions.charset,
			url = xOptions.url,
			data = xOptions.data,
			timeout = xOptions.timeout,
			pageCached,

		// Abort/done flag
			done = 0,

		// Life-cycle functions
			cleanUp = noop,

		// Support vars
			supportOnload,
			supportOnreadystatechange,

		// Request execution vars
			firstChild,
			script,
			scriptAfter,
			timeoutTimer;

		// If we have Deferreds:
		// - substitute callbacks
		// - promote xOptions to a promise
		Deferred && Deferred(function( defer ) {
			defer.done( successCallback ).fail( errorCallback );
			successCallback = defer.resolve;
			errorCallback = defer.reject;
		}).promise( xOptions );

		// Create the abort method
		xOptions.abort = function() {
			!( done++ ) && cleanUp();
		};

		// Call beforeSend if provided (early abort if false returned)
		if ( callIfDefined( xOptions.beforeSend , xOptions , [ xOptions ] ) === !1 || done ) {
			return xOptions;
		}

		// Control entries
		url = url || STR_EMPTY;
		data = data ? ( (typeof data) == "string" ? data : $.param( data , xOptions.traditional ) ) : STR_EMPTY;

		// Build final url
		url += data ? ( qMarkOrAmp( url ) + data ) : STR_EMPTY;

		// Add callback parameter if provided as option
		callbackParameter && ( url += qMarkOrAmp( url ) + encodeURIComponent( callbackParameter ) + "=?" );

		// Add anticache parameter if needed
		!cacheFlag && !pageCacheFlag && ( url += qMarkOrAmp( url ) + "_" + ( new Date() ).getTime() + "=" );

		// Replace last ? by callback parameter
		url = url.replace( /=\?(&|$)/ , "=" + successCallbackName + "$1" );

		// Success notifier
		function notifySuccess( json ) {

			if ( !( done++ ) ) {

				cleanUp();
				// Pagecache if needed
				pageCacheFlag && ( pageCache [ url ] = { s: [ json ] } );
				// Apply the data filter if provided
				dataFilter && ( json = dataFilter.apply( xOptions , [ json ] ) );
				// Call success then complete
				callIfDefined( successCallback , xOptions , [ json , STR_SUCCESS, xOptions ] );
				callIfDefined( completeCallback , xOptions , [ xOptions , STR_SUCCESS ] );

			}
		}

		// Error notifier
		function notifyError( type ) {

			if ( !( done++ ) ) {

				// Clean up
				cleanUp();
				// If pure error (not timeout), cache if needed
				pageCacheFlag && type != STR_TIMEOUT && ( pageCache[ url ] = type );
				// Call error then complete
				callIfDefined( errorCallback , xOptions , [ xOptions , type ] );
				callIfDefined( completeCallback , xOptions , [ xOptions , type ] );

			}
		}

		// Check page cache
		if ( pageCacheFlag && ( pageCached = pageCache[ url ] ) ) {

			pageCached.s ? notifySuccess( pageCached.s[ 0 ] ) : notifyError( pageCached );

		} else {

			// Install the generic callback
			// (BEWARE: global namespace pollution ahoy)
			win[ successCallbackName ] = genericCallback;

			// Create the script tag
			script = $( STR_SCRIPT_TAG )[ 0 ];
			script.id = STR_JQUERY_JSONP + count++;

			// Set charset if provided
			if ( charset ) {
				script[ STR_CHARSET ] = charset;
			}

			opera && opera.version() < 11.60 ?
				// onerror is not supported: do not set as async and assume in-order execution.
				// Add a trailing script to emulate the event
				( ( scriptAfter = $( STR_SCRIPT_TAG )[ 0 ] ).text = "document.getElementById('" + script.id + "')." + STR_ON_ERROR + "()" )
				:
				// onerror is supported: set the script as async to avoid requests blocking each others
				( script[ STR_ASYNC ] = STR_ASYNC )

			;

			// Internet Explorer: event/htmlFor trick
			if ( oldIE ) {
				script.htmlFor = script.id;
				script.event = STR_ON_CLICK;
			}

			// Attached event handlers
			script[ STR_ON_LOAD ] = script[ STR_ON_ERROR ] = script[ STR_ON_READY_STATE_CHANGE ] = function ( result ) {

				// Test readyState if it exists
				if ( !script[ STR_READY_STATE ] || !/i/.test( script[ STR_READY_STATE ] ) ) {

					try {

						script[ STR_ON_CLICK ] && script[ STR_ON_CLICK ]();

					} catch( _ ) {}

					result = lastValue;
					lastValue = 0;
					result ? notifySuccess( result[ 0 ] ) : notifyError( STR_ERROR );

				}
			};

			// Set source
			script.src = url;

			// Re-declare cleanUp function
			cleanUp = function( i ) {
				timeoutTimer && clearTimeout( timeoutTimer );
				script[ STR_ON_READY_STATE_CHANGE ] = script[ STR_ON_LOAD ] = script[ STR_ON_ERROR ] = null;
				head[ STR_REMOVE_CHILD ]( script );
				scriptAfter && head[ STR_REMOVE_CHILD ]( scriptAfter );
			};

			// Append main script
			head[ STR_INSERT_BEFORE ]( script , ( firstChild = head.firstChild ) );

			// Append trailing script if needed
			scriptAfter && head[ STR_INSERT_BEFORE ]( scriptAfter , firstChild );

			// If a timeout is needed, install it
			timeoutTimer = timeout > 0 && setTimeout( function() {
				notifyError( STR_TIMEOUT );
			} , timeout );

		}

		return xOptions;
	}

	// ###################### SETUP FUNCTION ##
	jsonp.setup = function( xOptions ) {
		$.extend( xOptionsDefaults , xOptions );
	};

	// ###################### INSTALL in jQuery ##
	$.jsonp = jsonp;

} )( jQuery );
}).call(global, module, undefined, undefined);

},{"jquery":83}],60:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
; jQuery = global.jQuery = require("jquery");
; var __browserify_shim_require__=require;(function browserifyShim(module, define, require) {
/*!
 * jQuery.ScrollTo
 * Copyright (c) 2007-2013 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 *
 * @projectDescription Easy element scrolling using jQuery.
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @author Ariel Flesler
 * @version 1.4.6
 *
 * @id jQuery.scrollTo
 * @id jQuery.fn.scrollTo
 * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
 *	  The different options for target are:
 *		- A number position (will be applied to all axes).
 *		- A string position ('44', '100px', '+=90', etc ) will be applied to all axes
 *		- A jQuery/DOM element ( logically, child of the element to scroll )
 *		- A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
 *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.
 *		- A percentage of the container's dimension/s, for example: 50% to go to the middle.
 *		- The string 'max' for go-to-end. 
 * @param {Number, Function} duration The OVERALL length of the animation, this argument can be the settings object instead.
 * @param {Object,Function} settings Optional set of settings or the onAfter callback.
 *	 @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
 *	 @option {Number, Function} duration The OVERALL length of the animation.
 *	 @option {String} easing The easing method for the animation.
 *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
 *	 @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
 *	 @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
 *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
 *	 @option {Function} onAfter Function to be called after the scrolling ends. 
 *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @desc Scroll to a fixed position
 * @example $('div').scrollTo( 340 );
 *
 * @desc Scroll relatively to the actual position
 * @example $('div').scrollTo( '+=340px', { axis:'y' } );
 *
 * @desc Scroll using a selector (relative to the scrolled element)
 * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
 *
 * @desc Scroll to a DOM element (same for jQuery object)
 * @example var second_child = document.getElementById('container').firstChild.nextSibling;
 *			$('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
 *				alert('scrolled!!');																   
 *			}});
 *
 * @desc Scroll on both axes, to different values
 * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
 */

;(function( $ ){
	
	var $scrollTo = $.scrollTo = function( target, duration, settings ){
		$(window).scrollTo( target, duration, settings );
	};

	$scrollTo.defaults = {
		axis:'xy',
		duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
		limit:true
	};

	// Returns the element that needs to be animated to scroll the window.
	// Kept for backwards compatibility (specially for localScroll & serialScroll)
	$scrollTo.window = function( scope ){
		return $(window)._scrollable();
	};

	// Hack, hack, hack :)
	// Returns the real elements to scroll (supports window/iframes, documents and regular nodes)
	$.fn._scrollable = function(){
		return this.map(function(){
			var elem = this,
				isWin = !elem.nodeName || $.inArray( elem.nodeName.toLowerCase(), ['iframe','#document','html','body'] ) != -1;

				if( !isWin )
					return elem;

			var doc = (elem.contentWindow || elem).document || elem.ownerDocument || elem;
			
			return /webkit/i.test(navigator.userAgent) || doc.compatMode == 'BackCompat' ?
				doc.body : 
				doc.documentElement;
		});
	};

	$.fn.scrollTo = function( target, duration, settings ){
		if( typeof duration == 'object' ){
			settings = duration;
			duration = 0;
		}
		if( typeof settings == 'function' )
			settings = { onAfter:settings };
			
		if( target == 'max' )
			target = 9e9;
			
		settings = $.extend( {}, $scrollTo.defaults, settings );
		// Speed is still recognized for backwards compatibility
		duration = duration || settings.duration;
		// Make sure the settings are given right
		settings.queue = settings.queue && settings.axis.length > 1;
		
		if( settings.queue )
			// Let's keep the overall duration
			duration /= 2;
		settings.offset = both( settings.offset );
		settings.over = both( settings.over );

		return this._scrollable().each(function(){
			// Null target yields nothing, just like jQuery does
			if (target == null) return;

			var elem = this,
				$elem = $(elem),
				targ = target, toff, attr = {},
				win = $elem.is('html,body');

			switch( typeof targ ){
				// A number will pass the regex
				case 'number':
				case 'string':
					if( /^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ) ){
						targ = both( targ );
						// We are done
						break;
					}
					// Relative selector, no break!
					targ = $(targ,this);
					if (!targ.length) return;
				case 'object':
					// DOMElement / jQuery
					if( targ.is || targ.style )
						// Get the real position of the target 
						toff = (targ = $(targ)).offset();
			}
			$.each( settings.axis.split(''), function( i, axis ){
				var Pos	= axis == 'x' ? 'Left' : 'Top',
					pos = Pos.toLowerCase(),
					key = 'scroll' + Pos,
					old = elem[key],
					max = $scrollTo.max(elem, axis);

				if( toff ){// jQuery / DOMElement
					attr[key] = toff[pos] + ( win ? 0 : old - $elem.offset()[pos] );

					// If it's a dom element, reduce the margin
					if( settings.margin ){
						attr[key] -= parseInt(targ.css('margin'+Pos)) || 0;
						attr[key] -= parseInt(targ.css('border'+Pos+'Width')) || 0;
					}
					
					attr[key] += settings.offset[pos] || 0;
					
					if( settings.over[pos] )
						// Scroll to a fraction of its width/height
						attr[key] += targ[axis=='x'?'width':'height']() * settings.over[pos];
				}else{ 
					var val = targ[pos];
					// Handle percentage values
					attr[key] = val.slice && val.slice(-1) == '%' ? 
						parseFloat(val) / 100 * max
						: val;
				}

				// Number or 'number'
				if( settings.limit && /^\d+$/.test(attr[key]) )
					// Check the limits
					attr[key] = attr[key] <= 0 ? 0 : Math.min( attr[key], max );

				// Queueing axes
				if( !i && settings.queue ){
					// Don't waste time animating, if there's no need.
					if( old != attr[key] )
						// Intermediate animation
						animate( settings.onAfterFirst );
					// Don't animate this axis again in the next iteration.
					delete attr[key];
				}
			});

			animate( settings.onAfter );			

			function animate( callback ){
				$elem.animate( attr, duration, settings.easing, callback && function(){
					callback.call(this, targ, settings);
				});
			};

		}).end();
	};
	
	// Max scrolling position, works on quirks mode
	// It only fails (not too badly) on IE, quirks mode.
	$scrollTo.max = function( elem, axis ){
		var Dim = axis == 'x' ? 'Width' : 'Height',
			scroll = 'scroll'+Dim;
		
		if( !$(elem).is('html,body') )
			return elem[scroll] - $(elem)[Dim.toLowerCase()]();
		
		var size = 'client' + Dim,
			html = elem.ownerDocument.documentElement,
			body = elem.ownerDocument.body;

		return Math.max( html[scroll], body[scroll] ) 
			 - Math.min( html[size]  , body[size]   );
	};

	function both( val ){
		return typeof val == 'object' ? val : { top:val, left:val };
	};

})( jQuery );
}).call(global, module, undefined, undefined);

},{"jquery":83}],61:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
; jQuery = global.jQuery = require("jquery");
; var __browserify_shim_require__=require;(function browserifyShim(module, define, require) {
/*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 Jörn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function($) {

$.extend($.fn, {
	// http://docs.jquery.com/Plugins/Validation/validate
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data( this[0], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[0] );
		$.data( this[0], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.validateDelegate( ":submit", "click", function( event ) {
				if ( validator.settings.submitHandler ) {
					validator.submitButton = event.target;
				}
				// allow suppressing validation by adding a cancel class to the submit button
				if ( $(event.target).hasClass("cancel") ) {
					validator.cancelSubmit = true;
				}

				// allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $(event.target).attr("formnovalidate") !== undefined ) {
					validator.cancelSubmit = true;
				}
			});

			// validate the form on submit
			this.submit( function( event ) {
				if ( validator.settings.debug ) {
					// prevent form submit to be able to see console output
					event.preventDefault();
				}
				function handle() {
					var hidden;
					if ( validator.settings.submitHandler ) {
						if ( validator.submitButton ) {
							// insert a hidden input as a replacement for the missing submit button
							hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val( $(validator.submitButton).val() ).appendTo(validator.currentForm);
						}
						validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( validator.submitButton ) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						return false;
					}
					return true;
				}

				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}

		return validator;
	},
	// http://docs.jquery.com/Plugins/Validation/valid
	valid: function() {
		if ( $(this[0]).is("form")) {
			return this.validate().form();
		} else {
			var valid = true;
			var validator = $(this[0].form).validate();
			this.each(function() {
				valid = valid && validator.element(this);
			});
			return valid;
		}
	},
	// attributes: space seperated list of attributes to retrieve and remove
	removeAttrs: function( attributes ) {
		var result = {},
			$element = this;
		$.each(attributes.split(/\s/), function( index, value ) {
			result[value] = $element.attr(value);
			$element.removeAttr(value);
		});
		return result;
	},
	// http://docs.jquery.com/Plugins/Validation/rules
	rules: function( command, argument ) {
		var element = this[0];

		if ( command ) {
			var settings = $.data(element.form, "validator").settings;
			var staticRules = settings.rules;
			var existingRules = $.validator.staticRules(element);
			switch(command) {
			case "add":
				$.extend(existingRules, $.validator.normalizeRule(argument));
				// remove messages from rules, but allow them to be set separetely
				delete existingRules.messages;
				staticRules[element.name] = existingRules;
				if ( argument.messages ) {
					settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[element.name];
					return existingRules;
				}
				var filtered = {};
				$.each(argument.split(/\s/), function( index, method ) {
					filtered[method] = existingRules[method];
					delete existingRules[method];
				});
				return filtered;
			}
		}

		var data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules(element),
			$.validator.attributeRules(element),
			$.validator.dataRules(element),
			$.validator.staticRules(element)
		), element);

		// make sure required is at front
		if ( data.required ) {
			var param = data.required;
			delete data.required;
			data = $.extend({required: param}, data);
		}

		return data;
	}
});

// Custom selectors
$.extend($.expr[":"], {
	// http://docs.jquery.com/Plugins/Validation/blank
	blank: function( a ) { return !$.trim("" + $(a).val()); },
	// http://docs.jquery.com/Plugins/Validation/filled
	filled: function( a ) { return !!$.trim("" + $(a).val()); },
	// http://docs.jquery.com/Plugins/Validation/unchecked
	unchecked: function( a ) { return !$(a).prop("checked"); }
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray(arguments);
			args.unshift(source);
			return $.validator.format.apply( this, args );
		};
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray(arguments).slice(1);
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each(params, function( i, n ) {
		source = source.replace( new RegExp("\\{" + i + "\\}", "g"), function() {
			return n;
		});
	});
	return source;
};

$.extend($.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusInvalid: true,
		errorContainer: $([]),
		errorLabelContainer: $([]),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element, event ) {
			this.lastActive = element;

			// hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.addWrapper(this.errorsFor(element)).hide();
			}
		},
		onfocusout: function( element, event ) {
			if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
				this.element(element);
			}
		},
		onkeyup: function( element, event ) {
			if ( event.which === 9 && this.elementValue(element) === "" ) {
				return;
			} else if ( element.name in this.submitted || element === this.lastElement ) {
				this.element(element);
			}
		},
		onclick: function( element, event ) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element(element);
			}
			// or option elements, check parent select in that case
			else if ( element.parentNode.name in this.submitted ) {
				this.element(element.parentNode);
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName(element.name).addClass(errorClass).removeClass(validClass);
			} else {
				$(element).addClass(errorClass).removeClass(validClass);
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName(element.name).removeClass(errorClass).addClass(validClass);
			} else {
				$(element).removeClass(errorClass).addClass(validClass);
			}
		}
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format("Please enter no more than {0} characters."),
		minlength: $.validator.format("Please enter at least {0} characters."),
		rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
		range: $.validator.format("Please enter a value between {0} and {1}."),
		max: $.validator.format("Please enter a value less than or equal to {0}."),
		min: $.validator.format("Please enter a value greater than or equal to {0}.")
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $(this.settings.errorLabelContainer);
			this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
			this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = (this.groups = {});
			$.each(this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split(/\s/);
				}
				$.each(value, function( index, name ) {
					groups[name] = key;
				});
			});
			var rules = this.settings.rules;
			$.each(rules, function( key, value ) {
				rules[key] = $.validator.normalizeRule(value);
			});

			function delegate(event) {
				var validator = $.data(this[0].form, "validator"),
					eventType = "on" + event.type.replace(/^validate/, "");
				if ( validator.settings[eventType] ) {
					validator.settings[eventType].call(validator, this[0], event);
				}
			}
			$(this.currentForm)
				.validateDelegate(":text, [type='password'], [type='file'], select, textarea, " +
					"[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
					"[type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], " +
					"[type='range'], [type='color'] ",
					"focusin focusout keyup", delegate)
				.validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", delegate);

			if ( this.settings.invalidHandler ) {
				$(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
			}
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/form
		form: function() {
			this.checkForm();
			$.extend(this.submitted, this.errorMap);
			this.invalid = $.extend({}, this.errorMap);
			if ( !this.valid() ) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
				this.check( elements[i] );
			}
			return this.valid();
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/element
		element: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );
			this.lastElement = element;
			this.prepareElement( element );
			this.currentElements = $(element);
			var result = this.check( element ) !== false;
			if ( result ) {
				delete this.invalid[element.name];
			} else {
				this.invalid[element.name] = true;
			}
			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/showErrors
		showErrors: function( errors ) {
			if ( errors ) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[name],
						element: this.findByName(name)[0]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !(element.name in errors);
				});
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/resetForm
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$(this.currentForm).resetForm();
			}
			this.submitted = {};
			this.lastElement = null;
			this.prepareForm();
			this.hideErrors();
			this.elements().removeClass( this.settings.errorClass ).removeData( "previousValue" );
		},

		numberOfInvalids: function() {
			return this.objectLength(this.invalid);
		},

		objectLength: function( obj ) {
			var count = 0;
			for ( var i in obj ) {
				count++;
			}
			return count;
		},

		hideErrors: function() {
			this.addWrapper( this.toHide ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
					.filter(":visible")
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger("focusin");
				} catch(e) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep(this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			}).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// select all valid inputs inside the form (no submit or reset buttons)
			return $(this.currentForm)
			.find("input, select, textarea")
			.not(":submit, :reset, :image, [disabled]")
			.not( this.settings.ignore )
			.filter(function() {
				if ( !this.name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this);
				}

				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength($(this).rules()) ) {
					return false;
				}

				rulesCache[this.name] = true;
				return true;
			});
		},

		clean: function( selector ) {
			return $(selector)[0];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.replace(" ", ".");
			return $(this.settings.errorElement + "." + errorClass, this.errorContext);
		},

		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $([]);
			this.toHide = $([]);
			this.currentElements = $([]);
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor(element);
		},

		elementValue: function( element ) {
			var type = $(element).attr("type"),
				val = $(element).val();

			if ( type === "radio" || type === "checkbox" ) {
				return $("input[name='" + $(element).attr("name") + "']:checked").val();
			}

			if ( typeof val === "string" ) {
				return val.replace(/\r/g, "");
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $(element).rules();
			var dependencyMismatch = false;
			var val = this.elementValue(element);
			var result;

			for (var method in rules ) {
				var rule = { method: method, parameters: rules[method] };
				try {

					result = $.validator.methods[method].call( this, val, element, rule.parameters );

					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor(element) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch(e) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength(rules) ) {
				this.successList.push(element);
			}
			return true;
		},

		// return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		customDataMessage: function( element, method ) {
			return $(element).data("msg-" + method.toLowerCase()) || (element.attributes && $(element).attr("data-msg-" + method.toLowerCase()));
		},

		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[name];
			return m && (m.constructor === String ? m : m[method]);
		},

		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for(var i = 0; i < arguments.length; i++) {
				if ( arguments[i] !== undefined ) {
					return arguments[i];
				}
			}
			return undefined;
		},

		defaultMessage: function( element, method ) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customDataMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[method],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call(this, rule.parameters, element);
			} else if (theregex.test(message)) {
				message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
			}
			this.errorList.push({
				message: message,
				element: element
			});

			this.errorMap[element.name] = message;
			this.submitted[element.name] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements;
			for ( i = 0; this.errorList[i]; i++ ) {
				var error = this.errorList[i];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[i]; i++ ) {
					this.showLabel( this.successList[i] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[i]; i++ ) {
					this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not(this.invalidElements());
		},

		invalidElements: function() {
			return $(this.errorList).map(function() {
				return this.element;
			});
		},

		showLabel: function( element, message ) {
			var label = this.errorsFor( element );
			if ( label.length ) {
				// refresh error/success class
				label.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );
				// replace message on existing label
				label.html(message);
			} else {
				// create label
				label = $("<" + this.settings.errorElement + ">")
					.attr("for", this.idOrName(element))
					.addClass(this.settings.errorClass)
					.html(message || "");
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
				}
				if ( !this.labelContainer.append(label).length ) {
					if ( this.settings.errorPlacement ) {
						this.settings.errorPlacement(label, $(element) );
					} else {
						label.insertAfter(element);
					}
				}
			}
			if ( !message && this.settings.success ) {
				label.text("");
				if ( typeof this.settings.success === "string" ) {
					label.addClass( this.settings.success );
				} else {
					this.settings.success( label, element );
				}
			}
			this.toShow = this.toShow.add(label);
		},

		errorsFor: function( element ) {
			var name = this.idOrName(element);
			return this.errors().filter(function() {
				return $(this).attr("for") === name;
			});
		},

		idOrName: function( element ) {
			return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
		},

		validationTargetFor: function( element ) {
			// if radio/checkbox, validate first element in group instead
			if ( this.checkable(element) ) {
				element = this.findByName( element.name ).not(this.settings.ignore)[0];
			}
			return element;
		},

		checkable: function( element ) {
			return (/radio|checkbox/i).test(element.type);
		},

		findByName: function( name ) {
			return $(this.currentForm).find("[name='" + name + "']");
		},

		getLength: function( value, element ) {
			switch( element.nodeName.toLowerCase() ) {
			case "select":
				return $("option:selected", element).length;
			case "input":
				if ( this.checkable( element) ) {
					return this.findByName(element.name).filter(":checked").length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
		},

		dependTypes: {
			"boolean": function( param, element ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$(param, element.form).length;
			},
			"function": function( param, element ) {
				return param(element);
			}
		},

		optional: function( element ) {
			var val = this.elementValue(element);
			return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[element.name] ) {
				this.pendingRequest++;
				this.pending[element.name] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[element.name];
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$(this.currentForm).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
				this.formSubmitted = false;
			}
		},

		previousValue: function( element ) {
			return $.data(element, "previousValue") || $.data(element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		}

	},

	classRuleSettings: {
		required: {required: true},
		email: {email: true},
		url: {url: true},
		date: {date: true},
		dateISO: {dateISO: true},
		number: {number: true},
		digits: {digits: true},
		creditcard: {creditcard: true}
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[className] = rules;
		} else {
			$.extend(this.classRuleSettings, className);
		}
	},

	classRules: function( element ) {
		var rules = {};
		var classes = $(element).attr("class");
		if ( classes ) {
			$.each(classes.split(" "), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend(rules, $.validator.classRuleSettings[this]);
				}
			});
		}
		return rules;
	},

	attributeRules: function( element ) {
		var rules = {};
		var $element = $(element);
		var type = $element[0].getAttribute("type");

		for (var method in $.validator.methods) {
			var value;

			// support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = $element.get(0).getAttribute(method);
				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}
				// force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr(method);
			}

			// convert the value to a number for number inputs, and for text for backwards compability
			// allows type="date" and others to be compared as strings
			if ( /min|max/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
				value = Number(value);
			}

			if ( value ) {
				rules[method] = value;
			} else if ( type === method && type !== 'range' ) {
				// exception: the jquery validate 'range' method
				// does not test for the html5 'range' type
				rules[method] = true;
			}
		}

		// maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var method, value,
			rules = {}, $element = $(element);
		for (method in $.validator.methods) {
			value = $element.data("rule-" + method.toLowerCase());
			if ( value !== undefined ) {
				rules[method] = value;
			}
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {};
		var validator = $.data(element.form, "validator");
		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {
		// handle dependency check
		$.each(rules, function( prop, val ) {
			// ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[prop];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch (typeof val.depends) {
				case "string":
					keepRule = !!$(val.depends, element.form).length;
					break;
				case "function":
					keepRule = val.depends.call(element, element);
					break;
				}
				if ( keepRule ) {
					rules[prop] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[prop];
				}
			}
		});

		// evaluate parameters
		$.each(rules, function( rule, parameter ) {
			rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
		});

		// clean number parameters
		$.each(['minlength', 'maxlength'], function() {
			if ( rules[this] ) {
				rules[this] = Number(rules[this]);
			}
		});
		$.each(['rangelength', 'range'], function() {
			var parts;
			if ( rules[this] ) {
				if ( $.isArray(rules[this]) ) {
					rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
				} else if ( typeof rules[this] === "string" ) {
					parts = rules[this].split(/[\s,]+/);
					rules[this] = [Number(parts[0]), Number(parts[1])];
				}
			}
		});

		if ( $.validator.autoCreateRanges ) {
			// auto-create ranges
			if ( rules.min && rules.max ) {
				rules.range = [rules.min, rules.max];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength && rules.maxlength ) {
				rules.rangelength = [rules.minlength, rules.maxlength];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each(data.split(/\s/), function() {
				transformed[this] = true;
			});
			data = transformed;
		}
		return data;
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/addMethod
	addMethod: function( name, method, message ) {
		$.validator.methods[name] = method;
		$.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
		if ( method.length < 3 ) {
			$.validator.addClassRules(name, $.validator.normalizeRule(name));
		}
	},

	methods: {

		// http://docs.jquery.com/Plugins/Validation/Methods/required
		required: function( value, element, param ) {
			// check if dependency is met
			if ( !this.depend(param, element) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {
				// could be an array for select-multiple or a string, both are fine this way
				var val = $(element).val();
				return val && val.length > 0;
			}
			if ( this.checkable(element) ) {
				return this.getLength(value, element) > 0;
			}
			return $.trim(value).length > 0;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/email
		email: function( value, element ) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
			return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/url
		url: function( value, element ) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
			return this.optional(element) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/date
		date: function( value, element ) {
			return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/dateISO
		dateISO: function( value, element ) {
			return this.optional(element) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/number
		number: function( value, element ) {
			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/digits
		digits: function( value, element ) {
			return this.optional(element) || /^\d+$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/creditcard
		// based on http://en.wikipedia.org/wiki/Luhn
		creditcard: function( value, element ) {
			if ( this.optional(element) ) {
				return "dependency-mismatch";
			}
			// accept only spaces, digits and dashes
			if ( /[^0-9 \-]+/.test(value) ) {
				return false;
			}
			var nCheck = 0,
				nDigit = 0,
				bEven = false;

			value = value.replace(/\D/g, "");

			for (var n = value.length - 1; n >= 0; n--) {
				var cDigit = value.charAt(n);
				nDigit = parseInt(cDigit, 10);
				if ( bEven ) {
					if ( (nDigit *= 2) > 9 ) {
						nDigit -= 9;
					}
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return (nCheck % 10) === 0;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/minlength
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || length >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/maxlength
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || length <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/rangelength
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || ( length >= param[0] && length <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/min
		min: function( value, element, param ) {
			return this.optional(element) || value >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/max
		max: function( value, element, param ) {
			return this.optional(element) || value <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/range
		range: function( value, element, param ) {
			return this.optional(element) || ( value >= param[0] && value <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/equalTo
		equalTo: function( value, element, param ) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $(param);
			if ( this.settings.onfocusout ) {
				target.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
					$(element).valid();
				});
			}
			return value === target.val();
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/remote
		remote: function( value, element, param ) {
			if ( this.optional(element) ) {
				return "dependency-mismatch";
			}

			var previous = this.previousValue(element);
			if (!this.settings.messages[element.name] ) {
				this.settings.messages[element.name] = {};
			}
			previous.originalMessage = this.settings.messages[element.name].remote;
			this.settings.messages[element.name].remote = previous.message;

			param = typeof param === "string" && {url:param} || param;

			if ( previous.old === value ) {
				return previous.valid;
			}

			previous.old = value;
			var validator = this;
			this.startRequest(element);
			var data = {};
			data[element.name] = value;
			$.ajax($.extend(true, {
				url: param,
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				success: function( response ) {
					validator.settings.messages[element.name].remote = previous.originalMessage;
					var valid = response === true || response === "true";
					if ( valid ) {
						var submitted = validator.formSubmitted;
						validator.prepareElement(element);
						validator.formSubmitted = submitted;
						validator.successList.push(element);
						delete validator.invalid[element.name];
						validator.showErrors();
					} else {
						var errors = {};
						var message = response || validator.defaultMessage( element, "remote" );
						errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
						validator.invalid[element.name] = true;
						validator.showErrors(errors);
					}
					previous.valid = valid;
					validator.stopRequest(element, valid);
				}
			}, param));
			return "pending";
		}

	}

});

// deprecated, use $.validator.format instead
$.format = $.validator.format;

}(jQuery));

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
(function($) {
	var pendingRequests = {};
	// Use a prefilter if available (1.5+)
	if ( $.ajaxPrefilter ) {
		$.ajaxPrefilter(function( settings, _, xhr ) {
			var port = settings.port;
			if ( settings.mode === "abort" ) {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = xhr;
			}
		});
	} else {
		// Proxy ajax
		var ajax = $.ajax;
		$.ajax = function( settings ) {
			var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
				port = ( "port" in settings ? settings : $.ajaxSettings ).port;
			if ( mode === "abort" ) {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = ajax.apply(this, arguments);
				return pendingRequests[port];
			}
			return ajax.apply(this, arguments);
		};
	}
}(jQuery));

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target
(function($) {
	$.extend($.fn, {
		validateDelegate: function( delegate, type, handler ) {
			return this.bind(type, function( event ) {
				var target = $(event.target);
				if ( target.is(delegate) ) {
					return handler.apply(target, arguments);
				}
			});
		}
	});
}(jQuery));

}).call(global, module, undefined, undefined);

},{"jquery":83}],62:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
; Backbone = global.Backbone = require("backbone");
_ = global._ = require("underscore");
; var __browserify_shim_require__=require;(function browserifyShim(module, define, require) {
/*jshint expr:true eqnull:true */
/**
 *
 * Backbone.DeepModel v0.10.4
 *
 * Copyright (c) 2013 Charles Davison, Pow Media Ltd
 *
 * https://github.com/powmedia/backbone-deep-model
 * Licensed under the MIT License
 */

/**
 * Underscore mixins for deep objects
 *
 * Based on https://gist.github.com/echong/3861963
 */
(function() {
  var arrays, basicObjects, deepClone, deepExtend, deepExtendCouple, isBasicObject,
    __slice = [].slice;

  deepClone = function(obj) {
    var func, isArr;
    if (!_.isObject(obj) || _.isFunction(obj)) {
      return obj;
    }
    if (obj instanceof Backbone.Collection || obj instanceof Backbone.Model) {
      return obj;
    }
    if (_.isDate(obj)) {
      return new Date(obj.getTime());
    }
    if (_.isRegExp(obj)) {
      return new RegExp(obj.source, obj.toString().replace(/.*\//, ""));
    }
    isArr = _.isArray(obj || _.isArguments(obj));
    func = function(memo, value, key) {
      if (isArr) {
        memo.push(deepClone(value));
      } else {
        memo[key] = deepClone(value);
      }
      return memo;
    };
    return _.reduce(obj, func, isArr ? [] : {});
  };

  isBasicObject = function(object) {
    if (object == null) return false;
    return (object.prototype === {}.prototype || object.prototype === Object.prototype) && _.isObject(object) && !_.isArray(object) && !_.isFunction(object) && !_.isDate(object) && !_.isRegExp(object) && !_.isArguments(object);
  };

  basicObjects = function(object) {
    return _.filter(_.keys(object), function(key) {
      return isBasicObject(object[key]);
    });
  };

  arrays = function(object) {
    return _.filter(_.keys(object), function(key) {
      return _.isArray(object[key]);
    });
  };

  deepExtendCouple = function(destination, source, maxDepth) {
    var combine, recurse, sharedArrayKey, sharedArrayKeys, sharedObjectKey, sharedObjectKeys, _i, _j, _len, _len1;
    if (maxDepth == null) {
      maxDepth = 20;
    }
    if (maxDepth <= 0) {
      console.warn('_.deepExtend(): Maximum depth of recursion hit.');
      return _.extend(destination, source);
    }
    sharedObjectKeys = _.intersection(basicObjects(destination), basicObjects(source));
    recurse = function(key) {
      return source[key] = deepExtendCouple(destination[key], source[key], maxDepth - 1);
    };
    for (_i = 0, _len = sharedObjectKeys.length; _i < _len; _i++) {
      sharedObjectKey = sharedObjectKeys[_i];
      recurse(sharedObjectKey);
    }
    sharedArrayKeys = _.intersection(arrays(destination), arrays(source));
    combine = function(key) {
      return source[key] = _.union(destination[key], source[key]);
    };
    for (_j = 0, _len1 = sharedArrayKeys.length; _j < _len1; _j++) {
      sharedArrayKey = sharedArrayKeys[_j];
      combine(sharedArrayKey);
    }
    return _.extend(destination, source);
  };

  deepExtend = function() {
    var finalObj, maxDepth, objects, _i;
    objects = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), maxDepth = arguments[_i++];
    if (!_.isNumber(maxDepth)) {
      objects.push(maxDepth);
      maxDepth = 20;
    }
    if (objects.length <= 1) {
      return objects[0];
    }
    if (maxDepth <= 0) {
      return _.extend.apply(this, objects);
    }
    finalObj = objects.shift();
    while (objects.length > 0) {
      finalObj = deepExtendCouple(finalObj, deepClone(objects.shift()), maxDepth);
    }
    return finalObj;
  };

  _.mixin({
    deepClone: deepClone,
    isBasicObject: isBasicObject,
    basicObjects: basicObjects,
    arrays: arrays,
    deepExtend: deepExtend
  });

}).call(this);

/**
 * Main source
 */

;(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['underscore', 'backbone'], factory);
    } else {
        // globals
        factory(_, Backbone);
    }
}(function(_, Backbone) {
    
    /**
     * Takes a nested object and returns a shallow object keyed with the path names
     * e.g. { "level1.level2": "value" }
     *
     * @param  {Object}      Nested object e.g. { level1: { level2: 'value' } }
     * @return {Object}      Shallow object with path names e.g. { 'level1.level2': 'value' }
     */
    function objToPaths(obj) {
        var ret = {},
            separator = DeepModel.keyPathSeparator;

        for (var key in obj) {
            var val = obj[key];

            if (val && val.constructor === Object && !_.isEmpty(val)) {
                //Recursion for embedded objects
                var obj2 = objToPaths(val);

                for (var key2 in obj2) {
                    var val2 = obj2[key2];

                    ret[key + separator + key2] = val2;
                }
            } else {
                ret[key] = val;
            }
        }

        return ret;
    }

    /**
     * @param {Object}  Object to fetch attribute from
     * @param {String}  Object path e.g. 'user.name'
     * @return {Mixed}
     */
    function getNested(obj, path, return_exists) {
        var separator = DeepModel.keyPathSeparator;

        var fields = path.split(separator);
        var result = obj;
        return_exists || (return_exists === false);
        for (var i = 0, n = fields.length; i < n; i++) {
            if (return_exists && !_.has(result, fields[i])) {
                return false;
            }
            result = result[fields[i]];

            if (result == null && i < n - 1) {
                result = {};
            }
            
            if (typeof result === 'undefined') {
                if (return_exists)
                {
                    return true;
                }
                return result;
            }
        }
        if (return_exists)
        {
            return true;
        }
        return result;
    }

    /**
     * @param {Object} obj                Object to fetch attribute from
     * @param {String} path               Object path e.g. 'user.name'
     * @param {Object} [options]          Options
     * @param {Boolean} [options.unset]   Whether to delete the value
     * @param {Mixed}                     Value to set
     */
    function setNested(obj, path, val, options) {
        options = options || {};

        var separator = DeepModel.keyPathSeparator;

        var fields = path.split(separator);
        var result = obj;
        for (var i = 0, n = fields.length; i < n && result !== undefined ; i++) {
            var field = fields[i];

            //If the last in the path, set the value
            if (i === n - 1) {
                options.unset ? delete result[field] : result[field] = val;
            } else {
                //Create the child object if it doesn't exist, or isn't an object
                if (typeof result[field] === 'undefined' || ! _.isObject(result[field])) {
                    result[field] = {};
                }

                //Move onto the next part of the path
                result = result[field];
            }
        }
    }

    function deleteNested(obj, path) {
      setNested(obj, path, null, { unset: true });
    }

    var DeepModel = Backbone.Model.extend({

        // Override constructor
        // Support having nested defaults by using _.deepExtend instead of _.extend
        constructor: function(attributes, options) {
            var defaults;
            var attrs = attributes || {};
            this.cid = _.uniqueId('c');
            this.attributes = {};
            if (options && options.collection) this.collection = options.collection;
            if (options && options.parse) attrs = this.parse(attrs, options) || {};
            if (defaults = _.result(this, 'defaults')) {
                //<custom code>
                // Replaced the call to _.defaults with _.deepExtend.
                attrs = _.deepExtend({}, defaults, attrs);
                //</custom code>
            }
            this.set(attrs, options);
            this.changed = {};
            this.initialize.apply(this, arguments);
        },

        // Return a copy of the model's `attributes` object.
        toJSON: function(options) {
          return _.deepClone(this.attributes);
        },

        // Override get
        // Supports nested attributes via the syntax 'obj.attr' e.g. 'author.user.name'
        get: function(attr) {
            return getNested(this.attributes, attr);
        },

        // Override set
        // Supports nested attributes via the syntax 'obj.attr' e.g. 'author.user.name'
        set: function(key, val, options) {
            var attr, attrs, unset, changes, silent, changing, prev, current;
            if (key == null) return this;
            
            // Handle both `"key", value` and `{key: value}` -style arguments.
            if (typeof key === 'object') {
              attrs = key;
              options = val || {};
            } else {
              (attrs = {})[key] = val;
            }

            options || (options = {});
            
            // Run validation.
            if (!this._validate(attrs, options)) return false;

            // Extract attributes and options.
            unset           = options.unset;
            silent          = options.silent;
            changes         = [];
            changing        = this._changing;
            this._changing  = true;

            if (!changing) {
              this._previousAttributes = _.deepClone(this.attributes); //<custom>: Replaced _.clone with _.deepClone
              this.changed = {};
            }
            current = this.attributes, prev = this._previousAttributes;

            // Check for changes of `id`.
            if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

            //<custom code>
            attrs = objToPaths(attrs);
            //</custom code>

            // For each `set` attribute, update or delete the current value.
            for (attr in attrs) {
              val = attrs[attr];

              //<custom code>: Using getNested, setNested and deleteNested
              if (!_.isEqual(getNested(current, attr), val)) changes.push(attr);
              if (!_.isEqual(getNested(prev, attr), val)) {
                setNested(this.changed, attr, val);
              } else {
                deleteNested(this.changed, attr);
              }
              unset ? deleteNested(current, attr) : setNested(current, attr, val);
              //</custom code>
            }

            // Trigger all relevant attribute changes.
            if (!silent) {
              if (changes.length) this._pending = true;

              //<custom code>
              var separator = DeepModel.keyPathSeparator;

              for (var i = 0, l = changes.length; i < l; i++) {
                var key = changes[i];

                this.trigger('change:' + key, this, getNested(current, key), options);

                var fields = key.split(separator);

                //Trigger change events for parent keys with wildcard (*) notation
                for(var n = fields.length - 1; n > 0; n--) {
                  var parentKey = _.first(fields, n).join(separator),
                      wildcardKey = parentKey + separator + '*';

                  this.trigger('change:' + wildcardKey, this, getNested(current, parentKey), options);
                }
                //</custom code>
              }
            }

            if (changing) return this;
            if (!silent) {
              while (this._pending) {
                this._pending = false;
                this.trigger('change', this, options);
              }
            }
            this._pending = false;
            this._changing = false;
            return this;
        },

        // Clear all attributes on the model, firing `"change"` unless you choose
        // to silence it.
        clear: function(options) {
          var attrs = {};
          var shallowAttributes = objToPaths(this.attributes);
          for (var key in shallowAttributes) attrs[key] = void 0;
          return this.set(attrs, _.extend({}, options, {unset: true}));
        },

        // Determine if the model has changed since the last `"change"` event.
        // If you specify an attribute name, determine if that attribute has changed.
        hasChanged: function(attr) {
          if (attr == null) return !_.isEmpty(this.changed);
          return getNested(this.changed, attr) !== undefined;
        },

        // Return an object containing all the attributes that have changed, or
        // false if there are no changed attributes. Useful for determining what
        // parts of a view need to be updated and/or what attributes need to be
        // persisted to the server. Unset attributes will be set to undefined.
        // You can also pass an attributes object to diff against the model,
        // determining if there *would be* a change.
        changedAttributes: function(diff) {
          //<custom code>: objToPaths
          if (!diff) return this.hasChanged() ? objToPaths(this.changed) : false;
          //</custom code>

          var old = this._changing ? this._previousAttributes : this.attributes;
          
          //<custom code>
          diff = objToPaths(diff);
          old = objToPaths(old);
          //</custom code>

          var val, changed = false;
          for (var attr in diff) {
            if (_.isEqual(old[attr], (val = diff[attr]))) continue;
            (changed || (changed = {}))[attr] = val;
          }
          return changed;
        },

        // Get the previous value of an attribute, recorded at the time the last
        // `"change"` event was fired.
        previous: function(attr) {
          if (attr == null || !this._previousAttributes) return null;

          //<custom code>
          return getNested(this._previousAttributes, attr);
          //</custom code>
        },

        // Get all of the attributes of the model at the time of the previous
        // `"change"` event.
        previousAttributes: function() {
          //<custom code>
          return _.deepClone(this._previousAttributes);
          //</custom code>
        }
    });


    //Config; override in your app to customise
    DeepModel.keyPathSeparator = '.';


    //Exports
    Backbone.DeepModel = DeepModel;

    //For use in NodeJS
    if (typeof module != 'undefined') module.exports = DeepModel;
    
    return Backbone;

}));


}).call(global, module, undefined, undefined);

},{"backbone":63,"underscore":84}],63:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};//     Backbone.js 1.2.3

//     (c) 2010-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(factory) {

  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
  // We use `self` instead of `window` for `WebWorker` support.
  var root = (typeof self == 'object' && self.self == self && self) ||
            (typeof global == 'object' && global.global == global && global);

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore'), $;
    try { $ = require('jquery'); } catch(e) {}
    factory(root, exports, _, $);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create a local reference to a common array method we'll want to use later.
  var slice = Array.prototype.slice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.2.3';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... this will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Proxy Backbone class methods to Underscore functions, wrapping the model's
  // `attributes` object or collection's `models` array behind the scenes.
  //
  // collection.filter(function(model) { return model.get('age') > 10 });
  // collection.each(this.addView);
  //
  // `Function#apply` can be slow so we use the method's arg count, if we know it.
  var addMethod = function(length, method, attribute) {
    switch (length) {
      case 1: return function() {
        return _[method](this[attribute]);
      };
      case 2: return function(value) {
        return _[method](this[attribute], value);
      };
      case 3: return function(iteratee, context) {
        return _[method](this[attribute], cb(iteratee, this), context);
      };
      case 4: return function(iteratee, defaultVal, context) {
        return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
      };
      default: return function() {
        var args = slice.call(arguments);
        args.unshift(this[attribute]);
        return _[method].apply(_, args);
      };
    }
  };
  var addUnderscoreMethods = function(Class, methods, attribute) {
    _.each(methods, function(length, method) {
      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
    });
  };

  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
  var cb = function(iteratee, instance) {
    if (_.isFunction(iteratee)) return iteratee;
    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
    if (_.isString(iteratee)) return function(model) { return model.get(iteratee); };
    return iteratee;
  };
  var modelMatcher = function(attrs) {
    var matcher = _.matches(attrs);
    return function(model) {
      return matcher(model.attributes);
    };
  };

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // a custom event channel. You may bind a callback to an event with `on` or
  // remove with `off`; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {};

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Iterates over the standard `event, callback` (as well as the fancy multiple
  // space-separated events `"change blur", callback` and jQuery-style event
  // maps `{event: callback}`).
  var eventsApi = function(iteratee, events, name, callback, opts) {
    var i = 0, names;
    if (name && typeof name === 'object') {
      // Handle event maps.
      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
      for (names = _.keys(name); i < names.length ; i++) {
        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
      }
    } else if (name && eventSplitter.test(name)) {
      // Handle space separated event names by delegating them individually.
      for (names = name.split(eventSplitter); i < names.length; i++) {
        events = iteratee(events, names[i], callback, opts);
      }
    } else {
      // Finally, standard events.
      events = iteratee(events, name, callback, opts);
    }
    return events;
  };

  // Bind an event to a `callback` function. Passing `"all"` will bind
  // the callback to all events fired.
  Events.on = function(name, callback, context) {
    return internalOn(this, name, callback, context);
  };

  // Guard the `listening` argument from the public API.
  var internalOn = function(obj, name, callback, context, listening) {
    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
        context: context,
        ctx: obj,
        listening: listening
    });

    if (listening) {
      var listeners = obj._listeners || (obj._listeners = {});
      listeners[listening.id] = listening;
    }

    return obj;
  };

  // Inversion-of-control versions of `on`. Tell *this* object to listen to
  // an event in another object... keeping track of what it's listening to
  // for easier unbinding later.
  Events.listenTo =  function(obj, name, callback) {
    if (!obj) return this;
    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
    var listeningTo = this._listeningTo || (this._listeningTo = {});
    var listening = listeningTo[id];

    // This object is not listening to any other events on `obj` yet.
    // Setup the necessary references to track the listening callbacks.
    if (!listening) {
      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
      listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
    }

    // Bind callbacks on obj, and keep track of them on listening.
    internalOn(obj, name, callback, this, listening);
    return this;
  };

  // The reducing API that adds a callback to the `events` object.
  var onApi = function(events, name, callback, options) {
    if (callback) {
      var handlers = events[name] || (events[name] = []);
      var context = options.context, ctx = options.ctx, listening = options.listening;
      if (listening) listening.count++;

      handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
    }
    return events;
  };

  // Remove one or many callbacks. If `context` is null, removes all
  // callbacks with that function. If `callback` is null, removes all
  // callbacks for the event. If `name` is null, removes all bound
  // callbacks for all events.
  Events.off =  function(name, callback, context) {
    if (!this._events) return this;
    this._events = eventsApi(offApi, this._events, name, callback, {
        context: context,
        listeners: this._listeners
    });
    return this;
  };

  // Tell this object to stop listening to either specific events ... or
  // to every object it's currently listening to.
  Events.stopListening =  function(obj, name, callback) {
    var listeningTo = this._listeningTo;
    if (!listeningTo) return this;

    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

    for (var i = 0; i < ids.length; i++) {
      var listening = listeningTo[ids[i]];

      // If listening doesn't exist, this object is not currently
      // listening to obj. Break out early.
      if (!listening) break;

      listening.obj.off(name, callback, this);
    }
    if (_.isEmpty(listeningTo)) this._listeningTo = void 0;

    return this;
  };

  // The reducing API that removes a callback from the `events` object.
  var offApi = function(events, name, callback, options) {
    if (!events) return;

    var i = 0, listening;
    var context = options.context, listeners = options.listeners;

    // Delete all events listeners and "drop" events.
    if (!name && !callback && !context) {
      var ids = _.keys(listeners);
      for (; i < ids.length; i++) {
        listening = listeners[ids[i]];
        delete listeners[listening.id];
        delete listening.listeningTo[listening.objId];
      }
      return;
    }

    var names = name ? [name] : _.keys(events);
    for (; i < names.length; i++) {
      name = names[i];
      var handlers = events[name];

      // Bail out if there are no events stored.
      if (!handlers) break;

      // Replace events if there are any remaining.  Otherwise, clean up.
      var remaining = [];
      for (var j = 0; j < handlers.length; j++) {
        var handler = handlers[j];
        if (
          callback && callback !== handler.callback &&
            callback !== handler.callback._callback ||
              context && context !== handler.context
        ) {
          remaining.push(handler);
        } else {
          listening = handler.listening;
          if (listening && --listening.count === 0) {
            delete listeners[listening.id];
            delete listening.listeningTo[listening.objId];
          }
        }
      }

      // Update tail event if the list has any events.  Otherwise, clean up.
      if (remaining.length) {
        events[name] = remaining;
      } else {
        delete events[name];
      }
    }
    if (_.size(events)) return events;
  };

  // Bind an event to only be triggered a single time. After the first time
  // the callback is invoked, its listener will be removed. If multiple events
  // are passed in using the space-separated syntax, the handler will fire
  // once for each event, not once for a combination of all events.
  Events.once =  function(name, callback, context) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
    return this.on(events, void 0, context);
  };

  // Inversion-of-control versions of `once`.
  Events.listenToOnce =  function(obj, name, callback) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
    return this.listenTo(obj, events);
  };

  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
  // `offer` unbinds the `onceWrapper` after it has been called.
  var onceMap = function(map, name, callback, offer) {
    if (callback) {
      var once = map[name] = _.once(function() {
        offer(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
    }
    return map;
  };

  // Trigger one or many events, firing all bound callbacks. Callbacks are
  // passed the same arguments as `trigger` is, apart from the event name
  // (unless you're listening on `"all"`, which will cause your callback to
  // receive the true name of the event as the first argument).
  Events.trigger =  function(name) {
    if (!this._events) return this;

    var length = Math.max(0, arguments.length - 1);
    var args = Array(length);
    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

    eventsApi(triggerApi, this._events, name, void 0, args);
    return this;
  };

  // Handles triggering the appropriate event callbacks.
  var triggerApi = function(objEvents, name, cb, args) {
    if (objEvents) {
      var events = objEvents[name];
      var allEvents = objEvents.all;
      if (events && allEvents) allEvents = allEvents.slice();
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, [name].concat(args));
    }
    return objEvents;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId(this.cidPrefix);
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // The prefix is used to create the client id which is used to identify models locally.
    // You may want to override this if you're experiencing name clashes with model ids.
    cidPrefix: 'c',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Special-cased proxy to underscore's `_.matches` method.
    matches: function(attrs) {
      return !!_.iteratee(attrs, this)(this.attributes);
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      var unset      = options.unset;
      var silent     = options.silent;
      var changes    = [];
      var changing   = this._changing;
      this._changing = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }

      var current = this.attributes;
      var changed = this.changed;
      var prev    = this._previousAttributes;

      // For each `set` attribute, update or delete the current value.
      for (var attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          changed[attr] = val;
        } else {
          delete changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Update the `id`.
      this.id = this.get(this.idAttribute);

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0; i < changes.length; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      var changed = {};
      for (var attr in diff) {
        var val = diff[attr];
        if (_.isEqual(old[attr], val)) continue;
        changed[attr] = val;
      }
      return _.size(changed) ? changed : false;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server, merging the response with the model's
    // local attributes. Any changed attributes will trigger a "change" event.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (!model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true, parse: true}, options);
      var wait = options.wait;

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      var model = this;
      var success = options.success;
      var attributes = this.attributes;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
        if (serverAttrs && !model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      // Set temporary attributes if `{wait: true}` to properly find new ids.
      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

      var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch' && !options.attrs) options.attrs = attrs;
      var xhr = this.sync(method, this, options);

      // Restore attributes.
      this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;
      var wait = options.wait;

      var destroy = function() {
        model.stopListening();
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (wait) destroy();
        if (success) success.call(options.context, model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      var xhr = false;
      if (this.isNew()) {
        _.defer(options.success);
      } else {
        wrapError(this, options);
        xhr = this.sync('delete', this, options);
      }
      if (!wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      var id = this.get(this.idAttribute);
      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.defaults({validate: true}, options));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model, mapped to the
  // number of arguments they take.
  var modelMethods = { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
      omit: 0, chain: 1, isEmpty: 1 };

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  addUnderscoreMethods(Model, modelMethods, 'attributes');

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analogous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Splices `insert` into `array` at index `at`.
  var splice = function(array, insert, at) {
    at = Math.min(Math.max(at, 0), array.length);
    var tail = Array(array.length - at);
    var length = insert.length;
    for (var i = 0; i < tail.length; i++) tail[i] = array[i + at];
    for (i = 0; i < length; i++) array[i + at] = insert[i];
    for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
  };

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model) { return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set. `models` may be Backbone
    // Models or raw JavaScript objects to be converted to Models, or any
    // combination of the two.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      options = _.extend({}, options);
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      var removed = this._removeModels(models, options);
      if (!options.silent && removed) this.trigger('update', this, options);
      return singular ? removed[0] : removed;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      if (models == null) return;

      options = _.defaults({}, options, setOptions);
      if (options.parse && !this._isModel(models)) models = this.parse(models, options);

      var singular = !_.isArray(models);
      models = singular ? [models] : models.slice();

      var at = options.at;
      if (at != null) at = +at;
      if (at < 0) at += this.length + 1;

      var set = [];
      var toAdd = [];
      var toRemove = [];
      var modelMap = {};

      var add = options.add;
      var merge = options.merge;
      var remove = options.remove;

      var sort = false;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      var model;
      for (var i = 0; i < models.length; i++) {
        model = models[i];

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        var existing = this.get(model);
        if (existing) {
          if (merge && model !== existing) {
            var attrs = this._isModel(model) ? model.attributes : model;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
          }
          if (!modelMap[existing.cid]) {
            modelMap[existing.cid] = true;
            set.push(existing);
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(model, options);
          if (model) {
            toAdd.push(model);
            this._addReference(model, options);
            modelMap[model.cid] = true;
            set.push(model);
          }
        }
      }

      // Remove stale models.
      if (remove) {
        for (i = 0; i < this.length; i++) {
          model = this.models[i];
          if (!modelMap[model.cid]) toRemove.push(model);
        }
        if (toRemove.length) this._removeModels(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      var orderChanged = false;
      var replace = !sortable && add && remove;
      if (set.length && replace) {
        orderChanged = this.length != set.length || _.some(this.models, function(model, index) {
          return model !== set[index];
        });
        this.models.length = 0;
        splice(this.models, set, 0);
        this.length = this.models.length;
      } else if (toAdd.length) {
        if (sortable) sort = true;
        splice(this.models, toAdd, at == null ? this.length : at);
        this.length = this.models.length;
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0; i < toAdd.length; i++) {
          if (at != null) options.index = at + i;
          model = toAdd[i];
          model.trigger('add', model, this, options);
        }
        if (sort || orderChanged) this.trigger('sort', this, options);
        if (toAdd.length || toRemove.length) this.trigger('update', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options = options ? _.clone(options) : {};
      for (var i = 0; i < this.models.length; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      return this.remove(model, options);
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      return this.remove(model, options);
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      var id = this.modelId(this._isModel(obj) ? obj.attributes : obj);
      return this._byId[obj] || this._byId[id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      if (index < 0) index += this.length;
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      return this[first ? 'find' : 'filter'](attrs);
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      var comparator = this.comparator;
      if (!comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      var length = comparator.length;
      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

      // Run sort based on type of `comparator`.
      if (length === 1 || _.isString(comparator)) {
        this.models = this.sortBy(comparator);
      } else {
        this.models.sort(comparator);
      }
      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success.call(options.context, collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      var wait = options.wait;
      model = this._prepareModel(model, options);
      if (!model) return false;
      if (!wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp, callbackOpts) {
        if (wait) collection.add(model, callbackOpts);
        if (success) success.call(callbackOpts.context, model, resp, callbackOpts);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models, {
        model: this.model,
        comparator: this.comparator
      });
    },

    // Define how to uniquely identify models in the collection.
    modelId: function (attrs) {
      return attrs[this.model.prototype.idAttribute || 'id'];
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (this._isModel(attrs)) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method called by both remove and set.
    _removeModels: function(models, options) {
      var removed = [];
      for (var i = 0; i < models.length; i++) {
        var model = this.get(models[i]);
        if (!model) continue;

        var index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;

        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }

        removed.push(model);
        this._removeReference(model, options);
      }
      return removed.length ? removed : false;
    },

    // Method for checking whether an object should be considered a model for
    // the purposes of adding to the collection.
    _isModel: function (model) {
      return model instanceof Model;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      var id = this.modelId(model.attributes);
      if (id != null) this._byId[id] = model;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      delete this._byId[model.cid];
      var id = this.modelId(model.attributes);
      if (id != null) delete this._byId[id];
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (event === 'change') {
        var prevId = this.modelId(model.previousAttributes());
        var id = this.modelId(model.attributes);
        if (prevId !== id) {
          if (prevId != null) delete this._byId[prevId];
          if (id != null) this._byId[id] = model;
        }
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var collectionMethods = { forEach: 3, each: 3, map: 3, collect: 3, reduce: 4,
      foldl: 4, inject: 4, reduceRight: 4, foldr: 4, find: 3, detect: 3, filter: 3,
      select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
      contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
      head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
      without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
      isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
      sortBy: 3, indexBy: 3};

  // Mix in each Underscore method as a proxy to `Collection#models`.
  addUnderscoreMethods(Collection, collectionMethods, 'models');

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be set as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this._removeElement();
      this.stopListening();
      return this;
    },

    // Remove this view's element from the document and all event listeners
    // attached to it. Exposed for subclasses using an alternative DOM
    // manipulation API.
    _removeElement: function() {
      this.$el.remove();
    },

    // Change the view's element (`this.el` property) and re-delegate the
    // view's events on the new element.
    setElement: function(element) {
      this.undelegateEvents();
      this._setElement(element);
      this.delegateEvents();
      return this;
    },

    // Creates the `this.el` and `this.$el` references for this view using the
    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
    // context or an element. Subclasses can override this to utilize an
    // alternative DOM manipulation API and are only required to set the
    // `this.el` property.
    _setElement: function(el) {
      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
      this.el = this.$el[0];
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    delegateEvents: function(events) {
      events || (events = _.result(this, 'events'));
      if (!events) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[method];
        if (!method) continue;
        var match = key.match(delegateEventSplitter);
        this.delegate(match[1], match[2], _.bind(method, this));
      }
      return this;
    },

    // Add a single event listener to the view's element (or a child element
    // using `selector`). This only works for delegate-able events: not `focus`,
    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
    delegate: function(eventName, selector, listener) {
      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Clears all callbacks previously bound to the view by `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // A finer-grained `undelegateEvents` for removing a single delegated event.
    // `selector` and `listener` are both optional.
    undelegate: function(eventName, selector, listener) {
      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Produces a DOM element to be assigned to your view. Exposed for
    // subclasses using an alternative DOM manipulation API.
    _createElement: function(tagName) {
      return document.createElement(tagName);
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        this.setElement(this._createElement(_.result(this, 'tagName')));
        this._setAttributes(attrs);
      } else {
        this.setElement(_.result(this, 'el'));
      }
    },

    // Set attributes from a hash on this view's element.  Exposed for
    // subclasses using an alternative DOM manipulation API.
    _setAttributes: function(attributes) {
      this.$el.attr(attributes);
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // Pass along `textStatus` and `errorThrown` from jQuery.
    var error = options.error;
    options.error = function(xhr, textStatus, errorThrown) {
      options.textStatus = textStatus;
      options.errorThrown = errorThrown;
      if (error) error.call(options.context, xhr, textStatus, errorThrown);
    };

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        if (router.execute(callback, args, name) !== false) {
          router.trigger.apply(router, ['route:' + name].concat(args));
          router.trigger('route', name, args);
          Backbone.history.trigger('route', router, name, args);
        }
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args, name) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    this.checkUrl = _.bind(this.checkUrl, this);

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
      return path === this.root && !this.getSearch();
    },

    // Does the pathname match the root?
    matchRoot: function() {
      var path = this.decodeFragment(this.location.pathname);
      var root = path.slice(0, this.root.length - 1) + '/';
      return root === this.root;
    },

    // Unicode characters in `location.pathname` are percent encoded so they're
    // decoded for comparison. `%25` should not be decoded since it may be part
    // of an encoded parameter.
    decodeFragment: function(fragment) {
      return decodeURI(fragment.replace(/%25/g, '%2525'));
    },

    // In IE6, the hash fragment and search params are incorrect if the
    // fragment contains `?`.
    getSearch: function() {
      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
      return match ? match[0] : '';
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the pathname and search params, without the root.
    getPath: function() {
      var path = this.decodeFragment(
        this.location.pathname + this.getSearch()
      ).slice(this.root.length - 1);
      return path.charAt(0) === '/' ? path.slice(1) : path;
    },

    // Get the cross-browser normalized URL fragment from the path or hash.
    getFragment: function(fragment) {
      if (fragment == null) {
        if (this._usePushState || !this._wantsHashChange) {
          fragment = this.getPath();
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error('Backbone.history has already been started');
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._hasHashChange   = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.history && this.history.pushState);
      this._usePushState    = this._wantsPushState && this._hasPushState;
      this.fragment         = this.getFragment();

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          var root = this.root.slice(0, -1) || '/';
          this.location.replace(root + '#' + this.getPath());
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot()) {
          this.navigate(this.getHash(), {replace: true});
        }

      }

      // Proxy an iframe to handle location events if the browser doesn't
      // support the `hashchange` event, HTML5 history, or the user wants
      // `hashChange` but not `pushState`.
      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
        this.iframe = document.createElement('iframe');
        this.iframe.src = 'javascript:0';
        this.iframe.style.display = 'none';
        this.iframe.tabIndex = -1;
        var body = document.body;
        // Using `appendChild` will throw on IE < 9 if the document is not ready.
        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
        iWindow.document.open();
        iWindow.document.close();
        iWindow.location.hash = '#' + this.fragment;
      }

      // Add a cross-platform `addEventListener` shim for older browsers.
      var addEventListener = window.addEventListener || function (eventName, listener) {
        return attachEvent('on' + eventName, listener);
      };

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._usePushState) {
        addEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        addEventListener('hashchange', this.checkUrl, false);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      // Add a cross-platform `removeEventListener` shim for older browsers.
      var removeEventListener = window.removeEventListener || function (eventName, listener) {
        return detachEvent('on' + eventName, listener);
      };

      // Remove window listeners.
      if (this._usePushState) {
        removeEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        removeEventListener('hashchange', this.checkUrl, false);
      }

      // Clean up the iframe if necessary.
      if (this.iframe) {
        document.body.removeChild(this.iframe);
        this.iframe = null;
      }

      // Some environments will throw when clearing an undefined interval.
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();

      // If the user pressed the back button, the iframe's hash will have
      // changed and we should use that for comparison.
      if (current === this.fragment && this.iframe) {
        current = this.getHash(this.iframe.contentWindow);
      }

      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      // If the root doesn't match, no routes can match either.
      if (!this.matchRoot()) return false;
      fragment = this.fragment = this.getFragment(fragment);
      return _.some(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      // Normalize the fragment.
      fragment = this.getFragment(fragment || '');

      // Don't include a trailing slash on the root.
      var root = this.root;
      if (fragment === '' || fragment.charAt(0) === '?') {
        root = root.slice(0, -1) || '/';
      }
      var url = root + fragment;

      // Strip the hash and decode for matching.
      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._usePushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getHash(this.iframe.contentWindow))) {
          var iWindow = this.iframe.contentWindow;

          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if (!options.replace) {
            iWindow.document.open();
            iWindow.document.close();
          }

          this._updateHash(iWindow.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent` constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error.call(options.context, model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));

},{"jquery":83,"underscore":84}],64:[function(require,module,exports){

// not implemented
// The reason for having an empty file and not throwing is to allow
// untraditional implementation of this module.

},{}],65:[function(require,module,exports){
"use strict";
/*globals Handlebars: true */
var Handlebars = require("./handlebars.runtime")["default"];

// Compiler imports
var AST = require("./handlebars/compiler/ast")["default"];
var Parser = require("./handlebars/compiler/base").parser;
var parse = require("./handlebars/compiler/base").parse;
var Compiler = require("./handlebars/compiler/compiler").Compiler;
var compile = require("./handlebars/compiler/compiler").compile;
var precompile = require("./handlebars/compiler/compiler").precompile;
var JavaScriptCompiler = require("./handlebars/compiler/javascript-compiler")["default"];

var _create = Handlebars.create;
var create = function() {
  var hb = _create();

  hb.compile = function(input, options) {
    return compile(input, options, hb);
  };
  hb.precompile = function (input, options) {
    return precompile(input, options, hb);
  };

  hb.AST = AST;
  hb.Compiler = Compiler;
  hb.JavaScriptCompiler = JavaScriptCompiler;
  hb.Parser = Parser;
  hb.parse = parse;

  return hb;
};

Handlebars = create();
Handlebars.create = create;

Handlebars['default'] = Handlebars;

exports["default"] = Handlebars;
},{"./handlebars.runtime":66,"./handlebars/compiler/ast":68,"./handlebars/compiler/base":69,"./handlebars/compiler/compiler":70,"./handlebars/compiler/javascript-compiler":72}],66:[function(require,module,exports){
"use strict";
/*globals Handlebars: true */
var base = require("./handlebars/base");

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)
var SafeString = require("./handlebars/safe-string")["default"];
var Exception = require("./handlebars/exception")["default"];
var Utils = require("./handlebars/utils");
var runtime = require("./handlebars/runtime");

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
var create = function() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = SafeString;
  hb.Exception = Exception;
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function(spec) {
    return runtime.template(spec, hb);
  };

  return hb;
};

var Handlebars = create();
Handlebars.create = create;

Handlebars['default'] = Handlebars;

exports["default"] = Handlebars;
},{"./handlebars/base":67,"./handlebars/exception":76,"./handlebars/runtime":77,"./handlebars/safe-string":78,"./handlebars/utils":79}],67:[function(require,module,exports){
"use strict";
var Utils = require("./utils");
var Exception = require("./exception")["default"];

var VERSION = "2.0.0";
exports.VERSION = VERSION;var COMPILER_REVISION = 6;
exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1'
};
exports.REVISION_CHANGES = REVISION_CHANGES;
var isArray = Utils.isArray,
    isFunction = Utils.isFunction,
    toString = Utils.toString,
    objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials) {
  this.helpers = helpers || {};
  this.partials = partials || {};

  registerDefaultHelpers(this);
}

exports.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: logger,
  log: log,

  registerHelper: function(name, fn) {
    if (toString.call(name) === objectType) {
      if (fn) { throw new Exception('Arg not supported with multiple helpers'); }
      Utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function(name) {
    delete this.helpers[name];
  },

  registerPartial: function(name, partial) {
    if (toString.call(name) === objectType) {
      Utils.extend(this.partials,  name);
    } else {
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function(name) {
    delete this.partials[name];
  }
};

function registerDefaultHelpers(instance) {
  instance.registerHelper('helperMissing', function(/* [args, ]options */) {
    if(arguments.length === 1) {
      // A missing field in a {{foo}} constuct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new Exception("Missing helper: '" + arguments[arguments.length-1].name + "'");
    }
  });

  instance.registerHelper('blockHelperMissing', function(context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if(context === true) {
      return fn(this);
    } else if(context === false || context == null) {
      return inverse(this);
    } else if (isArray(context)) {
      if(context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = createFrame(options.data);
        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
        options = {data: data};
      }

      return fn(context, options);
    }
  });

  instance.registerHelper('each', function(context, options) {
    if (!options) {
      throw new Exception('Must pass iterator to #each');
    }

    var fn = options.fn, inverse = options.inverse;
    var i = 0, ret = "", data;

    var contextPath;
    if (options.data && options.ids) {
      contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (isFunction(context)) { context = context.call(this); }

    if (options.data) {
      data = createFrame(options.data);
    }

    if(context && typeof context === 'object') {
      if (isArray(context)) {
        for(var j = context.length; i<j; i++) {
          if (data) {
            data.index = i;
            data.first = (i === 0);
            data.last  = (i === (context.length-1));

            if (contextPath) {
              data.contextPath = contextPath + i;
            }
          }
          ret = ret + fn(context[i], { data: data });
        }
      } else {
        for(var key in context) {
          if(context.hasOwnProperty(key)) {
            if(data) {
              data.key = key;
              data.index = i;
              data.first = (i === 0);

              if (contextPath) {
                data.contextPath = contextPath + key;
              }
            }
            ret = ret + fn(context[key], {data: data});
            i++;
          }
        }
      }
    }

    if(i === 0){
      ret = inverse(this);
    }

    return ret;
  });

  instance.registerHelper('if', function(conditional, options) {
    if (isFunction(conditional)) { conditional = conditional.call(this); }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function(conditional, options) {
    return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
  });

  instance.registerHelper('with', function(context, options) {
    if (isFunction(context)) { context = context.call(this); }

    var fn = options.fn;

    if (!Utils.isEmpty(context)) {
      if (options.data && options.ids) {
        var data = createFrame(options.data);
        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
        options = {data:data};
      }

      return fn(context, options);
    } else {
      return options.inverse(this);
    }
  });

  instance.registerHelper('log', function(message, options) {
    var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
    instance.log(level, message);
  });

  instance.registerHelper('lookup', function(obj, field) {
    return obj && obj[field];
  });
}

var logger = {
  methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

  // State enum
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  level: 3,

  // can be overridden in the host environment
  log: function(level, message) {
    if (logger.level <= level) {
      var method = logger.methodMap[level];
      if (typeof console !== 'undefined' && console[method]) {
        console[method].call(console, message);
      }
    }
  }
};
exports.logger = logger;
var log = logger.log;
exports.log = log;
var createFrame = function(object) {
  var frame = Utils.extend({}, object);
  frame._parent = object;
  return frame;
};
exports.createFrame = createFrame;
},{"./exception":76,"./utils":79}],68:[function(require,module,exports){
"use strict";
var Exception = require("../exception")["default"];

function LocationInfo(locInfo) {
  locInfo = locInfo || {};
  this.firstLine   = locInfo.first_line;
  this.firstColumn = locInfo.first_column;
  this.lastColumn  = locInfo.last_column;
  this.lastLine    = locInfo.last_line;
}

var AST = {
  ProgramNode: function(statements, strip, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "program";
    this.statements = statements;
    this.strip = strip;
  },

  MustacheNode: function(rawParams, hash, open, strip, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "mustache";
    this.strip = strip;

    // Open may be a string parsed from the parser or a passed boolean flag
    if (open != null && open.charAt) {
      // Must use charAt to support IE pre-10
      var escapeFlag = open.charAt(3) || open.charAt(2);
      this.escaped = escapeFlag !== '{' && escapeFlag !== '&';
    } else {
      this.escaped = !!open;
    }

    if (rawParams instanceof AST.SexprNode) {
      this.sexpr = rawParams;
    } else {
      // Support old AST API
      this.sexpr = new AST.SexprNode(rawParams, hash);
    }

    // Support old AST API that stored this info in MustacheNode
    this.id = this.sexpr.id;
    this.params = this.sexpr.params;
    this.hash = this.sexpr.hash;
    this.eligibleHelper = this.sexpr.eligibleHelper;
    this.isHelper = this.sexpr.isHelper;
  },

  SexprNode: function(rawParams, hash, locInfo) {
    LocationInfo.call(this, locInfo);

    this.type = "sexpr";
    this.hash = hash;

    var id = this.id = rawParams[0];
    var params = this.params = rawParams.slice(1);

    // a mustache is definitely a helper if:
    // * it is an eligible helper, and
    // * it has at least one parameter or hash segment
    this.isHelper = !!(params.length || hash);

    // a mustache is an eligible helper if:
    // * its id is simple (a single part, not `this` or `..`)
    this.eligibleHelper = this.isHelper || id.isSimple;

    // if a mustache is an eligible helper but not a definite
    // helper, it is ambiguous, and will be resolved in a later
    // pass or at runtime.
  },

  PartialNode: function(partialName, context, hash, strip, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type         = "partial";
    this.partialName  = partialName;
    this.context      = context;
    this.hash = hash;
    this.strip = strip;

    this.strip.inlineStandalone = true;
  },

  BlockNode: function(mustache, program, inverse, strip, locInfo) {
    LocationInfo.call(this, locInfo);

    this.type = 'block';
    this.mustache = mustache;
    this.program  = program;
    this.inverse  = inverse;
    this.strip = strip;

    if (inverse && !program) {
      this.isInverse = true;
    }
  },

  RawBlockNode: function(mustache, content, close, locInfo) {
    LocationInfo.call(this, locInfo);

    if (mustache.sexpr.id.original !== close) {
      throw new Exception(mustache.sexpr.id.original + " doesn't match " + close, this);
    }

    content = new AST.ContentNode(content, locInfo);

    this.type = 'block';
    this.mustache = mustache;
    this.program = new AST.ProgramNode([content], {}, locInfo);
  },

  ContentNode: function(string, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "content";
    this.original = this.string = string;
  },

  HashNode: function(pairs, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "hash";
    this.pairs = pairs;
  },

  IdNode: function(parts, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "ID";

    var original = "",
        dig = [],
        depth = 0,
        depthString = '';

    for(var i=0,l=parts.length; i<l; i++) {
      var part = parts[i].part;
      original += (parts[i].separator || '') + part;

      if (part === ".." || part === "." || part === "this") {
        if (dig.length > 0) {
          throw new Exception("Invalid path: " + original, this);
        } else if (part === "..") {
          depth++;
          depthString += '../';
        } else {
          this.isScoped = true;
        }
      } else {
        dig.push(part);
      }
    }

    this.original = original;
    this.parts    = dig;
    this.string   = dig.join('.');
    this.depth    = depth;
    this.idName   = depthString + this.string;

    // an ID is simple if it only has one part, and that part is not
    // `..` or `this`.
    this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;

    this.stringModeValue = this.string;
  },

  PartialNameNode: function(name, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "PARTIAL_NAME";
    this.name = name.original;
  },

  DataNode: function(id, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "DATA";
    this.id = id;
    this.stringModeValue = id.stringModeValue;
    this.idName = '@' + id.stringModeValue;
  },

  StringNode: function(string, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "STRING";
    this.original =
      this.string =
      this.stringModeValue = string;
  },

  NumberNode: function(number, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "NUMBER";
    this.original =
      this.number = number;
    this.stringModeValue = Number(number);
  },

  BooleanNode: function(bool, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "BOOLEAN";
    this.bool = bool;
    this.stringModeValue = bool === "true";
  },

  CommentNode: function(comment, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "comment";
    this.comment = comment;

    this.strip = {
      inlineStandalone: true
    };
  }
};


// Must be exported as an object rather than the root of the module as the jison lexer
// most modify the object to operate properly.
exports["default"] = AST;
},{"../exception":76}],69:[function(require,module,exports){
"use strict";
var parser = require("./parser")["default"];
var AST = require("./ast")["default"];
var Helpers = require("./helpers");
var extend = require("../utils").extend;

exports.parser = parser;

var yy = {};
extend(yy, Helpers, AST);

function parse(input) {
  // Just return if an already-compile AST was passed in.
  if (input.constructor === AST.ProgramNode) { return input; }

  parser.yy = yy;

  return parser.parse(input);
}

exports.parse = parse;
},{"../utils":79,"./ast":68,"./helpers":71,"./parser":73}],70:[function(require,module,exports){
"use strict";
var Exception = require("../exception")["default"];
var isArray = require("../utils").isArray;

var slice = [].slice;

function Compiler() {}

exports.Compiler = Compiler;// the foundHelper register will disambiguate helper lookup from finding a
// function in a context. This is necessary for mustache compatibility, which
// requires that context functions in blocks are evaluated by blockHelperMissing,
// and then proceed as if the resulting value was provided to blockHelperMissing.

Compiler.prototype = {
  compiler: Compiler,

  equals: function(other) {
    var len = this.opcodes.length;
    if (other.opcodes.length !== len) {
      return false;
    }

    for (var i = 0; i < len; i++) {
      var opcode = this.opcodes[i],
          otherOpcode = other.opcodes[i];
      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
        return false;
      }
    }

    // We know that length is the same between the two arrays because they are directly tied
    // to the opcode behavior above.
    len = this.children.length;
    for (i = 0; i < len; i++) {
      if (!this.children[i].equals(other.children[i])) {
        return false;
      }
    }

    return true;
  },

  guid: 0,

  compile: function(program, options) {
    this.opcodes = [];
    this.children = [];
    this.depths = {list: []};
    this.options = options;
    this.stringParams = options.stringParams;
    this.trackIds = options.trackIds;

    // These changes will propagate to the other compiler components
    var knownHelpers = this.options.knownHelpers;
    this.options.knownHelpers = {
      'helperMissing': true,
      'blockHelperMissing': true,
      'each': true,
      'if': true,
      'unless': true,
      'with': true,
      'log': true,
      'lookup': true
    };
    if (knownHelpers) {
      for (var name in knownHelpers) {
        this.options.knownHelpers[name] = knownHelpers[name];
      }
    }

    return this.accept(program);
  },

  accept: function(node) {
    return this[node.type](node);
  },

  program: function(program) {
    var statements = program.statements;

    for(var i=0, l=statements.length; i<l; i++) {
      this.accept(statements[i]);
    }
    this.isSimple = l === 1;

    this.depths.list = this.depths.list.sort(function(a, b) {
      return a - b;
    });

    return this;
  },

  compileProgram: function(program) {
    var result = new this.compiler().compile(program, this.options);
    var guid = this.guid++, depth;

    this.usePartial = this.usePartial || result.usePartial;

    this.children[guid] = result;

    for(var i=0, l=result.depths.list.length; i<l; i++) {
      depth = result.depths.list[i];

      if(depth < 2) { continue; }
      else { this.addDepth(depth - 1); }
    }

    return guid;
  },

  block: function(block) {
    var mustache = block.mustache,
        program = block.program,
        inverse = block.inverse;

    if (program) {
      program = this.compileProgram(program);
    }

    if (inverse) {
      inverse = this.compileProgram(inverse);
    }

    var sexpr = mustache.sexpr;
    var type = this.classifySexpr(sexpr);

    if (type === "helper") {
      this.helperSexpr(sexpr, program, inverse);
    } else if (type === "simple") {
      this.simpleSexpr(sexpr);

      // now that the simple mustache is resolved, we need to
      // evaluate it by executing `blockHelperMissing`
      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);
      this.opcode('emptyHash');
      this.opcode('blockValue', sexpr.id.original);
    } else {
      this.ambiguousSexpr(sexpr, program, inverse);

      // now that the simple mustache is resolved, we need to
      // evaluate it by executing `blockHelperMissing`
      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);
      this.opcode('emptyHash');
      this.opcode('ambiguousBlockValue');
    }

    this.opcode('append');
  },

  hash: function(hash) {
    var pairs = hash.pairs, i, l;

    this.opcode('pushHash');

    for(i=0, l=pairs.length; i<l; i++) {
      this.pushParam(pairs[i][1]);
    }
    while(i--) {
      this.opcode('assignToHash', pairs[i][0]);
    }
    this.opcode('popHash');
  },

  partial: function(partial) {
    var partialName = partial.partialName;
    this.usePartial = true;

    if (partial.hash) {
      this.accept(partial.hash);
    } else {
      this.opcode('push', 'undefined');
    }

    if (partial.context) {
      this.accept(partial.context);
    } else {
      this.opcode('getContext', 0);
      this.opcode('pushContext');
    }

    this.opcode('invokePartial', partialName.name, partial.indent || '');
    this.opcode('append');
  },

  content: function(content) {
    if (content.string) {
      this.opcode('appendContent', content.string);
    }
  },

  mustache: function(mustache) {
    this.sexpr(mustache.sexpr);

    if(mustache.escaped && !this.options.noEscape) {
      this.opcode('appendEscaped');
    } else {
      this.opcode('append');
    }
  },

  ambiguousSexpr: function(sexpr, program, inverse) {
    var id = sexpr.id,
        name = id.parts[0],
        isBlock = program != null || inverse != null;

    this.opcode('getContext', id.depth);

    this.opcode('pushProgram', program);
    this.opcode('pushProgram', inverse);

    this.ID(id);

    this.opcode('invokeAmbiguous', name, isBlock);
  },

  simpleSexpr: function(sexpr) {
    var id = sexpr.id;

    if (id.type === 'DATA') {
      this.DATA(id);
    } else if (id.parts.length) {
      this.ID(id);
    } else {
      // Simplified ID for `this`
      this.addDepth(id.depth);
      this.opcode('getContext', id.depth);
      this.opcode('pushContext');
    }

    this.opcode('resolvePossibleLambda');
  },

  helperSexpr: function(sexpr, program, inverse) {
    var params = this.setupFullMustacheParams(sexpr, program, inverse),
        id = sexpr.id,
        name = id.parts[0];

    if (this.options.knownHelpers[name]) {
      this.opcode('invokeKnownHelper', params.length, name);
    } else if (this.options.knownHelpersOnly) {
      throw new Exception("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
    } else {
      id.falsy = true;

      this.ID(id);
      this.opcode('invokeHelper', params.length, id.original, id.isSimple);
    }
  },

  sexpr: function(sexpr) {
    var type = this.classifySexpr(sexpr);

    if (type === "simple") {
      this.simpleSexpr(sexpr);
    } else if (type === "helper") {
      this.helperSexpr(sexpr);
    } else {
      this.ambiguousSexpr(sexpr);
    }
  },

  ID: function(id) {
    this.addDepth(id.depth);
    this.opcode('getContext', id.depth);

    var name = id.parts[0];
    if (!name) {
      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
      this.opcode('pushContext');
    } else {
      this.opcode('lookupOnContext', id.parts, id.falsy, id.isScoped);
    }
  },

  DATA: function(data) {
    this.options.data = true;
    this.opcode('lookupData', data.id.depth, data.id.parts);
  },

  STRING: function(string) {
    this.opcode('pushString', string.string);
  },

  NUMBER: function(number) {
    this.opcode('pushLiteral', number.number);
  },

  BOOLEAN: function(bool) {
    this.opcode('pushLiteral', bool.bool);
  },

  comment: function() {},

  // HELPERS
  opcode: function(name) {
    this.opcodes.push({ opcode: name, args: slice.call(arguments, 1) });
  },

  addDepth: function(depth) {
    if(depth === 0) { return; }

    if(!this.depths[depth]) {
      this.depths[depth] = true;
      this.depths.list.push(depth);
    }
  },

  classifySexpr: function(sexpr) {
    var isHelper   = sexpr.isHelper;
    var isEligible = sexpr.eligibleHelper;
    var options    = this.options;

    // if ambiguous, we can possibly resolve the ambiguity now
    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
    if (isEligible && !isHelper) {
      var name = sexpr.id.parts[0];

      if (options.knownHelpers[name]) {
        isHelper = true;
      } else if (options.knownHelpersOnly) {
        isEligible = false;
      }
    }

    if (isHelper) { return "helper"; }
    else if (isEligible) { return "ambiguous"; }
    else { return "simple"; }
  },

  pushParams: function(params) {
    for(var i=0, l=params.length; i<l; i++) {
      this.pushParam(params[i]);
    }
  },

  pushParam: function(val) {
    if (this.stringParams) {
      if(val.depth) {
        this.addDepth(val.depth);
      }
      this.opcode('getContext', val.depth || 0);
      this.opcode('pushStringParam', val.stringModeValue, val.type);

      if (val.type === 'sexpr') {
        // Subexpressions get evaluated and passed in
        // in string params mode.
        this.sexpr(val);
      }
    } else {
      if (this.trackIds) {
        this.opcode('pushId', val.type, val.idName || val.stringModeValue);
      }
      this.accept(val);
    }
  },

  setupFullMustacheParams: function(sexpr, program, inverse) {
    var params = sexpr.params;
    this.pushParams(params);

    this.opcode('pushProgram', program);
    this.opcode('pushProgram', inverse);

    if (sexpr.hash) {
      this.hash(sexpr.hash);
    } else {
      this.opcode('emptyHash');
    }

    return params;
  }
};

function precompile(input, options, env) {
  if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
    throw new Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
  }

  options = options || {};
  if (!('data' in options)) {
    options.data = true;
  }
  if (options.compat) {
    options.useDepths = true;
  }

  var ast = env.parse(input);
  var environment = new env.Compiler().compile(ast, options);
  return new env.JavaScriptCompiler().compile(environment, options);
}

exports.precompile = precompile;function compile(input, options, env) {
  if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
    throw new Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
  }

  options = options || {};

  if (!('data' in options)) {
    options.data = true;
  }
  if (options.compat) {
    options.useDepths = true;
  }

  var compiled;

  function compileInput() {
    var ast = env.parse(input);
    var environment = new env.Compiler().compile(ast, options);
    var templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
    return env.template(templateSpec);
  }

  // Template is only compiled on first use and cached after that point.
  var ret = function(context, options) {
    if (!compiled) {
      compiled = compileInput();
    }
    return compiled.call(this, context, options);
  };
  ret._setup = function(options) {
    if (!compiled) {
      compiled = compileInput();
    }
    return compiled._setup(options);
  };
  ret._child = function(i, data, depths) {
    if (!compiled) {
      compiled = compileInput();
    }
    return compiled._child(i, data, depths);
  };
  return ret;
}

exports.compile = compile;function argEquals(a, b) {
  if (a === b) {
    return true;
  }

  if (isArray(a) && isArray(b) && a.length === b.length) {
    for (var i = 0; i < a.length; i++) {
      if (!argEquals(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
}
},{"../exception":76,"../utils":79}],71:[function(require,module,exports){
"use strict";
var Exception = require("../exception")["default"];

function stripFlags(open, close) {
  return {
    left: open.charAt(2) === '~',
    right: close.charAt(close.length-3) === '~'
  };
}

exports.stripFlags = stripFlags;
function prepareBlock(mustache, program, inverseAndProgram, close, inverted, locInfo) {
  /*jshint -W040 */
  if (mustache.sexpr.id.original !== close.path.original) {
    throw new Exception(mustache.sexpr.id.original + ' doesn\'t match ' + close.path.original, mustache);
  }

  var inverse = inverseAndProgram && inverseAndProgram.program;

  var strip = {
    left: mustache.strip.left,
    right: close.strip.right,

    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
    // so our parent can determine if we actually are standalone
    openStandalone: isNextWhitespace(program.statements),
    closeStandalone: isPrevWhitespace((inverse || program).statements)
  };

  if (mustache.strip.right) {
    omitRight(program.statements, null, true);
  }

  if (inverse) {
    var inverseStrip = inverseAndProgram.strip;

    if (inverseStrip.left) {
      omitLeft(program.statements, null, true);
    }
    if (inverseStrip.right) {
      omitRight(inverse.statements, null, true);
    }
    if (close.strip.left) {
      omitLeft(inverse.statements, null, true);
    }

    // Find standalone else statments
    if (isPrevWhitespace(program.statements)
        && isNextWhitespace(inverse.statements)) {

      omitLeft(program.statements);
      omitRight(inverse.statements);
    }
  } else {
    if (close.strip.left) {
      omitLeft(program.statements, null, true);
    }
  }

  if (inverted) {
    return new this.BlockNode(mustache, inverse, program, strip, locInfo);
  } else {
    return new this.BlockNode(mustache, program, inverse, strip, locInfo);
  }
}

exports.prepareBlock = prepareBlock;
function prepareProgram(statements, isRoot) {
  for (var i = 0, l = statements.length; i < l; i++) {
    var current = statements[i],
        strip = current.strip;

    if (!strip) {
      continue;
    }

    var _isPrevWhitespace = isPrevWhitespace(statements, i, isRoot, current.type === 'partial'),
        _isNextWhitespace = isNextWhitespace(statements, i, isRoot),

        openStandalone = strip.openStandalone && _isPrevWhitespace,
        closeStandalone = strip.closeStandalone && _isNextWhitespace,
        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

    if (strip.right) {
      omitRight(statements, i, true);
    }
    if (strip.left) {
      omitLeft(statements, i, true);
    }

    if (inlineStandalone) {
      omitRight(statements, i);

      if (omitLeft(statements, i)) {
        // If we are on a standalone node, save the indent info for partials
        if (current.type === 'partial') {
          current.indent = (/([ \t]+$)/).exec(statements[i-1].original) ? RegExp.$1 : '';
        }
      }
    }
    if (openStandalone) {
      omitRight((current.program || current.inverse).statements);

      // Strip out the previous content node if it's whitespace only
      omitLeft(statements, i);
    }
    if (closeStandalone) {
      // Always strip the next node
      omitRight(statements, i);

      omitLeft((current.inverse || current.program).statements);
    }
  }

  return statements;
}

exports.prepareProgram = prepareProgram;function isPrevWhitespace(statements, i, isRoot) {
  if (i === undefined) {
    i = statements.length;
  }

  // Nodes that end with newlines are considered whitespace (but are special
  // cased for strip operations)
  var prev = statements[i-1],
      sibling = statements[i-2];
  if (!prev) {
    return isRoot;
  }

  if (prev.type === 'content') {
    return (sibling || !isRoot ? (/\r?\n\s*?$/) : (/(^|\r?\n)\s*?$/)).test(prev.original);
  }
}
function isNextWhitespace(statements, i, isRoot) {
  if (i === undefined) {
    i = -1;
  }

  var next = statements[i+1],
      sibling = statements[i+2];
  if (!next) {
    return isRoot;
  }

  if (next.type === 'content') {
    return (sibling || !isRoot ? (/^\s*?\r?\n/) : (/^\s*?(\r?\n|$)/)).test(next.original);
  }
}

// Marks the node to the right of the position as omitted.
// I.e. {{foo}}' ' will mark the ' ' node as omitted.
//
// If i is undefined, then the first child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function omitRight(statements, i, multiple) {
  var current = statements[i == null ? 0 : i + 1];
  if (!current || current.type !== 'content' || (!multiple && current.rightStripped)) {
    return;
  }

  var original = current.string;
  current.string = current.string.replace(multiple ? (/^\s+/) : (/^[ \t]*\r?\n?/), '');
  current.rightStripped = current.string !== original;
}

// Marks the node to the left of the position as omitted.
// I.e. ' '{{foo}} will mark the ' ' node as omitted.
//
// If i is undefined then the last child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function omitLeft(statements, i, multiple) {
  var current = statements[i == null ? statements.length - 1 : i - 1];
  if (!current || current.type !== 'content' || (!multiple && current.leftStripped)) {
    return;
  }

  // We omit the last node if it's whitespace only and not preceeded by a non-content node.
  var original = current.string;
  current.string = current.string.replace(multiple ? (/\s+$/) : (/[ \t]+$/), '');
  current.leftStripped = current.string !== original;
  return current.leftStripped;
}
},{"../exception":76}],72:[function(require,module,exports){
"use strict";
var COMPILER_REVISION = require("../base").COMPILER_REVISION;
var REVISION_CHANGES = require("../base").REVISION_CHANGES;
var Exception = require("../exception")["default"];

function Literal(value) {
  this.value = value;
}

function JavaScriptCompiler() {}

JavaScriptCompiler.prototype = {
  // PUBLIC API: You can override these methods in a subclass to provide
  // alternative compiled forms for name lookup and buffering semantics
  nameLookup: function(parent, name /* , type*/) {
    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
      return parent + "." + name;
    } else {
      return parent + "['" + name + "']";
    }
  },
  depthedLookup: function(name) {
    this.aliases.lookup = 'this.lookup';

    return 'lookup(depths, "' + name + '")';
  },

  compilerInfo: function() {
    var revision = COMPILER_REVISION,
        versions = REVISION_CHANGES[revision];
    return [revision, versions];
  },

  appendToBuffer: function(string) {
    if (this.environment.isSimple) {
      return "return " + string + ";";
    } else {
      return {
        appendToBuffer: true,
        content: string,
        toString: function() { return "buffer += " + string + ";"; }
      };
    }
  },

  initializeBuffer: function() {
    return this.quotedString("");
  },

  namespace: "Handlebars",
  // END PUBLIC API

  compile: function(environment, options, context, asObject) {
    this.environment = environment;
    this.options = options;
    this.stringParams = this.options.stringParams;
    this.trackIds = this.options.trackIds;
    this.precompile = !asObject;

    this.name = this.environment.name;
    this.isChild = !!context;
    this.context = context || {
      programs: [],
      environments: []
    };

    this.preamble();

    this.stackSlot = 0;
    this.stackVars = [];
    this.aliases = {};
    this.registers = { list: [] };
    this.hashes = [];
    this.compileStack = [];
    this.inlineStack = [];

    this.compileChildren(environment, options);

    this.useDepths = this.useDepths || environment.depths.list.length || this.options.compat;

    var opcodes = environment.opcodes,
        opcode,
        i,
        l;

    for (i = 0, l = opcodes.length; i < l; i++) {
      opcode = opcodes[i];

      this[opcode.opcode].apply(this, opcode.args);
    }

    // Flush any trailing content that might be pending.
    this.pushSource('');

    /* istanbul ignore next */
    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
      throw new Exception('Compile completed with content left on stack');
    }

    var fn = this.createFunctionContext(asObject);
    if (!this.isChild) {
      var ret = {
        compiler: this.compilerInfo(),
        main: fn
      };
      var programs = this.context.programs;
      for (i = 0, l = programs.length; i < l; i++) {
        if (programs[i]) {
          ret[i] = programs[i];
        }
      }

      if (this.environment.usePartial) {
        ret.usePartial = true;
      }
      if (this.options.data) {
        ret.useData = true;
      }
      if (this.useDepths) {
        ret.useDepths = true;
      }
      if (this.options.compat) {
        ret.compat = true;
      }

      if (!asObject) {
        ret.compiler = JSON.stringify(ret.compiler);
        ret = this.objectLiteral(ret);
      }

      return ret;
    } else {
      return fn;
    }
  },

  preamble: function() {
    // track the last context pushed into place to allow skipping the
    // getContext opcode when it would be a noop
    this.lastContext = 0;
    this.source = [];
  },

  createFunctionContext: function(asObject) {
    var varDeclarations = '';

    var locals = this.stackVars.concat(this.registers.list);
    if(locals.length > 0) {
      varDeclarations += ", " + locals.join(", ");
    }

    // Generate minimizer alias mappings
    for (var alias in this.aliases) {
      if (this.aliases.hasOwnProperty(alias)) {
        varDeclarations += ', ' + alias + '=' + this.aliases[alias];
      }
    }

    var params = ["depth0", "helpers", "partials", "data"];

    if (this.useDepths) {
      params.push('depths');
    }

    // Perform a second pass over the output to merge content when possible
    var source = this.mergeSource(varDeclarations);

    if (asObject) {
      params.push(source);

      return Function.apply(this, params);
    } else {
      return 'function(' + params.join(',') + ') {\n  ' + source + '}';
    }
  },
  mergeSource: function(varDeclarations) {
    var source = '',
        buffer,
        appendOnly = !this.forceBuffer,
        appendFirst;

    for (var i = 0, len = this.source.length; i < len; i++) {
      var line = this.source[i];
      if (line.appendToBuffer) {
        if (buffer) {
          buffer = buffer + '\n    + ' + line.content;
        } else {
          buffer = line.content;
        }
      } else {
        if (buffer) {
          if (!source) {
            appendFirst = true;
            source = buffer + ';\n  ';
          } else {
            source += 'buffer += ' + buffer + ';\n  ';
          }
          buffer = undefined;
        }
        source += line + '\n  ';

        if (!this.environment.isSimple) {
          appendOnly = false;
        }
      }
    }

    if (appendOnly) {
      if (buffer || !source) {
        source += 'return ' + (buffer || '""') + ';\n';
      }
    } else {
      varDeclarations += ", buffer = " + (appendFirst ? '' : this.initializeBuffer());
      if (buffer) {
        source += 'return buffer + ' + buffer + ';\n';
      } else {
        source += 'return buffer;\n';
      }
    }

    if (varDeclarations) {
      source = 'var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n  ') + source;
    }

    return source;
  },

  // [blockValue]
  //
  // On stack, before: hash, inverse, program, value
  // On stack, after: return value of blockHelperMissing
  //
  // The purpose of this opcode is to take a block of the form
  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
  // replace it on the stack with the result of properly
  // invoking blockHelperMissing.
  blockValue: function(name) {
    this.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

    var params = [this.contextName(0)];
    this.setupParams(name, 0, params);

    var blockName = this.popStack();
    params.splice(1, 0, blockName);

    this.push('blockHelperMissing.call(' + params.join(', ') + ')');
  },

  // [ambiguousBlockValue]
  //
  // On stack, before: hash, inverse, program, value
  // Compiler value, before: lastHelper=value of last found helper, if any
  // On stack, after, if no lastHelper: same as [blockValue]
  // On stack, after, if lastHelper: value
  ambiguousBlockValue: function() {
    this.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

    // We're being a bit cheeky and reusing the options value from the prior exec
    var params = [this.contextName(0)];
    this.setupParams('', 0, params, true);

    this.flushInline();

    var current = this.topStack();
    params.splice(1, 0, current);

    this.pushSource("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
  },

  // [appendContent]
  //
  // On stack, before: ...
  // On stack, after: ...
  //
  // Appends the string value of `content` to the current buffer
  appendContent: function(content) {
    if (this.pendingContent) {
      content = this.pendingContent + content;
    }

    this.pendingContent = content;
  },

  // [append]
  //
  // On stack, before: value, ...
  // On stack, after: ...
  //
  // Coerces `value` to a String and appends it to the current buffer.
  //
  // If `value` is truthy, or 0, it is coerced into a string and appended
  // Otherwise, the empty string is appended
  append: function() {
    // Force anything that is inlined onto the stack so we don't have duplication
    // when we examine local
    this.flushInline();
    var local = this.popStack();
    this.pushSource('if (' + local + ' != null) { ' + this.appendToBuffer(local) + ' }');
    if (this.environment.isSimple) {
      this.pushSource("else { " + this.appendToBuffer("''") + " }");
    }
  },

  // [appendEscaped]
  //
  // On stack, before: value, ...
  // On stack, after: ...
  //
  // Escape `value` and append it to the buffer
  appendEscaped: function() {
    this.aliases.escapeExpression = 'this.escapeExpression';

    this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
  },

  // [getContext]
  //
  // On stack, before: ...
  // On stack, after: ...
  // Compiler value, after: lastContext=depth
  //
  // Set the value of the `lastContext` compiler value to the depth
  getContext: function(depth) {
    this.lastContext = depth;
  },

  // [pushContext]
  //
  // On stack, before: ...
  // On stack, after: currentContext, ...
  //
  // Pushes the value of the current context onto the stack.
  pushContext: function() {
    this.pushStackLiteral(this.contextName(this.lastContext));
  },

  // [lookupOnContext]
  //
  // On stack, before: ...
  // On stack, after: currentContext[name], ...
  //
  // Looks up the value of `name` on the current context and pushes
  // it onto the stack.
  lookupOnContext: function(parts, falsy, scoped) {
    /*jshint -W083 */
    var i = 0,
        len = parts.length;

    if (!scoped && this.options.compat && !this.lastContext) {
      // The depthed query is expected to handle the undefined logic for the root level that
      // is implemented below, so we evaluate that directly in compat mode
      this.push(this.depthedLookup(parts[i++]));
    } else {
      this.pushContext();
    }

    for (; i < len; i++) {
      this.replaceStack(function(current) {
        var lookup = this.nameLookup(current, parts[i], 'context');
        // We want to ensure that zero and false are handled properly if the context (falsy flag)
        // needs to have the special handling for these values.
        if (!falsy) {
          return ' != null ? ' + lookup + ' : ' + current;
        } else {
          // Otherwise we can use generic falsy handling
          return ' && ' + lookup;
        }
      });
    }
  },

  // [lookupData]
  //
  // On stack, before: ...
  // On stack, after: data, ...
  //
  // Push the data lookup operator
  lookupData: function(depth, parts) {
    /*jshint -W083 */
    if (!depth) {
      this.pushStackLiteral('data');
    } else {
      this.pushStackLiteral('this.data(data, ' + depth + ')');
    }

    var len = parts.length;
    for (var i = 0; i < len; i++) {
      this.replaceStack(function(current) {
        return ' && ' + this.nameLookup(current, parts[i], 'data');
      });
    }
  },

  // [resolvePossibleLambda]
  //
  // On stack, before: value, ...
  // On stack, after: resolved value, ...
  //
  // If the `value` is a lambda, replace it on the stack by
  // the return value of the lambda
  resolvePossibleLambda: function() {
    this.aliases.lambda = 'this.lambda';

    this.push('lambda(' + this.popStack() + ', ' + this.contextName(0) + ')');
  },

  // [pushStringParam]
  //
  // On stack, before: ...
  // On stack, after: string, currentContext, ...
  //
  // This opcode is designed for use in string mode, which
  // provides the string value of a parameter along with its
  // depth rather than resolving it immediately.
  pushStringParam: function(string, type) {
    this.pushContext();
    this.pushString(type);

    // If it's a subexpression, the string result
    // will be pushed after this opcode.
    if (type !== 'sexpr') {
      if (typeof string === 'string') {
        this.pushString(string);
      } else {
        this.pushStackLiteral(string);
      }
    }
  },

  emptyHash: function() {
    this.pushStackLiteral('{}');

    if (this.trackIds) {
      this.push('{}'); // hashIds
    }
    if (this.stringParams) {
      this.push('{}'); // hashContexts
      this.push('{}'); // hashTypes
    }
  },
  pushHash: function() {
    if (this.hash) {
      this.hashes.push(this.hash);
    }
    this.hash = {values: [], types: [], contexts: [], ids: []};
  },
  popHash: function() {
    var hash = this.hash;
    this.hash = this.hashes.pop();

    if (this.trackIds) {
      this.push('{' + hash.ids.join(',') + '}');
    }
    if (this.stringParams) {
      this.push('{' + hash.contexts.join(',') + '}');
      this.push('{' + hash.types.join(',') + '}');
    }

    this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
  },

  // [pushString]
  //
  // On stack, before: ...
  // On stack, after: quotedString(string), ...
  //
  // Push a quoted version of `string` onto the stack
  pushString: function(string) {
    this.pushStackLiteral(this.quotedString(string));
  },

  // [push]
  //
  // On stack, before: ...
  // On stack, after: expr, ...
  //
  // Push an expression onto the stack
  push: function(expr) {
    this.inlineStack.push(expr);
    return expr;
  },

  // [pushLiteral]
  //
  // On stack, before: ...
  // On stack, after: value, ...
  //
  // Pushes a value onto the stack. This operation prevents
  // the compiler from creating a temporary variable to hold
  // it.
  pushLiteral: function(value) {
    this.pushStackLiteral(value);
  },

  // [pushProgram]
  //
  // On stack, before: ...
  // On stack, after: program(guid), ...
  //
  // Push a program expression onto the stack. This takes
  // a compile-time guid and converts it into a runtime-accessible
  // expression.
  pushProgram: function(guid) {
    if (guid != null) {
      this.pushStackLiteral(this.programExpression(guid));
    } else {
      this.pushStackLiteral(null);
    }
  },

  // [invokeHelper]
  //
  // On stack, before: hash, inverse, program, params..., ...
  // On stack, after: result of helper invocation
  //
  // Pops off the helper's parameters, invokes the helper,
  // and pushes the helper's return value onto the stack.
  //
  // If the helper is not found, `helperMissing` is called.
  invokeHelper: function(paramSize, name, isSimple) {
    this.aliases.helperMissing = 'helpers.helperMissing';

    var nonHelper = this.popStack();
    var helper = this.setupHelper(paramSize, name);

    var lookup = (isSimple ? helper.name + ' || ' : '') + nonHelper + ' || helperMissing';
    this.push('((' + lookup + ').call(' + helper.callParams + '))');
  },

  // [invokeKnownHelper]
  //
  // On stack, before: hash, inverse, program, params..., ...
  // On stack, after: result of helper invocation
  //
  // This operation is used when the helper is known to exist,
  // so a `helperMissing` fallback is not required.
  invokeKnownHelper: function(paramSize, name) {
    var helper = this.setupHelper(paramSize, name);
    this.push(helper.name + ".call(" + helper.callParams + ")");
  },

  // [invokeAmbiguous]
  //
  // On stack, before: hash, inverse, program, params..., ...
  // On stack, after: result of disambiguation
  //
  // This operation is used when an expression like `{{foo}}`
  // is provided, but we don't know at compile-time whether it
  // is a helper or a path.
  //
  // This operation emits more code than the other options,
  // and can be avoided by passing the `knownHelpers` and
  // `knownHelpersOnly` flags at compile-time.
  invokeAmbiguous: function(name, helperCall) {
    this.aliases.functionType = '"function"';
    this.aliases.helperMissing = 'helpers.helperMissing';
    this.useRegister('helper');

    var nonHelper = this.popStack();

    this.emptyHash();
    var helper = this.setupHelper(0, name, helperCall);

    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

    this.push(
      '((helper = (helper = ' + helperName + ' || ' + nonHelper + ') != null ? helper : helperMissing'
        + (helper.paramsInit ? '),(' + helper.paramsInit : '') + '),'
      + '(typeof helper === functionType ? helper.call(' + helper.callParams + ') : helper))');
  },

  // [invokePartial]
  //
  // On stack, before: context, ...
  // On stack after: result of partial invocation
  //
  // This operation pops off a context, invokes a partial with that context,
  // and pushes the result of the invocation back.
  invokePartial: function(name, indent) {
    var params = [this.nameLookup('partials', name, 'partial'), "'" + indent + "'", "'" + name + "'", this.popStack(), this.popStack(), "helpers", "partials"];

    if (this.options.data) {
      params.push("data");
    } else if (this.options.compat) {
      params.push('undefined');
    }
    if (this.options.compat) {
      params.push('depths');
    }

    this.push("this.invokePartial(" + params.join(", ") + ")");
  },

  // [assignToHash]
  //
  // On stack, before: value, ..., hash, ...
  // On stack, after: ..., hash, ...
  //
  // Pops a value off the stack and assigns it to the current hash
  assignToHash: function(key) {
    var value = this.popStack(),
        context,
        type,
        id;

    if (this.trackIds) {
      id = this.popStack();
    }
    if (this.stringParams) {
      type = this.popStack();
      context = this.popStack();
    }

    var hash = this.hash;
    if (context) {
      hash.contexts.push("'" + key + "': " + context);
    }
    if (type) {
      hash.types.push("'" + key + "': " + type);
    }
    if (id) {
      hash.ids.push("'" + key + "': " + id);
    }
    hash.values.push("'" + key + "': (" + value + ")");
  },

  pushId: function(type, name) {
    if (type === 'ID' || type === 'DATA') {
      this.pushString(name);
    } else if (type === 'sexpr') {
      this.pushStackLiteral('true');
    } else {
      this.pushStackLiteral('null');
    }
  },

  // HELPERS

  compiler: JavaScriptCompiler,

  compileChildren: function(environment, options) {
    var children = environment.children, child, compiler;

    for(var i=0, l=children.length; i<l; i++) {
      child = children[i];
      compiler = new this.compiler();

      var index = this.matchExistingProgram(child);

      if (index == null) {
        this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
        index = this.context.programs.length;
        child.index = index;
        child.name = 'program' + index;
        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
        this.context.environments[index] = child;

        this.useDepths = this.useDepths || compiler.useDepths;
      } else {
        child.index = index;
        child.name = 'program' + index;
      }
    }
  },
  matchExistingProgram: function(child) {
    for (var i = 0, len = this.context.environments.length; i < len; i++) {
      var environment = this.context.environments[i];
      if (environment && environment.equals(child)) {
        return i;
      }
    }
  },

  programExpression: function(guid) {
    var child = this.environment.children[guid],
        depths = child.depths.list,
        useDepths = this.useDepths,
        depth;

    var programParams = [child.index, 'data'];

    if (useDepths) {
      programParams.push('depths');
    }

    return 'this.program(' + programParams.join(', ') + ')';
  },

  useRegister: function(name) {
    if(!this.registers[name]) {
      this.registers[name] = true;
      this.registers.list.push(name);
    }
  },

  pushStackLiteral: function(item) {
    return this.push(new Literal(item));
  },

  pushSource: function(source) {
    if (this.pendingContent) {
      this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
      this.pendingContent = undefined;
    }

    if (source) {
      this.source.push(source);
    }
  },

  pushStack: function(item) {
    this.flushInline();

    var stack = this.incrStack();
    this.pushSource(stack + " = " + item + ";");
    this.compileStack.push(stack);
    return stack;
  },

  replaceStack: function(callback) {
    var prefix = '',
        inline = this.isInline(),
        stack,
        createdStack,
        usedLiteral;

    /* istanbul ignore next */
    if (!this.isInline()) {
      throw new Exception('replaceStack on non-inline');
    }

    // We want to merge the inline statement into the replacement statement via ','
    var top = this.popStack(true);

    if (top instanceof Literal) {
      // Literals do not need to be inlined
      prefix = stack = top.value;
      usedLiteral = true;
    } else {
      // Get or create the current stack name for use by the inline
      createdStack = !this.stackSlot;
      var name = !createdStack ? this.topStackName() : this.incrStack();

      prefix = '(' + this.push(name) + ' = ' + top + ')';
      stack = this.topStack();
    }

    var item = callback.call(this, stack);

    if (!usedLiteral) {
      this.popStack();
    }
    if (createdStack) {
      this.stackSlot--;
    }
    this.push('(' + prefix + item + ')');
  },

  incrStack: function() {
    this.stackSlot++;
    if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
    return this.topStackName();
  },
  topStackName: function() {
    return "stack" + this.stackSlot;
  },
  flushInline: function() {
    var inlineStack = this.inlineStack;
    if (inlineStack.length) {
      this.inlineStack = [];
      for (var i = 0, len = inlineStack.length; i < len; i++) {
        var entry = inlineStack[i];
        if (entry instanceof Literal) {
          this.compileStack.push(entry);
        } else {
          this.pushStack(entry);
        }
      }
    }
  },
  isInline: function() {
    return this.inlineStack.length;
  },

  popStack: function(wrapped) {
    var inline = this.isInline(),
        item = (inline ? this.inlineStack : this.compileStack).pop();

    if (!wrapped && (item instanceof Literal)) {
      return item.value;
    } else {
      if (!inline) {
        /* istanbul ignore next */
        if (!this.stackSlot) {
          throw new Exception('Invalid stack pop');
        }
        this.stackSlot--;
      }
      return item;
    }
  },

  topStack: function() {
    var stack = (this.isInline() ? this.inlineStack : this.compileStack),
        item = stack[stack.length - 1];

    if (item instanceof Literal) {
      return item.value;
    } else {
      return item;
    }
  },

  contextName: function(context) {
    if (this.useDepths && context) {
      return 'depths[' + context + ']';
    } else {
      return 'depth' + context;
    }
  },

  quotedString: function(str) {
    return '"' + str
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
      .replace(/\u2029/g, '\\u2029') + '"';
  },

  objectLiteral: function(obj) {
    var pairs = [];

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        pairs.push(this.quotedString(key) + ':' + obj[key]);
      }
    }

    return '{' + pairs.join(',') + '}';
  },

  setupHelper: function(paramSize, name, blockHelper) {
    var params = [],
        paramsInit = this.setupParams(name, paramSize, params, blockHelper);
    var foundHelper = this.nameLookup('helpers', name, 'helper');

    return {
      params: params,
      paramsInit: paramsInit,
      name: foundHelper,
      callParams: [this.contextName(0)].concat(params).join(", ")
    };
  },

  setupOptions: function(helper, paramSize, params) {
    var options = {}, contexts = [], types = [], ids = [], param, inverse, program;

    options.name = this.quotedString(helper);
    options.hash = this.popStack();

    if (this.trackIds) {
      options.hashIds = this.popStack();
    }
    if (this.stringParams) {
      options.hashTypes = this.popStack();
      options.hashContexts = this.popStack();
    }

    inverse = this.popStack();
    program = this.popStack();

    // Avoid setting fn and inverse if neither are set. This allows
    // helpers to do a check for `if (options.fn)`
    if (program || inverse) {
      if (!program) {
        program = 'this.noop';
      }

      if (!inverse) {
        inverse = 'this.noop';
      }

      options.fn = program;
      options.inverse = inverse;
    }

    // The parameters go on to the stack in order (making sure that they are evaluated in order)
    // so we need to pop them off the stack in reverse order
    var i = paramSize;
    while (i--) {
      param = this.popStack();
      params[i] = param;

      if (this.trackIds) {
        ids[i] = this.popStack();
      }
      if (this.stringParams) {
        types[i] = this.popStack();
        contexts[i] = this.popStack();
      }
    }

    if (this.trackIds) {
      options.ids = "[" + ids.join(",") + "]";
    }
    if (this.stringParams) {
      options.types = "[" + types.join(",") + "]";
      options.contexts = "[" + contexts.join(",") + "]";
    }

    if (this.options.data) {
      options.data = "data";
    }

    return options;
  },

  // the params and contexts arguments are passed in arrays
  // to fill in
  setupParams: function(helperName, paramSize, params, useRegister) {
    var options = this.objectLiteral(this.setupOptions(helperName, paramSize, params));

    if (useRegister) {
      this.useRegister('options');
      params.push('options');
      return 'options=' + options;
    } else {
      params.push(options);
      return '';
    }
  }
};

var reservedWords = (
  "break else new var" +
  " case finally return void" +
  " catch for switch while" +
  " continue function this with" +
  " default if throw" +
  " delete in try" +
  " do instanceof typeof" +
  " abstract enum int short" +
  " boolean export interface static" +
  " byte extends long super" +
  " char final native synchronized" +
  " class float package throws" +
  " const goto private transient" +
  " debugger implements protected volatile" +
  " double import public let yield"
).split(" ");

var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

for(var i=0, l=reservedWords.length; i<l; i++) {
  compilerWords[reservedWords[i]] = true;
}

JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
};

exports["default"] = JavaScriptCompiler;
},{"../base":67,"../exception":76}],73:[function(require,module,exports){
"use strict";
/* jshint ignore:start */
/* istanbul ignore next */
/* Jison generated parser */
var handlebars = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"root":3,"program":4,"EOF":5,"program_repetition0":6,"statement":7,"mustache":8,"block":9,"rawBlock":10,"partial":11,"CONTENT":12,"COMMENT":13,"openRawBlock":14,"END_RAW_BLOCK":15,"OPEN_RAW_BLOCK":16,"sexpr":17,"CLOSE_RAW_BLOCK":18,"openBlock":19,"block_option0":20,"closeBlock":21,"openInverse":22,"block_option1":23,"OPEN_BLOCK":24,"CLOSE":25,"OPEN_INVERSE":26,"inverseAndProgram":27,"INVERSE":28,"OPEN_ENDBLOCK":29,"path":30,"OPEN":31,"OPEN_UNESCAPED":32,"CLOSE_UNESCAPED":33,"OPEN_PARTIAL":34,"partialName":35,"param":36,"partial_option0":37,"partial_option1":38,"sexpr_repetition0":39,"sexpr_option0":40,"dataName":41,"STRING":42,"NUMBER":43,"BOOLEAN":44,"OPEN_SEXPR":45,"CLOSE_SEXPR":46,"hash":47,"hash_repetition_plus0":48,"hashSegment":49,"ID":50,"EQUALS":51,"DATA":52,"pathSegments":53,"SEP":54,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},
productions_: [0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: yy.prepareProgram($$[$0-1].statements, true); return $$[$0-1]; 
break;
case 2:this.$ = new yy.ProgramNode(yy.prepareProgram($$[$0]), {}, this._$);
break;
case 3:this.$ = $$[$0];
break;
case 4:this.$ = $$[$0];
break;
case 5:this.$ = $$[$0];
break;
case 6:this.$ = $$[$0];
break;
case 7:this.$ = new yy.ContentNode($$[$0], this._$);
break;
case 8:this.$ = new yy.CommentNode($$[$0], this._$);
break;
case 9:this.$ = new yy.RawBlockNode($$[$0-2], $$[$0-1], $$[$0], this._$);
break;
case 10:this.$ = new yy.MustacheNode($$[$0-1], null, '', '', this._$);
break;
case 11:this.$ = yy.prepareBlock($$[$0-3], $$[$0-2], $$[$0-1], $$[$0], false, this._$);
break;
case 12:this.$ = yy.prepareBlock($$[$0-3], $$[$0-2], $$[$0-1], $$[$0], true, this._$);
break;
case 13:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], yy.stripFlags($$[$0-2], $$[$0]), this._$);
break;
case 14:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], yy.stripFlags($$[$0-2], $$[$0]), this._$);
break;
case 15:this.$ = { strip: yy.stripFlags($$[$0-1], $$[$0-1]), program: $$[$0] };
break;
case 16:this.$ = {path: $$[$0-1], strip: yy.stripFlags($$[$0-2], $$[$0])};
break;
case 17:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], yy.stripFlags($$[$0-2], $$[$0]), this._$);
break;
case 18:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], yy.stripFlags($$[$0-2], $$[$0]), this._$);
break;
case 19:this.$ = new yy.PartialNode($$[$0-3], $$[$0-2], $$[$0-1], yy.stripFlags($$[$0-4], $$[$0]), this._$);
break;
case 20:this.$ = new yy.PartialNode($$[$0-2], undefined, $$[$0-1], yy.stripFlags($$[$0-3], $$[$0]), this._$);
break;
case 21:this.$ = new yy.SexprNode([$$[$0-2]].concat($$[$0-1]), $$[$0], this._$);
break;
case 22:this.$ = new yy.SexprNode([$$[$0]], null, this._$);
break;
case 23:this.$ = $$[$0];
break;
case 24:this.$ = new yy.StringNode($$[$0], this._$);
break;
case 25:this.$ = new yy.NumberNode($$[$0], this._$);
break;
case 26:this.$ = new yy.BooleanNode($$[$0], this._$);
break;
case 27:this.$ = $$[$0];
break;
case 28:$$[$0-1].isHelper = true; this.$ = $$[$0-1];
break;
case 29:this.$ = new yy.HashNode($$[$0], this._$);
break;
case 30:this.$ = [$$[$0-2], $$[$0]];
break;
case 31:this.$ = new yy.PartialNameNode($$[$0], this._$);
break;
case 32:this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0], this._$), this._$);
break;
case 33:this.$ = new yy.PartialNameNode(new yy.NumberNode($$[$0], this._$));
break;
case 34:this.$ = new yy.DataNode($$[$0], this._$);
break;
case 35:this.$ = new yy.IdNode($$[$0], this._$);
break;
case 36: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2]; 
break;
case 37:this.$ = [{part: $$[$0]}];
break;
case 38:this.$ = [];
break;
case 39:$$[$0-1].push($$[$0]);
break;
case 48:this.$ = [];
break;
case 49:$$[$0-1].push($$[$0]);
break;
case 52:this.$ = [$$[$0]];
break;
case 53:$$[$0-1].push($$[$0]);
break;
}
},
table: [{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],
defaultActions: {4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


function strip(start, end) {
  return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng-end);
}


var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:
                                   if(yy_.yytext.slice(-2) === "\\\\") {
                                     strip(0,1);
                                     this.begin("mu");
                                   } else if(yy_.yytext.slice(-1) === "\\") {
                                     strip(0,1);
                                     this.begin("emu");
                                   } else {
                                     this.begin("mu");
                                   }
                                   if(yy_.yytext) return 12;
                                 
break;
case 1:return 12;
break;
case 2:
                                   this.popState();
                                   return 12;
                                 
break;
case 3:
                                  yy_.yytext = yy_.yytext.substr(5, yy_.yyleng-9);
                                  this.popState();
                                  return 15;
                                 
break;
case 4: return 12; 
break;
case 5:strip(0,4); this.popState(); return 13;
break;
case 6:return 45;
break;
case 7:return 46;
break;
case 8: return 16; 
break;
case 9:
                                  this.popState();
                                  this.begin('raw');
                                  return 18;
                                 
break;
case 10:return 34;
break;
case 11:return 24;
break;
case 12:return 29;
break;
case 13:this.popState(); return 28;
break;
case 14:this.popState(); return 28;
break;
case 15:return 26;
break;
case 16:return 26;
break;
case 17:return 32;
break;
case 18:return 31;
break;
case 19:this.popState(); this.begin('com');
break;
case 20:strip(3,5); this.popState(); return 13;
break;
case 21:return 31;
break;
case 22:return 51;
break;
case 23:return 50;
break;
case 24:return 50;
break;
case 25:return 54;
break;
case 26:// ignore whitespace
break;
case 27:this.popState(); return 33;
break;
case 28:this.popState(); return 25;
break;
case 29:yy_.yytext = strip(1,2).replace(/\\"/g,'"'); return 42;
break;
case 30:yy_.yytext = strip(1,2).replace(/\\'/g,"'"); return 42;
break;
case 31:return 52;
break;
case 32:return 44;
break;
case 33:return 44;
break;
case 34:return 43;
break;
case 35:return 50;
break;
case 36:yy_.yytext = strip(1,2); return 50;
break;
case 37:return 'INVALID';
break;
case 38:return 5;
break;
}
};
lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
lexer.conditions = {"mu":{"rules":[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"com":{"rules":[5],"inclusive":false},"raw":{"rules":[3,4],"inclusive":false},"INITIAL":{"rules":[0,1,38],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();exports["default"] = handlebars;
/* jshint ignore:end */
},{}],74:[function(require,module,exports){
"use strict";
var Visitor = require("./visitor")["default"];

function print(ast) {
  return new PrintVisitor().accept(ast);
}

exports.print = print;function PrintVisitor() {
  this.padding = 0;
}

exports.PrintVisitor = PrintVisitor;PrintVisitor.prototype = new Visitor();

PrintVisitor.prototype.pad = function(string) {
  var out = "";

  for(var i=0,l=this.padding; i<l; i++) {
    out = out + "  ";
  }

  out = out + string + "\n";
  return out;
};

PrintVisitor.prototype.program = function(program) {
  var out = "",
      statements = program.statements,
      i, l;

  for(i=0, l=statements.length; i<l; i++) {
    out = out + this.accept(statements[i]);
  }

  this.padding--;

  return out;
};

PrintVisitor.prototype.block = function(block) {
  var out = "";

  out = out + this.pad("BLOCK:");
  this.padding++;
  out = out + this.accept(block.mustache);
  if (block.program) {
    out = out + this.pad("PROGRAM:");
    this.padding++;
    out = out + this.accept(block.program);
    this.padding--;
  }
  if (block.inverse) {
    if (block.program) { this.padding++; }
    out = out + this.pad("{{^}}");
    this.padding++;
    out = out + this.accept(block.inverse);
    this.padding--;
    if (block.program) { this.padding--; }
  }
  this.padding--;

  return out;
};

PrintVisitor.prototype.sexpr = function(sexpr) {
  var params = sexpr.params, paramStrings = [], hash;

  for(var i=0, l=params.length; i<l; i++) {
    paramStrings.push(this.accept(params[i]));
  }

  params = "[" + paramStrings.join(", ") + "]";

  hash = sexpr.hash ? " " + this.accept(sexpr.hash) : "";

  return this.accept(sexpr.id) + " " + params + hash;
};

PrintVisitor.prototype.mustache = function(mustache) {
  return this.pad("{{ " + this.accept(mustache.sexpr) + " }}");
};

PrintVisitor.prototype.partial = function(partial) {
  var content = this.accept(partial.partialName);
  if(partial.context) {
    content += " " + this.accept(partial.context);
  }
  if (partial.hash) {
    content += " " + this.accept(partial.hash);
  }
  return this.pad("{{> " + content + " }}");
};

PrintVisitor.prototype.hash = function(hash) {
  var pairs = hash.pairs;
  var joinedPairs = [], left, right;

  for(var i=0, l=pairs.length; i<l; i++) {
    left = pairs[i][0];
    right = this.accept(pairs[i][1]);
    joinedPairs.push( left + "=" + right );
  }

  return "HASH{" + joinedPairs.join(", ") + "}";
};

PrintVisitor.prototype.STRING = function(string) {
  return '"' + string.string + '"';
};

PrintVisitor.prototype.NUMBER = function(number) {
  return "NUMBER{" + number.number + "}";
};

PrintVisitor.prototype.BOOLEAN = function(bool) {
  return "BOOLEAN{" + bool.bool + "}";
};

PrintVisitor.prototype.ID = function(id) {
  var path = id.parts.join("/");
  if(id.parts.length > 1) {
    return "PATH:" + path;
  } else {
    return "ID:" + path;
  }
};

PrintVisitor.prototype.PARTIAL_NAME = function(partialName) {
    return "PARTIAL:" + partialName.name;
};

PrintVisitor.prototype.DATA = function(data) {
  return "@" + this.accept(data.id);
};

PrintVisitor.prototype.content = function(content) {
  return this.pad("CONTENT[ '" + content.string + "' ]");
};

PrintVisitor.prototype.comment = function(comment) {
  return this.pad("{{! '" + comment.comment + "' }}");
};
},{"./visitor":75}],75:[function(require,module,exports){
"use strict";
function Visitor() {}

Visitor.prototype = {
  constructor: Visitor,

  accept: function(object) {
    return this[object.type](object);
  }
};

exports["default"] = Visitor;
},{}],76:[function(require,module,exports){
"use strict";

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var line;
  if (node && node.firstLine) {
    line = node.firstLine;

    message += ' - ' + line + ':' + node.firstColumn;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  if (line) {
    this.lineNumber = line;
    this.column = node.firstColumn;
  }
}

Exception.prototype = new Error();

exports["default"] = Exception;
},{}],77:[function(require,module,exports){
"use strict";
var Utils = require("./utils");
var Exception = require("./exception")["default"];
var COMPILER_REVISION = require("./base").COMPILER_REVISION;
var REVISION_CHANGES = require("./base").REVISION_CHANGES;
var createFrame = require("./base").createFrame;

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = REVISION_CHANGES[currentRevision],
          compilerVersions = REVISION_CHANGES[compilerRevision];
      throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
            "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
            "Please update your runtime to a newer version ("+compilerInfo[1]+").");
    }
  }
}

exports.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new Exception("No environment passed to template");
  }
  if (!templateSpec || !templateSpec.main) {
    throw new Exception('Unknown template object: ' + typeof templateSpec);
  }

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  var invokePartialWrapper = function(partial, indent, name, context, hash, helpers, partials, data, depths) {
    if (hash) {
      context = Utils.extend({}, context, hash);
    }

    var result = env.VM.invokePartial.call(this, partial, name, context, helpers, partials, data, depths);

    if (result == null && env.compile) {
      var options = { helpers: helpers, partials: partials, data: data, depths: depths };
      partials[name] = env.compile(partial, { data: data !== undefined, compat: templateSpec.compat }, env);
      result = partials[name](context, options);
    }
    if (result != null) {
      if (indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    }
  };

  // Just add water
  var container = {
    lookup: function(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function(i) {
      return templateSpec[i];
    },

    programs: [],
    program: function(i, data, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths) {
        programWrapper = program(this, i, fn, data, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = program(this, i, fn);
      }
      return programWrapper;
    },

    data: function(data, depth) {
      while (data && depth--) {
        data = data._parent;
      }
      return data;
    },
    merge: function(param, common) {
      var ret = param || common;

      if (param && common && (param !== common)) {
        ret = Utils.extend({}, common, param);
      }

      return ret;
    },

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  var ret = function(context, options) {
    options = options || {};
    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths;
    if (templateSpec.useDepths) {
      depths = options.depths ? [context].concat(options.depths) : [context];
    }

    return templateSpec.main.call(container, context, container.helpers, container.partials, data, depths);
  };
  ret.isTop = true;

  ret._setup = function(options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
    }
  };

  ret._child = function(i, data, depths) {
    if (templateSpec.useDepths && !depths) {
      throw new Exception('must pass parent depths');
    }

    return program(container, i, templateSpec[i], data, depths);
  };
  return ret;
}

exports.template = template;function program(container, i, fn, data, depths) {
  var prog = function(context, options) {
    options = options || {};

    return fn.call(container, context, container.helpers, container.partials, options.data || data, depths && [context].concat(depths));
  };
  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  return prog;
}

exports.program = program;function invokePartial(partial, name, context, helpers, partials, data, depths) {
  var options = { partial: true, helpers: helpers, partials: partials, data: data, depths: depths };

  if(partial === undefined) {
    throw new Exception("The partial " + name + " could not be found");
  } else if(partial instanceof Function) {
    return partial(context, options);
  }
}

exports.invokePartial = invokePartial;function noop() { return ""; }

exports.noop = noop;function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? createFrame(data) : {};
    data.root = context;
  }
  return data;
}
},{"./base":67,"./exception":76,"./utils":79}],78:[function(require,module,exports){
"use strict";
// Build out our basic SafeString type
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = function() {
  return "" + this.string;
};

exports["default"] = SafeString;
},{}],79:[function(require,module,exports){
"use strict";
/*jshint -W004 */
var SafeString = require("./safe-string")["default"];

var escape = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
};

var badChars = /[&<>"'`]/g;
var possible = /[&<>"'`]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

exports.extend = extend;var toString = Object.prototype.toString;
exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
var isFunction = function(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  isFunction = function(value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
var isFunction;
exports.isFunction = isFunction;
/* istanbul ignore next */
var isArray = Array.isArray || function(value) {
  return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
};
exports.isArray = isArray;

function escapeExpression(string) {
  // don't escape SafeStrings, since they're already safe
  if (string instanceof SafeString) {
    return string.toString();
  } else if (string == null) {
    return "";
  } else if (!string) {
    return string + '';
  }

  // Force a string conversion as this will be done by the append regardless and
  // the regex test will do this transparently behind the scenes, causing issues if
  // an object's to string has escaped characters in it.
  string = "" + string;

  if(!possible.test(string)) { return string; }
  return string.replace(badChars, escapeChar);
}

exports.escapeExpression = escapeExpression;function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

exports.isEmpty = isEmpty;function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}

exports.appendContextPath = appendContextPath;
},{"./safe-string":78}],80:[function(require,module,exports){
// USAGE:
// var handlebars = require('handlebars');

// var local = handlebars.create();

var handlebars = require('../dist/cjs/handlebars')["default"];

handlebars.Visitor = require('../dist/cjs/handlebars/compiler/visitor')["default"];

var printer = require('../dist/cjs/handlebars/compiler/printer');
handlebars.PrintVisitor = printer.PrintVisitor;
handlebars.print = printer.print;

module.exports = handlebars;

// Publish a Node.js require() handler for .handlebars and .hbs files
/* istanbul ignore else */
if (typeof require !== 'undefined' && require.extensions) {
  var extension = function(module, filename) {
    var fs = require("fs");
    var templateString = fs.readFileSync(filename, "utf8");
    module.exports = handlebars.compile(templateString);
  };
  require.extensions[".handlebars"] = extension;
  require.extensions[".hbs"] = extension;
}

},{"../dist/cjs/handlebars":65,"../dist/cjs/handlebars/compiler/printer":74,"../dist/cjs/handlebars/compiler/visitor":75,"fs":64}],81:[function(require,module,exports){
// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = require('./dist/cjs/handlebars.runtime');

},{"./dist/cjs/handlebars.runtime":66}],82:[function(require,module,exports){
module.exports = require("handlebars/runtime")["default"];

},{"handlebars/runtime":81}],83:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v1.11.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:19Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper window is present,
		// execute the factory and get jQuery
		// For environments that do not inherently posses a window with a document
		// (such as Node.js), expose a jQuery-making factory as module.exports
		// This accentuates the need for the creation of a real window
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//

var deletedIds = [];

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.11.3",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call(obj, "constructor") &&
				!hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( support.ownLast ) {
			for ( key in obj ) {
				return hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1, IE<9
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( indexOf ) {
				return indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: function() {
		return +( new Date() );
	},

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];
	nodeType = context.nodeType;

	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	if ( !seed && documentIsHTML ) {

		// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
		if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType !== 1 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Support tests
	---------------------------------------------------------------------- */
	documentIsHTML = !isXML( doc );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\f]' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter(function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.unique( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );

					} else if ( !(--remaining) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( !document.body ) {
			return setTimeout( jQuery.ready );
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * Clean-up method for dom ready events
 */
function detach() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );

	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
		detach();
		jQuery.ready();
	}
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );

		// If IE event model is used
		} else {
			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch(e) {}

			if ( top && top.doScroll ) {
				(function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {
							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll("left");
						} catch(e) {
							return setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				})();
			}
		}
	}
	return readyList.promise( obj );
};


var strundefined = typeof undefined;



// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) {
	break;
}
support.ownLast = i !== "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery(function() {
	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) {
		// Return for frameset docs that don't have a body
		return;
	}

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== strundefined ) {
		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {
			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
});




(function() {
	var div = document.createElement( "div" );

	// Execute the test only if not already executed in another module.
	if (support.deleteExpando == null) {
		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch( e ) {
			support.deleteExpando = false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
})();


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( elem ) {
	var noData = jQuery.noData[ (elem.nodeName + " ").toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute("classid") === noData;
};


var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}

function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {
		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {
		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split(" ");
					}
				}
			} else {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[i] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, null
	} else {
		cache[ id ] = null;
	}
}

jQuery.extend({
	cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: {
		"applet ": true,
		"embed ": true,
		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[0],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each(function() {
				jQuery.data( this, key, value );
			}) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray(data) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};



// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[0], key ) : emptyGet;
};
var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	// Minified: var a,b,c
	var input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		fragment = document.createDocumentFragment();

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );
	div.innerHTML = "<input type='radio' checked='checked' name='t'/>";

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Opera does not clone events (and typeof div.attachEvent === undefined).
	// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
	support.noCloneEvent = true;
	if ( div.attachEvent ) {
		div.attachEvent( "onclick", function() {
			support.noCloneEvent = false;
		});

		div.cloneNode( true ).click();
	}

	// Execute the test only if not already executed in another module.
	if (support.deleteExpando == null) {
		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch( e ) {
			support.deleteExpando = false;
		}
	}
})();


(function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
	for ( i in { submit: true, change: true, focusin: true }) {
		eventName = "on" + i;

		if ( !(support[ i + "Bubbles" ] = eventName in window) ) {
			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i + "Bubbles" ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
})();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {
						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, ret, handleObj, matched, j,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var sel, handleObj, matches, i,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Chrome 23+, Safari?
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {
						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event, to properly expose it to GC
			if ( typeof elem[ name ] === strundefined ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;
		if ( !e ) {
			return;
		}
		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !jQuery._data( form, "submitBubbles" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submit_bubble = true;
					});
					jQuery._data( form, "submitBubbles", true );
				}
			});
			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {
			// If form was submitted by the user, bubble the event up the tree
			if ( event._submit_bubble ) {
				delete event._submit_bubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event, true );
				}
			}
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
						}
						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event, true );
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					jQuery._data( elem, "changeBubbles", true );
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var type, origFn;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
	},
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== strundefined ? context.querySelectorAll( tag || "*" ) :
			undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}

// Used in buildFragment, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[1];
	} else {
		elem.removeAttribute("type");
	}
	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; (elem = elems[i]) != null; i++ ) {
		jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
	}
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( (!support.noCloneEvent || !support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; (node = srcElements[i]) != null; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					fixCloneNodeIssues( node, destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; (node = srcElements[i]) != null; i++ ) {
					cloneCopyEvent( node, destElements[i] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = (rtagName.exec( elem ) || [ "", "" ])[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
								elem.removeChild( tbody );
							}
						}
					}

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		tmp = null;

		return safe;
	},

	cleanData: function( elems, /* internal */ acceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			deleteExpando = support.deleteExpando,
			special = jQuery.event.special;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( acceptData || jQuery.acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// IE does not allow us to delete expando properties from nodes,
						// nor does it have a removeAttribute function on Document nodes;
						// we must handle all of these cases
						if ( deleteExpando ) {
							delete elem[ internalKey ];

						} else if ( typeof elem.removeAttribute !== strundefined ) {
							elem.removeAttribute( internalKey );

						} else {
							elem[ internalKey ] = null;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ (rtagName.exec( value ) || [ "", "" ])[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for (; i < l; i++ ) {
						// Remove element nodes and prevent memory leaks
						elem = this[i] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch(e) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[0],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[0] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[i], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone(true);
			jQuery( insert[i] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optmization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}


(function() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() {
		if ( shrinkWrapBlocksVal != null ) {
			return shrinkWrapBlocksVal;
		}

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {
			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== strundefined ) {
			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		}

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	};

})();
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );



var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) {
	getStyles = function( elem ) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if ( elem.ownerDocument.defaultView.opener ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		}

		return window.getComputedStyle( elem, null );
	};

	curCSS = function( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	};
} else if ( document.documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, computed ) {
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are proportional to the parent element instead
		// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	};
}




function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			var condition = conditionFn();

			if ( condition == null ) {
				// The test was not ready at this point; screw the hook this time
				// but check again when needed next time.
				return;
			}

			if ( condition ) {
				// Hook not needed (or it's not possible to use it due to missing dependency),
				// remove it.
				// Since there are no other hooks for marginRight, remove the whole object.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.

			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	// Minified: var b,c,d,e,f,g, h,i
	var div, style, a, pixelPositionVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal;

	// Setup
	div = document.createElement( "div" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];
	style = a && a.style;

	// Finish early in limited (non-browser) environments
	if ( !style ) {
		return;
	}

	style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" ||
		style.WebkitBoxSizing === "";

	jQuery.extend(support, {
		reliableHiddenOffsets: function() {
			if ( reliableHiddenOffsetsVal == null ) {
				computeStyleTests();
			}
			return reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function() {
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},

		pixelPosition: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelPositionVal;
		},

		// Support: Android 2.3
		reliableMarginRight: function() {
			if ( reliableMarginRightVal == null ) {
				computeStyleTests();
			}
			return reliableMarginRightVal;
		}
	});

	function computeStyleTests() {
		// Minified: var b,c,d,j
		var div, body, container, contents;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {
			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";

		// Support: IE<9
		// Assume reasonable values in the absence of getComputedStyle
		pixelPositionVal = boxSizingReliableVal = false;
		reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9.
		if ( window.getComputedStyle ) {
			pixelPositionVal = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
			boxSizingReliableVal =
				( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

			// Support: Android 2.3
			// Div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			contents.style.cssText = div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents, null ) || {} ).marginRight );

			div.removeChild( contents );
		}

		// Support: IE8
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
		contents = div.getElementsByTagName( "td" );
		contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
		reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
		if ( reliableHiddenOffsetsVal ) {
			contents[ 0 ].style.display = "";
			contents[ 1 ].style.display = "none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
		}

		body.removeChild( container );
	}

})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/,

	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt(0).toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = jQuery._data( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) {
				jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && ( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

if ( !support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// Work around by temporarily setting element display to inline-block
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur()
				// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {
	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	// Minified: var a,b,c,d,e
	var input, div, select, a, opt;

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName("a")[ 0 ];

	// First batch of tests.
	select = document.createElement("select");
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName("input")[ 0 ];

	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute("style") );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute("href") === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement("form").enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
})();


var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) >= 0 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;
					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hook for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		// Use defaultChecked and defaultSelected for oldIE
		} else {
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}

		return name;
	}
};

// Retrieve booleans specially
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {

	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
		function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		} :
		function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
});

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {
				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {
				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					(ret = elem.ownerDocument.createAttribute( name ))
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return (ret = elem.getAttributeNode( name )) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	});
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case senstitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						-1;
			}
		}
	}
});

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {
	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each([ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	});
}

// Support: Safari, IE9+
// mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {
	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {
		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	}) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	// Document location
	ajaxLocParts,
	ajaxLocation,

	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Cross-domain detection vars
			parts,
			// Loop variable
			i,
			// URL without anti-cache param
			cacheURL,
			// Response headers as string
			responseHeadersString,
			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,
			// Response headers
			responseHeaders,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
		(!support.reliableHiddenOffsets() &&
			((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
	// Support: IE6+
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		return !this.isLocal &&

			// Support: IE7-8
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			/^(get|post|head|put|delete|options)$/i.test( this.type ) &&

			createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	});
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport(function( options ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open( options.type, options.url, options.async, options.username, options.password );

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch( e ) {
									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;
								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					if ( !options.async ) {
						// if we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {
						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						setTimeout( callback );
					} else {
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	});
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch( e ) {}
}




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery("head")[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement("script");

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, response, type,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};





var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray("auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? (prop in win) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));

},{}],84:[function(require,module,exports){
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}],85:[function(require,module,exports){
'use strict';

var Modal = require('../../campaign/js/helpers/modal');

var channels = {};

window.IFrameController = window.IFrameController || {};

// iFrame data receiver
window.iFrameReceiver = function(channel, data){

	Modal.remove();

	if (typeof channels[channel] === 'function') {
		channels[channel](data);
	}
};

window.IFrameController.RegisterHandler = function(channel, func) {

	if (typeof func !== 'function') {
		console.log('IFrameController.RegisterHandler: [Error] Passed value is not a function.');
	}

	channels[channel] = func;
};
},{"../../campaign/js/helpers/modal":52}],86:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
require('backbone-deep-model');

module.exports = Backbone.DeepModel.extend({

    urlRoot: '/api/campaigns/campaign/',

    sync: function (method, model, options){
        return Backbone.sync(method, model, options);
    },

    url: function(){
        if( this.get('draft') ){
            return this.urlRoot + this.id + '/draft';
        } else {
            return this.urlRoot + this.id;
        }
    },

    initialize: function() {
		var campaign = this.get('campaign');

        if (campaign.form.communication_preferences.heading.length === 0) {
			campaign.form.communication_preferences.heading = 'Join us';
        }
        if (campaign.form.communication_preferences.copy_1.length === 0) {
            campaign.form.communication_preferences.copy_1 = '<h3>Become part of the movement to bring forward the day when all cancers are cured.</h3>';
        }
        if (campaign.form.communication_preferences.copy_2.length === 0) {
            campaign.form.communication_preferences.copy_2 = '<p>Hear about our latest breakthroughs, campaigns and how you can help support our life saving work.</p>';
        }
        if (campaign.form.default_copy_other_amount.length === 0) {
            campaign.form.default_copy_other_amount = 'Enter own amount:';
        }
        if (campaign.form.motivation.heading.length === 0) {
            campaign.form.motivation.heading = 'Your motivation';
        }
        if (campaign.form.motivation.intro_copy.length === 0) {
            campaign.form.motivation.intro_copy= 'Would you like to tell us why you are making this donation?';
        }
        if (campaign.form.personal_details.heading.length === 0) {
            campaign.form.personal_details.heading = 'Personal details';
        }
        if (campaign.form.gift_aid.heading.length === 0) {
            campaign.form.gift_aid.heading = 'About your donation';
        }
        if (campaign.form.gift_aid.intro_copy.length === 0) {
            campaign.form.gift_aid.intro_copy = 'Who are you making this donation on behalf of?';
        }
        if (campaign.form.gift_aid.title.length === 0) {
            campaign.form.gift_aid.title = 'Are you a UK taxpayer?';
        }
        if (campaign.form.gift_aid.logo.url === undefined) {
            campaign.form.gift_aid.logo.url = '/assets/themes/cruk/campaign/images/gift_aid_logo.png';
        }
        if (campaign.form.gift_aid.graphic_encouragement.url === undefined) {
            campaign.form.gift_aid.graphic_encouragement.url = '/assets/themes/cruk/campaign/images/giftAidG1.png';
        }
        if (campaign.form.gift_aid.graph_ticked.url === undefined) {
            campaign.form.gift_aid.graph_ticked.url = '/assets/themes/cruk/campaign/images/giftAidG2.png';
        }
        if (campaign.form.gift_aid.heading.length === 0) {
            campaign.form.gift_aid.heading = 'Are you a UK tax payer?';
        }
        if (campaign.form.gift_aid.gift_aid_button_copy.length === 0) {
            campaign.form.gift_aid.gift_aid_button_copy = 'Yes I would like Cancer Research UK to claim Gift Aid on my donation';
        }
        if (campaign.form.gift_aid.gift_aid_tscs.length === 0) {
            campaign.form.gift_aid.gift_aid_tscs = '<p>I want all donations I\'ve made to Cancer Research UK in the past four years and all donations in future to be treated as Gift Aid donations until I notify you otherwise. To qualify for Gift Aid, what you pay in income or capital gains tax must at least equal the amount claimed by all charities and CASCs in the tax year from HMRC. Council Tax and VAT do not qualify. Cancer Research UK will claim 25p on every £1 you donate.</p>';
        }
    }
});
},{"backbone":63,"backbone-deep-model":62}],87:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
	url: '/api/motivations/all'
});
},{"backbone":63}],88:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
require('backbone-deep-model');
var amplify = require('amplify');
var _ = require('underscore');

require('jquery.geturlparam');

module.exports = Backbone.DeepModel.extend({
    urlRoot: '/api/payments/payment/',

	defaults: {
		supplementary: {
			private: {
				modified_address: 'NV',
        suppression_email: 'PUEM',
        suppression_text: 'PUSM',
        suppression_phone: 'PUPH',
        suppression_post: 'PUPO'
			}
		}
	},

    paymentUrl: function(id) {
      return this.urlRoot + id + '?auth_token=' + amplify.store.sessionStorage('PaymentCache').token;
    },

    confirmUrl: function() {
        return this.urlRoot + 'confirm/' + this.id + '?auth_token=' + amplify.store.sessionStorage('PaymentCache').token;
    },

	save: function(attrs, options) {
		var optionsCopy = options || {};
		var attrCopy = attrs || _.clone(this.attributes);

		// Filter the data to send to the server
		delete attrCopy.status;

        optionsCopy.contentType = 'application/json';
		optionsCopy.data = JSON.stringify(attrCopy);

		// Proxy the call to the original save function
		Backbone.Model.prototype.save.call(this, attrCopy, optionsCopy);
	},

    prepopulate: function() {
        /* for testing */
        this.set('payment_amount', 50);
        this.set('payment_currency', 'GBP');
        this.set('optin.giftaid', true);
        this.set('supplementary.private.motivation', 'I\'m celebrating someone close to me beating cancer');

        // set name
        this.set('address.salutation', 'Mr');
        this.set('address.first_name', 'Bob');
        this.set('address.last_name', 'Individual');

        // ind address
        this.set('address.country', 'GB');
        this.set('address.postal_code', 'N7 0AS');
        this.set('address.line1', 'Test Address Line 1');
        this.set('address.line2', 'Test Address Line 2');
        this.set('address.line3', 'Test Address Line 3');
        this.set('address.town', 'London');
        this.set('address.phone', '123456789');
        this.set('address.email', 'paul@hmd.io');

        // Card details
        this.set('payment_card.type', 'VISA');
        this.set('payment_card.name', 'Bob Individual');
        this.set('payment_card.number', '4111111111111111');
        this.set('payment_card.expiry_date.year', '2015');
        this.set('payment_card.expiry_date.month', '07');
        this.set('payment_card.cvc', '123');
    }
});

},{"amplify":56,"backbone":63,"backbone-deep-model":62,"jquery":83,"jquery.geturlparam":58,"underscore":84}],89:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
require('backbone-deep-model');
var amplify = require('amplify');
var _ = require('underscore');

require('jquery.geturlparam');

module.exports = Backbone.DeepModel.extend({
    urlRoot: '/api/recurrent-payments/recurrent-payment/',

	paymentUrl: function(id) {
		return this.urlRoot + id + '?auth_token=' + amplify.store.sessionStorage('PaymentCache').token;
	},

	defaults: {
		supplementary: {
			private: {
				modified_address: 'NV',
        suppression_email: 'PUEM',
        suppression_text: 'PUSM',
        suppression_phone: 'PUPH',
        suppression_post: 'PUPO'
			}
		}
	},

	save: function(attrs, options) {
		var optionsCopy = options || {};
		var attrCopy = attrs || _.clone(this.attributes);

		// Filter the data to send to the server
		delete attrCopy.status;

		optionsCopy.data = JSON.stringify(attrCopy);

		// Proxy the call to the original save function
		Backbone.Model.prototype.save.call(this, attrCopy, optionsCopy);
	},

	prepopulate: function() {
		this.set('payment_amount', 50);
		this.set('payment_currency', 'GBP');
		this.set('optin.giftaid', true);
		this.set('supplementary.private.motivation', 'I\'m celebrating someone close to me beating cancer');

		// set name
		this.set('address.salutation', 'Mr');
		this.set('address.first_name', 'Bob');
		this.set('address.last_name', 'Individual');

		// ind address
		this.set('address.country', 'GB');
		this.set('address.postal_code', 'N7 0AS');
		this.set('address.line1', 'Test Address Line 1');
		this.set('address.line2', 'Test Address Line 2');
		this.set('address.line3', 'Test Address Line 3');
		this.set('address.town', 'London');
		this.set('address.phone', '123456789');
		this.set('address.email', 'paul@hmd.io');

		// Direct debit details
		this.set('frequency', 'monthly');
		this.set('day', '5');
		this.set('bank_account.account_name', 'Bob Individual');
		this.set('bank_account.account_number', '12345678');
		this.set('bank_account.sort_code', '00-00-99');
		this.set('bank_account.address.organisation_name', 'HMDB');
		this.set('bank_account.address.line1', '123 Bank Street');
		this.set('bank_account.address.line2', 'Bank District');
		this.set('bank_account.address.town', 'Bank Town');
		this.set('bank_account.address.postal_code', 'R11 4DS');
		this.set('bank_account.address.country', 'GB');

		// comment
		this.set('supplementary.golden_question', 'Test comment');
	}
});

},{"amplify":56,"backbone":63,"backbone-deep-model":62,"jquery":83,"jquery.geturlparam":58,"underscore":84}],90:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
require('backbone-deep-model');

module.exports = Backbone.DeepModel.extend({

});
},{"backbone":63,"backbone-deep-model":62}],91:[function(require,module,exports){
'use strict';

var Backbone = require('backbone');
var _ = require('underscore');

var RestrictionModel = require('./Restriction');

module.exports = Backbone.Collection.extend({
	url: '/api/restrictions/all',

	model: RestrictionModel,

	filtered: function(preferences, sorted) {
		var restrictions = preferences.fields;
		var self = this;
		var array = [];

		if (preferences.active) {
			_.each(restrictions, function(restriction) {
				_.find(self.toJSON(), function(res) {
					if (res.code === restriction.field_name) {
						if (restriction.featured) {
							res.featured = true;
						}

						array.push(res);
					}
				});
			});
		}

		if (sorted) {
			array.sort(this.compare);
		}

		return array;
	},

	compare: function(a, b) {
		if (a.title < b.title) {
			return -1;
		}

		if (a.title > b.title) {
			return 1;
		}

		return 0;
	}
});
},{"./Restriction":90,"backbone":63,"underscore":84}]},{},[55])
;