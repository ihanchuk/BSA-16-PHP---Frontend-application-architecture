var MyController = Marionette.Controller.extend({
    context:null,
    bindContext:function(newContext){
        this.context = newContext;
    },
    books: function() {
        var that = this.context;
        var BookCollection = require("../collections/books/BookCollection.js");
        var BookItemView = require("../views/books/BookItemView.js");
        var BooksCollectionView =  require("../views/books/BooksCollectionView.js");
        var BookCollection = new BookCollection();

        BookCollection.fetch().done(function () {
            var view =new BooksCollectionView({collection: BookCollection});
            that.content.show(view);
        });

    },
    users: function() {
        var that = this.context;
        var UserCollection = require("../collections/users/UserCollection.js");
        var UserItemView = require("../views/users/UserItemView.js");
        var UserCollectionView =  require("../views/users/UserCollectionView.js");
        var UserCollection = new UserCollection();

        UserCollection.fetch().done(function () {
            var view =new UserCollectionView({collection: UserCollection});
            that.content.show(view);
        });
    },
    CreateUser:function(){
        var that= this.context;
        var CreateUserView =  require("../views/users/CreateUserView.js");
        var view = new CreateUserView();
        that.content.show(view);
    },
    CreateBook:function(){
        var that= this.context;
        var CreateBookView =  require("../views/books/CreateBookView.js");
        var view = new CreateBookView();
        that.content.show(view);
    }
});

contr = new MyController;

module.exports = contr;