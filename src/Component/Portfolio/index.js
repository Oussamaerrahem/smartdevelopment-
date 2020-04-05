import React from 'react';
import './style.css';
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './image5.jpg'
import image6 from './image6.jpg'
import image7 from './image7.jpg'
import image8 from './image8.jpg'

const Portfolio =()=>{
    return(
               <div className="container" >
               <div className="portfolio">
            <h2 className="portfolio-title">My Portfolio</h2>
            <ul className="portfolio-list">
                <li className="portfolio-item active">All </li>
                <li className="portfolio-item active">HTML</li>
                <li className="portfolio-item active">CSS</li>
                <li className="portfolio-item active">JS</li>
                <li className="portfolio-item active">REACT JS</li>
            </ul>
            
            <div className="box">
                
                <div>
                    <img src={image1} alt=""/>
                    
                </div>
                
                <div>
                    <img src={image2} alt="yjgjh"/>
                    
                </div>
                
                <div>
                    <img src={image3} alt=""/>
                    
                </div>
                
                <div>
                    <img src={image4} alt=""/>
                    
                </div>
                
                <div>
                    <img src={image5} alt=""/>
                    
                </div>
                
                <div>
                    <img src={image8} alt=""/>
                    
                </div>
                
                <div>
                    <img src={image7} alt=""/>
                    
                </div>
                
                <div>
                    <img src={image6} alt=""/>
                    
                </div>
                
            </div>
            
        </div>
        </div>


    )
}
export default Portfolio;