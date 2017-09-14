define('layerpage', function (require) {
    var Swiper = require("swiper2");
    var $ = require('jquery');
    var _ = require("lodash");
    var layer = require("layer");
    require('swiperScrollbar');
    return {
        template: "#layerTpl",
        props: [],
        data: function () {
            return {};
        },
        methods: {
            Fnleft: function () {
                this.swiper.swipePrev();
            },
            Fnright: function () {
                this.swiper.swipeNext();
            }
        },
        mounted: function () {
            this.swiper = new Swiper("#layerBoxBodySwiper", {
                loop: true,
                pagination: "#layerBoxBodySwiper .swiper-pagination"
            });
            //初始化 swiper
            setTimeout(function () {
                new Swiper('#layerBoxContent', {
                    scrollContainer: true,
                    mousewheelControl: true,
                    mode: 'vertical',
                    //其他设置
                    scrollbar: {
                        container: '.swiper-scrollbar',
                        draggable: true,
                        hide: true,
                        snapOnRelease: true
                    }
                });
            }, 4000);
        },
        beforeRouteEnter: function (to, from, next) {
            next(function (vm) {
                layer.open({
                    type: 1,
                    shade: [0.7, "#000"],
                    area: ["996px", "520px"],
                    anim: 5,
                    scrollbar: false,
                    title: false,
                    content: $('.cookBooks-layerBox'),
                    cancel: function () {
                        window.history.go(-1);
                    }
                });
            });
        },
        beforeRouteLeave: function (to, from, next) {
            next(function (vm) {
            });
        }
    };
});
define(function (require) {
    var $ = require('jquery'), _ = require("lodash"), Vue = require('vue'), VueRouter = require('Vrouter'), layer = require("layer");
    //加载组件
    var Banner = require("banner");
    //使用vuerouter
    //页面模块
    var layerPage = require("layerpage");
    Vue.use(VueRouter);
    var routes = [
        { path: '/item/:id', component: layerPage, meta: { keepAlive: false } },
    ];
    var router = new VueRouter({
        routes: routes
    });
    var App = new Vue({
        data: function () {
            return {};
        },
        components: {
            "dr-banner": Banner
        },
        methods: {
            Fnplay: function () {
                //激活事件 播放视频
                $(this.$el).find(".active .btn-play").trigger("click");
            },
            Fntext: function () {
                var self = this;
                //延时获得Id
                _.delay(function () {
                    var id = $(self.$el).find(".active").data()['id'];
                    window.location.href = "#/item/" + id;
                }, 800);
            }
        },
        mounted: function () {
        },
        router: router
    }).$mount("#cookBooksMain");
});
//# sourceMappingURL=cookBooks.js.map