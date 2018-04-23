var amdDefine = define;
requirejs.config({
    paths: {
        //核心库
        jquery: 'https://lib.baomitu.com/jquery/3.3.1/jquery.min',
        jqueryOne: 'https://lib.baomitu.com/jquery/1.12.4/jquery.min',
        Vue: "https://lib.baomitu.com/vue/2.5.16/vue.min",
        backbone: "https://cdn.bootcss.com/backbone.js/1.3.3/backbone-min",
        //underscore 及 lodash
        underscore: "https://lib.baomitu.com/underscore.js/1.9.0/underscore-min",
        lodash: "https://lib.baomitu.com/lodash.js/4.17.5/lodash.min",
        // Vue插件
        Vuex: "https://lib.baomitu.com/vuex/3.0.1/vuex.min",
        Vresource: ["https://lib.baomitu.com/vue-resource/1.5.0/vue-resource.min"],
        Vrouter: ["https://lib.baomitu.com/vue-router/3.0.1/vue-router.min"],
        //插件库
        swiper: "https://lib.baomitu.com/Swiper/4.2.0/js/swiper.min",
        swiper2: "https://lib.baomitu.com/Swiper/2.7.6/idangerous.swiper.min", //兼容ie6 ie7
        echarts: "https://lib.baomitu.com/echarts/4.0.4/echarts.min",
        sweetalert: 'https://lib.baomitu.com/limonte-sweetalert2/7.19.1/sweetalert2.min',
        wx: 'https://res.wx.qq.com/open/js/jweixin-1.3.2',
        popper: 'https://lib.baomitu.com/popper.js/1.14.3/popper.min',
        cropper: "https://lib.baomitu.com/cropper/4.0.0-beta/cropper.min",//图片裁剪插件
        layer: "https://lib.baomitu.com/layer/3.1.1/layer",
        socketIo: 'https://lib.baomitu.com/socket.io/2.1.0/socket.io',
        dynamics: 'https://cdn.staticfile.org/dynamics.js/1.1.5/dynamics.min',//物理库

        //前端路由 文档地址 https://github.com/flatiron/director
        director: 'https://cdn.staticfile.org/Director/1.2.8/director.min',

        zui: "lib/webLib/public/plus/zui/zui",
        pagination: 'lib/webLib/public/plus/pagination/lib/jquery.pagination',
        wangEditor: "https://lib.baomitu.com/wangEditor/3.1.1/wangEditor.min",
        lazyload: 'lib/webLib/public/plus/lazyload/lazyload.min',
        vuelazyload:"https://cdn.bootcss.com/vue-lazyload/1.2.1/vue-lazyload",
        store: 'https://cdn.bootcss.com/store.js/1.3.20/store.min',
        owlCarousel: 'https://lib.baomitu.com/OwlCarousel2/2.3.4/owl.carousel.min',

        //表单验证插件 文档地址：https://github.com/WLDragon/SMValidator
        SMV: 'lib/webLib/public/plus/SMValidator/SMValidator.min',
        SMVRules: 'lib/webLib/public/plus/SMValidator/SMVRules',

        //require插件库
        text: "https://cdn.bootcss.com/require-text/2.0.12/text.min",
        domReady: "https://cdn.bootcss.com/require-domReady/2.0.1/domReady.min",
        css: 'https://cdn.bootcss.com/require-css/0.1.10/css.min',
        backboneLocal: 'https://cdn.bootcss.com/backbone-localstorage.js/1.1.16/backbone.localStorage-min',
        //h5 手势库
        AlloyFinger: 'lib/webLib/public/plus/AlloyFinger/alloy_finger',

        //layuiFlow 改写成Amd 方式 文档同 layui的文档
        flow: 'lib/webLib/public/plus/layuiflow/flow',

        //滚动动画插件 官方文档: https://github.com/jlmakes/scrollreveal
        scrollreveal: 'https://lib.baomitu.com/scrollReveal.js/4.0.0-beta.26/scrollreveal.min',

        //iscroll 自定义滚动条 https://github.com/cubiq/iscroll
        iscroll: 'https://cdn.bootcss.com/iScroll/5.2.0/iscroll.min',

        //正则库 官方文档：https://github.com/slevithan/xregexp
        xregexp: 'https://cdn.bootcss.com/xregexp/3.2.0/xregexp-all.min',

        //anime 动画库 官方文档：http://anime-js.com/ https://github.com/juliangarnier/anime
        anime: 'https://cdn.bootcss.com/animejs/2.2.0/anime.min',

        //复制到粘贴板
        clipboard: 'https://cdn.bootcss.com/clipboard.js/2.0.0/clipboard.min',

        //单页面切换
        mobilebone: 'https://cdn.bootcss.com/mobilebone/2.6.1/mobilebone.min',

        //cookies 工具 github文档:https://github.com/js-cookie/js-cookie
        cookies: 'https://cdn.bootcss.com/js-cookie/2.1.4/js.cookie.min',

        //input格式化库 github文档 https://github.com/nosir/cleave.js 官网：http://nosir.github.io/cleave.js/
        cleave: 'https://lib.baomitu.com/cleave.js/1.3.3/cleave.min',

        //动画库兼容IE8  http://velocityjs.org/
        velocity: 'https://lib.baomitu.com/velocity/2.0.2/velocity.min',

        handlebars: "https://cdn.bootcss.com/handlebars.js/4.0.11/handlebars.min",

        validator: "https://lib.baomitu.com/validator/9.4.1/validator.min",

        LCalendar: 'lib/weblib/public/plus/LCalendar/src/js/LCalendar',

        Vee: 'https://lib.baomitu.com/vee-validate/2.0.6/vee-validate.min',

        VeeCn: "https://lib.baomitu.com/vee-validate/2.0.6/locale/zh_CN",

        // 用户组件
        imgUpload: 'lib/webLib/user/shusc/jqueryUploadimg/jqueryUploadimg',

        //vueComponent
        Vuecomponent: 'component/VueComponent',

        layerFn: 'plus/layerFn',

        timer: 'lib/webLib/user/shusc/Sui_timer/Sui_timer',

        slideout: 'https://cdn.bootcss.com/slideout/1.0.1/slideout.min',

        Event: 'plus/event',

        flow: 'lib/webLib/public/plus/flow/flow',

        lightbox:'https://cdn.bootcss.com/lightbox2/2.10.0/js/lightbox.min',

        Upload:'lib/webLib/user/shusc/jqueryUpload/upload',

        swiperScrollbar:'../other/swiperScrollbar/swiperScrollbar',

        axios:'https://lib.baomitu.com/axios/0.18.0/axios.min',

        artTemplate:'lib/webLib/public/plus/artTemplate/artTemplate',

        velocityUi:'https://lib.baomitu.com/velocity/2.0.2/velocity.ui.min',
        //相册插件
        smartPhoto:"lib/webLib/public/plus/smartphoto/js/smartphoto.min",
        //跑马灯插件
        marquee:"https://cdn.bootcss.com/jQuery.Marquee/1.5.0/jquery.marquee.min",
        //元素固定
        scrollfix:'lib/webLib/public/plus/scrollfix/scrollfix.min',

        scrollbar:"https://lib.baomitu.com/jquery.perfect-scrollbar/1.3.0/perfect-scrollbar.min",

        // 流式布局
        masonry:"https://lib.baomitu.com/masonry/4.2.1/masonry.pkgd.min",

        layoutFlow:"lib/webLib/user/shusc/flowlayout/flowlayout",
        //相册插件
        photoSwiper:'http://lib.baomitu.com/photoswipe/4.1.2/photoswipe.min',
        //相册
        photoSwiperUi:"http://lib.baomitu.com/photoswipe/4.1.2/photoswipe-ui-default.min",
        //封装好的相册组件
        photoSwiperClass:"lib/webLib/user/shusc/photoSwiper/photoSwiperClass",

        //canvas 绘图插件 目前版本 2.3.2
        signature_pad:"https://lib.baomitu.com/signature_pad/1.5.3/signature_pad.min",

        //canvas 截屏 插件
        html2canvas:"https://lib.baomitu.com/html2canvas/0.5.0-beta4/html2canvas.min",

        //页面加载插件loading
        nprogress:"https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min"

    },
    shim: {
        layer: ['jquery', 'css!https://lib.baomitu.com/layer/3.1.1/theme/default/layer.css'],
        zui: ['jquery'],
        AlloyFinger: {
            exports: 'AlloyFinger'
        },
        swiper:['css!http://lib.baomitu.com/Swiper/4.1.6/css/swiper.min.css'],
        sweetalert: ['css!https://lib.baomitu.com/limonte-sweetalert2/7.19.1/sweetalert2.min.css'],
        swiper2: ['css!https://cdn.staticfile.org/Swiper/2.7.6/idangerous.swiper.min.css'],
        cropper: ['jquery', 'css!https://lib.baomitu.com/cropper/4.0.0-beta/cropper.min.css'],
        director: {
            exports: 'Router'
        },
        mobilebone: ['css!https://cdn.bootcss.com/mobilebone/2.6.1/mobilebone.min.css'],
        cleave: ['https://lib.baomitu.com/cleave.js/1.3.3/addons/cleave-phone.cn'],
        lightbox:['css!https://cdn.bootcss.com/lightbox2/2.10.0/css/lightbox.min.css'],
        swiperScrollbar:['swiper2'],
        smartPhoto:['css!../other/smartPhoto/smartphoto.min.css'],
        marquee:['jquery'],
        scrollbar:['css!https://lib.baomitu.com/jquery.perfect-scrollbar/1.3.0/css/perfect-scrollbar.min.css'],
        photoSwiper:['css!http://lib.baomitu.com/photoswipe/4.1.2/photoswipe.min.css'],
        photoSwiperUi:['css!http://lib.baomitu.com/photoswipe/4.1.2/default-skin/default-skin.min.css'],
        wangEditor:['css!https://lib.baomitu.com/wangEditor/3.1.1/wangEditor.min.css'],
        nprogress:['css!https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css'],
        owlCarousel:['css!https://lib.baomitu.com/OwlCarousel2/2.3.4/assets/owl.carousel.min.css']
    }
});
