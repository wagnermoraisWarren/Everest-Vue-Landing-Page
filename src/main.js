import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMask from 'v-mask'
import Toast from 'vue-toastification'
import "vue-toastification/dist/index.css";
// Vue.config.productionTip = false

Vue.use(VueMask);
Vue.use(Toast, {
  transition: "Vue-Toastification__fade",
  maxToasts: 3,
  newestOnTop: true,
  filterBeforeCreate: (toast, toasts) => {
    if (toasts.filter(
      t => t.type === toast.type
    ).length !== 0) {
      // Returning false discards the toast
      return false;
    }
    // You can modify the toast if you want
    return toast;
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
