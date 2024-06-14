import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Person: () => import('../../components/Person.vue' /* webpackChunkName: "components/person" */).then(c => wrapFunctional(c.default || c)),
  Photo: () => import('../../components/Photo.vue' /* webpackChunkName: "components/photo" */).then(c => wrapFunctional(c.default || c)),
  PhotoScatter: () => import('../../components/PhotoScatter.vue' /* webpackChunkName: "components/photo-scatter" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
