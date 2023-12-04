// FirebaseProvider.js
import React from 'react';
import { AuthProvider } from '../context/AuthContext'; 
import { FirestoreProvider } from '../context/FirestoreContext';
import { firebase } from '../firebase/firebaseConfig';

const FirebaseProvider = ({ children }) => {
  return (
    <AuthProvider firebase={firebase}>
      <FirestoreProvider firebase={firebase}>
        {children}
      </FirestoreProvider>
    </AuthProvider>
  );
};

export { FirebaseProvider };
