import React from 'react';
import './style.css';

const Work =()=>{
    return(
        
            <div className="work" >
            <div className="container">
                <h2 className="work-title"><span>My</span> Projects</h2>
                <div className="part first">
                    <i className="icon fa fa-chain fa-2x"></i>
                    <h4 className="part-title">Tunisia Smart Consulting</h4>
                    <hr className="line" />
                    <p className="part-desc">
                        <a href="https://oussamaerrahem.github.io/tunisiasmart/" target="_blank" style={{textDecoration:"none"}} >Click Here </a> <br/>
                        Or <br/> 
                        <a href="https://github.com/Oussamaerrahem/tunisiasmart" target="_blank" style={{textDecoration:"none"}} >Click Here </a>
                    </p>
                </div>
                
                <div className="part">
                    <i className="icon fa fa-bolt fa-2x"></i>
                    <h4 className="part-title">Smart Development</h4>
                    <hr className="line" />
                    <p className="part-desc">
                    <a href="https://nraidapp.herokuapp.com" target="_blank" style={{textDecoration:"none"}} >Click Here </a> <br/>
                        Or <br/> 
                        <a href="https://github.com/Oussamaerrahem/smartdevelopment-" target="_blank" style={{textDecoration:"none"}} >Click Here </a>
                    </p>
                </div>
                
                <div className="part last">
                    <i className="icon fa fa-tachometer fa-2x"></i>
                    <h4 className="part-title">Work in progress</h4>
                    <hr className="line" />
                    <p className="part-desc">
                    <a href="" target="_blank" style={{textDecoration:"none"}} >Click Here </a> <br/>
                        Or <br/> 
                        <a href="" target="_blank" style={{textDecoration:"none"}} >Click Here </a>
                    </p>
                </div>
                
            </div>
        </div>
        


    )
}
export default Work;