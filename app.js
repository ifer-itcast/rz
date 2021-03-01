const Koa = require('koa')
const path = require('path')
const serve = require('koa-static')

const app = new Koa()
app.use(serve(path.join(__dirname, 'dist')))
app.listen(3333, () => {
  console.log('人资项目启动')
})
