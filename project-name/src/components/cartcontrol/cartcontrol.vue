<template>
    <div class="cartcontrol">
        <span class="cart-add cart-button" @click="addFoodToCart(index)"></span>
        <span v-show="cartNumber > 0" class="cart-count">1</span>
        <span v-show="cartNumber > 0" class="cart-decrease cart-button"></span>
    </div>
</template>
<script>
export default {
    props:{
        cartNumber: Number,
        index: Number
    },
    data(){
        return {
            
        }
    },
    methods: {
        addFoodToCart(index){
            
        }
    }
}
</script>
<style lang="less">
    .cartcontrol{
        width: 2.133333rem;
        height: .8rem;
        position: absolute;
        bottom: .266667rem;
        right: .266667rem;
        display: flex;
        flex-direction: row-reverse;
        .cart-button{
            display: inline-block;
            width: .8rem;
            height: .8rem;
            cursor: pointer;
        }
        .cart-count{
            display: inline-block;
            width: .533333rem;
            height: .8rem;
            text-align: center;
            line-height: .8rem;
            font-size: 14px;
        }
        .cart-decrease{
            background: url('../../images/cutbg.png')no-repeat center/  100%;
        }
        .cart-add{
            background: url('../../images/addbg.png')no-repeat center/  100%;
        }
    }
    
</style>

