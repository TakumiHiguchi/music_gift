import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";

function isSignin(){
  const user = firebase.auth().currentUser;
  if(user){
    return {isSignin:true,user:user,userDetail:false};
  }else{
    return {isSignin:false,user:user,userDetail:false};
  }
}

export default isSignin;