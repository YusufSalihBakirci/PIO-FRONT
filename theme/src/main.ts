import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/scss/app.scss"
import '@vuepic/vue-datepicker/dist/main.css'
import 'vue-rate/dist/vue-rate.css'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import "vue-multiselect/dist/vue-multiselect.css"
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css';

import VueFeather from "vue-feather";
import Breadcrumbs from './layout/BreadCrumbs.vue';
import VueApexCharts from "vue3-apexcharts";
import Datepicker from '@vuepic/vue-datepicker';
import { quillEditor } from "vue3-quill";
import rate from 'vue-rate'
import VueNumber from "vue-number-animation";
import Lightbox from 'vue-easy-lightbox'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import AosVue from "aos-vue";
import { VueMasonryPlugin } from 'vue-masonry';
import vueChartist from "vue-chartist"
import Multiselect from 'vue-multiselect'
import SimpleTypeahead from 'vue3-simple-typeahead';

import English from "@/core/locales/en.json"
import Russian from "@/core/locales/ru.json"
import Arabic from "@/core/locales/ar.json"
import German from "@/core/locales/ge.json"
import لعربية from "@/core/locales/ae.json"
import 简体中文 from "@/core/locales/cn.json"
import Português from "@/core/locales/pt.json"
import Français from "@/core/locales/fr.json"
import Deutsch from "@/core/locales/de.json"
import Español from "@/core/locales/es.json"

import { createI18n } from 'vue-i18n'
const i18n = createI18n({
    legacy: false,
    locale: 'English',
    messages: {
        English: English,
        German: German,
        Russian: Russian,
        Arabic: Arabic,
        Español: Español,
        Deutsch: Deutsch,
        Français: Français,
        Português: Português,
        简体中文: 简体中文,
        لعربية: لعربية,
    }
})

createApp(App)
    .use(router)
    .use(createPinia())
    .use(i18n)
    .use(VueApexCharts)
    .use(quillEditor)
    .use(rate)
    .use(PerfectScrollbar)
    .use(Lightbox)
    .use(AosVue)
    .use(VueMasonryPlugin)
    .use(VueNumber)
    .use(vueChartist)
    .use(SimpleTypeahead)
    .component(VueFeather.name, VueFeather)
    .component('Breadcrumbs', Breadcrumbs)
    .component('Datepicker', Datepicker)
    .component('multiselect', Multiselect)
    .mount('#app')
