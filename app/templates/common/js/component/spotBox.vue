<template>
    <div class="inforBox-nav">
        <div v-show="!first" class="inforBox-nav-list clearfix" ref="ul">
            <div class="inforBox-nav-line">

            </div>
            <ul>
                <li class="inforBox-nav-item"  :class="{'inforBox-nav-item_active':index === navIndex}" v-for="(item,index) in list" @click="selectItem(index)">
                   {{item.text}}
                </li>
            </ul>
        </div>

        <div class="inforBox-swiper" v-if="state">

            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in list[navIndex].img">
                    <img :src="item.path" alt="">
                </div>
            </div>

        </div>

        <div v-show="!state" class="inforBox-loading">
            <spin size="large">

            </spin>
        </div>

    </div>
</template>
<script>
    import _ from "lodash";
    import $ from "jquery";
    import Swiper from "swiper";
    import spin from "iview/src/components/spin"

    export default {
        props: {
            path:{
                type:String,
                default:""
            }
        },
        data() {
            return {
                state:false,
                navIndex:0,
                first:true,
                list:[{img:""}]
            }
        },
        methods: {
            selectItem(index){
                this.state = false;
                this.navIndex = index;
                _.delay(()=>{
                    this.state = true;
                    _.delay(()=>{
                        this.initSwiper();
                    },0)
                },500)
            },
            calculateWidth(){
                return this.list.length * 95 - 40;
            },
            getList(){
                $.get(this.path).done((Rs)=>{
                    this.list = Rs
                })
            },
            initSwiper(){
                this.swiper = null;
                _.delay(()=>{
                    this.swiper = new Swiper(".inforBox-swiper",{
                        slidesPerView : 4,
                        loop:true,
                        speed:800,
                        autoplay:1500
                    })
                },0);
            }
        },
        components:{
            spin
        },
        mounted() {
            _.delay(()=>{
                this.$refs.ul.style.width = this.calculateWidth() + 'px';
                this.state = true;
                this.first = false;
                this.initSwiper();
            },1000)
        },
        created() {
            this.getList();
        }
    }
</script>

<style lang="less">

</style>