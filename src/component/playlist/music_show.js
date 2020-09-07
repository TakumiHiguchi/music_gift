import React from 'react';
import viewportUnit from 'viewport-units-buggyfill';
import {Link} from "react-router-dom";
viewportUnit.init({force: true});



class Show extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    
    render(){
        return(
            <section className="playlistSection no-select">
                <div className="sliderWrap">
                  <img src='https://colorido.co.jp/wp-content/uploads/2020/03/cb65bded867ed46c1bb6c48627d86f31.jpg' />
                </div>
                <div className="contentWrap scroll-y">
                  <div className="title" >
                    <h2>{this.props.data.title}</h2>
                    <Link
                      to={{pathname: '/'}}
                    >{this.props.data.artist}</Link>
                  </div>
                  <Link
                      to={{pathname: '/'}}
                    >
                    <div className="artist flex-align-center">
                      <img src="https://hiiragi000.xsrv.jp/images/main/icon5.png" />
                      <h3>{this.props.data.artist}</h3>
                    </div>
                  </Link>
                  <div className="comment">
                    <p className="label">コメントと考察</p>
                    <div className="fcomment flex">
                      <img src="https://hiiragi000.xsrv.jp/images/s_jac/sGbBowyXYTdCUNKGoxFC.png" />
                      <p className="textOverflow"><span>マジでおすすめのプレイリスト！やったぜ！マジでおすすめのプレイリスト！やったぜ！</span></p>
                    </div>
                  </div>
                  <div className="introduction">
                    <p className="label">紹介</p>
                    <p>{this.props.data.caption}</p>
                  </div>
                </div>
            </section>
        );
    }
  }
  

  
  export default Show