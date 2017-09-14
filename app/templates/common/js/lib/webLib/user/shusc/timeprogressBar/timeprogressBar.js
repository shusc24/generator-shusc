define(['jquery'], function($) {


 var modfn = {
 	
 	formatSeconds:function(value) {
		var theTime = parseInt(value); // 秒
		var theTime1 = 0; // 分
		var theTime2 = 0; // 小时
		if(theTime > 60) {
			theTime1 = parseInt(theTime / 60);
			theTime = parseInt(theTime % 60);
			if(theTime1 > 60) {
				theTime2 = parseInt(theTime1 / 60);
				theTime1 = parseInt(theTime1 % 60);
			}
		}
		var result = "" + parseInt(theTime) + "秒";
		if(theTime1 > 0) {
			result = "" + parseInt(theTime1) + "分" + result;
		}
		if(theTime2 > 0) {
			result = "" + parseInt(theTime2) + "小时" + result;
		}

		return result;
	}
 	
 }
	

	function timeprogressBar(Ele, maxTime) {

		this.Ele = Ele;
		this.maxTime = maxTime;

		this.$initELe();
	}

	timeprogressBar.prototype = {

		constructor: timeprogressBar,

		$initELe: function() {

			var progressBar = [

				'<div class="c-progressBar">',

				'<span class="c-progressBar__text"></span>',

				'<div class="c-progressBar__bar">',

				'</div>',

				'</div>'

			]

			this.$progressBar = $(progressBar.join(''))
			this.$progressBarText = this.$progressBar.find(".c-progressBar__text");
			this.$progressBarbar = this.$progressBar.find(".c-progressBar__bar");
			this.Ele.append(this.$progressBar);
		},
		update: function(val) {
			var nowPercent = val / this.maxTime;
			var progressBarWidth = parseInt(this.$progressBar.css("width"));
			var updateWidth = progressBarWidth * nowPercent;
			//更新c-progressBar__bar
			this.$progressBarbar.css({
					width: updateWidth + 'px'
				})
				//更新时间
			this.$progressBarText.html(modfn.formatSeconds(val))

		}
	}

	return timeprogressBar

})