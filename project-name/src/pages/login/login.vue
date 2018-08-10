<template>
    <div>
        <div class="login-warp">
            <div class="content">
                <img class="logo-title" src="../../images/waiterlogo.png" alt="">
                <div class="input-row">
                    <input type="text" class="input-col user-icon" v-model="userName" placeholder="请输入账号">
                </div>
                <div class="input-row">
                    <input type="password" class="input-col pass-icon" v-model="passWord" placeholder="请输入密码">
                </div>
                <div class="input-row">
                    <button type="button" @click="login" class="input-col input-btn">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import md5 from 'js-md5';
import {mapMutations} from 'vuex'
import axios from 'axios'
export default {
    created() {
        document.title = '登录';
    },

    data(){
        return {
            userName:'000028@003',
            passWord:'123456'
        }
    },
    methods: {
        //vuex的mapMutations 辅助行数
        ...mapMutations([
            'getKey',
            'login_status',
            'getWaiterInfo',
            'shopInfo'
        ]),
        //登录
        login(){
            const that = this;
            let userId = 123;
            let userName = that.userName;
            let passWord = that.passWord;
            if(userName === '' || userName === undefined || userName === null){
                that.$toast("请输入正确的服务员账号！");
                return;
            }
            if(passWord === '' || passWord === undefined || passWord === null){
                that.$toast("请输入正确的密码！");
                return;
            }
            let timestamp = new Date().getMinutes();
            let nonce = timestamp;
            let md5PassWord = md5(passWord).toLocaleUpperCase();
            let md5Sort = [md5PassWord,timestamp,nonce].sort().join("");
            let signature = md5(md5Sort);
            let params = {
                "signature": signature.toLocaleUpperCase(),//签名md_5
                "timestamp": timestamp,//时间撮
                "nonce": nonce,//随机数
                "userName": userName//用户账号
            }
            that.$api.login_data(JSON.stringify(params)).then(result =>{
                if(result && result.succeed){
                     that.$toast.success('登录成功!');
                     //原始vuex模式
                    //  that.$store.commit('getKey',result.values.access_token);
                    //  that.$store.commit('login' ,true);
                    //  that.$store.commit('getWaiterInfo' ,result.values);
                    let shopInfoData = {
                        shopLogo: result.userInfo.sv_store_logo,//店铺logo
                        sv_uc_serialnumberset: JSON.parse(result.userInfo.userconfig.sv_uc_serialnumberset)//流水号
                    }
                    that.getKey(result.values.access_token);
                    that.login_status(true);
                    that.getWaiterInfo(result.values);
                    that.shopInfo(shopInfoData);
                    that.$router.push("/table");
                }
                else{
                    if(result.errmsg === 10001){
                        that.$toast.fail('密码错误!');
                    }
                    else{
                        that.$toast('登录失败，请重新登录');
                    }
                }
            });
        }
    }
}
</script>

<style lang="less">
    .login-warp{
        position: absolute;
        width: 100%;
        height: 100%;
        background: #fff;
        .content{
            padding-top: 3.466667rem;
        }
        .logo-title{
            max-width: 35%;
            margin-bottom: 60px;
            display: block;
            margin: auto;
            margin-bottom: 1.333333rem;
        }
        .input-row{
            height: 1.6rem;
            color: white;
            width: 80%;
            margin: auto;
        }
        .input-col{
            width: 100%;
            height: 1.173333rem;
            border: none;
            outline: none;
            border-radius: .586667rem;
            background: #f7f7f7;
            text-indent: 1.2rem;
            color: #666;
        }
        .user-icon{
            background: #f8f8f8 url('../../images/ic_shoujihao.png')no-repeat;
            background-size: .533333rem;
            background-position: .4rem .32rem;
        }
        .pass-icon{
            background: #f8f8f8 url('../../images/ic_mima.png')no-repeat;
            background-size: .533333rem;
            background-position: .4rem .32rem;
        }
        .input-col::placeholder{
            color: #999999;
        }
        .input-btn{
            background-color: #366aff;
            text-indent: 0;
            font-size: 18px;
            color: #fff;
        }
    }
</style>


