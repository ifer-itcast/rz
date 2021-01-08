// 全局组件的注册
import PageTools from './PageTools'

export default {
  install(Vue) {
    Vue.component('PageTools', PageTools)
  }
}
