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
  name: "powerStats",
  props: {
    passedData: {
      required: true,
      type: Object,
    },
  },
  filters: {
    capitalize(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>
