import './assets/main.css'

import { createApp } from 'vue'
import router from './router'

import App from './App.vue'

import Highcharts from 'highcharts'
import StockModule from 'highcharts/modules/stock'
import HighchartsVue from 'highcharts-vue'

StockModule(Highcharts)

const app = createApp(App)

// Use the HighchartsVue plugin, register <highcharts> component
app.use(HighchartsVue)

app.use(router)

// Mount the application
app.mount('#app')
