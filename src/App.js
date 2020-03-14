import React from 'react';
import './App.css';
import Main from './pages/Main';
import AllProduct from './pages/AllProduct';
import ContactPage from './pages/ContactPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/AllProduct">
          <AllProduct />
        </Route>
        <Route path="/ContactPage">
          <ContactPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
