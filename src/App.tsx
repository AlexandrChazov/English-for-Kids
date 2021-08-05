import React from 'react';
import './App.css';
import MainContainer from "./components/Main/MainContainer";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import OverlayContainer from "./components/Overlay/OverlayContainer";
import WordlistContainer from "./components/Wordlist/WordlistContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavbarContainer/>
        <HeaderContainer/>
        <MainContainer/>
        <WordlistContainer/>
        <OverlayContainer/>
      </div>
    </Provider>
  );
}

export default App;
