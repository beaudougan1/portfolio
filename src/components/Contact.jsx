import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="rounded-2xl border border-slate-800 bg-slate-900 p-8 md:p-12"
      >
        <p className="mb-3 text-blue-400">
          Contact
        </p>

        <h2 className="text-4xl font-bold">
          Let's Connect
        </h2>

        <p className="mt-4 max-w-2xl text-slate-300">
          I'm interested in software engineering opportunities focused on
          AI applications, machine learning, full-stack development,
          backend systems, and emerging technologies.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:beau.dougan@gmail.com"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
          >
            <Mail size={18} />
            Email Me
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
      </motion.div>
    </section>
  );
}

export default Contact;