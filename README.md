
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
ionic plugin add https://github.com/MenelicSoftware/cordova-plugin-qrcodejs.git
```
or

```bash
cordova plugin add https://github.com/MenelicSoftware/cordova-plugin-qrcodejs.git
```

Then at the top of your  Typescript code:
```declare var cordova: any
```

```javascript
cordova.plugins.qrcodejs.encode('TEXT_TYPE', 'data to encode', (base64EncodedQRImage) => {
      console.info('=========QRCodeJS response is ' + base64EncodedQRImage)
    }, (err) => {
      console.error('=========QRCodeJS error is ' + JSON.stringify(err))
    })

```

# Credits
It is based on the great work done by the Blackberry team at
https://github.com/blackberry/phonegap-plugin-barcodescanner/
wich is based on work done by https://github.com/jeromeetienne/jquery-qrcode


# License

* Apache-2

* Copiright Menelic Ltd

