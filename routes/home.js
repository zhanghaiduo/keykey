// 首页的所有请求都写在这里
const kitty = require('../model/kitty')
exports.index = (req, res, next) => {
    let whiteCat = new kitty({ name: 'whiteCat' })
        // whiteCat.save(function(err, result) {
        //     if (err) {
        //         console.log(err)
        //     }
        //     console.log(result)
        // })

    whiteCat.save().then((result) => {
        // 保存成功了
    }).catch(() => {
        // 保存失败了
    })
    res.render('index', {
        title: '我的首页'
    })
}