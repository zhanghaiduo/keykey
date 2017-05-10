const mongoose = require('mongoose');
const setting = require('../setting')
const url = require('url')
    // 这句话说明我们用Promise是ES6中原生的 global相当于window
mongoose.Promise = global.Promise;
// mongoose.connect 连接数据库
mongoose.connect(`mongodb://${setting.host}/${setting.db}`);
//-----通过上面几行代码 可以连接数据库

const DbSet = {
    // 新增操作
    addOne: (obj, req, res, logMsg) => {
        var obj = new obj(req.body);
        obj.save().then(result => {
            res.end(logMsg);
        }).catch(err => {
            res.end(err)
        })
    },
    //删除
    delOne: (obj, req, res, logMsg) => {
        let params = url.parse(req.url, true);
        let targetId = params.query.id;
        obj.remove({ _id: targetId }).then(result => {
            res.end(logMsg)
        }).catch(err => {
            res.end(err)
        })
    },
    // 修改
    updateOne: (obj, req, res, logMsg) => {
        let params = url.parse(req.url, true);
        let targetId = params.query.id
        obj.undate({ _id: targetId }).then(result => {
            res.end(logMsg);
        }).catch(err => {
            res.end(err)
        })
    },
    // 查询
    findOne: (obj, req, res, logMsg) => {
        let params = url.parse(req.url, true);
        let targetId = params.query.id
        obj.findOne({ _id: targetId }).then(result => {
            res.json(result);
        }).catch(err => {
            res.end(err)
        })
    },
    //查询所有的
    findAll: (obj, req, res, logMsg) => {
        obj.find({}).then(result => {
            res.json(result);
        }).catch(err => {
            res.end(err);
        })
    }

}
module.exports = DbSet