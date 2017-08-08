jQuery(document).ready(function(){

    var altura = jQuery( window ).height();
    var alturaHeader = jQuery(".navbar").height();
    var alturaFooter = jQuery("footer").height();
    altura = altura - alturaHeader - alturaFooter - 13;
    jQuery(".full-height").css({"height": altura}); 
    altura = altura - 158;
    jQuery(".panel-colapse-map .panel-body").css("max-height", altura, "important");
    
    jQuery(".close").click(function(){
        jQuery(".full-post-info").hide();
    
    });
});