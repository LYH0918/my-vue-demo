<template>
  <div>
    <div class="container"
         @mouseleave="hide">
      <div class="tab">
        <ul>
          <li v-for="(item,index) in tabList"
              :key="index"
              @mouseover="sendIndex(index)"><span v-for="(n,i) in item.name"
                  :key="i">{{n}} <span v-if="i!==2">/</span></span>
          </li>
        </ul>
      </div>
      <con :index="index"
           v-show="isShow"></con>
    </div>

  </div>
</template>

<script>
import con from './hwcomponent/contentList'
export default {
  data() {
    return {
      tabList: [],
      contentList: [],
      index: 0,
      isShow: false
    }
  },
  created() {
    this.createTab()
  },
  methods: {
    createTab() {
      var newList = []
      var obj = {}
      for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 3; j++) {
          newList.push(`导航${i + 1}-${j + 1}`)
        }
        obj.index = i
        obj.name = newList
        this.tabList[i] = obj
        obj = {}
        newList = []
      }
    },
    sendIndex(index) {
      this.index = index;
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    },
    show() {
      this.isShow = true;
    }
  },
  components: {
    con
  }
}
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  width: 100%;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;

  .tab {
    ul {
      list-style: none;
      li {
        padding: 12px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        font-size: 12px;
        &:hover {
          background: #fff0e8;
        }
        &::after {
          content: "";
          display: block;
          width: 8px;
          height: 8px;
          transform: rotate(45deg);
          border-top: 1px solid #ccc;
          border-right: 1px solid #ccc;
          margin-left: 6px;
        }
        span {
          &:hover {
            //border-bottom: 1px solid #ff7100;
            color: #ff7100;
          }
        }
      }
    }
  }
}
</style>
