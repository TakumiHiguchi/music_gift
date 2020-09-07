import React ,{useState} from 'react';
import { faApple,faYoutube} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート

import firebase from 'firebase/app'; //必須
import 'firebase/storage';

import viewportUnit from 'viewport-units-buggyfill';
viewportUnit.init({force: true});



class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            index:0,
            isPopup:{thumbnail:false,caption:false},
            caption:"",
            youtubeKey:"",
            images:{}
        }
    }
    componentDidMount(){
        const storageRef = firebase.storage().ref();
        storageRef.child('default/smYoutube1.png').getDownloadURL().then((url) => {
            let ins = this.state.images
            ins.image1 = url
            this.setState({images:ins})
        });
        storageRef.child('default/smYoutube2.png').getDownloadURL().then((url) => {
            let ins = this.state.images
            ins.image2 = url
            this.setState({images:ins})
        });
        storageRef.child('default/smYoutube4.png').getDownloadURL().then((url) => {
            let ins = this.state.images
            ins.image4 = url
            this.setState({images:ins})
        });
    }
    nextPage(){
        let ins = this.props.select;
        ins.caption = this.state.caption;
        ins.index = this.state.index;
        this.props.action.submit(ins)
        this.props.action.goto(2)
    }
    render(){
        const data = this.props.select;
        console.log(this.state.images.image1)
        return(
            <div className="addMusic">
                <div style={{background:"white",padding:"10px 10px 10px 10px",boxShadow: "0px 4px 4px -4px rgba(0,0,0,0.5)"}}>
                    <h2 className="edit_title">曲の設定</h2>
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
                <div className="submitBtn" onClick={() => this.nextPage()}>次へ</div>
                <Thumbnail 
                    isPopup={this.state.isPopup.thumbnail}
                    index={this.state.index}
                    youtubeKey={this.state.youtubeKey}
                    images={this.state.images}
                    action={{
                        changeIndex:(val) => this.setState({index:val}),
                        changeYoutubeKey:(val) => this.setState({youtubeKey:val}),
                        submit:() => this.setState({isPopup:{thumbnail:false}})
                    }}
                />
                <Caption 
                    isPopup={this.state.isPopup.caption}
                    caption={this.state.caption}
                    action={{
                        submit:() => this.setState({isPopup:{caption:false}}),
                        onchange:(val) => this.setState({caption:val})
                    }}
                />

            </div>
        );
    }
  }
  

  function Thumbnail(props){
      const [isPopup,handlePopup] = useState(-1);
      const changeYoutubeKey = (val) =>{
        let ins = ""
        if(val.indexOf('https://www.youtube.com/watch?v=') !== -1){
            ins = val.replace( /https:\/\/www\.youtube\.com\/watch\?v=/g ,"");
            ins = ins.match(/.{11}/g)[0];
        }else if(val.indexOf('https://youtu.be/') !== -1){
            ins = val.replace( /https:\/\/youtu\.be\//g ,"");
            ins = ins.match(/.{11}/g)[0];
        }
        props.action.changeYoutubeKey(ins)
      }
      const changePopup = () => {
        if(isPopup === -1){
            handlePopup(true);
        }else{
            handlePopup(!isPopup);
        }
      }
      return(
        <div className={props.isPopup ? 'popup profile_setting_popup_effect' : 'popup profile_setting_popup_effect_de'} style={{zIndex:"100000"}}>
            <div className="addmusic_morePopup">
                <div style={{background:"white",padding:"10px 10px 10px 10px",boxShadow: "0px 4px 4px -4px rgba(0,0,0,0.5)"}}>
                    <h2 className="edit_title">サムネイルの設定</h2>
                </div>
                <div className="thumbnailSettingContainer scroll-y">
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
                    {props.index === 1 &&
                        <>
                            <div className="youtubeContainer no-select" style={{margin:"10px 0"}}>
                                <iframe src={"https://www.youtube.com/embed/" + props.youtubeKey} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="search flex" style={{margin:"0 10px 10px",fontSize:"16px"}}>
                                <div className="icon"><FontAwesomeIcon icon={faYoutube} style={{color:"#aaa"}}/></div>
                                <input type="text" className="removeCss youtubeSearch" placeholder="YoutubeのURLを貼り付け" onChange={(e) => changeYoutubeKey(e.target.value)}/>
                            </div>
                            <p>YoutubeのURLを貼り付けてください。プログラムが自動で判定し、動画を生成します。</p>
                            <div className="submitButton1" style={{margin:"10px"}} onClick={() => changePopup()}>
                                詳しいやり方を見る
                            </div>
                            {isPopup !== -1 &&
                                <div className={isPopup ? "infOpen youtubeInf scroll-y" : "infClose youtubeInf scroll-y"} >
                                    <h3>スマートフォンの場合</h3>
                                    <section className="addUrlsection flex">
                                        <div className="imgContainer">
                                            <img src={props.images.image1} />
                                        </div>
                                        <div className="contentContainer">
                                            <p><span>1.</span>紹介したい楽曲をYoutubeの公式アプリで検索し、表示します。</p>
                                        </div>
                                    </section>
                                    <section className="addUrlsection flex">
                                        <div className="imgContainer">
                                            <img src={props.images.image2} />
                                        </div>
                                        <div className="contentContainer">
                                            <p><span>2.</span>画面中央あたりの「共有」ボタンをタップし、表示されたポップアップ内の「コピー」ボタンをタップしてクリップボードにURLをコピーします。</p>
                                        </div>
                                    </section>
                                    <section className="addUrlsection flex">
                                        <div className="imgContainer">
                                            <img src={props.images.image4} />
                                        </div>
                                        <div className="contentContainer">
                                            <p><span>3.</span>再度このページを開き、コピーしたURLを貼り付けます。</p>
                                        </div>
                                    </section>
                                </div>
                            }
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
                    <h2 className="edit_title">キャプションの設定</h2>
                </div>
                <div className="contentSettingContainer">
                    <div className="name_edit formTextareaWrap" style={{marginBottom:"10px"}}> 
                        <div>キャプション</div>
                        <textarea placeholder="この曲はどんな歌？" className="removeTACss" rows="6" value={props.caption} onChange={(e) => props.action.onchange(e.target.value)}></textarea>
                    </div>
                </div>
              <div className="submitBtn" onClick={() => props.action.submit()}>適用</div>
          </div>
      </div>
    )
}
  
  export default Profile