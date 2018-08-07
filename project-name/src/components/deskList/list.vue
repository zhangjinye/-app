<template>
    <div>
        <div class="table-pane" ref="">
            <div class="desk-list" ref="deskContent" :style="{'height': clientHeight }">
                <ul class="desk-item" ref="">
                    <li class="desk-content" v-for="index in dataLength" @click.stop.prevent="handOpenDesk" :key="index">
                        <div class="item-row">
                            <div class="desk-number">
                                <span>{{index}}人桌</span>
                            </div>
                            <div class="desk-name">
                                <span>{{index}}人桌</span>
                            </div>
                            <div class="desk-state">
                                <span>空闲</span>
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

        //点击空闲的房台开台
        handOpenDesk(){
            const that = this;
            that.$emit("onPersonNumber");
        }
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
</style>


