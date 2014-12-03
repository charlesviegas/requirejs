define(["kendo", "bootstrap", "text!views/layout.html", "./home"], function (kendo, bootstrap, template, home) {

    var app = {
        init: function () {
            var layout = new kendo.Layout(template, {wrap: false});
            layout.render("#root");
            home.show(layout);
        }
    };

    return app;
});
