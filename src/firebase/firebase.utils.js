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

    export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        if(!snapShot.exists){
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            } catch (error) {
                console.log('error creating user', error.message);
            }
        }
        console.log(userRef);
        return userRef;
    }

    
    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({prompt: 'select_account'});
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;

    