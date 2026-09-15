import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, ChevronRight, Github, Linkedin, Mail, Terminal } from "lucide-react";
import "./styles.css";

const experience = [
  {
    years: "2022 — NOW",
    role: "Cloud Infrastructure Engineer",
    org: "TCS / Water Utility Sector",
    detail: "Hybrid Windows Server and Azure administration, security, monitoring, incident response, infrastructure upgrades and automation."
  },
  {
    years: "2019 — 2022",
    role: "Cloud Engineer",
    org: "TCS / Energy Sector",
    detail: "Azure infrastructure, virtual machines, storage, virtual networks, Azure AD, RBAC, monitoring and resource optimisation."
  },
  {
    years: "2017 — 2019",
    role: "Virtualization Engineer",
    org: "TCS / Energy Sector",
    detail: "VMware ESXi, vCenter and Hyper-V administration, provisioning, migration, performance tuning and upgrades."
  },
  {
    years: "2015 — 2017",
    role: "Windows Engineer",
    org: "TCS / Energy Sector",
    detail: "Windows Server administration, patch management, troubleshooting, maintenance and infrastructure migration support."
  }
];

const stack = [
  ["WINDOWS", "Server • AD • GPO"],
  ["AZURE", "VM • Network • RBAC"],
  ["VMWARE", "ESXi • vCenter"],
  ["HYPER-V", "Clusters • Migration"],
  ["POWERSHELL", "Automation • Operations"],
  ["SECURITY", "Monitoring • Response"]
];

const certs = [
  "Microsoft Certified: Azure Administrator (AZ-104)",
  "Microsoft Certified: Azure Fundamentals (AZ-900)",
  "MCSA: Installation, Storage, and Compute — Windows Server 2016",
  "VMware Certified Professional — Data Center Virtualization 2020",
  "ITIL 4 Foundation"
];

const trainings = [
  "AI and Data Analytics — PL-400: Microsoft Power Platform Developer",
  "Digital — PL-300: Microsoft Power BI Data Analyst"
];

function App() {
  const [active, setActive] = useState("HOME");
  const [online, setOnline] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["HOME", "PROFILE", "EXPERIENCE", "STACK", "CERTIFICATIONS", "TRAININGS", "CONTACT"];
    const onScroll = () => {
      const y = window.scrollY + 180;
      let current = "HOME";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <div className="noise" />
      <header className="nav">
        <button className="brand" onClick={() => go("HOME")}>SG<span>//</span>IT ENGINEER</button>
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
        >
          <span/><span/><span/>
        </button>
        <nav id="primary-nav" className={menuOpen ? "open" : ""}>
          {["PROFILE", "EXPERIENCE", "STACK", "CERTIFICATIONS", "TRAININGS", "CONTACT"].map((item) => (
            <button
              className={active === item ? "active" : ""}
              aria-current={active === item ? "true" : undefined}
              onClick={() => go(item)}
              key={item}
            >
              {item}
            </button>
          ))}
        </nav>
        <a className="nav-link" href="https://github.com/Susovan-G" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={14}/></a>
      </header>

      <main>
        <section id="HOME" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="dot" /> SYSTEM ONLINE / MELBOURNE, AU</div>
            <p className="mono label">CLOUD & INFRASTRUCTURE ENGINEER</p>
            <h1>SUSOVAN<br/><span>GHARA</span></h1>
            <p className="hero-sub">
              Enterprise infrastructure engineer focused on reliable, secure and well-managed hybrid environments.
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={() => go("EXPERIENCE")}>VIEW EXPERIENCE <ChevronRight size={17}/></button>
              <button className="secondary" onClick={() => go("CONTACT")}>CONTACT</button>
            </div>
          </div>

          <aside className="status-panel">
            <div className="panel-top"><span>SYSTEM STATUS</span><span className="mono">v1.0.0</span></div>
            {[
              ["WINDOWS", "ONLINE"],
              ["AZURE", "ONLINE"],
              ["VMWARE", "ONLINE"],
              ["ACTIVE DIR", "ONLINE"],
              ["POWERSHELL", "READY"]
            ].map(([name, state]) => (
              <div className="status-row" key={name}>
                <span className="mono">{name}</span><span><i className="dot"/> {state}</span>
              </div>
            ))}
            <div className="panel-bottom">
              <span>EXPERIENCE</span><strong>11+ YRS</strong>
            </div>
          </aside>
          <div className="hero-grid-tag mono">SYS.01 / CORE</div>
        </section>

        <section id="PROFILE" className="section split">
          <div className="section-index mono">01 / PROFILE</div>
          <div className="section-content">
            <p className="kicker">ENGINEER // OPERATIONS // INFRASTRUCTURE</p>
            <h2>Building the systems<br/>behind the systems.</h2>
            <p className="body">
              Cloud & Infrastructure Engineer with 11 year's experience administering Windows Server environments,
              Active Directory and Microsoft Azure across enterprise IT teams. Skilled in identity and access management,
              security monitoring and incident response, and PowerShell-based automation.
            </p>
            <div className="metrics">
              <div><strong>11+</strong><span>YEARS EXPERIENCE</span></div>
              <div><strong>HYBRID</strong><span>INFRASTRUCTURE</span></div>
              <div><strong>ENTERPRISE</strong><span>OPERATIONS</span></div>
            </div>
          </div>
        </section>

        <section id="EXPERIENCE" className="section">
          <div className="section-index mono">02 / EXPERIENCE</div>
          <div className="timeline">
            {experience.map((item, i) => (
              <article className="timeline-item" key={item.years}>
                <div className="year mono">{item.years}</div>
                <div className="timeline-main">
                  <div className="role-line"><span className="num mono">0{i + 1}</span><h3>{item.role}</h3></div>
                  <p className="org">{item.org}</p>
                  <p className="body">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="STACK" className="section">
          <div className="section-index mono">03 / TECHNOLOGY STACK</div>
          <div className="stack-grid">
            {stack.map(([title, detail], i) => (
              <div className="stack-card" key={title}>
                <span className="card-num mono">0{i + 1}</span>
                <Terminal size={20}/>
                <h3>{title}</h3>
                <p>{detail}</p>
                <span className="card-line"/>
              </div>
            ))}
          </div>
        </section>

        <section id="CERTIFICATIONS" className="section split">
          <div className="section-index mono">04 / CREDENTIALS</div>
          <div className="section-content">
            <p className="kicker">CERTIFICATIONS</p>
            <div className="cert-list">
              {certs.map((c, i) => (
                <div className="cert" key={c}><span className="mono">0{i + 1}</span><span>{c}</span><span className="verified">✓ VERIFIED</span></div>
              ))}
            </div>
          </div>
        </section>

                <section id="TRAININGS" className="section split">
          <div className="section-index mono">05 / TRAININGS</div>
          <div className="section-content">
            <p className="kicker">PROFESSIONAL DEVELOPMENT</p>
            <div className="cert-list">
              {trainings.map((c, i) => (
                <div className="cert" key={c}><span className="mono">0{i + 1}</span><span>{c}</span><span className="verified">✓ COMPLETED</span></div>
              ))}
            </div>
          </div>
        </section>

        <section id="CONTACT" className="section contact">
          <div className="section-index mono">05 / CONTACT</div>
          <div>
            <p className="kicker">LET'S CONNECT</p>
            <h2>Ready for the next<br/><span>infrastructure challenge?</span></h2>
            <div className="contact-links">
              <a href="mailto:susovan.ghara@icloud.com"><Mail size={17}/> EMAIL</a>
              <a href="https://www.linkedin.com/in/susovanghara/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LINKEDIN</a>
              <a href="https://github.com/Susovan-G" target="_blank" rel="noreferrer"><Github size={17}/> GITHUB</a>
              <a href="/resume.pdf" download><ArrowUpRight size={17}/> RESUME</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>SG // INFRASTRUCTURE</span>
        <span className="mono">© {new Date().getFullYear()} / MELBOURNE, AU</span>
        <button onClick={() => setOnline(!online)}><i className={online ? "dot" : "dot off"}/> {online ? "AVAILABLE" : "OFFLINE"}</button>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
