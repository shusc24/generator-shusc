/**
 * Created by shusc on 2017/2/7.
 */
define([],function () {
    return {
        onlyPhone:[/^1[34578]\d{9}$/,"请输入手机号码"],
        isPassword:function(val){
            if(/\s/.test(val)){
                return "不能包含空格"
            }
            if(val.trim().length < 6){
                return "密码长度不够"
            }
            if(/^([\u4E00-\u9FA5]+，?)+$/.test(val)){
                return "不能包含中文"
            }
            return true
        },
        notIsnull:function(val){
            if(val.trim().length === 0){
                return "不能为空格"
            }
            return true
        },
        positiveNumber:function(val){
            if(val>0){
                return true
            }else{
                return "不能小于0"
            }
        },
        limitPrice:function(val){
            if(val>500){
                return true
            }else{
                return "不能小于500"
            }
        },
        height:function(val){
            if(val < 100 || val > 250){
                return "超出"
            }
            return true
        },
        isIdcard:function(val){
            var Reg15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
            var Reg18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
            if(val.length === 15 && Reg15.test(val)){
                return true
            }
            if(val.length === 18 && Reg18.test(val)){
                return true
            }
            return "号码错误"
        },
        notBlank:function (val) {
            if(/\s/.test(val)){
                return "不能包含空格"
            }
        }
    }
});