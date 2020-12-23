import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Footer from './Footer';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';


import {Switch, Route, Redirect} from 'react-router-dom';


const App1=()=>{
   return(
   <>
   <Navbar />
    <Switch>
      <Route  exact path="/"  component={Menu} />
      <Route  exact path="/contact"  component={Contact} />
      <Route  exact path="/about"  component={About} />
      <Route  exact path="/service"  component={Service} />
      <Redirect to="/" />
      
    </Switch>
    <Footer />
    </>
   );     	
};
export default App1;