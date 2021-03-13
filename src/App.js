
import React from "react";
import { Route } from "react-router-dom";
import "../src/style/App.less";
import { Header } from "./components";
import { Home, Cart } from "./pages";


const App = () => {


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
};

export default App;
