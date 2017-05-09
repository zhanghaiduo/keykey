// 首页的所有请求都写在这里
exports.index = (req, res, ntxt) => {
    res.render('index', {
        title: '我的首页'
    })
}