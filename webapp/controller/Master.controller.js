sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    'sap/ui/model/Sorter',
    'sap/m/MessageBox'
], function (JSONModel, Controller, Filter, FilterOperator, Sorter, MessageBox) {
    "use strict";

    return Controller.extend("myapp.chatapp.controller.Master", {
        onInit: function () {

        },

        onAfterRendering: function () {
            //oninit display the sentMessages of the current contact by applying a filter
            // 1. get the table and its binding items
            var oTable = this.byId("listId");
            // var aBindings = oTable.getBinding("items").oList;

            // // 2. get the KEY of the contact {"phone"}
            // var oObjectKey;
            // for (var i = 0; i < aBindings.length; i++) {
            //     var oObject = aBinding[i];
            //     var aKeys = Object.keys(oObject);
            //     oObjectKey = aKeys[0]
            // }

            // // 3. bind sentmessages model to current view and filter the sentMessages by objKEY
            // var oSentModel = this.getOwnerComponent().getModel("sentMessagesModel");
            // this.getView().setModel(oSentMessages, "sentMessagesSet");
        },

        onSearch: function (oEvent) {
            //get table by id from the view
            var oTable = this.getView().byId("listId");

            //store event query (the item searched) in array 
            var aFilter = [];
            var sQuery = oEvent.getParameter("query"); //mParameters

            //if a query exist, create a new filter containing the query (not case-sensitive)
            if (sQuery && sQuery.length > 0) {
                aFilter.push(new Filter("contactName", FilterOperator.Contains, sQuery));
            }

            //get the binding of the list's aggregation items and call the filter method with the new array of filters
            oTable.getBinding("items").filter(aFilter);
        },

        onPressNavTo: function (oEvent) {

            var oItem = oEvent.getSource();
            var oRouter = this.getOwnerComponent().getRouter();

            //substr the first chr '/' as it's not allowed in URL
            oRouter.navTo("detail", {
                contactPath: window.encodeURIComponent(oItem.getBindingContext("chatsSet").getPath().substr(1))
            });
        }
    });
});

