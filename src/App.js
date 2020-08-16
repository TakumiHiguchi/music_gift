import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

//view
import Home from "./view/home";
import Pl_show from "./view/playlist/show";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/playlist/:id" component={Pl_show} />
        <Route render={() => <h1>ページが見つかりません</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
