<template>
  <div id="uuuuu">
    <!-- 日<input type="number"
           value="0"
           id="ri"
           @input="inp">
    月<input type="number"
           id="yue"
           v-model="inp2"> -->
    <el-carousel :interval="5000"
                 arrow="always"
                 indicator-position="none"
                 ref="r1">
      <el-carousel-item v-for="item in 4"
                        :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <h1>{{count}}</h1>
    <button @click="creatment">click</button>
    <button @click="myFun">click</button>
    <br>
    <input type="number"
           :value="count"
           @input="cag">
    <ul>
      <li v-for="item in myName"
          :key="item">
        {{item}}
      </li>
    </ul>
    <h1>{{modultA}}</h1>
    <h1>{{mag}}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
//import { store } from '../store'
import axios from "../http/http";
import Bus from "@/bus"
export default {
  data() {
    return {
      inp2: "",
    }
  },
  created() {
    this.getData();
  },
  mounted() {
    // console.log(this.$store)
    console.log(Bus.$on('myMsg', data => { if (data) console.log(data, "//////////") }))
  },
  updated() {
    //this.calc();


  },
  methods: {
    $(id) {
      return document.getElementById(id)
    },
    // inp() {
    //   this.$("yue").value = parseFloat(this.$("ri").value) / 22.5;
    // },
    // calc() {
    //   this.$("ri").value = parseInt(this.inp2) * 22.5;
    // },
    getData() {
      var url = 'api/v2/movie/top250';
      this.axios.get(url).then(res => { }
        //console.log(res)
      )
    },
    creatment() {
      this.$store.commit("creatment")
    },
    myFun() {
      this.$store.dispatch("myfun")
    },
    cag(e) {
      this.$store.commit('cag', e.target.value)
    },
    showValue(e) {
      alert(e.target.value)
      //console.log(this.inp2)
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    myName() {
      return this.$store.getters.myName;
    },
    modultA() {
      return this.$store.state.a.count
    },
    mag() {
      return this.$store.state.a.count
    }
  }


}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
