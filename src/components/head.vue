<template>
<div id="head">
    <!-- 头部-->
    <div class="headt">
        <ul class="nav">
            <li class="nav-a"><img src="../assets/1.png" alt="" width="15px" height="15px"></li>
            <li>{{$store.state.chengshi}}</li>

            <li class="nav-d" @click="qiehuan">切换城市</li>

            <li class="nav-b">[廊坊 香河 霸州]</li>
        </ul>
        <ul class="oav">
            <li class="oav-o">
                网站导航
                <div class="dak">
                    <ul class="a">
                        <li class="a-a">
                            酒店旅游
                            <ul class="dak-s">
                                <li>国际机票</li>
                                <li>火车票</li>
                                <li>民宿</li>
                                <li>经济酒店</li>
                                <li>主题酒店</li>
                                <li>商务酒店</li>
                                <li>公寓</li>
                                <li>豪华酒店</li>
                                <li>客栈</li>
                                <li>青年旅社</li>
                                <li>度假酒店</li>
                                <li>别墅</li>
                                <li>农家院</li>
                            </ul>
                        </li>
                        <li class="a-b">
                            吃美食
                            <ul class="dak-s">
                                <li>烤鱼</li>
                                <li>特色小吃</li>
                                <li>烧烤</li>
                                <li>自助餐</li>
                                <li>火锅</li>
                                <li>代金卷</li>
                            </ul>
                        </li>
                        <li class="a-c">
                            看电影
                            <ul class="dak-s">
                                <li>热映电影</li>
                                <li>热门影院</li>
                                <li>热映电影口碑榜</li>
                                <li>最受期待电影</li>
                                <li>国内电影票房</li>
                                <li>北美电影票房</li>
                                <li>电影排行榜</li>
                            </ul>
                        </li>
                        <li class="a-d">
                            手机应用
                            <ul>
                                <li><img src="../assets/4.png" alt=""></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                商家中心
                <ol>
                    <li>美团餐饮商户中心</li>
                    <li>登录商家中心</li>
                    <li>美团智能收银</li>
                    <li>我想合作</li>
                    <li>手机免费开店</li>
                    <li>餐饮代理商招募</li>
                    <li>商家申请开票</li>
                    <li>免费合作美团排队</li>
                </ol>
            </li>
            <li>手机APP</li>
            <li>
                美团规则
                <ol>
                    <li>规则中心</li>
                    <li>规则目录</li>
                    <li>规则评议院</li>
                </ol>
            </li>
            <li>
                我的美团
                <ol>
                    <li>我的订单</li>
                    <li>我的收藏</li>
                    <li>抵用金</li>
                    <li>我的美团</li>
                </ol>
            </li>
        </ul>
    </div>
    <!-- 图片中间部分-->
    <div class="zhongbu">
        <ul>
            <li class="z-s"><img src="../assets/2.png" alt="" class="imgs" @click="donghua"></li>
            <li>
                <input type="text" name="ss" placeholder="搜索商家或地点" class="inpus" @focus="focusfns" @blur="blurfns">
                <div class="inputk" v-show="isShow">
                    <ul class="k-a">
                        <li>
                            <h5>最近搜索</h5>
                        </li>
                        <li class="zjsc">删除搜索历史</li>
                    </ul>
                    <ul class="k-b">
                        <li v-for="(item,index) in this.ssk" :key='"w"+index'>
                            {{item}}
                        </li>
                    </ul>
                </div>
            </li>
            <li class="ks">
                <img src="../assets/3.png" alt="" class="imga">
            </li>
        </ul>
    </div>
    <!-- 头部标题部分-->
    <div class="zhongbubiaoti">
        <ul class="biaoti">
            <li class="biaoti-a">美团外卖</li>
            <li class="biaoti-red">猫眼电影</li>
            <li class="biaoti-yellow">美团就带你</li>
            <li class="biaoti-red">民宿/公寓</li>
            <li class="biaoti-yellow">商家入驻</li>
            <li class="biaoti-red">美团公益</li>
        </ul>
    </div>
    <!-- 内容主题部分-->
    <div class="zhongjie">
        <div class="zhongjie-left">
            <h4>全部分类</h4>
            <ul>
                <li v-for="(item,index) in sum" :key="index" :index="index" @mouseover="ok(index)">
                    <!-- 循环列表-->
                    <!--<p class="wz">{{item.items[0].title}}</p>-->
                    <p class="wz">{{item.items[0].title}}</p>
                    <!-- 组件图标-->
                    <i class="el-icon-arrow-right"></i>
                </li>
            </ul>

            <ul v-for="(a,b) in tbs" :key="b">
                <li class="a-left">
                    <h1 :class="a"></h1>
                </li>
            </ul>

            <!-- 弹出框-->
            <div class="left-right">
                <ul>
                    <li v-for="(item,index) in data.items" :key="'a'+index">
                        <ul>
                            <li class="lh3">{{item.title}}</li>
                            <li class="gd">更多></li>
                        </ul>

                        <hr>
                        <ul class="zds">
                            <li v-for="(ele,ind) in item.items" :key="ind" class="zd">{{ele}}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div class="zhongjie-center">
            <ul>
                <li class="zhongjie-la">
                    <div class="block">
                        <el-carousel trigger="click" height="260px">
                            <el-carousel-item v-for="item in imgs" :key="item">
                                <img :src="item" width="100%" height="100%">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </li>

                <li class="zhongjie-lb">
                    <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" width="100%" height="100%">
                </li>
                <li class="zhongjie-lc">
                    <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" width="100%" height="100%">
                </li>
                <li class="zhongjie-ld">
                    <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt="" width="100%" height="100%">
                </li>
                <li class="zhongjie-le">
                    <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt="" width="100%" height="100%">
                </li>
            </ul>
        </div>

        <div class="zhongjie-right">
            <div class="z-top">
                <img :src="$store.state.kknb" alt="" class="z-top-src">
                <ul>
                    <li @click="jio">{{$store.state.zhuce}}</li>
                    <li @click="ljdl">{{$store.state.denglu}}</li>
                </ul>
            </div>
            <div class="z-botton">
                <img src="../assets/6.png" alt="" class="z-t">
            </div>
        </div>
    </div>

    <!-- 下方电影内容-->
    <div class="hdy">
        <h4>猫眼电影</h4>
        <ul>
            <li @mouseenter="xunhuan">正在热映</li>
            <li @mouseenter="xunhuant">即将上映</li>
        </ul>
        <div class="sanjiao" :style="niubia"></div>
        <div class="fivejg">
            <ul>
                <li v-for="(item,index) in jingyu" :key="index">
                    <img :src="item" alt="" class="dytt">
                </li>
            </ul>
        </div>
    </div>

    <!--民宿下方内容 -->
    <div class="ms">
        <h4>推荐民宿</h4>
        <ul>
            <li v-for="(item,index) in mszt" :key="index">
                {{item}}
                <div class="oooo"></div>
            </li>
        </ul>
        <div class="mingstp">
            <ul>
                <li v-for="(item,index) in mshj" :key="index">
                    <img :src=item alt="" class="mszp">
                    <p class="juny">【君桦】西城•粉红少女风★网红一居★临近西司夜市.....</p>
                    <p class="yijus">整套一居室.可住3人|星光天地</p>
                    <p class="qf"><span class="f">￥</span><span class="q">114</span></p>
                </li>
            </ul>
        </div>
    </div>

    <!--猜你喜欢 -->
    <div class="cnxh">
        <div class="xhbt">
            <ul>
                <li class="xh">猜你喜欢</li>
                <li class="hs">
                    为你甄选最合适的
                    <div class="jjjj"></div>
                </li>
            </ul>
        </div>
        <div class="xhxm">
            <ul>
                <li v-for="(item,index) in cnxhnba " :key="index">
                    <img :src=item.imgse>
                    <p>{{item.name}}</p>
                    <p class="did">{{item.title}}</p>
                    <p class="qs">{{item. money}}</p>
                </li>
            </ul>
        </div>
    </div>

    <!--美团导航 -->
    <div class="mtdh">
        <div class="dhks">
            <img src="../assets/000.png" alt="">
        </div>
        <div class="zuihouya">
            <img src="../assets/qq.png" alt="">
        </div>
        <div class="gsj">
            <img src="../assets/gsj.png" alt="">
        </div>
    </div>

</div>
</template>

<script>
export default {

    // 数据部分
    data() {
        return {
            imgs: ["https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
                "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
                "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
                "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
                "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg"
            ],
            sum: null,
            tbs: ["el-icon-tableware", "el-icon-dish", "el-icon-moon-night", ],
            oum: null,
            num: null,
            data: [],
            isShow: false,
            ssk: [],
            // 电影遍历
            dyks: ["//p1.meituan.net/moviemachine/5cbf9a626b7ed27c96ca3c748655b3ec2550103.jpg@321w_445h_1e_1c",
                "//p0.meituan.net/movie/202ea88abd2abf2aa1964487d61edab64556414.jpg@321w_445h_1e_1c",
                "//p0.meituan.net/movie/3b15b45b97c8b134e5b9cce8492231613207907.jpg@321w_445h_1e_1c",
                "//p0.meituan.net/movie/34ffd6e8f0119b362b5862521c296ecd5010552.jpg@321w_445h_1e_1c",
                "//p0.meituan.net/movie/35a2550fdf6ca5088087a685e9ec8c791613927.jpg@321w_445h_1e_1c"
            ],
            dykstwo: ["//p0.meituan.net/movie/34ffd6e8f0119b362b5862521c296ecd5010552.jpg@321w_445h_1e_1c",
                "//p0.meituan.net/movie/3b15b45b97c8b134e5b9cce8492231613207907.jpg@321w_445h_1e_1c",
                "//p0.meituan.net/movie/4681f4cd8e357d912146f30e04399a672482551.jpg@321w_445h_1e_1c",
                "//p0.meituan.net/movie/597d8f4adc9baef0f664399dff8b9341266241.jpg@321w_445h_1e_1c",
                "//p0.meituan.net/movie/d04d0bcd7894ce5a4b09594cb47679771695415.jpg@321w_445h_1e_1c"
            ],
            jingyu: [],
            niubio: {
                "margin-left": "190px"
            },
            niubia: {
                "margin-left": "120px"
            },
            niubib: {
                "margin-left": "120px"
            },
            // 民宿页面
            mszt: ["北京", "天津", "郑州", "青岛", "济南", "太原"],
            mshj: ["https://img.meituan.net/phoenix/d2e39b981ac06ed652af67a47c54eaf0417673.jpg@740w_416h_1e_1c",
                "https://img.meituan.net/phoenix/875e46afad2650acd3c31239f408d2703584586.jpg@740w_416h_1e_1c",
                "https://img.meituan.net/phoenix/967c4247c24771829cfa2728c8d08f6e1078015.jpg@740w_416h_1e_1c",
                "http://p0.meituan.net/iphoenix/d4c8d0b4235418ba413f5c04d58ca65a348493.jpg@740w_416h_1e_1c",
                "https://img.meituan.net/phoenix/a039263d17d9026480429eedd04f7ff82954342.jpg@740w_416h_1e_1c",
                "https://img.meituan.net/phoenix/f8b41e300a37a2450fef56689ed0769d861371.jpg@740w_416h_1e_1c"
            ],

            // 猜你喜欢页面
            cnxhnba: [{
                    name: "乐客士",
                    title: "阿尔卡迪亚",
                    money: "￥8.1起",
                    imgse: "//p0.meituan.net/msmerchant/081affa531f5e00ef2938af65f73f858552407.jpg@321w_180h_1e_1c"
                },
                {
                    name: "玛丽娜铁板牛排",
                    title: "阿尔卡迪亚",
                    money: "￥78.0起",
                    imgse: "//p1.meituan.net/msmerchant/a0ee40d3171a8cf21f4ab424b48f96ff42028.jpg@321w_180h_1e_1c"
                },
                {
                    name: "简记老北京果木烤鸭",
                    title: "兴华西路",
                    money: "￥37.9起",
                    imgse: "//p0.meituan.net/msmerchant/1bb2f1743d0329d76cf0c01d814071bd119793.jpg@321w_180h_1e_1c"
                },
                {
                    name: "8点半西饼屋（闸口店）",
                    title: "闸口",
                    money: "￥39.9起",
                    imgse: "//p0.meituan.net/mogu/f814ab088a5f5d28f48b111d62085fec193706.jpg@321w_180h_1e_1c"
                },
                {
                    name: "榴莲王子（新东方广场店）",
                    title: "新东方广场",
                    money: "￥8.9起",
                    imgse: "//p0.meituan.net/mogu/ca073f811d5ec7f839ed2815c32a90ea23614.jpg@321w_180h_1e_1c"
                },
                {
                    name: "瑞昌西饼屋（华山路店）",
                    title: "大转盘",
                    money: "￥14.8起",
                    imgse: "//p0.meituan.net/deal/__40880551__8483623.jpg@321w_180h_1e_1c"
                },
                {
                    name: "渔公渔婆",
                    title: "兴华西路",
                    money: "￥49.9起",
                    imgse: "//p0.meituan.net/mogu/0db64f51b7cb7daffa57fcc1a64f9820508774.jpg@321w_180h_1e_1c"
                },
                {
                    name: "牧羊花火锅餐厅（闸口店）",
                    title: "闸口",
                    money: "￥85.0起",
                    imgse: "//p0.meituan.net/mogu/b9547369c82d4ed7cb697d5de5dd1e2967830.jpg@321w_180h_1e_1c"
                },
                {
                    name: "陈记板栗酥饼",
                    title: "综合楼",
                    money: "￥1.1起",
                    imgse: "//p1.meituan.net/deal/c53d481443960a72a921a93b84706a17112563.jpg@321w_180h_1e_1c"
                },
                {
                    name: "渔和猫叔米线",
                    title: "新东方广场",
                    money: "￥11.8起",
                    imgse: "//p1.meituan.net/mogu/bd72ef34e8566c7954a615a5b9babaf839047.jpg@321w_180h_1e_1c"
                },
            ]

        }
    },
    // 事件处理部分
    methods: {
        // 遍历所有的索引值
        ok: function (index) {
            this.data = this.sum[index]
            this.oum = index
        },
        // 切换城市
        qiehuan: function () {
            this.$router.push({
                path: "/chenshi"
            })
            console.log(this)
        },
        // 搜索框
        focusfns: function () {
            this.isShow = !this.isShow
            this.axios.get('http://open.duyiedu.com//api/meituan/header/search.json', {
                    params: {
                        appkey: 'hyy123_1589431078998'
                    }
                })
                .then(res => {
                    // console.log(res)
                    this.ssk = res.data.data.list
                    console.log(this.ssk)
                })

        },
        blurfns: function () {
            this.isShow = false;
        },
        jio: function () {
            this.$router.push({
                path: "/zhuce"
            })
        },
        ljdl: function () {
            this.$router.push({
                path: '/denglu'
            })
        },
        donghua: function () {
            this.$router.push({
                path: 'donghua'
            })
        },
        // 鼠标循环事件
        xunhuan: function () {
            this.jingyu = this.dyks
            this.niubia = this.niubib
        },
        xunhuant: function () {
            this.jingyu = this.dykstwo
            this.niubia = this.niubio
        },

    },
    // methods: {
    created() {
        // ok: function () {
        this.axios.get('http://open.duyiedu.com/api/meituan/index/nav.json', {
                params: {
                    appkey: "hyy123_1589431078998"
                }
            })
            .then(res => {
                this.sum = res.data.data
                console.log(this.sum)
                this.jingyu = this.dyks
            })
        // }

    },
}
</script>

<style lang="less">
#head {
    width: 1190px;
    margin: 0 auto;
    background: white;
}

.headt {
    width: 100%;
    height: 40px;
    background-color: rgb(248, 248, 248);
    // background-color: red;
    font-size: 8px;
    cursor: pointer;
    // overflow: hidden;
    position: relative;
    z-index: 9999
}

.nav {
    margin-left: 20px;
}

.nav li {
    padding-top: 12px;
    float: left;
    margin-right: 10px;
    font-size: 15px;
}

.headt .nav-a {
    margin-right: 0px;
}

.headt .nav-b {
    color: rgb(165, 153, 178);
    margin-right: 30px;
}

.headt .nav-b:hover,
.nav-e:hover,
.nav-d:hover {
    color: rgb(254, 140, 0);
}

.headt .nav-c {
    color: rgb(254, 140, 0);
}

.oav>li {
    width: 60px;
    padding-top: 12px;
    float: right;
    margin-right: 30px;
    color: rgb(153, 153, 153);
    font-size: 10px;
    border: 2px solid rgb(248, 248, 248);
    border-top: 0px;
    background-color: rgb(252, 250, 250);
}

.oav>li:hover>ol {
    display: block;
    color: rgb(206, 200, 200);
}

.oav>li:hover {
    color: rgb(254, 140, 0);
}

.oav>.oav-o:hover>.dak {
    color: black;
}

ol>li:hover {
    color: rgb(254, 140, 0);
}

ol>li {
    color: rgb(153, 153, 153);
    margin-bottom: 8px;
    margin-top: 10px;
}

ol {
    display: none;
}

.oav>.oav-o:hover>.dak {
    display: block;
}

.dak {
    width: 100%;
    height: 300px;
    border: 3px solid rgb(248, 248, 248);
    box-shadow: 100px;
    border-top: 0px;
    background-color: white;
    cursor: pointer;
    display: none;
    position: absolute;
    left: 0px;
}

.dak>.a>li {
    float: left;
}

.dak .a-a {
    width: 20%;
    margin-left: 60px;
    margin-top: 30px;
}

.a-a li {
    float: left;
    margin-left: 10px;
    margin-top: 20px;
    font-size: 13px;
}

.dak .a-b {
    width: 15%;
    margin-left: 70px;
    margin-top: 30px;
}

.a-b li {
    float: left;
    margin-left: 10px;
    margin-top: 40px;
    font-size: 13px;
}

.dak .a-c {
    width: 15%;
    margin-left: 60px;
    margin-top: 30px;
}

.a-c li {
    margin-left: 10px;
    font-size: 13px;
    margin-top: 10px;
}

.dak .a-d {
    width: 15%;
    margin-left: 90px;
    margin-top: 30px;
}

.a-d img {
    width: 300px;
    height: 70px;
    margin-top: 30px;
    margin-right: 20px;
}

.dak .dak-s>li:hover {
    color: rgb(254, 140, 0);
}

// ------------------------------------------------------------------

.zhongbu {
    width: 100%;
    height: 135px;
    border: 1px solid rgb(248, 248, 248);
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    position: relative;
    // overflow: hidden;
}

.imgs {
    width: 200px;
    height: 100px;
    margin-top: 20px;
    margin-right: 130px;

    cursor: pointer;
}

.z-s {
    width: 300px;
    height: 200px;
    // background-color: red;
    position: absolute;
    top: 0px;
}

.inpus {
    width: 400px;
    height: 40px;
    position: absolute;
    top: 50px;
    left: 400px;
    border-radius: 5px 0px 0px 5px;
    font-size: 15px;
    border: 1px solid rgb(221, 220, 220);
}

.ks {
    width: 60px;
    height: 42px;
    background-color: rgb(255, 195, 0);
    position: absolute;
    top: 50px;
    left: 800px;
    border-radius: 0px 5px 5px 0px;
    cursor: pointer
}

.imga {
    width: 19px;
    height: 19px;
    margin-top: 11px;

}

// #head .biaoti {}

.zhongbubiaoti>.biaoti>li {
    margin-top: 0px;
    margin-left: 30px;
    float: left;
    font-weight: 600;
    cursor: pointer;
}

.zhongbubiaoti>.biaoti>.biaoti-a {
    margin-left: 400px;
}

.zhongbubiaoti .biaoti-red:hover {
    color: red;
}

.zhongbubiaoti .biaoti-yellow:hover {
    color: rgb(255, 195, 0);
}

.zhongbubiaoti .biaoti-a:hover {
    color: rgb(255, 195, 0);
}

// -------------------------------------------------------------------------------------
.zhongjie {
    width: 100%;
    height: 400px;
    background: rgb(248, 248, 248);
    margin-top: 40px;
    position: relative;
    padding-bottom: 50px;
}

.zhongjie>div {
    float: left;
    // margin-right: 10px;
}

.zhongjie-left {
    // width: 25%;
    width: 23%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    margin-right: 13px;
    // position: relative;
    border: 1px solid rgb(229, 229, 229);

}

.zhongjie-left:hover>.left-right {
    display: block;
}

.zhongjie-center {
    width: 53.5%;
    // width: 73%;
    height: 100%;
    background-color: rgb(236, 236, 236);
    // margin-right: 30px;
}

.zhongjie-center li {
    float: left;
}

.zhongjie-right {
    width: 21.5%;
    height: 100%;
    position: absolute;
    right: 0px;

}

.zhongjie-center .zhongjie-la {
    width: 458px;
    height: 230px;
    background-color: palevioletred;
    margin-bottom: 5px;
}

.zhongjie-center .zhongjie-lb {
    width: 170px;
    height: 260px;
    background-color: cornflowerblue;
    margin-left: 7px;
}

.zhongjie-center .zhongjie-lc {
    width: 225px;
    height: 135px;
    background-color: deeppink;
    margin-right: 5px;
    margin-top: 5px;
}

.zhongjie-center .zhongjie-ld {
    width: 229px;
    height: 135px;
    background-color: rgb(88, 53, 72);
    margin-top: 5px;
}

.zhongjie-center .zhongjie-le {
    width: 170px;
    height: 135px;
    background-color: rgb(53, 69, 88);
    margin-left: 7px;
    margin-top: 5px;
}

.zhongjie-center li {
    cursor: pointer
}

// 轮播组件
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

//   --------------

.zhongjie-left>ul>li {
    width: 98%;
    height: 30px;
    margin-bottom: 10px;
    line-height: 30px;
    cursor: pointer;
    position: relative;
}

.zhongjie-left>ul>li:hover {
    background-color: rgb(255, 247, 235);
}

.zhongjie-left>ul>li:hover .left-right {
    display: block;
}

.zhongjie-left>ul>li>p {
    margin-right: 140px;
}

.zhongjie-left>h4 {
    margin-bottom: 30px;
    margin-top: 20px;
    margin-right: 160px;
}

.el-icon-arrow-right {
    position: absolute;
    z-index: 999;
    top: 8px;
    right: 0px;
}

.wybz>li {
    z-index: 999;

}

.zhongjie-left .a-left {
    width: 0px;
    height: 0px;
    background: white;
    margin-bottom: 1px;
    margin-top: -39px;
    font-size: 10px;
    margin-left: 10px;
}

// 弹出页面
.left-right {
    width: 300px;
    height: 330px;
    background-color: rgb(255, 255, 255);
    position: absolute;
    top: 71px;
    left: 274px;
    z-index: 999;
    // // overflow: hidden;
    display: none;
    border-left: 1px solid rgb(229, 229, 229);
}

.lh3 {
    float: left;
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 83px;
    margin-bottom: 10px;
    font-weight: 900;
}

hr {
    width: 260px;
    background-color: rgb(299, 299, 299);
}

.gd {
    position: absolute;
    top: 33px;
    right: 30px;
    font-size: 12px;
    color: rgb(159, 161, 159);
    cursor: pointer
}

.zds>.zd {
    float: left;
    cursor: pointer
}

.zd {
    margin-left: 20px;
    margin-bottom: 10px;
    color: rgb(159, 161, 159);
    font-size: 13px;
}

.z-top {
    width: 100%;
    height: 50%;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(229, 229, 229);
    margin-bottom: 4%;
}

.z-top>ul>li {
    width: 90px;
    height: 30px;
    background-color: rgb(255, 255, 255);
    margin-left: 80px;
    border: 1px solid rgb(159, 161, 159);
    margin-top: 20px;
    border-radius: 15px;
    line-height: 30px;
    cursor: pointer
}

.z-top>ul>li:hover {
    background-color: rgb(246, 246, 246);
}

.z-top-src {
    width: 125px;
    height: 100px;
    margin-top: 10px;
}

.z-botton {
    width: 100%;
    height: 36%;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(229, 229, 229);
}

.z-t {
    width: 130px;
    height: 120px;
    margin-top: 20px;
}

.inputk {
    position: absolute;
    width: 400px;
    height: 70px;
    background-color: white;
    top: 91px;
    left: 400px;
    border: 1.5px solid rgb(229, 229, 229);
    box-shadow: 0 3px 3px rgb(229, 229, 229);
    cursor: pointer
}

.inputk>.k-a>li {
    float: left;
    margin-top: 10px;
    color: rgb(#999999);
}

.zhongbu .zjsc {
    margin-left: 260px;
    font-size: 13px;
    color: rgb(153, 166, 196);
    cursor: pointer
}

.k-b>li {
    float: left;
    font-size: 13px;
    margin-right: 8px;
    margin-top: 10px;
    margin-left: 3px;
    color: rgb(102, 102, 102);
}

.k-b>li:hover {
    color: rgb(255, 195, 0);
}

.hdy {
    width: 100%;
    height: 50px;
    background-color: rgb(252, 64, 95);
    border-radius: 7px 5px 0px 0px;
    text-align: left;

}

.hdy>h4 {
    line-height: 50px;
    margin-left: 20px;
    font-size: 17px;
    color: white;
}

.hdy li {
    float: left;
    margin-right: 10px;
    color: white;
    font-size: 15px;
    cursor: pointer;
}

.hdy>ul {
    margin-left: 100px;
    margin-top: -35px;
}

.sanjiao {
    width: 0;
    height: 0;
    border: 10px solid transparent; //所有border都是透明的，
    border-bottom-color: white; //只有尖相对的方向border有颜色
    margin-left: 120px;
    // margin-left: 190px;
    margin-top: 15px;
    cursor: pointer
}

.fivejg {
    width: 100%;
    background-color: red;
}

.fivejg>ul {
    margin-top: 2px;
}

.fivejg li {
    width: 19.1%;
    height: 300px;
    background-color: gold;

}

.fivejg img {
    border-radius: 5px;
}

.dytt {
    width: 100%;
    height: 100%;
}

.ms {
    width: 100%;
    height: 60px;
    background-color: rgb(243, 191, 71);
    border-radius: 8px 8px 0px 0px;
    margin-top: 330px;
    cursor: pointer
}

.ms>h4 {
    text-align: left;
    line-height: 60px;
    margin-left: 20px;
    color: white;
    font-size: 17px;
}

.ms>ul {
    margin-top: -40px;
    margin-left: 120px;
}

.ms>ul>li {
    float: left;
    margin-right: 10px;
    color: white;
}

.oooo {
    width: 0;
    height: 0;
    border: 10px solid transparent; //所有border都是透明的，
    border-bottom-color: white; //只有尖相对的方向border有颜色
    margin-left: 8px;
    // margin-left: 190px;
    margin-top: 0px;
    display: none;
    cursor: pointer;
}

.ms>ul>li:hover>.oooo {
    display: block;
}

.mingstp {
    width: 100%;
    height: 700px;
    // background-color: red;
    margin-top: 50px;
    border: 1px solid rgb(229, 229, 229);
    border-top: 0px;
}

.mingstp li {
    width: 30%;
    height: 250px;
    background-color: gold;
    float: left;
    margin-left: 30px;
    margin-bottom: 100px;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.mszp {
    width: 100%;
    height: 100%;
}

.juny {
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 5px;
}

.yijus {
    font-size: 13px;
    text-align: left;
    margin-left: 5px;
    margin-bottom: 5px;
}

.qf {
    text-align: left;
}

.q {
    font-size: 22px;
    color: #FF6600;
}

.f {
    color: #FF6600;
}

.cnxh {
    width: 100%;
    height: 600px;
    background-color: rgb(248, 248, 248);
    // overflow: hidden;
    margin-top: 712px;
    position: relative;
    cursor: pointer;
}

.xhbt {
    position: absolute;
    width: 100%;
    height: 50px;
    background-color: rgb(83, 178, 217);
    margin-top: 50px;
    border-radius: 5px 5px 0px 0px;
}

.xhbt li {
    float: left;
    margin-left: 20px;
    line-height: 50px;
}

.xh {
    font-size: 18px;
    color: white;
}

.hs {
    font-size: 15px;
    color: white;
}

.jjjj {
    width: 0;
    height: 0;
    border: 10px solid transparent; //所有border都是透明的，
    border-bottom-color: white; //只有尖相对的方向border有颜色
    margin-left: 45px;
    // margin-left: 190px;
    margin-top: -20px;
    cursor: pointer
}

.oav {
    margin-top: -40px;
}

.xhxm {
    width: 100%;
    height: 550px;
    position: absolute;
    top: 130px;
    border-left: 1px solid #E5E5E5;
    border-right: 1px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;
    z-index: 999;
}

.xhxm>ul>li {
    width: 18%;
    height: 240px;
    float: left;
    margin-right: 23px;
    margin-bottom: 20px;
    z-index: 999;
}

.xhxm>ul>li:hover {
    background-color: #dfdddd;
    border-radius: 8px;
}

.xhxm img {
    width: 180px;
    height: 120px;
    border-radius: 8px;
    margin-top: 5px;
}

.xhxm p {
    text-align: left;
    margin-left: 16px;
    margin-top: 5px;
}

.did {
    color: #999999;
    font-size: 15px;
    margin-bottom: 20px;
}

.qs {
    color: #FF6600;
    font-size: 20px;
}

.mtdh {
    width: 100%;
    height: 300px;
    background-color: #f8f8f8;
    //     margin-top: 50px;
    position: relative;

}

.dhks {
    width: 100%;
    height: 260px;
    // background-color: red;
    position: absolute;
    top: 130px;
    border: 1px solid #E5E5E5;
}

.dhks>img {
    width: 100%;
    height: 100%;
    cursor: pointer
}

.zuihouya {
    width: 100%;
    height: 550px;
    // background-color: red;
    position: absolute;
    top: 440px;
    border: 1px solid #E5E5E5;
}

.zuihouya>img {
    width: 100%;
    height: 100%;
}

.gsj {
    width: 100%;
    height: 120px;
    background-color: green;
    position: absolute;
    top: 990px;
}

.gsj>img {
    width: 100%;
    height: 100%;
}
</style>
