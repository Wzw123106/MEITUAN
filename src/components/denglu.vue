<template>
<div id="denglus">
    <div class="dengluz">
        <div class="denglu">
            <div class="kais">
                <img src="../assets/2.png" alt="">
            </div>
        </div>
        <div class="zhuti">
            <div class="zhutitu">
                <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="">
            </div>
            <div class="zhutik">
                <ul>
                    <li>账号登录</li>
                    <li><input type="text" class="wbcc" placeholder="登录账号" v-model="name"></li>
                    <li><input type="password" class="wbcc" placeholder="密码" v-model="password"></li>
                    <li><button class="da" @click="shang">登录</button></li>
                    <li><span>还没有账号?</span> <span class="mfzz" @click="mfzz">免费注册</span></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            password: ""
        }
    },
    methods: {
        // 跳转
        mfzz: function () {
            this.$router.push({
                path: "/zhuce"
            })
        },
        shang: function () {
            this.axios.get('http://open.duyiedu.com/api/meituan/login', {
                    params: {
                        userName: this.name,
                        password: this.password,
                        appkey: "hyy123_1589431078998"
                    }
                })
                .then(res => {
                    if (res.data.msg == "登录成功") {
                        this.$store.state.denglu = "登录成功"
                        this.$store.state.kknb = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603864107558&di=7340c399208e6d1356c42a33ef5f72a0&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190130%2F2cdfe50886764ab681db12b3ea69cf9e.gif"
                    }
                    alert(res.data.msg)
                    console.log(res)
                    this.$router.push({
                        path: "/"
                    })
                })
        }
    },
    created() {

    },
}
</script>

<style lang="less">
.dengluz {
    width: 1490px;
    margin: 0 auto;
}

.denglu {
    width: 100%;
    height: 140px;

    position: relative;
}

.kais {
    width: 200px;
    height: 100px;
    margin-left: 140px;
    position: absolute;
    top: 20px;

}

.kais>img {
    width: 100%;
    height: 100%;
}

.zhuti {
    width: 100%;
    height: 440px;
    position: relative;
}

.zhutitu {
    width: 480px;
    height: 370px;
    background-color: goldenrod;
    margin-left: 40px;
    position: absolute;
    top: 30px;
}

.zhutik {
    width: 480px;
    height: 370px;
    position: absolute;
    top: 30px;
    left: 700px;
}

.zhutik>ul {
    width: 330px;
    height: 246px;
    margin-top: 60px;
    text-align: left;
    color: rgb(102, 102, 102);
}

.zhutik>ul>li {
    margin-bottom: 10px;
}

.wbcc {
    width: 280px;
    height: 43px;
    border: 1px solid rgb(170, 170, 170);
}

.wbcc:focus {
    outline: none;
}

.da {
    width: 270px;
    height: 35px;
    margin-top: 20px;
    background-color: rgb(255, 196, 0);
    cursor: pointer
}

.da:focus {
    outline: none;
}

span {
    cursor: pointer
}

.mfzz {
    margin-left: 20px;
    font-size: 14px;
    color: rgb(254, 140, 0);
}
</style>
