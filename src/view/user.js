import React from 'react';
import Header from '../component/Header';
import FixedMenu from '../component/FixedMenu';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート

import { faBookmark,faHeart } from '@fortawesome/free-regular-svg-icons';

import { 
  Link, 
  withRouter
} from "react-router-dom";

import '../css/user.scss'

function User() {
  return (
    <>
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
                  ユーザーデータがありません。アカウントをお持ちの方はログインをしてください。お持ちでない方はユーザー登録をしてください。
                </div>
              </div>
            </div>
            <div className="lastSlideInf">
              <p className="label">ユーザー登録をしませんか？</p>
              <p className="content">musicGiftに登録すると自分のお気に入りの曲をシェアしたり、プレイリストを作成できたりします。登録はわずか10秒で完了します。</p>
              <div className="btn">ユーザー登録をする</div>
            </div>
            <div className="lastSlideInf">
              <p className="label">アカウントをお持ちですか？</p>
              <p className="content">アカウントをお持ちですか？musicGiftに登録済みの方は、下のリンクからログインをしてください。</p>
              <div className="btn">ユーザー登録をする</div>
            </div>

          </div>
          
          
        </main>
      </div>
      <FixedMenu />
    </>
  );
}
//css
export default withRouter(User);
