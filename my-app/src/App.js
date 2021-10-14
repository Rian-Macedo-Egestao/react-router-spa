import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Home from "./paginas/Home";
import About from "./paginas/About";
import Page404 from "./paginas/Page404";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      
      <Route path="/sobre">
        <About/>
      </Route>
      <Route>
        <Page404/>
      </Route>
      </Switch>
    </Router>
    
    
    </>
  );
}

export default App;
