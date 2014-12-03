define(["kendo", "text!views/home.html"], function (kendo, template) {

    var homeViewModel = new kendo.observable({

        alertinfo : function(){
            require(["modules/alert"], function(alert){
                alert.info("Sucesso Javaneiros");
            });
        },

        alerterror : function(){
            require(["modules/alert"], function(alert){
                alert.error("Atenção Javaneiros");
            });
        }

    });

    var homeView = {

        show: function (layout) {
            var view = new kendo.View(template, {wrap: false, model : homeViewModel});
            layout.showIn("#content", view);
        }

    };

    return homeView;
});
