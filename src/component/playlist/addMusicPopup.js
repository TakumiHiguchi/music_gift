import React from 'react';
import axios from 'axios';
import { faApple,faYoutube} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート
import { faSearch,faTimes } from "@fortawesome/free-solid-svg-icons";//矢印アイコン
import viewportUnit from 'viewport-units-buggyfill';
viewportUnit.init({force: true});


let nTimer;
class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isPopup:{noLogin:true},
            searchQuery:"",
            musicData:[]
        }
    }
    componentDidMount(){
        axios.get('https://mbw6.herokuapp.com/api/v1/get_musicData')
        .then(response => {
            this.setState({musicData:response.data.musicData})
            console.log(response.data.musicData)
        })
        .catch((e) => {
            console.log(e)
            return null
        });

    }
    handleOnChange(value){
        this.setState({searchQuery:value});
        console.log(value)
        if(nTimer){clearTimeout(nTimer);}
        nTimer = setTimeout(() => {
            axios.get('https://mbw6.herokuapp.com/api/v1/get_musicData?query='+value+'&limit=30')
            .then(response => {
                if(response.data.status != "Error"){
                    this.setState({musicData:response.data.musicData})
                }else{
                    console.log("データが存在しません")
                }
            })
            .catch((e) => {
                console.log(e)
                return null
            });
        }, 500)
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
                                    <input type="text" className="removeCss" placeholder="曲名やアーティスト名で検索" value={this.state.searchQuery} onChange={(e) => this.handleOnChange(e.target.value)}/>
                                </div>
                                <div className="closeBtn" onClick={() => this.props.action.close()}><FontAwesomeIcon icon={faTimes} /></div>
                                <div className="selectMusicContainer scroll-y">
                                    {this.state.musicData.length == void 0 ?
                                        <div>検索中</div>
                                        :
                                        <>
                                            {this.state.musicData.map((data)=>
                                                <div className="flex musicList">
                                                    <div className="image">
                                                        {data.jucket.url ?
                                                            <img src={data.jucket.url} />
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
                                            )}
                                        </>
                                    }
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