const skills = ["Python", "HTML/CSS", "JavaScript", "React", "SQL"];

const Skills = () => {
  return (
    <section className="skills section">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-box">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
