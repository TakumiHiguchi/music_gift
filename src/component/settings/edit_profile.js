import React from 'react';

import {Link } from "react-router-dom";

function Profile (props){
    return(
        <div className='popup profile_setting_popup_effect'>
            <div className="setting_profile_whir scroll-y">
                <h1>プロフィール変更</h1>
                <div className="iconContainer">
                    <div className="flex-jus-center">
                        <div className="icon">

                        </div>
                    </div>
                    <p>アイコンを設定</p>
                </div>
                <div className="name_edit formInputWrap " style={{marginBottom:"10px"}}>
                    <div>名前</div>
                    <input type="text" placeholder="名前を入力（必須）" className="removeCss" />
                </div>
                <div className="name_edit formInputWrap " style={{marginBottom:"10px"}}>
                    <div>職業</div>
                    <input type="text" placeholder="職業を入力（必須）" className="removeCss" />
                </div>
                <div className="name_edit formTextareaWrap" style={{marginBottom:"10px"}}> 
                    <div>自己紹介</div>
                    <textarea placeholder="自己紹介を入力" className="removeTACss" rows="6"></textarea>
                </div>
                <Link to={{pathname: '/user'}} className="cancelBtn">
                    キャンセル
                </Link>
                <Link to={{pathname: '/user'}} className="submitBtn">
                    保存
                </Link>
            </div>
        </div>
    );
  }
  
  
  export default Profile