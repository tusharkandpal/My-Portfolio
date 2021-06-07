import React, { useState } from "react";
import "./Work1.css";
import Project1 from "./Project1.js";
import { github } from "../../projectData.js";
import { HiExternalLink } from "react-icons/hi";

function Work1() {
  const project = [...github];
  const [project_id, setProject_id] = useState(0);

  return (
    <div id="work1">
      <h2 className="section-title">PROJECTS</h2>
      <div className="work-main">
        <ol id='work-list-id'
        className="work-list" onClick={(e) => {
          if (e.target.dataset.index === undefined)
          return;
          setProject_id(e.target.dataset.index)}}>
          <li className="project-item" data-index="0">
            OnlineMeal
          </li>
          <li className="project-item" data-index="1">
            Expense Tracker
          </li>
          <li className="project-item" data-index="2">
            Twider
          </li>
          <li className="project-item" data-index="3">
            Devs WellSource
          </li>
          <li className="project-item" data-index="4">
            Todo App
          </li>
          <li className="project-item" data-index="5">
            Movie Library
          </li>
          <li className="project-item" data-index="6">
            Portfolio
          </li>
        </ol>
        <select  onClick={(e) => {
          if (e.target.value === undefined)
          return;
          setProject_id(e.target.value)}} className='project-dropdown'>
        <option className='dropdown-option' value="0" defaultValue>OnlineMeal</option>
        <option className='dropdown-option' value="1">Expense Tracker</option>
        <option className='dropdown-option' value="2">Twider</option>
        <option className='dropdown-option' value="3">Devs WellSource</option>
        <option className='dropdown-option' value="4">Todo App</option>
        <option className='dropdown-option' value="5">Movie Library</option>
        <option className='dropdown-option' value="6">Portfolio</option>
        </select>
        <Project1 key={project_id} {...project[project_id]} />
      </div>
      <a
        href="https://github.com/tusharkandpal"
        target="_blank"
        rel="noopener noreferrer"
        className='other-link'
      >
        Visit Github <HiExternalLink />
      </a>
      
    </div>
  );
}

export default Work1;
