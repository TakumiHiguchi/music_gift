import React from 'react';
import Header from '../component/Header';
import FixedMenu from '../component/FixedMenu';
import { 
  Link, 
  withRouter
} from "react-router-dom";



function User() {
  return (
    <>
      <div>
        <Header />
        <main>
          user
          
        </main>
      </div>
      <FixedMenu />
    </>
  );
}
//css
export default withRouter(User);
