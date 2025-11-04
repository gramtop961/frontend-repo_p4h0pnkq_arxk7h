import React from 'react';
import { Menu, X } from 'lucide-react';

const NavItem = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`text-sm md:text-base px-3 py-2 rounded-full transition-colors ${
      active ? 'bg-black text-white' : 'text-slate-600 hover:bg-slate-100'
    }`}
  >
    {label}
  </button>
);

export default function Navbar({ current, onNavigate }) {
  const [open, setOpen] = React.useState(false);

  const handleNav = (page) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="h-16 flex items-center justify-between">
          <div
            className="font-semibold tracking-tight text-lg select-none cursor-pointer"
            onClick={() => handleNav('home')}
          >
            Ayan UI/UX
          </div>

          <nav className="hidden md:flex items-center gap-2">
            <NavItem label="Home" active={current === 'home'} onClick={() => handleNav('home')} />
            <NavItem label="Projects" active={current === 'projects'} onClick={() => handleNav('projects')} />
            <NavItem label="About" active={current === 'about'} onClick={() => handleNav('about')} />
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            <NavItem label="Home" active={current === 'home'} onClick={() => handleNav('home')} />
            <NavItem label="Projects" active={current === 'projects'} onClick={() => handleNav('projects')} />
            <NavItem label="About" active={current === 'about'} onClick={() => handleNav('about')} />
          </div>
        )}
      </div>
    </header>
  );
}
