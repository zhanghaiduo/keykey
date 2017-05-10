// 首页的所有请求都写在这里

exports.index = (req, res, next) => {
    var whiteCat = new Cat({ name: 'whiteCat' });
    //新增 
    // whiteCat.save((err, result) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.send(result)
    // })
    //新增ES6写法
    whiteCat.save().then(result => {
        res.send(result)
    }).catch(err => {
        res.send(err)
    })
    let where = {
            'name': 'whiteCat'
        }
        //删除
        // Cat.remove(where, (err, result) => {
        //     if (err) {
        //         res.send(err)
        //     }
        //     res.send(result);//删除返回的结果：ok是否成功，n影响了行数
        // })

    //修改
    // let update = { name: 'blueCat' }
    // Cat.update({ name: 'whiteCat' }, { $set: update }, (err, result) => {
    //         if (err) {
    //             res.send(err)
    //         }
    //         res.send(result)
    //     })
    //查询
    // Cat.find({ name: 'blackCat' }, ['name'], (err, result) => {
    //     if (err) {
    //         res.send(err)
    //     }
    //     res.send(result)
    // })
    // 查询 ES6写法
    // Cat.find({name:'blackCat'},['name']).




    // Cat.findOne({ name: 'blackCat' }).then(result => {
    //     res.send(result)
    // }).catch(err => {
    //     res.send(err)
    // })
}