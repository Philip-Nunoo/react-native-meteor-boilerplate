# React Native Meteor Boilerplate

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [React Native Meteor Boilerplate](#react-native-meteor-boilerplate)
  - [Getting Started](#getting-started)
  - [Running on iOS Simulator](#running-on-ios-simulator)
  - [Running on iOS Device](#running-on-ios-device)
  - [Running on Android Simulator](#running-on-android-simulator)
  - [Running on Android Device](#running-on-android-device)
  - [Linux Setup for Android Dev](#linux-setup-for-android-dev)
  - [Questions?](#questions)

<!-- /code_chunk_output -->

This is a simple way to get started building an app with React Native and Meteor. It is opinionated to make it easy for people to start but if you have your own way of doing things it's very easy to swap things out and move them around however you see fit.

As it currently stands this project is only focused on configuring the React Native project. The Meteor side is up to you. For thoughts on how to structure your Meteor App I would suggest you read the [Meteor Guide](http://guide.meteor.com/) and the [Mantra spec](http://mantrajs.com/).

You can checkout a _very_ quick walkthrough of the project [here](https://www.youtube.com/watch?v=vM4axvopnJc).

## Getting Started

- [Install Meteor](https://www.meteor.com/install)
- [Install React Native](https://facebook.github.io/react-native/docs/getting-started.html#content)
- Clone Repo: `git clone https://github.com/Philip-Nunoo/react-native-meteor-boilerplate.git`
- From the `MeteorApp` directory run `meteor npm install`
- From the `RNApp` directory run `npm install`

## Running on iOS Simulator

_Note_: You must be on a Mac for this.

- Be sure your Meteor app is running: In the ```MeteorApp``` directory, type ```meteor```

You've got a few ways you can run the app for iOS:

- From the `RNApp` directory run `react-native run-ios`

## Running on iOS Device

_Note_: You must be on a Mac for this.

- Be sure your Meteor app is running: In the ```MeteorApp``` directory, type ```meteor```
- Get the IP address of your machine (you can run `ipconfig getifaddr en1` to do so)
- In `RNApp/app/config/settings.js` change `localhost` to your machine's IP address
- Plug your device into your computer (make sure it's on the same network)
- Open the project in Xcode
- Select your device in Xcode and press "Build and run"

For further information please reference the [official docs](https://facebook.github.io/react-native/docs/running-on-device#running-your-app-on-ios-devices).

## Running on Android Simulator

- Be sure your Meteor app is running: In the ```MeteorApp``` directory, type ```meteor```
- Get the IP address of your machine
- In `RNApp/app/config/settings.js` change `localhost` to your machine's IP address
- Make sure you have an emulator configured and running.
- From the `RNApp` directory run `react-native run-android`

On OSX you can get your IP address by running `ipconfig getifaddr en1` in a terminal window.

On linux running `ifconfig` will get you a list of your network interfaces along with their IP addresses. For the stock Google simulator you will want to use the IP of your active network connection (probably `eth0` or `wlan0`). If you are using the Genymotion simulator, it runs in a Virtual Box VM with a Host-only network interface. You will want to use the IP address of this network which may look like vboxnet0 under ifconfig.

## Running on Android Device

- Be sure your Meteor app is running: In the ```MeteorApp``` directory, type ```meteor```
- Make sure [USB Debugging is enabled](https://facebook.github.io/react-native/docs/running-on-device#1-enable-debugging-over-usb)
- Plug your device into your computer
- Run `adb devices` to make sure your device shows up
- Run `adb reverse tcp:8081 tcp:8081`
- In `RNApp/app/config/settings.js` change `localhost` in `METEOR_URL` to your computer's IP address (see note in "Running on Android" section on how to get your IP Address)
- Run `react-native run-android`

For further information please reference the [official docs](https://facebook.github.io/react-native/docs/running-on-device#running-your-app-on-android-devices).

## Linux Setup for Android Dev

Configure how the device will connect to the meteor server. See [running android on a device](https://facebook.github.io/react-native/docs/running-on-device#running-your-app-on-android-devices) to pick from the options.

Plug in your device and use _lusb_ to find the first 4 digits of  your device ID.
> lsusb
Bus 001 Device 003: ID 04e8:2e76 Motorola PCS

Enter this in udev rules. In the example we are copying over `04e8`
> echo SUBSYSTEM=="usb", ATTR{idVendor}=="04e8", MODE="0666", GROUP="plugdev" | sudo tee /etc/udev/rules.d/51-android-usb.rules

Check that your device is properly connecting to ADB, the Android Debug Bridge, by using:
> adb devices

_Note:_ You should have only one active ADB connection. If you have a simulator running you should close it before proceeding.

These steps are abstracted from the pages [running on device](https://facebook.github.io/react-native/docs/running-on-device#running-your-app-on-android-devices) selecting the Linux Tab.

## Questions?

If you have any questions please open an issue. Thanks!
