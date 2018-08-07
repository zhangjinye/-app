<template>
    <div>
        <div class="table-pane">
            <div class="desk-list">
                <ul class="desk-item">
                    <li class="desk-content" v-for="index in 18" :key="index">
                        <div class="item-row">
                            <div class="desk-number">
                                <span>{{index}}人桌</span>
                            </div>
                            <div class="desk-name">
                                <span>桌台{{index}}</span>
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
export default {
    data(){
        return {

        }
    }
}
</script>
<style lang="less">
    .table-pane{
        padding: .266667rem;
    }
    .desk-item{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        width: 100%;
    }
    .desk-content{
        background: #fff;
        border-radius: .08rem;
        min-width: 32%;
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


