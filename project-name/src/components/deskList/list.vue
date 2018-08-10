<template>
    <div>
        <div class="table-pane" ref="">
            <div class="desk-list" ref="deskContent" :style="{'height': clientHeight }">
                <ul class="desk-item" ref="">
                    <li class="desk-content" v-for="(item,index) in cateringTablePageList" :class="tableAddClass(item.sv_table_using_state)" @click.stop.prevent="handleClickDesk(index)" :key="item.sv_table_id">
                        <div class="item-row">
                            <div class="desk-number">
                                <span>{{item.sv_table_number}}人桌</span>
                            </div>
                            <div class="desk-name">
                                <span>{{item.sv_table_name}}</span>
                            </div>
                            <div class="desk-state">
                                <span v-if="item.sv_table_using_state == '0'">空闲</span>
                                <span v-if="item.sv_table_using_state == '1'">已开台</span>
                                <span v-if="item.sv_table_using_state == '2'">使用中</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
    props:{
        cateringTablePageList: Array
    },

    created() {
        let clientHeight = document.documentElement.clientHeight - 102 + 'px' || document.body.clientHeight- 102 + 'px';
        this.clientHeight = clientHeight;
        
        this.$nextTick(()=>{
            setTimeout(()=>{
                this._BScrollInit();
            },20);
        });
    },

    data(){
        return {
            dataLength: 22,
            clientHeight: ''
        }
    },

    watch: {
        cateringTablePageList(){
            this.$nextTick(()=>{
                setTimeout(()=>{
                    this._BScrollInit();
                },20);
            });
        }
    },

    methods:{

        //初始化BScroll
        _BScrollInit(){
            this.$nextTick(() => {
                if(!this.scroll){
                    this.scroll = new BScroll(this.$refs.deskContent, {
                        click: true,
                        probeType: 3,
                    })
                }
                else{
                    this.scroll.refresh();
                }
                
            })
        },

        //房台动态加上class
        tableAddClass(state){
            let aciveClass = '';
            if(state === 0){
                aciveClass = 'desk-null';
            }
            else if(state === 1){
                aciveClass = 'desk-open';
            }
            else if(state === 2){
                aciveClass = 'desk-use';
            }
            return aciveClass;
        },

        //点击空闲的房台开台
        handleClickDesk(index){
            this.$emit("onPersonNumber",index);
        }

        //
    }
}
</script>
<style lang="less">
    .table-pane{
        padding: .266667rem;
        height: 100%;
    }
    .desk-item{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        width: 100%;
        overflow: hidden;
    }
    .desk-content{
        background: #fff;
        border-radius: .08rem;
        width: 32%;
        margin-bottom: 2%;
        margin-right: 2%;
        .item-row{
            padding: .266667rem;
        }
        .desk-name{
            text-align: center;
            font-size: 16px;
            padding: .213333rem 0;
            color: #000;
        }
        .desk-state{
            text-align: center;
            font-size: 14px;
        }
    }
    .desk-content:nth-child(3n){
        margin-right: 0;
    }
    .desk-null{
        background-color: #fff;
        color: #666;
    }
    .desk-open{
        background-color: #31c17b;
        color: #fff;
        .desk-name{
            color: #fff;
        }
    }
    .desk-use{
        background-color: #0097ff;
        color: #fff;
        .desk-name{
            color: #fff;
        }
    }
</style>


