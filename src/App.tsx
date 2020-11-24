import { type } from 'os';
import React, {useEffect, useState, useRef} from 'react';
import './App.css';
import Home from './pages/home'
import About from './pages/about'
import NotFound from './pages/404'
import Posts from './pages/posts'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  
} from "react-router-dom";
import 'flexboxgrid'





const Blog = () => { 

 

  return (
    <div className="container">

<Router>
  <div className="row center-xs">
    <div className="col-xs-12">
  <div className="nav" >
<NavLink className="nav--item" strict to="/" activeStyle={{
    fontWeight: "bold",
    textDecoration: "underline"
  }}>Home</NavLink>
<NavLink className="nav--item"  to="/about" activeStyle={{
    fontWeight: "bold",
    textDecoration: "underline"
  }}>About</NavLink>

</div>
</div>
</div>
     <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/posts/:ids">
          <Posts />
          </Route>
          <Route exact path="/404"> 
          <NotFound />
        </Route> 
      </Switch>
    </Router>

   


    
</div> 
  )}
export default Blog;