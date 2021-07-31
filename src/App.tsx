import React from 'react';
import './App.css';
import MainContainer from "./components/Main/MainContainer";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Statistic from "./components/Statistic/Statistic";
import OverlayContainer from "./components/Overlay/OverlayContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <NavbarContainer/>
          <HeaderContainer/>
          <Switch>
            <Route exact path="/" component={MainContainer}/>
            <Route exact path="/Statistic" component={Statistic}/>
          </Switch>
          <OverlayContainer/>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
