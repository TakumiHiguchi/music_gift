import React from "react";
import { Link, withRouter } from "react-router-dom";

import '../css/mainstyle.scss'
class Header extends React.Component {

  render() {
    return (
      <header style={headerStyle.mainContainer}>
        <h1 style={headerStyle.h1}>musicGift</h1>
      </header>
    );
  }
}

const headerStyle ={
  mainContainer:{
    width:'calc(100% - 20px)',
    height:"40px",
    padding:'0 10px',
    background:'#00aced'
  },
  h1:{
    display:"inline",
    color:'white',
    lineHeight:'40px',
    fontWeight:'bold',
    fontSize:'1.2em'
  }

}

export default withRouter(Header);
