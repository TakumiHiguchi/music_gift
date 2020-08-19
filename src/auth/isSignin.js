import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

function isSignin(){
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();

  if(user){
    const result = db.collection("userDetails").doc(user.uid).get().then((response) => {
      if (response.exists) {
        return {res:true,data:response.data()}
      } else {
          return {res:false,data:null}
      }
    })
    return {isSignin:true,user:user,userDetail:result};
    
  }else{
    return {isSignin:false,user:user,userDetail:false};
  }
}

export default isSignin;