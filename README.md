# Brussels Explorer Frontend
![NPM Version](https://img.shields.io/badge/NPM%20Version-9.6.0-blue)
![React Native](https://img.shields.io/badge/React%20Native-0.70.6-blue)
![Typescript](https://img.shields.io/badge/Typescript-4.8.3-blue) 
<br /> This repo contains the frontend of Brussels Explorer.
<br /> Is only available for Android devices.

## Table of Contents

- [Brussels Explorer Frontend](#brussels-explorer-frontend)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Troubleshooting](#troubleshooting)
  - [Sources](#sources)
    - [Documentations](#documentations)
    - [Video's](#videos)
    - [Websites](#websites)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

Always had the feeling of not having explored Brussels after a tourist trip? This is where Brussels Explorer comes in handy. 
An app that puts together routes for you with local attractions.

## Features

A few of the things you can do with the frontend:

* Navigate to the info page
* Test various endpoints within the api 

## Installation

1. Clone the repository
   ```sh
   git clone https://github.com/HanneloreMaes/Brussels-Explorer-Frontend.git
   ```

2. Open project in an editor-program<br /><br />

3. Open integrated terminal<br /><br />

4. Navigate to the root of the folder <br /><br />
   
5. Enter following command to get all the packages <br />
      ```sh
      yarn
      ```

6. Opening app on an emulator or physical device <br />
   1. If you use a real Android device, connect it to the pc.
   2. If you use a emulator, run it on the machine.<br /><br />
   
7. To install the app on device/emulator, enter in your terminal <br />
   1. To start metro
	  ```sh
      yarn run start
      ```
   2. To install the app on device/emulator
	  ```sh
      yarn run android
      ```
   
8. To open the app on an emulator or device. You need to install Expo-Go<br /><br />
9.  After installing the app, enter in your terminal
   	  ```sh
      yarn start
      ```



## Usage

## Troubleshooting
1. This project is only for Android
2. Error: 'Unable to load script. Make sure you're either running Metro (run 'npx react-native start') or that your bundle 'index.android.bundle' is packaged correctly for release.'
   1. Make sure Metro is running in a terminal (root folder of roject).
   2. Kill the application on device/emulator.
   3. Reopen it on device/emulator.
3. Warning: 'Metro and the client are out of sync. Reload to reconnect.'
   1. Kill the application on device/emulator.
   2. Stop Metro from running in a terminal.
   3. Run Metro again with commmand: 'yarn run start'.
   4. Reopen the application on device/emulator.

## Sources
### Documentations
1. Documentation React Navigation - [Getting Started](https://reactnavigation.org/docs/getting-started)
2. Documentation Material Top Tabs Navigator - [Material Top Tabs](https://reactnavigation.org/docs/material-top-tab-navigator/)
3. Documentation React Native Firebase - Invertase - [Getting Started](https://rnfirebase.io/)
4. Installation React Native Reanimated - [Installation](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation)
5. Documentation ActivityIndicator React Native - [ActivityIndicator](https://reactnative.dev/docs/activityindicator)
6. ESLint Rules - [Rules Reference](https://eslint.org/docs/latest/rules/)
7. Documentation SplashScreen - CrazyCodeBoy - [Github](https://github.com/crazycodeboy/react-native-splash-screen)
8. Documentation React Native Icons - Oblador - [Github](https://github.com/oblador/react-native-vector-icons)
9. Documentation rnmapbox/maps - rnMapbox - [Github](https://github.com/rnmapbox/maps)
10. Documentation React Native Select Dropdown - AdelRedaa97 - [NPM](https://www.npmjs.com/package/react-native-select-dropdown)
11. Documentation React Native Swiper - Leecade - [Github](https://github.com/leecade/react-native-swiper)
12. Documentation React Native Firebase Error - Invertase - [NativeFirebaseError](https://rnfirebase.io/reference/app/nativefirebaseerror)
13. Documentation React Native Geolocation Service - Agontuk - [Github](https://github.com/Agontuk/react-native-geolocation-service)
14. Documentation Geolib - Manuel Bieh - [Github](https://github.com/manuelbieh/geolib/tree/master)
   

### Video's
1. Firebase Authentication Login and Sign Up - 26:33 until 1:18:31 - Sonny Sangha - [Youtube](https://www.youtube.com/watch?v=MJzmZ9qmdaE)
2. Animated Login Form in React Native #1 - notJust.dev - [Youtube](https://www.youtube.com/watch?v=dj0zN72phDo)
3. Animated Login Form in React Native #2 - notJust.dev - [Youtube](https://www.youtube.com/watch?v=onGpjt4mQdE)
4. Search Bar in React Tutorial - Cool Search Filter Tutorial - PedroTech - [Youtube](https://www.youtube.com/watch?v=x7niho285qs)
5. Forgot Password & Reset Password - Bug Ninza - [Youtube](https://www.youtube.com/watch?v=onW84a_p4VA)

### Websites
1. i18n for Multi-Language in React Native - Louis L. - [Levelup](https://levelup.gitconnected.com/complete-i18n-guide-to-support-multi-language-for-your-react-native-app-c5ea4e0fa5b3)
2. Make Your Imports Easy To Write - Huda Prasetyo - [Blog Devgenius](https://blog.devgenius.io/react-native-make-your-imports-easy-to-write-bcb13c0b6c7e)
3. React Native Searchbar from scratch - Kevin Tomas - [LogRocket](https://blog.logrocket.com/create-react-native-search-bar-from-scratch/)
4. Create Store with Redux in React Native - Aman Mittal - [Blog Jscrambler](https://blog.jscrambler.com/how-to-use-redux-persist-in-react-native-with-asyncstorage)
5. Translucent StatusBar Android - Kuray Ogun - [FreakyCoder](https://freakycoder.com/react-native-notes-23-how-to-translucent-statusbar-1b8b7a44139f)
6. Search Filter React Native - Betomoedano - [Medium](https://medium.com/@betomoedano01/search-filter-react-native-search-bar-tutorial-fe3069fa55b5)
7. parserOptions.project error - Rafael Tavares - [StackOverflow](https://stackoverflow.com/questions/58510287/parseroptions-project-has-been-set-for-typescript-eslint-parser)
8. Disable Hardware Back Button - Jickson - [StackOverflow](https://stackoverflow.com/a/40146089)
9. Error Mapbox: loading style failed - [Mapbox](https://docs.mapbox.com/help/glossary/style-url/)
10. Checkbox filter - Mukesh Mandiwal - [Logrocket](https://blog.logrocket.com/adding-checkboxes-tables-react-native-app/)
11. Custom fonts - Noble Okafor - [Make Use Of](https://www.makeuseof.com/react-native-custom-fonts-usage-guide/)
12. Getting value from child - Aturan23 - [StackOverflow](https://stackoverflow.com/a/60487294)