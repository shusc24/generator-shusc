define(function (require) {
    var PhotoSwipe = require('photoSwiper');
    var PhotoSwipeUI_Default = require('photoSwiperUi');
    var $ = require('jquery');
    var Html = "\n        <div class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n        \n            <!-- Background of PhotoSwipe.\n                 It's a separate element, as animating opacity is faster than rgba(). -->\n            <div class=\"pswp__bg\"></div>\n        \n            <!-- Slides wrapper with overflow:hidden. -->\n            <div class=\"pswp__scroll-wrap\">\n        \n                <!-- Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. -->\n                <div class=\"pswp__container\">\n                    <!-- don't modify these 3 pswp__item elements, data is added later on -->\n                    <div class=\"pswp__item\"></div>\n                    <div class=\"pswp__item\"></div>\n                    <div class=\"pswp__item\"></div>\n                </div>\n        \n                <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->\n                <div class=\"pswp__ui pswp__ui--hidden\">\n        \n                    <div class=\"pswp__top-bar\">\n        \n                        <!--  Controls are self-explanatory. Order can be changed. -->\n        \n                        <div class=\"pswp__counter\"></div>\n        \n                        <button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button>\n        \n                        <button class=\"pswp__button pswp__button--share\" title=\"Share\"></button>\n        \n                        <button class=\"pswp__button pswp__button--fs\" title=\"Toggle fullscreen\"></button>\n        \n                        <button class=\"pswp__button pswp__button--zoom\" title=\"Zoom in/out\"></button>\n        \n                        <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->\n                        <!-- element will get class pswp__preloader--active when preloader is running -->\n                        <div class=\"pswp__preloader\">\n                            <div class=\"pswp__preloader__icn\">\n                                <div class=\"pswp__preloader__cut\">\n                                    <div class=\"pswp__preloader__donut\"></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n        \n                    <div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\">\n                        <div class=\"pswp__share-tooltip\"></div>\n                    </div>\n        \n                    <button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\">\n                    </button>\n        \n                    <button class=\"pswp__button pswp__button--arrow--right\" title=\"Next (arrow right)\">\n                    </button>\n        \n                    <div class=\"pswp__caption\">\n                        <div class=\"pswp__caption__center\"></div>\n                    </div>\n        \n                </div>\n        \n            </div>\n        \n        </div>\n    ";
    return function (items, options) {
        if (items === void 0) { items = [{ src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
                w: 964,
                h: 1024
            },
            {
                src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
                w: 1024,
                h: 683
            }
        ]; }
        if (options === void 0) { options = { history: false, focus: false, showAnimationDuration: 0, hideAnimationDuration: 0 }; }
        var pswpElement = $(Html).appendTo("body")[0];
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        return gallery;
    };
});
//# sourceMappingURL=photoSwiperClass.js.map