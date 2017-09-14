define(function (require) {
    //引入公共库
    var $ = require("jquery");
    var _ = require("lodash");

    function navSwitch(menuSelector, activeClass) {
        this._menuSelector = menuSelector;
        this._activeClass = activeClass;
        this._init();
    }

    navSwitch.prototype = {
        _init: function () {
            var self = this;
            var urlKey = this._getKey(location.href);
            $(this._menuSelector).each(function () {
                var Ele = $(this);
                var hrefKey = self._getKey(_.trim(Ele.attr("href")));
//				console.log(hrefKey === urlKey);
                if (hrefKey == urlKey) {
                    Ele.addClass(self._activeClass);
                    return false;
                }
            });
        },
        _getKey: function (Str) {
            return _.last(Str.split("/"))
        },
    }

    return navSwitch;

})