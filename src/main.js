require.config({
    name: "main",
    paths: {
        text: "vendor/requirejs-text/text",
        jquery: "vendor/jquery/jquery",
        bootstrap: "vendor/bootstrap/dist/js/bootstrap",
        kendo: "vendor/kendo-ui/js/kendo.web.min"
    },
    shim: {
        kendo: ["jquery"],
        bootstrap: ["jquery"]
    }
});

require(["modules/app"], function (app) {
    app.init();
});