import React from 'react';
import Header from '../component/Header';
import FixedMenu from '../component/FixedMenu';
import { 
  Link, 
  withRouter,
  Redirect
} from "react-router-dom";

import '../css/compose.scss'

import store from "../redux/store.js"
function Bookmark() {
  const state = store.getState();
  if(state.user.isSiginin){
    const userDetails = state.userDetails.userdetails;
    if(Object.keys(userDetails).length > 0){
      return(
        <>
          <div>
            <Header />
            <div className="composeContainer">
              <h1>何を投稿しますか？</h1>
              <div className="list">
                <h2>プレイリストを投稿</h2>
                <div className="imageContainer">
                  <img src="https://colorido.co.jp/wp-content/uploads/2020/03/cb65bded867ed46c1bb6c48627d86f31.jpg"/>
                </div>
                <div className="content">
                  <div className="description flex">
                    <p>複数の曲を紹介したいときに最適です。</p>
                    <a>詳細</a>
                  </div>
                  <div className="submit">
                    <a>
                      プレイリストを作成
                    </a>
                  </div>
                </div>
              </div>
              <div to={"/"} className="list">
                <h2>プレイリストを投稿</h2>
                <div className="imageContainer">
                  <img src="https://colorido.co.jp/wp-content/uploads/2020/03/cb65bded867ed46c1bb6c48627d86f31.jpg"/>
                </div>
                <div className="content">
                  <div className="description flex">
                    <p>複数の曲を紹介したいときに最適です。</p>
                    <a>詳細</a>
                  </div>
                  <div className="submit">
                    <a>
                      プレイリストを作成
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FixedMenu />
        </>
      );
    }else{
      return(<Redirect to='/user/new' />);
    }
   }else{
    return(
      <>
        <div>
            <Header />
            ログインしろや
          </div>
          <FixedMenu />
      </>
    );
  }
}
//css
export default withRouter(Bookmark);
