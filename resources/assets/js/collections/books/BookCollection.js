var BookModel = require("../../models/books/BookModel.js");
var BookCollection = Backbone.Collection.extend({
    url: '/books',
    model: BookModel,
});
module.exports = BookCollection;