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
        
        <div className="process-grid" style={{ marginTop: '4rem', position: 'relative' }}>
          {/* Connecting line inside CSS */}
          <div className="process-line"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
              className="process-item"
            >
              <div className="process-icon-container" style={{ color: step.color, border: `2px solid ${step.color}20` }}>
                {step.icon}
              </div>
              <p className="process-step-title">{step.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
