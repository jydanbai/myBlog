/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 21:28:38
 * @LastEditTime: 2019-09-23 21:28:38
 * @LastEditors: your name
 */


var mongoose = require('mongoose');
var usersSchema = require('../schemas/users');

module.exports = mongoose.model('User', usersSchema);