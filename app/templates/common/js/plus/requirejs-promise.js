(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory();
    }
    else {
        root.requireP = factory();
    }
}(this, function () {
    var requireP = function (deps) {
        var AmdPromise = (function () {
            function AmdPromise() {
                var _this = this;
                this.DepsArr = [];
                this.aliasArr = [];
                if (Array.isArray(deps)) {
                    deps.forEach(function (dep) {
                        var depString = dep.split(":");
                        var depName = depString[0];
                        var aliasName = depString[1];
                        _this.aliasArr.push(aliasName || depName);
                        _this.DepsArr.push(_this.$createAmd(depName));
                    });
                }
                else {
                    this.DepsArr.push(this.$createAmd(deps));
                }
            }
            AmdPromise.prototype.then = function (fn) {
                var _this = this;
                Promise.all((function () {
                    return _this.DepsArr.map(function (depFn) {
                        return depFn();
                    });
                })()).then(function (libs) {
                    if (Array.isArray(deps)) {
                        var Obj_1 = {};
                        deps.forEach(function (dep, index) {
                            Obj_1[_this.aliasArr[index]] = libs[index];
                        });
                        fn.call(null, Obj_1);
                    }
                    else {
                        fn.apply(null, libs);
                    }
                });
                return this;
            };
            AmdPromise.prototype.$createAmd = function (lib) {
                return function () {
                    return new Promise(function (resolve) {
                        requirejs([lib], resolve);
                    });
                };
            };
            return AmdPromise;
        }());
        return new AmdPromise();
    };
    return requireP;
}));
//# sourceMappingURL=requirejs-promise.js.map