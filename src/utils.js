export default {
    animateCSS(node, animationClass, callback) {
        animationClass = animationClass.split(' ')
        node.classList.add(...animationClass)

        function handleAnimationEnd() {
            node.classList.remove(...animationClass)
            node.removeEventListener('animationend', handleAnimationEnd)
            if (callback) {
                callback()
            }
        }

        node.addEventListener('animationend', handleAnimationEnd)
    }
}