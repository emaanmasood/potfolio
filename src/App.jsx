import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";

function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);

    emailjs
      .sendForm("service_hbd934p", "template_mzqjhjt", e.target, {
        publicKey: "zPROQuXNnLzmZ9CKc",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully");

          e.target.reset();
          setSending(false);
          setShowContact(false);
        },
        (error) => {
          console.log("FAILED...");
          console.log("Status:", error.status);
          console.log("Text:", error.text);
          setSending(false);
        },
      );
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "React",
    "REST APIs",
    "Git & GitHub",
    "Responsive Design",
  ];

  const projects = [
    {
      number: "01",
      title: "Mini Projects",
      category: "Frontend Development",
      description:
        "A collection of modern mini web applications including Calculator, Weather App, Todo List, Age Calculator and Time Watch.",
      tech: ["HTML", "CSS", "Tailwind", "JavaScript"],
    },

    {
      number: "02",
      title: "Movie Searcher",
      category: "React Application",
      description:
        "A modern movie discovery application with search, popular movies and favorite movie functionality.",
      tech: ["React", "API", "Tailwind"],
    },

    {
      number: "03",
      title: "Weather App",
      category: "Web Application",
      description:
        "A responsive weather application that displays useful weather information using an API.",
      tech: ["JavaScript", "API", "Responsive UI"],
    },

    {
      number: "04",
      title: "Todo List",
      category: "Productivity",
      description:
        "A clean and simple productivity application for creating and managing daily tasks.",
      tech: ["JavaScript", "CSS", "Local Storage"],
    },

    {
      number: "05",
      title: "Time watch",
      description:
        "A simple and responsive digital watch that displays the current time with a clean modern interface",
      tech: ["JavaScript", "CSS", "HTML"],
    },
    {
      number: "06",
      title: "Age Calculator",
      description:
        "A simple age calculator that calculates a user's exact age based on their date of birth.",
      tech: ["JavaScript", "CSS", "HTML"],
    },
    {
      number: "07",
      title: " Calculator",
      description:
        "A clean and responsive calculator for performing basic mathematical calculations.",
      tech: ["JavaScript", "CSS", "HTML"],
    },

  ];

  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Modern responsive websites and web applications built with clean and maintainable code.",
    },

    {
      number: "02",
      title: "Landing Pages",
      description:
        "Beautiful landing pages with strong visual hierarchy, responsive design and modern interactions.",
    },

    {
      number: "03",
      title: "Frontend Development",
      description:
        "Turning designs and ideas into polished, responsive and user-friendly interfaces.",
    },

  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#080808] text-white">


      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">


          <img className="h-14 w-auto" src="logo.png" alt="logo" />



          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm text-gray-400 transition hover:text-lime-300"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm text-gray-400 transition hover:text-lime-300"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-sm text-gray-400 transition hover:text-lime-300"
            >
              Projects
            </a>

            <a
              href="#services"
              className="text-sm text-gray-400 transition hover:text-lime-300"
            >
              Services
            </a>

            <a
              href="#contact"
              className="text-sm text-gray-400 transition hover:text-lime-300"
            >
              Contact
            </a>
          </nav>


          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm transition duration-300 hover:border-lime-300 hover:text-lime-300 md:flex"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>



          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>


        {menuOpen && (
          <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
            <div className="flex flex-col gap-6">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300"
              >
                Projects
              </a>

              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300"
              >
                Services
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>


      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 md:px-10"
      >


        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />



        <div className="absolute -right-40 top-20 h-[550px] w-[550px] rounded-full bg-lime-300/10 blur-[140px]" />

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-[120px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-20 lg:grid-cols-2">

          <div>
            <p className="mb-7 flex items-center gap-3 text-[10px] font-medium tracking-[0.3em] text-gray-500">
              <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_#d9ff55]" />
              AVAILABLE FOR SELECTED PROJECT
            </p>

            <h1 className="text-[17vw] font-bold leading-[0.78] tracking-[-0.08em] sm:text-8xl md:text-9xl lg:text-[8.5rem]">
              <span className="block">Digital</span>

              <span className="ml-[5vw] block md:ml-20">experiences</span>

              <span className="block">
                with <span className="text-lime-300">purpose.</span>
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
              I'm Emaan, a Full-Stack Web Developer focused on creating modern,
              responsive and user-friendly digital experiences.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#projects"
                className="group flex items-center gap-3 bg-lime-300 px-6 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-105"
              >
                Explore Work
                <ArrowDown
                  size={17}
                  className="transition group-hover:translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="group flex items-center gap-2 border-b border-gray-600 pb-2 text-sm text-gray-300 transition hover:border-lime-300 hover:text-lime-300"
              >
                Start a Project
                <ArrowUpRight
                  size={17}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>


        <div className="relative mx-auto hidden h-[650px] w-full max-w-[520px] lg:block">


          <div
            className="
      absolute
      left-1/2
      top-1/2
      z-0
      h-[420px]
      w-[420px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-lime-300/10
      blur-[100px]
    "
          />


          <div
            className="
      absolute
      left-1/2
      top-1/2
      z-0
      h-[500px]
      w-[500px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      border
      border-lime-300/60
      shadow-[0_0_25px_rgba(217,255,85,0.35)]
    "
          />


          <div
            className="
      absolute
      left-1/2
      top-1/2
      z-0
      h-[570px]
      w-[570px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      border
      border-lime-300/25
      shadow-[0_0_35px_rgba(217,255,85,0.18)]
    "
          />


          <div
            className="
      absolute
      right-[8%]
      top-[15%]
      z-10
      h-3
      w-3
      rounded-full
      bg-lime-300
      shadow-[0_0_25px_8px_rgba(217,255,85,0.35)]
    "
          />



          <div
            className="flip-card absolute left-1/2 top-1/2 z-20 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2"
            onMouseEnter={() => setShowIntro(true)}
            onMouseLeave={() => setShowIntro(false)}
            onClick={() => setShowIntro((prev) => !prev)}
          >
            <div className={`flip-card-inner ${showIntro ? "is-flipped" : ""}`}>

              <div className="flip-card-front">
                <img
                  src="emaan.png" alt="Emaan"

                  className="
                           absolute
                      bottom-[-70px]
                     left-1/2
                                  w-[480px]
                       max-w-none
                   -translate-x-1/2
                  object-contain
                   object-bottom
                    drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)]
        "
                />
              </div>


              <div className="flip-card-back">
                <div className="flex h-full w-full flex-col items-center justify-center px-14 text-center">
                  <p className="mb-3 text-[10px] tracking-[0.35em] text-lime-300">
                    HELLO, I'M
                  </p>

                  <h2 className="animate-[slideUp_0.7s_ease-out] text-4xl font-bold tracking-[-0.05em] text-white">
                    Emaan Masood
                  </h2>

                  <p className="mt-5 max-w-[330px] text-sm leading-6 text-gray-300">
                    I'm a Full-Stack Web Developer who turns ideas into modern,
                    responsive and user-friendly digital experiences.
                  </p>

                  <p className="mt-3 max-w-[330px] text-xs leading-6 text-gray-500">
                    I build projects with clean code, handle errors, debug
                    problems and make sure websites work smoothly across
                    different screen sizes.
                  </p>

                  <div className="mt-6 flex gap-3 text-[9px] font-semibold tracking-[0.2em] text-lime-300">
                    <span>BUILD</span>
                    <span>•</span>
                    <span>DEBUG</span>
                    <span>•</span>
                    <span>IMPROVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="absolute bottom-8 left-6 flex items-center gap-3 text-[9px] tracking-[0.25em] text-gray-600 md:left-10">
          SCROLL TO EXPLORE
          <ArrowDown size={13} />
        </div>
      </section>


      <section
        id="about"
        className="border-t border-white/10 px-6 py-32 md:px-10 lg:py-40"
      >
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[220px_1fr]">
          <p className="text-[10px] tracking-[0.25em] text-gray-600">
            01 / ABOUT
          </p>

          <div>
            <h2 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-8xl">
              I turn ideas into{" "}
              <span className="text-lime-300">interfaces</span> people remember.
            </h2>

            <p className="mt-10 max-w-2xl text-sm leading-8 text-gray-400 md:text-base">
              I care about the details that make a website feel premium —
              thoughtful spacing, clear typography, responsive layouts, useful
              interactions and a visual identity that matches the brand.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 border-b border-gray-600 pb-2 text-sm transition hover:border-lime-300 hover:text-lime-300"
            >
              Let's work together
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>


      <section
        id="skills"
        className="border-t border-white/10 px-6 py-32 md:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] tracking-[0.25em] text-gray-600">
            02 / SKILLS
          </p>

          <div className="mt-16 grid gap-20 lg:grid-cols-2">
            <div>
              <p className="text-[10px] tracking-[0.25em] text-gray-600">
                TECHNOLOGIES
              </p>

              <h2 className="mt-6 text-6xl font-medium leading-none tracking-[-0.06em] md:text-8xl">
                Built for the <span className="text-lime-300">web.</span>
              </h2>
            </div>

            <div>
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="group flex items-center border-t border-white/10 py-5 transition duration-300 hover:pl-4"
                >
                  <span className="w-14 text-[10px] text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-lg font-medium transition group-hover:text-lime-300 md:text-xl">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section
        id="projects"
        className="border-t border-white/10 px-6 py-32 md:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <p className="text-[10px] tracking-[0.25em] text-gray-600">
              03 / SELECTED WORK
            </p>

            <p className="text-sm text-gray-500">
              Small builds. Big attention to detail.
            </p>
          </div>

          <div className="mt-16">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group grid gap-6 border-t border-white/10 py-10 transition duration-500 `hover:bg-lime-300/0.025` md:grid-cols-[70px_1fr_70px]"
              >
                <span className="text-[11px] text-gray-600">
                  {project.number}
                </span>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-gray-600">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-4xl font-medium  transition group-hover:text-lime-300 md:text-6xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="border border-white/10 px-3 py-2 text-[10px] text-gray-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={
                    project.title === "Todo List"
                      ? "https://emaanmasood.github.io/todolist/"
                      : project.title === "Movie Searcher"
                        ? "https://emaanmasood.github.io/moviesearcher/"
                        : project.title === "Weather App"
                          ? "https://weather-ten-tawny.vercel.app/"
                          : project.title === "Time watch"
                            ? "https://emaanmasood.github.io/timewatch/"
                            : project.title === "Age Calculator"
                              ? "https://emaanmasood.github.io/age.calculator/"
                              : project.title === " Calculator"
                                ? "https://emaanmasood.github.io/calculator/"
                                : "#contact"
                  }

                  target={
                    ["Movie Searcher", "Todo List", "Weather App", "Time Watch", "Age Calculator", "Calculator"].includes(
                      project.title
                    )
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    ["Movie Searcher", "Todo List", "Weather App", "Time Watch", "Age Calculator", "Calculator"].includes(
                      project.title
                    )
                      ? "_blank"
                      : undefined
                  }
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition duration-300 group-hover:rotate-12 group-hover:border-lime-300 group-hover:bg-lime-300 group-hover:text-black"
                >
                  <ArrowUpRight size={20} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-t border-white/10 px-6 py-32 md:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] tracking-[0.25em] text-gray-600">
            04 / SERVICES
          </p>

          <div className="mt-16 grid md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="group `min-h-80` border-t border-white/10 p-8 md:border-r"
              >
                <span className="text-[10px] text-gray-600">
                  {service.number}
                </span>

                <h3 className="mt-32 text-3xl font-medium tracking-[-0.04em] transition group-hover:text-lime-300">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-gray-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section
        id="contact"
        className="flex min-h-[80vh] items-center justify-center border-t border-white/10 px-6 py-32 text-center"
      >
        <div>
          <p className="flex items-center justify-center gap-3 text-[10px] tracking-[0.25em] text-gray-600">
            <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_15px_#d9ff55]" />
            HAVE A PROJECT IN MIND?
          </p>

          <h2 className="mt-10 text-6xl font-medium leading-[0.88] tracking-[-0.07em] md:text-8xl lg:text-[8rem]">
            Let's make something
            <br />
            <span className="text-lime-300">worth scrolling for.</span>
          </h2>

          <button
            onClick={() => setShowContact(true)}
            className="mx-auto mt-12 flex w-fit items-center gap-3 border-b border-gray-600 pb-2 text-lg transition hover:border-lime-300 hover:text-lime-300"
          >
            emaanmasood1228@gmail.com
            <ArrowUpRight />
          </button>

          {showContact && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-5 backdrop-blur-md">
              <div className="relative w-full max-w-lg border border-white/10 bg-[#101010] p-7 shadow-2xl">
                {/* Close Button */}

                <button
                  onClick={() => setShowContact(false)}
                  className="absolute right-5 top-5 text-gray-500 transition hover:text-lime-300"
                >
                  ✕
                </button>

                {/* Heading */}

                <p className="text-[10px] tracking-[0.25em] text-lime-300">
                  SEND A MESSAGE
                </p>

                <h3 className="mt-3 text-3xl font-medium tracking-[-0.05em]">
                  Let's talk.
                </h3>
                <form onSubmit={sendEmail} className="mt-8 space-y-5">


                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="w-full border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-lime-300"
                  />


                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="w-full border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-lime-300"
                  />


                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-lime-300"
                  />


                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project..."
                    required
                    className="w-full resize-none border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-lime-300"
                  />


                  <button
                    type="submit"
                    disabled={sending}
                    className="flex w-full items-center justify-center gap-2 bg-lime-300 px-6 py-4 text-sm font-semibold text-black transition hover:bg-lime-200 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {sending ? "Sending..." : "Send Message"}

                    {!sending && <ArrowUpRight size={17} />}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>


      <footer className="flex flex-col justify-between gap-6 border-t border-white/10 px-6 py-8 text-xs text-gray-600 md:flex-row md:px-10">
        <p>© 2026 Emaan. All rights reserved.</p>

        <div className="flex gap-5">
          <a href="#" className="transition hover:text-lime-300">
            GH
          </a>

          <a href="#" className="transition hover:text-lime-300">
            IN
          </a>

          <a
            href="mailto:your@email.com"
            className="transition hover:text-lime-300"
          >
            EMAIL
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
