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
