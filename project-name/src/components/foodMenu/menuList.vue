<template>
    <div class="list-content" ref="menuListContent">
        <van-badge-group :active-key="activeKey" >
            <van-badge v-for="(item,index) in foodMenuList" :key="item.productcategory_id" :title="item.sv_pc_name" @click="handleClickCategoy(item.productcategory_id,item.producttype_id,index)"/>
        </van-badge-group>
    </div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
    props:{
        foodMenuList: Array
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
        handleClickCategoy(productcategory_id,producttype_id,index) {
            this.activeKey = index;
            this.$emit('onHandleClickMenu',productcategory_id);
        },
        //初始化菜单列表BScroll
        _menuListBScroll(){
            this.$nextTick(() => {
                if(!this.scroll){
                    this.scroll = new BScroll(this.$refs.menuListContent, {
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
    .list-content{
        height: 100%;
    }
</style>


