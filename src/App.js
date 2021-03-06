import React from 'react';
//redux


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
import Settings_profile from "./view/settings/profile";
import Compose from "./view/compose";
import Playlist_new from "./view/playlist/new";
import Pl_show from "./view/playlist/show";
import SignUp from "./auth/SignUp";

import * as firebase from "firebase/app";
import "firebase/auth";
import { isSignIn,setUserDetails } from './redux/action.js'
import store from "./redux/store.js"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isSignin:false,
      user:[],
      data:{res:true}
    };
  }
  componentDidMount() {
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBC_v_l0991FvOF33DyuDG0HQemskJgcpk",
      authDomain: "musicgift-54fd9.firebaseapp.com",
      databaseURL: "https://musicgift-54fd9.firebaseio.com",
      projectId: "musicgift-54fd9",
      storageBucket: "musicgift-54fd9.appspot.com",
      messagingSenderId: "1085480009895",
      appId: "1:1085480009895:web:446a979186d04ff4a3db82",
      measurementId: "G-4TSG6KBCFN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
    const db = firebase.firestore();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection("userDetails").doc(user.uid).get().then((response) => {
          store.dispatch(setUserDetails(response));
          store.dispatch(isSignIn(user));
        });
      }else {
        store.dispatch(isSignIn(false))
      }
    })
  }

  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/user/new" component={User_new} />
          <Route exact path="/playlist/:id" component={Pl_show} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/settings/profile" component={Settings_profile} />
          <Route exact path="/compose/playlist" component={Playlist_new} />
          <Route path="*">
            <MusicGift />
          </Route>
        </Switch>
      </Router>
    );
  }
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
          <Route exact path="/compose" component={Compose} />
          <Route render={() => <h1>ページが見つかりません</h1>} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}


export default App