import Vue from 'vue'
import app from './app.vue'
import * as YIUI from '../index'

// 本地icon
import * as svgicon from 'vue-svgicon'
import '@/assets/icon'
Vue.use(svgicon, { tagName: 'svgicon', width: 100, height: 100 })
import DIconLocal from './components/demo/d-icon-local.vue'
Vue.component('DIconLocal', DIconLocal)

Object.keys(YIUI).forEach(key => {
    Vue.component(key, YIUI[key])
    if (key === 'UToast') {
        Vue.prototype.$toast = YIUI[key].toast
    }
    if (key === 'UModal') {
        Vue.prototype.$confirm = YIUI[key].confirm
        Vue.prototype.$alert = YIUI[key].alert
    }
})

Vue.config.productionTip = false

new Vue({
    render: h => h(app)
}).$mount('#app')
