import React,{useState, Component} from 'react';
import { Link, withRouter,Redirect } from "react-router-dom";
import NewUserSlider from '../../component/user/new';


import isSignin from '../../auth/isSignin';
import viewportUnit from 'viewport-units-buggyfill';
viewportUnit.init({force: true});




function User(props) {
  const user = isSignin();

  if(!props.location.state.isSignin){
    return(<Redirect to='/' />);
  }else{
    if(props.location.state.data.res){
      return(<Redirect to='/' />);
    }else{
      return(
        <>
          <NewUserSlider user={user}/>
        </>
      )
    }
  }
}



export default withRouter(User);
