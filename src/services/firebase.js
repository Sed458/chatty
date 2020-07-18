import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAp_5C0x7rTGSYDogb7dmWk0ixN7gq4iqk",
    authDomain: "chatty-415da.firebaseapp.com",
    databaseURL: "https://chatty-415da.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();