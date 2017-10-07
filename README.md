# generator-shusc


## 插件 

 ##1.布局插件
  
  #### 1.1   masonry
  介绍:流式布局 [masonry](https://masonry.desandro.com/) -- 用于瀑布流
  
  cdn: https://cdn.bootcss.com/masonry/4.2.0/masonry.pkgd.min.js
  
  说明:https://github.com/desandro/masonry/blob/master/README.md
  
  ```
  require(['masonry'],function(Masonry){
        new Masonry(".flowBox",{ 
           coloumnWidth:200, //宽度
           itemSelector:".flowBox-item", //子类
           transitionDuration: '0.8s' // 动画
       })
   })    
   ```
   #### 1.2   layoutFlow
   介绍:流式布局--自用瀑布流 UMD
   说明:依赖 jquery,lodash
   ```
    require(['layoutFlow'],function(){
         //cols 列数
         //interval 间隔 px
        $(".flowBox").flowBox(5,20)
    })
   ```   
   
 ##2.AMD加载器
 
 #### 2.1 ESL
 介绍:AMD加载器 [ESL](https://github.com/ecomfe/esl) -- 用于AMD模块加载   
 
 CDN: http://s1.bdstatic.com/r/www/cache/efe/esl/2-1-6/esl.js
 
 说明: https://github.com/ecomfe/esl/blob/master/doc/config.md
 
 代码：同requirejs
 
 
  ##3.格式化
  
  #### 3.1 Cleave.js
  介绍:input格式化 [Cleave](http://nosir.github.io/cleave.js/) -- 用于input输入框的格式化 
  
  CDN: https://cdn.bootcss.com/cleave.js/1.0.1/cleave.min.js
  
  说明: https://github.com/nosir/cleave.js/blob/master/README.md
  
  代码：
  
```
    require(['cleave'],function (Cleave) {
        var cleave = new Cleave("#test",{
            phone:true,
            phoneRegionCode: 'CN'
        })
    })
```

  ##4.相册图片
  
  #### 4.1 SmartPhoto.js
  介绍:响应式相册 [SmartPhoto](https://appleple.github.io/SmartPhoto/) -- 用于pc移动端的图片相册
  
  CDN: https://unpkg.com/smartphoto@0.7.6/js/smartphoto.min.js  https://unpkg.com/smartphoto@0.7.6/css/smartphoto.min.css
  
  说明: https://appleple.github.io/SmartPhoto/doc.html
  
  代码：
  
```
    require(['smartPhoto'],function (smartPhoto) {
        new smartPhoto(".js-smartphoto");
    })
```

  #### 4.2 PhotoSwipe
 
  介绍:响应式相册 [PhotoSwipe](http://photoswipe.com/) -- 用于pc移动端的图片相册
    
  CDN: http://lib.baomitu.com/photoswipe/4.1.2/photoswipe.min.js <br/>
       http://lib.baomitu.com/photoswipe/4.1.2/photoswipe-ui-default.js <br/>
       http://lib.baomitu.com/photoswipe/4.1.2/default-skin/default-skin.min.css <br/>
       http://lib.baomitu.com/photoswipe/4.1.2/photoswipe.min.css
       
  说明: http://photoswipe.com/documentation/getting-started.html
  
```
    require([ 
            'path/to/photoswipe.js', 
            'path/to/photoswipe-ui-default.js' 
        ], function( PhotoSwipe, PhotoSwipeUI_Default ) {
    
        //      var gallery = new PhotoSwipe( someElement, PhotoSwipeUI_Default ...
        //      gallery.init() 
        //      ...
    });
```