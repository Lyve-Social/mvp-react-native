import fauth from '@react-native-firebase/auth'
import ffirestore from '@react-native-firebase/firestore'
import ffunctions from '@react-native-firebase/functions'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const db = ffirestore()
export const auth = fauth
export const firestore = ffirestore
export const functions = ffunctions
export const uploadMediaFunctionURL =
  'https://us-central1-development-69cdc.cloudfunctions.net/uploadMedia'

const firebaseConfig = {
  apiKey: "AIzaSyD9ImQCkr3YfLjUaf4qZy9_mdP9cMmDhW0",
  authDomain: "lyvesocial-android.firebaseapp.com",
  projectId: "lyvesocial-android",
  storageBucket: "lyvesocial-android.appspot.com",
  messagingSenderId: "441693953910",
  appId: "1:441693953910:web:a97a7f51614f10af1ee457",
  measurementId: "G-GSWYYXLS4W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);