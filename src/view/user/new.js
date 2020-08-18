import React from 'react';
import { Link, withRouter,Redirect } from "react-router-dom";
import Header from '../../component/Header';
import FixedMenu from '../../component/FixedMenu';


import isSignin from '../../auth/isSignin';
import viewportUnit from 'viewport-units-buggyfill';
viewportUnit.init({force: true});

function User() {
  const user = isSignin()
  if(!user.isSignin){
    return(<Redirect to='/' />);
  }else{
    if(user.userDetail){
      return(<Redirect to='/' />);
    }else{
      return(
        <>
          <div>
            <main className="userNewContainer">
            <div class='box popup_effect_newUser'>
              <div class='wave -one'></div>
              <div class='wave -two'></div>
              <div class='wave -three'></div>
              <div class='user_newtitle'>はじめまして<br /><span>あなたのお名前を教えてください</span></div>
            </div>
            <div className="un_inputContainer flex">
              <div>
                <div className="label">ニックネーム</div>
                <input type="text" className="un_Input" placeholder="ニックネームを入力" />
                <p>このニックネームは全ユーザーに公開されます。</p>
              </div>
            </div>
            </main>
          </div>
        </>
      )
    }
  }
}


export default withRouter(User);
