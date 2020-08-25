import React,{Component} from 'react';
import Createform from '../../component/playlist/create';

import store from "../../redux/store.js"


import { 
  withRouter,
  Redirect
} from "react-router-dom";

import viewportUnit from 'viewport-units-buggyfill';
viewportUnit.init({force: true});

function Playlist (props){
  const state = store.getState();
  if(state.user.isSiginin){
    const userDetails = state.userDetails.userdetails;
    if(!Object.keys(userDetails).length > 0){
      return(<Redirect to='/user/new' />);
    }
  }
  return(
    <>
      <Createform />
    </>
  );
}

export default withRouter(Playlist)