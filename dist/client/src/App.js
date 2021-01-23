import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
//Components
import Header from './components/Header.component'
import Footer from './components/Footer.component';
//Public Views
import Account from './views/Account.view'
import Contact from './views/Contact.view'
import Home from './views/Home.view'
import Orders from './views/Orders.view'
import Products from './views/Products.view'

// import { Provider } from 'react-redux';
// import store from './store';

function App() {
  return (
    // <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/account">
                <Account />
              </Route>
              <Route exact path="/orders">
                <Orders />
              </Route>
              <Route exact path="/products">
                <Products />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    // </Provider>
  );
}

export default App;
