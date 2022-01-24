<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Connections</span>
    </div>
    {{ passedData }}
  </el-card>
</template>

<script>
export default {
  name: "connections",
  data() {
    return {
      relatives: [],
      teams: [],
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
