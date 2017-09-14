define('plus', function (require, exports, module) {
    var $ = require("jquery");
    var _ = require("lodash");
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
    var Banner = (function () {
        function Banner(selector) {
            this.Dom = {
                Banner: {}
            };
            this.Data = {
                positon: [],
                dom: [],
            };
            this.couterPosition = _.throttle(function () {
                var Dom = this.Data.dom;
                var positionData = [{
                        zIndex: 2,
                        left: 0.5,
                        scale: 0.7,
                        opciaty: 0.7,
                        backgoroundopciaty: 0.5
                    }, {
                        zIndex: 3,
                        left: 0,
                        scale: 1,
                        opciaty: 1,
                        backgoroundopciaty: 0
                    }, {
                        zIndex: 2,
                        left: -0.5,
                        scale: 0.7,
                        opciaty: 0.7,
                        backgoroundopciaty: 0.5
                    }];
                _.each(Dom, function (slide, index) {
                    var dom = $(slide);
                    var height = 316;
                    var width = 486;
                    dom
                        .removeClass("active")
                        .velocity("stop")
                        .css({
                        zIndex: positionData[index].zIndex
                    })
                        .velocity({
                        top: "50%",
                        left: "50%",
                        marginLeft: -(width * positionData[index].scale / 2 + positionData[index].left * width) + "px",
                        marginTop: "-" + height * positionData[index].scale / 2 + "px",
                        width: width * positionData[index].scale + "px",
                        height: height * positionData[index].scale + "px",
                    }, {
                        duration: 400,
                        easing: "swing",
                    });
                    //中位添加数据
                    if (index == 1) {
                        _.delay(function () {
                            dom.addClass("active");
                        }, 1000);
                    }
                });
            }, 600);
            this.Dom.Banner = $(selector);
            this.init();
        }
        Banner.prototype.init = function () {
            var _this = this;
            this.Dom.Banner.find(".slide").each(function (index, item) {
                _this.Data.dom.push(item);
            });
            this.couterPosition();
            this.bindEvent();
        };
        Banner.prototype.sortDomNext = function () {
            this.Data.dom = _.concat(_.tail(this.Data.dom), this.Data.dom[0]);
        };
        Banner.prototype.sortDomPrev = function () {
            this.Data.dom = _.concat(_.last(this.Data.dom), _.dropRight(this.Data.dom));
        };
        Banner.prototype.bindEvent = function () {
            var _this = this;
            var self = this;
            var saveprogress = {};
            this.Dom.Banner.on("click", ".btn-right", function () {
                _this.sortDomNext();
                _this.couterPosition();
            }).on("click", ".btn-left", function () {
                _this.sortDomPrev();
                _this.couterPosition();
            }).on("click", ".btn-play", function () {
                var vedioEl = $(this).parent().parent().find("video");
                var data = vedioEl.data();
                vedioEl[0].play();
            });
        };
        return Banner;
    }());
    return {
        Banner: Banner
    };
});
//# sourceMappingURL=plus.js.map