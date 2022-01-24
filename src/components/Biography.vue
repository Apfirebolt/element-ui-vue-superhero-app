<template>
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>Biography</span>
  </div>
  {{ passedData }}
</el-card>
</template>

<script>
export default {
  name: "biography",
  data() {
    return {
      aliase: this.passedData.aliases,
    };
  },
  props: {
    passedData: {
      required: true,
      type: Object,
    },
  },
};
</script>
