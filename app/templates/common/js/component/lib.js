import $ from "jquery";
import Vue from "vue";
import backTop from "iview/src/components/back-top/back-top.vue"
import pagination from "iview/src/components/page"
import smartPhoto from "smartphoto"
import "smartphoto/css/smartphoto.min.css"
import spotBox from "./spotBox.vue"
import vuePlayer from "./dplayer.vue"
import _ from  "lodash";
import Swiper from "swiper";
import "swiper/src/idangerous.swiper.css"
import dplayer from "dplayer";
import "dplayer/dist/DPlayer.min.css"

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
amdDefine("backtop",function () {
    return backTop
});
amdDefine("smartphoto",function () {
    return smartPhoto
});

amdDefine("spotBox",function () {
    return spotBox
});

amdDefine("lodash",function () {
    return _
});

amdDefine("swiper2",function () {
    return Swiper;
});

amdDefine("pagination",function () {
    return pagination;
});

amdDefine("dplayer",function () {
    return dplayer;
});

amdDefine("vuePlayer",function () {
    return vuePlayer
});