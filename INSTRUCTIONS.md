*** NotDev - App 1 - Title: ... ***

# 1. Initial setup

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

