import React from 'react';

import SocialMedia from './../SocialMedia';
import Footer from './../Footer';
import './style1.css';

const Myservices = () => {
  return (
    <div>
    
        
       
    <div className="w" > >
    <div className="container" >
    <h2 className="work-title" ><span>My</span> Services</h2>
    <div className="k" >
    <div className="part first"  >
                    <i className="icon fa fa-chain fa-2x"></i>
                    <h4 className="part-title">WEB DESIGN</h4>
                    <hr className="line" />
                    <p className="part-desc">
                       

Custom website design, Template creation, new redesign, graphic upgrade. 
                    </p>
                </div>
                <div className="part first">
                    <i className="icon fa fa-chain fa-2x"></i>
                    <h4 className="part-title">HTML5 / CSS3 </h4>
                    <hr className="line" />
                    <p className="part-desc">
                   Creation web pages using HTML and CSS3 web layout, responsive design websites.<br/>
                    </p>
                </div>
                <div className="part first">
                    <i className="icon fa fa-chain fa-2x"></i>
                    <h4 className="part-title">JAVA SCRIPT</h4>
                    <hr className="line" />
                    <p className="part-desc">
                    Creation interactive web pages using Java Script.provide dynamic interactivity on websites
                    </p>
                </div>
                <div className="part first">
                    <i className="icon fa fa-chain fa-2x"></i>
                    <h4 className="part-title">USING FRAMEWORKS</h4>
                    <hr className="line" />
                    <p className="part-desc">
                    Using react js for creation interactive user interfaces. Define simple views for each state of your application.
                    
                    </p>
                    </div>
                </div>
                </div>
                </div>
                <div className="c">
                <div className="container">
                <div className="creative-info">
                
                <h4 className="info-dir">AN APPOINTMENT?</h4>
                <p className="info-desc" style={{color:"white",fontSize:"20px"}}>
                It all starts with an appointment to clearly discuss your project over a coffee.
                Thanks to my active listening, we would certainly be on the same wavelength. 
                </p>
                <p className="info-desc" style={{color:"white",fontSize:"20px"}}>
                As a professional web developer and programmer, your project has added value.
                </p>
                
            </div>
           
            </div>
            
            </div>
            <SocialMedia />
        
    </div>
  );
};

export default Myservices;