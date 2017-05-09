const mongoose = require('mongoose');
//创建模型
const kittySchema = mongoose.Schema({
    name: String //定义字段
})
const kitten = mongoose.model('kitten', kittySchema); //创建一个集合
module.exports = kitten