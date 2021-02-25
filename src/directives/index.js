export const imgerror = {
  inserted(dom, options) {
    dom.src = dom.src || options.value
    // 监听 img 标签的错误事件 onerror
    dom.onerror = function() {
      // 给一个默认的图片
      dom.src = options.value
    }
  },
  componentUpdated(dom, options) {
    // 组件更新后会触发
    dom.src = dom.src || options.value
  }
}
