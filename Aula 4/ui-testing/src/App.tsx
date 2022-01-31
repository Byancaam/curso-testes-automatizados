/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { useState } from "react";

const App = () => {
  const [skillName, setSkillName] = useState("");
  const [developers, setDevelopers] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [roles, setRoles] = useState("");

  const [skillsData, setSkillsData] = useState([
    {
      skillName: "",
      developers: [],
      profile: {
        technologies: [],
        roles: []
      }
    }
  ]);

  const [showSkills, setShowSkills] = useState(false);

  let listSkills = skillsData.map((skill, index) => (
    <ul key={index}>
      <li>Skill Name: {skill.skillName}</li>
      <li>
        Developers:
        <ul>
          <li>{skill.developers[0]}</li>
          <li>{skill.developers[1]}</li>
        </ul>
      </li>
      <li>
        Technologies:
        <ul>
          <li>{skill.profile.technologies[0]}</li>
          <li>{skill.profile.technologies[1]}</li>
        </ul>
      </li>
    </ul>
  ));

  function loadSkill() {
    setShowSkills(true);
    fetch("https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skill")
      .then(response => response.json())
      .then(data => {
        setSkillsData([data[0]]);
      });
  }

  function loadSkills() {
    setShowSkills(true);
    fetch("https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skills")
      .then(response => response.json())
      .then(data => {
        setSkillsData(data);
      });
  }

  const handleOnclick = (event: any) => {
    event.preventDefault();

    //validação dos dados
    if (skillName.trim().length <= 0) {
      return;
    }

    if (developers.length <= 0) {
      return;
    }

    if (technologies.length <= 0) {
      return;
    }

    if (roles.length <= 0) {
      return;
    }

    loadSkill();
  };

  const skillChangeHandle = (event: any) => {
    setSkillName(event.target.value.trim());
  };

  const developersChangeHandle = (event: any) => {
    setDevelopers(event.target.value.trim());
  };

  const technologiesChangeHandle = (event: any) => {
    setTechnologies(event.target.value.trim());
  };

  const rolesChangeHandle = (event: any) => {
    setRoles(event.target.value.trim());
  };

  const disableButtonHandle = () => {
    if (
      skillName.length <= 0 ||
      developers.length <= 0 ||
      technologies.length <= 0 ||
      roles.length <= 0
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Developers App</h1>
      </header>
      <label>Type the skill you would like to search</label>
      <form onSubmit={handleOnclick}>
        <label htmlFor="input1">Skill Name</label>
        <input
          id="skillName"
          className="input1"
          type="text"
          value={skillName}
          onChange={skillChangeHandle}
          required
        ></input>
        <label>Developers</label>
        <input
          id="developer"
          className="input1"
          value={developers}
          onChange={developersChangeHandle}
          required
        ></input>
        <label>Tecnologies</label>
        <input
          id="technologies"
          className="input1"
          value={technologies}
          onChange={technologiesChangeHandle}
          required
        ></input>
        <label>Roles</label>
        <input
          id="roles"
          className="input1"
          value={roles}
          onChange={rolesChangeHandle}
          required
        ></input>
        <button
          id="submitButton"
          className="button1"
          type="submit"
          disabled={!disableButtonHandle()}
        >
          Search
        </button>
        <button
          id="load-skills-button"
          className="button1"
          type="button"
          onClick={() => loadSkills()}
        >
          All Skills
        </button>
      </form>

      {showSkills && <div id="skillList">{showSkills ? listSkills : ""}</div>}
    </div>
  );
};

export default App;
