# generator-shusc


## 插件

 1.布局插件
 
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