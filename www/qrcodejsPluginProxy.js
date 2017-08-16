/*
 * Copyright 2017 Menelic Limited.
 * Copyright 2013-2015 BlackBerry Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _qr = require('cordova-plugin-qrcodejs.QRCcodeJSImpl');

const SMS_URI_ONE = "smsto:",
	SMS_URI_TWO = "sms:",
	EMAIL_URI = "mailto:",
	PHONE_URI = "tel:",
	SMS_TYPE = "SMS_TYPE",
	PHONE_TYPE = "PHONE_TYPE",
	EMAIL_TYPE = "EMAIL_TYPE",
	TEXT_TYPE = "TEXT_TYPE";

module.exports = {

	/*
	Method for barcode encoding. Returns base 64 image URI
	Currently only creates QRcodes
	*/
	encode: function (successCallback, errorCallback, args, env) {

		if (!args || args.length == 0 || !args[0]['data']) {
			return errorCallback('argiments are required ')
		}

		var textToEncode = args[0]['data'];
		var type = args[0]['type'];
		var options = args[0]['options'];

		if (!textToEncode) {
			errorCallback("Data to be encoded was not specified");
			return;
		}

		if (!type) {
			type = TEXT_TYPE;
		}

		if (!options) {
			options = {}
		}

		//Always set the data
		options.text = textToEncode;

		// set default width
		if (!options.width) {
			options.width = 256;
		}

		//set default height
		if (!options.height) {
			options.height = 256;
		}

		//set default color
		if (!options.colorDark) {
			options.colorDark = "#000000";
		}

		//set default color
		if (!options.colorLight) {
			options.colorLight = "#ffffff";
		}

		console.debug("Type: " + type + " Options: " + JSON.stringify(options));

		//Make QRcode using qrcode.js
		var bdiv = document.createElement('div');

		var imageURI = _qr.makeQRcode(bdiv, options);

		try {
			successCallback(imageURI);
		} catch (e) {
			errorCallback("Failed to encode QR code");
		}
	}
};