import React, { Component } from "react";
import Slider from "react-slick";
import Recommended from '../view/search/recommended'


import viewportUnit from 'viewport-units-buggyfill';
viewportUnit.init({force: true});



export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      updateCount: 0,
      openIndex:-1,
      data:{}
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
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


    return (
      <>
        <div className="searchSlider_nav scroll-x flex">
            <div className="data flex-jus-center" onClick={() => this.slider.slickGoTo(0)} >
              <div className="flex-jus-center" style={this.state.slideIndex === 0 ? {borderBottom:"2px solid #00aced"} : {borderBottom:"2px solid white"}}>
                <p>おすすめ</p>
              </div>
            </div>
            <div className="data flex-jus-center" onClick={() => this.slider.slickGoTo(1)}>
              <div className="flex-jus-center" style={this.state.slideIndex === 1 ? {borderBottom:"2px solid #00aced"} : {borderBottom:"2px solid white"}}>
                <p>トレンド</p>
              </div>
            </div>
            <div className="data flex-jus-center" onClick={() => this.slider.slickGoTo(2)}>
              <div className="flex-jus-center" style={this.state.slideIndex === 2 ? {borderBottom:"2px solid #00aced"} : {borderBottom:"2px solid white"}}>
                <p>人気リスト</p>
              </div>
            </div>
            <div className="data flex-jus-center" onClick={() => this.slider.slickGoTo(3)}>
              <div className="flex-jus-center" style={this.state.slideIndex === 3 ? {borderBottom:"2px solid #00aced"} : {borderBottom:"2px solid white"}}>
                <p>プレイリスト</p>
              </div>
            </div>
            <div className="data flex-jus-center" onClick={() => this.slider.slickGoTo(4)}>
              <div className="flex-jus-center" style={this.state.slideIndex === 4 ? {borderBottom:"2px solid #00aced"} : {borderBottom:"2px solid white"}}>
                <p>ニュース</p>
              </div>
            </div>
            <div className="data flex-jus-center" onClick={() => this.slider.slickGoTo(5)}>
              <div className="flex-jus-center" style={this.state.slideIndex === 5 ? {borderBottom:"2px solid #00aced"} : {borderBottom:"2px solid white"}}>
                <p>歌詞考察</p>
              </div>
            </div>
            <div className="data flex-jus-center" onClick={() => this.slider.slickGoTo(6)}>
              <div className="flex-jus-center" style={this.state.slideIndex === 6 ? {borderBottom:"2px solid #00aced"} : {borderBottom:"2px solid white"}}>
                <p>ライブレポート</p>
              </div>
            </div>
            <div className="data flex-jus-center" onClick={() => this.slider.slickGoTo(7)}>
              <div className="flex-jus-center" style={this.state.slideIndex === 7 ? {borderBottom:"2px solid #00aced"} : {borderBottom:"2px solid white"}}>
                <p>ユーザー</p>
              </div>
            </div>
        </div>
        <div className="searchSlider_main">
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            <Recommended />
            {[...Array(7)].map((_,index) =>
              <div className="data">
                {index}
              </div>
            )}
          </Slider>
        </div>
      </>
        
    );
  }
}