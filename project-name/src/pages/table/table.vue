<template>
    <div>
        <nav>
            <div class="nav-row">
                <div class="nav-content">
                    <div class="nav-let-bar">
                        <img class="photo-icon" src="../../images/001.jpg" alt="">
                    </div>
                    <div class="nav-title">
                        测试服务员
                    </div>
                </div>
            </div>
        </nav>
        <div class="content-warp">
            <div class="table-nav">
                <van-tabs :swipe-threshold='4' :line-width="30">
                    <van-tab v-for="index in 8" :title="'区域' + index" :key="index"></van-tab>
                </van-tabs>
            </div>
            <desk-list></desk-list>
        </div>
        
    </div>
</template>
<script>
import deskList from '@/components/deskList/list';
export default {
    data(){
        return {
            name: '房台',
            fixed: true
        }
    },
    components:{
        deskList
    },
}
</script>
<style lang="less">
    .text-center{
        text-align: center;
    }
    .nav-row{
        height: 46px;
        position: fixed;
        top: 0;
        width: 100%;
        background: #0097ff;
        z-index: 100;
        line-height: 46px;
        color: #fff;
        .nav-content{
            position: relative;
        }
        .nav-let-bar{
            position: absolute;
            left: 0;
            margin-left: 10px;
            padding-top: 3px;
        }
        .nav-title{
            max-width: 60%;
            margin: auto;
            .text-center;
            font-size: 14px;
        }
        .photo-icon{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
    .content-warp{
        padding-top: 92px;
        .table-nav{
            position: fixed;
            top: 46px;
            width: 100%;
            z-index: 99;
        }
        
    }
</style>


