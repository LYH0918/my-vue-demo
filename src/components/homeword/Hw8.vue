<template>
  <div>
    <div class="container">
      <div class="label">
        <p>人日:</p>
      </div>
      <div class="inp">
        <el-input placeholder="请输入数字"
                  type="number"
                  id="day"
                  @input="inp"></el-input>
      </div>
    </div>
    <div class="container mt1">
      <div class="label">
        <p>人月:</p>
      </div>
      <div class="inp">
        <el-input placeholder="请输入数字"
                  type="number"
                  id="month"
                  v-model="myInp"></el-input>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      myInp: ""
    }
  },
  updated() {
    this.calc()
  },
  methods: {
    $(id) {
      return document.getElementById(id)
    },
    inp() {
      this.$("month").value = parseFloat(this.$("day").value) / 22.5;
    },
    calc() {
      this.$("day").value = parseInt(this.myInp) * 22.5;
    }
  }
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
