import React from "react";
import { Link, withRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート
import { faHome,faSearch,faUser,faBookmark,faSuitcase } from "@fortawesome/free-solid-svg-icons";//矢印アイコン

import '../css/mainstyle.scss'
class Header extends React.Component {

  render() {
    return (
      <header className="flex-jus-between" style={headerStyle.mainContainer}>
        <h1 style={headerStyle.h1}>musicGift</h1>
        {this.props.search &&
          <div class="Inputline flex-jus-center">
              <FontAwesomeIcon icon={faSearch} style={{color:"#aaa"}}/>
              <input type="text" className="searchInput" placeholder="キーワード検索" />
          </div>
        }
      </header>
    );
  }
}

const headerStyle ={
  mainContainer:{
    width:'calc(100% - 20px)',
    height:"40px",
    padding:'0 10px',
    background:'white',
    borderBottom:"1px solid #f0f0f0"
  },
  h1:{
    display:"inline",
    lineHeight:'40px',
    fontWeight:'bold',
    fontSize:'1.1em'
  }

}

export default withRouter(Header);
