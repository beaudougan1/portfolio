import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-24 h-96 w-[70vw] rounded-full bg-blue-500/10 blur-3xl"
          initial={{ x: "100vw" }}
          animate={{ x: "-80vw" }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute top-48 h-80 w-[60vw] rounded-full bg-cyan-500/10 blur-3xl"
          initial={{ x: "120vw" }}
          animate={{ x: "-90vw" }}
          transition={{
            duration: 34,
            repeat: Infinity,
            ease: "linear",
            delay: 4,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl items-center px-6 py-20">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-4 text-blue-400">
            Software Engineer • AI • Embedded Systems • Full-Stack Development
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Hi, I'm Beau Dougan.
          </h1>

          <p className="max-w-3xl text-xl leading-8 text-slate-300">
            Cum Laude Software Engineering graduate from California State
            University San Marcos with experience building AI-powered
            applications, machine learning systems, robotics platforms,
            and full-stack software solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              View Projects
            </a>

            <a
              href="https://github.com/beaudougan1"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 transition hover:border-blue-400"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/beau-dougan-072611388"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 transition hover:border-blue-400"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="/Beau-Dougan-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 transition hover:border-blue-400"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["B.S.", "Software Engineering"],
              ["AI • Full-Stack • Embedded Systems", "Projects & Applications"],
              ["Full-Stack", "React, APIs, PostgreSQL"],
            ].map(([title, subtitle]) => (
              <motion.div
                key={title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.15 }}
                className="rounded-xl border border-slate-800 bg-slate-900/90 p-5"
              >
                <p className="text-2xl font-bold text-white">
                  {title}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  {subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;