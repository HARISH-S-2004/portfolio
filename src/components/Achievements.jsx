import { motion } from 'framer-motion';
import { Award, Briefcase, Sparkles } from 'lucide-react';

const achievements = [
  {
    icon: <Briefcase size={28} />,
    title: 'Creative Coding Experience',
    desc: 'Developing rapid functional prototypes using modern frameworks and AI-assisted workflows.'
  },
  {
    icon: <Award size={28} />,
    title: 'Visual Identity Design',
    desc: 'Crafting unique brand languages and graphic systems that communicate stories with impact.'
  },
  {
    icon: <Sparkles size={28} />,
    title: 'AI Aesthetic Research',
    desc: 'Exploring the intersection of generative AI and visual design to create next-gen interfaces.'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="container">
      <h2 className="section-title">Milestones & <span className="text-gradient">Key Achievements</span></h2>
      
      <div className="grid-3">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="glass"
            style={{ padding: '2.5rem', borderRadius: '24px', textAlign: 'center', transition: 'var(--transition)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
            }}
          >
            <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(217, 70, 239, 0.1))', color: 'var(--accent-1)', marginBottom: '1.5rem' }}>
              {item.icon}
            </div>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600 }}>{item.title}</h3>
            <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
