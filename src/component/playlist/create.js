import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";//矢印アイコン


import NoLoginPopup from './noLoginPopup';
import AddMusicPopup from './addMusicPopup';
import viewportUnit from 'viewport-units-buggyfill';
viewportUnit.init({force: true});


class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isPopup:{noLogin:true,addMusic:-1}
        }
    }
    handleSubmit(){
        this.setState({open:false})
        setTimeout(() => {
            this.props.clickOutside()
        }, 500);
    }
    handleCancel(){
        this.setState({open:false})
        setTimeout(() => {
            this.props.clickOutside()
        }, 500);
    }
    handleOnChange(type,value){
        const isPopup = this.state.isPopup
        switch(type){
            case "noLogin": isPopup.noLogin = value;break;
            case "addMusic": isPopup.addMusic = value;break;
            case "noLogin": isPopup.noLogin = value;break;
        }
        this.setState({isPopup:isPopup});
    }

    render(){
        return(
            <div className="playlistCreateForm">
                <NoLoginPopup 
                    isPopup={this.state.isPopup.noLogin}
                    action={{
                        close:() => this.handleOnChange("noLogin",false)
                    }}
                />
                <AddMusicPopup 
                    isPopup={this.state.isPopup.addMusic}
                    action={{
                        close:() => this.handleOnChange("addMusic",false)
                    }}
                />
                <h1>プレイリストの作成</h1>
                <div className="index no-select scroll-y">
                    <div className="playListInf flex">
                        <div className="thumbnail">
                            <img src="https://i.ytimg.com/vi/G6sKFv4GDkA/hqdefault.jpg" />
                        </div>
                        <div className="playListInfInner">
                            <div className="createPlaylistDetails">
                                <p>タップして詳細を追加</p>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <div className="createPlaylistDetails">
                            <p>タップして概要を追加</p>
                        </div>
                    </div>
                    <div className="playlist">
                        <p className="label">プレイリスト</p>
                        <div className="createPlaylistMusic" onClick={() => this.handleOnChange("addMusic",true)}>
                            <p>タップしてプレイリストに曲を追加</p>
                        </div>
                        {[...Array(10)].map((_,index) =>
                        <div className="listContainer flex">
                            <div className="tp_jucket">
                                <img src="https://hiiragi000.xsrv.jp/images/s_jac/sGbBowyXYTdCUNKGoxFC.png" />
                            </div>
                            <div className="inner">
                                <p className="flex tp_title"><span>{index+1}.</span>だから僕は音楽をやめた</p>
                                <p className="tp_artist">ヨルシカ</p>
                                <p className="links">
                                </p>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
  }
  
  
  export default Profile