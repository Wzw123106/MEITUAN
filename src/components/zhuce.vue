<template>
<div class="gui">
    <div class="yetou">
        <div class="yetou-s">
            <div class="z-tubiao">
                <img src="../assets/2.png" alt="">
            </div>
            <div class="y-tubiao">
                <ul>
                    <li class="t-z">已有美团账号？</li>
                    <li><button class="anniu" @click="denlu">登录</button></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="yezhong">
        <div class="yez">
            <ul>
                <li>
                    <span class="sapnsss">注册名称</span><input type="text" name="" class="inputsss" id="0" placeholder="必须为4-16位的字母数字下划线组成" v-model="sum">
                    <div class="shuru"></div>
                </li>
                <li><span class="sapnsss">登录密码:</span><input type="password" name="" class="inputsss" id="1" placeholder="密码必须为6-16位的字母数字或下划线组成" v-model="num"></li>
                <li><span class="sapnsss">确认密码:</span><input type="password" name="" class="inputsss" id="2" placeholder="必须和密码一致" v-model="oum"></li>
                <li><button class="tyan" @click="qued">
                        <h3>同意以下协议并注册</h3>
                    </button></li>
                <li><span class="ysxy">《美团点评用户服务协议》</span><span class="ysxy">《美团点评隐私协议》</span></li>
                <hr class="okbu">
                <span class="beian">©meituan.com 京ICP证070791号 京公网安备11010502025545号</span>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            sum: "",
            num: "",
            oum: "",
        }
    },
    methods: {
        qued: function () {
            this.axios.get('http://open.duyiedu.com/api/meituan/register', {
                    params: {
                        userName: this.sum,
                        password: this.num,
                        rePassword: this.oum,
                        appkey: "hyy123_1589431078998"
                    }
                })
                .then(res => {
                    alert(res.data.msg)
                    console.log(res)
                    if (res.data.msg == "注册成功") {
                        this.$router.push({
                            path: "/"
                        })
                    }

                })
        },
        denlu: function () {
            this.$router.push({
                path: '/denglu'
            })
        }
    },
}
</script>

<style lang="less">
.yetou {
    width: 1190px;
    margin: 0 auto;
    position: relative;
}

.yetou-s {
    width: 100%;
    height: 70px;
    background-color: white;
    border-bottom: 2px solid rgb(216, 216, 216);
}

.z-tubiao {
    position: absolute;
    width: 140px;
    height: 70px;
    background-color: green;
    top: 0px;
    left: 120px;
}

.z-tubiao>img {
    width: 100%;
    height: 100%;
    border-bottom: 2px solid rgb(216, 216, 216);
}

.y-tubiao {
    position: absolute;
    width: 290px;
    height: 70px;
    // background-color: green;
    top: 0px;
    right: 120px;
}

.y-tubiao li {
    width: 100px;
    height: 35px;
    margin-right: 6px;
    // background-color: blue;
    float: left;
    margin-top: 15px;
    margin-left: 18px;
}

.t-z {
    font-size: 13px;
    line-height: 35px;
    color: rgb(102, 102, 102);
}

.anniu {
    width: 60px;
    height: 30px;
    background-color: rgb(255, 202, 0);
    margin-top: 2px;
    border-radius: 2px;
    cursor: pointer
}

.yezhong {
    width: 100%;
    height: 400px;
    // background-color: red;
}

.yez {
    width: 500px;
    height: 350px;
    // background-color: green;
    margin-left: 100px;
    position: absolute;
    top: 100px;
}

.yez>ul {
    margin-top: 30px;
    margin-left: -120px;
}

.yez li {
    margin-bottom: 28px;
    margin-left: 30px;

}

.inputsss {
    width: 230px;
    height: 40px;
    border: 1px solid rgb(170, 170, 170);
}

.inputsss:focus {

    outline: none;
}

.sapnsss {
    width: 50px;
    height: 50px;
    margin-right: 20px;
}

.tyan {
    width: 200px;
    height: 50px;
    margin-left: 60px;
    background-color: rgb(255, 191, 0);
    cursor: pointer
}

.tyan:focus {
    outline: none;
}

.ysxy {
    color: rgb(254, 140, 0);
    font-size: 15px;
    margin-left: 20px;
    cursor: pointer
}

.okbu {
    margin-top: 100px;
    width: 1300px;
}

.beian {
    font-size: 15px;
    margin-left: 180px;
    margin-top: 20px;
    color: rgb(153, 153, 153);
}

// .shuru {
//     width: 10px;
//     height: 10px;
//     background-color: red;
//     margin-left: 480px;
//     margin-top: -30px;
// }
</style>
