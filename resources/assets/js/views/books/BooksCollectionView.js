var BookItemView = require("../../views/books/BookItemView.js");
var BooksCollectionView = Backbone.Marionette.CollectionView.extend({
    childView: BookItemView,
    tagName: 'table',
    className:'table table-striped mainTable'
});

module.exports = BooksCollectionView;