import utils from './utils.js'

const mapElement = new Map()
export default {
  bind(el, binding) {
    const {
      selector,
      animationstart,
      animationend,
      animationClass,
      root,
      rootMargin,
      threshold,
    } = binding.value
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          entry.target.style.setProperty(
            '--isIntersecting',
            entry.isIntersecting ? 1 : 0
          )
          if (entry.isIntersecting) {
            animationstart && animationstart(entry)
            animationClass &&
              utils.animateCSS(entry.target, animationClass, () => {
                animationend && animationend(entry)
              })
            if (binding.modifiers.once) {
              observer.unobserve(entry.target)
            }
          }
        })
      },
      {
        threshold: threshold || 0,
        root: root,
        rootMargin: rootMargin || '0px 0px 0px 0px',
      }
    )
    const els = selector ? el.querySelectorAll(selector) : [el]
    els.forEach((element) => {
      observer.observe(element)
    })
    mapElement.set(el, observer)
  },
  unbind(el) {
    mapElement.get(el).disconnect()
    mapElement.delete(el)
  },
}
