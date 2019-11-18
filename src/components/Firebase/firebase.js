import app from 'firebase/app';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyBNLaExJZZ9ncNKbprnmpgllaOTBCj4SpU",
    authDomain: "employee-43877.firebaseapp.com",
    databaseURL: "https://employee-43877.firebaseio.com",
    projectId: "employee-43877",
    storageBucket: "employee-43877.appspot.com",
    messagingSenderId: "780692811566",
    appId: "1:780692811566:web:6718242617b1dc277994bf",
    measurementId: "G-T2CX82PRPC"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
