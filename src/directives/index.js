export const imgerror = {
  inserted(dom, options) {
    // 监听 img 标签的错误事件 onerror
    dom.onerror = function() {
      // 给一个默认的图片
      dom.src = options.value
    }
  }
}
