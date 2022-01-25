import Vue from "vue";

Vue.filter("toUpperCase", (value) => {
  if (!value) return "";
  return value.toUpperCase();
});

Vue.filter("capitalize", (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
});
