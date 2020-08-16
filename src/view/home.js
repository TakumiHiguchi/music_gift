import React from 'react';
import Header from '../component/Header';
import { Link, withRouter } from "react-router-dom";
import Slider from "react-slick";

import '../css/home.scss'

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  arrows:false
};
const list_settings ={
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  arrows:false
}
const key = "dwnedfoiwefiqwe"
function Home() {
  return (
    <>
      <Header />
      <main>
        <Slider {...settings}>
          <a className="sliderWrap no-select">
            <img src='https://colorido.co.jp/wp-content/uploads/2020/03/cb65bded867ed46c1bb6c48627d86f31.jpg' />
          </a>
          <div className="sliderWrap">
            <img src='https://colorido.co.jp/wp-content/uploads/2020/03/cb65bded867ed46c1bb6c48627d86f31.jpg' />
          </div>
          <div className="sliderWrap">
            <img src='https://colorido.co.jp/wp-content/uploads/2020/03/cb65bded867ed46c1bb6c48627d86f31.jpg' />
          </div>
        </Slider>
        <div className="timeLine">
          {[...Array(10)].map(() =>
            <div className="playListCard">
              <div className="title flex-align-center">
                <img src="https://hiiragi000.xsrv.jp/images/main/icon5.png" />
                <span>music_bwithさんがプレイリストを作成しました。</span>
              </div>
              <Link
                to={{pathname: '/playlist/'+key}}
              >
                <Slider {...list_settings}>
                    <div className="thumbnail flex-jus-center">
                      <img src="https://hiiragi000.xsrv.jp/images/s_jac/Af5jWQS496CmTut3hVAp.png" />
                    </div>
                    <div className="thumbnail flex-jus-center">
                      <img src="https://hiiragi000.xsrv.jp/images/s_jac/Af5jWQS496CmTut3hVAp.png" />
                    </div>
                </Slider>
              </Link>
              <div className="cont">
                <p>第10位はヨルシカ1stFullアルバム「だから僕は音楽を辞めた」より八月、某、 月明かりです！ 疾走感あるメロディーとサビの「最低だ、最低だ、僕の全部最低だ」という歌詞がとても印象に残る楽曲と ...<a>もっと見る</a></p>

              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
//css
export default withRouter(Home);
