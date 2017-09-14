popper
1.github地址：

2.简单实例
//初始化Popper
    ModObj.Tip = new Popper(
        DOM.Item.get(0),    //目标Ele
        tip,                //贴的Ele
        {
            placement:'bottom' //popper 设置
        }
    )