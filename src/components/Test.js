import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';
 
const Home = () => {
  console.log(auth.currentuser)
     useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, [])
 
  return (
    <section>        
      Testing page
    </section>
  )
}
 
export default Home