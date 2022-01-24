<template>
  <div class="container">
    <div class="card my-3 shadow text-danger">
      <div class="card-header">
        <h2 class="text-center">Biography</h2>
      </div>
      <div class="card-body">
        <div
          v-for="(item, index) in Object.keys(passedData)"
          :key="index"
          class="d-flex justify-content-between px-4 py-2"
        >
          <p>{{ item }}</p>
          <p class="biography-item">{{ passedData[item] }}</p>
        </div>
        <h3 class="text-center my-3 p-2">Aliases (Alternate names)</h3>
        <ul>
          <li v-for="(item, index) in aliase" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
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
