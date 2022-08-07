# react-native-todo
React Native Basic Todo App, with Expo CLI

# Setup
1. Install Dependencies
    ```
    yarn
    ```

# Start
1. Running
    ```
    yarn start
    ```
2. Choose Device
   1. Real Device
      1. Download `Expo Go`
      2. If Android, open Expo Go and scan QR shown in terminal
      3. If IOS, open Camera and scan QR shown in terminal
   2. Emulator Device
      1. If Android, press **a**
      2. If IOS, press **i**

# Build
- Make sure you have installed expo-cli and eas-cli. More on https://docs.expo.dev/archive/classic-updates/building-standalone-apps/
  ```
  npm install -g expo-cli
  npm install -g eas-cli
  ```
- Build
  ```
  expo build:android -t apk
  ```
  Or
  ```
  eas build -p android
  ```