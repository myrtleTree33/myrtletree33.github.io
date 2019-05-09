import React from "react";
import { Link, Switch, Route, Redirect, withRouter } from "react-router-dom";

import HomeScreen from "./screens/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">{/* <Link to="/">Home</Link> */}</header>

      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          {/* <Route path="/profile/:login" component={ProfileScreen} />
          <Route path="/account" component={AccountScreen} />
          <Route path="/logout" component={LogoutScreen} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
