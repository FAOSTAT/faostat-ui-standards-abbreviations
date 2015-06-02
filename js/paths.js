define(function() {

    var config = {
        paths: {
            FAOSTAT_UI_STANDARDS_ABBREVIATIONS: 'faostat-ui-standards-abbreviations',
            faostat_ui_standards_abbreviations: '../'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }
    };

    return config;

});