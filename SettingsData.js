Ext.define('CfaSika.store.SettingsData', {
    extend: 'Ext.data.Store',
    requires: ['CfaSika.model.Settings'],

    config :{
        model: 'CfaSika.model.Settings',
            storeId: "SettingsData",
        autoLoad: true,
        listeners: {
            load: function() {
                console.log("SettingsData Load");
            },
            beforesync: function() {
                console.log("SettingsData Before Sync");
            },
            refresh: function() {
                console.log("SettingsData Refresh");
            },
            updaterecord : function() {
                console.log("SettingsData Update Record");
            }
        }
    },

    getSetting: function(key, defaultValue) {
        var settingRecord = this.queryBy(
            'key',
            key
        )

        if (!settingRecord.length) {
            // Set the setting
            this.setSetting(key, defaultValue);
        }

        console.log(settingRecord);
    },

    setSetting: function(key, value) {
        var newSettingRecord = new CfaSika.model.Settings();
        newSettingRecord.set('key', key);
        newSettingRecord.set('data', value);
        newSettingRecord.save();

        console.log(newSettingRecord.data);
    }
});
