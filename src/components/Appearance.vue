<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>Appearance</span>
  </div>
  <p>{{ passedData }}</p>
</el-card>
</template>

<script>
export default {
  name: "Appearance",
  props: {
    passedData: {
      required: true,
      type: Object,
    },
  },
};
</script>