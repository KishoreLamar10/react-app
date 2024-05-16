import React from "react";
import Header from "./header";
import Footer from "./footer";
import Content from "./Content";
import '../styles/body.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
