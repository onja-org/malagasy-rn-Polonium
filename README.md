# Learn-gasy - mobile application that helps to learn Malagasy or English

## Features:
   - around 1000 phrases divided into 42 categories
   - two operating modes where you can set Malagasy or English as primary language
   - randomly generated answers to choose from - keeps challenges always exciting
   - “Seen” and “Learnt” phrases are easily accessible to track learning progress
   - possibility to add new custom phrases and assigning them to existing categories
   - dark/light mode
   - easy navigation
   - persistent storage to track your progress between sessions
   - application once installed does not require internet connection

## Technology/libraries used:
   - React Native
   - Running / testing app in simulator environment (Android studio)
   - storybook 
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
