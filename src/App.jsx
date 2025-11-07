import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/Home/HomePage";

const App = () => {
  return (
    <div className="app">
      {/* components */}
      <Header />
      <main>
        {/* pages */}
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};
export default App;
