import React, { useState } from "react";
import "./style.css";

const NAV = [
  "About",
  "Skills",
  "Experience",
  "Education",
  "Projects",
  "Contact",
];

const EMAIL = "jotibapatil457@gmail.com";
const LINKEDIN = "https://linkedin.com/in/jotiba-patil-5896562b3";
const GITHUB = "https://github.com/Jotibap";

const SKILLS = [
  ["Languages", ["Java", "JavaScript", "SQL"]],
  ["Frameworks", ["Spring Boot", "React js"]],
  ["Web", ["HTML5", "CSS3", "JavaScript", "API integration"]],
  ["Databases", ["PostgreSQL", "MySQL"]],
  ["Core concepts", ["REST APIs", "API Testing", "OOP", "Debugging"]],
  [
    "Tools",
    [
      "IntelliJ IDEA",
      "VS Code",
      "Maven",
      "DBeaver",
      "Postman",
      "Git",
      "GitHub",
    ],
  ],
];

const EXP = [
  {
    when: "Dec 2025 – Jun 2026",
    role: "Software Developer Intern",
    org: "TrioEdge Software Solutions Pvt Ltd, Bengaluru",
    points: [
      "Developed and supported backend modules for an E-Learning Management System using Java, Spring Boot, Hibernate and PostgreSQL.",
      "Investigated, debugged and resolved backend issues by analysing logs, API responses and database queries.",
      "Designed, tested and troubleshot REST APIs with Spring Boot, validating responses through Postman.",
      "Worked with developers and stakeholders to reproduce reported issues, find root causes and deliver timely fixes.",
      "Maintained Controller–Service–Repository architecture and optimised SQL queries to improve reliability.",
    ],
  },
];

const EDU = [
  [
    "2023 – 2025",
    "Master of Computer Applications (MCA)",
    "Jain (Deemed-to-be) University, Bengaluru",
    "CGPA: 7.86",
  ],
];

const PROJECTS = [
  [
    "E-Visa Application",
    [
      "Java",
      "Spring Boot",
      "Hibernate",
      "PostgreSQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    [
      "Spring Boot backend using MVC with Controller, Service and Repository layers.",
      "PostgreSQL schemas and optimised SQL queries for faster data retrieval.",
      "Rule-based visa eligibility validation in Core Java to automate application decisions.",
      "Responsive frontend pages integrated with backend REST APIs.",
      "Debugged API issues and validated business logic.",
    ],
  ],
  [
    "Student Management System",
    ["Java", "Spring Boot", "REST APIs", "Validation", "PostgreSQL", "Postman"],
    [
      "Developed a backend application to manage student records using Java and Spring Boot.",
      "Designed REST APIs to create, retrieve, update and delete student records.",
      "Implemented request validation to ensure student data meets the required input rules.",
      "Integrated PostgreSQL for persistent data storage and tested REST API endpoints using Postman.",
    ],
  ],
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="wrap nav">
        <a className="logo" href="#top">
          Jotiba Patil
        </a>

        <button
          className="burger"
          aria-expanded={open}
          aria-controls="menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <ul id="menu" className={"links" + (open ? " open" : "")}>
          {NAV.map((n) => (
            <li key={n}>
              <a href={"#" + n.toLowerCase()} onClick={() => setOpen(false)}>
                {n}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="dark hero">
      <div className="wrap">
        <p className="role">
          Java Full Stack Developer · MCA graduate · Bengaluru
        </p>

        <h1 className="name-one-line">
          Jotiba <span className="o">Patil</span>
        </h1>

        <p className="lead">
          I build Spring Boot backends, REST APIs and PostgreSQL databases, and
          connect them to clean, responsive web pages.
        </p>

        <div className="btns">
          <a className="btn fill" href="#projects">
            View my projects
          </a>

          <a className="btn line" href="#contact">
            Get in touch
          </a>
        </div>

        <div className="code" aria-hidden="true">
          <i>// the short version</i>
          <br />
          <b>Developer</b> me = <b>new</b> Developer(
          <br />
          &nbsp;&nbsp;"Jotiba Patil", "Java + Spring Boot");
          <br />
          me.build();
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="wrap">
        <h2>About me</h2>

        <div className="about">
          <div>
            <p>
              I'm an MCA graduate with hands-on experience in Java, Spring Boot,
              Hibernate and PostgreSQL. I enjoy backend development, REST API
              testing, debugging and technical troubleshooting.
            </p>

            <p>
              I have a strong analytical mindset: I investigate software issues,
              read logs, and work with development teams to deliver reliable
              solutions. I'm passionate about excellent technical support and
              about learning new technologies.
            </p>
          </div>

          <dl className="facts">
            <div>
              <dt>Experience</dt>
              <dd>Software Developer Intern, TrioEdge</dd>
            </div>

            <div>
              <dt>Main stack</dt>
              <dd>Java, Spring Boot, Rest API, PostgreSQL</dd>
            </div>

            <div>
              <dt>Education</dt>
              <dd>MCA, Jain University (2025)</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="dark">
      <div className="wrap">
        <h2>Technical skills</h2>

        <div className="skillgrid">
          {SKILLS.map(([t, items]) => (
            <div className="skillbox" key={t}>
              <h3>{t}</h3>

              <div className="chips">
                {items.map((i) => (
                  <span className="chip" key={i}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <h2>Experience</h2>

        <ol className="tl">
          {EXP.map((e) => (
            <li key={e.role}>
              <span className="when">{e.when}</span>
              <h3>{e.role}</h3>
              <strong>{e.org}</strong>

              <ul className="pts">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="dark">
      <div className="wrap">
        <h2>Education</h2>

        <div className="skillgrid">
          {EDU.map(([when, deg, school, score]) => (
            <div className="skillbox" key={deg}>
              <span className="when2">{when}</span>
              <h3>{deg}</h3>
              <p style={{ margin: "0 0 6px" }}>{school}</p>
              <span className="chip">{score}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <h2>Projects</h2>

        <div className="projects">
          {PROJECTS.map(([name, tech, pts]) => (
            <article className="card" key={name}>
              <h3>{name}</h3>

              <div className="chips">
                {tech.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <ul className="pts">
                {pts.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                See my GitHub
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [f, setF] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();

    const body = encodeURIComponent(
      f.msg + "\n\n" + f.name + " (" + f.email + ")",
    );

    window.location.href =
      "mailto:" +
      EMAIL +
      "?subject=" +
      encodeURIComponent("Portfolio enquiry from " + f.name) +
      "&body=" +
      body;

    setSent(true);
  };

  return (
    <section id="contact" className="dark">
      <div className="wrap">
        <h2>Contact</h2>

        <div className="contact">
          <div>
            <p className="big">Have a role or project in mind? Let's talk.</p>

            <ul>
              <li>
                Email: <a href={"mailto:" + EMAIL}>{EMAIL}</a>
              </li>

              <li>
                LinkedIn:{" "}
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  jotiba-patil-5896562b3
                </a>
              </li>

              <li>
                GitHub:{" "}
                <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                  github.com/Jotibap
                </a>
              </li>
            </ul>
          </div>

          <form onSubmit={submit}>
            <label>
              Name
              <input
                required
                value={f.name}
                onChange={set("name")}
                autoComplete="name"
              />
            </label>

            <label>
              Email
              <input
                required
                type="email"
                value={f.email}
                onChange={set("email")}
                autoComplete="email"
              />
            </label>

            <label>
              Message
              <textarea required value={f.msg} onChange={set("msg")} />
            </label>

            <button className="btn fill" type="submit">
              Send message
            </button>

            {sent && (
              <p className="note" role="status">
                Your email app should open with the message ready to send.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      <footer>© 2026 Jotiba Patil. All rights reserved.</footer>
    </>
  );
}
