var AppPreferencePlugin = module.exports = {
	fetch: function(key, successCallback, errorCallback) {
		// fetch have optional dict parameter
		// so, you can access parameter via fetch (dict, key), or fetch (key)
		var dict = '';
		// dict, key, cb at least
		if (arguments.length >= 3 && typeof arguments[1] != 'function') {
			dict = key;
			key  = arguments[1];
			successCallback = arguments[2];
			errorCallback   = arguments[3];
		}

		var _successCallback = function (response) {
			var result;
			try {
				result = JSON.parse (response);
			} catch (e) {
				result = response;
			}
			successCallback (result);
		};

		var execStatus = cordova.exec (
			_successCallback, errorCallback || function () {},
			"AppPreferences", "getSetting", [{
				key:  key,
				dict: dict
			}]
		);
	},
	store: function(key, value, successCallback, errorCallback) {
		// fetch have optional dict parameter
		// so, you can access parameter via store (dict, key, value), or store (key, value)
		var dict  = '';
		// dict, key, value at least
		if (arguments.length >= 3 && typeof arguments[2] != 'function') {
			dict  = key;
			key   = arguments[1];
			value = arguments[2];
			successCallback = arguments[3];
			errorCallback   = arguments[4];
		}

		value = JSON.stringify (value);

		var execStatus = cordova.exec (
			successCallback || function () {}, errorCallback || function () {},
			"applicationPreferences", "setSetting", [{
				key:   key,
				dict:  dict,
				value: value
			}]
		);
	}

};