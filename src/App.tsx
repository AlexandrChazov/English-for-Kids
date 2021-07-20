import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar/>
        <Header/>
        <Main/>
      </div>
    </Provider>
  );
}

export default App;
