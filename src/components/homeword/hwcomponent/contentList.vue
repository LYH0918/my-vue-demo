<template>
  <div class="content"
       id="content">
    <div class="text">
      <div v-for="(item,i) in contentList[index]"
           :key="i">
        <h4>{{item.title}}</h4>
        <span v-for="(content,j) in item.content"
              :key="j">{{content}}</span>

      </div>
    </div>
    <div class="image">
      <h4>猜你喜欢</h4>
      <div class="pic"
           v-for="(item,i) in contentList[index]"
           :key="i">
        <div>
          <div>
            <p>{{item.image.url}}</p>
          </div>
          <p>{{item.image.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentList: []
    }

  },
  created() {
    this.createContent();
  },
  methods: {
    createContent() {
      let newList = []
      let nameList = []
      for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 3; j++) {
          newList.push({ title: `title-${i + 1}-${j + 1}`, content: [], image: { url: `图片-${i + 1}-${j + 1}`, title: `图片标题-${i + 1}-${j + 1}` } })
          for (let k = 0; k < 12; k++) {
            nameList.push(`商品-${i + 1}-${j + 1}-${k + 1}`)
          }
          newList[j].content = nameList;
          nameList = []
        }
        this.contentList[i] = newList;
        newList = [];
      }

    },
  },
  props: ["index"]
}
</script>

<style lang="less" scoped>
.content {
  margin-left: 10px;
  flex: 1;
  display: flex;
  justify-content: space-between;
  .text {
    width: 66%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      height: 33.3%;
      width: 100%;
      border-right: 1px #ccc solid;
      h4 {
        margin: 10px 6px 6px 6px;
      }

      span {
        padding: 6px 8px;
        display: inline-block;
        font-size: 14px;
      }
    }
  }
  .image {
    width: 34%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      flex: 1;
      color: #333;
      padding-bottom: 8px;
    }
    .pic {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 12px;
      height: 33.3%;
      width: 100%;
      div {
        width: 100%;
        height: 100%;
        padding: 0 20px;
        div {
          width: 100%;
          height: 80%;
          background: #999;
          margin-bottom: 4px;
          p {
            line-height: 120px;
            font-size: 14px;
          }
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
