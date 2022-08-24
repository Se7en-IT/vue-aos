const p = {
  animateCSS(e, t, n) {
    t = t.split(" "), e.classList.add(...t);
    function i() {
      e.classList.remove(...t), e.removeEventListener("animationend", i), n && n();
    }
    e.addEventListener("animationend", i);
  }
}, r = /* @__PURE__ */ new Map(), f = {
  bind(e, t) {
    const {
      selector: n,
      animationstart: i,
      animationend: a,
      animationClass: c,
      root: l,
      rootMargin: v,
      threshold: m
    } = t.value, d = new IntersectionObserver(
      (o, u) => {
        o.forEach((s) => {
          s.target.style.setProperty(
            "--isIntersecting",
            s.isIntersecting ? 1 : 0
          ), s.isIntersecting && (i && i(s), c && p.animateCSS(s.target, c, () => {
            a && a(s);
          }), t.modifiers.once && u.unobserve(s.target));
        });
      },
      {
        threshold: m || 0,
        root: l,
        rootMargin: v || "0px 0px 0px 0px"
      }
    );
    (n ? e.querySelectorAll(n) : [e]).forEach((o) => {
      d.observe(o);
    }), r.set(e, d);
  },
  unbind(e) {
    r.get(e).disconnect(), r.delete(e);
  }
};
function h(e) {
  e.directive("vue-aos", f);
}
export {
  h as default
};
