import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import {getAuth, initializeAuth, Auth } from 'firebase/auth';
import {getStorage} from 'firebase/storage'
import {API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID} from '@env'

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

let app: FirebaseApp;
let auth: Auth;
let storage: Storage
if (getApps().length < 1) {
  app = initializeApp(firebaseConfig);
  auth = initializeAuth(app);
} else {
  app = getApp();
  auth = getAuth(app);
}

export {app, auth, storage}
