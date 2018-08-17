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
                    <div slot="action" @click="searchFood">搜索</div>
                </van-search>
            </div>
        </nav>
        <!-- 菜品点菜 -->
        <div class="food-content" :class="showSearchFlag ? 'food-content-active': ''">
            <div class="menu-list">
                <food-menu 
                :foodMenuList="foodMenuList" 
                v-if="foodMenuListFlag"
                @onHandleClickMenu='readyMenu'>
                </food-menu>
            </div>
            <div class="food-list">
                <foods-list 
                :foodList='foodList' 
                v-if="foodListFlag">
                </foods-list>
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

    data(){
        return {
            name:'',
            showSearchFlag:false,
            searchTextValue:'',
            key:'',
            tableInfo: Object,//当前房台信息
            foodMenuList: Array,//菜单列表
            foodMenuListFlag: false,
            foodList: Array,
            foodListFlag: false
        }
    },

    created() {
        let key = this.$store.state.key;
        let tableInfo = this.$store.tableInfo;
        this.key = key;
        this.tableInfo = tableInfo;
        this.getFirstCategory();
    },

    methods:{
        //监听点击菜单分类
        readyMenu(categoryId){
            this.getProductPcCashierListy(categoryId,"");
        },

        //搜索菜品
        searchFood(){
            const that = this;
            let searchTextValue = that.searchTextValue;
            if(searchTextValue !== '' && searchTextValue !== undefined && searchTextValue !== null){
                this.getProductPcCashierListy('',searchTextValue);
            }
            else{
                 that.$toast("输入您想要查找的菜品哦~");
            }
        },

        //读取菜单
        getFirstCategory(){
            const that = this;
            const key = that.key;
            let params = {
                key: key
            }
            that.$api.getFirstCategory(params).then(result =>{
                if(result && result.succeed){
                    if(result.values && Array.isArray(result.values)){
                        that.foodMenuList = result.values;
                        that.foodMenuListFlag = true;
                        that.getProductPcCashierListy(result.values[0].productcategory_id);
                    }
                    else{
                        that.foodMenuList = [];
                        that.foodMenuListFlag = false;
                    }
                }
                else{
                    that.$toast("获取分类失败!");
                }
            })
        },

        //读取菜品
        getProductPcCashierListy(categoryId,name){
            const that = this;
            let params = {
                key: that.key,
                category: categoryId,
                name: name,
                pageIndex: 1,
                pageSize: 100
            }
            that.$api.getProductPcCashierList(params).then(result =>{
                if(result && result.succeed){
                    let foodList = result.values.list;
                    if(foodList && Array.isArray(foodList)){
                        foodList.forEach(item =>{
                            item.cartNumber = 0;
                            item.sv_p_images = JSON.parse(item.sv_p_images);

                        });
                        that.foodList = foodList;
                        that.foodListFlag = true;
                    }
                    else{
                        that.foodList = [];
                        that.foodListFlag = false;
                    }
                }
            })
        },

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


