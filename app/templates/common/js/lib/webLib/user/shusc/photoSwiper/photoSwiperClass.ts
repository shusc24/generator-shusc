define((require)=>{
    const PhotoSwipe = require('photoSwiper');
    const PhotoSwipeUI_Default = require('photoSwiperUi');
    const $ = require('jquery');
    const Html = `
        <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
        
            <!-- Background of PhotoSwipe.
                 It's a separate element, as animating opacity is faster than rgba(). -->
            <div class="pswp__bg"></div>
        
            <!-- Slides wrapper with overflow:hidden. -->
            <div class="pswp__scroll-wrap">
        
                <!-- Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. -->
                <div class="pswp__container">
                    <!-- don't modify these 3 pswp__item elements, data is added later on -->
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                </div>
        
                <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
                <div class="pswp__ui pswp__ui--hidden">
        
                    <div class="pswp__top-bar">
        
                        <!--  Controls are self-explanatory. Order can be changed. -->
        
                        <div class="pswp__counter"></div>
        
                        <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
        
                        <button class="pswp__button pswp__button--share" title="Share"></button>
        
                        <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
        
                        <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
        
                        <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->
                        <!-- element will get class pswp__preloader--active when preloader is running -->
                        <div class="pswp__preloader">
                            <div class="pswp__preloader__icn">
                                <div class="pswp__preloader__cut">
                                    <div class="pswp__preloader__donut"></div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                        <div class="pswp__share-tooltip"></div>
                    </div>
        
                    <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                    </button>
        
                    <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                    </button>
        
                    <div class="pswp__caption">
                        <div class="pswp__caption__center"></div>
                    </div>
        
                </div>
        
            </div>
        
        </div>
    `;
    return function (items = [{src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
            w: 964,
            h: 1024
        },
        {
            src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
            w: 1024,
            h: 683
        }
    ],options = { history: false,focus: false,showAnimationDuration: 0,hideAnimationDuration: 0}) {
        let pswpElement = $(Html).appendTo("body")[0];
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        return gallery
    }
});