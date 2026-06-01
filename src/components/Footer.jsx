import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-slate-400 md:flex-row">
        <p>
          © 2026 Beau Dougan. Built with React and Tailwind CSS.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/beaudougan1"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-400"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/beau-dougan-072611388"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="mailto:beau.dougan@gmail.com"
            className="transition hover:text-blue-400"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;