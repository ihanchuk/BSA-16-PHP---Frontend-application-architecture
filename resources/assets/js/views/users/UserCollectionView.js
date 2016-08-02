var UserItemView = require("../../views/users/UserItemView.js");
var UserCollectionView = Backbone.Marionette.CollectionView.extend({
    childView: UserItemView,
    tagName: 'table',
    className:'table table-striped mainUsersTable'
});

module.exports = UserCollectionView;