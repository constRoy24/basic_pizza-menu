import "./assets/cardExercise.css";

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
  return (
    <>
      <div className="skill-list">
        <Skill skills="HTML" color="red" />
        <Skill skills="REACT JS" color="blue" />
        <Skill skills="TYPESCRIPT" color="green" />
        <Skill skills="NODE JS" color="yellow" />
        <Skill skills="TAILWIND CSS" color="cyan" />
        <Skill skills="SASS" color="orange" />
        <Skill skills="MONGODB" color="pink" />
      </div>
    </>
  );
};

const Skill = (props) => {
  const { skills, color } = props;
  return (
    <>
      <div className="skill" style={{ backgroundColor: color }}>
        <span>{skills}</span>
      </div>
    </>
  );
};

export default CardExercise;
