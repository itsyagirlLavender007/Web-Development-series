import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <div className="app">
      <Header />
      <Main className="main" />
      <Footer />
    </div>
  );
}

export default App;
