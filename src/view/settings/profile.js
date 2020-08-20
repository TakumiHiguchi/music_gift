import React from 'react';
import {withRouter,Redirect } from "react-router-dom";
import Header from '../../component/Header';
import LoginUser from '../../component/user/loginUser';
import Edit from '../../component/settings/edit_profile';

import store from "../../redux/store.js"

import viewportUnit from 'viewport-units-buggyfill';
viewportUnit.init({force: true});

function Settings(props){
  const state = store.getState();
  if(state.user.isSiginin){
    const userDetails = state.userDetails.userdetails;
    if(Object.keys(userDetails).length > 0){
      return(
        <>
          <div>
            <Header />
            <LoginUser user={userDetails}/>
          </div>
          <Edit clickOutside={() => props.history.push("/")}/>
        </>
      );
    }else{
      return(<Redirect to='/user/new' />);
    }
  }else{
    return(<Redirect to='/' />);
  }
}


export default withRouter(Settings);
