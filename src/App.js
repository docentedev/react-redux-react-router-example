import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'

import './App.css';
import routes from "./routes";

import Home from './container/home/Home'
import Contact from './container/contact/Contact'
import ProductDetail from './container/product-detail/ProductDetail'
import Products from './container/products/Products'
import NotFound from './container/not-found/NotFound'

import Menu from './components/menu/Menu'

import store from './store'
/*
import { createContext, useState } from 'react'
import Card from './components/card/Card';
const [show, setShow] = useState(false)
export const MyContext = createContext({ color: 'red' })
<MyContext.Provider value={{ color: 'red' }}>
      <button onClick={() => {
        setShow(!show)
      }}>Toggle Card</button>
      {<Card show={show} />}
    </MyContext.Provider>
*/

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Router>
          <Route path="/">
            <Menu />
          </Route>
          <Switch>
            <Route path={routes.HOME} exact>
              <Home />
            </Route>
            <Route path={routes.CONTACT}>
              <Contact />
            </Route>
            <Route exact path={routes.PRODUCT}>
              <Products />
            </Route>
            <Route path={routes.PRODUCT_DETAIL}>
              <ProductDetail />
            </Route>
            <Route path={routes.NOT_FOUND}>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
