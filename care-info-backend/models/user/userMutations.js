var addUser = require('./addUser').addUser
var updateUser = require('./updateUser').updateUser
var deleteUser = require('./deleteUser').removeUser
module.exports = {
  adduser: addUser,
  updateuser: updateUser,
  deleteuser: deleteUser
}