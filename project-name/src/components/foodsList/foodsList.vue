<template>
    <div class="foods-list-content" ref="foodsContent">
        <ul>
            <!-- <li v-for="index in 10" :key="index"> -->
            <li>
                <img src="../../images/001.jpg" alt="" class="food-icon">
                <div class="content">
                    <div class="food-name">美味小吃美味小吃</div>
                    <div class="food-salesinfo">销量：100</div>
                    <div class="food-price">
                        <span>¥5.00</span>
                        <span class="unit-price">¥3.00</span>
                    </div>
                </div>
                <cart-control></cart-control>
            </li>
            <li>
                <img src="../../images/001.jpg" alt="" class="food-icon">
                <div class="content">
                    <div class="food-name">美味小吃美味小吃</div>
                    <div class="food-salesinfo">销量：100</div>
                    <div class="food-price">
                        <span>¥5.00</span>
                        <span class="unit-price">¥3.00</span>
                    </div>
                </div>
                <div class="cartcontrol">
                    <div class="cart-spec">选规格</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import BScroll from 'better-scroll';
import cartControl from '@/components/cartControl/cartControl';
export default {
    components: {
        cartControl
    },
    data(){
        return {
            activeKey: 0
        }
    },
    created() {
        this.$nextTick(()=>{
            setTimeout(() =>{
                this._menuListBScroll();
            },20)
        })
    },
    methods: {
        onClick(key) {
            this.activeKey = key;
        },
        //初始化菜单列表BScroll
        _menuListBScroll(){
            this.$nextTick(() => {
                if(!this.scroll){
                    this.scroll = new BScroll(this.$refs.foodsContent, {
                        click: true
                    })
                }
                else{
                    this.scroll.refresh();
                }
                
            })
        },
    }
}
</script>
<style lang="less">
    .foods-list-content{
        height: 100%;
        ul {
            li{
                margin-left: .266667rem;
                padding:  .266667rem 0;
                display: flex;
                position: relative;
                .food-icon{
                    width: 1.866667rem;
                    height: 1.866667rem;
                    display: block;
                }
                .content{
                    flex: 1;
                    position: relative;
                    padding-left: .266667rem;
                }
                .food-name{
                    font-size: 16px;
                    color: #000;
                    max-width: 5.3rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    -o-text-overflow: ellipsis;
                    overflow: hidden;
                }
                .food-salesinfo{
                    height: .64rem;
                    line-height: .64rem;
                    color: #999;
                    font-size: 12px;
                }
                .food-price{
                    height: .8rem;
                    line-height: .8rem;
                    font-size: 16px;
                    font-weight: 700;
                    color: #f01414;
                }
                .unit-price{
                    color: #999;
                    font-size: 12px;
                    font-weight: 400;
                    margin-left: .133333rem;
                }
                .cartcontrol{
                    width: 2.133333rem;
                    height: .8rem;
                    position: absolute;
                    bottom: .266667rem;
                    right: .266667rem;
                    display: flex;
                }
                .cart-spec{
                    cursor: pointer;
                    width: 100%;
                    height: .8rem;
                    border-radius: .4rem;
                    color: #fff;
                    font-size: 14px;
                    text-align: center;
                    line-height: .8rem;
                    background-color: #0097ff;
                }
            }
            li::after{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 200%;
                height: 200%;
                -webkit-transform: scale(.5);
                transform: scale(.5);
                -webkit-transform-origin: 0 0;
                transform-origin: 0 0;
                pointer-events: none;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                border: 0 solid #e5e5e5;
                border-bottom-width: 1px;
            }
        }
    }
</style>



