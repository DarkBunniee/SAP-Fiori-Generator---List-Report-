sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onTheZWeB_CON_PURCHASEList.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                
                When.onTheZWeB_CON_PURCHASEList.onFilterBar().iExecuteSearch();
                
                Then.onTheZWeB_CON_PURCHASEList.onTable().iCheckRows();

                When.onTheZWeB_CON_PURCHASEList.onTable().iPressRow(0);
                Then.onTheZWeB_CON_PURCHASEObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});