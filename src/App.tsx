import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MainContainer from "./components/Main/MainContainer";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

function App() {
  // @ts-ignore
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar/>
        <Header/>
        <MainContainer/>
      </div>
    </Provider>
  );
}

export default App;
