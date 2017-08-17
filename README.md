
# QRCodeJS

An Apache Cordova plugin for generating QR code as Base64 encoded URL string.

It's a pure JavaScript implementation that can run an just any platform.

 All platforms are supported:
 * Android
 * Blackberry
 * Browser
 * iOS
 * OSX
 * Ubuntu
 * Windows
 * etc (remembers? it's pure JavaScript)

# How to use it

```bash
ionic plugin add cordova-plugin-qrcodejs
```
or

```bash
cordova plugin add cordova-plugin-qrcodejs
```

Then at the top of your  Typescript code:

```javascript
declare var cordova: any

```

```javascript
cordova.plugins.qrcodejs.encode('TEXT_TYPE', 'myemail@mydomain.me', (base64EncodedQRImage) => {
      console.info('QRCodeJS response is ' + base64EncodedQRImage);
      //TODO: use your base64EncodedQRImage
    }, (err) => {
      console.error('QRCodeJS error is ' + JSON.stringify(err));
    });

```

Or with more options

```javascript

let options = {
	width: 256,
	height: 256,
	colorDark: "#000000",
	colorLight: "#ffffff",
};

cordova.plugins.qrcodejs.encode('TEXT_TYPE', 'myemail@mydomain.me', (base64EncodedQRImage) => {
	console.info('QRCodeJS response is ' + base64EncodedQRImage);
  //TODO: use your base64EncodedQRImage
}, (err) => {
	console.error('QRCodeJS error is ' + JSON.stringify(err));
}, options);

```



# Tested on
* Browser
* Android
* ? (please, let me know if it works for you on other platforms)

# The Why
Initially, I had a look at the official cordova plugin [phonegap-plugin-barcodescanner](https://github.com/phonegap/phonegap-plugin-barcodescanner)

As far as QR code encoding is concerned, it does not work as expected.
* On Android for instance, there is no way of getting hold of the generated image
* Windows is not supported

And as there is nothing native about transforming a string into a QR image, I started digging around and landed on the Blackberry implementation which uses pure JavaScript.

The interface of this plugin is intentionally left identical to the one of the official [phonegap-plugin-barcodescanner](https://github.com/phonegap/phonegap-plugin-barcodescanner)

Hopefully, this plugin will get merged into the official phonegap-plugin-barcodescanner.


# Credits
It is based on the great work done by the Blackberry team at
https://github.com/blackberry/phonegap-plugin-barcodescanner/
wich is based on work done by https://github.com/jeromeetienne/jquery-qrcode


# License

* Apache-2

* &copy; Copiright 2017, Menelic Limited.

