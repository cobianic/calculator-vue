import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareRootAlt } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faDivide } from '@fortawesome/free-solid-svg-icons'
import { faEquals } from '@fortawesome/free-solid-svg-icons'
import { faPercentage } from '@fortawesome/free-solid-svg-icons'
import { faBackspace } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



library.add(faSquareRootAlt)
library.add(faTimes)
library.add(faPlus)
library.add(faMinus)
library.add(faDivide)
library.add(faEquals)
library.add(faPercentage)
library.add(faBackspace)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
