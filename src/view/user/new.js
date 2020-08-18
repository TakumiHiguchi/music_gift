import React from 'react';
import { Link, withRouter } from "react-router-dom";
import Header from '../../component/Header';
import FixedMenu from '../../component/FixedMenu';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontaweresomeのインポート
import { faBookmark,faHeart } from '@fortawesome/free-regular-svg-icons';





function User() {
  
  return (
    <>
      <div>
        <Header />
        <main>
          new
        </main>
      </div>
      <FixedMenu />
    </>
  );
}


export default withRouter(User);
