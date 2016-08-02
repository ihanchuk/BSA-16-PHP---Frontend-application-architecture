var BookItemView = Backbone.Marionette.ItemView.extend({
    tagName: "tr",
    template: '#books-template',
    ui: {
        deleteModel: ".deleteModel",
        syncModel: ".syncModel",
        author:".author",
        year:".year",
        genre:".genre",
        title:'.title'
    },
    DeleteModelAction:function(){
        this.model.destroy({ headers: {_token:window.__token}});
    },
    SyncModelAction:function(){
        this.model.validate();

        if (this.model.isValid()){
            this.model.save(null, {
                success: function (model, response) {
                    alert(response.responseText);
                },
                error: function (model, response) {
                    alert(response.responseText);
                }
            });
        } else{
            alert("Data validation errors. See console if u are developer  :-)");
            console.table(this.model.validate());
        }
    },
    
    SetModelProperty:function (event) {
        console.info("setting new value to model field");
       var field = event.target.className;
        var newVal =$(event.currentTarget).val();
        var newData = {};
        newData[field] = newVal;
        this.model.set(newData);
    },
    events:{
        "click @ui.deleteModel":'DeleteModelAction',
        "click @ui.syncModel":'SyncModelAction',
        "change @ui.year":"SetModelProperty",
        "change @ui.title":"SetModelProperty",
        "change @ui.genre":"SetModelProperty",
        "change @ui.author":"SetModelProperty",
        "focusout  @ui.year":"SetModelProperty",
        "focusout  @ui.title":"SetModelProperty",
        "focusout  @ui.genre":"SetModelProperty",
        "focusout  @ui.author":"SetModelProperty",
    },
    modelEvents:{
        "change":"render"
    },
});

module.exports = BookItemView;

