/**
 * Created by admin on 4/7/2015.
 */
var contrastTypesEnum = ['empty', 'full'];
var contrastIndex = 0;

$(document).on('keypress', function() {
	contrastIndex = +!contrastIndex;
	$('body').invert('invert', contrastTypesEnum[contrastIndex]);
});

$(document).ready(function() {

	$("body").addClass("loaded");

	$(function () {
		$('a[rel="lightbox"]').fluidbox();
	})

});
