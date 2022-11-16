sap.ui.define([
    "sap/ui/core/UIComponent",
    'sap/ui/model/json/JSONModel'
], function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("myapp.chatapp.Component", {

        metadata: {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: 'json'
        },

        init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            this.getRouter().initialize(); //create the views based on the url/hash 

            // CHATS MODELS
            var oChatsSet = this.getModel("chatsSetModel");
            var aChatsData = oChatsSet.getData();
            oChatsSet.setData({ "contacts": aChatsData });
            this.setModel(oChatsSet, "chatsSet");

            // //SENT MESSAGES
            var oSentMessages = this.getModel("sentMessagesModel");
            this.setModel(oSentMessages, "sentMessagesSet");
            // var aSentData = oSentMessages.getData();
            // oSentMessages.setData({ "sentMessages": aSentData });
            // this.setModel(oSentMessages, "sentMessagesSet");

            // var sentMessagesModel = this.getModel("sentMessagesModel").getData();
            // console.log(sentMessagesModel);
            // var receivedMessagesModel = this.getModel("receivedMessagesModel").getData();
            // console.log(receivedMessagesModel);

        }
    });
});