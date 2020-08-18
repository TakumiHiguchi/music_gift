import React, { useContext } from "react";
import { withRouter } from "react-router";

import Header from '../component/Header';
import FixedMenu from '../component/FixedMenu';

var firebase = require('firebase');
var firebaseui = require('firebaseui-ja');


function SignUp(){
  let ui = new firebaseui.auth.AuthUI(firebase.auth());
  const uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        return true;
      },
      uiShown: function() {
        document.getElementById('loader').style.display = 'none';
      }
    },
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      {provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD},
    ],
    tosUrl: '<your-tos-url>',
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };
  ui.start('#firebaseui-auth-container', uiConfig);
  return(
    <>
      <Header />
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
      <FixedMenu />
    </>
  )
}

export default withRouter(SignUp);