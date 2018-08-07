<template>
    <div>
        <div class="list-content" ref="menuListContent">
            <van-badge-group :active-key="activeKey" >
                <van-badge title="标签名称" @click="onClick" />
                <van-badge title="标签名称" @click="onClick" info="8" />
                <van-badge title="标签名称" @click="onClick" info="99" />
                <van-badge title="标签名称" @click="onClick" info="199" />
                <van-badge title="标签名称" @click="onClick" />
                <van-badge title="标签名称" @click="onClick" info="8" />
                <van-badge title="标签名称" @click="onClick" info="99" />
                <van-badge title="标签名称" @click="onClick" info="199" />
                <van-badge title="标签名称" @click="onClick" />
                <van-badge title="标签名称" @click="onClick" info="8" />
                <van-badge title="标签名称" @click="onClick" info="99" />
                <van-badge title="标签名称" @click="onClick" info="199" />
                <van-badge title="标签名称" @click="onClick" />
                <van-badge title="标签名称" @click="onClick" info="8" />
                <van-badge title="标签名称" @click="onClick" info="99" />
                <van-badge title="标签名称" @click="onClick" info="199" />
                <van-badge title="标签名称" @click="onClick" />
                <van-badge title="标签名称" @click="onClick" info="8" />
                <van-badge title="标签名称" @click="onClick" info="99" />
                <van-badge title="标签名称" @click="onClick" info="199" />
            </van-badge-group>
        </div>
        
    </div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
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

</style>


