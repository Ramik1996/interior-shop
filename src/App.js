import React from 'react';
import './App.css';
import Main from './pages/Main';
import AllProduct from './pages/AllProduct';
import ContactPage from './pages/ContactPage';
import ProductDetails from './pages/ProductDetails';
import ScrollToTop from './containers/ScrollToTop/ScrollToTop';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop>
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
          <Route path="/ProductDetails/:id" children={<ProductDetails />} />
        </Switch>
        </ScrollToTop>
    </Router>
  )
}

export default App;
