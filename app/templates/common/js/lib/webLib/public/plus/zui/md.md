1.该插件 不支持amd 加载 需要 兼容性加载
2.该插件 地址 http://www.jq22.com/jquery-info8445
3.初始化  $("#demo").panel({iWheelStep:32});

4.html 结构
	
	<div class="content-index" id="contentIndex">
		<div></div>
	</div>
	
5.范例官方结构

	<div id="demo">
		<div>
			<div class="box" style="background:#546B8B">滚动条在这里</div>
			<div class="box" style="background:#5ACDE5">2</div>
			<div class="box" style="background:#483362">3</div>
			<div class="box" style="background:#723E4B">4</div>
			<div class="box" style="background:#546B8B">5</div>
		</div>
	</div>

shim:{
		'zui':['jquery'],
	},