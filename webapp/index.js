sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
    "use strict";

    new ComponentContainer({
        name: "myapp.chatapp",
        settings: {
            id: "chatapp"
        },
        async: true
    }).placeAt("content");
});