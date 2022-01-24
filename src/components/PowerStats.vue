<template>
  <div class="container">
    <div class="card my-3 shadow text-danger">
      <div class="card-header"><h2 class="text-center">Power Stats</h2></div>
      <div
        v-for="(item, index) in Object.keys(passedData)"
        :key="index"
        class="d-flex justify-content-between px-4 py-2"
      >
        {{ item | capitalize }}
        <p class="stats-item">{{ passedData[item] }}</p>
      </div>
    </div>
  </div>
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
