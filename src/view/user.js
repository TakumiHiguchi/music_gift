import React,{Component} from 'react';
import Header from '../component/Header';
import FixedMenu from '../component/FixedMenu';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート
import { faBookmark,faHeart } from '@fortawesome/free-regular-svg-icons';

import { isSignIn } from '../redux/action.js'
import store from "../redux/store.js"

import { 
  Link, 
  withRouter,
  Redirect
} from "react-router-dom";

import '../css/user.scss'
import viewportUnit from 'viewport-units-buggyfill';
viewportUnit.init({force: true});

function User (props){
  const state = store.getState();
  if(state.user.isSiginin){
    const userDetails = state.userDetails.userdetails;
    if(Object.keys(userDetails).length > 0){
      return(
        <>
          <LoginUser user={userDetails}/>
          <FixedMenu />
        </>
      );
    }else{
      return(<Redirect to='/user/new' />);
    }
   }else{
    return(
      <>
        <NullUser />
        <FixedMenu />
      </>
    );
  }
}

function LoginUser(props){
  console.log(props)
  return(
    <div>
        <Header />
        <main>
          <div className="userPage">
            <div className="uP_userInf">
              <div className="uP_userPrf flex">
                <div className="icon">
                
                </div>
                <div className="datas flex-jus-around">
                  <div><p>{props.user.counts.receivedLike}</p><p className="label">貰った <FontAwesomeIcon icon={faHeart}/></p></div>
                  <div><p>{props.user.counts.sentLike}</p><p className="label">送った <FontAwesomeIcon icon={faHeart}/></p></div>
                  <div><p>{props.user.counts.receivedBookmark}</p><p className="label">貰った <FontAwesomeIcon icon={faBookmark}/></p></div>
                </div>
              </div>
              <div className="details">
                <div className="name">
                  {props.user.name}/{props.user.job}
                </div>
                <div className="description">
                  {props.user.description}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
  )
}

function NullUser(){
  return(
    <div>
        <Header />
        <main>
          <div className="userPage">
            <div className="uP_userInf">
              <div className="uP_userPrf flex">
                <div className="icon">
                
                </div>
                <div className="datas flex-jus-around">
                  <div><p>NaN</p><p className="label">貰った <FontAwesomeIcon icon={faHeart}/></p></div>
                  <div><p>NaN</p><p className="label">送った <FontAwesomeIcon icon={faHeart}/></p></div>
                  <div><p>NaN</p><p className="label">貰った <FontAwesomeIcon icon={faBookmark}/></p></div>
                </div>
              </div>
              <div className="details">
                <div className="name">
                  Null
                </div>
                <div className="description">
                  現在ログインされていません。アカウントをお持ちの方はログインをしてください。お持ちでない方はユーザー登録をしてください。
                </div>
              </div>
            </div>
            <div className="lastSlideInf">
              <p className="label">ユーザー登録をしませんか？</p>
              <p className="content">musicGiftに登録すると自分のお気に入りの曲をシェアしたり、プレイリストを作成できたりします。登録は最短10秒で完了します。</p>
              <a href="/signup" className="btn">ユーザー登録をする</a>
            </div>
            <div className="lastSlideInf">
              <p className="label">アカウントをお持ちですか？</p>
              <p className="content">アカウントをお持ちですか？musicGiftに登録済みの方は、下のリンクからログインをしてください。</p>
              <a href="/signup" className="btn">ログインする</a>
            </div>
          </div>
        </main>
      </div>
  )
}
export default withRouter(User);
