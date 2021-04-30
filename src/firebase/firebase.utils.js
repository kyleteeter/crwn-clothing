import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyD1zBpI_AhDubvyoNi2cOyEf7_3913STnA",
        authDomain: "crwn-db-205d3.firebaseapp.com",
        projectId: "crwn-db-205d3",
        storageBucket: "crwn-db-205d3.appspot.com",
        messagingSenderId: "166528280061",
        appId: "1:166528280061:web:7168a1c993ea35fa48a594"
    };

    firebase.initializeApp(config);
    
    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({prompt: 'select_account'});
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;