# Learn-gasy - mobile application to help people learn Malagasy or English

## Features:
   - Around 1000 phrases divided into 42 categories.
   - Two operating modes where you can set Malagasy or English as primary language.
   - Randomly generated answers to choose from - keeps challenges always exciting.
   - “Seen” and “Learnt” phrases are easily accessible to track learning progress.
   - Possibility to add new custom phrases and assigning them to existing categories.
   - Dark/light mode.
   - Easy navigation.
   - Persistent storage to track your progress between sessions.
   - Once installed, application does not require internet connection.

## Technology/libraries used:
   - React Native
   - Android Studio
   - Storybook 
   - Screen navigation
   - Redux
   - Redux thunk
   - Asynchronous Storage - managing data between sessions
   - Bespoke lightweight translation mechanism
    
# Installation

    yarn install

# Running and testing

to update stories availabe for storybook and run `react-native start`

    yarn start

to test the app on a device (separate terminal)

    yarn android

or 

    yarn ios


# View storybook on the device

Enter dev menu on phone crtl + m (for android) select toggle storybook


# Some of the known problems you might encounter

If you get 

```bash
Error: spawn ./gradlew EACCES
 ```

while running `yarn android`

try

```
chmod 755 android/gradlew 
```
