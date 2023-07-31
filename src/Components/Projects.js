import React, { useEffect } from 'react'
import '../Css Folder/projects.css';
import { scroll_div_proj } from '../Javascript Folder/scroll-div-proj.js';
import Icon from '../Components/Icon';
import projIcon from '../Images/Project.gif';

export const Projects = () => {
  useEffect(() => {
    scroll_div_proj();
  }, []);

  // Function to handle the click event for the "More Projects (GitHub)" button
  const handleGitHubButtonClick = () => {
    // Replace 'your-github-url' with the actual URL of your GitHub page
    const githubUrl = 'https://github.com/shadow855';
    // Open the GitHub page in a new tab
    window.open(githubUrl, '_blank');
  };

  return (
    <div>
      <div className="intro-proj">
        <div className="intro-proj-img">
          <img src={projIcon} alt="introgif" id="intro-proj-gif" />
        </div>
        <div className="intro-proj-text">
          <h1>Projects</h1>
          <p>My projects makes use of vast variety of latest technology tools. My best experience is to create Web and
            2D/3D game projects. Below are some of my projects. Note that not all of the mentioned projects are on
            GitHub yet.</p>
        </div>
      </div>

      <div className="proj-container">
        <div className="scroll-div1">
          <div className="hello scroll-div">
            <div className="anim div-3-1">
              <div className="project-cards">
                <div className="proj-name-div">
                  <p className="proj-name">My Portfolio</p>
                </div>
                <p className="proj-desc">More about my Works, Projects and Education.</p>
                <div className="proj-desc-icons-container">
                  <Icon iconName="html" className="proj-desc-icons" />
                  <Icon iconName="css" className="proj-desc-icons" />
                  <Icon iconName="javascript" className="proj-desc-icons" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-div1">
          <div className="hello scroll-div">
            <div className="anim div-3-2">
              <div className="project-cards">
                <div className="proj-name-div">
                  <p className="proj-name">Quiz Website</p>
                </div>
                <p className="proj-desc">Test your knowledge on HTML, CSS and JS.</p>
                <div className="proj-desc-icons-container">
                  <Icon iconName="html" className="proj-desc-icons" />
                  <Icon iconName="css" className="proj-desc-icons" />
                  <Icon iconName="javascript" className="proj-desc-icons" />
                  <Icon iconName="nodejs" className="proj-desc-icons" />
                  <Icon iconName="mysql" className="proj-desc-icons" />
                  <Icon iconName="express" className="proj-desc-icons" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-div1">
          <div className="hello scroll-div">
            <div className="anim div-3-3">
              <div className="project-cards">
                <div className="proj-name-div">
                  <p className="proj-name">Music Player</p>
                </div>
                <p className="proj-desc">Listen offline music with well-maintained music.</p>
                <div className="proj-desc-icons-container">
                  <Icon iconName="html" className="proj-desc-icons" />
                  <Icon iconName="css" className="proj-desc-icons" />
                  <Icon iconName="javascript" className="proj-desc-icons" />
                  <Icon iconName="nodejs" className="proj-desc-icons" />
                  <Icon iconName="mysql" className="proj-desc-icons" />
                  <Icon iconName="express" className="proj-desc-icons" />

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-div1">
          <div className="hello scroll-div">
            <div className="anim div-3-4">
              <div className="project-cards">
                <div className="proj-name-div">
                  <p className="proj-name">3D Cube Runner</p>
                </div>
                <p className="proj-desc">Cross the hurdles and win.</p>
                <div className="proj-desc-icons-container">
                  <Icon iconName="unity" className="proj-desc-icons" />
                  <Icon iconName="blender" className="proj-desc-icons" />
                  <Icon iconName="csharp" className="proj-desc-icons" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-div1">
          <div className="hello scroll-div">
            <div className="anim div-3-5">
              <div className="project-cards">
                <div className="proj-name-div">
                  <p className="proj-name">Air Wars</p>
                </div>
                <p className="proj-desc">Enjoy the 2D battle among Airships.</p>
                <div className="proj-desc-icons-container">
                  <Icon iconName="unity" className="proj-desc-icons" />
                  <Icon iconName="adobe" className="proj-desc-icons" />
                  <Icon iconName="csharp" className="proj-desc-icons" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-div1">
          <div className="hello scroll-div">
            <div className="anim div-3-6">
              <div className="project-cards">
                <div className="proj-name-div">
                  <p className="proj-name">THE LiViNG DEAD</p>
                </div>
                <p className="proj-desc">Fight and Survive the Zombie Apocalypse.</p>
                <div className="proj-desc-icons-container">
                  <Icon iconName="unity" className="proj-desc-icons" />
                  <Icon iconName="blender" className="proj-desc-icons" />
                  <Icon iconName="adobe" className="proj-desc-icons" />
                  <Icon iconName="csharp" className="proj-desc-icons" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="more-proj-div">
        <button id="proj-btn" onClick={handleGitHubButtonClick}>More Projects (GitHub)</button>
      </div>
    </div>
  )
}
