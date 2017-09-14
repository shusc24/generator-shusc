// es5 兼容全局模式
/*    1. 用途： 用于构建selector 组件
 *
 *    2.实例化 ：
 *
 *    var demo2 = new selector("demo2",MODLEVAR.selectdata)
 *
 *    3.参数
 *    id,data
 *
 *    3.1 id为 识别id   3.2 data 为对象数据结构参考 4 外部数据结构
 *
 *    4.JSelector 外部数据结构
 *
 *    selectdata:{
 *        lidata:['shusc','shusc24','shusc234']
 *    }
 *
 *
 *
 * */

(function (factory) {

    if (typeof window.define === 'function') {
        if (window.define.amd) {
            // AMD模式
            window.define('selector', ["jquery"], factory);

        } else {
            // 全局模式
            factory(window.jQuery);
        }
     }
})(function ($) {

      function JSelector (id,data){
           this.data = data;
           this.id = id;

          this._initElements();
          this._initEvents();
      }
      JSelector.prototype = {
          constructor: JSelector,

          /**
           * 初始化所有元素
           */
          _initElements:function(){
              var lidata = this.data.lidata;

              this._selectIcon = $("<i class='JSelector-icon' />");
              this._selectBody = $("<span class='JSelector-checkspan'>" + this.data.text + "</span>");
              this._selectul = $("<ul class='JSelector-checkul'></ul>");

              // 构建菜单栏
              for(var i = 0;i < lidata.length;i++){
                  var litext = lidata[i];
                  var templi = $("<li class='JSelector-checkli'>" + litext + "</li>");

                  this._selectul.append(templi);
              }


              //组装
              $("#" + this.id).addClass("JSelector").append(this._selectIcon).append(this._selectBody).append(this._selectul);
          },

          /**
           * 初始化事件
           */

          _initEvents:function(){
              var ul = this._selectul;
              var li = $(ul.find("li"));
              var body = this._selectBody;

              this._selectBody.on("click",function(){
                    if(ul.is(":hidden")){
                        ul.slideDown("400",function(){
                            li.on("click",function(){
                                var selectLi = $(this).text();
                                body.text(selectLi);
                                ul.slideUp(400);
                            })
                        });
                        ul.mouseleave(function () {
                            ul.slideUp(400)
                        })
                    }else{
                        ul.slideUp(400)
                    }
              })
          }

      };

    return JSelector

});