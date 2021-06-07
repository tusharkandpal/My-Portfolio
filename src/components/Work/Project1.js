import { IconContext } from "react-icons";

const Project1 = ({ name, img, languages, code, live, details }) => {
  return (
    <IconContext.Provider value={{ style: {fontSize: "25px", color: "var(--primary-color)"} }}>
    <div className="project">
      <div className="img-box">
        <img className="project-img" src={img.default} alt="social" />
        <div className="project-links">
          <a
            href={code}
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href={live}
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{name}</h3>
        <ul className="project-details">
          {details.map((detail) => (
            <li key={Math.random() * 100}>{detail}</li>
          ))}
        </ul>
        <div className="project-skills">
          {languages.map((Icon) => (
            <span key={Math.random() * 100}>{Icon} </span>
          ))}
        </div>
      </div>
    </div>
    </IconContext.Provider>
  );
};

export default Project1;
