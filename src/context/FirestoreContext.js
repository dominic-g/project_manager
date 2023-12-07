// context/FirestoreContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { firestore } from '../firebase/firebaseConfig';

const FirestoreContext = createContext();

const FirestoreProvider = ({ children }) => {
  const [db, setDb] = useState(null);

  useEffect(() => {
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