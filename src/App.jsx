import { useNavigate } from "react-router-dom";
import "./App.css";

const services = [
  {
    title: "MVP Development",
    description: "Fast, scalable MVPs tailored to your startup goals."
  },
  {
    title: "SaaS Product Design",
    description: "Beautiful, intuitive UIs built for conversion and retention."
  },
  {
    title: "SEO & Marketing",
    description: "We help your product get discovered and drive traffic."
  }
];

const skills = ["React", "Next.js", "TailwindCSS", "Node.js", "Firebase", "Supabase", "SEO","Mongo DB" ,"Flutter","React Native","Docker","AWS", "Figma"];

const works = [
  {
    title: "A Jewel Design Catalog for a Boutique Brand",
    description: "Designed and developed a sleek, responsive product catalog for a local jewelry brand. Focused on elegant UI, smooth browsing experience, and mobile-first performance. The project showcases a clean layout with subtle luxury-inspired design choices tailored for a high-end audience.",
    image: "jewel.jpeg"
  },
  {
    title: "A Front-End Dashboard and Feed System for a B2B SaaS",
    description: "Using React.JS and TailwindCSS We Designed and developed an dashboard for a B2B SaaS.",
    image: "Know.png"
  }
];

function FreelanceAgencyLanding() {
  const navigate = useNavigate();

  const handleBuildClick = () => {
    navigate("/build");
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">EPIDQ </div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main className="landing-container">
        <section className="hero-section">
          <h1>We Build MVPs for Startups & SaaS</h1>
          <p>From idea to launch, we design, build, and grow your product.</p>
          <button className="cta-button" onClick={handleBuildClick}>
            🚀 Let's Build Your MVP
          </button>
        </section>

        <section className="services-section" id="services">
          <h2>Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <h2>Skills</h2>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-chip">{skill}</span>
            ))}
          </div>
        </section>

        <section className="works-section" id="works">
          <h2>Works</h2>
          <div className="works-grid">
            {works.map((work, index) => (
              <div key={index} className="work-card">
                <img src={work.image} alt={work.title} />
                <div className="work-content">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <h2>About Me</h2>
          <p>
            I'm a freelance developer who partners with early-stage startups to create lean, powerful MVPs and help them grow.I Provide Software Solutions for Startups and Small Businesses.
            I blend technical skills with a marketing-first mindset to build products that don't just work—but get noticed.
          </p>
        </section>

        <section className="contact-section" id="contact">
          <h2>Let’s Work Together</h2>
          <p>Have a project or idea in mind? Let’s connect and bring it to life.</p>
          <button className="contact-button">
            ✉️ Epidqq@gmail.com
          </button>
        </section>
      </main>
    </>
  );
}

export default FreelanceAgencyLanding;
