import router from './router/router' // 引入路由




const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
next()
})

router.afterEach(() => {
})
