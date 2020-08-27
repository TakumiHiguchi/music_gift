import React from 'react';
import { faApple,faYoutube} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート
import viewportUnit from 'viewport-units-buggyfill';
viewportUnit.init({force: true});



class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            index:0,
            isPopup:{thumbnail:false,caption:false}
        }
    }
    
    render(){
        const data = this.props.select
        return(
            <div className="addMusic">
                <div style={{background:"white",padding:"10px 10px 10px 10px",boxShadow: "0px 4px 4px -4px rgba(0,0,0,0.5)"}}>
                    <h2 className="title">曲の設定</h2>
                </div>
                <div className="addmusicBody scroll-y">
                    <div className="flex musicList" style={{borderBottom:"1px solid #f0f0f0"}}>
                        <div className="image">
                            {data.imageUrl ?
                                <img src={data.imageUrl} />
                            :
                                <p>noimage</p>
                            }
                        </div>
                        <div className="content">
                            <p className="musictitle">{data.title}</p>
                            <p className="artist">{data.artist}</p>
                            <p className="artist">{data.composer}</p>
                            <i>
                                {data.iTunes != null &&
                                    <FontAwesomeIcon icon={faApple} />
                                }
                            </i>
                        </div>
                    </div>
                    <div className="settingList" onClick={() => this.setState({isPopup:{thumbnail:true}})}>
                        サムネイルの設定
                    </div>
                    <div className="settingList" onClick={() => this.setState({isPopup:{caption:true}})}>
                        キャプションの設定
                    </div>
                    
                </div>
                <div className="closeBtn" onClick={() => this.props.action.goto(0)}>戻る</div>
                <Thumbnail 
                    isPopup={this.state.isPopup.thumbnail}
                    index={this.state.index}
                    action={{
                        changeIndex:(val) => this.setState({index:val}),
                        submit:() => this.setState({isPopup:{thumbnail:false}})
                    }}
                />
                <Caption 
                    isPopup={this.state.isPopup.caption}
                    action={{
                        submit:() => this.setState({isPopup:{caption:false}})
                    }}
                />

            </div>
        );
    }
  }
  

  function Thumbnail(props){
      return(
        <div className={props.isPopup ? 'popup profile_setting_popup_effect' : 'popup profile_setting_popup_effect_de'} style={{zIndex:"100000"}}>
            <div className="addmusic_morePopup">
                <div style={{background:"white",padding:"10px 10px 10px 10px",boxShadow: "0px 4px 4px -4px rgba(0,0,0,0.5)"}}>
                    <h2 className="title">サムネイルの設定</h2>
                </div>
                <div className="thumbnailSettingContainer">
                    <div className="searchSlider_nav scroll-x flex">
                        <div className="data flex-jus-center" onClick={() => props.action.changeIndex(0)} >
                            <div className="flex-jus-center" style={props.index === 0 ? {borderBottom:"2px solid #00aced"} : {borderBottom:"2px solid white"}}>
                                <p>自動で動画を設定</p>
                            </div>
                        </div>
                        <div className="data flex-jus-center" onClick={() => props.action.changeIndex(1)}>
                            <div className="flex-jus-center" style={props.index === 1 ? {borderBottom:"2px solid #00aced"} : {borderBottom:"2px solid white"}}>
                                <p>手動で動画を設定</p>
                            </div>
                        </div>
                        <div className="data flex-jus-center" onClick={() => props.action.changeIndex(2)}>
                            <div className="flex-jus-center" style={props.index === 2 ? {borderBottom:"2px solid #00aced"} : {borderBottom:"2px solid white"}}>
                                <p>画像をアップロード</p>
                            </div>
                        </div>
                    </div>
                    {props.index === 0 &&
                        <>
                            <div className="music-thumbnail no-select">
                                <img src='https://colorido.co.jp/wp-content/uploads/2020/03/cb65bded867ed46c1bb6c48627d86f31.jpg' />
                            </div>
                            <p>AIが曲を自動判定して、適切なYoutubeのPVをプレイリスト上に表示します。</p>
                            <p style={{fontSize:"0.8em",color:"#aaa"}}>この機能はβバージョンのため適切なPVが取得できない場合や、PV自体が取得できない場合があります。</p>
                            <p style={{fontSize:"0.8em",color:"#aaa"}}>もし、次の確認画面で適切なPVが表示されていなかった場合、手動でYoutubeのPVを入力してください。</p>
                        </>
                    }
                </div>
                <div className="submitBtn" onClick={() => props.action.submit()}>適用</div>
            </div>
        </div>
      )
  }

  function Caption(props){
    return(
      <div className={props.isPopup ? 'popup profile_setting_popup_effect' : 'popup profile_setting_popup_effect_de'} style={{zIndex:"100000"}}>
          <div className="addmusic_morePopup">
                <div style={{background:"white",padding:"10px 10px 10px 10px",boxShadow: "0px 4px 4px -4px rgba(0,0,0,0.5)"}}>
                    <h2 className="title">キャプションの設定</h2>
                </div>
                <div className="contentSettingContainer">
                    <div className="name_edit formTextareaWrap" style={{marginBottom:"10px"}}> 
                        <div>キャプション</div>
                        <textarea placeholder="この曲はどんな歌？" className="removeTACss" rows="6"></textarea>
                    </div>
                </div>
              <div className="submitBtn" onClick={() => props.action.submit()}>適用</div>
          </div>
      </div>
    )
}
  
  export default Profile