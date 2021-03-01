const Koa = require('koa')
const path = require('path')
const serve = require('koa-static')
const { historyApiFallback } = require('koa2-connect-history-api-fallback')
const app = new Koa()
// 这句话 的意思是除接口之外所有的请求都发送给了 index.html
app.use(
  historyApiFallback({
    whiteList: ['/prod-api']
  })
) // 这里的whiteList是白名单的意思
app.use(serve(path.join(__dirname, 'dist')))

app.listen(3333, () => {
  console.log('人资项目启动')
})
