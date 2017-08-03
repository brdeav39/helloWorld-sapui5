sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.App", {
		onInit : function() {
			var oData = {
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			
			var i18nModel = new ResourceModel({
				bundleName : "sap.ui.demo.wt.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");
		},
		onShowHello : function () {
			//this gives warning - doesn't meet Fiori guidelines apparently because oData is private. See subsequent code
			// MessageToast.show("Hello, " + this.getView().getModel().oData.recipient.name);
			
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			
			//show message
			MessageToast.show(sMsg);
			//MessageToast.show("Hello, World");
		}
	});
});