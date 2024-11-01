import "./home.css";

const Home = () => {
  return (
    <section className="intro-section flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="./profile-image.jpeg" className="avatar" alt="Profile" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">Junior Front-End Developer</h1>
        <p className="sub-title">
          I’m Mohamed Abdelrahim, a passionate Junior Software Developer skilled
          in JavaScript, CSS, React.js, and Next.js. I enjoy creating
          responsive, user-friendly web applications and have hands-on
          experience with Playwright for end-to-end testing. I'm always eager to
          learn and improve, bringing dedication and attention to detail.
        </p>
      </div>
    </section>
  );
};

export default Home;
