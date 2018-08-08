<template>
    <div>
        <div class="shop-cart">
            <div class="shop-cart-content">
                <div class="goOrder">下单</div>
                <div class="cart-info" @click.stop.prevent="handleClickCart">
                    <div class="van-hairline--top"></div>
                    <van-row type="flex">
                        <van-col class="cart-icon" span="6">
                            <span class="cart-counts">1</span>
                            <van-icon name="shopping-cart" />
                        </van-col>
                        <van-col class="order-price" span="18">
                            ¥500
                        </van-col>
                    </van-row>
                </div>
            </div>
            <!-- 购物车列表 -->
            <transition name="transHeight">
                <div class="shopcart-list" v-show="showBackdrop">
                    <div class="shopcart-header">
                        <span>购物车</span>
                        <span class="cleancart">清空</span>
                    </div>
                    <div class="list-content" ref="cartListContent">
                        <ul>
                            <li class="foods-list-item">
                                <div class="food-list-content">
                                    <span class="food-name">美食餐饮</span>
                                    <span class="food-price">¥500</span>
                                    <div class="cartControlWarp">
                                        <cart-control></cart-control>
                                    </div>
                                </div>
                                <div class="food-taste">
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                </div>
                            </li>
                            <li class="foods-list-item">
                                <div class="food-list-content">
                                    <span class="food-name">美食餐饮</span>
                                    <span class="food-price">¥500</span>
                                    <div class="cartControlWarp">
                                        <cart-control></cart-control>
                                    </div>
                                </div>
                                <div class="food-taste">
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                </div>
                            </li>
                            <li class="foods-list-item">
                                <div class="food-list-content">
                                    <span class="food-name">美食餐饮</span>
                                    <span class="food-price">¥500</span>
                                    <div class="cartControlWarp">
                                        <cart-control></cart-control>
                                    </div>
                                </div>
                                <div class="food-taste">
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                </div>
                            </li>
                            <li class="foods-list-item">
                                <div class="food-list-content">
                                    <span class="food-name">美食餐饮</span>
                                    <span class="food-price">¥500</span>
                                    <div class="cartControlWarp">
                                        <cart-control></cart-control>
                                    </div>
                                </div>
                                <div class="food-taste">
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                </div>
                            </li>
                            <li class="foods-list-item">
                                <div class="food-list-content">
                                    <span class="food-name">美食餐饮</span>
                                    <span class="food-price">¥500</span>
                                    <div class="cartControlWarp">
                                        <cart-control></cart-control>
                                    </div>
                                </div>
                                <div class="food-taste">
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                </div>
                            </li>
                            <li class="foods-list-item">
                                <div class="food-list-content">
                                    <span class="food-name">美食餐饮</span>
                                    <span class="food-price">¥500</span>
                                    <div class="cartControlWarp">
                                        <cart-control></cart-control>
                                    </div>
                                </div>
                                <div class="food-taste">
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                </div>
                            </li>
                            <li class="foods-list-item">
                                <div class="food-list-content">
                                    <span class="food-name">美食餐饮</span>
                                    <span class="food-price">¥500</span>
                                    <div class="cartControlWarp">
                                        <cart-control></cart-control>
                                    </div>
                                </div>
                                <div class="food-taste">
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                </div>
                            </li>
                            <li class="foods-list-item">
                                <div class="food-list-content">
                                    <span class="food-name">美食餐饮</span>
                                    <span class="food-price">¥500</span>
                                    <div class="cartControlWarp">
                                        <cart-control></cart-control>
                                    </div>
                                </div>
                                <div class="food-taste">
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                </div>
                            </li>
                            <li class="foods-list-item">
                                <div class="food-list-content">
                                    <span class="food-name">美食餐饮</span>
                                    <span class="food-price">¥500</span>
                                    <div class="cartControlWarp">
                                        <cart-control></cart-control>
                                    </div>
                                </div>
                                <div class="food-taste">
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                </div>
                            </li>
                            <li class="foods-list-item">
                                <div class="food-list-content">
                                    <span class="food-name">美食餐饮</span>
                                    <span class="food-price">¥500</span>
                                    <div class="cartControlWarp">
                                        <cart-control></cart-control>
                                    </div>
                                </div>
                                <div class="food-taste">
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                </div>
                            </li>
                            <li class="foods-list-item">
                                <div class="food-list-content">
                                    <span class="food-name">美食餐饮</span>
                                    <span class="food-price">¥500</span>
                                    <div class="cartControlWarp">
                                        <cart-control></cart-control>
                                    </div>
                                </div>
                                <div class="food-taste">
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                    <span>测试</span>
                                </div>
                            </li>
                            <li class="foods-list-item">
                                <div class="food-list-content">
                                    <span class="food-name">美食餐饮</span>
                                    <span class="food-price">¥500</span>
                                    <div class="cartControlWarp">
                                        <cart-control></cart-control>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </div>
        <!-- 蒙版 -->
        <transition name="fade-backdrop">
            <div class="backdrop" @click.stop.prevent="handleClickCart" v-show="showBackdrop"></div>
        </transition>
    </div>
</template>
<script>
import cartControl from '@/components/cartControl/cartControl';
import BScroll from 'better-scroll';
export default {
    components:{
        cartControl
    },
    created() {
        
    },
    data(){
        return {
            showBackdrop: false
        }
    },

    methods:{
        handleClickCart(){
            this.showBackdrop = !this.showBackdrop;
            if(this.showBackdrop){
                this.$nextTick(()=>{
                    setTimeout(() =>{
                        this._menuListBScroll();
                    },20)
                })
            }
        },
        //初始化菜单列表BScroll
        _menuListBScroll(){
            this.$nextTick(() => {
                if(!this.scroll){
                    this.scroll = new BScroll(this.$refs.cartListContent, {
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
    .shop-cart{
        position: fixed;
        width: 100%;
        height: 50px;
        bottom: 0;
        background-color: #fff;
        z-index: 101;
        .shop-cart-content{
            display: flex;
            flex-direction: row-reverse;
        }
        .goOrder{
            width: 30%;
            height: 50px;
            background-color: #0097ff;
            color: #fff;
            cursor: pointer;
            text-align: center;
            line-height: 50px;
            font-size: 18px;
        }
        .cart-info{
            flex: 1;
            height: 50px;
            cursor: pointer;
            background: #fff;
        }
        .cart-icon{
            height: 50px;
            font-size: .8rem;
            line-height: 50px;
            text-align: center;
            padding-top: .133333rem;
            position: relative;
        }
        .order-price{
            font-size: 18px;
            font-weight: bold;
            color: #f01414;
            padding-left: .4rem;
            line-height: 50px;
        }
        .cart-counts{
            width: 20px;
            height: 20px;
            position: absolute;
            border-radius: 50%;
            background-color: #f01414;
            color: #fff;
            z-index: 99;
            font-size: 12px;
            text-align: center;
            line-height: 20px;
            right: 10px;
        }
    }

    .backdrop{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(7,17,27,0.6);
        -webkit-backdrop-filter: blur(10px);
        z-index: 100;
    }
    .backdrop.fade-backdrop-enter-active,
    .backdrop.fade-backdrop-leave-active {
        transition: opacity 0.5s;
    }
    .backdrop.fade-backdrop-enter,
    .backdrop.fade-backdrop-leave-active {
        opacity: 0;
    }
    .shopcart-list.transHeight-enter-active,
    .shopcart-list.transHeight-leave-active{
        transition: all 0.5s;
    }
    .shopcart-list.transHeight-enter,
    .shopcart-list.transHeight-leave-active {
        transform: translate3d(0, 0, 0);
    }
    .shopcart-list{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        max-height: 300px;
        background: #fff;
        transform: translate3d(0,-100%,0);
        z-index: -1;
        .list-content{
            max-height: 260px;
            overflow: hidden;
        }
        .shopcart-header{
            padding: 10px;
            position: relative;
            background-color: #f8f8f8;
            font-size: 14px;
        }
        .cleancart{
            position: absolute;
            right: 10px;
            color: #0097ff;
        }
        .foods-list-item{
            padding: 10px;
        }
        .food-list-content{
            display: flex;
            position: relative;
            height: 30px;
            line-height: 30px;
        }
        .food-name{
            font-size: 14px;
            color: #000;
            flex: 1;
        }
        .food-price{
            width: 60px;
            font-size: 14px;
            font-weight: bold;
            color: #f01414;
        }
        .cartControlWarp{
            width: 80px;
            position: relative;
        }
         .cartControlWarp /deep/ .cartcontrol{
             bottom: 0;
             margin: auto;
             right: 0;
         }
         .food-taste{
             
         }
    }
</style>


