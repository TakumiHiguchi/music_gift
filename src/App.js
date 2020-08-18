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
import Search from "./view/search";
import User from "./view/user";
import Like from "./view/like";
import Bookmark from "./view/bookmark";
import Pl_show from "./view/playlist/show";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/playlist/:id" component={Pl_show} />
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
      <CSSTransition key={location.key} classNames="fade" timeout={1000}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/user" component={User} />
          <Route exact path="/like" component={Like} />
          <Route exact path="/bookmark" component={Bookmark} />
          <Route render={() => <h1>ページが見つかりません</h1>} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}