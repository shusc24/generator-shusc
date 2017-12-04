# generator-shusc
### 介绍
自用的yeoman的generator 用于快速初始化 项目

目前模板有: tmt-workflow,简单pc,h5模板,标准pc,h5模板.
### 安装
1.cnpm generator-shusc -g
2.全局安装 yeoman cnpm i yo -g
3.命令行 yo shusc 选择模板 安装依赖 (标准模版依赖tmt-workflow 工作流)
4.标准模版使用 AMD + webpack 加载方式 使用npm run dev 进行dev 操作
### require.config文件中的插件
 ###1.布局插件
  
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
   
 ###2.AMD加载器
 
 #### 2.1 ESL
 介绍:AMD加载器 [ESL](https://github.com/ecomfe/esl) -- 用于AMD模块加载   
 
 CDN: http://s1.bdstatic.com/r/www/cache/efe/esl/2-1-6/esl.js
 
 说明: https://github.com/ecomfe/esl/blob/master/doc/config.md
 
 代码：同requirejs
 
 
  ###3.格式化
  
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

  ###4.相册图片
  
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
       
  说明: http://photoswipe.com/documentation/getting-started.html  需要二次封装 封装好的类在 photoSwiperClass
  
```
   require(['photoSwiperClass'], function (photoSwiperClass) {
       // 传入参数items 和 options 具体看文档
      var photos =  photoSwiperClass([{src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
          w: 964,
          h: 1024
      }]);
      photos.init();
   })
```

  ###5.弹出层
  
  #### 5.1 layer
  介绍:弹出层插件 [Layer](https://github.com/sentsin/layer/) -- 用于弹出层
  
  CDN: https://cdn.bootcss.com/layer/3.0.3/layer.min.js <br>
       https://cdn.bootcss.com/layer/3.0.3/skin/default/layer.min.css 
        
  
  说明: http://layer.layui.com/
  
  代码：
  
```
    require(['layer'],function (layer) {
        layer.msg('的确很重要', {icon: 1});
    })
```

###6. canvas 绘图插件

介绍: canvas 类似画板插件 [Signature Pad](https://github.com/szimek/signature_pad) -- 可用于签名

CDN:暂无

 说明:https://github.com/szimek/signature_pad
 
 在线实例:https://jsfiddle.net/szimek/d6a78gwq/
 
 代码: 
 
 ```
 require(['signature_pad']，function(signaturePad){
 
    var canvas = document.querySelector("canvas");
    
    var signaturePad = new SignaturePad(canvas);
    
    // Returns signature image as data URL (see https://mdn.io/todataurl for the list of possible parameters)
    signaturePad.toDataURL(); // save image as PNG
    signaturePad.toDataURL("image/jpeg"); // save image as JPEG
    signaturePad.toDataURL("image/svg+xml"); // save image as SVG
    
    // Draws signature image from data URL.
    // NOTE: This method does not populate internal data structure that represents drawn signature. Thus, after using #fromDataURL, #toData won't work properly.
    signaturePad.fromDataURL("data:image/png;base64,iVBORw0K...");
    
    // Returns signature image as an array of point groups
    const data = signaturePad.toData();
    
    // Draws signature image from an array of point groups
    signaturePad.fromData(data);
    
    // Clears the canvas
    signaturePad.clear();
    
    // Returns true if canvas is empty, otherwise returns false
    signaturePad.isEmpty();
    
    // Unbinds all event handlers
    signaturePad.off();
    
    // Rebinds all event handlers
    signaturePad.on();
 
 })
 ```
 
 ###6. canvas 截屏插件
 
 介绍: canvas 截屏插件 [html2canvas](https://github.com/niklasvh/html2canvas) -- 可用于部分区域截图
 
  CDN:https://lib.baomitu.com/html2canvas/0.5.0-beta4/html2canvas.min
 
  说明:https://github.com/niklasvh/html2canvas
  
  代码: 
  
  ```
  require(['jquery','html2canvas'],function($,html2canvas){
      function convertCanvasToImage(canvas) {
          //新Image对象，可以理解为DOM
          var image = new Image();
          // canvas.toDataURL 返回的是一串Base64编码的URL
          // 指定格式 PNG
          image.src = canvas.toDataURL("image/png");
          return image;
      }

      html2canvas(document.body,{
        onrendered:function (canvas) {
            $("body").append(convertCanvasToImage(canvas));
          }
    })
})
  ```

  7.页面加载loading效果 nprogress

  介绍:仿youtube的页面加载效果的loadingbar   nprogress

  CDN:https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.js
      https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css
  代码
   ```
     require(['nprogress','jquery'],function (NProgress,$) {
        NProgress.start();
        $(function () {
            NProgress.done();
            $("body").on("click","a",function () {
                NProgress.start();
                NProgress.set(0.4);
            })
        })
    })
   ```