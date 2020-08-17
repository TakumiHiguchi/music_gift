
import React, { Component } from "react";
import Slider from "react-slick";
import { Link} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート
import { faChevronRight,faChevronLeft,faList,faHome} from "@fortawesome/free-solid-svg-icons";//矢印アイコン
import { faApple,faYoutube,faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBookmark,faHeart } from '@fortawesome/free-regular-svg-icons';

import '../css/playlist.scss'
import Indexpopup from './indexPopup';

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

export default class SlickGoTo extends React.Component {
  state = {
    slideIndex: -1,
    updateCount: 0,
    openIndex:-1
  };

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
    return (
        <>
          <Indexpopup isPopup={this.state.openIndex} action={(val) => this.setState({openIndex:val})} slickGoTo={(val) => this.slider.slickGoTo(val)}/>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            <div className="playlistSection index no-select scroll-y">
              <div className="playListHeader" onClick={() => this.slider.slickGoTo(1)}>
                <p className="next">Next<FontAwesomeIcon icon={faChevronRight} /></p>
              </div>
              <div className="playListInf flex">
                <div className="thumbnail">
                  <img src="https://i.ytimg.com/vi/G6sKFv4GDkA/hqdefault.jpg" />
                </div>
                <div className="playListInfInner">
                  <h1>おすすめプレイリストだよ？</h1>
                  <Link
                    to={{pathname: '/'}}
                    className="user"
                  >Lei*</Link>
                  <div className="tp_icons flex-align-center">
                    <FontAwesomeIcon icon={faHeart} style={tp_iconStyle}/>
                    <FontAwesomeIcon icon={faBookmark} style={tp_iconStyle}/>
                    <FontAwesomeIcon icon={faTwitter} style={twitterStyle}/>
                    <a href="#" class="insta_btn3 flex-jus-center">
                      <FontAwesomeIcon icon={faInstagram} style={instagramStyle}/>
                    </a>
                    <FontAwesomeIcon icon={faList}/>
                  </div>
                </div>
              </div>
              <div className={this.state.descriptionToggle ? "description desOpen scroll-y" : "description desClose scroll-y"} onClick={() => this.setState({descriptionToggle:!this.state.descriptionToggle})}>
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
                  <div className="title" onClick={() => this.slider.slickGoTo(index+2)}>
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
                    {[...Array(10)].map((_,index) =>
                      <p>曲をインデックス化して、それ以外発言できないようにすること</p>
                    )}
                  </div>
                </div>
              </section>
            )}
            <section className="playlistSection no-select scroll-y" onClick={() => this.slider.slickGoTo(0)}>
              最初に戻る
            </section>
          </Slider>
          {this.state.slideIndex != -1 &&
            <>
              <div className={this.state.slideIndex > 0 && (!this.state.openIndex || this.state.openIndex === -1 ) ? "indexFixedBox iFBactive no-select" : "indexFixedBox iFBinactive no-select"} onClick={() => this.setState({openIndex:true})}>
                目次を表示
              </div>
              <div className={this.state.slideIndex > 0 && (!this.state.openIndex || this.state.openIndex === -1 ) ? "counterFixedBox iFBactive no-select" : "counterFixedBox iFBinactive"}>
                {this.state.slideIndex}/10
              </div>
              <div className={this.state.slideIndex > 0 && (!this.state.openIndex || this.state.openIndex === -1 ) ? "toTopFixedBox iFBactive no-select" : "toTopFixedBox iFBinactive"} onClick={() => this.slider.slickGoTo(0)}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <Link to={{pathname: '/'}} className={this.state.slideIndex > 0 && (!this.state.openIndex || this.state.openIndex === -1 ) ? "toHomeFixedBox iFBactive no-select" : "toHomeFixedBox iFBinactive"}>
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </>
          }
        </>
    );
  }
}