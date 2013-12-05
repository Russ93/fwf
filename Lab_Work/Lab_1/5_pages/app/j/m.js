(function(){
window.onload = function (){
	var tabs = $('aside ul li')
	$('section textarea').css('height',$(window).height()-152);
	$('aside').css('height',$(window).height()-92);
	for(var i=0;i<tabs.length;i++){
		$($(tabs[i]).children('p')).html($(tabs[i]).children('p').text().substr(0, 250))
		$($(tabs[i]).children('div')).click(function(){
			var c = true;
			
			if(c){
				$(this).prepend('Sure?<span>No</span><span>Yes</span>');
				$(this).unbind();
				c = false;
			}else{
				$(this).children('span:contains(No)').click(function(){})
			}
			console.log(c)
			$(this).children('span:contains(delete)').remove()
			$(this).children('span:contains(No)').css('color','#999');
			$(this).children('span:contains(No)').click(function(){});
		})//tabs[i].div.click()
	}// for tabs
}})();