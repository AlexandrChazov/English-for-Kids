import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainContainer from "./components/Main/MainContainer";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import NavbarContainer from "./components/Navbar/NavbarContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavbarContainer/>
        <Header/>
        <MainContainer/>
      </div>
    </Provider>
  );
}

export default App;
