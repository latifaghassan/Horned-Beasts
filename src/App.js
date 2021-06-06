// import logo from "./logo.svg";
// import "./App.css";

// import the react class from the react liberary
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="bigContainer">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

// index.html <= index.js <= App.js <= ...
