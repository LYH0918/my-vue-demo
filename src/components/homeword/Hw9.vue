<template>
  <div>
    <div class="container">
      <div class="label">
        <p>人民币:</p>
      </div>
      <div class="inp">
        <el-input placeholder="请输入数字"
                  type="number"
                  v-model="rmb"></el-input>
      </div>
    </div>

    <div class="container mt1">
      <div class="label">
        <p>汇率:</p>
      </div>
      <div class="inp">
        <el-input placeholder="请输入数字"
                  type="number"
                  v-model="scaled"></el-input>
      </div>

    </div>
    <div class="container mt1">

      <div class="label">
        <p>换算后:</p>
      </div>
      <div class="inp">
        <el-input placeholder="请输入数字"
                  type="number"
                  v-model="result"
                  @input="changeValue"></el-input>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      rmb: '',
      scaled: '',
      result: '',
      value: ''
    }
  },
  methods: {
    showValue() {
      alert(this.value)
    },
    changeValue() {
      this.rmb = this.result / this.scaled
    }
  },
  watch: {
    scaled: function (val) {
      this.result = val * this.rmb;
    },
    rmb: function (val) {
      this.result = val * this.scaled;
    }
  },

}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
}
.label {
  width: 5%;
  text-align: center;
}
.inp {
  width: 90%;
}
.mt1 {
  margin-top: 20px;
}
</style>
