<template>
  <div id="rv5">
    <el-table :data="tableData"
              border
              style="width: 100%">
      <el-table-column prop="title1"
                       label="八卦娱乐标题1">
      </el-table-column>
      <el-table-column prop="title2"
                       label="八卦娱乐标题2">
      </el-table-column>
      <el-table-column prop="title3"
                       label="八卦娱乐标题3">
      </el-table-column>
      <el-table-column prop="title4"
                       label="八卦娱乐标题4">
      </el-table-column>
      <el-table-column prop="title5"
                       label="八卦娱乐标题5">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { Data5 } from '@/components/homeword/hwcomponent/HwRouterView/rvData'
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.tableData = Data5
  }
}
</script>

<style lang="less" scoped>
#rv5 {
  margin-top: 20px;
}
</style>
