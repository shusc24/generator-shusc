/**
 * Created by shusc on 2016/10/8.
 *
 * HTML 结构demo
 <!--c-photoUpload 开始-->
 <div class="c-photoUpload" id="photoUpload01">

 <div class="c-photoUpload__content J-content"style="background-image: url(img/page/usercenter/back.png);">

 </div>

 <div class="c-photoUpload__title J-tilte">
 证件正面附件
 </div>

 <input class="J-input" style="visibility: hidden"  type="file"   />

 </div>
 <!--c-photoUpload 结束-->
 *
 *   js 初始化
 *
 *	 $("#photoUpload01").imgUpload({
 * 			MaxSize:200
 * 	  });
 *
 *
 */

define(["jquery"], function($) {
    $.fn.imgUpload = function(Options) {
        var Ele = $(this);
        var Input = Ele.find(".J-input");
        var Content = Ele.find(".J-content");
        // Event
        Ele.on("click", ".J-content",() =>{
            Input.trigger("click");
        });

        Input.on("change", ()=>{
            GetData();
        });

        Ele.on("uploadEnd",(e,img)=>{
            if(!$.isFunction(Options.completed)) return;
            Options.completed(img);
        });

        let GetData = ()=>{
            // Get a reference to the fileList
            let files = !!Input[0].files ? Input[0].files : [];

            // If no files were selected, or no FileReader support, return
            if(!files.length || !FileReader) return;

            // Only proceed if the selected file is an image
            if(/^image/.test(files[0].type)) {

                // Create a new instance of the FileReader
                let reader = new FileReader();

                // Read the local file as a DataURL
                reader.readAsDataURL(files[0]);

                // When loaded, set image data as background of div
                reader.onloadend = function() {
                    let size = files[0].size/1024;
                    if(size <= Options.MaxSize){
                        Content.css({
                            "backgroundImage": "url(" + this.result + ")"
                        });
                        Ele.trigger("uploadEnd",this.result)
                    }else{
                        alert("超出最大上传值")
                    }
                }

                reader.onprogress = (event)=>{
                    if(event.lengthComputable){
                        console.log(event.loaded/event.total);
                    }
                }
            }
        }
    }
});
