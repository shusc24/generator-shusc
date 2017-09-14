
日常用的工作流  tmt-workflow的定制版本 
    
    1.使用amd 方式加载块(包括Amd)    
1.使用说明
    1.安装全局 
    2.进入各个项目安装 (具体命令查看 package.json 或者 gulp)
2.目录说明
    目录：1.single-page 为单页面 模板 vue vue-router
         2.desktop 为桌面模板 

	1.说明：该库存放通用的js 插件，库，框架 和 css 部分的基本构建组件

	2.文件结构图

		1.css 存放的css项目结构
				1.1 标准化文件： 1.reset.css 2.Normalize.css
 				2.1 表格系统：   1.rwdgrid.min
 				3.1 MT 工具      1.MT.scss
 				4.1 Base 整合了bootstrap的栅格系统版本为 3.37
 				5.1 style.scss 为所有的页面样式 


 		2.public 存放的js公共库	
            |
            |
            |
            |
            |
            |
            |-------2.1 plus 库 (用于存放插件级文件)
 			|
            |
            |---------------- layui(ui组件， 不兼容AMD 使用时需要单独引入)
            |
            |
            |---------------- adpPage (手机端自适应插件)
            |
            |
            |---------------- layer  (常用的弹出层插件)
            |
            |
            |---------------- echarts (百度echarts图表)
            |
            |
            |---------------- swiper (3 2) (常用的轮播图插件) 2 为了解决兼容性问题
            |
            |
            |---------------- zui	 (常用的自定义滚动条)
            |
            |
            |---------------- selectcity (三级城市联动的插件)
            |
            |
            |---------------- requirejsplus (requirejs的插件)
            |
            |
            |---------------- weixin(微信SDK)
            |
            |
            |---------------- AlloyFinger(腾讯Alloy团队的触摸库)
            |
            |
            |---------------- sweetalert(h5 弹出层不依赖)
            |
            |
            |---------------- pagination(pc h5 分页器)
            |
            |
            |---------------- wangEditor(pc 富文本输入)1
            |
            |
            |---------------- lazyload(lazyload 图片懒加载)
            |
            |
            |---------------- store(store localstorage的封装) github:https://github.com/jaywcjlove/store.js
            |
            |
            |---------------- owlCarousel (桌面端的js文件)
            |
            |
            |---------------- cropper (基于jquery的图片裁剪工具)
            |
            |
            |---------------- SMValidator (表单验证插件 )
            |
            |
            |---------------- * socketIo (websocket插件 需要node服务器支持)
            |
            |
            |---------------- * dynamics (官方参数调整网站 http://dynamicsjs.com/)
            |
            |
            |---------------- clipboard (官方网站 https://clipboardjs.com/ )
            |
            |
            |---------------- cookies 插件（官方网站 https://github.com/js-cookie/js-cookie）
            |
            |
            |---------------- Velocity.js（官方网站 http://velocityjs.org/）
            |
            |
            |---------------- （效果插件）scollfix.js（官方网站 https://github.com/kujian/scrollfix）
            |
            |
            |----------------（效果插件） lightbox.js
            |
            |
            |----------------（日期处理） momentjs
            |
            |
            |----------------（核心babel库） 用于es6 解析 https://cdn.bootcss.com/babel-polyfill/7.0.0-alpha.9/polyfill.min.js
            |
            |
            |----------------（smartphoto插件）用于响应式相册
            |
            |
            |----------------（artTemplate）用于模板渲染             
    


 		3.user 存放成员的自定义的插件或者库

        4.更新日志
        2017.8.26  增加mk-3Dcarousel github地址: https://github.com/masoomulhaqs/mk-3Dcarousel
        2017.7.30  更改文件夹结构 为日常workflow
        2017.7.19  新增 用于amd 加载的 组件 esl 百度 https://github.com/ecomfe/esl
        2017.7.10  新增 artTemplate 用于模板渲染 https://aui.github.io/art-template/
        2017.7.9   增加axios 用于 promise ajax加载
        2017.6.21  增加smartphoto 用于响应式相册  https://github.com/appleple/SmartPhoto 重要 jquery版本 不兼容 3.2.1 版本
        2017.5.31  增加moment.js 用于处理日期 http://momentjs.cn/docs/
        2017.5.23  增加jquery Marquee 跑马灯插件  http://aamirafridi.com/jquery/jquery-marquee-plugin
        2017.5.17  增加purecss 框架及 响应式栅格系统 ：https://www.purecss.cn/
        2017.5.13  增加 lightbox 插件  用于图片展示：https://github.com/lokesh/lightbox2
        2017.5.11  增加 元素定位插件 scollfix 
                   github地址:https://github.com/kujian/scrollfix
                    
        2017.5.11  增加手机端模板 同步 weflow 
        2017.5.2   新增模板引擎用于备用 handlebars
        2017.4.9   新增动画库Velocity.js 文档 http://velocityjs.org/
        2017.4.8   更新预处理方案为less方案（结合weflow）
        2017.3.29  新增input格式化插件 文档 https://github.com/nosir/cleave.js
        2017.3.21  新增cookies 插件  文档  https://github.com/js-cookie/js-cookie
        2017.3.16  新增单页面切换组件 mobilebone 文档地址：http://rawgit.com/zhangxinxu/mobilebone/develop/docs/index.html#&indexPage
        2017.3.12  调整文件夹结构
        2017.3.11  新增flow  流处理模块 layui模块的分拆 // navSwitch 用于浏览器判断 nav的active // clipboard 用于复制到粘贴板
        2017.2.28  新增anime 动画引擎库 xregexp正则验证库
        2017.2.19  commoncss 整合了 bootstrap的栅格系统 优化了文件结构
        2017.2.10  新增 director 用于简单的前端路由
        2017.2.10  新增 dynamics 用于动画物理效果
        2017.2.10  新增 socketIo 需要node服务器支持
        2017.2.7   新增 SMValidator 插件
        2017.2.3   新增 cropper 插件
        2017.1.18  新增 swiper2 组件
        2016.12.30 新增 owlCarousel 组件
        2016.12.19 新增 store 组件
        2016.12.16 新增 layui 组件 lodash
        2016.12.15 新增 pagination 插件 ，wangEditor 插件  lazyload插件
        2016.12.5  新增 backbone(1.3.3)框架
        2016.11.24 新增 AlloyFinger 库用于触摸操作
        2016.11.22 core.js 替换undersocre 为 lodash
