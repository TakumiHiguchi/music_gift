import React,{useState, Component} from 'react';
import { Link, withRouter,Redirect } from "react-router-dom";
import NewUserSlider from '../../component/user/new';

import firebase from 'firebase/app'; //必須
import "firebase/auth";

import isSignin from '../../auth/isSignin';
import viewportUnit from 'viewport-units-buggyfill';
viewportUnit.init({force: true});




class User extends Component{
  constructor(props){
    super(props);
    this.state = {
      isSignin:false,
      user:[],
      data:{res:true}
    };
  }
  componentDidMount(){
    const user = isSignin()
    if(user.isSignin){
      this.setState({isSignin:true});
      this.setState({user:user.user});
      //ユーザー情報があるか確認
      user.userDetail.then(res => {
        this.setState({data:res});
      })
      .catch(() => {
      });
    }
  }
  render(){
    const user = firebase.auth().currentUser;
    if(this.state.isSignin){
      if(this.state.data.res){
        return(<Redirect to='/' />);
      }else{
        return(<NewUserSlider user={this.state.user}/>)
      }
    }else{
      return(<div>ページが見つかりません</div>);
    }
  }
}


export default withRouter(User);
