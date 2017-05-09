const mongoose = require('mongoose');
const setting = require('../stting')
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${setting.host}/${setting.db}`);