import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import Slider from "react-slick";




import Playlist from '../../component/playlist'




//document.getElementsByClassName('').style.width = '';
function Index() {
  return (
    <>
      <main>
        <div className="playlist_ad">
          広告
        </div>
        <Playlist />
      </main>
    </>
  );
}
//css
export default withRouter(Index);
