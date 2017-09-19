import $ from "jquery";
import Vue from "vue";
import _ from  "lodash";

amdDefine("vue",function () {
    Vue.directive('omit',{
        inserted:function (el,binding) {
            el.innerText = _.truncate(el.innerText,{
                length:binding.value || 280
            })
        }
    });
    return Vue;
});

amdDefine('jquery',function () {
    window.$ = window.jQuery = $;
    return $
});

amdDefine("lodash",function () {
    return _
});



