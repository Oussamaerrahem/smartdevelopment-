import React , { Component } from 'react';
import { Link } from "react-scroll";
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './Component/Navbar';
import Contact from './Component/Contact';
import Index from './Component/Index';
import Myservices from './Component/Service';


class App extends Component {
  componentDidMount() {
    setTimeout(function(){ alert("Enjoy The Site "); }, 3000)
  }
 
  
  render() { 
  return (
    <BrowserRouter>

    <Navbar className='n' />
     
      <Route exact path='/' component={Index} />
      <Route path='/contact' component={Contact} />
      <Route path='/Myservices' component={Myservices} />
      

    </BrowserRouter>
  
    
  );
}
}
export default App;
