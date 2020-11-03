<template>
<div id="app">
    <div class="navs">
        <!-- 头部-->
        <div class="headt">
            <ul class="nav">
                <li class="nav-a"><img src="../assets/1.png" alt="" width="15px" height="15px"></li>
                <li>{{this.value}}</li>

                <li class="nav-d">切换城市</li>

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
                <li class="z-s"><img src="../assets/2.png" alt="" class="imgs"></li>
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

        <!-- 城市开始-->
        <div class="cso">
            <div class="cso-din">
                <ul class="cso-a">
                    <li>
                        <ul class="cso-a-b">
                            <li class="sf">按省份选择:</li>
                            <li>
                                <!-- 省份-->
                                <select class="xl-a" v-model="sy" placeholder="请选择">
                                    <option v-for="(item,index) in hyy" :key="index" :value="index">{{item.provinceName}}</option>
                                </select>

                                <!--城市 -->
                                <el-select class="xl-a" v-model="value" placeholder="城市" :disabled="ss">
                                    <el-option v-for="(item,index) in cs" :key="index" :value="item.name">
                                        {{item.name}}
                                    </el-option>
                                </el-select>

                                <!-- 远程搜索-->
                                <span class="zjss-s">直接搜索:</span>
                                <el-select v-model="values" multiple filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
                                    <el-option v-for="item in options" :key="item" :lable="item" :value="item">
                                    </el-option>
                                </el-select>

                            </li>
                            <li>
                            </li>
                        </ul>
                    </li>
                    <!--热门城市 -->
                    <li>
                        <ul class=" cso-a-b">
                            <li>
                                热门城市:
                            </li>
                            <li v-for="(item,index) in recs" :key="'rm'+ index">
                                {{item.name}}
                            </li>
                        </ul>
                    </li>
                    <!--最近搜索 -->
                    <li>
                        <ul class="lisy">
                            <li>最近搜索:</li>
                            <li v-for="(item,index) in zjssa" :key="index">{{item}}</li>
                        </ul>
                    </li>
                </ul>
                <!-- 下面最烦的部分开始-->
                <div class="cso-fanss">
                    <span class="f-tou">按首字母选择:</span>
                    <ul class="f-a">
                        <li v-for="(item,index) in fsn" :key="index">{{item}}</li>
                    </ul>
                </div>
                <div class="csfl-zm">
                    <ul class="zm">
                        <!-- 数据目标 -->
                        <li v-for="(a,b) in fsn" :key="b">
                            <h3>{{a}}</h3>
                            <ul class="bl">
                                <li v-for="(item,index) in uio(a)" :key="index"><span>{{item}}</span></li>
                            </ul>
                        </li>
                        <div class="botons"></div>
                        <div class="botonst">
                            <img src="../assets/00.png" alt="" class="imgssz">
                            <img src="../assets/09.png" alt="" class="imgssz">
                        </div>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    // 数据区域
    data() {
        return {
            isShow: false,
            ssk: [],
            value: '',
            hyy: [],
            cs: [],
            recs: [],
            sy: 0,
            opk: "",
            ss: true,
            // 远程搜索
            options: [],
            values: [],
            loading: false,
            states: [],
            // 远程搜索自定义方法
            ycss: [],
            ycssx: [],
            ycssb: [],
            // 最近搜索城市
            zjss: [],
            zjssa: [],
            // 下面最烦的部分
            fsn: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "P", "Q", "S", "T", "W", "X", "Y", "Z"],
            // 城市分类开始
            csfl: [],
            csflA: [],
            csflB: [],

        }

    },
    // 远程方法
    mounted() {
        this.list = this.states.map(item => {
            return {
                value: `value:${item}`,
                label: `label:${item}`
            };
        });
    },
    // 方法区域
    methods: {
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
                })

        },
        // 聚焦移除事件
        blurfns: function () {
            this.isShow = false;
        },
        // 远程搜索
        remoteMethod(query) {
            if (query !== '') {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.options = this.states.filter(item => {
                        // return item.label.toLowerCase()
                        //     .indexOf(query.toLowerCase()) > -1;
                        return item.indexOf(query) !== -1

                    });
                }, 200);
            } else {
                this.options = [];
            }
        },

        // 直接触发事件
        uio(a) {
            return this.csfl.filter(function (res) {
                return res.firstChar == a
            }).map((item => {
                this.$store.state.chengshi = this.value;
                return item.name
            }))

        }

    },

    // 监听
    watch: {
        // 监听 value
        sy: function (val) {
            this.sy = val
            this.cs = this.hyy[this.sy].cityInfoList
            this.ss = false
            // console.log(this.sy)
            // console.log(this.cs)
            // 获取到索引值
        },
        // 最近搜索
        value: function (val) {
            this.zjssa.push(val)

        },
        // 远程搜索 value 值
        values: function (val) {
            for (var i = 0; i < val.length; i++) {
                this.zjssa.push(val[i])
            }

        }
    },

    // 异步数据任务
    created() {
        // 省份
        this.axios.get('http://open.duyiedu.com/api/meituan/city/province.json', {
                params: {
                    appkey: "hyy123_1589431078998"
                }
            })
            .then(res => {
                this.hyy = res.data.data
                this.ycss = res.data.data
                console.log(this.hyy)

                // 循环获取到的 省份列表 并添加到 ycssx 中
                for (var i = 0; i < this.ycss.length; i++) {
                    this.states.push(this.ycss[i].provinceName)

                }
                // 循环获取到的 省份列表下面的 cityInfoList 并添加到 ycssb中
                for (var i = 0; i < this.ycss.length; i++) {
                    this.ycssb.push(this.ycss[i].cityInfoList)

                }
                // // 循环省份列表下面的 cityInfoList 并添加到 states 中
                for (var i = 0; i < this.ycssb.length; i++) {
                    for (var a = 0; a < this.ycssb[i].length; a++) {
                        this.states.push(this.ycssb[i][a].name)
                        // 城市分类添加
                        this.csfl.push(this.ycssb[i][a])
                    }
                }

                // 城市分类

                // (城市分类筛选)
                // 筛选 A 类型
                // this.csflA = this.csfl.filter(function (res) {
                //     return res.firstChar == 'A'

                // })

            })

        // 最近搜索城市
        this.axios.get('http://open.duyiedu.com/api/meituan/city/recents.json', {
                params: {
                    appkey: "hyy123_1589431078998"
                }
            })
            .then(res => {
                this.zjss = res.data.data
                // console.log(this.zjss)
                for (var i = 0; i < this.zjss.length; i++) {
                    // console.log(this.zjss[i].name)
                    this.zjssa.push(this.zjss[i].name)
                    console.log(this.zjssa)
                }
            })
        // 热门城市
        this.axios.get('http://open.duyiedu.com/api/meituan/city/hot.json', {
                params: {
                    appkey: "hyy123_1589431078998"
                }
            })
            .then(res => {
                this.recs = res.data.data

            })
    },

}
</script>

<style lang="less">
.navs {
    width: 1190px;
    margin: 0 auto;
    background-color: white;

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

.csover {
    width: 100%;
    height: 600px;
    background-color: rgb(237, 237, 237);
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
    cursor: pointer;
    z-index: 999;
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

.k-b {
    z-index: 999;
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

.cso {
    width: 1200px;
    height: 300px;
    background: rgb(240, 240, 240);
    margin: auto;
    position: relative;
}

.cso .sf {
    margin-top: 40px;
}

.cso-din {
    width: 100%;
    height: 100%;
    background: red;
    position: absolute;
    top: 30px;
}

.cso>.cso-din>.cso-a>li {
    width: 100%;
    height: 100px;
    background-color: white;
    margin-bottom: 5px;
    margin: 0 auto;
    border-bottom: 2px solid rgb(240, 240, 240);
    border-left: 2px solid rgb(240, 240, 240);
    border-right: 2px solid rgb(240, 240, 240)
}

.cso-a-b>li {
    margin-top: 33px;
    float: left;
    margin-left: 30px;
    font-size: 17px;
    cursor: pointer
}

.xl-a {
    width: 150px;
    height: 40px;
    border: 2px solid rgb(240, 240, 240);
    border-radius: 5px;
    margin-right: 50px;
}

.zj {
    margin-right: 10px;
}

.xl-a-a {
    width: 170px;
    height: 35px;
    border: 1px solid rgb(240, 240, 240);
    border-radius: 5px;
    margin-right: 50px;
}

.zjss-s {
    margin-right: 10px;
}

.sapn {
    margin-left: 10px;
}

.lisy>li {
    margin-top: 30px;
    float: left;
    margin-left: 30px;
    cursor: pointer
}

.cso-fanss {
    width: 100%;
    height: 100px;
    // background-color: red;
    border-left: 2px solid rgb(240, 240, 240);
    border-right: 2px solid rgb(240, 240, 240);
    position: relative;
}

.f-a>li {
    width: 20px;
    height: 20px;
    float: left;
    margin-top: 30px;
    margin-right: 25px;
    font-size: 20px;
    cursor: pointer
}

.f-a>li:hover {
    background-color: rgb(231, 230, 230);
    border-radius: 10px;
}

.f-a {

    margin-left: 160px;
}

.cso-fanss .f-tou {
    position: absolute;
    top: 28px;
    left: 30px;
}

.csfl-zm {
    width: 100%;
    height: 300px;
    background-color: white;
    border-left: 2px solid rgb(240, 240, 240);
    border-right: 2px solid rgb(240, 240, 240);
}

.zm>li {
    width: 40px;
    height: 40px;
    background-color: rgb(255, 208, 0);
    margin-left: 0px;
    margin-bottom: 250px;
    border-radius: 20px;

}

.zm>li>h3 {
    line-height: 40px;
}

.zm ul {
    width: 1100px;
    // height: 160px;
    // background-color: red;
    margin-top: -60px;
    margin-left: 50px;
    display: inline-block;

}

.zm ul:hover {
    background-color: rgb(248, 248, 248);
}

.bl>li {
    width: 70px;
    height: 25px;
    float: left;
    // margin-top: -20px;
    margin-left: 30px;
    font-size: 15px;
    text-align: center;
    margin-bottom: 10px;
}

.zm span {
    // text-align: center;
    margin-left: 5px;
    // margin-bottom: 5px;
    font-size: 14px;
    cursor: pointer
}

.botons {
    width: 100%;
    height: 50px;
    background-color: rgb(248, 248, 248);
    border-top: 1px solid rgb(229, 229, 229);
    border-bottom: 1px solid rgb(229, 229, 229);
}

.botonst {
    width: 100%;
    background-color: red;
}

.imgssz {
    width: 100%;
    height: 100%;
    cursor: pointer
}
</style>
