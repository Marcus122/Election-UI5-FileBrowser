sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";
	return  Controller.extend("app.controller.app", {
		onInit : function (evt) {
		},
        getIcon:function(sFile){
            if(!sFile) return "";
            if(sFile.indexOf(".") === -1) return "sap-icon://folder-blank";
            return "sap-icon://document-text";
        },
        drilldown:function(oEvent){
            var oListItem = oEvent.getParameter("listItem");
            var sName = oListItem.getBindingContext("Files").getObject();
            if(sName.indexOf(".") != -1){
                this.getOwnerComponent().readFile(sName);
            }else{
                this.getOwnerComponent().drilldown(sName);
            }
        },
        back:function(){
            this.getOwnerComponent().back();
        }
	});
});