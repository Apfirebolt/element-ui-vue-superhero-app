<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Card name</span>
      <el-button style="float: right; padding: 3px 0" type="text"
        >Operation button</el-button
      >
    </div>
    {{ passedData }}
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
