// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBXooApuEhRg4yXG3MfiPponEoq_a2_eFw',
    authDomain: 'zep-salad.firebaseapp.com',
    projectId: 'zep-salad',
    storageBucket: 'zep-salad.appspot.com',
    messagingSenderId: '470952384884',
    appId: '1:470952384884:web:469b8c198532c59011b421',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);