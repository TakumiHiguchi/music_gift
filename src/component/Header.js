import React from "react";
import { Link, withRouter } from "react-router-dom";

class Header extends React.Component {

  render() {
    return (
      <div class="table-responsive">
        ヘッダー
      </div>
    );
  }
}

export default withRouter(Header);
