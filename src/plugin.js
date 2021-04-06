import Vue from 'vue'
import VueAosComponent from './components/VueAos.js'
import VueAosDirective from './directive/VueAos.js'

export default function install(Vue, options) {
    Vue.component('vue-aos', VueAosComponent)
    Vue.directive('vue-aos', VueAosDirective)
}