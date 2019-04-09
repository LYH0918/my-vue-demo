<template>
  <div id="demo">
    <header>
      <input type="text"
             placeholder="请输入你的文字,按回车键添加"
             @keyup.enter="add">
    </header>
    <section id="ing">
      <div style="border-bottom:1px solid #ccc">
        <h1>正在进行:</h1>
        <div>
          <p>{{ingList.length}}</p>
        </div>
      </div>
      <div class="list"
           v-for="item in ingList"
           :key="item.id"
           :id="'d'+item.index">
        <div class="first"><input type="checkbox"
                 v-on:change="check"></div>
        <div class="second"><input type="text"
                 v-model="item.value"></div>
        <div class="third"
             v-on:click="delet">
          <p>X</p>
        </div>
      </div>
      <div style="border-bottom:1px solid #ccc;background:#ddd">
        <h1>已经完成:</h1>
        <div>
          <p>{{doneList.length}}</p>
        </div>
      </div>
      <div class="list2"
           v-for="item in doneList"
           :key="item.id"
           :id="'r'+item.index">
        <div class="first"
             style="background:#eee"><input type="checkbox"
                 checked
                 v-on:change="uncheck"></div>
        <div class="second"
             style="background:#eee"><input type="text"
                 v-model="item.value"
                 style="background:#eee"></div>
        <div class="third"
             v-on:click="delet">
          <p>X</p>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
export default {
  name: 'demo',
  data() {
    return {
      ing: 0,
      done: 0,
      ingList: [],
      doneList: [],
      index1: 0,
      index2: 0
    }
  },

  methods: {
    add(e) {
      this.ingList.push({ index: this.index1, value: e.target.value });
      this.index1++;
    },
    check(e) {
      if (e.target.checked) {
        var c = document.querySelectorAll(".list");
        var m = e.target.parentNode.parentNode
        var id = parseInt(m.id.slice(1))

        var newList = [];
        for (var item of this.ingList) {
          if (item.index != id) {
            newList.push(item)
          } else {
            this.doneList.push({ index: this.index2, value: item.value })
          }
        }
        this.ingList = newList;
        e.target.checked = false;
        this.index2++;
      }
    },
    delet(e) {
      var m = e.target.parentNode.parentNode
      var i = parseInt(m.id.slice(1));
      var newList3 = [];
      var newList2 = [];
      if (m.className == "list") {
        for (var item of this.ingList) {
          if (item.index != i) {
            newList3.push(item)
            console.log(item)
          }
        }
        this.ingList = newList3;
        console.log(this.ingList)
      }
      if (m.className == "list2") {
        for (var item of this.doneList) {
          if (item.index != i) {
            newList2.push(item)
          }
        }
        this.doneList = newList2;
      }
    },
    uncheck(e) {
      var i = parseInt(e.target.parentNode.parentNode.id.slice(1))
      var newList = [];
      for (var item of this.doneList) {
        if (item.index != i) {
          newList.push(item)
        } else {
          this.ingList.push({ index: this.index1, value: item.value })
        }
      }
      this.doneList = newList;
      e.target.checked = true;
      this.index1++;
    }
  }
}
</script>
<style scoped>
header {
  height: 60px;
  width: 100%;
  background: #999;
}
header > input {
  width: 300px;
  height: 36px;
  margin: 12px 0 0 60px;
}
button {
  height: 36px;
  padding: 0 10px;
  border: none;
}
footer {
  width: 100%;
  height: 120px;
  background: #eee;
}
section {
  background: #eee;
}
section > div,
.list,
.list2 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0 60px 0 60px;
}
section > div > div {
  height: 60px;
}
section > div > div > p {
  line-height: 60px;
  font-size: 24px;
}
section h1 {
  line-height: 60px;
}
.first,
.third {
  width: 30px;
  height: 100%;
  background: #fff;
}
.first > input {
  width: 20px;
  height: 20px;
  margin-top: 20px;
}
.second {
  width: 94%;
  height: 100%;
  background: #fff;
}

.second > input {
  width: 100%;
  height: 90%;
  border: none;
  outline: none;
  margin-top: 3px;
  font-size: 20px;
}
.list {
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.list2 {
  background: #eee;
  border-bottom: 1px solid #ccc;
}
.third {
  height: 20px;
  width: 20px;
  margin-top: 20px;
  border-radius: 50%;
  background: red;
  text-align: center;
}
.third > p {
  line-height: 20px;
  font-size: 12px;
  color: #fff;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>


