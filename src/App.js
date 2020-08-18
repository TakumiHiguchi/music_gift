import React from 'react';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";
import './App.css';

//view
import Home from "./view/home";
import Article from "./view/article";
import Search from "./view/search";
import User from "./view/user";
import User_new from "./view/user/new";
import Bookmark from "./view/bookmark";
import Pl_show from "./view/playlist/show";
import SignUp from "./auth/SignUp";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/playlist/:id" component={Pl_show} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="*">
          <MusicGift />
        </Route>
      </Switch>
    </Router>
    
  );
}

function MusicGift(){
  let location = useLocation();
  return(
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/article" component={Article} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/user" component={User} />
          <Route exact path="/user/new" component={User_new} />
          <Route exact path="/bookmark" component={Bookmark} />
          <Route render={() => <h1>ページが見つかりません</h1>} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}