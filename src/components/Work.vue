<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Work</span>
    </div>
    <el-row :gutter="20" v-for="item in Object.keys(passedData)" :key="item">
      <el-col :span="16">
        <p>{{ item|capitalize }}</p>
      </el-col>
      <el-col :span="8">
        <p>{{ passedData[item] }}</p>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: "work",
  props: {
    passedData: {
      required: true,
      type: Object,
    },
  },
};
</script>
