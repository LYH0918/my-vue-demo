<template>
  <div id="demo">
    <div>{{aa}}</div>
    <div>{{isshow?"去登陆":"已登陆"}}</div>
    <div :class="className">{{bb}}</div>
    <div v-if="!hide">这是一个可隐藏和显示的文字</div>
    <el-button v-on:click="fun"
               type="primary">点击我</el-button>
    <label>{{une?"Username":"Email"}}</label><input type="text"
           :placeholder="une?'enter your username':'enter your E-mail'"><button v-on:click="change">Toggle login type</button><br>
    <label for="tb1"><input type="checkbox"
             v-model="checkList"
             value="哈哈哈"
             id="tb1">哈哈哈</label>
    <label for="tb2"><input type="checkbox"
             v-model="checkList"
             value="呵呵呵"
             id="tb2">呵呵呵</label>
    <label for="tb3"><input type="checkbox"
             v-model="checkList"
             value="嘻嘻嘻"
             id="tb3">嘻嘻嘻</label>
    <p>{{checkList}}</p>
    <br>
    <ul>
      <li v-for="item in msg"
          :key="item.id">{{item}}</li>
    </ul>
    <br>
    <A @rsd="resict"></A>
    <k :w="msg"></k>
    <input type="text"
           v-model="qq"
           id="qq"><br>
    <input type="text"
           v-model="uu"
           id="uu">

    <div style="width:100px;height:100px;border:1px red solid"
         slot="header"></div>
    <div slot="header">哈哈哈哈哈</div>
    <slot>
      <p>aaksjhdkjashdkjlahsdkljahsjdlkasjkdhakjlsdakjsdjask</p>
      <span>2</span>
      <span>3</span>
    </slot>
    <child>

      <template slot-scope="myslot"
                slot='list'>
        <p v-for="item in myslot.mydata"
           :key="item">{{item}}</p>
      </template>
    </child>
    <h1>{{count}}</h1>
    <button @click="click">click</button>
  </div>
</template>
<script>
import child from './HelloWorld'
import k from './homeword/hwcomponent/demo-child'
import { mapState } from 'vuex'
import Bus from "@/bus"
var A = {
  template: `
                <div>
                    <input v-model="msg"><button @click="senr">发送</button>
               </div>
            `,
  data() {
    return {
      msg: "这是子组件的消息！"
    }
  },
  mounted() {
    Bus.$on("myMsg", data => {
      console.log(data, ".........")
    })
  },
  methods: {
    senr: function () {
      this.$emit("rsd", this.msg)
    }
  }
}
export default {
  name: 'demo',
  data() {
    return {
      aa: '11',
      bb: 23,
      cc: [],
      dd: {},
      isshow: true,
      className: "myColor",
      hide: false,
      une: true,
      checkList: [],
      msg: [],
      qq: "",
      uu: ""
    }
  },
  created() { },
  mounted() {

  },

  updated() {
    this.zong()
  },
  methods: {
    click() {
      Bus.$emit("myMsg", this.hide);
    },
    square() {
      this.uu = parseInt(this.qq) * 2;
    },
    chu() {
      this.qq = parseInt(this.uu) / 2
    },
    zong() {
      var mm = document.getElementById("qq");
      var gg = document.getElementById("uu");
      mm.focus = this.square();
      gg.focus = this.chu();
      /*if(mm.focus){
          alert(1)
      }
      if(gg.focus){
          alert(2)
      }*/
    },
    fun() {

      this.hide = !this.hide;
    },
    change() {
      this.une = !this.une;
      console.log(this)
    },
    resict(msg) {
      this.msg.push(msg)
    }
  },
  components: {
    A,
    k,
    child
  },
  computed: mapState({
    count: "count"
  })
}
</script>
<style scoped>
.myColor {
  color: red;
}
</style>


