define(['jquery',
        'handlebars',
        'text!faostat_ui_standards_abbreviations/html/templates.html',
        'i18n!faostat_ui_standards_abbreviations/nls/translate',
        'faostat_commons',
        'wds_client',
        'bootstrap',
        'sweetAlert',
        'amplify'], function ($, Handlebars, templates, translate, FAOSTATCommons, WDSClient) {

    'use strict';

    function ABBREVIATIONS() {

        this.CONFIG = {

            w: null,
            lang: 'E',
            prefix: 'faostat_ui_standards_abbreviations_',
            placeholder_id: 'faostat_ui_standards_abbreviations',
            url_wds_crud: 'http://fenixapps2.fao.org/wds_5.1/rest/crud'

        };

    }

    ABBREVIATIONS.prototype.init = function(config) {

        /* Extend default configuration. */
        this.CONFIG = $.extend(true, {}, this.CONFIG, config);

        /* Fix the language, if needed. */
        this.CONFIG.lang = this.CONFIG.lang != null ? this.CONFIG.lang : 'en';

        /* Store FAOSTAT language. */
        this.CONFIG.lang_faostat = FAOSTATCommons.iso2faostat(this.CONFIG.lang);

        /* Initiate the WDS client. */
        this.CONFIG.w = new WDSClient({
            datasource: this.CONFIG.datasource,
            serviceUrl: this.CONFIG.url_wds_crud
        });

    };

    ABBREVIATIONS.prototype.destroy = function() {

    };

    return ABBREVIATIONS;

});