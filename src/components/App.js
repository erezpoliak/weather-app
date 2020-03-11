import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Home from './Home';
import Stats from './Stats';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
    return (
      <Router>
        <React.Fragment>
          <GlobalStyle />
          <Route exact path="/" component={Home}></Route>
          <Route path="/stats" component={Stats}></Route>
        </React.Fragment>
      </Router> 
    );
 }

export default App;


const GlobalStyle = createGlobalStyle`
 body {
   margin: 0;
   padding: 0;
   font-family: sans-serif;
   font-size: 10px;
   height: 100%;
 }
`;