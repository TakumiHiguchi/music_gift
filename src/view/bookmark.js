import React from 'react';
import Header from '../component/Header';
import FixedMenu from '../component/FixedMenu';
import { 
  Link, 
  withRouter
} from "react-router-dom";



function Bookmark() {
  return (
    <>
      <div>
        <Header />
        <main>
          bookmark
          
        </main>
      </div>
      <FixedMenu />
    </>
  );
}
//css
export default withRouter(Bookmark);
