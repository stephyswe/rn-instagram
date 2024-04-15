*** NotDev - Instagram ***

### 1. Default

enable android phone
```
phone:
- enable dev: settings - about phone - software information - tap build number 7 times
- settings - dev options - usb debugging: enable
.
win:
- add path: C:\Users\Username\AppData\Local\Android\Sdk\platform-tools
- cmd - "adb devices" - show one entry
```

fix git issues
```
line ending - git config --global core.autocrlf input
```

android package: re-run application

ios packages
```
npx pod-install ios
re-run application
```

android
```
npm start -- --reset-cache
npm run android
```

### 1_2.1 Initial setup

Add NODE,JDK info in link
https://reactnative.dev/docs/environment-setup?os=windows&platform=android&guide=native#jdk-studio

```
open command prompt (administrator)
choco install -y nodejs-lts microsoft-openjdk1
* reboot * 
choco install -y nodejs-lts microsoft-openjdk1
```

* open terminal
```
SETUP ANDROID STUDIO EMULATOR
open android studio - virtual devices - start
.
npx react-native init rn-instagram --template react-native-template-typescript
cd folder
code .
(terminal in vscode)
npm start
(open new terminal)
npm run android
.
IF ON MAC (install native pods for ios)
npx pod-install ios 
npm run ios
```

* test hot-reload by change in App.tsx - `change Step One to Hello`
* show AndroidManifest.xml & build.grade to install deps directly
* App.tsx - entry point

### 2_2.2 Theme colors & fonts

...

### 3_2.3 Vector icons

setup @ https://github.com/oblador/react-native-vector-icons
icon @ https://oblador.github.io/react-native-vector-icons/
```
npm i --save react-native-vector-icons
npm i -D @types/react-native-vector-icons
- ios - UIAppFonts to Info.plist (setup)
- android - fonts.gradle to android/app/build.gradle (setup)
restart app
```

### 4_2.4 Git

working directory, staging area, repository - local
```
git add .
git commit -m ""
create repo in github
push code to repo
.
git status
git fetch
```

### 5_3.1 Post component UI

...

### 6_3.2 Custom component

...

### 7_3.3 Props type safe

debug with console - https://www.youtube.com/watch?v=_Qe-7zXsWaw
```
package.json - "start": "react-native start --experimental-debugger",
npm start - "j" - (opens rn dev tool)
```

### 8_3.4 Feed list

...

### 9_3.5 State for likes

...

### 10_3.6 Image Carousel

swipe image: press image and swipe

### 11_3.7 Video Post

```
npm i react-native-video@5.2.0
npm i -D @types/react-native-video@^5.0.10
add fix in android/build.gradle from https://github.com/react-native-video/react-native-video/issues/2468#issuecomment-913709636
```

### 12_3.8 Comments Page

...

### 13_3.9 Comment Input

...

### 14_3.10 Profile Page

...

### 15_3.11 Edit Profile UI

...

### 16_3.12 React Form Hook

`npm i react-hook-form@^7.20.5`

### 17_3.13 Image picker

```
https://github.com/react-native-image-picker/react-native-image-picker?tab=readme-ov-file#post-install-steps
- Select image/video from photos / NSPhotoLibraryUsageDescription
npm i react-native-image-picker@^4.3.0
```

### 18_3.14 Post upload camera

```
https://docs.expo.dev/versions/latest/sdk/camera/
https://docs.expo.dev/bare/installing-expo-modules/
npx install-expo-modules@latest
Do you want to install the Expo CLI integration? ... no
.
git add .
git commit -m "18: install expo modules"
.
npx expo install expo-camera
only mac: npx pod-install
- config ios/instagram/Info.plist
- config android/app/src/main/AndroidManifest.xml
- config: android/build.gradle
.
chapter - enable android phone
```

### 19_4.1 Overview and Setup (navigation)

https://reactnavigation.org/docs/getting-started
```
npm i @react-navigation/native@^6.0.6 react-native-screens@^3.10.1 react-native-safe-area-context@^3.4.1
mac: npx pod-install
- android/app/src/main/java/.../MainActivity.kt
- App.tsx
```

### 20_4.2 Stack navigator

https://reactnavigation.org/docs/stack-navigator
```
npm i @react-navigation/native-stack@^6.2.5
```


### 21_4.3 Moving Between Screens

https://reactnavigation.org/docs/stack-navigator
```
npm i @react-navigation/native-stack@^6.2.5
```

### 22_4.4 Bottom Tab Navigator

https://reactnavigation.org/docs/bottom-tab-navigator
```
npm i @react-navigation/bottom-tabs@^6.0.9
```

### 23_4.5 Other screens

...

### 24_4.6 Type checking with TypeScript

...