/* 公共函数模块

 *	9.24  新增时间转换函数  formatSeconds() -》 **时 ** 分 **秒
 *  9.19 新增css属性检测问题 supportCSS
 * 	8.29  新增numop方法做字符串数字补全  123 -》  0123
 *  8.28 新增EleAdaptiveFn方法做元素自适应
 * 
 * */

//下面事全局 公共函数
define(['jquery'], function ($) {


    var GetRequest = function () {
        var url = location.search;
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
            }
        }
        return theRequest;
    };


    /* supportCSS 方法

     * 简介:检测浏览器是否支持css的属性 重要都是带有前缀的
     * 参数为 style 为属性名称
     * 
     * 示例：alert(commfn.supportCSS("filter"))
     * 
     * */

    var supportCSS = function (style) {
        var prefix = ['webkit', 'ms', 'o', 'moz'];
        var i;
        var htmlStyle = document.documentElement.style;
        var testStyle = [];
        var upper = function (string) {
            return string.replace(/-(\w)/g, function ($0, $1) {
                return $1.toUpperCase();
            });
        };
        var str;
        for (i in prefix) {
            str = upper(prefix[i] + '-' + style);
            testStyle.push(str);
        }
        str = upper(style);
        testStyle.push(str);
        for (i in testStyle) {
            if (testStyle[i] in htmlStyle)
                return true;
        }
        return false;
    }

    var extend = function (subClass, superClass) {
        var F = function () {
        };
        F.prototype = superClass.prototype;
        //子类的prototype指向F的_proto_ ， _proto_又指向父类的prototype  
        subClass.prototype = new F();
        //在子类上存储一个指向父类的prototype的属性，便于子类的构造方法中与父类的名称解耦 使用subClass.superClass.constructor.call代替superClass.call  
        subClass.superClass = superClass.prototype;
    }

    var EleAdaptiveFn = {
        /* EleAdpByWinXScale 方法

         * 简介:传入的ele对象按比例缩放
         * 参数为  [{ el：对象，Wscale:宽度缩放比:Hscale:高度缩放比 refobj 参考对象 }]
         * 
         * 示例：commfn.EleAdaptiveFn.EleAdpByWinXScale ([{
         *		el:$('.user-login-box-inputbox-btn'),
         *		Wscale:0.5,
         *		Hscale:0.5,
         *		refobj:$('body'),
         *	}])
         * */

        EleAdpByWinXScale: function (sets) {
            if (typeof(sets) != "object") {
                console.log("EleAdpByWinXScale传入对象错误");
            } else {
                for (var i = 0; i < sets.length; i++) {
                    var parsentSets = sets[i];
                    var refobjH = parseInt(parsentSets.refobj.css('height'));
                    var refobjW = parseInt(parsentSets.refobj.css('width'));

                    parsentSets.el.css({
                        height: refobjH * parsentSets.Hscale + 'px',
                        width: refobjW * parsentSets.Wscale + 'px',
                    })
                }
            }
        }
    } //EleAdaptiveFn end


    //StringOp  主要是做字符操作的函数库
    var StringOp = {


        /* numOp 方法

         * 简介:传入的字符串对象进行symbol 按照setnum数量进行补全
         * 参数为 val 为字符串 setnum 为设置补全的字符串长度 symbol为补全的符号
         * 
         * 示例: a = 2345667;
         *
         *		 a = a.toString()
         *	
         *		 a = numOp(a,9,"0")
         * 
         * 		 输出为::002345667
         * */
        numOp: function (val, setnum, symbol) {
            if (typeof(val) == 'number') {
                val = val.toString();
            }
            var valLength = val.length;
            var banlance = setnum - valLength;

            if (banlance > 0) {
                var symbolStr = '';
                for (var i = 0; i < banlance; i++) {
                    symbolStr = symbol + symbolStr
                }
                val = symbolStr + val;
            } else {
                return val
            }
            return val
        }
    } //StringOp

    /* formatSeconds 方法

     * 简介:传入的数值 转换成 **时**分**秒
     * 参数为 value 为数字
     * 
     * 示例: a = formatSeconds(300);
     *		 a = 3分00秒
     *		 
     * */
    function formatSeconds(value) {
        var theTime = parseInt(value);// 秒
        var theTime1 = 0;// 分
        var theTime2 = 0;// 小时
        if (theTime > 60) {
            theTime1 = parseInt(theTime / 60);
            theTime = parseInt(theTime % 60);
            if (theTime1 > 60) {
                theTime2 = parseInt(theTime1 / 60);
                theTime1 = parseInt(theTime1 % 60);
            }
        }
        var result = "" + parseInt(theTime) + "秒";
        if (theTime1 > 0) {
            result = "" + parseInt(theTime1) + "分" + result;
        }
        if (theTime2 > 0) {
            result = "" + parseInt(theTime2) + "小时" + result;
        }

        return result;
    }


    return obj = {
        GetRequest: GetRequest,
        extend: extend,
        EleAdaptiveFn: EleAdaptiveFn,
        StringOp: StringOp,
        supportCSS: supportCSS,
        formatSeconds: formatSeconds,
    }
})