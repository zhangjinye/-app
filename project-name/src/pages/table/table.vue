<template>
    <div>
        <!-- 导航 -->
        <nav>
            <div class="nav-row">
                <div class="nav-content">
                    <div class="nav-let-bar">
                        <template v-if="shopInfo.shopLogo != ''">
                            <van-icon name="wap-nav" />
                            <!-- <img :src="'http://res.decerp.cc'+shopInfo.shopLogo" class="photo-icon" alt=""> -->
                        </template>
                        <template v-else>
                            <van-icon name="wap-nav" />
                        </template>
                    </div>
                    <div class="nav-title">
                        {{waiterInfo.sv_employee_name}}
                    </div>
                </div>
            </div>
        </nav>
        <!-- 房台信息 -->
        <div class="content-warp" ref="deskContent">
            <div class="table-nav">
                <van-tabs :swipe-threshold='4' :line-width="30" @click="handleClickTableList">
                    <!-- <van-tab title="全部" ></van-tab> -->
                    <van-tab v-for="(item,index) in cateringRegionList" 
                    :title="item.sv_region_name"
                    :index=index
                    :key="item.sv_region_id">
                    </van-tab>
                </van-tabs>
            </div>
            <desk-list 
            :cateringTablePageList='cateringTablePageList' 
            v-if="cateringTablePageListFlag" 
            @onPersonNumber="handClickPersonNumber">
            </desk-list>
        </div>

        <!-- 左边导航 -->
        
        <!-- 输入人数 -->
        <van-dialog
        v-model="showNumberdialog"
        show-cancel-button
        :before-close="operateCateringTableByOperateTypeClick"
        >
        <van-row class="dialog-title">
            就餐人数
        </van-row>
        <van-field
            v-model="user_number"
            label="就餐人数"
            type="number"
            :placeholder=numberPlaceholder
        />
        </van-dialog>
        
    </div>
</template>
<script>
import deskList from '@/components/deskList/list';
import {Toast} from 'vant';
import leftNav from '@/components/leftNav/leftNav';
import {mapMutations} from 'vuex';
export default {
    props:{
       //userId
    },

    created() {
        let key = this.$store.state.key;
        let waiterInfo = this.$store.state.waiter_info;
        let shopInfo = this.$store.state.shopInfo;
        this.key = key;
        this.waiterInfo = waiterInfo;
        this.shopInfo = shopInfo;
        this.getCashierRegionTableInfo('');
    },
    data(){
        return {
            fixed: true,
            shopInfo:Object,
            showNumberdialog: false,//是否显示输入就餐人数
            user_number: "",//就餐人数
            key: '',//token
            waiterInfo: Object,//服务员资料
            cateringRegionList: Object,//房台导航
            cateringTablePageList:Object,//房台列表
            cateringTablePageListFlag: false,//是否有房台数据
            numberPlaceholder: '请输入就餐人数',
            tableId: 0,//操作房台的id
            clickTableIndex: 0//点击房台的索引
        }
    },
    components:{
        deskList,//房台列表组件
        leftNav
    },
    methods:{

        //vuex
        ...mapMutations([
            'tableInfo'
        ]),

        //点击房台菜单加载对应的房台
        handleClickTableList(index){
            const that = this;
            const thisIndex = index;
            let regionId = that.cateringRegionList[thisIndex].sv_region_id;
            that.regionId = regionId;
            that.getCashierRegionTableInfo(regionId,1);
        },

        //根据房台获取房台区域列表和房台
        getCashierRegionTableInfo(regionId,QueryType){
            const that = this;
            const params = {
                key: that.key,
                regionId: regionId,
                pageIndex: 1,
                PageSize: 100,
                QueryType: QueryType || 0,
                queryRegion: true,
                queryTableCount: true,
                using_state: -1
            }
            that.$api.getCashierRegionTableInfo(params).then(result => {
                if(result && result.succeed){
                    if(result.values.cateringRegionList && Array.isArray(result.values.cateringRegionList)){
                        let allTable = {
                            sv_region_id:'',
                            sv_region_name:"全部"
                        }
                        that.cateringRegionList = [allTable, ...result.values.cateringRegionList];
                    }
                    if(result.values.cateringTablePageList && Array.isArray(result.values.cateringTablePageList)){
                        that.cateringTablePageList = result.values.cateringTablePageList;
                        that.cateringTablePageListFlag = true;
                    }
                    else{
                        that.cateringTablePageList = [];
                    }
                }
            })
        },

        //输入就餐人数--弹窗
        handClickPersonNumber(index){
            const that = this;
            const thisIndex = index;
            that.tableId = 0;//充值房台id
            that.clickTableIndex = 0;
            let sv_table_using_state = that.cateringTablePageList[thisIndex].sv_table_using_state;
            let sv_table_id = that.cateringTablePageList[thisIndex].sv_table_id;
            let sv_table_name = that.cateringTablePageList[thisIndex].sv_table_name;
            if(sv_table_using_state === 0){
                //弹出开台的窗口
                that.numberPlaceholder = `请输入房台${sv_table_name}的就餐人数`;
                that.tableId = sv_table_id;//房台id
                that.clickTableIndex = thisIndex;//点击的索引
                that.showNumberdialog = !this.showNumberdialog;
            }
            else if(sv_table_using_state === 1){
                //已开台，进行点餐的--->去到点餐页面
                that.clickTableIndex = thisIndex;//点击的索引
                that.tableInfo(that.cateringTablePageList[thisIndex]);
                that.$router.push("/foodList");
            }
            else if(sv_table_using_state === 2){
                //使用中--->前往订单详情
                that.$toast('点餐详情');
            }
        },

        //确定或者关闭输入就餐人数框
        operateCateringTableByOperateTypeClick(action, done) {
            const that = this;
            let tableId = that.tableId;
            let user_number = that.user_number;
            if (action === 'confirm') {
                if(tableId > 0 && user_number > 0){
                    that.operateCateringTableByOperateType(tableId,user_number,0,done);
                    //setTimeout(done(), 1000);
                }
                else{
                    done();
                    that.$toast('请输入就餐人数');
                }
            } else {
                done();
            }
        },

        //操作房台的方法
        operateCateringTableByOperateType(OperateTableId,OpenTableNum,OperateType = 0,done){
            const that = this;
            let key = that.key;
            let clickTableIndex = that.clickTableIndex;
            let data = {
                OperateType: OperateType,
                OpenTableNum: OpenTableNum,
                OperateTableId: OperateTableId,
            }
            let dataJson = JSON.stringify(data);
            let params = {
                key: key,
                dataJson:dataJson
            }
            that.$api.operateCateringTableByOperateType(params).then(result =>{
                if(result && result.succeed){
                    if(OperateType === 0){
                        done();
                        that.$router.push("/foodList");
                        that.cateringTablePageList[that.clickTableIndex].sv_table_use_number = OpenTableNum;
                        that.tableInfo(that.cateringTablePageList[that.clickTableIndex]);
                    }
                }
                else{
                    that.$toast('操作失败!');
                }
            })
        }

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
            width: 60px;
            height: 46px;
        }
        .nav-title{
            max-width: 60%;
            margin: auto;
            .text-center;
            font-size: 14px;
        }
        .photo-icon{
            margin-top: 3px;
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


