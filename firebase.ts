import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAe3be_m7HaRLn1ZdoW23qJC2ARVUWunjc",
  authDomain: "sts-club-dev.firebaseapp.com",
  projectId: "sts-club-dev",
  storageBucket: "sts-club-dev.appspot.com",
  messagingSenderId: "997414219294",
  appId: "1:997414219294:web:2294bfd1241a8aba0cc80f"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
