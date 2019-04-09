<template>
  <div id="rv2">
    <el-table :data="tableData"
              border
              style="width: 100%">
      <el-table-column prop="title1"
                       label="电视剧标题1">
      </el-table-column>
      <el-table-column prop="title2"
                       label="电视剧标题2">
      </el-table-column>
      <el-table-column prop="title3"
                       label="电视剧标题3">
      </el-table-column>
      <el-table-column prop="title4"
                       label="电视剧标题4">
      </el-table-column>
      <el-table-column prop="title5"
                       label="电视剧标题5">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { Data2 } from '@/components/homeword/hwcomponent/HwRouterView/rvData'
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.tableData = Data2
  }
}
</script>

<style lang="less" scoped>
#rv2 {
  margin-top: 20px;
}
</style>
