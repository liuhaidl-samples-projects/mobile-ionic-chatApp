# This is an ionic mobile chat app

## How to run this chat app
 - git clone https://github.com/liuhaidl-samples-projects/mobile-ionic-chatApp.git
 - cd mobile-ionic-chatApp 
 - npm install //run this command when there is no node_modules folder have been created to load all the necessary js packages. This command will invoke the package.json file
 - npm install -g cordova ionic //run the cordova and ionic modules through npm
 - ionic serve -l //run this app using browser mode with live reload and mobile width and height
 - ionic platform add ios //run this command when you want to add the iso platform support. This command will invoke config.xml file to download the necessary plugins
 - ionic run ios --device //run app in ios with connected usb device
 - ionic run ios --emulator //run app in ios with emulator mode
 - ionic run ios --emulator --target="iPhone-6s" -l//run app in ios with emulator, iPhone-6 and live reload mode to support quick development and testing
 - ionic run ios -l -c -s//run app in ios with live reload mode and print app and server logs to ionic cli console
 
## Issues
- sudo ionic * //please run the above ionic commands with sudo when system admin privilege is required. For example, sudo ionic platforms add ios
- sudo chown -R loginUser:group * //for example chown -R liuhaidl:staff * to resolve the emulator startup failed issue
