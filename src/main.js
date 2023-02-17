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

Vue.component('font-awesome-icon', FontAwesomeIcon);

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faClose, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faWhatsapp, faEnvelope, faClose)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
