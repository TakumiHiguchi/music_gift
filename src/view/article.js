import React from 'react';
import Header from '../component/Header';
import FixedMenu from '../component/FixedMenu';
import { 
  Link, 
  withRouter
} from "react-router-dom";



function Article() {
  return (
    <>
      <div>
        <Header />
        <main>
          
          
        </main>
      </div>
      <FixedMenu />
    </>
  );
}
//css
export default withRouter(Article);
