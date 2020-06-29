import React, { createContext, useEffect, useState } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import "firebase/auth";
import * as firebase from "firebase";

export const AppContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyDVeXSe08lTxf9dhtXxrdDEtGp4N6A659A",
  authDomain: "la-ferme-13b4d.firebaseapp.com",
  databaseURL: "https://la-ferme-13b4d.firebaseio.com",
  projectId: "la-ferme-13b4d",
  storageBucket: "la-ferme-13b4d.appspot.com",
  messagingSenderId: "752554403455",
  appId: "1:752554403455:web:29256354444197ac10814a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const FBContext = ({ children, signInWithGoogle, signOut, user }) => {
  const [appUser, setAppUser] = useState({});
  const handleSignOut = () => {
    signOut();
    setAppUser({});
  };
  useEffect(() => {
    if (user) {
      console.log(user);
      setAppUser(user);
    }
  }, [user]);
  return (
    <AppContext.Provider value={{ handleSignOut, signInWithGoogle, appUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(FBContext);
