import "./assets/cardExercise.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

const CardExercise = () => {
  return (
    <>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          {/* <div className="skill">
            <div className="skill-list">
              <SkillList skills="HTML" />
              <SkillList skills="REACT JS" />
              <SkillList skills="TYPESCRIPT" />
              <SkillList skills="NODE JS" />
              <SkillList skills="TAILWIND CSS" />
              <SkillList skills="SASS" />
              <SkillList skills="MONGODB" />
            </div>
          </div> */}
          <SkillList />
        </div>
      </div>
    </>
  );
};

const Avatar = () => {
  return (
    <>
      {/* <h1>PICTURE</h1> */}
      <div>
        <img className="avatar" src="pizzas/margherita.jpg" alt="margherita" />
      </div>
    </>
  );
};

const Intro = () => {
  return (
    <>
      <h1>Pizza Margherita</h1>
      <p>Tomato and mozarella</p>
    </>
  );
};

const SkillList = () => {
  const listofSkills = skills;
  return (
    <>
      <div className="skill-list">
        {listofSkills.map((skills) => (
          <Skill
            skills={skills.skill}
            color={skills.color}
            level={skills.level}
          />
        ))}
        {/* <Skill skills={skills} /> */}
      </div>
    </>
  );
};

const Skill = (props) => {
  const { skills, color, level } = props;
  return (
    <>
      <div className="skill" style={{ backgroundColor: color }}>
        <span>{skills}</span>
        <span>
          {level === "beginner" && "B"}
          {level === "advanced" && "A"}
          {level === "intermediate" && "I"}
        </span>
      </div>
    </>
  );
};

export default CardExercise;
