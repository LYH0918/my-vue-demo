<template>
  <div id="tab">
    <el-menu :default-active="activeIndex2"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
      <el-menu-item v-for="item in tabList"
                    :key="item.index"
                    :index="item.index">{{item.name}}</el-menu-item>
    </el-menu>
    <router-view :name="routerName"></router-view>
  </div>
</template>

<script>
import Bus from '@/bus'
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      tabList: [
        { index: '1', name: '首页' },
        { index: '2', name: '电视剧' },
        { index: '3', name: '最新电影' },
        { index: '4', name: '新闻头条' },
        { index: '5', name: '八卦娱乐' },
        { index: '6', name: '军事热点' }
      ],
      routerName: 'rv1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.routerName = 'rv' + key;
      Bus.$emit("tabList", 111)
    }
  }
}
</script>

<style lang="less" scoped>
#tab {
  border: 1px solid #545c64;
}
</style>
