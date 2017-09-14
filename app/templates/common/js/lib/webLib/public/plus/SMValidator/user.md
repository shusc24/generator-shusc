使用介绍
    1.文档地址：https://wldragon.github.io/SMValidator/tutor/tutor1.html
    2.实例项目
        <html>
              <form action="" class="loginForm" id="loginForm">

                                <div class="loginForm-warpper">

                                    <ul class="loginForm-list">
                                        <li class="loginForm-inputBox container">
                                            <div class="inputBox-icon grid-m-2">
                                                <span class="icon fa-stack fa-lg" style="margin-top: 0.05rem">
                                                  <i class="fa fa-circle fa-stack-2x"></i>
                                                  <i class="fa fa-mobile fa-stack-1x fa-inverse"></i>
                                                </span>
                                            </div>
                                            <input name="phone" placeholder="请输入手机号码" class="inputBox-input grid-m-10" />
                                        </li>
                                        <li class="loginForm-inputBox container MTR-30">
                                            <div class="inputBox-icon grid-m-2">
                                                <span class="icon fa-stack fa-lg" style="margin-top: 0.05rem">
                                                  <i class="fa fa-circle fa-stack-2x"></i>
                                                  <i class="fa fa-lock fa-stack-1x fa-inverse"></i>
                                                </span>
                                            </div>
                                            <input type="password" name="password" placeholder="请输入正确的密码" class="inputBox-input grid-m-10" />
                                        </li>

                                        <li class="loginForm-inputBox MTR-60">
                                            <input type="submit" class="inputBox-submitBtn" value="登陆">
                                            <div class="inputBox-submitBtn-href">
                                                <a href="javascript:">
                                                    忘记密码
                                                </a>
                                            </div>
                                        </li>
                                    </ul>

                                </div>

                            </form>
        <html>
        <script>
                require(['SMV','layer'],function(SMValidator,Layer){
                    var Error = "";
                    new SMValidator('form',{
                        fields:{
                            phone: {
                                required: "必要信息",
                                failHtml: false, //禁用failHtml
                                rule: 'required|disblur|onlyPhone',
                                fail: function(messages) {
                                    Error = messages
                                },
                                failStyle: {borderBottom:'1px solid red'},
                                pass: function() {
                                    Error = null
                                }
                            }
                        },
                        submit: function(valid, form) {
                            if(valid) {
                                Layer.msg("提交成功");
        //                        form.submit();
                            }else{
                                Layer.msg(Error);
                            }
                        },
                        rules:{
                            onlyPhone:[/^1[34578]\d{9}$/,"请输入手机号码"]
                        }
                    })
                })
            </script>