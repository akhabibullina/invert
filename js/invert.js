/**
 * Created by akhabibullina.
 */
(function ($) {
  "use strict";
  var methods = {
    init: function (el) {
      //
    },

    invert: function(contrast) {
      var $el = this;
      var contrast = contrast || 'full';
      var cssInvert = {
        empty   : {'-webkit-filter': ''}
        , full    : {'-webkit-filter': 'invert(1)'}
        , none    : {'-webkit-filter': 'none'}
      };
      $el.css(cssInvert[contrast]);
    }
  };

  $.fn.invert = function (options) {
    var $invertBox = this;

    // Method calling logic
    if (methods[options]) {
      return methods[options].apply($invertBox, Array.prototype.slice.call(arguments, 1));
    } else if (typeof options === 'object' || !options) {
      return methods.init.apply($invertBox, arguments);
    } else {
      $.error('Method ' +  options + ' does not exist on chat');
    }
  };

}(jQuery));
