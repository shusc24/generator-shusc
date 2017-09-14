define(['Vue'], function (Vue) {

    /*该对象是利用了vue的模板特性,结合天猫view的自适应方式根据 initial-scale='' 缩放比进行的自适应操作 参考资料网站 http://isux.tencent.com/web-app-rem.html

     *  1.必要参数在
     * 			1.1 页面中插入 <meta name="viewport" v-bind:content="'width=device-width,initial-scale=' + htmlData.initialScale + ',user-scalable=no,minimal-ui'">
     * 			1.2 <script>var htmlData = {initialScale:1,}</script> 需要在页面中放入
     *  2.planwidth 是要按照什么宽度进行参考缩放 默认以iphone 6s 分辨率进行
     *  3.运行在requirejs 中 执行 var demo = new pageAdp(); 即可
     * */


    function AdpPage(planWidth) {

        var defultsPlanWidth = 414;
        if (planWidth) {
            this.planWidth = planWidth;
        } else {
            this.planWidth = defultsPlanWidth;
            //console.log(this.planWidth);
        }

        this.initVue();
        this.vueApp = this.initVue();
    }

    AdpPage.prototype = {
        initVue: function () {

            var htmlApp = new Vue({
                el: 'head',
                data: {
                    htmlData: htmlData,
                },
                methods: {
                    autoAdp: function (val) {
                        var windowWidth = window.screen.width;
                        var htmlScale = windowWidth / 414;
                        this.htmlData.initialScale = htmlScale;
                    }
                }
            })

            //绑定事件 load 和 resize
            window.addEventListener('load', function () {
                htmlApp.autoAdp();
            })

            window.addEventListener('resize', function () {
                htmlApp.autoAdp();
            })

            return htmlApp;
        },
    }

    return AdpPage
})