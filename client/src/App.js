import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index.js";
import  SearchBooks  from "./pages/searchBooks.js";
import SavedBooks from "./pages/savedBooks.js";
import "./App.css";

function App() {
  return (
    <Router basename = {process.env.PUBLIC_URL || "/"}>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/search" component={SearchBooks} />
          <Route exact path="/saved" component={SavedBooks} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
