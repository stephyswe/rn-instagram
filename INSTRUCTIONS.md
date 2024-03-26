*** NotDev - Instagram ***

### 1. Default

ios packages
```
npx pod-install ios
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
