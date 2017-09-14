var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// taskmanager 
;
(function (factory) {
    if (typeof module !== 'undefined' && typeof exports === 'object') {
        var _ = require("lodash");
        var $ = require('jquery');
        var pageTask = factory($, _);
        module.exports = pageTask;
    }
    else if (typeof define == 'function' && define.amd) {
        define(['lodash', 'jquery'], function (_, $) {
            var pageTask = factory($, _);
            return pageTask;
        });
    }
    else {
        console.log("pageTask加载");
        var pageTask = factory($, _);
        window.pageTask = pageTask;
    }
})(function ($, _) {
    var Event = (function () {
        function Event() {
            this.o = $({});
        }
        Event.prototype.on = function (options) {
            this.o.bind.apply(this.o, arguments);
        };
        ;
        Event.prototype.off = function (options) {
            this.o.unbind.apply(this.o, arguments);
        };
        ;
        Event.prototype.trigger = function (options) {
            this.o.trigger.apply(this.o, arguments);
        };
        ;
        return Event;
    }());
    var pageTask = (function (_super) {
        __extends(pageTask, _super);
        function pageTask() {
            var _this = _super.call(this) || this;
            _this.data = {};
            _this.taskFn = {};
            return _this;
        }
        pageTask.prototype.add = function (type, name, Obj) {
            if (_.has(this.data, type)) {
                this.data[type][name] = Obj;
            }
            else {
                this.data[type] = {};
                this.data[type][name] = Obj;
            }
            return this;
        };
        ;
        pageTask.prototype.get = function (type, name) {
            if (_.has(this.data, type)) {
                return this.data[type][name];
            }
        };
        ;
        pageTask.prototype.delete = function (type, name) {
            if (_.has(this.data[type], name)) {
                delete this.data[type][name];
            }
            return this;
        };
        ;
        pageTask.prototype.addDataType = function (type) {
            if (!_.has(this.data, type)) {
                this.data[type] = {};
            }
            return this;
        };
        ;
        pageTask.prototype.addTask = function (name, fn) {
            var _this = this;
            if (_.has(this.taskFn, name)) {
                _.each(this.taskFn[name], function (item) {
                    if (_.trim(fn.toString()) !== _.trim(item.toString())) {
                        _this.taskFn[name].push(fn);
                    }
                });
            }
            else {
                this.taskFn[name] = [];
                this.taskFn[name].push(fn);
            }
            return this;
        };
        ;
        pageTask.prototype.runTask = function (name) {
            var _this = this;
            if (_.isString(name)) {
                this.taskRun(name);
            }
            if (_.isArray(name)) {
                _.each(name, function (item) {
                    if (_.has(_this.taskFn, item)) {
                        _this.taskRun(item);
                    }
                });
            }
            this.trigger("taskdone");
            return this;
        };
        ;
        pageTask.prototype.taskRun = function (name) {
            var _this = this;
            _.each(this.taskFn[name], function (fn) {
                fn(_this);
            });
            return this;
        };
        ;
        return pageTask;
    }(Event));
    return pageTask;
});
//# sourceMappingURL=pageTask.js.map