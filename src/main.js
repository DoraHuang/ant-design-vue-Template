import { createApp } from 'vue'
import router from '/@/router'
import store from '/@/store'
import App from '/@/App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '/@/assets/style.less'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ECharts from 'vue-echarts'
import { use } from "echarts/core"
import {
    CanvasRenderer
} from 'echarts/renderers'
import {
    BarChart,
    LineChart
} from 'echarts/charts'
import {
    GridComponent,
    TooltipComponent
} from 'echarts/components'
//import Blob from '/@/excel/Blob.js'
use([
    CanvasRenderer,
    BarChart, LineChart,
    GridComponent,
    TooltipComponent
])

createApp(App)
    //AppBase.config.globalProperties.echarts = echarts;
    .component('v-chart', ECharts)
    .use(router)
    .use(store)
    .use(Antd)
    .use(VueAxios, axios)
    .mount('#app');