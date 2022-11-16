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
            var aBinding = oTable.getBinding("items").oList;

            // 2. get the KEY of the contact {"phone"}
            for (var i = 0; i < aBinding.length; i++) {
                var oObject = aBinding[i];
                var aKeys = Object.keys(oObject);
                var oObjectKey = aKeys[0]
            }

            // 3. bind sentmessages model to current view
            var oSentModel = this.getOwnerComponent().getModel("sentMessagesModel");
            var aSentData = oSentModel.getData();

            var obj;

            //loop over the data and put a message x each contact with a filter on the key of the contact
            for (var i = 0; i < aSentData.length; i++) {
                obj = aSentData[i];
                // each obj in the array as JSON object
                obj = new JSONModel(obj);

                //create an array 

                //filter on the basis of the contact key

            }

            this.getView().setModel(obj, "sentMessagesSet");
            console.log(aSentData)
            //oSentModel.setData({ "sentMessages": aSentData });


            //set the model to the view
            //this.getView().setModel(oSentModel, "sentMessagesSet");



            // var oViewModel = new JSONModel({
            //     currency: "EUR"
            // });

            //console.log(oViewModel);
            // this.getView().setModel(oViewModel, "view");
            //oTable.setBindingContext(oSentModel)
            //oTable.bindAggregation("cells", { path: 'sentMessagesSet>/sentMessages' })


            // 4. use a filter with the "phone" key
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

            //route "name" corresponding to the one set in the descriptor
            //substr the first chr '/' as it's not allowed in URL
            oRouter.navTo("detail", {
                contactPath: window.encodeURIComponent(oItem.getBindingContext("chatsSet").getPath().substr(1))
            });
        }
    });
});

