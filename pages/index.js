import { motion } from 'framer-motion';
import ideas from '../data/ideas.json';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500/30">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Animated Background Glow */}
        <div className="absolute inset-0 z-0 bg-particles opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-600/10 blur-[120px] rounded-full animate-glow-slow" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="z-10 text-center px-4"
        >
          <h2 className="text-gold-500 uppercase tracking-[0.3em] text-xs mb-6 font-semibold">Visionary Intelligence v1.0</h2>
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-4 text-gold-glow">
            BUILDING <span className="italic font-serif text-white">EMPIRES</span>
          </h1>
          <p className="text-gray-400 tracking-widest uppercase text-sm mb-12">From Ideas to Global Influence</p>
          
          {/* Animated CEO Figure Placeholder */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="w-56 h-56 mx-auto mb-12 relative group"
          >
            <div className="absolute inset-0 bg-gold-500/20 blur-2xl rounded-full group-hover:bg-gold-500/40 transition-all duration-700" />
            <div className="relative z-10 w-full h-full border border-white/10 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md">
                <span className="text-6xl">👑</span>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gold-600 hover:bg-gold-500 text-black rounded-full font-bold tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              ENTER COMMAND CENTER
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. IDEAS DASHBOARD */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-3xl font-light text-gold-500">Active Pipelines</h2>
            <p className="text-gray-500 mt-2">Strategic business models in development.</p>
          </div>
          <div className="text-right font-mono text-gold-600">COUNT: {ideas.length}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ideas.map((idea) => (
            <Link href={`/idea/${idea.slug}`} key={idea.slug}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-8 rounded-3xl bg-luxury-charcoal border border-white/5 hover:border-gold-500/50 transition-all duration-500 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                   <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-gold-600 font-bold mb-4 block">{idea.category}</span>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-gold-400 transition-colors">{idea.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{idea.description}</p>
                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                  <span className="text-xs font-mono text-gray-500">{idea.budget}</span>
                  <span className="text-xs font-bold text-green-500 uppercase tracking-tighter">{idea.status}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
