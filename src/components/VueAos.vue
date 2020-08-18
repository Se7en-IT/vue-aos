<script>
function animateCSS (node, animationClass, callback) {
  animationClass = animationClass.split(' ')
  node.classList.add(...animationClass)

  function handleAnimationEnd () {
    node.classList.remove(...animationClass)
    node.removeEventListener('animationend', handleAnimationEnd)
    if(callback){
      callback()
    }
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

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
    },
    visibility: {
      type: String,
      default: 'hidden'
    }
  },
  mounted() {
    let el = this.$slots.default[0].elm
    el.style.visibility = this.visibility
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.visibility = 'visible'
          this.$emit('animationstart', entry)
          if(this.animationClass){
            animateCSS(entry.target, this.animationClass, () => {
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
  destroyed () {
    this.observer.disconnect()
  },
  render () {
    return this.$slots.default ? this.$slots.default[0] : null
  }
}
</script>