define(['jquery'],function($){
	var ScorllEventFn = function(){
		this.cache = [];
	};
	
	ScorllEventFn.prototype.add = function(fn){
		this.cache.push(function(){
			$(window).on('scroll',function(){
				var scrollTop = $(this).scrollTop();
			　　var scrollHeight = $(document).height();
			　　var windowHeight = $(this).height();
			
				var t = {
					scrollTop:scrollTop,
					scrollHeight:scrollHeight,
					windowHeight:windowHeight,	
				};
				fn(t,function(){
					alert(123)
				});
			});
		})
	};
		
	ScorllEventFn.prototype.start = function(){
		for(var i = 0,ScorllEventFunc;ScorllEventFunc = this.cache[i++];){
			ScorllEventFunc();
		}
	};
			
	return ScorllEventFn;
});