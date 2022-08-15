import Vue from 'vue'
import VueAosDirective from './directive/VueAos.js'

export default function install(Vue, options) {
    Vue.directive('vue-aos', VueAosDirective)
}