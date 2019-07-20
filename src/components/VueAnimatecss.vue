<script>
function animateCSS (node, animationName) {
  node.classList.add('animated', animationName)

  function handleAnimationEnd () {
    node.classList.remove('animated', animationName)
    node.removeEventListener('animationend', handleAnimationEnd)
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

export default {
  name: 'vue-animatecss',
  props: ['threshold', 'effect'],
  mounted: function () {
    var el = this.$slots.default[0].elm
    el.style.visibility = 'hidden'
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.style.visibility = 'visible'
          animateCSS(entry.target, this.effect)
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: this.threshold || 0.5
    })
    this.observer.observe(el)
  },
  destroyed: function () {
    this.observer.disconnect()
  },
  render: function () {
    return this.$slots.default ? this.$slots.default[0] : null
  }
}
</script>