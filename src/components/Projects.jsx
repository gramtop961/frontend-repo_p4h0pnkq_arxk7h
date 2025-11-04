import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Fintech Dashboard Redesign',
    image: 'https://images.unsplash.com/photo-1716681864259-3d9af91fc0f4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW50ZWNoJTIwRGFzaGJvYXJkJTIwUmVkZXNpZ258ZW58MHwwfHx8MTc2MjIyNjE2NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    thinking:
      'Focused on information hierarchy and progressive disclosure. Introduced modular cards, contextual filters, and a visual grammar that scales across views.',
    prototype: 'https://www.figma.com/proto/',
    tools: ['Figma', 'FigJam', 'Framer', 'Notion'],
    problem:
      'Users struggled to parse balances and actions across accounts, leading to errors and support tickets.',
    benefit:
      'Reduced task time by 32%, increased NPS by 18, and decreased support tickets by 24% within the first quarter.',
  },
  {
    id: 2,
    title: 'Healthcare Appointment Flow',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1640&auto=format&fit=crop',
    thinking:
      'Eliminated friction by consolidating steps and surfacing smart defaults. Applied clear status cues and assisted decision-making.',
    prototype: 'https://www.figma.com/proto/',
    tools: ['Figma', 'Maze', 'Adobe After Effects'],
    problem:
      'Complex multi-step process with ambiguous error states caused high abandonment.',
    benefit:
      'Completion rate improved by 41% and average time to schedule dropped by 54 seconds.',
  },
  {
    id: 3,
    title: 'SaaS Onboarding & Empty States',
    image: 'https://images.unsplash.com/photo-1711728640507-59559aff7556?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWFTJTIwT25ib2FyZGluZyUyMCUyNiUyMEVtcHR5JTIwU3RhdGVzfGVufDB8MHx8fDE3NjIyMjYxNjZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    thinking:
      'Designed an onboarding checklist, contextual tips, and purposeful empty states that teach by doing.',
    prototype: 'https://www.figma.com/proto/',
    tools: ['Figma', 'Framer Motion'],
    problem:
      'Users felt lost on first run with unclear next steps and low activation.',
    benefit:
      'Activation increased by 27% and time-to-value dropped below 2 minutes.',
  },
];

function Modal({ open, onClose, project }) {
  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          className="fixed inset-0 z-30 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="relative z-10 w-[92vw] md:w-[840px] max-h-[86vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
          >
            <button
              className="absolute top-3 right-3 h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/90 border border-slate-200 hover:bg-slate-50"
              onClick={onClose}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-5 md:p-7 space-y-5">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">{project.title}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <h4 className="font-medium text-slate-900">Design thinking</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{project.thinking}</p>
                  <a
                    href={project.prototype}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-black"
                  >
                    View prototype <ExternalLink size={14} />
                  </a>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-slate-900">Tools used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div>
                    <h4 className="mt-4 font-medium text-slate-900">Problem background</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="mt-4 font-medium text-slate-900">Impact</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{project.benefit}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selected, setSelected] = React.useState(null);

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Projects</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">
            A selection of product design work across fintech, healthcare, and SaaS. Clean, minimal, and purposeful.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsData.map((p) => (
            <motion.button
              key={p.id}
              onClick={() => setSelected(p)}
              whileHover={{ y: -3 }}
              className="text-left bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/11] w-full overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600 line-clamp-2 mt-1">{p.thinking}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Modal open={!!selected} project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
