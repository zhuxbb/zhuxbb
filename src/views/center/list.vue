<template>
  <div class="page">
    <div class="page-head">
      <div class='fn-left'>
        <span class="t-bold t-16">系统监控</span>
      </div>
      <div class='fn-right'>
        <el-button plain type="primary" @click='$router.push("./form")' size='medium' icon='el-icon-circle-plus-outline'>新建技能组</el-button>
        <el-button plain type="primary" size='medium' icon='el-icon-download'>导出表格</el-button>
        <el-button plain type="primary" size='medium' :disabled="true" icon='el-icon-refresh'>同步坐席</el-button>
        <el-button plain type="primary" size='medium' icon='el-icon-edit-outline'>批量修改</el-button>
        <el-button plain type="primary" size='medium' @click='doRemove' icon='el-icon-delete'>删除</el-button>
        <el-button plain type="primary" size='medium'>
          <i class='el-icon- iconfont icon-refresh'></i>
          <span>刷新</span>
        </el-button>
      </div>
    </div>
    <div class="page-filter">
      <div class="fn-left">
        <el-form :inline="true">
          <el-form-item>
            <el-input size="small" placeholder="主叫号码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input size="small" placeholder="被叫号码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-select size="small" v-model='params.select1' placeholder="全部收听状态">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select size="small" v-model='params.select2' placeholder="全部下载状态">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <template v-if='filterExpand'>
            <br>
            <el-form-item>
              <el-time-select
                v-model='params.time'
                style='width:200px'
                size="small"
                :picker-options="{
                  start: '00:00',
                  step: '00:05',
                  end: '02:00'
                }"
                placeholder="通话时长">
              </el-time-select>
            </el-form-item>
            <el-form-item>
              <el-date-picker
                v-model='params.date'
                style='width:200px'
                type="date"
                size="small"
                placeholder="起止时间">
              </el-date-picker>
            </el-form-item>
          </template>
          <el-form-item>
            <el-button size="mini" class='v-center' style='padding: 8px 15px;' type="primary" icon='el-icon-search' @click="onSubmit">搜 索</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="fn-right">
          <el-button type='text' @click='filterExpand=!filterExpand'>
            <i :class='{"anima-rotate":filterExpand}' class='anima el-icon-arrow-down'></i>
            <span>高级搜索</span>
          </el-button>
      </div>
    </div>
    <div class="page-body">
      <el-table
        :data="rows"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-table size='mini' style='width:300px;' border :data="[{name:'张晶晶',id:'100221'},{name:'张日日',id:'100222'}]">
              <el-table-column label="坐席名称" prop="name"></el-table-column>
              <el-table-column label="坐席工号" prop="id"></el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column width="200" label="操作">
          <template slot-scope="scope">
            <el-button-group>
              <el-button plain size="mini" @click='$router.push("./form")' type="primary" icon="el-icon-edit"></el-button>
              <el-button plain size="mini" @click='doRemove(scope.row)' type="primary" icon="el-icon-delete"></el-button>
              <el-button plain size="mini" type="primary" icon="el-icon-share">分配</el-button>
            </el-button-group>
          </template>
        </el-table-column>
        <el-table-column
          label="日期"
          width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          sortable
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </div>
    <div class="page-foot">
      <el-pagination
        class='mt-10 fn-right'
        background
        layout="total, sizes, prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: [],
      filterExpand: false,
      params: {
        select1: "",
        select2: "",
        time: "",
        date: ""
      }
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    doRemove(){
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    onSubmit() {}
  }
};
</script>

<style>

</style>
