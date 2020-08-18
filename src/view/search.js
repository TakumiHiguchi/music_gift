import React from 'react';
import Header from '../component/Header';
import FixedMenu from '../component/FixedMenu';
import { 
  Link, 
  withRouter
} from "react-router-dom";
import SearchComponent from '../component/search';

import '../css/search.scss'

function Search() {
  return (
    <>
      <div>
        <Header search={true}/>
        <main>
          <SearchComponent />
          
        </main>
      </div>
      <FixedMenu />
    </>
  );
}
//css
export default withRouter(Search);
