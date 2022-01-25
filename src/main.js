import Vue from 'vue'
import App from './App.vue'
import router from './routes';
import Element from 'element-ui';
import './plugins/filters';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(Element)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
