import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/Logo.vue'
export { default as Person } from '../../components/Person.vue'
export { default as Photo } from '../../components/Photo.vue'
export { default as PhotoScatter } from '../../components/PhotoScatter.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyPerson = import('../../components/Person.vue' /* webpackChunkName: "components/person" */).then(c => wrapFunctional(c.default || c))
export const LazyPhoto = import('../../components/Photo.vue' /* webpackChunkName: "components/photo" */).then(c => wrapFunctional(c.default || c))
export const LazyPhotoScatter = import('../../components/PhotoScatter.vue' /* webpackChunkName: "components/photo-scatter" */).then(c => wrapFunctional(c.default || c))
