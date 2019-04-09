<template>
  <div id="rv1">
    <el-table :data="tableData"
              border
              style="width: 100%">
      <el-table-column prop="title1"
                       label="首页标题1">
      </el-table-column>
      <el-table-column prop="title2"
                       label="首页标题2">
      </el-table-column>
      <el-table-column prop="title3"
                       label="首页标题3">
      </el-table-column>
      <el-table-column prop="title4"
                       label="首页标题4">
      </el-table-column>
      <el-table-column prop="title5"
                       label="首页标题5">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { Data1 } from '@/components/homeword/hwcomponent/HwRouterView/rvData'
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.tableData = Data1
  }
}
</script>

<style lang="less" scoped>
#rv1 {
  margin-top: 20px;
}
</style>
