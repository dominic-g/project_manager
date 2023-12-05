// FirebaseProvider.js
import React from 'react';
import { AuthProvider } from '../context/AuthContext'; 
import { FirestoreProvider } from '../context/FirestoreContext';
import { firestore } from '../firebase/firebaseConfig';

const FirebaseProvider = ({ children }) => {
  return (
    <AuthProvider firebase={firestore}>
      <FirestoreProvider firebase={firestore}>
        {children}
      </FirestoreProvider>
    </AuthProvider>
  );
};

export { FirebaseProvider };
