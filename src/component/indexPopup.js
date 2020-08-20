import React, { Component,useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート
import { faApple,faYoutube} from "@fortawesome/free-brands-svg-icons";
import '../css/popup.scss'
const brPadding={
  paddingRight:"3px"
}

class indexPopup extends Component{
  constructor(props){
      super(props)
  }
  handleClickOutside() {
    this.props.action(false);
  }
  render(){
    return (
      <>
        {this.props.isPopup !== -1 &&
          <div className={this.props.isPopup ? 'popup popup_effect' : 'popup popup_effect_de'}>
            
            <div className="whir scroll-y">
              {[...Array(10)].map((_,index) =>
                      <div className="listContainer flex" onClick={() => this.props.slickGoTo(index+1)}>
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
    }
     </>
    )
  }
}


export default onClickOutside(indexPopup)