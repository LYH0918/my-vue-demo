<template>
  <div id="rv3">
    <el-table :data="tableData"
              border
              style="width: 100%">
      <el-table-column prop="title1"
                       label="最新电影标题1">
      </el-table-column>
      <el-table-column prop="title2"
                       label="最新电影标题2">
      </el-table-column>
      <el-table-column prop="title3"
                       label="最新电影标题3">
      </el-table-column>
      <el-table-column prop="title4"
                       label="最新电影标题4">
      </el-table-column>
      <el-table-column prop="title5"
                       label="最新电影标题5">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { Data3 } from '@/components/homeword/hwcomponent/HwRouterView/rvData'
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.tableData = Data3
  }
}
</script>

<style lang="less" scoped>
#rv3 {
  margin-top: 20px;
}
</style>
