import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onSeeProjects, onAbout }) {
  return (
    <section className="relative h-[72vh] md:h-[82vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 h-full flex items-center">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 backdrop-blur rounded-2xl p-6 md:p-8 shadow-[0_4px_40px_rgba(0,0,0,0.06)]"
          >
            <div className="inline-flex items-center gap-2 text-xs text-slate-600 mb-3">
              <Rocket size={14} />
              <span>Product-minded UI/UX Designer</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-slate-900">
              Designing simple, elegant interfaces that feel effortless
            </h1>
            <p className="mt-3 md:mt-4 text-slate-600 max-w-xl">
              I craft clean, minimal experiences with thoughtful motion and a focus on measurable impact.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={onSeeProjects}
                className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm hover:opacity-90 transition"
              >
                View Projects
                <ArrowRight size={16} />
              </button>
              <button
                onClick={onAbout}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm border border-slate-200 hover:bg-slate-50"
              >
                About Me
              </button>
            </div>
          </motion.div>

          {/* Highlight card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 md:mt-6 grid sm:grid-cols-2 gap-3"
          >
            <div className="bg-white/70 backdrop-blur rounded-xl p-4 border border-slate-100">
              <p className="text-sm text-slate-700">
                Selected work: Fintech Dashboard redesign increased task success by 32% and NPS by 18.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur rounded-xl p-4 border border-slate-100">
              <p className="text-sm text-slate-700">
                Currently exploring motion patterns and micro-interactions for productivity tools.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
