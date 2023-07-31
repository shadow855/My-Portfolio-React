import React, { useEffect } from 'react'
import '../Css Folder/home.css';
import { scroll_div_home } from '../Javascript Folder/scroll-div-home.js';
import Icon from '../Components/Icon'; // Import the Icon component
import mygifIcon from '../Images/MyGif.gif';
import webdevIcon from '../Images/6L8E.gif';
import unitydevIcon from '../Images/spaceship.gif';
import { useNavigate  } from 'react-router-dom';

export const Home = () => {
    useEffect(() => {
        scroll_div_home();
      }, []);
     
      const navigate = useNavigate();

      

  return (
    <div>
        
        <div className="intro-main">
        <div className="intro-text">
            <h1>Hello.</h1>
            <p>I'm <span>Raiyan Mushtaque Ansari. </span>Front-End Developer, Unity 3D Learning Enthusiast. Always
                Learning.</p>
            <div className="link-icons">
                <a href="https://github.com/shadow855" target="_blank" rel="noreferrer">
                    <Icon iconName="github" className="icons"/>
                </a>
                <a href="https://www.linkedin.com/in/raiyan-mushtaque-110824254" target="_blank" rel="noreferrer">
                    <Icon iconName="linkedin" className="icons"/>
                </a>
                <a href="mailto:raiyanmushtaque@gmail.com" target="_blank" rel="noreferrer">
                    <Icon iconName="gmail" className="icons"/>
                </a>
                <a href="https://www.instagram.com/shadow_855/?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noreferrer">
                    <Icon iconName="instagram" className="icons"/>
                </a>
                <a href="https://youtube.com/@shadowgames9719" target="_blank" rel="noreferrer">
                    <Icon iconName="youtube" className="icons"/>
                </a>
            </div>
            <button id="contact-btn" onClick={() => navigate('/contact')}>Contact Me</button>
        </div>

        <div className="intro-img">
            <img src={mygifIcon} alt="introgif" id="intro-gif"/>

        </div>
    </div>
    <div className="scroll-div1">
        <div className="my-works-h2 scroll-div">
            <h2>Here's what I do</h2>
        </div>
    </div>

    <div className="work-1 scroll-div1">
        <div className="work-1-img scroll-div">
            <img src={webdevIcon} alt="work-1-img"/>
        </div>
        <div className="work-1-desc">
            <h3 className="scroll-div">Web Development</h3>
            <div className="work-1-desc-icon-main-div scroll-div">
                <Icon iconName="html" className="work-1-desc-icons"/>
                <Icon iconName="css" className="work-1-desc-icons"/>
                <Icon iconName="javascript" className="work-1-desc-icons"/>
                <Icon iconName="nodejs" className="work-1-desc-icons"/>
                <Icon iconName="mysql" className="work-1-desc-icons"/>
                <Icon iconName="github2" className="work-1-desc-icons"/>
                <Icon iconName="express" className="work-1-desc-icons"/>
            </div>
            <div className="work-1-desc-points-div scroll-div">
                <p className="work-1-desc-p">⚡Building responsive website front end using HTML-5, CSS-3 and JAVASCRIPT</p>
                <p className="work-1-desc-p">⚡Creating application backend in Node, MySql</p>
            </div>
        </div>
    </div>

    <div className="work-2 scroll-div1">
        <div className="work-2-desc">
            <h3 className="scroll-div">Unity3D Development</h3>
            <div className="work-2-desc-icon-main-div scroll-div">
            <Icon iconName="unity" className="work-2-desc-icons"/>
            <Icon iconName="c" className="work-2-desc-icons"/>
            <Icon iconName="cplus" className="work-2-desc-icons"/>
            <Icon iconName="csharp" className="work-2-desc-icons"/>
            <Icon iconName="blender" className="work-2-desc-icons"/>
            <Icon iconName="adobe" className="work-2-desc-icons"/>  
            </div>
            <div className="work-2-desc-points-div scroll-div">
                <p className="work-2-desc-p">⚡Building 3D models using Blender and Photoshop</p>
                <p className="work-2-desc-p">⚡Creating 3D animations in Blender</p>
                <p className="work-2-desc-p">⚡Creating 3D and 2D games using Unity3D</p>
            </div>
        </div>
        <div className="work-2-img scroll-div">
            <img src={unitydevIcon} alt="work-2-img"/>
        </div>
    </div>
    </div>
  )
}
