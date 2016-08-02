var BookModel = Backbone.Model.extend({
    urlRoot : '/books/',
    url: function() {
        if(this.id) {
            return this.urlRoot + this.id;
        }
        else
        {
            return "/books";
        }
    },
    validate:function(){
        var text  = new RegExp(/^[a-zA-Z ]+$/);
        var year =new RegExp(/^\d{4}$/);

        var errors = [];

        if(!text.test(this.get("author"))) errors.push({'author': 'failed'})
        if(!text.test(this.get("genre"))) errors.push({'genre': 'failed'})
        if(!text.test(this.get("title"))) errors.push({'title': 'failed'})
        if(!year.test(this.get("year"))) errors.push({'year': 'failed'})

        if (errors.length) return errors;
    }
});

module.exports =BookModel;