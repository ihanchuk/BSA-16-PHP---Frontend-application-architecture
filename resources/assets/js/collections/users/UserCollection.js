var UserModel = require("../../models/users/UserModel.js");
var UserCollection = Backbone.Collection.extend({
    url: '/users',
    model: UserModel,
});
module.exports = UserCollection;