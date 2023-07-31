import React, { useEffect } from 'react'
import '../Css Folder/qualification.css';
import { scroll_div_quali } from '../Javascript Folder/scroll-div-quali.js';
import bookIcon from '../Images/Book.gif';
import tenthIcon from '../Images/icons8-10-64.png';
import twelfthIcon from '../Images/icons8-12-64.png';
import graduationIcon from '../Images/icons8-graduation-96.png';
import algoIcon from '../Images/icons8-algorithm-96.png';

export const Qualifications = () => {
  useEffect(() => {
    scroll_div_quali();
  }, []);
  return (
    <div>
      <div className="intro-quali">
        <div className="intro-quali-img">
          <img src={bookIcon} alt="introgif" id="intro-quali-gif" />
        </div>
        <div className="intro-quali-text">
          <h1>Education</h1>
          <p>Basic Education and Qualifications</p>
          <p>I actively learn tech-related things online. Below are some of my Educational Qualifications.</p>
        </div>
      </div>

      <div className="scroll-div1">
        <div className="my-degrees-h2 scroll-div">
          <h2>Degrees Received</h2>
        </div>
      </div>


      <div className="degree-1 scroll-div1">
        <div className="degree-1-img scroll-div">
          <img src={tenthIcon} alt="10thimage" />
        </div>
        <div className="degree-1-desc scroll-div flex-column-1">
          <div className="degree-1-desc-head">
            <div>Secondary School Examination</div>
            <div>2016</div>
          </div>
          <div className="degree-1-desc-detail">
            <p>⚡Have completed my 10<sup>th</sup> (CBSE) from Lions School, Laldiggi, Mirzapur.</p>
            <p>⚡Scored 9.6 CGPA.</p>
          </div>
        </div>
      </div>

      <div className="degree-2 scroll-div1">
        <div className="degree-2-desc scroll-div flex-column-2">
          <div className="degree-2-desc-head">
            <div>Senior School Certificate Examination</div>
            <div>2018</div>
          </div>
          <div className="degree-2-desc-detail">
            <p>⚡Have completed my 12<sup>th</sup> (CBSE) from Lions School, Laldiggi, Mirzapur.</p>
            <p>⚡Opted PCM Stream with IP (Informatics Practices).</p>
            <p>⚡Scored 93.6%.</p>
          </div>
        </div>
        <div className="degree-2-img scroll-div">
          <img src={twelfthIcon} alt="12thimage" />
        </div>
      </div>

      <div className="degree-3 scroll-div1">
        <div className="degree-3-img scroll-div">
          <img src={graduationIcon} alt="graduationimage" />
        </div>
        <div className="degree-3-desc scroll-div flex-column-3">
          <div className="degree-3-desc-head">
            <div>Graduation</div>
            <div>2020-24</div>
          </div>
          <div className="degree-3-desc-detail">
            <p>⚡Currently pursuing my Computer Science and Engineering degree from VBSPU, Jaunpur.</p>
            <p>⚡3rd year student</p>
          </div>
        </div>
      </div>

      <div className="degree-4 scroll-div1">
        <div className="degree-4-desc scroll-div flex-column-4">
          <div className="degree-4-desc-head">
            <div>Self / Study</div>
            <div>2018 onwards</div>
          </div>
          <div className="degree-4-desc-detail">
            <p>⚡Have studied core subjects like Data Structures and Algorithms, DBMS etc.</p>
            <p>⚡Have also learned various Web Development, Game Development etc.</p>
            <p>⚡Have also learned various programming languages like C, C++, C#, Python etc.</p>
            <p>⚡Have implemented several projects based on what I've learned till now under my Computer Engineering
              course.</p>
          </div>
        </div>
        <div className="degree-4-img scroll-div">
          <img src={algoIcon} alt="12thimage" />
        </div>
      </div>
    </div>
  )
}
