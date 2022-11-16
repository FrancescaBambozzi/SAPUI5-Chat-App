sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/format/DateFormat",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (
    Controller, History, DateFormat, Filter, FilterOperator
) {
    "use strict";

    return Controller.extend("myapp.chatapp.controller.Detail", {
        onInit: function () {
            //fetch instance of router and attach an internal call back function when the route is hit
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
        },
        _onObjectMatched: function (oEvent) {

            //1. access the URL and navigation parameters : arguments
            //2. access nav parameter path and set context to the view
            this.getView().bindElement({
                path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").contactPath),
                model: "chatsSet"
            });
        },
        onNavBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            //if no navigation has happened before nav to the master view directly
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("master", {}, true);
            }
        },

        onPost: function () {

        }
    });
});