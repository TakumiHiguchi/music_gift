import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート
import { faSearch } from "@fortawesome/free-solid-svg-icons";//矢印アイコン
import viewportUnit from 'viewport-units-buggyfill';
viewportUnit.init({force: true});



class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isPopup:{noLogin:true}
        }
    }

    render(){
        return(
            <>
                {this.props.isPopup !== -1 &&
                    <div className={this.props.isPopup ? 'popup popup_effect' : 'popup popup_effect_de'}>
                        <div className="flex-jus-center popup_wrap" style={{height:"100vh"}}>
                            <div className="addMusic">
                                <p className="title">プレイリストに曲を追加</p>
                                <div className="search flex">
                                    <div className="icon"><FontAwesomeIcon icon={faSearch} style={{color:"#aaa"}}/></div>
                                    <input type="text" className="removeCss" placeholder="キーワード検索" />
                                </div>
                                <div className="selectMusicContainer">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </>
        );
    }
  }
  
  
  export default Profile