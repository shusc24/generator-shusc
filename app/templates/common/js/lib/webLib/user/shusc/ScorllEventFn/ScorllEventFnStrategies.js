define(['jquery'],function(){
	var MoveStrategies = {
		scorllbottom : function(val,fn){
			if(val.scrollTop + val.windowHeight == val.scrollHeight){
			　　　　fn();
			}
		}
	}
	
	return MoveStrategies;
})