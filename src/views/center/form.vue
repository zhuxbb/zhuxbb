<template>
  <div class="page">
    <div class="page-form">
      <el-form size="small" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
        <div class="panel-region">
          <div class="panel-region-title">添加技能组</div>
          <el-form-item label="技能组名称" prop="name">
            <el-input style='width:200px' v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="技能组号">
            <el-input style='width:200px' v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="技能组优先级">
            <el-input style='width:200px' v-model="ruleForm.name"></el-input>
            <span class="t-gray">技能组优先级的范围为0-255，数字越小，优先级越高</span>
          </el-form-item>
          <el-form-item label="技能组类型">
            <el-select style='width:200px' v-model="ruleForm.region" placeholder="请选择技能组类型">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="分配策略">
            <el-select style='width:200px' v-model="ruleForm.region" placeholder="请选择分配策略">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="最大排队数">
            <el-input style='width:200px'  v-model="ruleForm.name"></el-input>
            <span class="t-gray">最多排队电话数，超过此数将溢出</span>
          </el-form-item>
        </div>
        <div class="panel-region">
          <div class="panel-region-title">其他信息</div>

          <el-form-item label="最大排队数">
            <el-input style='width:200px'  v-model="ruleForm.name"></el-input>
            <span class="t-gray">最多排队电话数，超过此数将溢出</span>
          </el-form-item>
          <el-form-item label="是否报工号" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="启用"></el-radio>
              <el-radio label="停用"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>

</style>
