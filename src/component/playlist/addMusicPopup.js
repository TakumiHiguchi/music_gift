import React from 'react';
import axios from 'axios';
import Slider from "react-slick";
import { faApple,faYoutube} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート
import { faSearch } from "@fortawesome/free-solid-svg-icons";//矢印アイコン

import Form from './addmusicForm';
import viewportUnit from 'viewport-units-buggyfill';
viewportUnit.init({force: true});


let nTimer;
class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isPopup:{noLogin:true},
            searchQuery:"",
            musicData:[],
            selectData:{title:"",artist:"",key:"",imageUrl:""}
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
    handleOnClick(value){
        let ins = this.state.selectData;
        ins.title = value.title;
        ins.artist = value.artist;
        ins.imageUrl = value.imageUrl;
        ins.key = value.key;
        this.setState({selectData:value});
        this.slider.slickGoTo(1)
    }
    
    render(){
        const settings = {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows:false,
            draggable:false,
            swipe:false,
            mobileFirst:true,
            afterChange: () =>
              this.setState(state => ({ updateCount: state.updateCount + 1 })),
            beforeChange: (current, next) => this.setState({ slideIndex: next })
          };
        return(
            <>
                {this.props.isPopup !== -1 &&
                    <div className={this.props.isPopup ? 'popup profile_setting_popup_effect' : 'popup profile_setting_popup_effect_de'}>
                        <Slider ref={slider => (this.slider = slider)} {...settings}>
                            <div className="addMusic">
                                <div style={{background:"white",padding:"10px 10px 10px 10px",boxShadow: "0px 4px 4px -4px rgba(0,0,0,0.5)"}}>
                                    <p className="title" style={{marginBottom:"10px"}}>プレイリストに曲を追加</p>
                                    <div className="search flex">
                                        <div className="icon"><FontAwesomeIcon icon={faSearch} style={{color:"#aaa"}}/></div>
                                        <input type="text" className="removeCss" placeholder="曲名やアーティスト名で検索" value={this.state.searchQuery} onChange={(e) => this.handleOnChange(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="closeBtn" onClick={() => this.props.action.close()}>閉じる</div>
                                <div className="selectMusicContainer scroll-y">
                                    {this.state.musicData.length == void 0 ?
                                        <div>検索中</div>
                                        :
                                        <>
                                            {this.state.musicData.map((data)=>
                                                <div className="flex musicList" onClick={() => this.handleOnClick({title:data.title,artist:data.artist,imageUrl:data.jucket.url,key:data.key})}>
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
                            <Form 
                                select={this.state.selectData}
                                action={{
                                    goto:(value) => this.slider.slickGoTo(value)
                                }}
                            />
                        </Slider>
                    </div>
                }
            </>
        );
    }
  }
  
  
  export default Profile