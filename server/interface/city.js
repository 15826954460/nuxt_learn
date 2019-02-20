
const Router = require("koa-router")
const router = new Router({
  prefix: '/city' // 指定前缀
})

router.get('/list', async (ctx) => {
  ctx.body = {
   list: ["北京", "天津"]
  }
})

module.exports = router