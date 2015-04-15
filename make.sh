cordova build --release android
rm ~/learing/designiot-app/platforms/android/ant-build/DesignIOT.apk
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/my-release-key.keystore ~/learing/designiot-app/platforms/android/ant-build/MainActivity-release-unsigned.apk alias_name
~/android-sdk/build-tools/22.0.0/zipalign -v 4 platforms/android/ant-build/MainActivity-release-unsigned.apk DesignIOT.apk
