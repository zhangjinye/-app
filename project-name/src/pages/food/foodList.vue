<template>
    <div>
        <nav class="nav-bar">
            <van-nav-bar
            title="点菜"
            left-text="返回"
            :right-text="showSearchFlag ? '关闭搜索':'搜索菜品'"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
            <div class="search-box" v-show="showSearchFlag">
                <van-search
                    v-model="searchTextValue"
                    show-action
                    placeholder="输入您想要查找的菜品哦~"
                    >
                    <div slot="action" @click="searchProduct">搜索</div>
                </van-search>
            </div>
        </nav>
        <!-- 菜品点菜 -->
        <div class="food-content" :class="showSearchFlag ? 'food-content-active': ''">
            <div class="menu-list">
                <food-menu></food-menu>
            </div>
            <div class="food-list">
                <foods-list></foods-list>
            </div>
        </div>
        <!-- 底部导航 -->
         <shop-cart></shop-cart>   
    </div>
</template>
<script>
import foodMenu from '@/components/foodMenu/menuList';
import foodsList from '@/components/foodsList/foodsList';
import shopCart from '@/components/shopCart/cart';
export default {
    //组件
    components:{
        foodMenu,
        foodsList,
        shopCart
    },

    created() {
       
    },

    data(){
        return {
            name:'',
            showSearchFlag:false,
            searchTextValue:''
        }
    },

    methods:{
        //返回
        onClickLeft() {
            let that = this;
            that.$router.push("/table");
        },
        //搜索
        onClickRight() {
            this.showSearchFlag = !this.showSearchFlag;
        },
        //搜索菜品
        searchProduct(){

        }
    }
}
</script>
<style lang="less">
.nav-bar{
    position: fixed;
    top: 0;
    height: 82px;
    width: 100%;
    z-index: 99;
    .search-box{
        position: fixed;
        top: 46px;
        width: 100%;
    }
    .van-search{
        padding: .16rem .4rem;
    }
    .van-search__action{
        padding-left: .266667rem;
    }
}
.food-content{
    position: absolute;
    display: flex;
    width: 100%;
    overflow: hidden;
    top: 46px;
    bottom: 50px;
    .menu-list{
        height: 100%;
        width: 85px;
    }
    .food-list{
        flex: 1;
        height: 100%;
        background-color: #fff;
    }
}
.food-content-active{
    top: 92px;
}
</style>


