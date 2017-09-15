declare let define:any,exports:any,module:any,require:any,$:any,_:any;
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery','lodash'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS之类的
        module.exports = factory(require('jquery'),require('lodash'));
    } else {
        // 浏览器全局变量(root 即 window)
        root.returnExports = factory(root.jQuery,root._);
    }
}(this, function ($,_) {
    $.fn.extend({
        /***
         *
         * @param cols 列数
         * @param interval 间隔 px
         * $(".flowBox").flowBox(5,20);
         * */
        flowBox:function(cols = 3,interval = 10){
            let Ele = $(this), items = _.chunk($(this).children(), cols);
            let contentHightArr = _.fill(Array(cols), 0);
            function getTop(lastItem){
                if(!lastItem)return;
                return {
                    height:lastItem.height(),
                    top:lastItem.position().top
                }
            }
            function getLeft(leftItem){
                if(!leftItem)return;
                return {
                    left:leftItem.position().left,
                    width:leftItem.width()
                }
            }
            _.each(items,function(cols,i){
                _.each(cols,function(item,j){
                    var lastPosition = getTop(i-1>=0?$(items[i-1][j]):null);
                    var leftPosition = getLeft(j-1>=0?$(items[i][j-1]):null);
                    if(lastPosition && leftPosition){
                        item.style.top = lastPosition.top + lastPosition.height + interval + 'px';
                        item.style.left = leftPosition.left + leftPosition.width + interval + "px"
                    }else if( lastPosition && !leftPosition){
                        item.style.top = lastPosition.top + lastPosition.height + interval + 'px';
                        item.style.left = 0 + "px"
                    }else if(!lastPosition && leftPosition){
                        item.style.top =  0 + 'px';
                        item.style.left = leftPosition.left + leftPosition.width + interval + "px"
                    }
                    contentHightArr[j] = parseInt(contentHightArr[j]) + $(item).height() + interval
                })
            });
            Ele.height(contentHightArr.sort().reverse()[0] + "px")
        }
    });
}));
