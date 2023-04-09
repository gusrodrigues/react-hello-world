# react-hello-world

# Fonte
https://www.devmedia.com.br/primeiro-app-com-react-native/40737


# Install node.js
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Start project
npm install --global expo-cli
expo init HelloWorld
npx expo start


#~/Android/cmdline-tools/latest/bin/sdkmanager



export ANDROID_HOME=/home/gustavo/Android/
export ANDROID_SDK_HOME=/usr/lib/jvm/java-1.11.0-openjdk-amd64
export ANDROID_AVD_HOME=/home/gustavo/.android/avd
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$ANDROID_AVD_HOME
source ~/.bashrc

export NODE_OPTIONS=--openssl-legacy-provider