import { motion } from 'framer-motion';
import Link from 'next/link';
import ideas from '../data/ideas.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-hidden selection:bg-gold-500">
      {/* BACKGROUND PARTICLES EFFECT */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold-900/20 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-40">
        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 ceo-glow"
          >
            {/* THIS IS YOUR CEO AVATAR PLACEHOLDER */}
            <div className="w-48 h-48 rounded-full border-2 border-gold-500 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-6xl">
              👑
            </div>
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-playfair font-bold mb-4"
          >
            <span className="gold-text uppercase tracking-tighter">Empire Dashboard</span>
          </motion.h1>
          
          <motion.p className="text-gray-400 text-xl tracking-[0.3em] uppercase font-light">
            Manifesting Wealth Through Strategy
          </motion.p>
        </section>

        {/* PLANS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ideas.map((idea, index) => (
            <Link href={`/idea/${idea.slug}`} key={index}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="luxury-card p-8 rounded-[30px] cursor-pointer group"
              >
                <span className="text-gold-500 text-xs font-bold tracking-[0.4em] uppercase">{idea.category}</span>
                <h2 className="text-3xl font-semibold my-4 group-hover:text-gold-400 transition-colors">{idea.title}</h2>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-gray-500 font-mono italic">{idea.budget}</span>
                  <div className="h-[1px] flex-grow mx-4 bg-white/10" />
                  <span className="text-gold-600 font-bold">VIEW PLAN →</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </main>
      
      {/* BOTTOM DECOR */}
      <footer className="fixed bottom-10 left-10 text-gold-900/50 font-serif italic text-sm">
        Highly Ambitious • Global Influence • 2026
      </footer>
    </div>
  );
}
