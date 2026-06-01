import { useState } from "react";
import { Download, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    ["Projects", "/#projects"],
    ["Skills", "/#skills"],
    ["Education", "/#education"],
    ["Contact", "/#contact"],
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-sm font-bold text-blue-400 transition group-hover:border-blue-400">
            BD
          </span>

          <span className="text-lg font-semibold tracking-tight text-white transition group-hover:text-blue-400">
            Beau Dougan
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-slate-300 transition hover:text-white">
              {label}
            </a>
          ))}

          <a href="/Beau-Dougan-Resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm transition hover:border-blue-400 hover:text-white">
            <Download size={16} />
            Resume
          </a>
        </div>

        <button className="rounded-lg border border-slate-700 p-2 md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-800 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setIsOpen(false)} className="text-slate-300 transition hover:text-white">
                {label}
              </a>
            ))}

            <a href="/Beau-Dougan-Resume.pdf" target="_blank" rel="noreferrer" className="flex w-fit items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm transition hover:border-blue-400 hover:text-white">
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;