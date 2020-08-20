import React,{useState, Component} from 'react';
import { Link, withRouter,Redirect } from "react-router-dom";
import NewUserSlider from '../../component/user/new';

import store from "../../redux/store.js"

import viewportUnit from 'viewport-units-buggyfill';
viewportUnit.init({force: true});

function User(props){
  const state = store.getState();
  if(state.user.isSiginin){
    const userDetails = state.userDetails.userdetails;
    if(Object.keys(userDetails).length > 0){
      return(<Redirect to='/' />);
    }else{
      return(<NewUserSlider user={state.user.user}/>);
    }
  }else{
    return(<Redirect to='/' />);
  }
}


export default withRouter(User);
