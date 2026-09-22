import { useState } from "react";
import { navLinks } from "../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-borderc bg-white/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2 font-poppins text-lg font-bold text-ink">
          <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-gradient-to-br from-purple to-purple-dark text-sm font-extrabold text-white">
            N
          </span>
          Nexio <span className="font-normal text-muted">Digital</span>
        </a>

        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-body transition-colors hover:text-purple">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden items-center gap-1.5 rounded-[10px] bg-purple px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-purple-dark md:inline-flex"
        >
          Quero meu site institucional ↗
        </a>

        <button
          className="flex flex-col gap-1.5 p-1.5 md:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
        >
          <span className="h-0.5 w-6 bg-ink" />
          <span className="h-0.5 w-6 bg-ink" />
          <span className="h-0.5 w-6 bg-ink" />
        </button>
      </nav>

      {open && (
        <div className="border-b border-borderc bg-white px-6 py-5 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="text-sm font-medium text-body">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-5 inline-block rounded-[10px] bg-purple px-5 py-2.5 text-sm font-semibold text-white"
          >
            Quero meu site institucional ↗
          </a>
        </div>
      )}
    </header>
  );
}
