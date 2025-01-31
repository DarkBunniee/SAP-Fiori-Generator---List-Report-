sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'listapp/test/integration/FirstJourney',
		'listapp/test/integration/pages/ZWeB_CON_PURCHASEList',
		'listapp/test/integration/pages/ZWeB_CON_PURCHASEObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZWeB_CON_PURCHASEList, ZWeB_CON_PURCHASEObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('listapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZWeB_CON_PURCHASEList: ZWeB_CON_PURCHASEList,
					onTheZWeB_CON_PURCHASEObjectPage: ZWeB_CON_PURCHASEObjectPage
                }
            },
            opaJourney.run
        );
    }
);