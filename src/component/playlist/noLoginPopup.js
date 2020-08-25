import React from 'react';
import {Link} from "react-router-dom";
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
            <div className={this.props.isPopup ? 'popup popup_effect' : 'popup popup_effect_de'}>
                <div className="flex-jus-center popup_wrap" style={{height:"100vh"}}>
                    <div className="noLogin">
                        <p className="title">現在ログインされていません</p>
                        <p className="content">musicGiftにログインしていなくてもプレイリストは作成可能ですが、作成したプレイリストは今後一切変更を加えることができません。</p>
                        <p className="content">musicGiftにログインしますか？登録は最短10秒で完了します。</p>
                        <div className="btnContainer">
                            <div onClick={() => this.props.action.close()}>ログインしないで利用する</div>
                            <Link to={'/signup'}>ログインする</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  
  export default Profile