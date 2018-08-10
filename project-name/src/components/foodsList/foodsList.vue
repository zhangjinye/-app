<template>
    <div class="foods-list-content" ref="foodsContent">
        <ul>
            <!-- <li v-for="index in 10" :key="index"> -->
            <li v-for="(item,index) in foodList" :key="item.product_id">
                <template v-if="item.sv_p_images && item.sv_p_images[0]">
                    <img :src="img_url+item.sv_p_images[0].code" :lazy='img_url+item.sv_p_images[0].code' alt="" class="food-icon">
                </template>
                <template v-else>
                    <img src="../../images/foodimg.png" alt="" class="food-icon">
                </template>
                <div class="content">
                    <div class="food-name">{{item.sv_p_name}}</div>
                    <div class="food-salesinfo">{{item.sv_is_select && item.sv_select_remaining > 0 ? `剩余量：${item.sv_select_remaining}${item.sv_p_unit}`:''}}</div>
                    <div class="food-price">
                        <!-- 区分会员价 -->
                        <!-- <template v-if="item.sv_p_memberprice > 0">
                            <span>¥{{item.sv_p_memberprice}}</span>
                            <span class="unit-price">¥{{item.sv_p_unitprice}}</span>
                        </template>
                        <template v-else>
                            <span>¥{{item.sv_p_unitprice}}</span>
                        </template> -->
                        <!-- 区分会员价 -->
                        <span>¥{{item.sv_p_unitprice}}</span>
                    </div>
                </div>
                <template v-if="item.sv_is_select === true && item.sv_select_remaining === 0">
                    <div class="cartcontrol">
                        已售馨
                    </div>
                </template>
                <template v-else>
                    <cart-control :index="index" :cartNumber='item.cartNumber'></cart-control>
                </template>
                <!-- <div class="cartcontrol">
                    <div class="cart-spec">选规格</div>
                </div> -->
            </li>
        </ul>
    </div>
</template>
<script>
import BScroll from 'better-scroll';
import cartControl from '@/components/cartControl/cartControl';
export default {
    props:{
        foodList: Array
    },

    components: {
        cartControl
    },
    data(){
        return {
            activeKey: 0,
            img_url: 'http://res.decerp.cc'
        }
    },
    created() {
        this.$nextTick(()=>{
            setTimeout(() =>{
                this._menuListBScroll();
            },20)
        });
    },
    watch:{
        //监听菜品列表的变化，从而重置 BScroll 的初始化
        foodList(){
            this.$nextTick(()=>{
                setTimeout(() =>{
                    this._menuListBScroll();
                },20)
            });
        }
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



