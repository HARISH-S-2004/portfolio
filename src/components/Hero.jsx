import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-1)', borderRadius: '9999px', fontWeight: 600, marginBottom: '2rem', fontSize: '0.9rem', border: '1px solid rgba(99, 102, 241, 0.2)' }}
          >
            Hello, I am Harish S 👋
          </motion.div>
          
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', marginBottom: '1.5rem', lineHeight: 1.1, fontWeight: 800 }}>
            {["Crafting", "cool", "stuf", "through", "design", "and", "vibe", "coding."].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
                style={{ display: 'inline-block', marginRight: '0.3em' }}
                className={word === 'design' || word === 'vibe' || word === 'coding.' ? 'text-gradient' : ''}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', fontWeight: 400 }}
          >
            Graphic Designer | Vibe Coder | AI-Powered Creative Thinker
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a href="#work" className="btn btn-primary magnetic-btn" style={{ fontSize: '1.1rem', padding: '1.2rem 3rem' }}>
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary magnetic-btn" style={{ fontSize: '1.1rem', padding: '1.2rem 3rem' }}>
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Abstract Background Shapes */}
      <motion.div 
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'var(--accent-1)', filter: 'blur(150px)', opacity: 0.15, zIndex: -1, borderRadius: '50%' }}
      ></motion.div>
      <motion.div 
        animate={{ 
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ position: 'absolute', bottom: '10%', right: '10%', width: '400px', height: '400px', background: 'var(--accent-2)', filter: 'blur(150px)', opacity: 0.15, zIndex: -1, borderRadius: '50%' }}
      ></motion.div>
    </section>
  );
};

export default Hero;
