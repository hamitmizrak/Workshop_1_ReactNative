# React Native
npx react-native start --port 9999
npx react-native run-android

# ###########################################################################
## 1-) JDK KUR
```bash
JAVA  => Çevresel Değişkenini tanımla
New => JAVA_HOME  => C:\Program Files\Microsoft\jdk-17.0.11.9-hotspot\
PATH => %JAVA_HOME%\bin
$ java --version (openjdk 17.0.11 2024-04-16 LTS)

Version=> 
java --version, 
javac --version
```
---

# ###########################################################################
## 2-) ANDROID STUDIO KUR
```bash
ANDROID  => Çevresel Değişkenini tanımla 
New => ANDROID_HOME => C:\Users\Hamit-Mizrak\AppData\Local\Android\Sdk
%ANDROID_HOME%\emulator
%ANDROID_HOME%\platform-tools
```
---

# ###########################################################################
## 3-) ANDROID STUDIO KUR ADD DEVICE
```bash
Pixel 4 API 35 üzerinden devam et
NOT: Eğer başlamazsa silip Pixel 4 API 30 R Yükle
```
---


# ###########################################################################
## 4-) ADB (Android Debug Bridge)
```bash
ADB (Android Debug Bridge) => Android İşletim sistemi ile çalışan cihazlarla iletişim kurmak ve onları yönetmek için kullandığımınız komut aracıdır.

NOT: ADB android studio kurduğumuzda geliyor
ADB(Android Debug Bridge) => Çevresel Değişkenini tanımla
$  adb --version

Android Debug Bridge version 1.0.41
Version 35.0.1-11580240
Installed as C:\Users\Hamit-Mizrak\AppData\Local\Android\Sdk\platform-tools\adb.exe
Running on Windows 10.0.22631

$ adb --version
$ adb devices
$ adb install path/to/your/app.apk (Uygulama Yükle)
$ adb uninstall path/to/your/app.apk (Uygulama Sil)
$ adb shell
$ adb logcat
$ adb kill-server
$ adb start-server
$ adb error
```
---
# ###########################################################################
## 5-) MAVEN
```bash
New MAVEN_HOME  => D:\1_Kodlar\maven\apache-maven-3.9.8
PATH => %MAVEN_HOME%\bin

$ mvn -v

```
---

# ###########################################################################
## 6-) CHOCO 
```bash
Windows üzerinde `Powershell` terminalinden programlamalar yüklemek  istiyorsak paket yönetimi olan choco yüklemek

$ Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
$ choco --version

$ choco install -y nodejs.install python2
$ choco install -y nodejs-lts microsoft-openjdk17
```
---

# ###########################################################################
## 7-) NODE JS
```bash
New NVM_SYMLINK  => C:\Program Files\nodejs
PATH => %NVM_SYMLINK%

$ node -v
```
---

# ###########################################################################
## 8-) NPM
```bash
New NPM_HOME  => C:\Users\Hamit-Mizrak\AppData\Roaming\npm
PATH => %NPM_HOME%
$ npm -v
```
---

# ###########################################################################
## 9-) NVM (Node Version Manager)
```bash
Node.js farklı sürümlerini yönetmemize yarayan komut satıdır.

~~POWERSHELL Yönetici olarak Aç~~
$ nvm install node
$ nvm use node

$ nvm --version
$ nvm install latest
$ nvm use latest

$ nvm install 14.17.0
$ nvm use 14.17.0

$ nvm ls (Yüklü Node.js sürümlerini Listele)
$ nvm ls-remote

NVM Not aşağıdaki path otomatik geliyor.
New NVM_HOME  => C:\Users\Hamit-Mizrak\AppData\Roaming\nvm
PATH => %NVM_HOME%
```
---

# ###########################################################################
## 10-) NPM
```bash
## NPM ###
C:\Users\Hamit-Mizrak\AppData\Roaming\npm

## NPM VERSION ###
$ npm --version

## NPM LIST ###
$ npm -g list

## NPM CLEAN ###
$ npm cache clean --force

## NPM INSTALL ###
$ npm install -g typescript

## NPM UNINSTALL ###
$ npm uninstall -g typescript

## NPM OTHER ###
$ npm update
$ npm install
$ npm i

$ npm start --reset-cache
$ npm install -g npm
$ npm install latest

$ rm -rf node_modules
$ npm install
```
---

# ###########################################################################
## 11-) Windows CHOCO İle Yükleme ()
```bash
$ choco install -y nodejs.install python2
$ choco install -y nodejs-lts microsoft-openjdk17
```
---

# ###########################################################################
## 12-) VERSION
```bash
$ java --version
$ javac --version
$ adb --version
$ choco --version
$ node -v
$ npm -v
$ nvm --version
$ git -v
$ mvn -v
```
---

# ###########################################################################
## 13-) NPM INSTALL 
```bash
$ npm uninstall -g react-native-cli
$ npm install -g typescript
$ npm install -g npm
$ npm install http-server -g (terminalde ==> http-server)

```
---

# ###########################################################################
## 14-) ANDROID STUDIO AÇMAK
```bash
Pixel 4 API 35 üzerinden devam et
NOT: Eğer başlamazsa silip Pixel 4 API 30 R Yükle

NOT: Android Virtual Device Üzerinde iken R(2 kez) Reload yapıyor.
```
---

# ###########################################################################
## 15-) REACT NATIVE YÜKLEME (1.YOL)
```bash
NOT: Android Studio Device Açık olmalıdır.

~~POWERSHELL Yönetici olarak Aç~~
$ npx react-native init WorkshopReactNative
$ cd WorkshopReactNative/
$ ls -al
$ code .

$ npx react-native run-android

$ npx react-native start 
$ npx react-native start --port=6666
$ a => android istiyorsam
$ i => ios istiyorsam

Eğer Açılmazsa Android direk çalıştır
$ npx react-native run-android
```
---


# ###########################################################################
## 16-) AKTİF PORT KAPATMAK
```bash
netstat -ano | findstrt:6666
taskill /PID ID /F
```
---

# ###########################################################################
## 17-) REACT NATIVE YÜKLEME (2.YOL)
```bash
npx create-expo-app Deneme2
npx expo start
npx expo start --port=9696
npx expo start --android
npx expo start --ios
```
---


# ###########################################################################
## 18-) REACT NATIVE YÜKLEME (3.YOL)
```bash
npx create-expo-app@latest
```
---



# ###########################################################################
## 19-) Eğer Hata Olursa
```bash
* What went wrong:
java.io.UncheckedIOException: Could not move temporary workspace
Project => android => gradle => wrapper => gradle-wrapper.properties =>distributionUrl=https\://services.gradle.org/distributions/gradle-8.5-all.zip
`
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-8.5-all.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`
$ Ctrl+C
$ npx react-native start
$  cd "D:\1_Kodlar\React Native\ReactNativeTodoList" && npx react-native run-android
$ npx react-native run-android
$ npx react-native doctor
```
---

# ###########################################################################
## 20-) Eğer Hata Olursa Başlamazsa
```bash
Eğer Başlamazsa şunları yapabilirsin

1.adım:  Android Studio Code Pixel 4 35 sil tekrar kur
2.adım:  npm install
3.adım:  npm update
4.adım:  npx react-native doctor
5.adım:  JDK path veya doğru yüklenmiş mi ?
6.adım:  npm cache clean --force
7.adım:  npm start --reset-cache
8.adım:  npx react-native start --reset-cache
9.adım:  npx react-native start 
10.adım:  npx react-native start --port 9999
11.adım:  npx react-native run-android
12.adım:  info Dev server ready ==>  npx react-native run-android

13.adım: port değiştirmek
 "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "lint": "eslint .",
    "start": "react-native start --port 9999",
    "test": "jest"
  },
```
---

# ###########################################################################
## 21-) Eğer Android Doğru Başlamazsa
```bash
cd D:\1_Kodlar\React Native\Workshop1ReactNative4444\android
./gradlew --stop
./gradlew clean
./gradlew --status

./gradlew build --refresh-dependencies
rm -rf ~/.gradle/caches/
rm -rf ~/.gradle/daemon/
rm -rf ~/.gradle/native/
rm -rf ~/.gradle/wrapper/

./gradlew --status
npm install
```
---


# ###########################################################################
## 22-) Snippet 
```bash
Snippet: React Native Snippet author: jundat95
imp

rnc => React Native Class Component
rnce => React Native Class Export Component
rnpc => React Native Class Export PureComponent Component

rnf => React Native Function Component
rnfe => React Native Function Export Component
rnfes => React Native Function Export Component styles
rnfs => React Native Function Component styles
```
---


# ###########################################################################
## 23-) package.json (NOT: Burada Eslint kapattım)
```bash
{
  "name": "WorkshopReactNative",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start --port 9999",
    "test": "jest"
  },
  "dependencies": {
    "@react-native-community/blur": "^4.4.0",
    "@react-navigation/native": "^6.1.18",
    "@react-navigation/native-stack": "^6.11.0",
    "react": "18.3.1",
    "react-native": "0.75.2",
    "react-native-safe-area-context": "^4.10.8",
    "react-native-screens": "^3.33.0",
    "react-native-vector-icons": "^10.1.0",
    "react-redux": "^9.1.2",
    "redux": "^5.0.1"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@babel/preset-env": "^7.20.0",
    "@babel/runtime": "^7.20.0",
    "@react-native/babel-preset": "0.75.2",
    "@react-native/metro-config": "0.75.2",
    "@react-native/typescript-config": "0.75.2",
    "@types/react": "^18.2.6",
    "@types/react-test-renderer": "^18.0.0",
    "babel-jest": "^29.6.3",
    "jest": "^29.6.3",
    "react-test-renderer": "18.3.1",
    "typescript": "5.0.4"
  },
  "engines": {
    "node": ">=18"
  }
}
```
---


# ###########################################################################
## 24-) Proje İçin 
```bash
$ ICON EKLEMEK
npm install react-native-vector-icons --save

android/app/build.gradle 
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"


/*
Font Vector (IOS)
Xcode açalım ve Info.plist dosyasına şu satırları ekleyin

<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
</array>
*/ 

//"eslint": "^8.19.0",
```
---

# ###########################################################################
## 25-) Proje İçin 
```bash
-- BLUR => Hem Android hemde IOS tarafından  çalışır

$ BLUR NPM
npm install @react-native-community/blur

-- KULLANILIŞI
<BlurView 
  style={styles.absolue}
  blurType="light"
  blurAmount={10}
 >
 <Text style={styles.componentText}>Data</Text> 
 </BlurView>

 absolute:{
  position: 'absolute',
  top:0,
  left: 0,
  bottom:0,
  right:0,
  }
  componentText:{
    fonstSize:8,
    color:'white',
    padding:5,
    borderRadiuse:10
  }
 }
```
---

# ###########################################################################
## 26-) Proje İçin 
```bash
$ REDUX 
npm install redux react-redux

Context API, Redux ekleyerek daha esnek ve geniş kapsamlı durum yönetimi sağlayabiliriz.
Bu yapı uygulamamızı modüler , yeniden kullanabilirliği sağlayacaktır.

Context API: Ek bilgileri sağlayacağız.
Redux : Redux kütüphanesini kullanarak yapılandıracağız.
```
---



# ###########################################################################
## 27-) Proje İçin 
```bash

```
---

# ###########################################################################
## 28-) Proje İçin 
```bash

```
---

# ###########################################################################
## 29-) Proje İçin 
```bash

```
---

# ###########################################################################
## 30-) Proje İçin 
```bash

```
---


