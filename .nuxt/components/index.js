export const Logo = () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const Person = () => import('../../components/Person.vue' /* webpackChunkName: "components/person" */).then(c => wrapFunctional(c.default || c))
export const Photo = () => import('../../components/Photo.vue' /* webpackChunkName: "components/photo" */).then(c => wrapFunctional(c.default || c))
export const PhotoScatter = () => import('../../components/PhotoScatter.vue' /* webpackChunkName: "components/photo-scatter" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
