// context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, updateProfile, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { app, firestore } from '../firebase/firebaseConfig';
import { doc, getFirestore,setDoc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

const currentAuth = () => {
  return getAuth(app)
}
const createUser = async () => {
  let user = null;
  if(currentAuth().currentUser){
    const User_ = currentAuth().currentUser;
    user = {
      uid:User_.uid,
      email:User_.email,
      displayName: User_.displayName,
      emailVerified: User_.emailVerified
    };

    try{
      const userDetailsRef = doc(firestore, 'userDetails', User_.uid);

      const userDetailsSnapshot = await getDoc(userDetailsRef);
      if (userDetailsSnapshot.exists()) {
        const userDetailsData = userDetailsSnapshot.data();
        if(userDetailsData.firstName && userDetailsData.lastName){
          user.firstName = userDetailsData.firstName;
          user.lastName = userDetailsData.lastName;
          user.updatedDetails = true;
        }else{
          user.updatedDetails = false;
        }
      } else {
        user.updatedDetails = false;
      }
    }catch(err){
      user.updatedDetails = false;
    }
  }

  return user;
}

const AuthProvider = React.memo(({ children }) => {
  const [user, setUser] = useState(currentAuth());
  

  const auth = currentAuth();
  const firestore = getFirestore();

  const storedUser = localStorage.getItem('reactpackagemangeruser');

  const [authenticated, setAuthenticated] = useState(!!storedUser);
  const [gotResponse, setGotResponse] = useState(false);

  if(authenticated && !user){
    let usr = createUser();
    setUser(usr);
  }

  const clearData = () => {
    const storedUser = localStorage.getItem('reactpackagemangeruser');
    if (storedUser) {
      localStorage.removeItem('reactpackagemangeruser');
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const user = await createUser();
      if (user) {
        setAuthenticated(true);
        setUser(user);
        setGotResponse(true); 
      } else {
        setAuthenticated(false);
        setUser(null);
        setGotResponse(true); 
      }
    };


    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      
      if (user) {
        fetchData();
      } else {
        setAuthenticated(false);
        setUser(null);
        setGotResponse(true); 
      }
    });

    return () => {
      unsubscribe();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run the effect only once

  {/*useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setAuthenticated(!!user);
      });
  
      return () => unsubscribe();
    }, [auth]);*/}


  const signup = async (email, password, firstName, lastName, username) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Get the user object
      const user = userCredential.user;

      const userId = userCredential.user.uid;
      const userDetailsData = {
        userId: userId,
        firstName: firstName,
        lastName: lastName
      };


      try{
        // Now, update the profile
        await updateProfile(user, {
          displayName: username
        });
        userDetailsData['displayName'] = username;
      }catch(error){

        userDetailsData['warning'] =  'Account created successfuly but the display name has not been updated.<br>You can update it in the user setting.';
      }

      try{
        const userDocRef = doc(firestore, 'userDetails', userId);
        await setDoc(userDocRef, userDetailsData);
      }catch(error){
        const msg = 'Account created but Name details have not been updated. You can update it in User setting page';


        userDetailsData['warning'] = (!userDetailsData.warning)?msg:'<br><br>'+msg;
      }


      setUser(userDetailsData);

      setAuthenticated(true);
      return userDetailsData;
    } catch (error) {
      setAuthenticated(false);
      return error;
      //throw error;
    }
  };

  const signin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // console.log(userCredential, userCredential.user);

      const User_ = userCredential.user;
      const User = {
        uid:User_.uid,
        email:User_.email,
        displayName: User_.displayName,
        emailVerified: User_.emailVerified
      };

      const userDetailsRef = doc(firestore, 'userDetails', User_.uid);

      // Get the document snapshot
      const userDetailsSnapshot = await getDoc(userDetailsRef);

      // Check if the document exists
      if (userDetailsSnapshot.exists()) {
        const userDetailsData = userDetailsSnapshot.data();
        if(userDetailsData.firstName && userDetailsData.lastName){
          User.firstName = userDetailsData.firstName;
          User.lastName = userDetailsData.lastName;
          User.updatedDetails = true;
        }else{
          User.updatedDetails = false;
        }
      } else {
        User.updatedDetails = false;
        console.log('User details document does not exist.');
      }

      setUser(User);
      setAuthenticated(true);

      localStorage.setItem('reactpackagemangeruser', JSON.stringify(User));

    } catch (error) {
      setAuthenticated(false);
      return error;
    }
  };



  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Sign out failed:', error.message);
      throw error;
    }
  };



  return (
    <AuthContext.Provider value={{ authenticated, user, signup, signin, signOut: signOutUser, clearData, gotResponse }}>
      {children}
    </AuthContext.Provider>
  );
});


const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth, currentAuth };

