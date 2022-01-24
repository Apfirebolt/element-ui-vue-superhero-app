<template>
  <el-row>
    <el-tabs v-if="apiData" type="border-card">
      <el-tab-pane label="Appearance">
        <appearance-component :passed-data="apiData.appearance" />
      </el-tab-pane>
      <el-tab-pane label="Biography">
        <biography-component :passedData="apiData.biography" />
      </el-tab-pane>
      <el-tab-pane label="Work">
        <work-component :passedData="apiData.work" />
      </el-tab-pane>
      <el-tab-pane label="Connections">
        <connections-component :passedData="apiData.connections" />
      </el-tab-pane>
      <el-tab-pane label="Power">
        <power-stats-component :passedData="apiData.powerstats" />
      </el-tab-pane>
    </el-tabs>
    <search-form @searchHero="searchHero" />
  </el-row>
</template>

<script>
import axios from "axios";
import { heroList } from "../data/hero-list";
import AppearanceComponent from "../components/Appearance.vue";
import BiographyComponent from "../components/Biography.vue";
import ConnectionsComponent from "../components/Connections.vue";
import PowerStatsComponent from "../components/PowerStats.vue";
import WorkComponent from "../components/Work.vue";
import SearchForm from '../components/SearchForm.vue';

export default {
  name: "Search",
  components: {
    SearchForm,
    AppearanceComponent,
    BiographyComponent,
    ConnectionsComponent,
    PowerStatsComponent,
    WorkComponent,
  },
  data() {
    return {
      apiData: null,
      activeName: "first",
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
    handleClick(tab, event) {
      console.log(tab, event);
    },
    async searchHero(name) {
      const selectedName = heroList.find((item) => item.name === name);
      console.log('Name ', selectedName);
    }
  },
};
</script>