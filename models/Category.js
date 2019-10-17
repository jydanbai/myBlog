/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 21:28:38
 * @LastEditTime: 2019-09-23 21:28:38
 * @LastEditors: your name
 */


var mongoose = require('mongoose');
var categoriesSchema = require('../schemas/categories');

module.exports = mongoose.model('Category', categoriesSchema);