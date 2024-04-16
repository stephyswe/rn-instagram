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

### 25_4.7 Deep Linking

https://reactnavigation.org/docs/deep-linking/#set-up-with-bare-react-native-projects
```
* ios
- ios/instagram/AppDelegate.mm
npx uri-scheme add notjustphotos --ios
npm run ios
- minimize app
npx uri-scheme open notjustphotos:// --ios
ios - open safari - search: "notjustphotos://" - open in app
git add .
git commit -m "ios deep linking"
.
* android
npx uri-scheme add notjustphotos --android
npm run android
- minimize app
npx uri-scheme open notjustphotos:// --android

- open app
```

https://reactnavigation.org/docs/configuring-links
```
npx uri-scheme open notjustphotos://comments --android/ios
npx uri-scheme open notjustphotos://user/123 --android/ios
```

### 26_4.8 Top Tab Bar

https://reactnavigation.org/docs/material-top-tab-navigator
```
npm i @react-navigation/material-top-tabs@^6.1.1 react-native-tab-view@^3.1.1
npm i react-native-pager-view@^5.4.11
ios: npx pod-install
```

### 27_5.1 What is AWS Amplify

...

### 28_5.2 Sign up for an AWS account

aws
```
- signup
* IAM
MFA: Add MFA 
- Device name: "mc" 
- Authenticator App 
- add QR  
- Assign MFA Device 
Users:
- Create User 
- name: "Stephy" 
- enable "Provide user access to the AWS Management Console" 
- select "I want to create an IAM user"
> Next
- select "Attach policies directly"
- enable "AdministratorAccess"
> Next
> "Create user"
* Copy Credentials (3 rows)
* Open sign-in URL
.
* add username, password & sign in 
* add new password - confirm
.
why? disallow billing plan
* sign out - signin root
Billing: 
* usermenu - billing & cost management
- budgets 
- create budget 
- customize
- cost budget (rec)
> Next
* "Enter your budgeted amount ($): 10"
* "Budget name: 10$ account budget"
> Next
> "Add an alert threshold"
- "threshold: 80"
- "trigger: forecasted"
- email: e@.com"
> Next
> Next
> Create budget
```

### 29_5.3 Configure Amplify

create amplify user
```
cmd:
npm i -g @aws-amplify/cli
amplify configure
.
web: https://console.aws.amazon.com/
* aws signin - IAM user - account: "..." - 
> Next - Signin
.
cmd: 
<enter>
region: eu-north-1
.
web:
enter username: "amplify-user"
- enable "Provide user access to the AWS Management Console" 
- select "I want to create an IAM user"
> Next
- select "Attach policies directly"
- enable "AdministratorAccess"
> Next
> Create user
* open user - "create access key"
- Command Line Interface (CLI)
> Next
- description tag: amplify
> Create access key
(save access key and secret key)
> Done
.
cmd:
continue <enter>
paste <access key>
paste <secret key>
default <enter>
```

```
bash:
ls ~/.aws/
cat ls ~/.aws/credentials / config
```

### 30_5.4 Create the app backend

```
web: 
login aws Stephy 
- change region to eu-north-1
- aws amplify
- new app - build an app
- name: "instagram"
- confirm deployment
(wait)
- backend - launch studio
``` 

### 31_5.5 Connect our app to the backend

docs: https://docs.amplify.aws/react-native/start/getting-started/setup/#install-amplify-libraries

```
aws Stephy - amplify studio
- local setup instructions
* copy command
.
cmd rn-instagram:
* paste command
.
- open link
(retry if not working)
* select "visual studio code"
* select "javascript"
* select "react native"
* [src] <enter>
* [/] <enter>
* [build cmd] <enter>
* [start cmd] <enter>
* [modify backend] Y
.
cmd rn-instagram:
* install from docs
npm install aws-amplify @aws-amplify/react-native @react-native-community/netinfo @react-native-async-storage/async-storage react-native-get-random-values
.
ios: 
npx pod-install
npm run ios
.
* edit App.tsx
re-run npm start / npm run android
```

### 32_6.1 Authentication

...

### 32_6.1 Authentication

...