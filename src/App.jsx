import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';

export default function App() {
  const [page, setPage] = React.useState('home');

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar current={page} onNavigate={setPage} />

      {page === 'home' && (
        <>
          <Hero onSeeProjects={() => setPage('projects')} onAbout={() => setPage('about')} />
          <div className="max-w-6xl mx-auto px-4 md:px-6 pb-12 md:pb-16">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-2">Design approach</h3>
              <p className="text-slate-600 max-w-3xl">
                I believe in clarity, hierarchy, and gentle motion. Every artifact should be purposeful and every
                interaction should reduce cognitive load.
              </p>
            </div>
          </div>
        </>
      )}

      {page === 'projects' && <Projects />}
      {page === 'about' && <About />}

      <footer className="py-8 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Ayan — UI/UX Designer</span>
          <div className="flex items-center gap-3">
            <a className="hover:text-slate-700" href="#" onClick={() => setPage('projects')}>Projects</a>
            <span className="text-slate-300">•</span>
            <a className="hover:text-slate-700" href="#" onClick={() => setPage('about')}>About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
