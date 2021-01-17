import React, {useState, useEffect} from 'react';
import "./Work.css";
import Project from './Project.js';
import {github} from '../../projectData.js';
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi';
import {HiExternalLink} from 'react-icons/hi';

function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const projects = [...github];

  document.title ="Portfolio | Projects";

  useEffect(() => {

    if (currentSlide===0)
    {
      document.querySelector('#left-btn').disabled = true;
      document.querySelector('#left-btn').style.pointerEvents = "none";
    }
    else 
    {
    document.querySelector('#left-btn').disabled = false;
    document.querySelector('#left-btn').style.pointerEvents = "auto";
    }

    if (currentSlide===github.length-1)
    {
      document.querySelector('#right-btn').disabled = true;
      document.querySelector('#right-btn').style.pointerEvents = "none";
    }
    else
    {
      document.querySelector('#right-btn').disabled = false;
      document.querySelector('#right-btn').style.pointerEvents = "auto";
    }

  }, [currentSlide])
  
  return (
    <div id="work">
      <h2 className="section-title">PROJECTS</h2>
      <div id="project-container">
        <Project key={projects[currentSlide].id} {...projects[currentSlide]} />
      </div>
      <div className='work-btns'>
        <div className='preview-btns'>
        <button id='left-btn' className='preview-btn' onClick={() => setCurrentSlide(currentSlide-1)}><BiLeftArrow size={20}/></button>
        <button id='right-btn' className='preview-btn' onClick={() => setCurrentSlide(currentSlide+1)}><BiRightArrow size={20}/></button>
        </div>
        <a className="other-link" href="https://github.com/tusharkandpal" target='_blank' rel="noopener noreferrer">
        Visit Github <HiExternalLink/>
      </a>
        </div>
      
    </div>
  );
}

export default Work;
