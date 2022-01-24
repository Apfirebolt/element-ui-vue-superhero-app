<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Work</span>
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
