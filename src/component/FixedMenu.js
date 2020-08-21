import React from "react";
import { Link,useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート
import { faHome,faSearch,faUser,faPlus,faSuitcase } from "@fortawesome/free-solid-svg-icons";//矢印アイコン


import '../css/mainstyle.scss'

function FixedMenu (){
    const location = useLocation();
    return (
      <div className="playlist_ad flex-jus-around fixedmenu">
        <Link to={{pathname: '/'}} className="flex-jus-center">
          <FontAwesomeIcon icon={faHome} style={location.pathname == "/" ? {color:"#00aced"} : null}/>
        </Link>
        <Link to={{pathname: '/article'}} className="flex-jus-center">
          <FontAwesomeIcon icon={faSuitcase} style={location.pathname == "/article" ? {color:"#00aced"} : null}/>
        </Link>
        <Link to={{pathname: '/compose'}} className="flex-jus-center">
          <FontAwesomeIcon icon={faPlus} style={location.pathname == "/compose" ? {color:"#00aced"} : null}/>
        </Link>
        <Link to={{pathname: '/search'}} className="flex-jus-center">
          <FontAwesomeIcon icon={faSearch} style={location.pathname == "/search" ? {color:"#00aced"} : null}/>
        </Link>
        <Link to={{pathname: '/user'}} className="flex-jus-center">
          <FontAwesomeIcon icon={faUser} style={location.pathname == "/user" || location.pathname == "/signup" ? {color:"#00aced"} : null}/>
        </Link>
      </div>
    );
}

export default FixedMenu;
