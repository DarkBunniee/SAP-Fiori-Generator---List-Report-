sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'listapp',
            componentId: 'ZWeB_CON_PURCHASEList',
            contextPath: '/ZWeB_CON_PURCHASE'
        },
        CustomPageDefinitions
    );
});