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
				recipient : {
					name: "World",
					location: "Earth",
					pos: "life"
				}
			};
			var	oDataUsers = {
				user1 : {
					name: "brdeav39",
					id: "545789432",
					pos: "analyst",
					level: "5"
				},
				user2 : {
					name: "ddd124",
					id: "124586754",
					pos: "supervisor",
					level: "10"
				},
				user3 : {
					name: "eee4324",
					id: "674788909",
					pos: "analyst 2",
					level: "8"
				}
			};
			var oModelRec = new JSONModel(oDataRec, "oModelRec");
			var oModelUsers = new JSONModel(oDataUsers, "oModelUsers");
			this.setModel(oModelRec);
			this.setModel(oModelUsers);
		}
	});
});