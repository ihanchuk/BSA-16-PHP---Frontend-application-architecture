var tl = require("../../lib/TemplateLoader.js");
var template = tl.getTemplate("CreateBookView.hbs","Books");
var BookModel =require("../../models/books/BookModel.js");
var  CreateBookView = Marionette.ItemView.extend({
    template: template,
    tagName:"div",
    ui:{
        createButton:"#createNewBook",
        cancelButton:"#cancelNewBook",
        year:"#new_book_year",
        genre:"#new_book_genre",
        author:"#new_book_author",
        title:"#new_book_title"
    },
    events:{
        "click @ui.createButton":"CreateNewBook",
        "click @ui.cancelButton":"CancelDialog",
    },
    CreateNewBook:function(){
        var data={
            "author":this.ui.author.val(),
            "genre":this.ui.genre.val(),
            "year":this.ui.year.val(),
            "title":this.ui.title.val(),
        };
        var model = new BookModel(data);

        model.validate();

        if (model.isValid()){
            model.save(null, {
                success: function (model, response) {
                    alert(response.responseText);
                },
                error: function (model, response) {
                    alert(response.responseText);
                }
            });
        } else{
            alert("Data validation errors. See console if u are developer  :-)");
            console.table(model.validate());
        }
    },
    CancelDialog:function(){
        window.history.back();
    }
});

module.exports = CreateBookView;