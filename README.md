# NA Italia

This app is built for Andoid and Apple devices using the Ionic Framework (For more details see https://ionicframework.com/)

## Apple iphone/ipad app link

https://apps.apple.com/us/app/na-italia/id1361228007

## Android phone/tablet link

https://play.google.com/store/apps/details?id=org.naitalia.app

## Build it yourself (on a mac)

You will need to follow the guidelines to build ionic capacitor apps at https://capacitorjs.com/docs.

At a minimum, run the following commands to run the app in a browser

```
git clone https://github.com/paulnagle/NA-Italy-2.git
cd NA-Italy-2
npm install -g @ionic/cli
npm install
ionic build
ionic serve
```

The `ionic serve` command should load the web version of the app to a browser on your laptop, which will be visible on http://localhost:8100/home

To build the smartphone apps, you will need to have Xcode installed (for ios apps) and Android Studio installed (for android apps)

To open the ios project in Xcode, run
```
ionic cap build ios
```

To open the android project in Android Studio, run 
```
ionic cap build android
```

## Branches
The default branch is called `version_4`
This corresponds to the 4.xx.xx releases for Apple and Android.

`version_4` uses only capacitor plugins.
`version_3` and earlier used ionic native and Cordova plugins, some on which are no longer supported.

The `version_3` branch holds the source code for the old version 3.xx.xx releases.
