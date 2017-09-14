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

define('goodsBox',(require)=>{
    const _ = require("lodash");
    const Swiper = require("swiper2");
    const $ = require('jquery');
    require('swiperScrollbar');
    return{
        template:"#goodsTpl",
        methods:{
            Fninit(){
                _.delay(()=>{
                    let Banner =  new Swiper(`#${this.id}`,{
                        loop:true,
                        pagination:`#${this.id}_pagination`,
                        paginationClickable :true,
                    });
                    //绑定对象
                    $(this.$el).on("click",".swiper-leftArrow", ()=>{
                        Banner.swipePrev();
                    }).on("click",'.swiper-rightArrow',()=>{
                        Banner.swipeNext();
                    });
                    //初始化 swiper
                    new Swiper('.goodsinforBox-text',{
                        scrollContainer:true,
                        mousewheelControl : true,
                        mode:'vertical',
                        //其他设置
                        scrollbar: {
                            container : '.swiper-scrollbar',
                            draggable : true,
                            hide: true,
                            snapOnRelease: true
                        }
                    });
                },0);
            }
        },
        data(){
            return{
                swiper:{},
                id:_.uniqueId("swiper_"),
                goodsItem:[],
                state:false
            }
        },
        mounted(){
            _.delay(()=>{
                this.state = true
            },1000);
        },
        beforeRouteEnter:function(to,from,next){
            next((vm)=>{

            });
        },
        beforeRouteLeave:function(to,from,next){
            next((vm)=> {

            });
        },
        watch:{
            "state":function(){
                if(this.state){
                    this.Fninit()
                }
            },
            '$route' (to, from) {
                //刷新参数放到这里里面去触发就可以刷新相同界面了
                this.state = false;
                _.delay(()=>{
                    this.state = true
                },1000);
            }
        }
    };
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

define('banner',(require,exports,module)=>{
    const $ = require("jquery");
    const _ = require("lodash");
    require('velocityUi');
    const bannerItem = require("bannerItem");

    return{
        template:"#bannerTpl",
        data(){
            return{
                positon:[],
                dom:[],
                Banner:{}
            }
        },
        methods:{
            init(){
                this.Banner.find(".slide").each((index,item)=>{
                    this.dom.push(item);
                });
                this.couterPosition();

            },
            couterPosition:_.throttle(function(){
                    let Dom = this.dom;
                    let positionData = [{
                        zIndex:2,
                        left:0.5,
                        scale:0.7,
                        opciaty:0.7,
                        backgoroundopciaty:0.5
                    },{
                        zIndex:3,
                        left:0,
                        scale:1,
                        opciaty:1,
                        backgoroundopciaty:0
                    },{
                        zIndex:2,
                        left:-0.5,
                        scale:0.7,
                        opciaty:0.7,
                        backgoroundopciaty:0.5
                    }];
                    _.each(Dom,function (slide,index) {
                        let dom = $(slide);
                        let height = 316;
                        let width = 486;
                        dom
                            .removeClass("active")
                            .velocity("stop")
                            .css({
                                zIndex:positionData[index].zIndex
                            })
                            .velocity({
                                top:"50%",
                                left:"50%",
                                marginLeft:`${-(width*positionData[index].scale/2 + positionData[index].left * width)}px`,
                                marginTop:`-${height*positionData[index].scale/2}px`,
                                width: `${width*positionData[index].scale}px`,
                                height:`${height*positionData[index].scale}px`,
                            },{
                                duration: 400,         // 动画执行时间
                                easing: "swing",       // 缓动效果
                            });
                        //中位添加数据
                        if(index == 1){
                            _.delay(()=>{
                                dom.addClass("active");
                            },1000)
                        }
                    });
                },600),
            sortDomNext(){
                this.dom = _.concat(_.tail(this.dom),this.dom[0]);
                this.couterPosition();
            },
            sortDomPrev(){
                this.dom = _.concat(_.last(this.dom),_.dropRight(this.dom));
                this.couterPosition();
            }
        },
        mounted(){
            this.Banner = $(this.$el);
            this.init();
        },
        components:{
            item:bannerItem
        }
    }
});

define("bannerItem",(require,exports,module)=>{
    const $ = require("jquery");
    const _ = require("lodash");
    const browser = require("browser");
    const layer = require('layer');
    require('velocityUi');
    return{
        template:"#bannerItemTpl",
        data(){
            return{
                state:false,
                videoState:false,
            }
        },
        props:['videosrc','videoimg','text','videoid'],
        methods:{
            next(){
                this.$emit("next")
            },
            prev(){
                this.$emit("prev")
            },
            play(){
                this.initVideo();
                this.state = true;
                if(this.video)this.video.play();
            },
            pause(){
                this.state = false;
                if(this.video)this.video.pause();
            },
            load(){

            },
            max(){
                browser.versions === "Chrome"?this.video.webkitRequestFullScreen():null;
                browser.versions === "FF" ?this.video.mozRequestFullScreen():null;
                browser.versions !== "Chrome" && browser.versions !== "FF"?layer.msg("抱歉 您的浏览器暂时不支持全屏播放"):null;
            },
            initVideo(){
                this.videoState = true;
                _.delay(()=>{
                    this.video = $(this.$el).find("video")[0];
                },100);
            }
        },
        mounted(){

        }
    }
});
