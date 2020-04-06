
import { Link } from 'react-router-dom';
import './style.js'
import {Navbarsection,Logo,Logotext,Ullist,Listitem,aa}from './style.js'
import React, { Component } from 'react';
import './style2.css'

class Navbar extends Component {
  
  
 

    constructor() {
        super()
    this.state={time:new Date()}
      }
    
      currentTime()
      {
        this.setState({
          time: new Date()
        })
      }
      componentWillMount()
      {
    setInterval(()=>this.currentTime(),1000)
      }
      

    render() {
     
    return(
        <Navbarsection style={{backgroundColor:"#E6E6FA"}} >
            
            <h1 style={{textAlign:"center",float:"Right",border:"1px solid black",marginRight:"20px",padding:"0px",marginBottom:"0px",marginTop:"10px",fontFamily:"Blackadder ITC",color:"#eb5424"}} >
        {this.state.time.toLocaleTimeString()}
      </h1>
     
      <a id="btnScrollToTop" href="" >
        Up
      </a>
            
            <Logo >
                <Logotext style={{fontFamily:"Blackadder ITC",color:"#eb5424"}} >Smart Development</Logotext>
            </Logo>
            
        
            
            <Ullist style={{textAlign:"center"}}>
                <Listitem ><Link style={{textDecoration:'none',fontFamily:"Blackadder ITC",color:"#eb5424"}}  to="/">Home</Link></Listitem>
                
                <Listitem ><Link style={{textDecoration:'none',fontFamily:"Blackadder ITC",color:"#eb5424"}} to="/Contact">Contact</Link></Listitem>
               
                
                <Listitem ><Link style={{textDecoration:'none',fontFamily:"Blackadder ITC",color:"#eb5424"}} to="/Myservices">My services</Link></Listitem>
                
               
            </Ullist>
            
        </Navbarsection>
      
    )
}}
export default Navbar;