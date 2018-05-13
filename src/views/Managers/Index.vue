<template>
    <div>
        <el-tabs>
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="企业名称" width="180">
            </el-table-column>
            <el-table-column prop="name" label="信用代码">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
            <el-table-column prop="address" label="法人">
            </el-table-column>
            <el-table-column prop="address" label="合同到期">
            </el-table-column>
            <el-table-column prop="address" label="电话">
            </el-table-column>
            <el-table-column label="详情" width="150">
                <template slot-scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button type="danger" size="small" @click="handleDelelte(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scope>

</style>
<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '北京阿达'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海北京阿达'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区'
      }]
    }
  },
  methods: {
    handleEdit () {},
    handleDelelte () {

    }
  }
}
</script>
