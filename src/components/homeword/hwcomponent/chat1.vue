<template>
  <div id="chat1">
    <el-container style="width:300px; height:454px; border:1px #ccc solid;position:relative">
      <el-main style="width:100%"
               id="mi"
               ref="mi">
        <div class="slider"
             ref="slider">
          <div v-for="item in newList"
               :key="item.id"
               :class="item.cn"
               v-if="item.value"
               class="textItem">
            <p>{{item.value}}</p>
          </div>
        </div>
        <div class="chatBox">
          <div class="inp"
               v-on:keyup.enter="addData">
            <el-input v-model="mydata"></el-input>
          </div>
          <div class="btn">
            <el-button @click="addData">发送</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mydata: '',
      chatList: [],
      index: 0,
      mark: 1,
      myList: [],
      textHeight: 0,
      m: 0,
      t: 0
    }
  },
  mounted() {

  },
  updated() {
    var mi = this.$refs.mi.$el;
    mi.scrollTop = mi.scrollHeight + 40;
  },
  methods: {
    addData() {
      this.chatList.push(this.mydata);
      this.index = this.mark;
      this.$emit("push-otherlist", this.chatList)
    }
  },
  props: ["otherlist"],
  computed: {
    newList: function () {
      if (this.index === this.mark) {
        this.myList.push({ cn: "ccon-right", value: this.chatList[this.chatList.length - 1] });
        this.mark = this.index + 1;
        let a = this.otherlist.length
      } else {
        this.myList.push({ cn: "ccon-left", value: this.otherlist[this.otherlist.length - 1] });
        let a = this.chatList.length
      }
      this.wlist = this.myList
      return this.myList;
    }
  }
}
</script>

<style scoped>
.chatBox {
  width: 100%;
  height: 40px;
  background: #333;
  position: absolute;
  bottom: -36px;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.inp {
  width: 75%;
}
.btn {
  width: 20%;
}
.ccon-left {
  display: flex;
  justify-content: flex-start;
  margin: 10px 0;
}
.ccon-right {
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
}
.ccon-left > p {
  background: #eee;
  padding: 8px 16px;
  border-radius: 3px;
  max-width: 70%;
  line-height: 22px;
  font-size: 12px;
  word-wrap: break-word;
}
.ccon-right > p {
  background: yellowgreen;
  padding: 8px 16px;
  border-radius: 3px;
  max-width: 70%;
  line-height: 22px;
  font-size: 12px;
  word-wrap: break-word;
}
</style>
