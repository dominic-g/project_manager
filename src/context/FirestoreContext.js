// context/FirestoreContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getFirestore } from 'firebase/firestore';
import { firestore } from '../firebase/firebaseConfig';

const FirestoreContext = createContext();

const FirestoreProvider = ({ children }) => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    // Initialize Firestore
    // const firestore_ = getFirestore({firestore});
    setDb(firestore);
  }, []);

  return (
    <FirestoreContext.Provider value={{ db }}>
      {children}
    </FirestoreContext.Provider>
  );
};

const useFirestore = () => {
  const context = useContext(FirestoreContext);
  if (!context) {
    throw new Error('useFirestore must be used within a FirestoreProvider');
  }
  return context;
};

export { FirestoreProvider, useFirestore };