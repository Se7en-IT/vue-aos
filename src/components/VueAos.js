import utils from '../utils.js'

export default {
  name: 'vue-aos',
  props: {
    threshold: {
      type: Number,
      default: 0.5
    },
    root: {
      type: HTMLElement,
      default: () => null
    },
    rootMargin: {
      type: String,
      default: () => '0px 0px 0px 0px'
    },
    animationClass: {
      type: String
    }
  },
  mounted() {
    let el = this.$slots.default[0].elm
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.$emit('animationstart', entry)
          if (this.animationClass) {
            utils.animateCSS(entry.target, this.animationClass, () => {
              this.$emit('animationend', entry)
            })
          }
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: this.threshold,
      root: this.root,
      rootMargin: this.rootMargin
    })
    this.observer.observe(el)
  },
  destroyed() {
    this.observer.disconnect()
  },
  render() {
    return this.$slots.default ? this.$slots.default[0] : null
  }
}