import React from 'react';
import Header from '../component/Header';
import FixedMenu from '../component/FixedMenu';
import { 
  Link, 
  withRouter
} from "react-router-dom";



function Like() {
  return (
    <>
      <div>
        <Header />
        <main>
          like
          
        </main>
      </div>
      <FixedMenu />
    </>
  );
}
//css
export default withRouter(Like);
