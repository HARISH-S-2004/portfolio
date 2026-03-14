import { motion } from 'framer-motion';
import { Search, Lightbulb, Palette, Layout, Terminal, Zap, CheckCircle } from 'lucide-react';

const steps = [
  { icon: <Search size={24} />, title: 'Discovery', color: '#6366f1' },
  { icon: <Lightbulb size={24} />, title: 'Visual Curation', color: '#8b5cf6' },
  { icon: <Palette size={24} />, title: 'Aesthetic Drafts', color: '#d946ef' },
  { icon: <Layout size={24} />, title: 'Layout Design', color: '#ec4899' },
  { icon: <Terminal size={24} />, title: 'Vibe Coding', color: '#f43f5e' },
  { icon: <Zap size={24} />, title: 'Rapid Prototype', color: '#f97316' },
  { icon: <CheckCircle size={24} />, title: 'Final Delivery', color: '#10b981' }
];

const DesignProcess = () => {
  return (
    <section id="process" className="glass" style={{ background: 'var(--surface)', margin: '6rem 1rem', borderRadius: '40px' }}>
      <div className="container">
        <h2 className="section-title">Design <span className="text-gradient">Process</span></h2>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginTop: '4rem', position: 'relative' }}>
          {/* Connecting line */}
          <div style={{ position: 'absolute', top: '35px', left: '5%', right: '5%', height: '2px', background: 'linear-gradient(90deg, #6366f1, #d946ef, #10b981)', opacity: 0.2, zIndex: 0, display: window.innerWidth > 768 ? 'block' : 'none' }}></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, width: '120px' }}
            >
              <div style={{ 
                width: '70px', height: '70px', borderRadius: '50%', background: 'white', 
                boxShadow: 'var(--shadow-md)', display: 'flex', justifyContent: 'center', alignItems: 'center',
                color: step.color, marginBottom: '1rem', border: `2px solid ${step.color}20`
              }}>
                {step.icon}
              </div>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)', textAlign: 'center' }}>{step.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
