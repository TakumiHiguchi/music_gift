import React from 'react';
import Header from '../component/Header';
import FixedMenu from '../component/FixedMenu';
import { 
  Link, 
  withRouter
} from "react-router-dom";



function Home() {
  return (
    <>
      <div>
        <Header />
        <main>
          a
          
        </main>
      </div>
      <FixedMenu />
    </>
  );
}
//css
export default withRouter(Home);
