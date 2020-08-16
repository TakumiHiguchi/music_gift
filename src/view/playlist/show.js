import React from 'react';
import { Link, withRouter } from "react-router-dom";
import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";//矢印アイコン
import { faApple,faYoutube } from "@fortawesome/free-brands-svg-icons";

import '../../css/playlist.scss'

const settings = {
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  arrows:false
}
const brPadding={
  paddingRight:"3px"
}
const key = "dwnedfoiwefiqwe"
function Index() {
  return (
    <>
      <main>
        <div className="playlist_ad">
          a
        </div>
        <Slider {...settings}>
          <div className="playlistSection index no-select scroll-y">
            <div className="playListHeader">
              <p className="next">Next<FontAwesomeIcon icon={faChevronRight} /></p>
            </div>
            <div className="playListInf flex">
              <div className="thumbnail">
                <img src="https://i.ytimg.com/vi/G6sKFv4GDkA/hqdefault.jpg" />
              </div>
              <div className="playListInfInner">
                <h1>りこの！おすすめプレイリストだよ？</h1>
                <Link
                  to={{pathname: '/'}}
                  className="user"
                >Lei*</Link>
                <a>ブックマークに追加</a>
              </div>
            </div>
            <div className="description">
              <p>独特な世界観と透明感が売りのヨルシカ。そんなヨルシカのおすすめ人気曲をご紹介します！</p>
              <p>ヨルシカをあまり聴いたことがない人向けに前提知識を。<br />ヨルシカの曲には物語があります。なので、物語を知りたい方や、考察したい方はアルバムごとに聴いていくのをお勧めします。<br />もちろん、曲単体で楽しむこともできますので、好きな曲だけを聴くというのでもOKです。</p>
            </div>
            <div className="comment">
              <p className="label">コメント</p>
              <p className="fcomment flex"><img src="https://hiiragi000.xsrv.jp/images/s_jac/sGbBowyXYTdCUNKGoxFC.png" /><span>マジでおすすめのプレイリスト！やったぜ！</span></p>
            </div>
            <div className="playlist">
              <p className="label">プレイリスト</p>
              {[...Array(10)].map((_,index) =>
                <div className="listContainer flex">
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
          {[...Array(10)].map(() =>
            <section className="playlistSection no-select scroll-y">
              <div className="sliderWrap">
                <img src='https://colorido.co.jp/wp-content/uploads/2020/03/cb65bded867ed46c1bb6c48627d86f31.jpg' />
              </div>
              <div className="title">
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
              曲をインデックス化して、それ以外発言できないように
            </section>
          )}
        </Slider>
      </main>
    </>
  );
}
//css
export default withRouter(Index);
