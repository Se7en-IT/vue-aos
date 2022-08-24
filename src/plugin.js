import VueAosDirective from './directive.js'

export default function install(Vue) {
    Vue.directive('vue-aos', VueAosDirective)
}