import React from 'react';
import Header from '../component/Header';
import FixedMenu from '../component/FixedMenu';
import { 
  Link, 
  withRouter
} from "react-router-dom";



function Search() {
  return (
    <>
      <div>
        <Header />
        <main>
          search
          
        </main>
      </div>
      <FixedMenu />
    </>
  );
}
//css
export default withRouter(Search);