import { motion } from 'framer-motion';
import { Palette, Code2, Sparkles, Layout, MousePointerClick, Target, Terminal, Layers, Image as ImageIcon } from 'lucide-react';

const SkillsTools = () => {
  const skills = [
    { title: 'Graphic Design', icon: <Palette size={20} /> },
    { title: 'Vibe Coding', icon: <Terminal size={20} /> },
    { title: 'Brand Identity', icon: <Sparkles size={20} /> },
    { title: 'UI/UX Design', icon: <Layout size={20} /> },
    { title: 'Visual Storytelling', icon: <ImageIcon size={20} /> },
    { title: 'Rapid Prototyping', icon: <Layers size={20} /> }
  ];

  const tools = [
    'Adobe Creative Suite', 'Figma', 'Generative AI Tools', 'React.js', 'Vite', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'GitHub'
  ];

  return (
    <section id="skills" className="container">
      <div className="grid-2">
        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Core <span className="text-gradient">Skills</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            {skills.map((skill, index) => (
              <div key={index} className="glass" style={{ padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem', borderRadius: '16px', transition: 'transform 0.2s', cursor: 'default' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ color: 'var(--accent-1)' }}>{skill.icon}</div>
                <span style={{ fontWeight: 500 }}>{skill.title}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Favorite <span className="text-gradient">Tools</span></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {tools.map((tool, index) => (
              <div key={index} style={{ 
                padding: '0.8rem 1.5rem', 
                background: 'white', 
                borderRadius: '9999px',
                boxShadow: 'var(--shadow-sm)',
                fontWeight: 500,
                color: 'var(--text-muted)',
                border: '1px solid var(--surface-border)'
              }}>
                {tool}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', padding: '2rem', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(217, 70, 239, 0.1))', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.5)' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}><Target size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem', color: 'var(--accent-2)' }}/> Always learning</h3>
            <p style={{ color: 'var(--text-muted)' }}>I constantly explore new design patterns, frontend frameworks, and AI workflows to stay at the cutting edge of digital product creation.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsTools;
