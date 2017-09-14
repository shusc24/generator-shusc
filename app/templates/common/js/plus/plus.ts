define('plus',(require,exports,module)=>{

    const $ = require("jquery");
    const _ = require("lodash");
    require('velocityUi');

    /* 标准dom结构
     <div class="banner">

     <div class="slide">
     1
     </div>

     <div class="slide">
     2
     </div>

     </div>
     *
     * */
    class Banner{
        private Dom:any = {
            Banner:{}
        };
        private Data:any = {
            positon:[],
            dom:[],
        };
        constructor(selector:string){
            this.Dom.Banner = $(selector);
            this.init();
        }
        public init(){
            this.Dom.Banner.find(".slide").each((index,item)=>{
                this.Data.dom.push(item);
            });
            this.couterPosition();
            this.bindEvent();
        }
        public sortDomNext(){
            this.Data.dom = _.concat(_.tail(this.Data.dom),this.Data.dom[0])
        }
        public sortDomPrev(){
            this.Data.dom = _.concat(_.last(this.Data.dom),_.dropRight(this.Data.dom))
        }
        public couterPosition = _.throttle(function(){
            let Dom = this.Data.dom;
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
        },600);

        public bindEvent(){
            let self = this;
            let saveprogress = {};
            this.Dom.Banner.on("click",".btn-right",()=>{
                this.sortDomNext();
                this.couterPosition();
            }).on("click",".btn-left",()=>{
                this.sortDomPrev();
                this.couterPosition();
            }).on("click",".btn-play",function(){
                let vedioEl = $(this).parent().parent().find("video");
                let data = vedioEl.data();
                vedioEl[0].play();
            });
        }
    }

    return {
        Banner
    }
});