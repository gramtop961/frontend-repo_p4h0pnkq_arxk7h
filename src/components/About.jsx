import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100"
          >
            <img
              src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">About</h2>
              <p className="text-slate-600 mt-2 max-w-prose">
                I design interfaces that get out of the way. My approach blends systems thinking with hands-on prototyping,
                ensuring ideas are tested early and often.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium text-slate-900">My story</h3>
              <p className="text-slate-600 leading-relaxed">
                With a background in psychology and human-computer interaction, I’ve spent the last 6+ years designing
                products for startups and scale-ups. I enjoy partnering closely with engineers and product to ship work
                that balances craft and outcomes.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium text-slate-900">Journey</h3>
              <p className="text-slate-600 leading-relaxed">
                I’ve led end-to-end projects across fintech, healthcare, and B2B SaaS, from discovery to delivery. My
                toolkit includes user research, wireframing, prototyping, and micro-interactions.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium text-slate-900">Hobbies</h3>
              <p className="text-slate-600 leading-relaxed">
                Outside of work, you’ll find me exploring coffee shops, sketching motion studies, and hiking. I’m always
                learning and tinkering with new tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
