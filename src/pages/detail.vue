<template>
  <el-row>
    <el-button>Search</el-button>
    <el-button type="primary">Superhero</el-button>
    <div v-if="apiData">
      <appearance-component :passed-data="apiData.appearance" />
      <biography-component :passedData="apiData.biography" />
      <work-component :passedData="apiData.work" />
      <connections-component :passedData="apiData.connections" />
      <power-stats-component :passedData="apiData.powerstats" />
    </div>
  </el-row>
</template>

<script>
import axios from "axios";
import AppearanceComponent from "../components/Appearance.vue";
import BiographyComponent from "../components/Biography.vue";
import ConnectionsComponent from "../components/Connections.vue";
import PowerStatsComponent from "../components/PowerStats.vue";
import WorkComponent from "../components/Work.vue";

export default {
  name: "Search",
  components: {
    AppearanceComponent,
    BiographyComponent,
    ConnectionsComponent,
    PowerStatsComponent,
    WorkComponent,
  },
  data() {
    return {
      apiData: null,
      loading: false,
      total_results: [],
      selected_tab: "appearance",
      error_text: "",
    };
  },
  mounted() {
    this.getApiData();
  },
  methods: {
    async getApiData() {
      const apiResponse = await axios.get(
        `api/${process.env.VUE_APP_MY_API_KEY}/3`
      );
      if (apiResponse) {
        this.apiData = apiResponse.data;
      }
    },
  },
};
</script>
