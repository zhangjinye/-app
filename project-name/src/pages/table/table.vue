<template>
    <div>
        <!-- 导航 -->
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
        <!-- 房台信息 -->
        <div class="content-warp" ref="deskContent">
            <div class="table-nav">
                <van-tabs :swipe-threshold='4' :line-width="30">
                    <van-tab v-for="index in 8" :title="'区域' + index" :key="index"></van-tab>
                </van-tabs>
            </div>
            <desk-list @onPersonNumber="handClickPersonNumber"></desk-list>
        </div>
        
        <!-- 输入人数 -->
        <van-dialog
        v-model="showNumberdialog"
        show-cancel-button
        :before-close="beforeClose"
        >
        <van-row class="dialog-title">
            就餐人数
        </van-row>
        <van-field
            v-model="user_number"
            label="就餐人数"
            type="number"
            placeholder="请输入就餐人数"
        />
        </van-dialog>

    </div>
</template>
<script>
import deskList from '@/components/deskList/list';
import {Toast} from 'vant';
export default {
    data(){
        return {
            name: '房台',
            fixed: true,
            showNumberdialog: false,
            user_number: ""
        }
    },
    components:{
        deskList
    },
    methods:{
        //输入就餐人数
        handClickPersonNumber(){
            this.showNumberdialog = !this.showNumberdialog;
        },

        //关闭就餐人数框
        beforeClose(action, done) {
            if (action === 'confirm') {
                Toast('点击了确定');
                done();
                this.$router.push('/foodList')
            } else {
                done();
                Toast('点击了取消');
            }
        }

        //
    }
}
</script>
<style lang="less">
    .text-center{
        text-align: center;
    }
    .dialog-title{
        text-align: center;
        padding: .266667rem;
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


