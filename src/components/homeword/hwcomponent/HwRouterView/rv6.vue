<template>
  <div id="rv6">
    <el-table :data="tableData"
              border
              style="width: 100%">
      <el-table-column prop="title1"
                       label="军事热点标题1">
      </el-table-column>
      <el-table-column prop="title2"
                       label="军事热点标题2">
      </el-table-column>
      <el-table-column prop="title3"
                       label="军事热点标题3">
      </el-table-column>
      <el-table-column prop="title4"
                       label="军事热点标题4">
      </el-table-column>
      <el-table-column prop="title5"
                       label="军事热点标题5">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { Data6 } from '@/components/homeword/hwcomponent/HwRouterView/rvData'
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.tableData = Data6
  }
}
</script>

<style lang="less" scoped>
#rv6 {
  margin-top: 20px;
}
</style>
