<template>
    <div id="Hwc">
    <el-table style="width: 100%;margin-top:40px" :data="tableData" stripe>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
       <el-table-column prop="age" label="年龄" width="180"></el-table-column>
       <el-table-column prop="sex" label="性别" width="180"></el-table-column>
      <el-table-column prop="address" label="住址"></el-table-column>
    </el-table>
    </div>
</template>

<script>
export default {
  data(){
      return{
      }
  },
  created(){},
  props:["tableData"],
  methods:{

  }
}
</script>

<style scoped>

</style>
