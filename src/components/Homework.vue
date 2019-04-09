<template>
  <div id="#homeword">
    <div class="header">
    </div>
    <el-container style="height: 670px; border: 1px solid #eee">
      <el-aside width="200px"
                style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['6','4','5']">

          <el-submenu v-for="item in pageList"
                      :key="item.index"
                      :index="item.index">
            <template slot="title"><i :class='item.icons'></i>{{item.time}}</template>
            <el-menu-item-group>
              <el-menu-item v-for="cld in item.child"
                            :key="cld.index"
                            :index="cld.index"
                            v-on:click='Hw(cld.index)'>{{cld.value}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align:center;box-shadow:1px 1px 8px #ddd">
          <h3 style="line-height:60px">{{titleList[index-1]}}</h3>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: '',
      pageList: [
        {
          index: "1",
          icons: "el-icon-message",
          time: "2018-11-22",
          child: [
            {
              index: "1",
              value: "props传值"
            },
            {
              index: "2",
              value: "分页功能"
            },
            {
              index: "3",
              value: "条件查询"
            },
          ]
        },
        {
          index: "2",
          icons: "el-icon-menu",
          time: "2018-11-23",
          child: [
            {
              index: "4",
              value: "购物车功能"
            },
            {
              index: "5",
              value: "学生信息录入系统"
            }
          ]
        },
        {
          index: "3",
          icons: "el-icon-menu",
          time: "2018-11-24",
          child: [
            {
              index: "6",
              value: "ToDOList"
            },
            {
              index: "7",
              value: "聊天室"
            }
          ]
        },
        {
          index: "4",
          icons: "el-icon-menu",
          time: "2018-11-27",
          child: [
            {
              index: "8",
              value: "钩子函数触发换算"
            },
          ]
        },
        {
          index: "5",
          icons: "el-icon-menu",
          time: "2018-11-28",
          child: [
            {
              index: "9",
              value: "监听数据触发换算"
            },
          ]
        },
        {
          index: "6",
          icons: "el-icon-menu",
          time: "最后的作业",
          child: [
            {
              index: "10",
              value: "axios获取数据(豆瓣)"
            },
            {
              index: "11",
              value: "淘宝tab切换效果"
            },
            {
              index: "12",
              value: "命名视图tab切换"
            },
          ]
        }

      ],
      titleList: [],
      index: 0
    }

  },
  created() {
    for (let item of this.pageList) {
      for (let some of item.child) {
        this.titleList.push(some.value)
      }
    }
    this.index = this.$route.fullPath.slice(3)
  },
  updated() {
    this.index = this.$route.fullPath.slice(3);
  },
  methods: {
    Hw(num) {
      this.$router.push('/hw' + num)
    }
  }
}
</script>

<style scoped>
.header {
  height: 60px;
  width: 100%;
  text-align: center;
  background: #333;
}
.header > h1 {
  line-height: 80px;
  color: #fff;
}
</style>
