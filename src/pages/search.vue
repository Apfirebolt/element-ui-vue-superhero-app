<template>
  <el-row>
    <h3 class="text-header">Superhero API</h3>
    <h3 v-if="loading" class="loading-text">Loading...</h3>
    <h3 v-if="helpText" class="help-text">{{ helpText }}</h3>
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
      helpText: "",
      urlParams: {
        term: '',
      }
    };
  },
  methods: {
    async getApiData(heroId) {
      this.loading = true;
      const apiResponse = await axios.get(
        `api/${process.env.VUE_APP_MY_API_KEY}/${heroId}`
      );
      if (apiResponse) {
        this.loading = false;
        this.urlParams.term = apiResponse.data.name;
        this.apiData = apiResponse.data;
        try {
          const query = { ...this.$route.query, term: this.urlParams.term };
          this.$router.replace({ query });
        } catch(err) {
          console.log(err);
        }
      }
    },
    async searchHero(name) {
      const selectedName = heroList.find((item) => item.name === name);
      if (selectedName) {
        this.helpText = '';
        this.getApiData(selectedName.id);
      } else {
        this.urlParams.term = '';
        this.helpText = 'Superhero name not found in the database, please try with a different name.'
      }
    }
  },
};
</script>