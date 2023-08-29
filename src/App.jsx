import React from "react";
import { Brand, Cta, Navbar } from "./components";
import {
  Features,
  Footer,
  Header,
  Possibility,
  AboutSection,
  Faq,
  Contact,
} from "./containers";
import { ScrollToTopButton } from "./features";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <AboutSection />
      <Features />
      <ScrollToTopButton />
      <Possibility />
      <Faq />
      <Contact />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
