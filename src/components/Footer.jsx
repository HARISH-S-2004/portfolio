const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer style={{ padding: '3rem 0', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.05)', marginTop: '2rem' }}>
      <div className="container">
        <a href="#" className="logo" style={{ display: 'inline-block', marginBottom: '1rem', color: 'var(--text-main)' }}>Harish<span className="text-gradient">.</span></a>
        
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Crafted with passion, curiosity, and vibe coding.
        </p>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', opacity: 0.8 }}>
          &copy; {year} Harish S. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
