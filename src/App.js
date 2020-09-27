import React from "react";
import { HashRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import SearchPage from "./pages/SearchPage.js";
import MyPerfumePage from "./pages/MyPerfumePage.js";
import AboutPage from "./pages/AboutPage.js";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path="/" component={HomePage} exact />
        <Route path="/search" component={SearchPage} />
        <Route path="/my-perfume" component={MyPerfumePage} />
        <Route path="/about" component={AboutPage} />
        {/* <Route component={NotFoundPage} /> */}
      </HashRouter>
    </div>
  );
}

export default App;
