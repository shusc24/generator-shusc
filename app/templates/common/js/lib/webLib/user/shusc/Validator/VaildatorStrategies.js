define([], function () {
    var strategies = {
        isNonEmpty: function (value, errorMsg) { // 不为空
            if (value === '') {
                return errorMsg;
            }
        },
        minLength: function (value, length, errorMsg) { // 限制最小长度
            if (value.length < length) {
                return errorMsg;
            }
        },
        isMobile: function (value, errorMsg) { // 手机号码格式
            if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
                return errorMsg;
            }
        }
    };
    return strategies;
})