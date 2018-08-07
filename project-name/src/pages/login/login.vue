<template>
    <div>
        <div class="login-warp">
            <div class="content">
                <img class="logo-title" src="../../images/waiterlogo.png" alt="">
                <div class="input-row">
                    <input type="text" class="input-col user-icon" placeholder="请输入账号">
                </div>
                <div class="input-row">
                    <input type="password" class="input-col pass-icon" placeholder="请输入密码">
                </div>
                <div class="input-row">
                    <button type="button" @click="login" class="input-col input-btn">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        document.title = '登录';
    },

    data(){
        return {
            username:'',
            password:''
        }
    },
    methods: {
        login(){
            this.$router.push("/table");
        }
    }
}
</script>

<style lang="less">
    .login-warp{
        position: absolute;
        width: 100%;
        height: 100%;
        background: url('../../images/login-bg.png') no-repeat center/ 100%;
        .content{
            padding-top: 3.466667rem;
        }
        .logo-title{
            max-width: 80%;
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
            background: rgba(255, 255, 255, 0.3);
            text-indent: 1.2rem;
            color: #fff;
            margin-bottom: 1.066667rem;
        }
        .user-icon{
            background: url('../../images/ic_shoujihao.png') no-repeat rgba(0, 0, 0,0.3);
            background-size: .533333rem;
            background-position: .4rem .32rem;
        }
        .pass-icon{
            background: url('../../images/ic_mima.png') no-repeat rgba(0, 0, 0,0.3);
            background-size: .533333rem;
            background-position: .4rem .32rem;
        }
        .input-col::placeholder{
            color: #f5f5f5;
        }
        .input-btn{
            background-color: #ff4040;
            text-indent: 0;
            font-size: 18px;
        }
    }
</style>


