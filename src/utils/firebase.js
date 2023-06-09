import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAtKDP9EU5l0ZZS4Q4r99Fz4DjNqnB3qfs",
    authDomain: "furniture-bingo.firebaseapp.com",
    projectId: "furniture-bingo",
    storageBucket: "furniture-bingo.appspot.com",
    messagingSenderId: "709943293303",
    appId: "1:709943293303:web:9d35065956496f39cfdd72"
};

const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);

const auth = app.auth();

export { auth }