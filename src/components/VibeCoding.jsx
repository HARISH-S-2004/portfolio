import { motion } from 'framer-motion';

const VibeCoding = () => {
  return (
    <section id="vibe-coding" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              What is <span className="text-gradient">Vibe Coding?</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Vibe coding is the art of rapidly transforming creative ideas into working digital products. It bridges the gap between imagination and reality by leveraging AI tools, rapid prototyping, and modern development workflows.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              Instead of getting bogged down in boilerplate, I focus on the 'vibe'—the aesthetics, the interactions, and the user experience—letting advanced tools handle the heavy lifting of code generation.
            </p>
            
            <a href="#work" className="btn btn-primary glass">
              Explore AI Experiments
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            {/* Experimental UI Component Mockup */}
            <div className="glass" style={{ width: '100%', maxWidth: '400px', height: '320px', borderRadius: '30px', padding: '1.5rem', position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
              </div>
              
              <div style={{ flex: 1, background: 'rgba(15, 23, 42, 0.05)', borderRadius: '15px', padding: '1.2rem', fontFamily: 'monospace', fontSize: '0.85rem', color: '#6366f1', overflow: 'hidden' }}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  style={{ display: 'inline-block', width: '2px', height: '1em', background: 'var(--accent-1)', marginBottom: '-2px' }}
                />
                <div style={{ color: '#0f172a', fontWeight: 600, marginBottom: '0.5rem' }}>// Vibe Check Initialization</div>
                <div style={{ opacity: 0.7 }}>
                  <span style={{ color: '#d946ef' }}>const</span> vibe = <span style={{ color: '#8b5cf6' }}>"Aesthetic"</span>;<br/>
                  <span style={{ color: '#d946ef' }}>if</span> (creativeBlock) <span style={{ color: '#6366f1' }}>vibeOut()</span>;<br/>
                  <span style={{ color: '#d946ef' }}>render</span>(<span style={{ color: '#f97316' }}>&lt;Future /&gt;</span>);
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '5px', background: 'rgba(99, 102, 241, 0.2)' }}></div>
                  <div style={{ width: '24px', height: '24px', borderRadius: '5px', background: 'rgba(217, 70, 239, 0.2)' }}></div>
                </div>
                <div style={{ width: '60px', height: '24px', borderRadius: '99px', background: 'var(--accent-1)', opacity: 0.8 }}></div>
              </div>
            </div>

            {/* Decorative background elements behind the experimental UI */}
            <div className="float-anim" style={{ position: 'absolute', top: '10%', right: '0%', width: '150px', height: '150px', background: 'var(--accent-2)', filter: 'blur(60px)', opacity: 0.3, zIndex: 0, borderRadius: '50%' }}></div>
            <div className="float-anim" style={{ position: 'absolute', bottom: '10%', left: '0%', width: '200px', height: '200px', background: 'var(--accent-1)', filter: 'blur(70px)', opacity: 0.3, zIndex: 0, borderRadius: '50%', animationDelay: '1.5s' }}></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VibeCoding;
