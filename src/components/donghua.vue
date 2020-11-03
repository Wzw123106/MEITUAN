<template>
<div id="niubi">
    <div class="wai">
        <div class="nei">
            <el-carousel :interval="4000" type="card" height="300px">
                <el-carousel-item v-for="item in sum" :key="item">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603875578364&di=e17b092168c471e276f254de9c586b80&imgtype=0&src=http%3A%2F%2Fimage.32yx.com%2Ffile%2Fuserfiles%2Fimages%2F2017073113574993303.jpg" alt="" class="nav">
                </el-carousel-item>
            </el-carousel>
        </div>

    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            sum: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603875516871&di=67083174abe495be4537efbc6347245c&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fa8014c086e061d958d4e933573f40ad162d9cab7.jpg",
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2805308878,3974282305&fm=26&gp=0.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603875578364&di=e17b092168c471e276f254de9c586b80&imgtype=0&src=http%3A%2F%2Fimage.32yx.com%2Ffile%2Fuserfiles%2Fimages%2F2017073113574993303.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603875601141&di=620a57921bb278bfae67cb88db509c7c&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb151f8198618367a8f92fd8e2f738bd4b31ce54e.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603875624533&di=4f2dc2ae8cf172239f4ac3d8657691a7&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F13%2F20150813095057_G3uVf.thumb.400_0.jpeg"
            ]
        }
    },
    methods: {

    },
}
</script>

<style lang="less">
.wai {
    width: 1400px;
    height: 1400px;
    background-color: black;
    position: relative;
}

.nei {
    position: absolute;
    width: 500px;
    height: 300px;
    // background-color: red;
    margin-left: 350px;
    margin-top: 150px;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.nav {
    width: 100%;
    height: 100%;
}
</style>
