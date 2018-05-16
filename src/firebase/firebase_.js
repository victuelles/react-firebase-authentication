import * as firebase from 'firebase'
//Firebase  project for Production
const prodConfig = {
    apiKey: "",
    authDomain: "---.firebaseapp.com",
    databaseURL: "https://---.firebaseio.com",
    projectId: "---",
    storageBucket: "---.appspot.com",
    messagingSenderId: "---"
}

//Firebase project on dev
const devConfig = {
    apiKey: "",
    authDomain: "---.firebaseapp.com",
    databaseURL: "https://---.firebaseio.com",
    projectId: "---",
    storageBucket: "---.appspot.com",
    messagingSenderId: "---"
  }

  const config= process.env.NODE_ENV==='production'
                ? prodConfig
                : devConfig;
                
if(!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
}