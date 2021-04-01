import utils from '../utils.js'

const mapElement = new Map();
export default {
  bind(el, binding) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (binding.value.animationClass) {
            utils.animateCSS(entry.target, binding.value.animationClass)
          }
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: binding.value.threshold || 0.5,
      root: binding.value.root,
      rootMargin: binding.value.rootMargin || '0px 0px 0px 0px'
    })
    observer.observe(el)
    mapElement.set(el, observer)
  },
  unbind(el) {
    mapElement.get(el).disconnect()
  }
}