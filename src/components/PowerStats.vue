<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Power Stats</span>
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
