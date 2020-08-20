
import React, { Component } from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート
import { faHome} from "@fortawesome/free-solid-svg-icons";//矢印アイコン

import firebase from 'firebase/app'; //必須
import 'firebase/firestore';

import viewportUnit from 'viewport-units-buggyfill';
viewportUnit.init({force: true});


class newUserSlider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      slideIndex: -1,
      updateCount: 0,
      openIndex:-1,
      submitPage:-1,
      data:{name:this.props.user.displayName,id:""}
    };
  }
  handleOnChange(type,val){
    let ins = this.state.data;
    switch(type){
      case "name": ins.name = val;break;
      case "id": ins.id = val;break;
    }
    
    this.setState({data:ins});
  }
  hendleOnSubmit(){
    const result = this.api(this.state.data.name,this.state.data.id,this.props.user)
    if(result){
      this.setState({submitPage:true});
    }
  }

  async api(name,key,user){
    console.log(user)
    try {
      const db = firebase.firestore();
      await db.collection("userDetails").doc(user.uid).set({
        "name": name,
        "description": "てすとでーたです.",
        "email":user.email,
        "job":key,
        counts:{receivedBookmark:0,receivedLike:0,sentLike:0}
      });
      
      return true;
    } catch (err) {
      return false;
    }

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
    return (
        <main className="userNewContainer" style={{overflowY:"hidden"}}>
          {this.state.slideIndex !== -1 &&
            <nav className={this.state.slideIndex > 0 ? "iFBactive backNav" : "iFBinactive backNav"} onClick={() => this.slider.slickGoTo(this.state.slideIndex - 1)}>戻る</nav>
          }
          {this.state.submitPage !== -1 &&
            <div className={this.state.submitPage ? "un_submitPage popup_effect_newUser_submit" : "un_submitPage popup_effect_newUser_submit_de"}>
              <div className="un_success_title">プロフィールを作成しました！</div>
              <div className="un_success_nextBox">
                <p className="label">もっとプロフィールを充実させる</p>
                <p className="content">プロフィールを充実させて、ユーザーの反応を高めましょう</p>
                <Link to={{pathname: '/'}} className="link">
                  プロフィール設定
                </Link>
              </div>
              <div className="un_success_nextBox">
                <p className="label">musicGiftに投稿してみる</p>
                <p className="content">musicGiftに投稿して音楽好きなユーザーと音楽を共有しましょう！</p>
                <Link to={{pathname: '/'}} className="link">
                  投稿する
                </Link>
              </div>
              <Link to={{pathname: '/'}} className={this.state.submitPage !== -1 ? "toHomeFixedBox iFBactive no-select" : "toHomeFixedBox iFBinactive"}>
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </div>
          }
          <div className='box popup_effect_newUser'>
            <div className='wave -one'></div>
            <div className='wave -two'></div>
            <div className='wave -three'></div>
            <div className={this.state.slideIndex <= 0 ? "iFBactive user_newtitle" : "iFBinactive user_newtitle"} >はじめまして<br /><span>あなたのお名前を教えてください</span></div>
            {this.state.slideIndex !== -1 &&
              <>
                <div className={this.state.slideIndex === 1 ? "iFBactive user_newtitle" : "iFBinactive user_newtitle"} >はじめまして<br /><span>次に職業を教えてください</span></div>
                <div className={this.state.slideIndex === 2 ? "iFBactive user_newtitle" : "iFBinactive user_newtitle"} >はじめまして<br /><span>以下の内容でプロフィール登録をします</span></div>
              </>
            }
          </div>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            <div className="un_inputContainer">
              <div className="un_inputContainer_wrap">
                <div className="label">ニックネーム</div>
                <input type="text" className="un_Input" value={this.state.data.name} placeholder="ニックネームを入力" onChange={(e) => this.handleOnChange("name",e.target.value)}/>
                <p>このニックネームは全ユーザーに公開されます。</p>
              </div>
              <div className="un_nextContainer">
                {this.state.data.name != "" &&
                  <p className="label1">{this.state.data.name}さんでよろしいですか？</p>
                }
                <div className="nextBtn" onClick={() => this.slider.slickGoTo(1)}>次へ</div>
              </div>
            </div>
            <div className="un_inputContainer">
              <div className="un_inputContainer_wrap">
                <div className="label">職業</div>
                <input type="text" className="un_Input" value={this.state.data.id} placeholder="職業を追加" onChange={(e) => this.handleOnChange("id",e.target.value)}/>
                <p>プロフィール画面に表示されます。ここの値はあなたの実際の職業でなくても構いません。</p>
              </div>
              <div className="un_nextContainer">
                {this.state.data.id != "" && this.state.data.id.length > 0 &&
                  <>
                    <p className="label1">{this.state.data.id}でよろしいですか？</p>
                    <div className="nextBtn" onClick={() => this.slider.slickGoTo(2)}>次へ</div>
                  </>
                }
                
              </div>
            </div>
            
            <div className="un_inputContainer">
              <div className="un_inputContainer_wrap">
                <div className="last_label">ニックネーム</div>
                <div className="resultContent">{this.state.data.name}</div>
                <div className="last_label">職業</div>
                <div className="resultContent">{this.state.data.id}</div>
              </div>
              <div className="un_nextContainer">
                <p className="label1"></p>
                <div className="nextBtn" onClick={() => this.hendleOnSubmit()}>登録する</div>
              </div>
            </div>
          </Slider>
         </main> 
      
    );
  }
}

export default newUserSlider
