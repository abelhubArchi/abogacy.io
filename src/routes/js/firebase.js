import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, logEvent } from "firebase/analytics";
import { onMount, setContext, createEventDispatcher } from "svelte";


const firebaseConfig = {
  apiKey: "AIzaSyBmVgsVyWXafex-nvkh-Wr0CkFradRdEJE",
  authDomain: "abogacy-cc71f.firebaseapp.com",
  projectId: "abogacy-cc71f",
  storageBucket: "abogacy-cc71f.appspot.com",
  messagingSenderId: "449715390549",
  appId: "1:449715390549:web:5b7d33b7f76af8e0c66cdc",
  measurementId: "G-6SLN51L76W"
};
  
     const app = initializeApp(firebaseConfig);
     const db = getFirestore(app);
     //const analytics = getAnalytics();
     //logEvent(analytics, 'notification_received');
