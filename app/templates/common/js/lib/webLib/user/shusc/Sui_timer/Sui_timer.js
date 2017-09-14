define(["jquery"], function ($) {

    function sui_timer(num, period, showfn) {
        //num 为内部状态 ,period 为周期 1000，event为事件闹钟, outEle为 输出的外部时间 eventcache 为事件缓存处理
        this.num = num;
        this._num = num;

        this.showfn = showfn;
        this.period = period;
        this.fn;

        this.Eventcache = [];
        this.init();
    }

    sui_timer.prototype = {

        constructor: sui_timer,

        start: function () {
            var period = this.period

            this.fn = (function () {

                return setInterval(function () {

                    this.showfn(this.num--)

                }.bind(this), period);

            }.bind(this))()

        },

        stop: function () {
            window.clearInterval(this.fn);
            this.reset();
        },

        reset: function (val) {
            if (typeof(val) != "undefined") {
                this.num = val;
            } else {
                this.num = 0;
            }
        },

        pause: function () {
            window.clearInterval(this.fn);
        },

        addEvent: function (time, fn) {
            //time 为
            var Eventfn = function (val) {
                var Ttime = time;
                var Tfn = fn;

                if (Ttime == val) {
                    Tfn();
                }
            };

            this.Eventcache.push(Eventfn)
        },

        init: function () {
            var self = this;

            Object.defineProperty(this, "num", {
                set: function (val) {
                    this._num = val
                },

                get: function () {

                    //循环在时间对象中处理
                    for (var i = 0; i < self.Eventcache.length; i++) {
                        self.Eventcache[i](this._num);
                    }

                    return this._num
                }
            })
        },

        clearEvent: function () {
            this.Eventcache = [];
        }
    }
    return sui_timer;

})