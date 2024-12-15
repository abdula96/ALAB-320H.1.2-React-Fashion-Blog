import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Article from "./Article";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Article
          title="Top 5 Winter Outfits"
          imgSrc="winter-outfits.jpg" // image name, with path relative to /public/assets
          imgAlt="A model wearing a variety of stylish winter outfits"
        />
        <Article
          title="Summer Styles to Watch"
          imgSrc="summer-styles.jpg" // image name, with path relative to /public/assets
          imgAlt="A collection of fashionable summer outfits"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
