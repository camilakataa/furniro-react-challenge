import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNFXiFU0MicEwmPMfsXuS0qZ-6bANOE-0",
  authDomain: "furniro-authentication.firebaseapp.com",
  projectId: "furniro-authentication",
  storageBucket: "furniro-authentication.appspot.com",
  messagingSenderId: "927542900738",
  appId: "1:927542900738:web:e7450263fc298bdb804f1b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const dbUsers = getFirestore(app);

export default app;