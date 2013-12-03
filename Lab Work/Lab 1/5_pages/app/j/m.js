(function(){
	window.onload = function (){
		var c = true;
		$('input').click(function(){
			if(c){
				$('#cta').append('<input type="text" placeholder="Username"/>'+'<input type="text" placeholder="Password"/><button>sign up</button>');
				c = false;
			}
		})
	}
})();