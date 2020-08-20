
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート
import { faBookmark,faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCog } from "@fortawesome/free-solid-svg-icons";//矢印アイコン

import { 
  Link
} from "react-router-dom";

function LoginUser(props){
  return(
        
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
                <Link to={{pathname: '/settings/profile'}} className="name"><h1>{props.user.name}</h1><FontAwesomeIcon icon={faCog}/></Link>
                <div className="job">{props.user.job}</div>
                <div className="description">
                  {props.user.description}
                </div>
              </div>
            </div>
          </div>
        </main>
  )
}


export default LoginUser
