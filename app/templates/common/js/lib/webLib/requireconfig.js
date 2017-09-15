var amdDefine = define;
requirejs.config({
    baseUrl: "../js",
    urlargs:"v=1.00",
    paths: {
        //核心库
        jquery: 'https://cdn.bootcss.com/jquery/2.2.4/jquery.min',
        jqueryOne: 'https://cdn.bootcss.com/jquery/1.12.4/jquery.min',
        Vue: "https://cdn.bootcss.com/vue/2.4.2/vue.min",
        VueOne: 'https://cdn.bootcss.com/vue/1.0.28/vue.min',
        backbone: "https://cdn.bootcss.com/backbone.js/1.3.3/backbone-min",

        //underscore 及 lodash
        underscore: "https://cdn.bootcss.com/underscore.js/1.8.3/underscore-min",
        lodash: "https://cdn.bootcss.com/lodash.js/4.17.4/lodash.min",
        lodashCore: 'https://cdn.bootcss.com/underscore.js/1.8.3/underscore-min',

        // Vue插件
        Vuex: "https://cdn.bootcss.com/vuex/2.4.0/vuex.min",
        Vresource: ["https://cdn.bootcss.com/vue-resource/1.3.4/vue-resource.min"],
        Vrouter: ["https://cdn.bootcss.com/vue-router/2.7.0/vue-router.min"],

        core: "lib/webLib/public/core/core",
        h5core: "lib/webLib/public/core/H5core",
        Class: "lib/webLib/public/core/libs/Base/Base",
        //插件库
        swiper: "https://cdn.bootcss.com/Swiper/3.4.2/js/swiper.min",
        swiper2: "https://cdn.staticfile.org/Swiper/2.7.6/idangerous.swiper", //兼容ie6 ie7
        echarts: "https://cdn.bootcss.com/echarts/3.7.1/echarts.min",
        sweetalert: 'https://cdn.bootcss.com/sweetalert/1.1.3/sweetalert.min',
        wx: 'http://res.wx.qq.com/open/js/jweixin-1.1.0',
        popper: 'https://cdn.bootcss.com/popper.js/1.0.8/popper.min',
        cropper: "https://cdn.bootcss.com/cropper/3.0.0-alpha.1/cropper.min",//图片裁剪插件
        layer: "https://cdn.bootcss.com/layer/3.0.1/layer.min",
        socketIo: 'https://cdn.bootcss.com/socket.io/2.0.3/socket.io.slim',
        dynamics: 'https://cdn.staticfile.org/dynamics.js/1.1.5/dynamics.min',//物理库

        //前端路由 文档地址 https://github.com/flatiron/director
        director: 'https://cdn.staticfile.org/Director/1.2.8/director.min',

        zui: "lib/webLib/public/plus/zui/zui",
        pagination: 'lib/webLib/public/plus/pagination/lib/jquery.pagination',
        wangEditor: "lib/webLib/public/plus/wangEditor/js/wangEditor.min",
        lazyload: 'lib/webLib/public/plus/lazyload/lazyload.min',
        store: 'https://cdn.bootcss.com/store.js/1.3.20/store.min',
        owlCarousel: 'https://cdn.bootcss.com/OwlCarousel2/2.2.1/owl.carousel.min',

        //表单验证插件 文档地址：https://github.com/WLDragon/SMValidator
        SMV: 'lib/webLib/public/plus/SMValidator/SMValidator.min',
        SMVRules: 'lib/webLib/public/plus/SMValidator/SMVRules',

        //require插件库
        text: "https://cdn.bootcss.com/require-text/2.0.12/text.min",
        domReady: "https://cdn.bootcss.com/require-domReady/2.0.1/domReady.min",
        css: 'https://cdn.bootcss.com/require-css/0.1.10/css.min',
        backboneLocal: 'https://cdn.staticfile.org/backbone-localstorage.js/1.1.16/backbone.localStorage-min',
        //h5 手势库
        AlloyFinger: 'lib/webLib/public/plus/AlloyFinger/alloy_finger',

        //layuiFlow 改写成Amd 方式 文档同 layui的文档
        flow: 'lib/webLib/public/plus/layuiflow/flow',

        //滚动动画插件 官方文档: https://github.com/jlmakes/scrollreveal
        scrollreveal: 'https://cdn.bootcss.com/scrollReveal.js/3.3.2/scrollreveal.min',

        //iscroll 自定义滚动条 https://github.com/cubiq/iscroll
        iscroll: 'https://cdn.bootcss.com/iScroll/5.2.0/iscroll.min',

        //正则库 官方文档：https://github.com/slevithan/xregexp
        xregexp: 'https://cdn.bootcss.com/xregexp/3.1.1/xregexp-all.min',

        //anime 动画库 官方文档：http://anime-js.com/ https://github.com/juliangarnier/anime
        anime: 'https://cdn.bootcss.com/animejs/2.0.2/anime.min',

        //复制到粘贴板
        clipboard: 'https://cdn.bootcss.com/clipboard.js/1.7.1/clipboard.min',

        //单页面切换
        mobilebone: 'https://cdn.bootcss.com/mobilebone/2.6.1/mobilebone.min',

        //cookies 工具 github文档:https://github.com/js-cookie/js-cookie
        cookies: 'https://cdn.bootcss.com/js-cookie/2.1.3/js.cookie.min',

        //input格式化库 github文档 https://github.com/nosir/cleave.js 官网：http://nosir.github.io/cleave.js/
        cleave: 'https://cdn.bootcss.com/cleave.js/1.0.1/cleave.min',

        //动画库兼容IE8  http://velocityjs.org/
        velocity: 'https://cdn.bootcss.com/velocity/1.5.0/velocity.min',

        handlebars: "https://cdn.bootcss.com/handlebars.js/4.0.10/handlebars.min",

        validator: "https://cdn.bootcss.com/validator/7.0.0/validator.min",

        LCalendar: 'lib/weblib/public/plus/LCalendar/src/js/LCalendar',

        Vee: 'https://cdn.bootcss.com/vee-validate/2.0.0-rc.14/vee-validate.min',

        VeeCn: "https://cdn.bootcss.com/vee-validate/2.0.0-rc.14/locale/zh_CN",

        // 用户组件
        imgUpload: 'lib/webLib/user/shusc/jqueryUploadimg/jqueryUploadimg',

        //vueComponent
        Vuecomponent: 'component/VueComponent',

        layerFn: 'plus/layerFn',

        timer: 'lib/webLib/user/shusc/Sui_timer/Sui_timer',

        slideout: 'https://cdn.bootcss.com/slideout/1.0.1/slideout.min',

        Event: 'plus/event',

        flow: 'lib/webLib/public/plus/flow/flow',

        lightbox:'https://cdn.bootcss.com/lightbox2/2.9.0/js/lightbox.min',

        Upload:'lib/webLib/user/shusc/jqueryUpload/upload',

        swiperScrollbar:'../other/swiperScrollbar/swiperScrollbar',

        axios:'https://cdn.bootcss.com/axios/0.16.2/axios.min',

        artTemplate:'lib/webLib/public/plus/artTemplate/artTemplate',

        velocityUi:'https://cdn.bootcss.com/velocity/1.5.0/velocity.ui.min',
        //相册插件
        smartPhoto:"lib/webLib/public/plus/smartphoto/js/smartphoto.min",
        //跑马灯插件
        marquee:"https://cdn.bootcss.com/jQuery.Marquee/1.3.94/jquery.marquee.min",
        //元素固定
        scrollfix:'lib/webLib/public/plus/scrollfix/scrollfix.min',

        scrollbar:"https://cdn.bootcss.com/jquery.perfect-scrollbar/0.8.0/js/perfect-scrollbar.min"
    },
    shim: {
        layer: ['jquery', 'css!https://cdn.bootcss.com/layer/3.0.1/skin/default/layer.min.css'],
        zui: ['jquery'],
        AlloyFinger: {
            exports: 'AlloyFinger'
        },
        sweetalert: ['css!https://cdn.bootcss.com/sweetalert/1.1.3/sweetalert.min.css'],
        swiper2: ['css!https://cdn.staticfile.org/Swiper/2.7.6/idangerous.swiper.min.css'],
        cropper: ['jquery', 'css!https://cdn.bootcss.com/cropper/3.0.0-alpha.1/cropper.min.css'],
        director: {
            exports: 'Router'
        },
        mobilebone: ['css!https://cdn.bootcss.com/mobilebone/2.6.1/mobilebone.min.css'],
        cleave: ['https://cdn.bootcss.com/cleave.js/0.7.14/addons/cleave-phone.cn.js'],
        lightbox:['css!https://cdn.bootcss.com/lightbox2/2.9.0/css/lightbox.min.css'],
        swiperScrollbar:['swiper2'],
        smartPhoto:['css!../other/smartPhoto/smartphoto.min.css'],
        marquee:['jquery'],
        scrollbar:['css!https://cdn.bootcss.com/jquery.perfect-scrollbar/0.8.0/css/perfect-scrollbar.min.css']
    }
});