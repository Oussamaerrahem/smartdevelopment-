import React , { Component } from 'react';



import About from './../About';

import Footer from './../Footer';
import Home from './../Home';

import Portfolio from './../Portfolio';
import SocialMedia from './../SocialMedia';
import Work from './../Work';
import Profile from './../Profile';


class Index extends Component {
  render() { 
  return (
    <div >
    
     <Home />
     <Work />
     <Portfolio />
     <Profile />
     <About />
     <SocialMedia />
     
     
    </div>
  );
}
}
export default Index;
