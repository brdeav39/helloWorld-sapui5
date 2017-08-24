sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(UIComponent, JSONModel, ResourceModel) {
	"use strict";
	return UIComponent.extend("sap.ui.helloworld.namespace.Component", {
		metadata: {
			manifest: "json"
		},
		init: function() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// mock data models
			var oDataRec = {
				recipient: {
					name: "World",
					location: "Earth",
					pos: "life"
				}
			};
			var oDataUsers = {
				data: [{
					name: "brdeav39",
					id: "545789432",
					pos: "analyst",
					level: "5"
				}, {
					name: "ddd124",
					id: "124586754",
					pos: "supervisor",
					level: "10"
				}, {
					name: "eee4324",
					id: "674788909",
					pos: "analyst 2",
					level: "8"
				}]
			};

			this.setModel(new JSONModel(oDataRec), "oModelRec");
			this.setModel(new JSONModel(oDataUsers), "oModelUsers");
		}
	});
});