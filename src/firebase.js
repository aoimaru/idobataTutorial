import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyBTmcvFd2RNlrH9tDkRJWTzpWwfT13s6Ak",
    authDomain: "fir-tutorial-96d59.firebaseapp.com",
    projectId: "fir-tutorial-96d59",
    storageBucket: "fir-tutorial-96d59.appspot.com",
    messagingSenderId: "850886837385",
    appId: "1:850886837385:web:2682cee7acce1080637258"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
    messageRef.push({ name, text });
};
