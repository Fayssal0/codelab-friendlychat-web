/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyBiFsNWGqi2YNM_7bxEijf_qAwK4dakihI",
  authDomain: "friendlychat-a1269.firebaseapp.com",
  projectId: "friendlychat-a1269",
  storageBucket: "friendlychat-a1269.appspot.com",
  messagingSenderId: "355754602965",
  appId: "1:355754602965:web:61d2e2d1f9a27cf9dd4d5c"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}