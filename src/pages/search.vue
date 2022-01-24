<template>
  <el-row>
    <el-button>Search</el-button>
    <el-button type="primary">Superhero</el-button>
  </el-row>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  mounted() {
    this.getApiData();
  },
  methods: {
    async getApiData() {
      const apiData = await axios.get(`api/${process.env.VUE_APP_MY_API_KEY}/3`);
      if (apiData) {
        console.log(apiData);
      }
    },
  },
};
</script>
