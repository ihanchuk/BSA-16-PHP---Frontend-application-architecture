var UserModel =require("../../models/users/UserModel.js");
var tl = require("../../lib/TemplateLoader.js");
var template = tl.getTemplate("CreateUserView.hbs","Users");
var  CreateUserView = Marionette.ItemView.extend({
    template: template,
    tagName:"div",
    ui:{
        createButton:"#saveNewUser",
        cancelButton:"#cancelNewUser",
        first_name:"#new_first_name",
        last_name:"#new_last_name",
        email:"#new_email",
        password:"#new_password"
    },
    events:{
        "click @ui.createButton":"CreateNewUser",
        "click @ui.cancelButton":"CancelDialog",
    },
    CreateNewUser:function(){
        var data={
            "first_name":this.ui.first_name.val(),
            "last_name":this.ui.last_name.val(),
            "email":this.ui.email.val(),
            "password":this.ui.password.val(),
        };
        var model = new UserModel(data);

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

module.exports = CreateUserView;