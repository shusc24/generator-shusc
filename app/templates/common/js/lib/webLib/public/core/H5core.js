/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
!function (t, e) {
    "function" == typeof define && define.amd ? define(function () {
        return e(t)
    }) : e(t)
}(this, function (t) {
    var e = function () {
        function $(t) {
            return null == t ? String(t) : S[C.call(t)] || "object"
        }

        function F(t) {
            return "function" == $(t)
        }

        function k(t) {
            return null != t && t == t.window
        }

        function M(t) {
            return null != t && t.nodeType == t.DOCUMENT_NODE
        }

        function R(t) {
            return "object" == $(t)
        }

        function Z(t) {
            return R(t) && !k(t) && Object.getPrototypeOf(t) == Object.prototype
        }

        function z(t) {
            var e = !!t && "length" in t && t.length, n = r.type(t);
            return "function" != n && !k(t) && ("array" == n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function q(t) {
            return a.call(t, function (t) {
                return null != t
            })
        }

        function H(t) {
            return t.length > 0 ? r.fn.concat.apply([], t) : t
        }

        function I(t) {
            return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }

        function V(t) {
            return t in l ? l[t] : l[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
        }

        function _(t, e) {
            return "number" != typeof e || h[I(t)] ? e : e + "px"
        }

        function B(t) {
            var e, n;
            return c[t] || (e = f.createElement(t), f.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), c[t] = n), c[t]
        }

        function U(t) {
            return "children" in t ? u.call(t.children) : r.map(t.childNodes, function (t) {
                return 1 == t.nodeType ? t : void 0
            })
        }

        function X(t, e) {
            var n, r = t ? t.length : 0;
            for (n = 0; r > n; n++)this[n] = t[n];
            this.length = r, this.selector = e || ""
        }

        function J(t, r, i) {
            for (n in r)i && (Z(r[n]) || L(r[n])) ? (Z(r[n]) && !Z(t[n]) && (t[n] = {}), L(r[n]) && !L(t[n]) && (t[n] = []), J(t[n], r[n], i)) : r[n] !== e && (t[n] = r[n])
        }

        function W(t, e) {
            return null == e ? r(t) : r(t).filter(e)
        }

        function Y(t, e, n, r) {
            return F(e) ? e.call(t, n, r) : e
        }

        function G(t, e, n) {
            null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
        }

        function K(t, n) {
            var r = t.className || "", i = r && r.baseVal !== e;
            return n === e ? i ? r.baseVal : r : void(i ? r.baseVal = n : t.className = n)
        }

        function Q(t) {
            try {
                return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? r.parseJSON(t) : t) : t
            } catch (e) {
                return t
            }
        }

        function tt(t, e) {
            e(t);
            for (var n = 0, r = t.childNodes.length; r > n; n++)tt(t.childNodes[n], e)
        }

        var e, n, r, i, O, P, o = [], s = o.concat, a = o.filter, u = o.slice, f = t.document, c = {}, l = {},
            h = {"column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1},
            p = /^\s*<(\w+|!)[^>]*>/, d = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            m = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, g = /^(?:body|html)$/i,
            v = /([A-Z])/g, y = ["val", "css", "html", "text", "data", "width", "height", "offset"],
            x = ["after", "prepend", "before", "append"], b = f.createElement("table"), E = f.createElement("tr"),
            j = {tr: f.createElement("tbody"), tbody: b, thead: b, tfoot: b, td: E, th: E, "*": f.createElement("div")},
            w = /complete|loaded|interactive/, T = /^[\w-]*$/, S = {}, C = S.toString, N = {},
            A = f.createElement("div"), D = {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            }, L = Array.isArray || function (t) {
                    return t instanceof Array
                };
        return N.matches = function (t, e) {
            if (!e || !t || 1 !== t.nodeType)return !1;
            var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
            if (n)return n.call(t, e);
            var r, i = t.parentNode, o = !i;
            return o && (i = A).appendChild(t), r = ~N.qsa(i, e).indexOf(t), o && A.removeChild(t), r
        }, O = function (t) {
            return t.replace(/-+(.)?/g, function (t, e) {
                return e ? e.toUpperCase() : ""
            })
        }, P = function (t) {
            return a.call(t, function (e, n) {
                return t.indexOf(e) == n
            })
        }, N.fragment = function (t, n, i) {
            var o, s, a;
            return d.test(t) && (o = r(f.createElement(RegExp.$1))), o || (t.replace && (t = t.replace(m, "<$1></$2>")), n === e && (n = p.test(t) && RegExp.$1), n in j || (n = "*"), a = j[n], a.innerHTML = "" + t, o = r.each(u.call(a.childNodes), function () {
                a.removeChild(this)
            })), Z(i) && (s = r(o), r.each(i, function (t, e) {
                y.indexOf(t) > -1 ? s[t](e) : s.attr(t, e)
            })), o
        }, N.Z = function (t, e) {
            return new X(t, e)
        }, N.isZ = function (t) {
            return t instanceof N.Z
        }, N.init = function (t, n) {
            var i;
            if (!t)return N.Z();
            if ("string" == typeof t)if (t = t.trim(), "<" == t[0] && p.test(t)) i = N.fragment(t, RegExp.$1, n), t = null; else {
                if (n !== e)return r(n).find(t);
                i = N.qsa(f, t)
            } else {
                if (F(t))return r(f).ready(t);
                if (N.isZ(t))return t;
                if (L(t)) i = q(t); else if (R(t)) i = [t], t = null; else if (p.test(t)) i = N.fragment(t.trim(), RegExp.$1, n), t = null; else {
                    if (n !== e)return r(n).find(t);
                    i = N.qsa(f, t)
                }
            }
            return N.Z(i, t)
        }, r = function (t, e) {
            return N.init(t, e)
        }, r.extend = function (t) {
            var e, n = u.call(arguments, 1);
            return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
                J(t, n, e)
            }), t
        }, N.qsa = function (t, e) {
            var n, r = "#" == e[0], i = !r && "." == e[0], o = r || i ? e.slice(1) : e, s = T.test(o);
            return t.getElementById && s && r ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : u.call(s && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
        }, r.contains = f.documentElement.contains ? function (t, e) {
            return t !== e && t.contains(e)
        } : function (t, e) {
            for (; e && (e = e.parentNode);)if (e === t)return !0;
            return !1
        }, r.type = $, r.isFunction = F, r.isWindow = k, r.isArray = L, r.isPlainObject = Z, r.isEmptyObject = function (t) {
            var e;
            for (e in t)return !1;
            return !0
        }, r.isNumeric = function (t) {
            var e = Number(t), n = typeof t;
            return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1
        }, r.inArray = function (t, e, n) {
            return o.indexOf.call(e, t, n)
        }, r.camelCase = O, r.trim = function (t) {
            return null == t ? "" : String.prototype.trim.call(t)
        }, r.uuid = 0, r.support = {}, r.expr = {}, r.noop = function () {
        }, r.map = function (t, e) {
            var n, i, o, r = [];
            if (z(t))for (i = 0; i < t.length; i++)n = e(t[i], i), null != n && r.push(n); else for (o in t)n = e(t[o], o), null != n && r.push(n);
            return H(r)
        }, r.each = function (t, e) {
            var n, r;
            if (z(t)) {
                for (n = 0; n < t.length; n++)if (e.call(t[n], n, t[n]) === !1)return t
            } else for (r in t)if (e.call(t[r], r, t[r]) === !1)return t;
            return t
        }, r.grep = function (t, e) {
            return a.call(t, e)
        }, t.JSON && (r.parseJSON = JSON.parse), r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            S["[object " + e + "]"] = e.toLowerCase()
        }), r.fn = {
            constructor: N.Z,
            length: 0,
            forEach: o.forEach,
            reduce: o.reduce,
            push: o.push,
            sort: o.sort,
            splice: o.splice,
            indexOf: o.indexOf,
            concat: function () {
                var t, e, n = [];
                for (t = 0; t < arguments.length; t++)e = arguments[t], n[t] = N.isZ(e) ? e.toArray() : e;
                return s.apply(N.isZ(this) ? this.toArray() : this, n)
            },
            map: function (t) {
                return r(r.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function () {
                return r(u.apply(this, arguments))
            },
            ready: function (t) {
                return w.test(f.readyState) && f.body ? t(r) : f.addEventListener("DOMContentLoaded", function () {
                    t(r)
                }, !1), this
            },
            get: function (t) {
                return t === e ? u.call(this) : this[t >= 0 ? t : t + this.length]
            },
            toArray: function () {
                return this.get()
            },
            size: function () {
                return this.length
            },
            remove: function () {
                return this.each(function () {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function (t) {
                return o.every.call(this, function (e, n) {
                    return t.call(e, n, e) !== !1
                }), this
            },
            filter: function (t) {
                return F(t) ? this.not(this.not(t)) : r(a.call(this, function (e) {
                    return N.matches(e, t)
                }))
            },
            add: function (t, e) {
                return r(P(this.concat(r(t, e))))
            },
            is: function (t) {
                return this.length > 0 && N.matches(this[0], t)
            },
            not: function (t) {
                var n = [];
                if (F(t) && t.call !== e) this.each(function (e) {
                    t.call(this, e) || n.push(this)
                }); else {
                    var i = "string" == typeof t ? this.filter(t) : z(t) && F(t.item) ? u.call(t) : r(t);
                    this.forEach(function (t) {
                        i.indexOf(t) < 0 && n.push(t)
                    })
                }
                return r(n)
            },
            has: function (t) {
                return this.filter(function () {
                    return R(t) ? r.contains(this, t) : r(this).find(t).size()
                })
            },
            eq: function (t) {
                return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
            },
            first: function () {
                var t = this[0];
                return t && !R(t) ? t : r(t)
            },
            last: function () {
                var t = this[this.length - 1];
                return t && !R(t) ? t : r(t)
            },
            find: function (t) {
                var e, n = this;
                return e = t ? "object" == typeof t ? r(t).filter(function () {
                    var t = this;
                    return o.some.call(n, function (e) {
                        return r.contains(e, t)
                    })
                }) : 1 == this.length ? r(N.qsa(this[0], t)) : this.map(function () {
                    return N.qsa(this, t)
                }) : r()
            },
            closest: function (t, e) {
                var n = [], i = "object" == typeof t && r(t);
                return this.each(function (r, o) {
                    for (; o && !(i ? i.indexOf(o) >= 0 : N.matches(o, t));)o = o !== e && !M(o) && o.parentNode;
                    o && n.indexOf(o) < 0 && n.push(o)
                }), r(n)
            },
            parents: function (t) {
                for (var e = [], n = this; n.length > 0;)n = r.map(n, function (t) {
                    return (t = t.parentNode) && !M(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
                });
                return W(e, t)
            },
            parent: function (t) {
                return W(P(this.pluck("parentNode")), t)
            },
            children: function (t) {
                return W(this.map(function () {
                    return U(this)
                }), t)
            },
            contents: function () {
                return this.map(function () {
                    return this.contentDocument || u.call(this.childNodes)
                })
            },
            siblings: function (t) {
                return W(this.map(function (t, e) {
                    return a.call(U(e.parentNode), function (t) {
                        return t !== e
                    })
                }), t)
            },
            empty: function () {
                return this.each(function () {
                    this.innerHTML = ""
                })
            },
            pluck: function (t) {
                return r.map(this, function (e) {
                    return e[t]
                })
            },
            show: function () {
                return this.each(function () {
                    "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = B(this.nodeName))
                })
            },
            replaceWith: function (t) {
                return this.before(t).remove()
            },
            wrap: function (t) {
                var e = F(t);
                if (this[0] && !e)var n = r(t).get(0), i = n.parentNode || this.length > 1;
                return this.each(function (o) {
                    r(this).wrapAll(e ? t.call(this, o) : i ? n.cloneNode(!0) : n)
                })
            },
            wrapAll: function (t) {
                if (this[0]) {
                    r(this[0]).before(t = r(t));
                    for (var e; (e = t.children()).length;)t = e.first();
                    r(t).append(this)
                }
                return this
            },
            wrapInner: function (t) {
                var e = F(t);
                return this.each(function (n) {
                    var i = r(this), o = i.contents(), s = e ? t.call(this, n) : t;
                    o.length ? o.wrapAll(s) : i.append(s)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    r(this).replaceWith(r(this).children())
                }), this
            },
            clone: function () {
                return this.map(function () {
                    return this.cloneNode(!0)
                })
            },
            hide: function () {
                return this.css("display", "none")
            },
            toggle: function (t) {
                return this.each(function () {
                    var n = r(this);
                    (t === e ? "none" == n.css("display") : t) ? n.show() : n.hide()
                })
            },
            prev: function (t) {
                return r(this.pluck("previousElementSibling")).filter(t || "*")
            },
            next: function (t) {
                return r(this.pluck("nextElementSibling")).filter(t || "*")
            },
            html: function (t) {
                return 0 in arguments ? this.each(function (e) {
                    var n = this.innerHTML;
                    r(this).empty().append(Y(this, t, e, n))
                }) : 0 in this ? this[0].innerHTML : null
            },
            text: function (t) {
                return 0 in arguments ? this.each(function (e) {
                    var n = Y(this, t, e, this.textContent);
                    this.textContent = null == n ? "" : "" + n
                }) : 0 in this ? this.pluck("textContent").join("") : null
            },
            attr: function (t, r) {
                var i;
                return "string" != typeof t || 1 in arguments ? this.each(function (e) {
                    if (1 === this.nodeType)if (R(t))for (n in t)G(this, n, t[n]); else G(this, t, Y(this, r, e, this.getAttribute(t)))
                }) : 0 in this && 1 == this[0].nodeType && null != (i = this[0].getAttribute(t)) ? i : e
            },
            removeAttr: function (t) {
                return this.each(function () {
                    1 === this.nodeType && t.split(" ").forEach(function (t) {
                        G(this, t)
                    }, this)
                })
            },
            prop: function (t, e) {
                return t = D[t] || t, 1 in arguments ? this.each(function (n) {
                    this[t] = Y(this, e, n, this[t])
                }) : this[0] && this[0][t]
            },
            removeProp: function (t) {
                return t = D[t] || t, this.each(function () {
                    delete this[t]
                })
            },
            data: function (t, n) {
                var r = "data-" + t.replace(v, "-$1").toLowerCase(),
                    i = 1 in arguments ? this.attr(r, n) : this.attr(r);
                return null !== i ? Q(i) : e
            },
            val: function (t) {
                return 0 in arguments ? (null == t && (t = ""), this.each(function (e) {
                    this.value = Y(this, t, e, this.value)
                })) : this[0] && (this[0].multiple ? r(this[0]).find("option").filter(function () {
                        return this.selected
                    }).pluck("value") : this[0].value)
            },
            offset: function (e) {
                if (e)return this.each(function (t) {
                    var n = r(this), i = Y(this, e, t, n.offset()), o = n.offsetParent().offset(),
                        s = {top: i.top - o.top, left: i.left - o.left};
                    "static" == n.css("position") && (s.position = "relative"), n.css(s)
                });
                if (!this.length)return null;
                if (f.documentElement !== this[0] && !r.contains(f.documentElement, this[0]))return {top: 0, left: 0};
                var n = this[0].getBoundingClientRect();
                return {
                    left: n.left + t.pageXOffset,
                    top: n.top + t.pageYOffset,
                    width: Math.round(n.width),
                    height: Math.round(n.height)
                }
            },
            css: function (t, e) {
                if (arguments.length < 2) {
                    var i = this[0];
                    if ("string" == typeof t) {
                        if (!i)return;
                        return i.style[O(t)] || getComputedStyle(i, "").getPropertyValue(t)
                    }
                    if (L(t)) {
                        if (!i)return;
                        var o = {}, s = getComputedStyle(i, "");
                        return r.each(t, function (t, e) {
                            o[e] = i.style[O(e)] || s.getPropertyValue(e)
                        }), o
                    }
                }
                var a = "";
                if ("string" == $(t)) e || 0 === e ? a = I(t) + ":" + _(t, e) : this.each(function () {
                    this.style.removeProperty(I(t))
                }); else for (n in t)t[n] || 0 === t[n] ? a += I(n) + ":" + _(n, t[n]) + ";" : this.each(function () {
                    this.style.removeProperty(I(n))
                });
                return this.each(function () {
                    this.style.cssText += ";" + a
                })
            },
            index: function (t) {
                return t ? this.indexOf(r(t)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function (t) {
                return t ? o.some.call(this, function (t) {
                    return this.test(K(t))
                }, V(t)) : !1
            },
            addClass: function (t) {
                return t ? this.each(function (e) {
                    if ("className" in this) {
                        i = [];
                        var n = K(this), o = Y(this, t, e, n);
                        o.split(/\s+/g).forEach(function (t) {
                            r(this).hasClass(t) || i.push(t)
                        }, this), i.length && K(this, n + (n ? " " : "") + i.join(" "))
                    }
                }) : this
            },
            removeClass: function (t) {
                return this.each(function (n) {
                    if ("className" in this) {
                        if (t === e)return K(this, "");
                        i = K(this), Y(this, t, n, i).split(/\s+/g).forEach(function (t) {
                            i = i.replace(V(t), " ")
                        }), K(this, i.trim())
                    }
                })
            },
            toggleClass: function (t, n) {
                return t ? this.each(function (i) {
                    var o = r(this), s = Y(this, t, i, K(this));
                    s.split(/\s+/g).forEach(function (t) {
                        (n === e ? !o.hasClass(t) : n) ? o.addClass(t) : o.removeClass(t)
                    })
                }) : this
            },
            scrollTop: function (t) {
                if (this.length) {
                    var n = "scrollTop" in this[0];
                    return t === e ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function () {
                        this.scrollTop = t
                    } : function () {
                        this.scrollTo(this.scrollX, t)
                    })
                }
            },
            scrollLeft: function (t) {
                if (this.length) {
                    var n = "scrollLeft" in this[0];
                    return t === e ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function () {
                        this.scrollLeft = t
                    } : function () {
                        this.scrollTo(t, this.scrollY)
                    })
                }
            },
            position: function () {
                if (this.length) {
                    var t = this[0], e = this.offsetParent(), n = this.offset(),
                        i = g.test(e[0].nodeName) ? {top: 0, left: 0} : e.offset();
                    return n.top -= parseFloat(r(t).css("margin-top")) || 0, n.left -= parseFloat(r(t).css("margin-left")) || 0, i.top += parseFloat(r(e[0]).css("border-top-width")) || 0, i.left += parseFloat(r(e[0]).css("border-left-width")) || 0, {
                        top: n.top - i.top,
                        left: n.left - i.left
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || f.body; t && !g.test(t.nodeName) && "static" == r(t).css("position");)t = t.offsetParent;
                    return t
                })
            }
        }, r.fn.detach = r.fn.remove, ["width", "height"].forEach(function (t) {
            var n = t.replace(/./, function (t) {
                return t[0].toUpperCase()
            });
            r.fn[t] = function (i) {
                var o, s = this[0];
                return i === e ? k(s) ? s["inner" + n] : M(s) ? s.documentElement["scroll" + n] : (o = this.offset()) && o[t] : this.each(function (e) {
                    s = r(this), s.css(t, Y(this, i, e, s[t]()))
                })
            }
        }), x.forEach(function (n, i) {
            var o = i % 2;
            r.fn[n] = function () {
                var n, a, s = r.map(arguments, function (t) {
                    var i = [];
                    return n = $(t), "array" == n ? (t.forEach(function (t) {
                        return t.nodeType !== e ? i.push(t) : r.zepto.isZ(t) ? i = i.concat(t.get()) : void(i = i.concat(N.fragment(t)))
                    }), i) : "object" == n || null == t ? t : N.fragment(t)
                }), u = this.length > 1;
                return s.length < 1 ? this : this.each(function (e, n) {
                    a = o ? n : n.parentNode, n = 0 == i ? n.nextSibling : 1 == i ? n.firstChild : 2 == i ? n : null;
                    var c = r.contains(f.documentElement, a);
                    s.forEach(function (e) {
                        if (u) e = e.cloneNode(!0); else if (!a)return r(e).remove();
                        a.insertBefore(e, n), c && tt(e, function (e) {
                            if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
                                var n = e.ownerDocument ? e.ownerDocument.defaultView : t;
                                n.eval.call(n, e.innerHTML)
                            }
                        })
                    })
                })
            }, r.fn[o ? n + "To" : "insert" + (i ? "Before" : "After")] = function (t) {
                return r(t)[n](this), this
            }
        }), N.Z.prototype = X.prototype = r.fn, N.uniq = P, N.deserializeValue = Q, r.zepto = N, r
    }();
    return t.Zepto = e, void 0 === t.$ && (t.$ = e), function (e) {
        function h(t) {
            return t._zid || (t._zid = n++)
        }

        function p(t, e, n, r) {
            if (e = d(e), e.ns)var i = m(e.ns);
            return (a[h(t)] || []).filter(function (t) {
                return t && (!e.e || t.e == e.e) && (!e.ns || i.test(t.ns)) && (!n || h(t.fn) === h(n)) && (!r || t.sel == r)
            })
        }

        function d(t) {
            var e = ("" + t).split(".");
            return {e: e[0], ns: e.slice(1).sort().join(" ")}
        }

        function m(t) {
            return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
        }

        function g(t, e) {
            return t.del && !f && t.e in c || !!e
        }

        function v(t) {
            return l[t] || f && c[t] || t
        }

        function y(t, n, i, o, s, u, f) {
            var c = h(t), p = a[c] || (a[c] = []);
            n.split(/\s/).forEach(function (n) {
                if ("ready" == n)return e(document).ready(i);
                var a = d(n);
                a.fn = i, a.sel = s, a.e in l && (i = function (t) {
                    var n = t.relatedTarget;
                    return !n || n !== this && !e.contains(this, n) ? a.fn.apply(this, arguments) : void 0
                }), a.del = u;
                var c = u || i;
                a.proxy = function (e) {
                    if (e = T(e), !e.isImmediatePropagationStopped()) {
                        e.data = o;
                        var n = c.apply(t, e._args == r ? [e] : [e].concat(e._args));
                        return n === !1 && (e.preventDefault(), e.stopPropagation()), n
                    }
                }, a.i = p.length, p.push(a), "addEventListener" in t && t.addEventListener(v(a.e), a.proxy, g(a, f))
            })
        }

        function x(t, e, n, r, i) {
            var o = h(t);
            (e || "").split(/\s/).forEach(function (e) {
                p(t, e, n, r).forEach(function (e) {
                    delete a[o][e.i], "removeEventListener" in t && t.removeEventListener(v(e.e), e.proxy, g(e, i))
                })
            })
        }

        function T(t, n) {
            return (n || !t.isDefaultPrevented) && (n || (n = t), e.each(w, function (e, r) {
                var i = n[e];
                t[e] = function () {
                    return this[r] = b, i && i.apply(n, arguments)
                }, t[r] = E
            }), t.timeStamp || (t.timeStamp = Date.now()), (n.defaultPrevented !== r ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = b)), t
        }

        function S(t) {
            var e, n = {originalEvent: t};
            for (e in t)j.test(e) || t[e] === r || (n[e] = t[e]);
            return T(n, t)
        }

        var r, n = 1, i = Array.prototype.slice, o = e.isFunction, s = function (t) {
                return "string" == typeof t
            }, a = {}, u = {}, f = "onfocusin" in t, c = {focus: "focusin", blur: "focusout"},
            l = {mouseenter: "mouseover", mouseleave: "mouseout"};
        u.click = u.mousedown = u.mouseup = u.mousemove = "MouseEvents", e.event = {
            add: y,
            remove: x
        }, e.proxy = function (t, n) {
            var r = 2 in arguments && i.call(arguments, 2);
            if (o(t)) {
                var a = function () {
                    return t.apply(n, r ? r.concat(i.call(arguments)) : arguments)
                };
                return a._zid = h(t), a
            }
            if (s(n))return r ? (r.unshift(t[n], t), e.proxy.apply(null, r)) : e.proxy(t[n], t);
            throw new TypeError("expected function")
        }, e.fn.bind = function (t, e, n) {
            return this.on(t, e, n)
        }, e.fn.unbind = function (t, e) {
            return this.off(t, e)
        }, e.fn.one = function (t, e, n, r) {
            return this.on(t, e, n, r, 1)
        };
        var b = function () {
            return !0
        }, E = function () {
            return !1
        }, j = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/, w = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
        };
        e.fn.delegate = function (t, e, n) {
            return this.on(e, t, n)
        }, e.fn.undelegate = function (t, e, n) {
            return this.off(e, t, n)
        }, e.fn.live = function (t, n) {
            return e(document.body).delegate(this.selector, t, n), this
        }, e.fn.die = function (t, n) {
            return e(document.body).undelegate(this.selector, t, n), this
        }, e.fn.on = function (t, n, a, u, f) {
            var c, l, h = this;
            return t && !s(t) ? (e.each(t, function (t, e) {
                h.on(t, n, a, e, f)
            }), h) : (s(n) || o(u) || u === !1 || (u = a, a = n, n = r), (u === r || a === !1) && (u = a, a = r), u === !1 && (u = E), h.each(function (r, o) {
                f && (c = function (t) {
                    return x(o, t.type, u), u.apply(this, arguments)
                }), n && (l = function (t) {
                    var r, s = e(t.target).closest(n, o).get(0);
                    return s && s !== o ? (r = e.extend(S(t), {
                        currentTarget: s,
                        liveFired: o
                    }), (c || u).apply(s, [r].concat(i.call(arguments, 1)))) : void 0
                }), y(o, t, u, a, n, l || c)
            }))
        }, e.fn.off = function (t, n, i) {
            var a = this;
            return t && !s(t) ? (e.each(t, function (t, e) {
                a.off(t, n, e)
            }), a) : (s(n) || o(i) || i === !1 || (i = n, n = r), i === !1 && (i = E), a.each(function () {
                x(this, t, i, n)
            }))
        }, e.fn.trigger = function (t, n) {
            return t = s(t) || e.isPlainObject(t) ? e.Event(t) : T(t), t._args = n, this.each(function () {
                t.type in c && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
            })
        }, e.fn.triggerHandler = function (t, n) {
            var r, i;
            return this.each(function (o, a) {
                r = S(s(t) ? e.Event(t) : t), r._args = n, r.target = a, e.each(p(a, t.type || t), function (t, e) {
                    return i = e.proxy(r), r.isImmediatePropagationStopped() ? !1 : void 0
                })
            }), i
        }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (t) {
            e.fn[t] = function (e) {
                return 0 in arguments ? this.bind(t, e) : this.trigger(t)
            }
        }), e.Event = function (t, e) {
            s(t) || (e = t, t = e.type);
            var n = document.createEvent(u[t] || "Events"), r = !0;
            if (e)for (var i in e)"bubbles" == i ? r = !!e[i] : n[i] = e[i];
            return n.initEvent(t, r, !0), T(n)
        }
    }(e), function (e) {
        function p(t, n, r) {
            var i = e.Event(n);
            return e(t).trigger(i, r), !i.isDefaultPrevented()
        }

        function d(t, e, n, i) {
            return t.global ? p(e || r, n, i) : void 0
        }

        function m(t) {
            t.global && 0 === e.active++ && d(t, null, "ajaxStart")
        }

        function g(t) {
            t.global && !--e.active && d(t, null, "ajaxStop")
        }

        function v(t, e) {
            var n = e.context;
            return e.beforeSend.call(n, t, e) === !1 || d(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void d(e, n, "ajaxSend", [t, e])
        }

        function y(t, e, n, r) {
            var i = n.context, o = "success";
            n.success.call(i, t, o, e), r && r.resolveWith(i, [t, o, e]), d(n, i, "ajaxSuccess", [e, n, t]), b(o, e, n)
        }

        function x(t, e, n, r, i) {
            var o = r.context;
            r.error.call(o, n, e, t), i && i.rejectWith(o, [n, e, t]), d(r, o, "ajaxError", [n, r, t || e]), b(e, n, r)
        }

        function b(t, e, n) {
            var r = n.context;
            n.complete.call(r, e, t), d(n, r, "ajaxComplete", [e, n]), g(n)
        }

        function E(t, e, n) {
            if (n.dataFilter == j)return t;
            var r = n.context;
            return n.dataFilter.call(r, t, e)
        }

        function j() {
        }

        function w(t) {
            return t && (t = t.split(";", 2)[0]), t && (t == c ? "html" : t == f ? "json" : a.test(t) ? "script" : u.test(t) && "xml") || "text"
        }

        function T(t, e) {
            return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
        }

        function S(t) {
            t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() && "jsonp" != t.dataType || (t.url = T(t.url, t.data), t.data = void 0)
        }

        function C(t, n, r, i) {
            return e.isFunction(n) && (i = r, r = n, n = void 0), e.isFunction(r) || (i = r, r = void 0), {
                url: t,
                data: n,
                success: r,
                dataType: i
            }
        }

        function O(t, n, r, i) {
            var o, s = e.isArray(n), a = e.isPlainObject(n);
            e.each(n, function (n, u) {
                o = e.type(u), i && (n = r ? i : i + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !i && s ? t.add(u.name, u.value) : "array" == o || !r && "object" == o ? O(t, u, r, n) : t.add(n, u)
            })
        }

        var i, o, n = +new Date, r = t.document, s = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            a = /^(?:text|application)\/javascript/i, u = /^(?:text|application)\/xml/i, f = "application/json",
            c = "text/html", l = /^\s*$/, h = r.createElement("a");
        h.href = t.location.href, e.active = 0, e.ajaxJSONP = function (i, o) {
            if (!("type" in i))return e.ajax(i);
            var c, p, s = i.jsonpCallback, a = (e.isFunction(s) ? s() : s) || "Zepto" + n++,
                u = r.createElement("script"), f = t[a], l = function (t) {
                    e(u).triggerHandler("error", t || "abort")
                }, h = {abort: l};
            return o && o.promise(h), e(u).on("load error", function (n, r) {
                clearTimeout(p), e(u).off().remove(), "error" != n.type && c ? y(c[0], h, i, o) : x(null, r || "error", h, i, o), t[a] = f, c && e.isFunction(f) && f(c[0]), f = c = void 0
            }), v(h, i) === !1 ? (l("abort"), h) : (t[a] = function () {
                c = arguments
            }, u.src = i.url.replace(/\?(.+)=\?/, "?$1=" + a), r.head.appendChild(u), i.timeout > 0 && (p = setTimeout(function () {
                l("timeout")
            }, i.timeout)), h)
        }, e.ajaxSettings = {
            type: "GET",
            beforeSend: j,
            success: j,
            error: j,
            complete: j,
            context: null,
            global: !0,
            xhr: function () {
                return new t.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: f,
                xml: "application/xml, text/xml",
                html: c,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0,
            dataFilter: j
        }, e.ajax = function (n) {
            var u, f, s = e.extend({}, n || {}), a = e.Deferred && e.Deferred();
            for (i in e.ajaxSettings)void 0 === s[i] && (s[i] = e.ajaxSettings[i]);
            m(s), s.crossDomain || (u = r.createElement("a"), u.href = s.url, u.href = u.href, s.crossDomain = h.protocol + "//" + h.host != u.protocol + "//" + u.host), s.url || (s.url = t.location.toString()), (f = s.url.indexOf("#")) > -1 && (s.url = s.url.slice(0, f)), S(s);
            var c = s.dataType, p = /\?.+=\?/.test(s.url);
            if (p && (c = "jsonp"), s.cache !== !1 && (n && n.cache === !0 || "script" != c && "jsonp" != c) || (s.url = T(s.url, "_=" + Date.now())), "jsonp" == c)return p || (s.url = T(s.url, s.jsonp ? s.jsonp + "=?" : s.jsonp === !1 ? "" : "callback=?")), e.ajaxJSONP(s, a);
            var P, d = s.accepts[c], g = {}, b = function (t, e) {
                g[t.toLowerCase()] = [t, e]
            }, C = /^([\w-]+:)\/\//.test(s.url) ? RegExp.$1 : t.location.protocol, N = s.xhr(), O = N.setRequestHeader;
            if (a && a.promise(N), s.crossDomain || b("X-Requested-With", "XMLHttpRequest"), b("Accept", d || "*/*"), (d = s.mimeType || d) && (d.indexOf(",") > -1 && (d = d.split(",", 2)[0]), N.overrideMimeType && N.overrideMimeType(d)), (s.contentType || s.contentType !== !1 && s.data && "GET" != s.type.toUpperCase()) && b("Content-Type", s.contentType || "application/x-www-form-urlencoded"), s.headers)for (o in s.headers)b(o, s.headers[o]);
            if (N.setRequestHeader = b, N.onreadystatechange = function () {
                    if (4 == N.readyState) {
                        N.onreadystatechange = j, clearTimeout(P);
                        var t, n = !1;
                        if (N.status >= 200 && N.status < 300 || 304 == N.status || 0 == N.status && "file:" == C) {
                            if (c = c || w(s.mimeType || N.getResponseHeader("content-type")), "arraybuffer" == N.responseType || "blob" == N.responseType) t = N.response; else {
                                t = N.responseText;
                                try {
                                    t = E(t, c, s), "script" == c ? (1, eval)(t) : "xml" == c ? t = N.responseXML : "json" == c && (t = l.test(t) ? null : e.parseJSON(t))
                                } catch (r) {
                                    n = r
                                }
                                if (n)return x(n, "parsererror", N, s, a)
                            }
                            y(t, N, s, a)
                        } else x(N.statusText || null, N.status ? "error" : "abort", N, s, a)
                    }
                }, v(N, s) === !1)return N.abort(), x(null, "abort", N, s, a), N;
            var A = "async" in s ? s.async : !0;
            if (N.open(s.type, s.url, A, s.username, s.password), s.xhrFields)for (o in s.xhrFields)N[o] = s.xhrFields[o];
            for (o in g)O.apply(N, g[o]);
            return s.timeout > 0 && (P = setTimeout(function () {
                N.onreadystatechange = j, N.abort(), x(null, "timeout", N, s, a)
            }, s.timeout)), N.send(s.data ? s.data : null), N
        }, e.get = function () {
            return e.ajax(C.apply(null, arguments))
        }, e.post = function () {
            var t = C.apply(null, arguments);
            return t.type = "POST", e.ajax(t)
        }, e.getJSON = function () {
            var t = C.apply(null, arguments);
            return t.dataType = "json", e.ajax(t)
        }, e.fn.load = function (t, n, r) {
            if (!this.length)return this;
            var a, i = this, o = t.split(/\s/), u = C(t, n, r), f = u.success;
            return o.length > 1 && (u.url = o[0], a = o[1]), u.success = function (t) {
                i.html(a ? e("<div>").html(t.replace(s, "")).find(a) : t), f && f.apply(i, arguments)
            }, e.ajax(u), this
        };
        var N = encodeURIComponent;
        e.param = function (t, n) {
            var r = [];
            return r.add = function (t, n) {
                e.isFunction(n) && (n = n()), null == n && (n = ""), this.push(N(t) + "=" + N(n))
            }, O(r, t, n), r.join("&").replace(/%20/g, "+")
        }
    }(e), function (t) {
        t.fn.serializeArray = function () {
            var e, n, r = [], i = function (t) {
                return t.forEach ? t.forEach(i) : void r.push({name: e, value: t})
            };
            return this[0] && t.each(this[0].elements, function (r, o) {
                n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && i(t(o).val())
            }), r
        }, t.fn.serialize = function () {
            var t = [];
            return this.serializeArray().forEach(function (e) {
                t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
            }), t.join("&")
        }, t.fn.submit = function (e) {
            if (0 in arguments) this.bind("submit", e); else if (this.length) {
                var n = t.Event("submit");
                this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
            }
            return this
        }
    }(e), function () {
        try {
            getComputedStyle(void 0)
        } catch (e) {
            var n = getComputedStyle;
            t.getComputedStyle = function (t, e) {
                try {
                    return n(t, e)
                } catch (r) {
                    return null
                }
            }
        }
    }(), e
});


//#############################  Underscore ############################################
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function () {
    function n(n) {
        function t(t, r, e, u, i, o) {
            for (; i >= 0 && o > i; i += n) {
                var a = u ? u[i] : i;
                e = r(e, t[a], a, t)
            }
            return e
        }

        return function (r, e, u, i) {
            e = b(e, i, 4);
            var o = !k(r) && m.keys(r), a = (o || r).length, c = n > 0 ? 0 : a - 1;
            return arguments.length < 3 && (u = r[o ? o[c] : c], c += n), t(r, e, u, o, c, a)
        }
    }

    function t(n) {
        return function (t, r, e) {
            r = x(r, e);
            for (var u = O(t), i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n)if (r(t[i], i, t))return i;
            return -1
        }
    }

    function r(n, t, r) {
        return function (e, u, i) {
            var o = 0, a = O(e);
            if ("number" == typeof i) n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1; else if (r && i && a)return i = r(e, u), e[i] === u ? i : -1;
            if (u !== u)return i = t(l.call(e, o, a), m.isNaN), i >= 0 ? i + o : -1;
            for (i = n > 0 ? o : a - 1; i >= 0 && a > i; i += n)if (e[i] === u)return i;
            return -1
        }
    }

    function e(n, t) {
        var r = I.length, e = n.constructor, u = m.isFunction(e) && e.prototype || a, i = "constructor";
        for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--;)i = I[r], i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i)
    }

    var u = this, i = u._, o = Array.prototype, a = Object.prototype, c = Function.prototype, f = o.push, l = o.slice,
        s = a.toString, p = a.hasOwnProperty, h = Array.isArray, v = Object.keys, g = c.bind, y = Object.create,
        d = function () {
        }, m = function (n) {
            return n instanceof m ? n : this instanceof m ? void(this._wrapped = n) : new m(n)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports._ = m) : u._ = m, m.VERSION = "1.8.3";
    var b = function (n, t, r) {
        if (t === void 0)return n;
        switch (null == r ? 3 : r) {
            case 1:
                return function (r) {
                    return n.call(t, r)
                };
            case 2:
                return function (r, e) {
                    return n.call(t, r, e)
                };
            case 3:
                return function (r, e, u) {
                    return n.call(t, r, e, u)
                };
            case 4:
                return function (r, e, u, i) {
                    return n.call(t, r, e, u, i)
                }
        }
        return function () {
            return n.apply(t, arguments)
        }
    }, x = function (n, t, r) {
        return null == n ? m.identity : m.isFunction(n) ? b(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n)
    };
    m.iteratee = function (n, t) {
        return x(n, t, 1 / 0)
    };
    var _ = function (n, t) {
        return function (r) {
            var e = arguments.length;
            if (2 > e || null == r)return r;
            for (var u = 1; e > u; u++)for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) {
                var f = o[c];
                t && r[f] !== void 0 || (r[f] = i[f])
            }
            return r
        }
    }, j = function (n) {
        if (!m.isObject(n))return {};
        if (y)return y(n);
        d.prototype = n;
        var t = new d;
        return d.prototype = null, t
    }, w = function (n) {
        return function (t) {
            return null == t ? void 0 : t[n]
        }
    }, A = Math.pow(2, 53) - 1, O = w("length"), k = function (n) {
        var t = O(n);
        return "number" == typeof t && t >= 0 && A >= t
    };
    m.each = m.forEach = function (n, t, r) {
        t = b(t, r);
        var e, u;
        if (k(n))for (e = 0, u = n.length; u > e; e++)t(n[e], e, n); else {
            var i = m.keys(n);
            for (e = 0, u = i.length; u > e; e++)t(n[i[e]], i[e], n)
        }
        return n
    }, m.map = m.collect = function (n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) {
            var a = e ? e[o] : o;
            i[o] = t(n[a], a, n)
        }
        return i
    }, m.reduce = m.foldl = m.inject = n(1), m.reduceRight = m.foldr = n(-1), m.find = m.detect = function (n, t, r) {
        var e;
        return e = k(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r), e !== void 0 && e !== -1 ? n[e] : void 0
    }, m.filter = m.select = function (n, t, r) {
        var e = [];
        return t = x(t, r), m.each(n, function (n, r, u) {
            t(n, r, u) && e.push(n)
        }), e
    }, m.reject = function (n, t, r) {
        return m.filter(n, m.negate(x(t)), r)
    }, m.every = m.all = function (n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;
            if (!t(n[o], o, n))return !1
        }
        return !0
    }, m.some = m.any = function (n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;
            if (t(n[o], o, n))return !0
        }
        return !1
    }, m.contains = m.includes = m.include = function (n, t, r, e) {
        return k(n) || (n = m.values(n)), ("number" != typeof r || e) && (r = 0), m.indexOf(n, t, r) >= 0
    }, m.invoke = function (n, t) {
        var r = l.call(arguments, 2), e = m.isFunction(t);
        return m.map(n, function (n) {
            var u = e ? t : n[t];
            return null == u ? u : u.apply(n, r)
        })
    }, m.pluck = function (n, t) {
        return m.map(n, m.property(t))
    }, m.where = function (n, t) {
        return m.filter(n, m.matcher(t))
    }, m.findWhere = function (n, t) {
        return m.find(n, m.matcher(t))
    }, m.max = function (n, t, r) {
        var e, u, i = -1 / 0, o = -1 / 0;
        if (null == t && null != n) {
            n = k(n) ? n : m.values(n);
            for (var a = 0, c = n.length; c > a; a++)e = n[a], e > i && (i = e)
        } else t = x(t, r), m.each(n, function (n, r, e) {
            u = t(n, r, e), (u > o || u === -1 / 0 && i === -1 / 0) && (i = n, o = u)
        });
        return i
    }, m.min = function (n, t, r) {
        var e, u, i = 1 / 0, o = 1 / 0;
        if (null == t && null != n) {
            n = k(n) ? n : m.values(n);
            for (var a = 0, c = n.length; c > a; a++)e = n[a], i > e && (i = e)
        } else t = x(t, r), m.each(n, function (n, r, e) {
            u = t(n, r, e), (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n, o = u)
        });
        return i
    }, m.shuffle = function (n) {
        for (var t, r = k(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++)t = m.random(0, i), t !== i && (u[i] = u[t]), u[t] = r[i];
        return u
    }, m.sample = function (n, t, r) {
        return null == t || r ? (k(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t))
    }, m.sortBy = function (n, t, r) {
        return t = x(t, r), m.pluck(m.map(n, function (n, r, e) {
            return {value: n, index: r, criteria: t(n, r, e)}
        }).sort(function (n, t) {
            var r = n.criteria, e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0)return 1;
                if (e > r || e === void 0)return -1
            }
            return n.index - t.index
        }), "value")
    };
    var F = function (n) {
        return function (t, r, e) {
            var u = {};
            return r = x(r, e), m.each(t, function (e, i) {
                var o = r(e, i, t);
                n(u, e, o)
            }), u
        }
    };
    m.groupBy = F(function (n, t, r) {
        m.has(n, r) ? n[r].push(t) : n[r] = [t]
    }), m.indexBy = F(function (n, t, r) {
        n[r] = t
    }), m.countBy = F(function (n, t, r) {
        m.has(n, r) ? n[r]++ : n[r] = 1
    }), m.toArray = function (n) {
        return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : []
    }, m.size = function (n) {
        return null == n ? 0 : k(n) ? n.length : m.keys(n).length
    }, m.partition = function (n, t, r) {
        t = x(t, r);
        var e = [], u = [];
        return m.each(n, function (n, r, i) {
            (t(n, r, i) ? e : u).push(n)
        }), [e, u]
    }, m.first = m.head = m.take = function (n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : m.initial(n, n.length - t)
    }, m.initial = function (n, t, r) {
        return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
    }, m.last = function (n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t))
    }, m.rest = m.tail = m.drop = function (n, t, r) {
        return l.call(n, null == t || r ? 1 : t)
    }, m.compact = function (n) {
        return m.filter(n, m.identity)
    };
    var S = function (n, t, r, e) {
        for (var u = [], i = 0, o = e || 0, a = O(n); a > o; o++) {
            var c = n[o];
            if (k(c) && (m.isArray(c) || m.isArguments(c))) {
                t || (c = S(c, t, r));
                var f = 0, l = c.length;
                for (u.length += l; l > f;)u[i++] = c[f++]
            } else r || (u[i++] = c)
        }
        return u
    };
    m.flatten = function (n, t) {
        return S(n, t, !1)
    }, m.without = function (n) {
        return m.difference(n, l.call(arguments, 1))
    }, m.uniq = m.unique = function (n, t, r, e) {
        m.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = x(r, e));
        for (var u = [], i = [], o = 0, a = O(n); a > o; o++) {
            var c = n[o], f = r ? r(c, o, n) : c;
            t ? (o && i === f || u.push(c), i = f) : r ? m.contains(i, f) || (i.push(f), u.push(c)) : m.contains(u, c) || u.push(c)
        }
        return u
    }, m.union = function () {
        return m.uniq(S(arguments, !0, !0))
    }, m.intersection = function (n) {
        for (var t = [], r = arguments.length, e = 0, u = O(n); u > e; e++) {
            var i = n[e];
            if (!m.contains(t, i)) {
                for (var o = 1; r > o && m.contains(arguments[o], i); o++);
                o === r && t.push(i)
            }
        }
        return t
    }, m.difference = function (n) {
        var t = S(arguments, !0, !0, 1);
        return m.filter(n, function (n) {
            return !m.contains(t, n)
        })
    }, m.zip = function () {
        return m.unzip(arguments)
    }, m.unzip = function (n) {
        for (var t = n && m.max(n, O).length || 0, r = Array(t), e = 0; t > e; e++)r[e] = m.pluck(n, e);
        return r
    }, m.object = function (n, t) {
        for (var r = {}, e = 0, u = O(n); u > e; e++)t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }, m.findIndex = t(1), m.findLastIndex = t(-1), m.sortedIndex = function (n, t, r, e) {
        r = x(r, e, 1);
        for (var u = r(t), i = 0, o = O(n); o > i;) {
            var a = Math.floor((i + o) / 2);
            r(n[a]) < u ? i = a + 1 : o = a
        }
        return i
    }, m.indexOf = r(1, m.findIndex, m.sortedIndex), m.lastIndexOf = r(-1, m.findLastIndex), m.range = function (n, t, r) {
        null == t && (t = n || 0, n = 0), r = r || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++, n += r)u[i] = n;
        return u
    };
    var E = function (n, t, r, e, u) {
        if (!(e instanceof t))return n.apply(r, u);
        var i = j(n.prototype), o = n.apply(i, u);
        return m.isObject(o) ? o : i
    };
    m.bind = function (n, t) {
        if (g && n.bind === g)return g.apply(n, l.call(arguments, 1));
        if (!m.isFunction(n))throw new TypeError("Bind must be called on a function");
        var r = l.call(arguments, 2), e = function () {
            return E(n, e, t, this, r.concat(l.call(arguments)))
        };
        return e
    }, m.partial = function (n) {
        var t = l.call(arguments, 1), r = function () {
            for (var e = 0, u = t.length, i = Array(u), o = 0; u > o; o++)i[o] = t[o] === m ? arguments[e++] : t[o];
            for (; e < arguments.length;)i.push(arguments[e++]);
            return E(n, r, this, this, i)
        };
        return r
    }, m.bindAll = function (n) {
        var t, r, e = arguments.length;
        if (1 >= e)throw new Error("bindAll must be passed function names");
        for (t = 1; e > t; t++)r = arguments[t], n[r] = m.bind(n[r], n);
        return n
    }, m.memoize = function (n, t) {
        var r = function (e) {
            var u = r.cache, i = "" + (t ? t.apply(this, arguments) : e);
            return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i]
        };
        return r.cache = {}, r
    }, m.delay = function (n, t) {
        var r = l.call(arguments, 2);
        return setTimeout(function () {
            return n.apply(null, r)
        }, t)
    }, m.defer = m.partial(m.delay, m, 1), m.throttle = function (n, t, r) {
        var e, u, i, o = null, a = 0;
        r || (r = {});
        var c = function () {
            a = r.leading === !1 ? 0 : m.now(), o = null, i = n.apply(e, u), o || (e = u = null)
        };
        return function () {
            var f = m.now();
            a || r.leading !== !1 || (a = f);
            var l = t - (f - a);
            return e = this, u = arguments, 0 >= l || l > t ? (o && (clearTimeout(o), o = null), a = f, i = n.apply(e, u), o || (e = u = null)) : o || r.trailing === !1 || (o = setTimeout(c, l)), i
        }
    }, m.debounce = function (n, t, r) {
        var e, u, i, o, a, c = function () {
            var f = m.now() - o;
            t > f && f >= 0 ? e = setTimeout(c, t - f) : (e = null, r || (a = n.apply(i, u), e || (i = u = null)))
        };
        return function () {
            i = this, u = arguments, o = m.now();
            var f = r && !e;
            return e || (e = setTimeout(c, t)), f && (a = n.apply(i, u), i = u = null), a
        }
    }, m.wrap = function (n, t) {
        return m.partial(t, n)
    }, m.negate = function (n) {
        return function () {
            return !n.apply(this, arguments)
        }
    }, m.compose = function () {
        var n = arguments, t = n.length - 1;
        return function () {
            for (var r = t, e = n[t].apply(this, arguments); r--;)e = n[r].call(this, e);
            return e
        }
    }, m.after = function (n, t) {
        return function () {
            return --n < 1 ? t.apply(this, arguments) : void 0
        }
    }, m.before = function (n, t) {
        var r;
        return function () {
            return --n > 0 && (r = t.apply(this, arguments)), 1 >= n && (t = null), r
        }
    }, m.once = m.partial(m.before, 2);
    var M = !{toString: null}.propertyIsEnumerable("toString"),
        I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    m.keys = function (n) {
        if (!m.isObject(n))return [];
        if (v)return v(n);
        var t = [];
        for (var r in n)m.has(n, r) && t.push(r);
        return M && e(n, t), t
    }, m.allKeys = function (n) {
        if (!m.isObject(n))return [];
        var t = [];
        for (var r in n)t.push(r);
        return M && e(n, t), t
    }, m.values = function (n) {
        for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)e[u] = n[t[u]];
        return e
    }, m.mapObject = function (n, t, r) {
        t = x(t, r);
        for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; i > a; a++)e = u[a], o[e] = t(n[e], e, n);
        return o
    }, m.pairs = function (n) {
        for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)e[u] = [t[u], n[t[u]]];
        return e
    }, m.invert = function (n) {
        for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++)t[n[r[e]]] = r[e];
        return t
    }, m.functions = m.methods = function (n) {
        var t = [];
        for (var r in n)m.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, m.extend = _(m.allKeys), m.extendOwn = m.assign = _(m.keys), m.findKey = function (n, t, r) {
        t = x(t, r);
        for (var e, u = m.keys(n), i = 0, o = u.length; o > i; i++)if (e = u[i], t(n[e], e, n))return e
    }, m.pick = function (n, t, r) {
        var e, u, i = {}, o = n;
        if (null == o)return i;
        m.isFunction(t) ? (u = m.allKeys(o), e = b(t, r)) : (u = S(arguments, !1, !1, 1), e = function (n, t, r) {
            return t in r
        }, o = Object(o));
        for (var a = 0, c = u.length; c > a; a++) {
            var f = u[a], l = o[f];
            e(l, f, o) && (i[f] = l)
        }
        return i
    }, m.omit = function (n, t, r) {
        if (m.isFunction(t)) t = m.negate(t); else {
            var e = m.map(S(arguments, !1, !1, 1), String);
            t = function (n, t) {
                return !m.contains(e, t)
            }
        }
        return m.pick(n, t, r)
    }, m.defaults = _(m.allKeys, !0), m.create = function (n, t) {
        var r = j(n);
        return t && m.extendOwn(r, t), r
    }, m.clone = function (n) {
        return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n
    }, m.tap = function (n, t) {
        return t(n), n
    }, m.isMatch = function (n, t) {
        var r = m.keys(t), e = r.length;
        if (null == n)return !e;
        for (var u = Object(n), i = 0; e > i; i++) {
            var o = r[i];
            if (t[o] !== u[o] || !(o in u))return !1
        }
        return !0
    };
    var N = function (n, t, r, e) {
        if (n === t)return 0 !== n || 1 / n === 1 / t;
        if (null == n || null == t)return n === t;
        n instanceof m && (n = n._wrapped), t instanceof m && (t = t._wrapped);
        var u = s.call(n);
        if (u !== s.call(t))return !1;
        switch (u) {
            case"[object RegExp]":
            case"[object String]":
                return "" + n == "" + t;
            case"[object Number]":
                return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
            case"[object Date]":
            case"[object Boolean]":
                return +n === +t
        }
        var i = "[object Array]" === u;
        if (!i) {
            if ("object" != typeof n || "object" != typeof t)return !1;
            var o = n.constructor, a = t.constructor;
            if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t)return !1
        }
        r = r || [], e = e || [];
        for (var c = r.length; c--;)if (r[c] === n)return e[c] === t;
        if (r.push(n), e.push(t), i) {
            if (c = n.length, c !== t.length)return !1;
            for (; c--;)if (!N(n[c], t[c], r, e))return !1
        } else {
            var f, l = m.keys(n);
            if (c = l.length, m.keys(t).length !== c)return !1;
            for (; c--;)if (f = l[c], !m.has(t, f) || !N(n[f], t[f], r, e))return !1
        }
        return r.pop(), e.pop(), !0
    };
    m.isEqual = function (n, t) {
        return N(n, t)
    }, m.isEmpty = function (n) {
        return null == n ? !0 : k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length
    }, m.isElement = function (n) {
        return !(!n || 1 !== n.nodeType)
    }, m.isArray = h || function (n) {
            return "[object Array]" === s.call(n)
        }, m.isObject = function (n) {
        var t = typeof n;
        return "function" === t || "object" === t && !!n
    }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (n) {
        m["is" + n] = function (t) {
            return s.call(t) === "[object " + n + "]"
        }
    }), m.isArguments(arguments) || (m.isArguments = function (n) {
        return m.has(n, "callee")
    }), "function" != typeof/./ && "object" != typeof Int8Array && (m.isFunction = function (n) {
        return "function" == typeof n || !1
    }), m.isFinite = function (n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }, m.isNaN = function (n) {
        return m.isNumber(n) && n !== +n
    }, m.isBoolean = function (n) {
        return n === !0 || n === !1 || "[object Boolean]" === s.call(n)
    }, m.isNull = function (n) {
        return null === n
    }, m.isUndefined = function (n) {
        return n === void 0
    }, m.has = function (n, t) {
        return null != n && p.call(n, t)
    }, m.noConflict = function () {
        return u._ = i, this
    }, m.identity = function (n) {
        return n
    }, m.constant = function (n) {
        return function () {
            return n
        }
    }, m.noop = function () {
    }, m.property = w, m.propertyOf = function (n) {
        return null == n ? function () {
        } : function (t) {
            return n[t]
        }
    }, m.matcher = m.matches = function (n) {
        return n = m.extendOwn({}, n), function (t) {
            return m.isMatch(t, n)
        }
    }, m.times = function (n, t, r) {
        var e = Array(Math.max(0, n));
        t = b(t, r, 1);
        for (var u = 0; n > u; u++)e[u] = t(u);
        return e
    }, m.random = function (n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
    }, m.now = Date.now || function () {
            return (new Date).getTime()
        };
    var B = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"}, T = m.invert(B),
        R = function (n) {
            var t = function (t) {
                return n[t]
            }, r = "(?:" + m.keys(n).join("|") + ")", e = RegExp(r), u = RegExp(r, "g");
            return function (n) {
                return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n
            }
        };
    m.escape = R(B), m.unescape = R(T), m.result = function (n, t, r) {
        var e = null == n ? void 0 : n[t];
        return e === void 0 && (e = r), m.isFunction(e) ? e.call(n) : e
    };
    var q = 0;
    m.uniqueId = function (n) {
        var t = ++q + "";
        return n ? n + t : t
    }, m.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var K = /(.)^/, z = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"},
        D = /\\|'|\r|\n|\u2028|\u2029/g, L = function (n) {
            return "\\" + z[n]
        };
    m.template = function (n, t, r) {
        !t && r && (t = r), t = m.defaults({}, t, m.templateSettings);
        var e = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g"),
            u = 0, i = "__p+='";
        n.replace(e, function (t, r, e, o, a) {
            return i += n.slice(u, a).replace(D, L), u = a + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), t
        }), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var o = new Function(t.variable || "obj", "_", i)
        } catch (a) {
            throw a.source = i, a
        }
        var c = function (n) {
            return o.call(this, n, m)
        }, f = t.variable || "obj";
        return c.source = "function(" + f + "){\n" + i + "}", c
    }, m.chain = function (n) {
        var t = m(n);
        return t._chain = !0, t
    };
    var P = function (n, t) {
        return n._chain ? m(t).chain() : t
    };
    m.mixin = function (n) {
        m.each(m.functions(n), function (t) {
            var r = m[t] = n[t];
            m.prototype[t] = function () {
                var n = [this._wrapped];
                return f.apply(n, arguments), P(this, r.apply(m, n))
            }
        })
    }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (n) {
        var t = o[n];
        m.prototype[n] = function () {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0], P(this, r)
        }
    }), m.each(["concat", "join", "slice"], function (n) {
        var t = o[n];
        m.prototype[n] = function () {
            return P(this, t.apply(this._wrapped, arguments))
        }
    }), m.prototype.value = function () {
        return this._wrapped
    }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function () {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function () {
        return m
    })
}).call(this);
//# sourceMappingURL=underscore-min.map

//#############################  Class ############################################

/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype

var Class = (function () {

    //initializing是为了解决我们之前说的继承导致原型有多余参数的问题。当我们直接将父类的实例赋值给子类原型时。是会调用一次父类的构造函数的。所以这边会把真正的构造流程放到init函数里面，通过initializing来表示当前是不是处于构造原型阶段，为true的话就不会调用init。
    //fnTest用来匹配代码里面有没有使用super关键字。对于一些浏览器`function(){xyz;}`会生成个字符串，并且会把里面的代码弄出来，有的浏览器就不会。`/xyz/.test(function(){xyz;})`为true代表浏览器支持看到函数的内部代码，所以用`/\b_super\b/`来匹配。如果不行，就不管三七二十一。所有的函数都算有super关键字，于是就是个必定匹配的正则。
    var initializing = false,
        fnTest = /xyz/.test(function () {
            xyz;
        }) ? /\b_super\b/ : /.*/;

    // The base Class implementation (does nothing)
    // 超级父类
    this.Class = function () {
    };

    // Create a new Class that inherits from this class
    // 生成一个类，这个类会具有extend方法用于继续继承下去
    Class.extend = function (prop) {
        //保留当前类，一般是父类的原型
        //this指向父类。初次时指向Class超级父类
        var _super = this.prototype;

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
        //开关 用来使原型赋值时不调用真正的构成流程
        initializing = true;
        var prototype = new this();
        initializing = false;

        // Copy the properties over onto the new prototype
        for (var name in prop) {
            // Check if we're overwriting an existing function
            //这边其实就是很简单的将prop的属性混入到子类的原型上。如果是函数我们就要做一些特殊处理
            prototype[name] = typeof prop[name] == "function" &&
            typeof _super[name] == "function" && fnTest.test(prop[name]) ?
                (function (name, fn) {
                    //通过闭包，返回一个新的操作函数.在外面包一层，这样我们可以做些额外的处理
                    return function () {
                        var tmp = this._super;

                        // Add a new ._super() method that is the same method
                        // but on the super-class
                        // 调用一个函数时，会给this注入一个_super方法用来调用父类的同名方法
                        this._super = _super[name];

                        // The method only need to be bound temporarily, so we
                        // remove it when we're done executing
                        //因为上面的赋值，是的这边的fn里面可以通过_super调用到父类同名方法
                        var ret = fn.apply(this, arguments);
                        //离开时 保存现场环境，恢复值。
                        this._super = tmp;

                        return ret;
                    };
                })(name, prop[name]) :
                prop[name];
        }

        // 这边是返回的类，其实就是我们返回的子类
        function Class() {
            // All construction is actually done in the init method
            if (!initializing && this.init)
                this.init.apply(this, arguments);
        }

        // 赋值原型链，完成继承
        Class.prototype = prototype;

        // 改变constructor引用
        Class.prototype.constructor = Class;

        // 为子类也添加extend方法
        Class.extend = arguments.callee;

        return Class;

    }

    return Class;

})()

//组件框架
var Base = (function () {

    var _indexOf = function (array, key) {
        if (array === null) return -1
        var i = 0,
            length = array.length
        for (; i < length; i++)
            if (array[i] === item) return i
        return -1
    }
    //事件处理
    var Event = Class.extend({
        //添加监听
        on: function (key, listener) {
            //this.__events存储所有的处理函数
            if (!this.__events) {
                this.__events = {}
            }
            if (!this.__events[key]) {
                this.__events[key] = []
            }


            if (_indexOf(this.__events, listener) === -1 && typeof listener === 'function') {
                this.__events[key].push(listener)
            }

            return this
        },
        //触发一个事件，也就是通知
        fire: function (key) {

            if (!this.__events || !this.__events[key]) return

            //Array.prototype.slice.call(arguments)能将具有length属性的对象转成数组
            // args 作用为 传递入 以事件为名的方法中
            var args = Array.prototype.slice.call(arguments, 1) || []
            var listeners = this.__events[key] //obj
            var i = 0
            var l = listeners.length //集合中的 方法数量

            for (i; i < l; i++) {
                listeners[i].apply(this, args)
            }

            return this
        },
        //取消监听
        off: function (key, listener) {

            if (!key && !listener) {
                this.__events = {}
            }
            //不传监听函数，就去掉当前key下面的所有的监听函数
            if (key && !listener) {
                delete this.__events[key]
            }

            if (key && listener) {
                var listeners = this.__events[key]
                var index = _indexOf(listeners, listener)

                    (index > -1) && listeners.splice(index, 1)
            }

            return this;
        }
    })

    var Base = Event.extend({
        defaults: {},
        item: {},
        init: function (config) {
            //自动保存配置项
            this._config = _.extend(this.defaults, config);
            this.$autoWatch();
            this.initialize();
        },
        initialize: function () {

        },
        get: function (key) {
            return this._config[key]
        },
        set: function (key, value) {
            this._config[key] = value;
        },
        bind: function () {

        },
        render: function () {

        },
        destroy: function () {

        },
        $autoWatch: function () {
            var Datas = this._config;
            var num = 1;
            var self = this

            _.each(Datas, function (item, index) {
                this.item = item;
                var Fn = {};
                var tempArr = [];
                var fnString = (_.template([
                    "var Arr = {",
                    '<%= index%> : this.item,',
                    '_<%= index%> : this.item',
                    '};return Arr'
                ].join(" ")))({
                    index: index
                });
                var WatchFnString = (_.template([
                    'var _this = this;',
                    'Object.defineProperty(this,"<%= index%>",{',
                    'set:function(Val){',
                    'if(Val != this._<%= index%>){',
                    'this._<%= index%> = Val;',
                    '_this.fire("change:<%= index%>",Val);',
                    '}else{return}},',
                    'get:function(){',
                    'return this._<%= index%>',
                    '}})'
                ].join(" ")))({
                    index: index
                })
                //执行监视过程
                tempArr = new Function(fnString).bind(this)();
                _.extend(this, tempArr);
                (new Function(WatchFnString)).apply(this);
                num++;
            }.bind(this))
        }
    })

    return Base

})()
