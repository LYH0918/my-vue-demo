<template>
  <div id="rv4">
    <el-table :data="tableData"
              border
              style="width: 100%">
      <el-table-column prop="title1"
                       label="新闻头条标题1">
      </el-table-column>
      <el-table-column prop="title2"
                       label="新闻头条标题2">
      </el-table-column>
      <el-table-column prop="title3"
                       label="新闻头条标题3">
      </el-table-column>
      <el-table-column prop="title4"
                       label="新闻头条标题4">
      </el-table-column>
      <el-table-column prop="title5"
                       label="新闻头条标题5">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { Data4 } from '@/components/homeword/hwcomponent/HwRouterView/rvData'
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.tableData = Data4
    console.log(Data3)
  }
}
</script>

<style lang="less" scoped>
#rv4 {
  margin-top: 20px;
}
</style>
