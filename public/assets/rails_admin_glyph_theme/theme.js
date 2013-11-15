/**
* Bootstrap.js by @mdo and @fat, extended by @ArnoldDaniels.
* plugins: bootstrap-fileupload.js
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/

!function(e){var t=function(t,n){this.$element=e(t),this.type=this.$element.data("uploadtype")||(this.$element.find(".thumbnail").length>0?"image":"file"),this.$input=this.$element.find(":file");if(this.$input.length===0)return;this.name=this.$input.attr("name")||n.name,this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),this.$hidden.length===0&&(this.$hidden=e('<input type="hidden" />'),this.$element.prepend(this.$hidden)),this.$preview=this.$element.find(".fileupload-preview");var r=this.$preview.css("height");this.$preview.css("display")!="inline"&&r!="0px"&&r!="none"&&this.$preview.css("line-height",r),this.original={exists:this.$element.hasClass("fileupload-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.$remove=this.$element.find('[data-dismiss="fileupload"]'),this.$element.find('[data-trigger="fileupload"]').on("click.fileupload",e.proxy(this.trigger,this)),this.listen()};t.prototype={listen:function(){this.$input.on("change.fileupload",e.proxy(this.change,this)),e(this.$input[0].form).on("reset.fileupload",e.proxy(this.reset,this)),this.$remove&&this.$remove.on("click.fileupload",e.proxy(this.clear,this))},change:function(e,t){if(t==="clear")return;var n=e.target.files!==undefined?e.target.files[0]:e.target.value?{name:e.target.value.replace(/^.+\\/,"")}:null;if(!n){this.clear();return}this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name);if(this.type==="image"&&this.$preview.length>0&&(typeof n.type!="undefined"?n.type.match("image.*"):n.name.match(/\.(gif|png|jpe?g)$/i))&&typeof FileReader!="undefined"){var r=new FileReader,i=this.$preview,s=this.$element;r.onload=function(e){i.html('<img src="'+e.target.result+'" '+(i.css("max-height")!="none"?'style="max-height: '+i.css("max-height")+';"':"")+" />"),s.addClass("fileupload-exists").removeClass("fileupload-new")},r.readAsDataURL(n)}else this.$preview.text(n.name),this.$element.addClass("fileupload-exists").removeClass("fileupload-new")},clear:function(e){this.$hidden.val(""),this.$hidden.attr("name",this.name),this.$input.attr("name","");if(navigator.userAgent.match(/msie/i)){var t=this.$input.clone(!0);this.$input.after(t),this.$input.remove(),this.$input=t}else this.$input.val("");this.$preview.html(""),this.$element.addClass("fileupload-new").removeClass("fileupload-exists"),e&&(this.$input.trigger("change",["clear"]),e.preventDefault())},reset:function(e){this.clear(),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),this.original.exists?this.$element.addClass("fileupload-exists").removeClass("fileupload-new"):this.$element.addClass("fileupload-new").removeClass("fileupload-exists")},trigger:function(e){this.$input.trigger("click"),e.preventDefault()}},e.fn.fileupload=function(n){return this.each(function(){var r=e(this),i=r.data("fileupload");i||r.data("fileupload",i=new t(this,n)),typeof n=="string"&&i[n]()})},e.fn.fileupload.Constructor=t,e(document).on("click.fileupload.data-api",'[data-provides="fileupload"]',function(t){var n=e(this);if(n.data("fileupload"))return;n.fileupload(n.data());var r=e(t.target).closest('[data-dismiss="fileupload"],[data-trigger="fileupload"]');r.length>0&&(r.trigger("click.fileupload"),t.preventDefault())})}(window.jQuery)
;
!function(b){var a=function(d,c,f){if(f){f.stopPropagation();f.preventDefault()}this.$element=b(d);this.$newElement=null;this.button=null;this.options=b.extend({},b.fn.selectpicker.defaults,this.$element.data(),typeof c=="object"&&c);if(this.options.title==null){this.options.title=this.$element.attr("title")}this.val=a.prototype.val;this.render=a.prototype.render;this.init()};a.prototype={constructor:a,init:function(o){this.$element.hide();this.multiple=this.$element.prop("multiple");var f=this.$element.attr("class")!==undefined?this.$element.attr("class").split(/\s+/):"";var d=this.$element.attr("id");this.$element.after(this.createView());this.$newElement=this.$element.next(".bootstrap-select");var s=this.$newElement;var g=this.$newElement.find(".dropdown-menu");var n=g.find("li > a");var r=parseInt(n.css("line-height"))+n.outerHeight();var k=g.find("li .divider").outerHeight(true);var j=this.$newElement.offset().top;var u=0;var h=0;var m=this.$newElement.outerHeight();this.button=this.$newElement.find("> button");if(d!==undefined){this.button.attr("id",d);b('label[for="'+d+'"]').click(function(){s.find("button#"+d).focus()})}for(var l=0;l<f.length;l++){if(f[l]!="selectpicker"){this.$newElement.addClass(f[l])}}if(this.multiple){this.$newElement.addClass("show-tick")}this.button.addClass(this.options.style);this.checkDisabled();this.checkTabIndex();this.clickListener();var c=parseInt(g.css("padding-top"))+parseInt(g.css("padding-bottom"))+parseInt(g.css("border-top-width"))+parseInt(g.css("border-bottom-width"));if(this.options.size=="auto"){function t(){var e=j-b(window).scrollTop();var w=window.innerHeight;var i=c+parseInt(g.css("margin-top"))+parseInt(g.css("margin-bottom"))+2;var v=w-e-m-i;h=v;if(s.hasClass("dropup")){h=e-i}g.css({"max-height":h+"px","overflow-y":"auto","min-height":r*3+"px"})}t();b(window).resize(t);b(window).scroll(t);this.$element.bind("DOMNodeInserted",t)}else{if(this.options.size&&this.options.size!="auto"&&g.find("li").length>this.options.size){var q=g.find("li > *").filter(":not(.div-contain)").slice(0,this.options.size).last().parent().index();var p=g.find("li").slice(0,q+1).find(".div-contain").length;h=r*this.options.size+p*k+c;g.css({"max-height":h+"px","overflow-y":"scroll"})}}this.$element.bind("DOMNodeInserted",b.proxy(this.reloadLi,this));this.render()},createDropdown:function(){var c="<div class='btn-group bootstrap-select'><button class='btn dropdown-toggle clearfix' data-toggle='dropdown'><span class='filter-option pull-left'></span>&nbsp;<span class='caret'></span></button><ul class='dropdown-menu' role='menu'></ul></div>";return b(c)},createView:function(){var c=this.createDropdown();var d=this.createLi();c.find("ul").append(d);return c},reloadLi:function(){this.destroyLi();$li=this.createLi();this.$newElement.find("ul").append($li);this.render()},destroyLi:function(){this.$newElement.find("li").remove()},createLi:function(){var h=this;var e=[];var g=[];var c="";this.$element.find("option").each(function(){e.push(b(this).text())});this.$element.find("option").each(function(k){var n=b(this).attr("class")!==undefined?b(this).attr("class"):"";var m=b(this).text();var l=b(this).data("subtext")!==undefined?'<small class="muted">'+b(this).data("subtext")+"</small>":"";m+=l;if(b(this).parent().is("optgroup")&&b(this).data("divider")!=true){if(b(this).index()==0){var j=b(this).parent().attr("label");var i=b(this).parent().data("subtext")!==undefined?'<small class="muted">'+b(this).parent().data("subtext")+"</small>":"";j+=i;if(b(this)[0].index!=0){g.push('<div class="div-contain"><div class="divider"></div></div><dt>'+j+"</dt>"+h.createA(m,"opt "+n))}else{g.push("<dt>"+j+"</dt>"+h.createA(m,"opt "+n))}}else{g.push(h.createA(m,"opt "+n))}}else{if(b(this).data("divider")==true){g.push('<div class="div-contain"><div class="divider"></div></div>')}else{g.push(h.createA(m,n))}}});if(e.length>0){for(var d=0;d<e.length;d++){var f=this.$element.find("option").eq(d);c+="<li rel="+d+">"+g[d]+"</li>"}}if(this.$element.find("option:selected").length==0&&!h.options.title){this.$element.find("option").eq(0).prop("selected",true).attr("selected","selected")}return b(c)},createA:function(d,c){return'<a tabindex="-1" href="#" class="'+c+'"><span class="pull-left">'+d+'</span><i class="icon-ok pull-right check-mark"></i></a>'},render:function(){var f=this;this.$element.find("option").each(function(g){f.setDisabled(g,b(this).is(":disabled")||b(this).parent().is(":disabled"));f.setSelected(g,b(this).is(":selected"))});var e=this.$element.find("option:selected").map(function(g,h){if(b(this).attr("title")!=undefined){return b(this).attr("title")}else{return b(this).text()}}).toArray();var d=e.join(", ");if(f.multiple&&f.options.selectedTextFormat.indexOf("count")>-1){var c=f.options.selectedTextFormat.split(">");if((c.length>1&&e.length>c[1])||(c.length==1&&e.length>=2)){d=e.length+" of "+this.$element.find("option").length+" selected"}}if(!d){d=f.options.title!=undefined?f.options.title:f.options.noneSelectedText}this.$element.next(".bootstrap-select").find(".filter-option").html(d)},setSelected:function(c,d){if(d){this.$newElement.find("li").eq(c).addClass("selected")}else{this.$newElement.find("li").eq(c).removeClass("selected")}},setDisabled:function(c,d){if(d){this.$newElement.find("li").eq(c).addClass("disabled")}else{this.$newElement.find("li").eq(c).removeClass("disabled")}},checkDisabled:function(){if(this.$element.is(":disabled")){this.button.addClass("disabled");this.button.click(function(c){c.preventDefault()})}},checkTabIndex:function(){if(this.$element.is("[tabindex]")){var c=this.$element.attr("tabindex");this.button.attr("tabindex",c)}},clickListener:function(){var c=this;b("body").on("touchstart.dropdown",".dropdown-menu",function(d){d.stopPropagation()});this.$newElement.on("click","li a",function(i){var g=b(this).parent().index(),h=b(this).parent(),d=h.parents(".bootstrap-select");if(c.multiple){i.stopPropagation()}i.preventDefault();if(d.prev("select").not(":disabled")&&!b(this).parent().hasClass("disabled")){if(!c.multiple){d.prev("select").find("option").removeAttr("selected");d.prev("select").find("option").eq(g).prop("selected",true).attr("selected","selected")}else{var f=d.prev("select").find("option").eq(g).prop("selected");if(f){d.prev("select").find("option").eq(g).removeAttr("selected")}else{d.prev("select").find("option").eq(g).prop("selected",true).attr("selected","selected")}}d.find(".filter-option").html(h.text());d.find("button").focus();d.prev("select").trigger("change")}});this.$newElement.on("click","li.disabled a, li dt, li .div-contain",function(d){d.preventDefault();d.stopPropagation();$select=b(this).parent().parents(".bootstrap-select");$select.find("button").focus()});this.$element.on("change",function(d){c.render()})},val:function(c){if(c!=undefined){this.$element.val(c);this.$element.trigger("change");return this.$element}else{return this.$element.val()}}};b.fn.selectpicker=function(e,f){var c=arguments;var g;var d=this.each(function(){var l=b(this),k=l.data("selectpicker"),h=typeof e=="object"&&e;if(!k){l.data("selectpicker",(k=new a(this,h,f)))}else{for(var j in e){k[j]=e[j]}}if(typeof e=="string"){property=e;if(k[property] instanceof Function){[].shift.apply(c);g=k[property].apply(k,c)}else{g=k[property]}}});if(g!=undefined){return g}else{return d}};b.fn.selectpicker.defaults={style:null,size:"auto",title:null,selectedTextFormat:"values",noneSelectedText:"Nothing selected"}}(window.jQuery);
// Custom checkbox and radios
function setupLabel() {
    // Checkbox
    var checkBox = ".checkbox";
    var checkBoxInput = checkBox + " input[type='checkbox']";
    var checkBoxChecked = "checked";
    var checkBoxDisabled = "disabled";

    // Radio
    var radio = ".radio";
    var radioInput = radio + " input[type='radio']";
    var radioOn = "checked";
    var radioDisabled = "disabled";

    // Checkboxes
    if ($(checkBoxInput).length) {
        $(checkBox).each(function(){
            $(this).removeClass(checkBoxChecked);
        });
        $(checkBoxInput + ":checked").each(function(){
            $(this).parent(checkBox).addClass(checkBoxChecked);
        });
        $(checkBoxInput + ":disabled").each(function(){
            $(this).parent(checkBox).addClass(checkBoxDisabled);
        });
    };

    // Radios
    if ($(radioInput).length) {
        $(radio).each(function(){
            $(this).removeClass(radioOn);
        });
        $(radioInput + ":checked").each(function(){
            $(this).parent(radio).addClass(radioOn);
        });
        $(radioInput + ":disabled").each(function(){
            $(this).parent(radio).addClass(radioDisabled);
        });
    };
};


var toggleHandler = function(toggle) {
    var toggle = toggle;
    var radio = $(toggle).find("input");

    var checkToggleState = function() {
        if (radio.eq(0).is(":checked")) {
            $(toggle).removeClass("toggle-off");
        } else {
            $(toggle).addClass("toggle-off");
        }
    };

    checkToggleState();

    radio.eq(0).click(function() {
        $(toggle).toggleClass("toggle-off");
    });

    radio.eq(1).click(function() {
        $(toggle).toggleClass("toggle-off");
    });
};

$(document).ready(function() {
    $(".toggle").each(function(index, toggle) {
        toggleHandler(toggle);
    });
});
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssclasses-addtest-teststyles
 */

;window.Modernizr=function(a,b,c){function v(a){j.cssText=a}function w(a,b){return v(prefixes.join(a+";")+(b||""))}function x(a,b){return typeof a===b}function y(a,b){return!!~(""+a).indexOf(b)}function z(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:x(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={},n={},o={},p=[],q=p.slice,r,s=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},t={}.hasOwnProperty,u;!x(t,"undefined")&&!x(t.call,"undefined")?u=function(a,b){return t.call(a,b)}:u=function(a,b){return b in a&&x(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e});for(var A in m)u(m,A)&&(r=A.toLowerCase(),e[r]=m[A](),p.push((e[r]?"":"no-")+r));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)u(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},v(""),i=k=null,e._version=d,e.testStyles=s,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+p.join(" "):""),e}(this,this.document);

// Detects if the browser is wrongly adding padding to min-height
// by Volker Rose | @riddla
// http://volker-rose.de/blog/box-sizing-and-min-height-css-trouble-within-firefox/
// http://jsfiddle.net/riddla/4bP73/
Modernizr.testStyles('#modernizr { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; min-height: 100px; padding-top: 10px; position: absolute; top: -2000em; }', function(elem, rule){
    Modernizr.addTest('padding-added-to-minheight', elem.scrollHeight === 110);
});
/*
 * Fuel UX Spinner
 * https://github.com/ExactTarget/fuelux
 *
 * Copyright (c) 2012 ExactTarget
 * Licensed under the MIT license.
 */


!function ($) {

	// SPINNER CONSTRUCTOR AND PROTOTYPE

	var Spinner = function (element, options) {
		this.$element = $(element);
		this.options = $.extend({}, $.fn.spinner.defaults, options);
		this.$input = this.$element.find('.spinner-input');
		this.$element.on('keyup', this.$input, $.proxy(this.change, this));

		if (this.options.hold) {
			this.$element.on('mousedown', '.spinner-up', $.proxy(function() { this.startSpin(true); } , this));
			this.$element.on('mouseup', '.spinner-up, .spinner-down', $.proxy(this.stopSpin, this));
			this.$element.on('mouseout', '.spinner-up, .spinner-down', $.proxy(this.stopSpin, this));
			this.$element.on('mousedown', '.spinner-down', $.proxy(function() {this.startSpin(false);} , this));
		} else {
			this.$element.on('click', '.spinner-up', $.proxy(function() { this.step(true); } , this));
			this.$element.on('click', '.spinner-down', $.proxy(function() { this.step(false); }, this));
		}

		this.switches = {
			count: 1,
			enabled: true
		};

		if (this.options.speed === 'medium') {
			this.switches.speed = 300;
		} else if (this.options.speed === 'fast') {
			this.switches.speed = 100;
		} else {
			this.switches.speed = 500;
		}

		this.lastValue = null;

		this.render();

		if (this.options.disabled) {
			this.disable();
		}
	};

	Spinner.prototype = {
		constructor: Spinner,

		render: function () {
			this.$input.val(this.options.value);
			this.$input.attr('maxlength',(this.options.max + '').split('').length);
		},

		change: function () {
			var newVal = this.$input.val();

			if(newVal/1){
				this.options.value = newVal/1;
			}else{
				newVal = newVal.replace(/[^0-9]/g,'');
				this.$input.val(newVal);
				this.options.value = newVal/1;
			}

			this.triggerChangedEvent();
		},

		stopSpin: function () {
			clearTimeout(this.switches.timeout);
			this.switches.count = 1;
			this.triggerChangedEvent();
		},

		triggerChangedEvent: function () {
			var currentValue = this.value();
			if (currentValue === this.lastValue) return;

			this.lastValue = currentValue;

			// Primary changed event
			this.$element.trigger('changed', currentValue);

			// Undocumented, kept for backward compatibility
			this.$element.trigger('change');
		},

		startSpin: function (type) {

			if (!this.options.disabled) {
				var divisor = this.switches.count;

				if (divisor === 1) {
					this.step(type);
					divisor = 1;
				} else if (divisor < 3){
					divisor = 1.5;
				} else if (divisor < 8){
					divisor = 2.5;
				} else {
					divisor = 4;
				}

				this.switches.timeout = setTimeout($.proxy(function() {this.iterator(type);} ,this),this.switches.speed/divisor);
				this.switches.count++;
			}
		},

		iterator: function (type) {
			this.step(type);
			this.startSpin(type);
		},

		step: function (dir) {
			var curValue = this.options.value;
			var limValue = dir ? this.options.max : this.options.min;

			if ((dir ? curValue < limValue : curValue > limValue)) {
				var newVal = curValue + (dir ? 1 : -1) * this.options.step;

				if (dir ? newVal > limValue : newVal < limValue) {
					this.value(limValue);
				} else {
					this.value(newVal);
				}
			}
		},

		value: function (value) {
			if (!isNaN(parseFloat(value)) && isFinite(value)) {
				value = parseFloat(value);
				this.options.value = value;
				this.$input.val(value);
				return this;
			} else {
				return this.options.value;
			}
		},

		disable: function () {
			this.options.disabled = true;
			this.$input.attr('disabled','');
			this.$element.find('button').addClass('disabled');
		},

		enable: function () {
			this.options.disabled = false;
			this.$input.removeAttr("disabled");
			this.$element.find('button').removeClass('disabled');
		}
	};


	// SPINNER PLUGIN DEFINITION

	$.fn.spinner = function (option,value) {
		var methodReturn;

		var $set = this.each(function () {
			var $this = $(this);
			var data = $this.data('spinner');
			var options = typeof option === 'object' && option;

			if (!data) $this.data('spinner', (data = new Spinner(this, options)));
			if (typeof option === 'string') methodReturn = data[option](value);
		});

		return (methodReturn === undefined) ? $set : methodReturn;
	};

	$.fn.spinner.defaults = {
		value: 1,
		min: 1,
		max: 999,
		step: 1,
		hold: true,
		speed: 'medium',
		disabled: false
	};

	$.fn.spinner.Constructor = Spinner;


	// SPINNER DATA-API

	$(function () {
		$('body').on('mousedown.spinner.data-api', '.spinner', function (e) {
			var $this = $(this);
			if ($this.data('spinner')) return;
			$this.spinner($this.data());
		});
	});

}(window.jQuery);
(function() {
  var CheckboxBuilder, FileUploadBuilder, FormInputs, SelectBuilder, SpinnerBuilder;

  FileUploadBuilder = (function() {
    FileUploadBuilder.prototype.template = "<div class=\"fileupload fileupload-new\" data-provides=\"fileupload\">\n  <div class=\"input-append\">\n    <div class=\"uneditable-input span3\">\n      <i class=\"icon-file fileupload-exists\"></i>\n      <span class=\"fileupload-preview\"></span>\n    </div>\n    <span class=\"btn btn-file\">\n      <span class=\"fileupload-new\">Sélectionnez</span>\n      <span class=\"fileupload-exists\">Changer</span>\n    </span>\n    <a class=\"btn fileupload-exists\" data-dismiss=\"fileupload\" href=\"#\">Supprimer</a>\n  </div>\n</div>";

    function FileUploadBuilder($el) {
      var $container, $uploadedFile;
      this.$el = $el;
      $uploadedFile = this.$el.parent().find('a, img').addClass('uploaded-file').remove();
      if (!this.$el.data("file-upload")) {
        $container = this.$el.parent().html(this.template);
        $container.find(".btn-file").append(this.$el);
        if ($uploadedFile.length) {
          $container.prepend($uploadedFile);
        }
        this.$el.data("file-upload", this);
      }
    }

    return FileUploadBuilder;

  })();

  CheckboxBuilder = (function() {
    function CheckboxBuilder($el) {
      this.$el = $el;
      if (!this.$el.data("checkbox")) {
        this.$el.wrap('<label class="checkbox"/>');
        this.$el.closest('.checkbox').prepend("<span class='icon'></span><span class='icon-to-fade'></span>");
        this.$el.closest(".checkbox").on('click', function() {
          return setupLabel();
        });
        setupLabel();
        this.$el.data("checkbox", this);
      }
    }

    return CheckboxBuilder;

  })();

  SpinnerBuilder = (function() {
    SpinnerBuilder.prototype.template = "<div class='spinner-buttons btn-group btn-group-vertical'>\n  <button class='btn spinner-up' type='button'>\n    <i class='icon-chevron-up'></i>\n  </button>\n  <button class='btn spinner-down' type='button'>\n    <i class='icon-chevron-down'></i>\n  </button>\n</div>";

    function SpinnerBuilder($el) {
      var $spinner_wrapper;
      this.$el = $el;
      if (!this.$el.data("spinner")) {
        this.$el.addClass("spinner-input");
        $spinner_wrapper = this.$el.wrap("<div class='spinner'/>");
        $(this.template).insertAfter(this.$el);
        this.$el.data("spinner", this);
      }
    }

    return SpinnerBuilder;

  })();

  SelectBuilder = (function() {
    function SelectBuilder($el) {
      var $jqueryMultiSelect, $jquerySelect;
      this.$el = $el;
      $jquerySelect = this.$el.closest('.controls').find('.filtering-select');
      if ($jquerySelect.length) {

      } else {
        if (!this.$el.data("select")) {
          $jqueryMultiSelect = this.$el.closest('.controls').find('.ra-multiselect').remove();
          this.$el.closest('select').selectpicker({
            title: '-- Selectionnez --'
          });
          this.$el.data("select", this);
        }
      }
    }

    return SelectBuilder;

  })();

  FormInputs = (function() {
    FormInputs.prototype.fieldTypes = {
      'input[type="file"]': FileUploadBuilder,
      'input[type="number"]': SpinnerBuilder,
      'input[type="checkbox"]:visible': CheckboxBuilder,
      'select': SelectBuilder
    };

    function FormInputs(selector, options) {
      var _this = this;
      this.selector = selector;
      if (options == null) {
        options = {};
      }
      $(document).on("ready pjax:end nested:fieldAdded", function() {
        _this.$el = $(_this.selector);
        return _this.processFields();
      });
    }

    FormInputs.prototype.processFields = function() {
      var _this = this;
      return $.each(this.fieldTypes, function(selector, klass) {
        return _this.$el.find(selector).each(function() {
          return new klass($(this));
        });
      });
    };

    return FormInputs;

  })();

  $(function() {
    $("body").on("touchstart.dropdown", ".dropdown-menu", function(e) {
      return e.stopPropagation();
    });
    $("body.rails_admin").addClass('glyph-theme-js');
    new FormInputs("form");
    $(document).on("click", "#list input.toggle", function() {
      return $("#list [name='bulk_ids[]']").prop("checked", $(this).is(":checked")).closest('.checkbox').toggleClass('checked');
    });
    return $(document).on("click", "#fields_to_export label input#check_all", function() {
      var $checbox_checked, elems;
      elems = $("#fields_to_export label input");
      $checbox_checked = $("#fields_to_export label input#check_all").is(":checked");
      if ($checbox_checked) {
        $(elems).closest('.checkbox').addClass('checked');
        return $(elems).prop("checked", true);
      } else {
        $(elems).closest('.checkbox').removeClass('checked');
        return $(elems).prop("checked", false);
      }
    });
  });

}).call(this);



