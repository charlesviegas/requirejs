define(["kendo", "jquery", "text!views/alert.html"], function (kendo, $, template) {
    var alert = {

        info: function (msg) {
            alert._renderAlert({
                clazz: "alert-success",
                severity: "Sucesso! ",
                message: msg
            });
        },

        warn: function (msg) {
            alert._renderAlert({
                clazz: "alert-warning",
                severity: "Aviso! ",
                message: msg
            });
        },

        error: function (msg) {
            alert._renderAlert({
                clazz: "alert-danger",
                severity: "Erro! ",
                message: msg
            });
        },

        _renderAlert: function (options) {

            var tmpl, html;
            tmpl = kendo.template(template);
            html = tmpl(options);

            console.log(html);
            $("#alert").html(html);
        }
    };


    return alert;
});
