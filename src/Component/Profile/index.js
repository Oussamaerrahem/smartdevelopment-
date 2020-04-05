import React from 'react';
import './style.css'

const Profile =()=>{
    return(
        
              <div className="profile_skills">
            <div className="container">
                <div className="profile">
                    <h2 className="profile-title"><span>My </span>Profile</h2>
                    <ul className="profile-list">
                        <li className="profile-item">
                            <span>Name</span>
                            Oussama Errahem
                        </li>
                        <li className="profile-item">
                            <span>Birthday</span>
                            01/03/1993
                        </li>
                        <li className="profile-item">
                            <span>Address</span>
                            Khaznadar ettayeb lemhiri street , Tunis
                        </li>
                        <li className="profile-item">
                            <span>Phone</span>
                            (+216) 58 804 194
                        </li>
                        <li className="profile-item">
                            <span>Email</span>
                            oussamaerrahem@gmail.com
                        </li>
                        <li className="profile-item">
                            <span>Website</span>
                            <span className="web"> www.google.com</span>
                        </li>
                    </ul>
                </div>
                
                <div className="skills">
                    <h2 className="skills-title"> <span>Skills</span></h2>
                    <p className="skills-desc">
                    using HTML to define the structure of a web page whereas CSS is used to modify and enhance that structure by adding styling. 
                    using Framework to make web developpement faster and easier.
                    </p>
                    <div className="bar">
                        <span className="title">HTML et CSS</span>
                        <span className="perc">90%</span>
                        <div className="parent">
                            <span className="sp1"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title">JS</span>
                        <span className="perc">80%</span>
                        <div className="parent">
                            <span className="sp2"></span>
                        </div>
                    </div>
                    <div className="bar">
                        <span className="title">Bootstrap</span>
                        <span className="perc">85%</span>
                        <div className="parent">
                            <span className="sp3"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title">React JS</span>
                        <span className="perc">85%</span>
                        <div className="parent">
                            <span className="sp3"></span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        


    )
}
export default Profile;