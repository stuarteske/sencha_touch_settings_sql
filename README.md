sencha_touch_settings_sql
=========================

Sencha touch system to store app settings as key value pairs. The settings will be stored in a web sql database.

## Usage Example

// Get the store
var settingsStore = Ext.getStore('SettingsData');

/** 
 * getSetting()
 * Get setting will look for the setting within
 * the webSql database. If nothing is found the
 * setting will be set using the data provided.
 * @param dataKey string
 * @param defaultValue string
 * @return string
 */
var settingValue = settingsStore.getSetting(
     'setting_key_value',
     'a_defalut_value'
);

/** 
 * setSetting()
 * set setting will look for the setting within
 * the webSql database. If nothing is found the
 * setting will be set using the data provided.
 * If a record is found then an update will be 
 * made the the record.
 * @param dataKey string
 * @param defaultValue string
 * @return string
 */
var settingValue = settingsStore.setSetting(
     'setting_key_value',
     'a_defalut_value'
);
