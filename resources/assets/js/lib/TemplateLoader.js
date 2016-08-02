var Bars = require("handlebars");

Bars.getTemplate = function(name, dir) {

    if (dir === undefined)  dir = "";

    if (Bars.templates === undefined || Bars.templates[name] === undefined) {
        $.ajax({
            url : 'templates/' + dir+'/' + name,    //Не факт что указан путь!
            success : function(data) {

                if (Bars.templates === undefined) {
                    Bars.templates = {};
                }

                if (Bars.templates[dir] === undefined) {
                    Bars.templates[dir] = {};
                }

                /* Закомпилим шаблон, в следующий раз без аякса*/
                if (dir === undefined) Bars.templates[name] = Bars.compile(data);
                else Bars.templates[dir][name] = Bars.compile(data);
            },
            async : false
        });
    }

    if (dir === undefined)
        return Bars.templates[name];
    else
        return Bars.templates[dir][name];
};

module.exports = Bars;