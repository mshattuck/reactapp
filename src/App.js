import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";



function App() {
  return (
    <Router>
      <div>
        <Header/>
        <div>

        <h1> Michael Shattuck</h1>

       </div>
      
        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        
        <Footer/>
       
        </div>

        </Router>
   
  );
}

export default App;
