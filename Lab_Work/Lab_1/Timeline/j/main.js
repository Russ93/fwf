(function(){
'use strict';
$('document').ready(function () {
    $('.age').html((new Date().getFullYear()) - 1993);
    var timeLine =  $('#timeline > li'),
    	nav = $('nav ul > li');
    $('#timeline li dfn').hide();
    for (var i = 0; nav.length > i; i++) {
    	anim(nav[i], '', true);
    }
    for (var i = 0; timeLine.length > i; i++) {
        anim(timeLine[i],timeLine[i])
    }
    function anim(fi,tli,nav){
    	var self = '';
    	var marg = {'margin': '25% 0'};
    	if($(window).width()<805&&$(window).width()>526){
	    	marg = {'margin':'0'};
    	}
    	$(fi).click(function(){
    		$("body").animate({scrollTop: $(tli).offset().top-80}, 1500)
    	})
        $(fi).mouseenter(function (e){
        	if(nav){
	    		tli='#timeline li:contains('+$(this).text()+')';
	    	}else{
	    		self='nav ul li:contains('+$($(this).children('p')).text()+')';
	    	}
        	if(($(tli).width()/$(tli).parent().width())<'.26'){
        		$(self).css('background','#e9e9e9');
                $(tli).animate({'width': '50%', 'padding-bottom':'50%', 'margin':'15px 25%'}, 200);
                $($(tli).children('p')).animate({'margin':'1em 0'});
                $($(tli).children('dfn')).show();
            }
        });
	    $(fi).mouseleave(function () {
	        $(tli).animate({'width': '25%', 'padding-bottom':'25%', 'margin':'15px 37.5%'}, 200);
	        $($(tli).children('p')).animate(marg);
	        $($(tli).children('dfn')).hide();
	        $(self).css('background','');
	    });
    }
});
})();