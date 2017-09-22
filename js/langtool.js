$(document).ready(function(){
  $("#languagetool").load("languagetool.html"); 
  $("#langtoolimport").load("langtoolimport.html"); 
});

$('#langtoolbar').on('click', function(e) {
    //if($(e.target).is("div")) {
    	$('#checkform').toggle();
    	$('#langtool').toggleClass('clicked');
      $(this).toggleClass('clicked');
    //}
    
});

tinyMCE.init({
     mode : "textareas",
     plugins : "AtD,paste",
     paste_text_sticky : true,
     setup : function(ed) {
         ed.onInit.add(function(ed) {
             ed.pasteAsPlainText = true;
         });
     },  
     /* translations: */
     languagetool_i18n_no_errors : {
         // "No errors were found.":
         "de-DE": "Keine Fehler gefunden."
     },
     languagetool_i18n_explain : {
         // "Explain..." - shown if there is an URL with a detailed description:
         "de-DE": "Mehr Informationen..."
     },
     languagetool_i18n_ignore_once : {
         // "Ignore this error":
         "de-DE": "Hier ignorieren"
     },
     languagetool_i18n_ignore_all : {
         // "Ignore this kind of error":
         "de-DE": "Fehler dieses Typs ignorieren"
     },
     languagetool_i18n_rule_implementation : {
         // "Rule implementation":
         "de-DE": "Implementierung der Regel"
     },
 
     languagetool_i18n_current_lang :
         function() { return document.checkform.lang.value; //"de-DE-x-simple-language";
         },
     /* The URL of your LanguageTool server.
        If you use your own server here and it's not running on the same domain 
        as the text form, make sure the server gets started with '--allow-origin ...' 
        and use 'https://your-server/v2/check' as URL: */
     languagetool_rpc_url                 : "https://languagetool.org/api/v2/check",
     /* edit this file to customize how LanguageTool shows errors: */
     languagetool_css_url :
		"css/content.css",
         //"https://www.languagetool.org/online-check/" +
         //"tiny_mce/plugins/atd-tinymce/css/content.css",
     /* this stuff is a matter of preference: */
     theme                              : "advanced",
     theme_advanced_buttons1            : "",
     theme_advanced_buttons2            : "",
     theme_advanced_buttons3            : "",
     theme_advanced_toolbar_location    : "none",
     theme_advanced_toolbar_align       : "left",
     theme_advanced_statusbar_location  : "bottom",
     theme_advanced_path                : false,
     theme_advanced_resizing            : true,
     theme_advanced_resizing_use_cookie : false,
     gecko_spellcheck                   : false
  });
 
function doit() {
     var langCode = document.checkform.lang.value; //"de-DE-x-simple-language"
     tinyMCE.activeEditor.execCommand("mceWritingImprovementTool", langCode);
  }

function getSelectionText() {
		var text = "";
    var selObj = window.getSelection();
    if (selObj && typeof selObj.anchorNode != "undefined") {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text
    }
    tinyMCE.get('checktext').setContent('<p>' + text + '</p>');
}

$('#checkText2').on("click",function (evt) {
    evt.preventDefault();
	//window.history.back();
	var langCode = document.checkform.lang.value; //"de-DE-x-simple-language"
     tinyMCE.activeEditor.execCommand("mceWritingImprovementTool", langCode);
    
});

document.getElementById("clickMe").onclick = getSelectionText;
//document.getElementById("checkText2").onclick = doit;
