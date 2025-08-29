import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import {getAuth, initializeAuth, Auth } from 'firebase/auth';
import {getStorage} from 'firebase/storage'
import {API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID} from '@env'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
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
