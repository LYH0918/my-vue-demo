<template>
  <div>
    <el-container>
      <el-header class="header">
        <div class="header-top">
          <h2>豆瓣电影</h2>
          <div>
            <el-input placeholder="搜索电影、电视剧、综艺、影人"></el-input>
            <button class="el-icon-search"
                    size="mini"></button>
          </div>
        </div>
      </el-header>
    </el-container>
    <el-container>
      <header class="bh">
        <nav>
          <ul>
            <li v-for="item in navList"
                :key="item"><a href="#">{{item}}</a></li>
          </ul>
        </nav>
      </header>
    </el-container>
    <el-container>
      <section class="section f-j-sb">
        <div class="left">
          <header>
            <div class="f-j-sb mbx">
              <p>正在热映</p>
              <p>全部正在热映>></p>
              <p>即将上映>></p>
            </div>
          </header>
          <div id="carousel"
               v-loading="loading">
            <el-carousel :interval="5000"
                         arrow="always"
                         indicator-position="none"
                         height="330px">
              <el-carousel-item v-for="item in pickList"
                                :key="item.id"
                                class="f-j-sa">
                <div v-for="n in item"
                     :key="n.id"
                     class="item">
                  <div>
                    <img :src="'https://images.weserv.nl/?url='+n.images.large">
                  </div>
                  <p>{{n.title}}</p>

                  <el-rate :value="parseFloat((n.rating.average/2).toFixed(1))"
                           disabled
                           show-score
                           allow-half
                           text-color="#ff9900"
                           score-template="{value}"
                           style="margin-top:16px;heigth:50px;">
                  </el-rate>
                  <button>选座购票</button>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <header style="margin-top:24px">
            <div class="f-j-sb mbx">
              <p>最新热门电影</p>
            </div>
          </header>
          <div v-loading="loading">
            <el-carousel :interval="5000"
                         arrow="always"
                         indicator-position="none"
                         height="540px">
              <el-carousel-item v-for="item in pickList2"
                                :key="item.id"
                                class="f-j-sa"
                                style="flex-wrap:wrap">
                <div v-for="num in item"
                     :key="num.id"
                     class="item2">
                  <div>
                    <img :src="'https://images.weserv.nl/?url='+num.images.large">
                  </div>
                  <p>{{num.title}}</p>
                  <p style="font-size:13px;color:#F7BA2A;margin-top:6px"
                     v-if="num.rating.average">{{(num.rating.average/2).toFixed(1)}}</p>
                  <p style="font-size:12px;color:#F7BA2A;margin-top:6px"
                     v-else>暂无评分</p>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="right">
          <header>
            <p>豆瓣电影评分八问</p>
          </header>
          <div class="pic">
            <img src="../../../static/img/image.jpg">
          </div>
          <div class="list">
            <ul>
              <li>一周口碑榜</li>
              <li v-for="item in weekList"
                  :key="item"
                  style="font-size:13px;color:#3b98d1">{{item}}</li>
            </ul>
          </div>
        </div>
      </section>
    </el-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      navList: [
        "影讯&购票",
        "选电影",
        "电视剧",
        "排行榜",
        "分类",
        "影评",
        "2018年度榜单",
        "2018观影报告"
      ],
      movieList: [],
      page: 0,
      pickList: [],
      pickList2: [],
      weekList: [
        "无敌破坏王2：大闹互联网",
        "巴斯特·斯克鲁格斯的歌谣",
        "无名之辈",
        "冰淇淋与雨声",
        "我们,动物",
        "生活万岁",
        "黑色1847",
        "银行家的抵抗",
        "多甫拉托夫",
        "白小姐"
      ]
    }
  },
  created() {
    this.getData('/api/v2/movie/top250?count=24', 5, this.pickList)
    this.getData('/api/v2/movie/coming_soon?count=27', 10, this.pickList2)
  },
  methods: {

    getData(url, num, arr) {
      this.loading = true
      this.axios.get(url).then(res => {
        this.movieList = res.data.subjects
        //console.log(this.movieList)
        this.showData(num, arr)
        this.loading = false
      }
      ).catch(err => {
        console.log(err)
        this.loading = false      }
      )
    },

    //分配数组组成数组成员个数固定的新数组
    showData(num, arr) {
      var newList = [];
      var k = 0;
      var l = 0;
      var len = this.movieList.length;
      if (len % num === 0) {
        l = len / num
      } else {
        l = Math.floor(len / num) + 1;
      }
      for (var i = 0; i < len; i++) {
        for (var j = k + 1; j <= k * num + num; j++) {
          if ((j - 1) === i) {
            newList[(j - 1) % num] = this.movieList[i]
          }
        }
        if ((i + 1) % num === 0 || i === len - 1) {
          arr.push(newList);
          newList = [];
          k++;
        }
      }
    }

  }
}
</script>

<style scoped lang="less">
.header {
  width: 100%;
  height: 80px;
  background: #f0f3f5;
  border-bottom: 1px solid #ccc;
  min-width: 700px;
  .header-top {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    div {
      display: flex;
      flex-shrink: 0;
      width: 300px;

      button {
        margin-left: -30px;
        z-index: 111;
        width: 40px;
        padding: 0 10px;
        height: 32px;
        border: none;
        background: #8f98a1;
        color: #fff;
        border-radius: 0 3px 3px 0;
      }
    }
    h2 {
      color: #3b98d1;
    }
  }
}
.bh {
  width: 100%;
  height: 36px;
  background: #f0f3f5;
  border-bottom: 1px solid #ccc;
  nav {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    ul {
      margin-left: -50px;
      width: 70%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      li {
        &:hover {
          background: #3b98d1;
          a {
            color: #fff;
          }
        }
        a {
          text-decoration: none;
          color: #3b98d1;
        }
      }
    }
  }
}
.section {
  width: 90%;
  margin: 20px auto;
  .left {
    width: 70%;
    header {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #ccc;
    }
  }
  .right {
    width: 27%;
    margin-top: 10px;
  }
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.f-j-sb {
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  min-width: 80px;
}
.mbx {
  width: 240px;
  height: 100%;
  align-items: center;
  p {
    &:not(:first-child) {
      font-size: 12px;
      color: #3b98d1;
    }
  }
}
#carousel .el-carousel__item {
  border: 1px solid #ddd;
}

.f-j-sa {
  display: flex;
  flex-shrink: 0;
}
.item,
.item2 {
  width: 20%;
  height: 100%;
  padding: 0 10px;
  border-right: 1px solid #ddd;
  text-align: center;
  position: relative;

  div {
    width: 100%;
    height: 180px;
    overflow: hidden;
    img {
      width: 100%;
      margin-top: 16px;
    }
  }
  p {
    font-size: 14px;
    margin-top: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  button {
    width: 84%;
    padding: 8px;
    background: #268dcd;
    z-index: 1000;
    position: absolute;
    bottom: 24px;
    left: 8%;
    color: #fff;
    border: none;
    border-radius: 3px;
  }
}
.item2 {
  height: 250px;
  border: 1px solid #ddd;
  margin-top: 10px;
}
.right {
  text-align: center;
  header {
    width: 100%;
    height: 36px;
    background: #f0f3f5;
    p {
      line-height: 36px;
      color: #268dcd;
      font-size: 14px;
    }
  }
  .pic {
    width: 100%;
    margin-top: 16px;
    img {
      width: 100%;
    }
  }
  .list {
    margin-top: 16px;
    ul {
      list-style: none;
      li {
        height: 40px;
        border-bottom: 1px solid #ccc;
        text-align: left;
        line-height: 54px;
      }
    }
  }
}
</style>
<style>
#carousel .el-rate__icon {
  font-size: 13px;
}
</style>

