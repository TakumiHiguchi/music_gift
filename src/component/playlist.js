
import React, { Component } from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";

//firebase
import firebase from 'firebase/app'; //必須
import 'firebase/firestore';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート
import { faChevronRight,faChevronLeft,faList,faHome} from "@fortawesome/free-solid-svg-icons";//矢印アイコン
import { faApple,faYoutube,faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBookmark,faHeart } from '@fortawesome/free-regular-svg-icons';

import '../css/playlist.scss'
import Indexpopup from './indexPopup';

import viewportUnit from 'viewport-units-buggyfill';
viewportUnit.init({force: true});

const brPadding={
  paddingRight:"3px"
}
const tp_iconStyle={
  marginRight:"12px"
}
const twitterStyle={
  color:"#00aced",
  marginRight:"12px"
}
const instagramStyle={
  color:"white",
  fontSize:"0.9em",
  zIndex:999
}
const key = "dwnedfoiwefiqwe"
let nTimer;//タイマー

//firebaseインスタンスの初期化
firebase.initializeApp({
  apiKey: 'AIzaSyBC_v_l0991FvOF33DyuDG0HQemskJgcpk',
  authDomain: 'musicgift-54fd9.firebaseapp.com',
  projectId: 'musicgift-54fd9'
});
const db = firebase.firestore();


export default class SlickGoTo extends React.Component {
  state = {
    slideIndex: -1,
    updateCount: 0,
    openIndex:-1,
    data:{}
  };

  api(){
    db.collection("playlists").doc().set({
      "title": "テストデータ",
      "description": "てすとでーたです.",
    });
    db.collection("playlists").limit(1).get().then((response) => {
      response.forEach((doc) => {
        this.setState({data:doc.data()})
      })
    })
  }

  timer(){
    //スマホがスクロールできなくなるため時間でDOMを消す
    if(nTimer){clearTimeout(nTimer);}
    nTimer = setTimeout(() => {
      this.setState({openIndex:-1});
    }, 500)
  }
  handleOutside(val){
    this.setState({openIndex:val});
    this.timer();
  }
  slickGoTo(val){
    this.slider.slickGoTo(val);
  }

  render() {
    const settings = {
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows:false,
      afterChange: () =>
        this.setState(state => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next })
    };
    //ボタン表示判定式
    const bl = this.state.slideIndex > 0 && (!this.state.openIndex || this.state.openIndex === -1 ) && this.state.slideIndex <= 10
    return (
        <>
          <Indexpopup isPopup={this.state.openIndex} action={(val) => this.handleOutside(val)} slickGoTo={(val) => this.slickGoTo(val)}/>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            <div className="playlistSection index no-select scroll-y">
              <div className="playListHeader" onClick={() => this.slider.slickGoTo(1)}>
                <p className="next">Next<FontAwesomeIcon icon={faChevronRight} /></p>
              </div>
              <div className="playListInf flex">
                <div className="thumbnail">
                  <img src="https://i.ytimg.com/vi/G6sKFv4GDkA/hqdefault.jpg" />
                </div>
                <div className="playListInfInner" onClick={() => this.api()}>
                  <h1>{this.state.data.title}</h1>
                  <Link
                    to={{pathname: '/'}}
                    className="user"
                  >Lei*</Link>
                  <div className="tp_icons flex-align-center">
                    <FontAwesomeIcon icon={faHeart} style={tp_iconStyle}/>
                    <FontAwesomeIcon icon={faBookmark} style={tp_iconStyle}/>
                    <FontAwesomeIcon icon={faTwitter} style={twitterStyle}/>
                    <a href="#" className="insta_btn3 flex-jus-center">
                      <FontAwesomeIcon icon={faInstagram} style={instagramStyle}/>
                    </a>
                    <FontAwesomeIcon icon={faList}/>
                  </div>
                </div>
              </div>
              <div className={this.state.descriptionToggle && this.state.slideIndex <= 0 ? "description desOpen scroll-y" : "description desClose scroll-y"} onClick={() => this.setState({descriptionToggle:!this.state.descriptionToggle})}>
                <div className="flex-jus-between"><p className="label">概要</p>{this.state.descriptionToggle ? <a>閉じる</a> : <a>もっと見る</a>}</div>
                <p>独特な世界観と透明感が売りのヨルシカ。そんなヨルシカのおすすめ人気曲をご紹介します！</p>
                <p>ヨルシカをあまり聴いたことがない人向けに前提知識を。<br />ヨルシカの曲には物語があります。なので、物語を知りたい方や、考察したい方はアルバムごとに聴いていくのをお勧めします。<br />もちろん、曲単体で楽しむこともできますので、好きな曲だけを聴くというのでもOKです。</p>
                <p>独特な世界観と透明感が売りのヨルシカ。そんなヨルシカのおすすめ人気曲をご紹介します！</p>
                <p>ヨルシカをあまり聴いたことがない人向けに前提知識を。<br />ヨルシカの曲には物語があります。なので、物語を知りたい方や、考察したい方はアルバムごとに聴いていくのをお勧めします。<br />もちろん、曲単体で楽しむこともできますので、好きな曲だけを聴くというのでもOKです。</p>
                <p>独特な世界観と透明感が売りのヨルシカ。そんなヨルシカのおすすめ人気曲をご紹介します！</p>
                <p>ヨルシカをあまり聴いたことがない人向けに前提知識を。<br />ヨルシカの曲には物語があります。なので、物語を知りたい方や、考察したい方はアルバムごとに聴いていくのをお勧めします。<br />もちろん、曲単体で楽しむこともできますので、好きな曲だけを聴くというのでもOKです。</p>
                <p>独特な世界観と透明感が売りのヨルシカ。そんなヨルシカのおすすめ人気曲をご紹介します！</p>
                <p>ヨルシカをあまり聴いたことがない人向けに前提知識を。<br />ヨルシカの曲には物語があります。なので、物語を知りたい方や、考察したい方はアルバムごとに聴いていくのをお勧めします。<br />もちろん、曲単体で楽しむこともできますので、好きな曲だけを聴くというのでもOKです。</p>
                <p>独特な世界観と透明感が売りのヨルシカ。そんなヨルシカのおすすめ人気曲をご紹介します！</p>
                <p>ヨルシカをあまり聴いたことがない人向けに前提知識を。<br />ヨルシカの曲には物語があります。なので、物語を知りたい方や、考察したい方はアルバムごとに聴いていくのをお勧めします。<br />もちろん、曲単体で楽しむこともできますので、好きな曲だけを聴くというのでもOKです。</p>
              </div>
              <div className="comment">
                <p className="label">コメント</p>
                <div className="fcomment flex">
                  <img src="https://hiiragi000.xsrv.jp/images/s_jac/sGbBowyXYTdCUNKGoxFC.png" />
                  <p className="textOverflow"><span>マジでおすすめのプレイリスト！やったぜ！マジでおすすめのプレイリスト！やったぜ！</span></p>
                </div>
              </div>
              <div className="playlist">
                <p className="label">プレイリスト</p>
                {[...Array(10)].map((_,index) =>
                  <div className="listContainer flex" onClick={() => this.slider.slickGoTo(index+1)}>
                    <div className="tp_jucket">
                      <img src="https://hiiragi000.xsrv.jp/images/s_jac/sGbBowyXYTdCUNKGoxFC.png" />
                    </div>
                    <div className="inner">
                        <p className="flex tp_title"><span>{index+1}.</span>だから僕は音楽をやめた</p>
                        <p className="tp_artist">ヨルシカ</p>
                        <p className="links">
                          <Link to={{pathname: '/'}}><FontAwesomeIcon icon={faApple} style={brPadding} />Apple Music</Link>
                          <Link to={{pathname: '/'}}><FontAwesomeIcon icon={faYoutube} style={brPadding} />Youtube</Link>
                        </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {[...Array(10)].map((_,index) =>
              <section className="playlistSection no-select">
                <div className="sliderWrap">
                  <img src='https://colorido.co.jp/wp-content/uploads/2020/03/cb65bded867ed46c1bb6c48627d86f31.jpg' />
                </div>
                <div className="contentWrap scroll-y">
                  <div className="title" >
                    <h2>ただ君に晴れ</h2>
                    <Link
                      to={{pathname: '/'}}
                    >s</Link>
                  </div>
                  <Link
                      to={{pathname: '/'}}
                    >
                    <div className="artist flex-align-center">
                      <img src="https://hiiragi000.xsrv.jp/images/main/icon5.png" />
                      <h3>ヨルシカ</h3>
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
                    {[...Array(100)].map((_,index) =>
                      <p>曲をインデックス化して、それ以外発言できないようにすること</p>
                    )}
                  </div>
                </div>
              </section>
            )}
            <section className="playlistSection index no-select scroll-y">
              <div className="playListHeader" onClick={() => this.slider.slickGoTo(0)}>
                <p className="next">トップに戻る</p>
              </div>
              <div className="playListInf flex" style={{marginBottom:"10px"}}>
                <div className="thumbnail">
                  <img src="https://i.ytimg.com/vi/G6sKFv4GDkA/hqdefault.jpg" />
                </div>
                <div className="playListInfInner">
                  <div>おすすめプレイリストだよ？</div>
                  <Link
                    to={{pathname: '/'}}
                    className="user"
                  >Lei*</Link>
                  <div className="tp_icons flex-align-center">
                    <FontAwesomeIcon icon={faHeart} style={tp_iconStyle}/>
                    <FontAwesomeIcon icon={faBookmark} style={tp_iconStyle}/>
                    <FontAwesomeIcon icon={faTwitter} style={twitterStyle}/>
                    <a href="#" className="insta_btn3 flex-jus-center">
                      <FontAwesomeIcon icon={faInstagram} style={instagramStyle}/>
                    </a>
                    <FontAwesomeIcon icon={faList}/>
                  </div>
                </div>
              </div>
              <div className="lastSlideInf">
                <p className="label">最後までお読みいただきありがとうございました</p>
                <p className="content">このプレイリストはLei*が作成しました。プレイリストの作成者に「すき！」を送りませんか？いっぱいタップして好きを送りましょう！</p>
                <div className="btn">すきを送る</div>
              </div>
              <div className="lastSlideInf">
                <p className="label">ユーザー登録をしませんか？</p>
                <p className="content">musicGiftに登録すると自分のお気に入りの曲をシェアしたり、プレイリストを作成できたりします。登録はわずか10秒で完了します。</p>
                <div className="btn">ユーザー登録をする</div>
              </div>
              <div className="nextPlaylist">
                <p className="label">次のプレイリスト</p>
              </div>
            </section>
          </Slider>
          {this.state.slideIndex != -1 &&
            <>
              <div className={bl ? "indexFixedBox iFBactive no-select" : "indexFixedBox iFBinactive no-select"} onClick={() => this.setState({openIndex:true})}>
                目次を表示
              </div>
              <div className={bl ? "counterFixedBox iFBactive no-select" : "counterFixedBox iFBinactive"}>
                {this.state.slideIndex}/10
              </div>
              <div className={bl ? "toTopFixedBox iFBactive no-select" : "toTopFixedBox iFBinactive"} onClick={() => this.slider.slickGoTo(0)}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <Link to={{pathname: '/'}} className={bl ? "toHomeFixedBox iFBactive no-select" : "toHomeFixedBox iFBinactive"}>
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </>
          }
        </>
    );
  }
}