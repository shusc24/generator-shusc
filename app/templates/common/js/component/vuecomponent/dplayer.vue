<template>
    <div class="c-dplayer" ref="player"></div>
</template>
<script>
    import dplayer from "dplayer";
    export default {
        props: {
            url:{
                type:String,
                default:"",
                required: true,
            },
            pic:{
               type:String,
               default:"",
                required: true,
            },
            danmaku:{
                type:Object
            },
            screenshot:{
                type:Boolean,
                default:true
            }
        },
        data() {
            return {}
        },
        methods: {},
        components: {},
        mounted() {
            let {url,pic,danmaku,screenshot} = this;
            this.dplayer = new dplayer({
                element:this.$refs.player,
                screenshot,
                video:{
                    url,
                    pic,
                },
                danmaku,
            })
        },
        created() {

        },
    }
</script>

<style lang="less" scoped="">
    .c-dplayer{
        width: 100%;
        height: 100%;
    }
</style>