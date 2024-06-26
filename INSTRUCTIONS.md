*** NotDev - Instagram ***

### 1. Default

Speed up: https://reactnative.dev/docs/build-speed

Error handling:
```
if Starting a Gradle Daemon, 1 busy and 1 incompatible Daemons could not be reused, use --status for details

run
adb kill-server
adb start-server
.
./gradlew clean in the android director
```

debug react native - https://deadsimplechat.com/blog/react-native-debugger/#step-1-setting-up-the-react-native-cli-app
```
ex - react native tools
run and debug - select "create a launch.json"
select "react native" - "debug android"
click "debug android"
in android app - ctrl+m -"debug"
```

amplify: https://docs.amplify.aws/react-native/start/getting-started/installation/

how to setup new Amplify: https://www.youtube.com/watch?v=BGtVw_EEKZ8

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

### 33_6.2 Basic Authentication

```
- aws Stephy - amplify studio
- setup - authentication
- configure login
* remove email login
* add username login
- configure sign up
* add attribute - Email + Name
- "password protection settings"
* only select "include lowercase characters"
- "verification message settings"
* Email 
> Deploy - Confirm deployment
(wait)
cmd rn-instagram:
run command
.
add authentication: https://docs.amplify.aws/react-native/start/getting-started/auth/#add-the-amplify-ui-authenticator-component
npm install @aws-amplify/ui-react-native --force
edit App.tsx
.
user in aws cognito:
- aws Stephy - cognito - instagram-staging - users
```

### 34_6.3 Custom Authentication Screens

migration guide: https://docs.amplify.aws/javascript/build-a-backend/auth/auth-migration-guide/#authcurrentuserinfo-deprecated

### 35_6.4 Social providers prerequisite

rename project (if req):
```
npx react-native-rename "notJust Photos" -b dev.notjust.photos
ios: 
open in xcode - general - change "bundle identifier"
npx pod-install ios
.
npm start -- --reset-cache
```

email instead of username (v5-issue /w social login)
```
delete all authentication rules
configure login - remove username - add email
configure signup - have "email & name"
> Deploy
copy & run command in cmd
re-start app
```

social provider: https://docs.amplify.aws/react-native/build-a-backend/auth/add-social-provider/

### 36_6.5 Social providers

!! FACEBOOK NOT WORKING unless BUSINESS OWNER!

https://docs.amplify.aws/react-native/build-a-backend/auth/add-social-provider/

FACEBOOK
```
signup dev - https://developers.facebook.com/ 
- register
- verify account - mobile num
- contact info - agreement
- about you - developer
- complete registration
.
create app:
- Add use case - Authenticate and request data from users with Facebook Login
- Login type - No, I'm not building a game
- App detail - notJust photos
> Create app
.
custom app:
app settings - basic
* save app id & secret
```

GOOGLE 
```
start - https://console.cloud.google.com/getting-started
project - new project
notJust photos
> create
- open project
* APIs & services - credentials
.
- configure consent screen
* external - create
app information
* name: notJust Photos
* email / developer email: <same>
> Save and continue x2
* test users - add users - <email> - add
> Save and continue
> Back to dashboard
- credentials - create credentials - oauth client id - web application - create
* save id and secret
```

Amplify Studio
```
FACEBOOK
- Authentication - add login mechanism - Facebook
* add id and secret
* sign in & sign-out URLS - "notjustphotos://"
- based on: android/app/src/main/AndroidManifest.xml - android:scheme

GOOGLE
- Authentication - add login mechanism - Google
* add id and secret

copy <redirect url>

> Deploy 
run command in cmd

Issue fix when URL cannot be set: 
- "add placeholder: https://notjustphoto.dev"
aws - cognito - user pool - "instagram-staging" - app integration - app client list -> "clientWeb" / "client"
- Hosted UI - edit URL - save changes
.
*  if aws-exports.js - redirectSignIn/Out URL is wrong do
- App.tsx - 
const updatedConfig = {
  ...config,
  oauth: {
    ...config.oauth,
    redirectSignIn: 'notjustphotos://',
    redirectSignOut: 'notjustphotos://',
    urlOpener,
  },
};
Amplify.configure(updatedConfig);
```

Complete Facebook
```
https://developers.facebook.com/
App settings - basic 
.
- add platform - Website
> Next
site URL: <paste redirect url>
.
add Privacy Policy URL: (generated policy)
add Data Deletion instruction: (generated policy)
add app Domains: <redirect url until .com>
.
App icon: <https://placehold.co/512x512/png>
Category: "Messaging"
.
> Save changes
.

PRODUCT APP *Require Business, otherwise domain issue*
* Publish app
Products - Facebook Login - settings - Client Oath settings 
* valid Oauth Redirect URIs: <redirect url>
* Allowed Domains for the JS SDK: <redirect url until .com>
> Save changes
.
- Generate Privacy Policy URL
- https://privacypolicies.com
- start here - app 
> Next step
- name: 
- check individual
- country <country>
> Next step
- user collection: "email address", "first name..", "social media"
- device collection: "camera", "location"
- contact: by email - add <email>
> Next step
- provision : "no Pro"
> Next step
- add <email>
>  Generate
> Copy
```

Complete Google
```
https://console.cloud.google.com/
credentials - web client 1 
* authorized JavaScript origins: <redirect url until .com>
* authorized redirect URIs: <redirect url>
> Save
.
VALIDATE user creation
login as google
Amplify Studio - User management - <email> with status EXTERNAL_PROVIDER
```

App 
```
npm install @aws-amplify/rtn-web-browser --force
* edit SocialSignInButtons
```
### 37_6.6 In-app Browser

NONE-required in new Amplify version

otherwise
```
npm i react-native-inappbrowser-reborn@^3.6.3

const urlOpener = async (url: string, redirectUrl: string) => {
  await InAppBrowser.isAvailable();
  const response = await InAppBrowser.openAuth(url, redirectUrl, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false,
  });

  if (response.type === 'success') {
    Linking.openURL(response.url);
  }
};

const updatedConfig = {
  ...config,
  oauth: {
    ...config.oauth,
    redirectSignIn: 'notjustphotos://',
    redirectSignOut: 'notjustphotos://',
    urlOpener,
  },
};
```

### 38_6.7 Lambda triggers

https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html

amplify steps
```
amplify update auth
.
- Walkthrough all the auth configurations
- User Sign-Up, Sign-In, connected with AWS IAM controls (Enables per-user Storage features for images or other content, Analytics, and more) 
* Allow unauthenticated logins?: No
* Do you want to enable 3rd party authentication providers in your identity pool?: No
* Do you want to add User Pool Groups?: No
* Do you want to add an admin queries API?: No
.
* Multifactor authentication (MFA) user login options: OFF
* Email based user registration/forgot password: Enabled
* Specify an email verification subject: <Enter, Verification code: {####}>
* Specify an email verification message: <Enter, Verification code: {####}>
* Do you want to override the default password policy for this User Pool?: No
* Specify the app's refresh token expiration period (in days): <Enter, 30>
* Do you want to specify the user attributes this app can read and write?: No
.
* Do you want to enable any of the following capabilities?: <Enter>
* Do you want to use an OAuth flow?: Yes
*  What domain name prefix do you want to use? <Enter>
.
FIX if not notjustphotos://
* Which redirect signin URIs do you want to edit?
.
*  Do you want to add redirect signin URIs?: No
FIX if not notjustphotos://
* Which redirect signout URIs do you want to edit?
.
* Do you want to add redirect signout URIs?: No
* Select the OAuth flows enabled for this project: Authorization code grant
* Select the OAuth scopes enabled for this project.: <Enter>
* Select the identity providers you want to configure for your user pool: <Enter, Select NONE, otherwise re-enter credentials>
.

(what we wanted)
* Do you want to configure Lambda Triggers for Cognito?: Yes
* Which triggers do you want to enable for Cognito: Post Confirmation <space, enter>
* What functionality do you want to use for Post Confirmation: Create your own module <space, enter>
*  Do you want to edit your custom function now?: No
```

app
```
validate folder ampify/backend/function/InstagramPostConfirmation
- add in src/custom.js - console.log('lambda'); console.log(event);

cmd: 
amplify push - Yes

- re-run app / signin with google - validate work

(open amplify with console)
amplify console

(Amplify Studio)
Setup - Functions - Deployed functions resources (one entry - InstagramPostConfirmation) - Open!
- Code source - valdiate custom.js has console logs
- Monitor tab - (in not appear, make sure to delete user first)

delete user
.
Signout user in app
Aws Cognito - user: instagram-staging
- open google user 
- Actions: disable user access - disable
- (back to user pool - instagram-staging)
- select google user - Delete user
.

re-signin google in app

.
- validate Aws Cognito show [new] google user

- view Lamba function again - Monitor tab
- View CloudWatch logs - 
- select Log streams - one entry - open
- dropdown event log - (validate contain userName: 'google')
```

### 39_7.3 Data Modeling (LONG!)

https://docs.amplify.aws/react-native/build-a-backend/graphqlapi/set-up-graphql-api/

```
(Amplify Studio)
Setup - Data 
- Add model (User)
name              - String!   (is required)
email             - String!
username          - String
bio               - String
website           - AWSURL
nofPosts          - Int!
nofFollowers      - Int!
nofFollowings     - Int!
image             - String
.
- Add model (Post)
description       - String
image             - String
images            - [String!]
video             - String
nofComments       - Int!
nofLikes          - Int!
.
- Add model (Comment)
comment           - String!
.
- Add model (Like)
comment           - String!
.

(relationship)
* User
Post    - 1:n
Comment - 1:n
Like    - 1:n

* Post
Like    - 1:n
Comment - 1:n

> Save and Deploy

run pull command in cmd
```

app
```
validate folder creation amplify/backend/api
.
amplify add codegen
* Choose the code generation language target: typescript
* Enter the file name pattern of graphql queries, mutations and subscriptions: <Enter>
* Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions: Yes
* Enter maximum statement depth [increase from default if your schema is deeply nested]: <Enter, 2>
* Enter the file name for the generated code: src/API.ts
* Do you want to generate code for your newly created GraphQL API: Yes

(Amplify Studio)
- Manage - Content

* Post - Autogenerate - (not working)
* User - Autogenerate - 10
(contraints)
name - first name - 
bio  - sen. length - 15-20

amplify console api
Select from one of the below mentioned services: GraphQL

AWS AppSync - instagram_staging - Queries - 
- update schema.graphql in amplify/backend/api/ - with @belongsTo
amplify push -yes

- AwsSync - Queries - create Posts
.
mutation myMutation {
  createPost(input: {nofComments: 0, nofLikes: 0, userID: [FROM listUsers]})
}
.
listPosts { items { User { id }}}
.

get listPost query to HomeScreen.tsx
- src/graphql/queries/listPosts query

- add listPosts to HomeScreen.tsx
.
import {generateClient} from 'aws-amplify/api';
const client = generateClient();

const fetchPosts = async () => {
  const response = await client.graphql({query: listPosts});
  console.log(response);
};

useEffect(() => {
  fetchPosts();
}, []);
.
re-run app and check "data" in log
```

### 40_7.4 Create users on signUp

```
https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/javascriptv3/example_code/dynamodb/actions/document-client/get.js

(Aws Amplify)
- GraphQL API - deployed resources (instagram)
- Data sources - UserTable - Resources - open "User-"
- Explore items - Items returned (open entry)
. "UserNUM-env" corresponds to 
. - Aws - Dynamodb - Tables - "USERNUM-env"
.
- Aws - Lamda - "InstagramPostConfirmation" - Configuration - Environment variables

* Update PostConfirmation (func) to access API
amplify update function
* Select the Lambda function you want to update: InstagramPostConfirmation
* Which setting do you want to update?: Resource access permissions
* Select the categories you want this function to have access to.: api - <select, Enter>
* Select the operations you want to permit on instagram: Query, Mutation
"""
API_INSTAGRAM_GRAPHQLAPIENDPOINTOUTPUT
API_INSTAGRAM_GRAPHQLAPIIDOUTPUT <-- we use this!
API_INSTAGRAM_GRAPHQLAPIKEYOUTPUT
"""
* Do you want to edit the local lambda function now?: No
- edit custom.js
.

* open amplify/backend/function/../src/instagramPostConfirmation-cloudformation-template.json 
- add LambdaDynamoDBPolicy in Resources

amplify push // not working just re-try

* visit  amplify/function/insta../src/
yarn add aws-sdk

* validate registrate new account (alt. del old id/pw user)
Aws Studio - User Management - delete account <email, w/o EXTERNAL_PROVIDER>
Aws Cognito - User pools - Users - "instagram_staging"

* register new account, confirm account and cloudWatch log
- validate Cognito - Users - new account appear
- validate DynamoDB - tables - "User-" - "explore table items" - ...
- validate Lambda - "instagramPostConfirmation-staging" - Monitor - view CloudWatch log - [latest log] - 
* make sure "User 90fc69cc-f091-7088-bcdc-b47edc561acf has been saved to the database" exists in log
- validate AWS Studio - Content - User table - new user appear
- also, validate AWS AppSync - Queries - listUsers [id,name] - new user apper

fix: del user if wrong from Users DB in AppSync - Mutation
.
mutation MyMutation {
  deleteUser(input: {id: ""})
}
.
```

### 41_7.6 Setup Apollo client

!! Emulator Android not working - signin email/pw - Unknown error in signIn method from import {signIn} from 'aws-amplify/auth';

https://www.apollographql.com/docs/react/get-started/

```
npm i @apollo/client@^3.5.10 graphql@^14.7.0 --legacy-peer-deps

* apollo links [middleware]
- https://docs.amplify.aws/javascript/build-a-backend/graphqlapi/upgrade-guide/

npm i aws-appsync-auth-link@^3.0.7 aws-appsync-subscription-link@^3.0.10 --legacy-peer-deps
- edit apollo/Client.tsx & screens/HomeScreen.tsx

validate listPosts: 
* add nonExistingField to queries.ts in HomeScreen
* ApiError show up 

refactor Button with inline prop

.
fix: re-run app, if error fix so metro understand .cjs files - 
* https://stackoverflow.com/questions/70071602/main-module-field-cannot-be-resolved-after-installing-apollo-client
* https://github.com/apollographql/apollo-client/releases/tag/v3.5.4
inner fix: "please adjust your hateImpl"
* https://github.com/aws-amplify/amplify-cli/issues/3295
```

### 42_7.7 Users CRUD

```
* update depth of graphql from 2to 3 (allow items in user.Posts)
amplify codegen configure
* Choose the code generation language target: typescript
* Enter the file name pattern of graphql queries, mutations and subscriptions: <Enter>
* Enter the file name for the generated code: <Enter>
* Enter maximum statement depth [increase from default if your schema is deeply nested] (2): 3
amplify codegen
- validate API.ts - GetUserQuery - has 3 depth (items)

Commit: ProfileScreen queries & replace types/model with API

* scroll down test in AWS Studio - then scroll down in user profile (refetch)
- name: edit user name
- image: create new post /w image on user

Commit: Scroll down to refetch user profile

* copy graphql/queries - listUser to screens/UserSearchScreen/queries.ts

Commit: UserSearchScreen /w listUsers query

Commit: EditProfileScreen (text color)
Commit: EditProfileScreen - update a user with synced data

Commit: EditProfileScreen - delete user
link: https://docs.amplify.aws/react-native/build-a-backend/auth/manage-user-profile/
* delete user test AWS Studio
- Content - validate user is not there
- Cognito - validate user is not there

fix: error app ProfileScreen
- check if Posts in AWS Studio has null values on image, if so delete that post
```

### 43_7.8 User Unique username

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html
optimze queries |(faster)

```
- edit schema.graphql - User - username index
amplify push -yes
amplify console
Which site do you want to open?: AWS console
(aws console)
- API 

...
amplify console
Which site do you want to open?: Amplify Studio
- Content - User - copy a username

...
(AWS AppSync) - instagram_staging
- Queries
query MyQuery {
  usersByUsername(username: <username){items{id username}}
}

(app)
- screens/EditProfileScreen

Commit: Add usersByUsername & move CustomInput to single file

Commit: Validate username in EditProfileScreen

* remove username
- Amplify Studio - Content - delete username from email user

Commit: User Unique username (navigation screen)
```

### 44_7.9 Posts CRUD

```
* validate HomeScreen refetch
- Amplify Studio - Content - Edit Post - description
app: scroll down in default screen

Commit: HomeScreen refetch posts on scroll down

Commit: rename PostUploadScreen to CameraScreen

Commit: fix: add index.ts to all screens

Commit: Add UploadStackNavigator & reroute to CreatePostScreen

- add mutation createPost to CreatePostScreen
- add input according to CreatePostInput

Commit: CreatePostScreen - create a post

Commit: CreatePostScreen - images and video creation

npm i react-native-popup-menu@^0.15.12 --legacy-peer-deps

Commit: FeedPost - add PostMenu skeleton

- mutation - deletePost

Commit: FeedPost - use PostMenu to delete a post

- copy CreatePostScreen to UpdatePostScreen

Commit: UpdatePostScreen - description from getPost
```

### 45_7.10 Likes CRUD

```
- mutation - createLike
- run doCreateLike
- AWS AppSync - run listLikes query
query MyQuery {
  listLikes {
    items {
      id
      postID
      userID
      User {
        name
      }
    }
  }
}

Commit: FeedPost - createLike initialize

- upd schema.graphql
amplify push -yes
- check schema.graphql for LikesForPostByUser in queries

Commit: FeedPost - custom likesForPostByUser query

```

### FIX_DB Reinstall Amplify Studio

```
amplify delete

.recreate project

### 30_5.4 Create the app backend
### 31_5.5 Connect our app to the backend

npx react-native-rename "notJust Photos" -b dev.notjust.photos

### 33_6.2 Basic Authentication
### 35_6.4 Social providers prerequisite

.Google Login
- AWS Studio - Authentication - Add Login: Google
+ sign in & sign-out: notjustphotos://
- copy & add redirect URL to Cloud Google - Credentials -
- Auth JS orgins: <redirect url until .com>
- Redirect URIs <redirect url>
- Deploy & "amplify pull ..." in project

cmd: npm run start & npm run android
APP: open & create Google account 
- Check in Cognito

### 38_6.7 Lambda triggers
- paste custom.js

### 39_7.3 Data Modeling (LONG!)

!!IMPORTANT - Amplify Studio - Content
- Create data model -  GraphQL API settings - enable conflict resolution (auto merge)
> enables "_deleted" field

.Generate
- Content - User - gen 10 entrees 
- AppSync - queries - create 1 post with 1 comment
.
mutation myMutation {
  createPost(input: {nofComments: 0, nofLikes: 0, userID: [FROM listUsers]})
}
.

.VALIDATE RUN APP

### 42_7.7 Users CRUD

### 43_7.8 User unique username

.VALIADATE RUN APP

### 44_7.9 Posts CRUD

.VALIDATE RUN APP
> Edit Post in Amplify Studio - scroll down in Feed

### 45_7.10 Likes CRUD
```

### 45_7.10 Likes CRUD (contin.)

```
Commit: PostLikesScreen - initial
Commit: fix: schema.graphql - type Like - Post as Post

- add one like from "main user"
- Register new user "Support" - add second like

Commit: FeedPost - doUpdatePost, incrementLikes and upd Like content

Commit: Add useLikeService
```

### 46_7.11 Comments CRUD

```

- update schema.graphql
amplify codegen

type Comment @model @auth(rules: [{allow: public}]) {
  ...
  postID: ID!
    @index(
      name: "byPost"
      queryField: "commentsByPost"
    )
}

APP: HomeScreen - Click "view comments" - Add Comment 

Commit: CommentScreen - Input add Comment

Commit: CommentScreen - Show Comments

Commit: Fix Input - IOS useSafeAreaInsets

APP: Create Comment - Comment Num Inc 

Commit: Add CommentService

EXTRA: Add DeleteComment (Popup-menu or SwipeLeft action)
- LIKE for COMMENT
```

### 47_7.12 Sorting

```
npm i dayjs@^1.11.0 --legacy-peer-deps

update schema.graphql 

"""
type Comment
  ...
  createdAt: AWSDateTime!
  postID: ID!
    @index(
      ...
      sortKeyFields: ["createdAt"]
    )

type Post @model @auth(rules: [{allow: public}]) {
  ...
  createdAt: AWSDateTime!
  type: String!
    @index(
      name: "postsByDate"
      queryField: "postsByDate"
      sortKeyFields: ["createdAt"]
    )
  ...
}
"""

amplify push -yes
amplify codegen

.remove Posts/Comment/Like rows
- AppSync - Delete Post Row

APP: Create one Post - scroll-down to refresh

```

### 48_7.13 Pagination

https://www.apollographql.com/docs/react/pagination/core-api/

```
amplify console - AWS Console - API - View in AppSync - Queries
.
query QueryPost {listPosts{items{id}}}
query QueryComments {commentsByPost(postID: "", , limit: 2) {items {id comment}nexToken}}
.
use nextToken for next page

Commit: Pagination in CommentScreen /w ApolloClient - Click "LoadMore"

Commit: Pagination in HomeScreen - Infinite Scroll
```

### 49_7.14 Real Time Data

https://www.apollographql.com/docs/react/data/queries/#polling
https://www.apollographql.com/docs/react/data/subscriptions

```
copy subset fields createComment in CommentService to CommentScreen subscription

add useSubscription to CommentScreen
*RUN APP - then add Comment in AppSync Queries

mutation MyMutation {
  createComment(input: {comment: "Comment from AppSync", postID: "", userID: ""}) {
    <paste subset fields>
  }
}

log "new Sub" show Subscription data

Commit: Realtime data - show Subscription data

Issue:
- run AppSync w/o all subfields - undefined subscription data
- run AppSync being on another Post CommentScreen - get data from all posts (load issue)

solution: only subscribe for comments on current post

edit schema.graphql

amplify push -yes
amplify codegen

add onCreateCommentByPostId to CommentsScreen

Validation: 
- run AppSync in another post - no subscription data
- run AppSync in same post - subscription data

Commit: Realtime data - show subdata on current post

Commit: Realtime data - show new comment from AppSync

Commit: Realtime data - isNew prop for new comments

Issue: subscribed comments not show in "data" - troubleshoot more
```

### 50_7.15 Authorization

https://docs.amplify.aws/react-native/build-a-backend/graphqlapi/customize-authorization-rules/#authorization-strategies

```
edit schema.graphql - private, instead of public

Authorization modes - Default: API key
(Only if, public api or development)

amplify update api
* Select from one of the below mentioned services: GraphQL
* Select a setting to edit: Authorization modes
* Choose the default authorization type for the API: 
> (only owner of object, edit - Amazon Cognito User Pool)
> (loggedin & not loggedin users - IAM)
> (external providers - OpenID Connect)
> (create authorization funcs - Lambda)
- Select: Amazon Cognito User Pool
*  Configure additional auth types?: No

⚠️ The API_KEY auth type has been removed from the API.
⚠️ If other resources depend on this API, run "amplify update <category>" and reselect this API to remove the dependency on the API key.
⚠️ This must be done before running "amplify push" to prevent a push failure

amplify update function
* Select the Lambda function you want to update: InstagramPostConfirmation
* Which setting do you want to update?: Resource access permissions
*  Select the categories you want this function to have access to.: <api, Enter>
* Select the operations you want to permit on Instagram: <Query, Mutation, Enter>
* Do you want to edit the local lambda function now?: No

edit schema.graphql - @auth(rules: [{allow: private, operations: [read]}, {allow: owner}]) {

amplify push -yes

RUN APP: (Setup Profile - Error 401)
solution: in DynomoDB - User item - Edit Item
add String "owner" field with ID data

AppSync - Queries - [auth provider: Amazon Cognito]
query MyQuery {getUser(id: "") {id name}} - 401 error

.Login
* Press "Login With User Pools"
- Client ID: clientWeb
- email: <email in login>
- password: <password in login>
* Press "Run" - Success

query MyQuery2 {listUsers {items {id name email}}} - Email null, not owner



---

** Troubleshooting **
(if not edit schema.graphql)
** 🛑 @auth directive with 'apiKey' provider found, but the project has no API Key authentication provider configured. ** 

- refactor jwtToken in ApolloClient

Commit: Add Amazon Cognito in Apollo

Fix: In DynamoDB - Post - add ID to "owner" field
RUN APP: Login - Create and Edit Post - Then Delete
```

### 51_8.2 Setup Storage

https://docs.amplify.aws/react-native/build-a-backend/storage/set-up-storage/

```
amplify add storage

? Select from one of the below mentioned services: Content (Images, audio, video, etc.)
√ Provide a friendly name for your resource that will be used to label this category in the project: · storage
√ Provide bucket name: · notjustphotos-media-new
√ Who should have access: · Auth users only
√ What kind of access do you want for Authenticated users? · create/update, read, delete
√ Do you want to add a Lambda Trigger for your S3 Bucket? (y/N) · no

amplify push -yes

AWS - S3
```

### 52_8.3 Uploading Images

https://docs.amplify.aws/react-native/build-a-backend/storage/upload/

```

RUN APP: CameraScreen - Photo Gallery (icon bottom-left) - Select Image - Navigate to CreateScreen with image

create Image - visit S3 Bucket to validate image file (public/image.png)
issue: image doesn't show in home screen

Commit: S3 upload image blob during Camera Screen

https://docs.amplify.aws/react-native/build-a-backend/storage/download/

Commit: Render Image from S3

npm i uuid@^8.3.2 react-native-get-random-values@^1.8.0 --force

Commit: Create Image from Camera + Image Type extension

npm i react-native-keyboard-aware-scroll-view@^0.9.5 --force

RUN APP: Take Picture - can scroll when edit description 

Commit: Allow scroll in CreatePostScreen

Commit: Inset in CameraScreen to Pull down Top menu
```

### 53_8.4 Uploading carousels

```
RUN APP: Select two images from PhotoGallery - Submit - see post /w carousel in HomeScreen
```

### 54_8.5_Uploading videos

```
npm i rn-fetch-blob@^0.12.0

RUN APP: Select video - Submit - see post /w video in HomeScreen

Commit: Not working - Upload and Show Video in HomeScreen

Commit: Uploading videos - progress bar in CreatePostScreen
```

### 55_8.6 Profile_picture

```
RUN APP: EditProfile - change "bio" to something - validate change


Commit: Profile Picture - get profile image from S3 

Commit: Profile Picture - UserImage as Component
```

### 56_8.7 Deleting_files

...

