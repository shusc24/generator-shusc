define(['jquery', 'VaildatorStrategies'], function ($, strategies) {

    var Validator = function () {
        this.cache = []; // 保存校验规则
    };
    Validator.prototype.add = function (dom, rule, errorMsg) {
        var ary = rule.split(':'); // 把 strategy 和参数分开
        this.cache.push(function () { // 把校验的步骤用空函数包装起来，并且放入 cache
            var strategy = ary.shift(); // 用户挑选的 strategy
            ary.unshift(dom.val()); // 把 input 的 value 添加进参数列表
            ary.push(errorMsg); // 把 errorMsg 添加进参数列表
            return strategies[strategy].apply(dom, ary);
        });
    };
    Validator.prototype.start = function () {
        for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
            var msg = validatorFunc(); // 开始校验，并取得校验后的返回信息
            if (msg) { // 如果有确切的返回值，说明校验没有通过
                return msg;
            }
        }
    };

    return Validator

})