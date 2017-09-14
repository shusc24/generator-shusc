declare  let define:any;
define('browser', [], function () {
    var browser = {
        versions: function () {
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
            var isOpera = userAgent.indexOf("Opera") > -1;
            if (isOpera) {
                return "Opera"
            }; //判断是否Opera浏览器
            if (userAgent.indexOf("Firefox") > -1) {
                return "FF";
            } //判断是否Firefox浏览器
            if (userAgent.indexOf("Chrome") > -1){
                return "Chrome";
            }
            if (userAgent.indexOf("Safari") > -1) {
                return "Safari";
            } //判断是否Safari浏览器
            if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
                return "IE";
            }; //判断是否IE浏览器
        }(),
    };
    return browser
});

define('pagination',(require)=>{
    const _ = require("lodash");
    const $ = require('jquery');
    return {
        template: "<div class=\"Pagnation MTR-40\">\n                        <span @click=\"FnselectPage(1)\">\n                                    \u9996\u9875\n                                    </span>\n                        <template v-if=\"page == 1\">\n                            <template v-for=\"num in [1,2,3]\">\n                                            <span v-if=\"(num) <= maxpage\" @click=\"FnselectPage(num)\" :class=\"{active:num == 1}\">\n                                                {{num}}\n                                            </span>\n                            </template>\n                        </template>\n                        <template v-if=\"page >= 2\">\n                            <template v-for=\"num in [-1,0,1]\">\n                                    <span v-if=\"(page + num) <= maxpage\" @click=\"FnselectPage(page + num)\" :class=\"{active:num == 0}\">\n                                        {{page + num}}\n                                    </span>\n                            </template>\n                        </template>\n               <span @click=\"FnselectPage(maxpage)\">\n                                \u672B\u9875\n                        </span>\n                </div>",
        props: ['maxpage', 'page'],
        data(){
            return {
                page: 1
            };
        },
        methods: {
            FnselectPage(num){
                num = parseInt(num);
                this.page = num;
                this.$emit('pagechange', this.page);
                this.$emit('update:page', this.page)
            }
        },
        mounted(){
        }
    }
});

define('pagination2',(require)=>{
    const _ = require("lodash");
    const $ = require('jquery');
    return {
        template: `
                <div class="Pagnation MTR-40">
                        <span @click="FnselectPage(1)">
                                        <i class="iconfont icon-rilijiantouyoushuang1" ></i>
                                    </span>
                        <template v-if="page == 1">
                            <template v-for="num in [1,2,3,4,5]">
                                            <span v-if="(num) <= maxpage" @click="FnselectPage(num)" :class="{active:num == 1}">
                                                {{num}}
                                            </span>
                            </template>
                        </template>
                        <template v-if="page >= 2">
                            <template v-for="num in [-2,-1,0,1,2]">
                                    <span v-if="(page + num) <= maxpage && (page + num) > 0" @click="FnselectPage(page + num)" :class="{active:num == 0}">
                                        {{page + num}}
                                    </span>
                            </template>
                        </template>
                        <span @click="FnselectPage(maxpage)">
                                <i class="iconfont icon-rilijiantouyoushuang" ></i>
                        </span>
                </div>`,
        props: ['maxpage', 'page'],
        data(){
            return {
                page: 1
            };
        },
        methods: {
            FnselectPage(num){
                num = parseInt(num);
                this.page = num;
                this.$emit('pagechange', this.page);
                this.$emit('update:page', this.page)
            }
        },
        mounted(){
        }
    }
});
