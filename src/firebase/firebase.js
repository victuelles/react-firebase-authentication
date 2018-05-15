import * as firebase from 'firebase'
//Firebase  project for Production
const prodConfig = {
   
}

//Firebase project on dev
const devConfig = {
   
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
