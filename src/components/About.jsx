import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div 
          className="glass" 
          style={{ padding: '4rem', borderRadius: '40px', position: 'relative', overflow: 'hidden' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative background circle */}
          <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, var(--accent-1) 0%, transparent 70%)', opacity: 0.1, borderRadius: '50%', zIndex: -1 }}></div>
          
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                About <span className="text-gradient">Me</span>
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '1.5rem', fontWeight: 500 }}>
                I am a B.Tech IT student profoundly passionate about graphic design, vibe coding, and building meaningful digital experiences.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                My journey into design and development started with a simple curiosity for how things work on the internet. Since then, I've immersed myself in the intersection of aesthetics and technology.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                I believe that great design is not just about making things look pretty, but about solving problems creatively. By utilizing AI-assisted design workflows, I push boundaries to craft next-generation interfaces that are both beautiful, functional, and deeply human-centric.
              </p>
              
              <div style={{ display: 'inline-block', padding: '1rem 2rem', background: 'var(--surface)', borderRadius: '16px', border: '1px solid var(--surface-border)', boxShadow: 'var(--shadow-md)', fontWeight: 600 }}>
                <span className="text-gradient" style={{ fontSize: '1.5rem', display: 'block' }}>100%</span>
                Driven by curiosity
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '350px', aspectRatio: '1/1' }}>
                {/* Background Shape (The 'Inside') */}
                <div 
                  className="float-anim" 
                  style={{ 
                    position: 'absolute',
                    top: '5%',
                    left: '5%',
                    width: '90%', 
                    height: '90%', 
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', 
                    background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
                    opacity: 0.2,
                    zIndex: 1
                  }}
                ></div>

                {/* Profile Image (The 'Outside') */}
                <img 
                  src="./profile.png" 
                  alt="Harish S"
                  className="float-anim"
                  style={{ 
                    position: 'relative',
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', 
                    boxShadow: 'var(--shadow-lg)',
                    border: '4px solid rgba(255, 255, 255, 0.1)',
                    zIndex: 2,
                    display: 'block'
                  }} 
                />
                
                {/* Overlay Status Indicator */}
                <div className="glass" style={{ position: 'absolute', bottom: '10%', right: '-5%', padding: '0.8rem 1.2rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '0.8rem', animation: 'float 5s ease-in-out infinite reverse', zIndex: 20 }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
                  <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
