define(function (require) {
    var $ = require('jquery'), _ = require("lodash"), Vue = require('vue'), VueRouter = require('Vrouter'), layer = require("layer");
    //加载模板引擎
    var Template = require('artTemplate');
    require('velocity');
    //加载plus 库
    var Banner = require("plus").Banner;
    //加载组件
    var pagination = require('pagination');
    //加载页面
    var goodsbox = function (resolve) { return require(['goodsBox'], resolve); };
    //使用vuerouter
    Vue.use(VueRouter);
    var routes = [
        { path: '/:id', component: goodsbox }
    ];
    var router = new VueRouter({
        routes: routes
    });
    var productPage = new Vue({
        data: function () {
            return {
                pagination: {
                    maxpage: 3,
                    page: 1
                }
            };
        },
        components: {
            "dr-pagination": pagination
        },
        methods: {
            Fngetgoods: function (page) {
                var _this = this;
                layer.load(2, {
                    shade: [0.3, '#fff']
                });
                $.get("http://www.easy-mock.com/mock/5960750f9adc231f357bccdf/getItem/itempc", { p: page }).done(function (Rs) {
                    layer.closeAll();
                    var html = Template.render($("#goodsItemTpl").html(), { items: Rs.items });
                    $(_this.$el).find("#mainList").html(html);
                });
            },
            FngetGoodsData: function () {
                var _this = this;
                $.get("http://www.easy-mock.com/mock/5960750f9adc231f357bccdf/getItem/itempc", { p: 1 }).done(function (Rs) {
                    _this.pagination.maxpage = Rs.maxpage;
                });
            }
        },
        mounted: function () {
            _.delay(function () {
                $(".main-pic")[0].children.length === 0 ? window.location.href = "/html/productCenter.html#/1" : null;
            }, 1000);
            this.FngetGoodsData();
        },
        router: router
    }).$mount("#productMain");
});
//# sourceMappingURL=productcenter.js.map