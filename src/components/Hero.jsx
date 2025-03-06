const Hero = () => {
  return (
    <section className="hero"style={{ backgroundImage: `url("/hero-bg.jpg")` }}>
      <img src="profile.jpg " alt="Profile" className="profile-pic" />
      <h2>Hi, I'm Mariyan R</h2>
      <p>Aspiring Software Engineer | Web Developer</p>
      <a href="/resume.pdf" download="Mariyan_R_Resume.pdf" className="resume-btn">
        Download Resume
      </a>
    </section>
  );
};

export default Hero;
