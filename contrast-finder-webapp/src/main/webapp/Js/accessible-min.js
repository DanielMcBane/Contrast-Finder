$(document).ready(function(){var a=$("#contrast-solution caption").text();$.tablesorter.addWidget({id:"addA11y",format:function(b){jQuery("tr",b).each(function(c){$("th."+b.config.cssHeader,this).each(function(b){$("span.offscreen",this).each(function(a){$(this).remove()}),$("#contrast-solution caption").text(a),$(this).removeAttr("aria-sort");var c="fr"===$("html").attr("lang")?"Non trié":"Sortable, Not Sorted";$(this).append($("<span>").addClass("offscreen").text(c))}),$(this).find("th."+b.config.cssAsc).each(function(b){$("span.offscreen",this).each(function(a){$(this).remove()});var c=$(this).text();$("#contrast-solution caption").text(a+": Sorted By "+c+" Descending "),$(this).attr("aria-sort","descending");var d="fr"===$("html").attr("lang")?"Triez dans l'ordre décroissant":"Sortable, Sorted Descending";$(this).append($("<span>").addClass("offscreen").text(d))}),$("th."+b.config.cssDesc,this).each(function(b){$("span.offscreen",this).each(function(a){$(this).remove()});var c=$(this).text();$("#contrast-solution caption").text(a+": Sorted By "+c+" Ascending "),$(this).attr("aria-sort","ascending");var d="fr"===$("html").attr("lang")?"Triez dans l'ordre croissant":"Sortable, Sorted Ascending";$(this).append($("<span>").addClass("offscreen").text(d))})})}}),$("#contrast-solution").tablesorter({widgets:["addA11y"]}).wrap('<div role="application">').attr("role","grid").attr("aria-readonly","true").attr("aria-labelledby","theCaption").bind("keypress keyup keydown",function(a){var b;a.ctrlKey||a.shiftKey||a.metaKey||a.altKey;b=!a.keyCode&&"which"in a&&a.which?a.which:a.keyCode,13!=b&&32!=b||$(a.target).hasClass("header")&&$(a.target).trigger("click")}),$("#contrast-solution tr").attr("role","row"),$("#contrast-solution thead th").attr("role","columnheader").attr("scope","col").wrapInner('<div role="button"></div>'),$("#contrast-solution tbody th").attr("role","rowheader").attr("scope","row"),$("#contrast-solution th.header").attr("tabindex","0"),$("#contrast-solution tbody td").attr("role","gridcell"),$("#contrast-solution caption").attr({role:"log","aria-live":"assertive","aria-relevant":"all","aria-atomic":"true"})});