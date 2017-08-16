/**
 * cordova is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright (c) Matt Kane 2010
 * Copyright (c) 2011, IBM Corporation
 */

var _qrProxy = require('cordova-plugin-qrcodejs.QRCcodeJSProxy');

/**
 * Constructor.
 *
 * @returns {BarcodeScanner}
 */
function QRCodeJS() {

    /**
     * Encoding constants.
     *
     * @type Object
     */
    this.Encode = {
        TEXT_TYPE: "TEXT_TYPE",
        EMAIL_TYPE: "EMAIL_TYPE",
        PHONE_TYPE: "PHONE_TYPE",
        SMS_TYPE: "SMS_TYPE"
        //  CONTACT_TYPE: "CONTACT_TYPE",  // TODO:  not implemented, requires passing a Bundle class from Javascript to Java
        //  LOCATION_TYPE: "LOCATION_TYPE" // TODO:  not implemented, requires passing a Bundle class from Javascript to Java
    };

    /**
     * Barcode format constants, defined in ZXing library.
     *
     * @type Object
     */
    this.format = {
        "all_1D": 61918,
        "aztec": 1,
        "codabar": 2,
        "code_128": 16,
        "code_39": 4,
        "code_93": 8,
        "data_MATRIX": 32,
        "ean_13": 128,
        "ean_8": 64,
        "itf": 256,
        "maxicode": 512,
        "msi": 131072,
        "pdf_417": 1024,
        "plessey": 262144,
        "qr_CODE": 2048,
        "rss_14": 4096,
        "rss_EXPANDED": 8192,
        "upc_A": 16384,
        "upc_E": 32768,
        "upc_EAN_EXTENSION": 65536
    };
};


//-------------------------------------------------------------------
QRCodeJS.prototype.encode = function (type, data, successCallback, errorCallback, options) {
    if (errorCallback == null) {
        errorCallback = function () {};
    }

    if (typeof errorCallback != "function") {
        console.log("QRCodeJS.encode failure: failure parameter not a function");
        return;
    }

    if (typeof successCallback != "function") {
        console.log("QRCodeJS.encode failure: success callback parameter must be a function");
        return;
    }

    // equivalent to cordova.exec
    _qrProxy.encode(successCallback, errorCallback, [{
        "type": type,
        "data": data,
        "options": options
    }])
};

var qrcodejsExport = new QRCodeJS();
module.exports = qrcodejsExport;