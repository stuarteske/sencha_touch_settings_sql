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

    getSetting: function(dataKey, defaultValue) {

        var returnValue = defaultValue;

        // Query the settings database for an existing record
        var settingRecord = this.queryBy(function(record, id){
            if (record.get('dataKey') === dataKey) return true;
                else return false;
        }, this);

        // Test for the record data
        if (!settingRecord.length) {
            // Empty so set the setting
            this.setSetting(dataKey, defaultValue);
        } else {
            // Found data so return the value
            returnValue = settingRecord.first().get('dataValue');
        }

        return returnValue;
    },

    setSetting: function(dataKey, dataValue) {

        // Query the settings database for an existing record
        var settingRecord = this.queryBy(function(record, id){
            if (record.get('dataKey') === dataKey) return true;
            else return false;
        }, this);

        // Test for the record data
        if (!settingRecord.length) {
            // No record exists so add one.
            this.add({
                'dataKey': dataKey,
                'dataValue': dataValue
            });
        } else {
            // A record was found so update the existing
            settingRecord.first().set('dataValue', dataValue);
        }

        // Save the data
        this.sync();
    }
});
