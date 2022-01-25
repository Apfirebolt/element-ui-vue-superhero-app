<template>
  <el-form
    :model="nameValidateForm"
    ref="nameValidateForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-row>
      <el-col>
        <el-form-item
          label="Name"
          prop="name"
          :rules="[
            { required: true, message: 'Name is required' },
          ]"
        >
          <el-input
            type="text"
            placeholder="Enter the name of the superhero to search for"
            v-model="nameValidateForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col>
        <el-form-item>
          <el-button type="primary" @click="submitForm('nameValidateForm')"
            >Submit</el-button
          >
          <el-button @click="resetForm('nameValidateForm')">Reset</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      nameValidateForm: {
        name: "",
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('searchHero', this.nameValidateForm.name)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>
.el-row {
  margin: 1rem auto;
}
.el-input, .el-form-item {
    font-size: 1.2rem;
}
</style>
