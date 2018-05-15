import * as firebase from 'firebase'
//Firebase  project for Production
const prodConfig = {
    apiKey: "AIzaSyA12u7Em4wwooH0IwjRQwWo-DQ2onI6ZSg",
    authDomain: "fir-reactredux.firebaseapp.com",
    databaseURL: "https://fir-reactredux.firebaseio.com",
    projectId: "fir-reactredux",
    storageBucket: "fir-reactredux.appspot.com",
    messagingSenderId: "445635951934"
}

//Firebase project on dev
const devConfig = {
    apiKey: "AIzaSyA12u7Em4wwooH0IwjRQwWo-DQ2onI6ZSg",
    authDomain: "fir-reactredux.firebaseapp.com",
    databaseURL: "https://fir-reactredux.firebaseio.com",
    projectId: "fir-reactredux",
    storageBucket: "fir-reactredux.appspot.com",
    messagingSenderId: "445635951934"
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