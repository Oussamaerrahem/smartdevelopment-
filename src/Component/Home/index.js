import React from 'react';
import './style.css'

const Home =()=>{
    return(
        <div>
       
             <div className="home">
            <div className="container">
                <div className="home-information">
                    <h2 className="home-title margin-bottom">Oussama Errahem</h2>
                    <h4 className="home-info">Web Developer</h4>
                    <p className="home-desc">
                        Iam a professional Web Developer <span>Back-End</span> and <span> Front-End</span> Developer creating modern and resposive designs to Web.
                         Let us work together. Thank you. 
                    </p>
                    <button className="home-btn"> <a href="./../Contact/index.js" target="_blank"style={{textDecoration:"none"}} >Let's Begin</a> </button>
                </div>
            </div>
        </div>
        </div>


    )
}
export default Home;