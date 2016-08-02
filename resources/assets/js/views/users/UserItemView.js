var BookItemView = Backbone.Marionette.ItemView.extend({
    tagName: "tr",
    template: '#user-template',
    ui: {
        deleteModel: ".deleteUser",
        syncModel: ".syncModel",
        first_name:".first_name",
        last_name:".last_name",
        email:".email",
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
        var field = event.target.className;
        var newVal =$(event.currentTarget).val();
        var newData = {};
        newData[field] = newVal;
        this.model.set(newData);
    },
    events:{
        "click @ui.deleteModel":'DeleteModelAction',
        "click @ui.syncModel":'SyncModelAction',
        "change @ui.first_name":"SetModelProperty",
        "change @ui.last_name":"SetModelProperty",
        "change @ui.email":"SetModelProperty",
        "focusout  @ui.first_name":"SetModelProperty",
        "focusout  @ui.last_name":"SetModelProperty",
        "focusout  @ui.email":"SetModelProperty",
    },
    modelEvents:{
        "change":"render",
    },
});

module.exports = BookItemView;