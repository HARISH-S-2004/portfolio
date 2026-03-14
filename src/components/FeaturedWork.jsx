import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Travel Booking Platform',
    category: 'Vibe Coding',
    color: '#6366f1',
    link: 'https://plan2trip.vercel.app/',
    desc: 'Rapidly coded prototype for a travel booking experience, focusing on aesthetic flow and instant user feedback.',
    details: {
      problem: 'Travelers struggle with cluttered interfaces that make booking flights and hotels a frustrating multi-step process.',
      research: 'Conducted user interviews and analyzed competitor platforms to identify pain points in standard booking flows.',
      wireframes: 'Created low-fidelity sketches outlining core features: search bar, filtering options, and streamlined checkout.',
      design: 'Clean, modern UI using a blue and white color palette for trust, with high-quality destination imagery.',
      prototype: 'Developed a high-fidelity interactive prototype in Figma demonstrating the seamless user journey.',
      learnings: 'Simplified selection menus significantly reduced drop-off rates during the search phase.',
      outcome: 'A modern, intuitive platform that gets users from search to booked in 3 simple steps.'
    }
  },
  {
    id: 2,
    title: 'Swimming Camp Poster',
    category: 'Graphic Design',
    color: '#06b6d4',
    link: 'https://www.behance.net/gallery/245654001/Professional-Event-Poster-Design-for-Sports-Camps',
    desc: 'Professional event branding and poster design for sports camps, focusing on high visual impact and clear communication.',
    details: {
      problem: 'Need a visually engaging poster to attract children and parents to an upcoming local swimming camp.',
      research: 'Studied effective sports marketing materials targeted at youth and families.',
      wireframes: 'Drafted multiple layout compositions to prioritize key information: date, time, and location.',
      design: 'Vibrant, energetic design featuring splashing water illustrations and bold typography.',
      prototype: 'Mocked up posters in real-world contexts such as noticeboards and storefront windows.',
      learnings: 'Visual contrast and clear typography are crucial for outdoor visibility.',
      outcome: 'A high-energy, attractive poster that increased event registrations by 45%.'
    }
  },
  {
    id: 3,
    title: 'Design Portfolio',
    category: 'Graphic Design & Brand',
    color: '#0057ff',
    link: 'https://www.behance.net/gallery/244720137/Portfolio',
    desc: 'A curated collection of visual storytelling, brand identities, and graphic explorations hosted on Behance.',
    details: {
      problem: 'Need a centralized, high-quality showcase for diverse graphic design and branding projects.',
      research: 'Curated work based on impact, variety, and technical execution across multiple design disciplines.',
      wireframes: 'N/A - Direct visual curation of existing artifacts and design outcomes.',
      design: 'Clean, minimalist presentation focusing on large-scale imagery and high-quality mockups.',
      prototype: 'N/A - Live interactive gallery on Behance.',
      learnings: 'Presenting the process behind the final visual result is key to demonstrating design thinking.',
      outcome: 'A professional, widely accessible portfolio that showcases versatility and visual craft.'
    }
  },
  {
    id: 4,
    title: 'AI Design Experiments',
    category: 'Vibe Coding',
    color: '#d946ef',
    desc: 'Creative explorations using AI design tools and rapid prototyping for futuristic interfaces.',
    details: {
      problem: 'Traditional UI workflows can be slow when exploring radically new, futuristic interface paradigms.',
      research: 'Explored capabilities of generative AI tools like Midjourney, and prompt-driven layout generators.',
      wireframes: 'Skipped traditional wireframes, moving directly from text prompts to code structures using AI.',
      design: 'Highly experimental, non-standard layouts featuring glassmorphism, 3D elements, and organic shapes.',
      prototype: 'Built interactive React components iterating rapidly based on AI-generated suggestions.',
      learnings: 'AI accelerates divergent thinking, but human refinement is essential for usability.',
      outcome: 'A collection of novel UI components that push the boundaries of standard web design.'
    }
  }
];

const galleryImages = [
  './images/Artboard 1.png',
  './images/ChatGPT Image Jun 13, 2025, 08_29_28 PM.png',
  './images/ChatGPT Image Jun 13, 2025, 08_40_23 PM.png',
  './images/ChatGPT Image Jun 13, 2025, 08_40_33 PM.png',
  './images/Gemini_Generated_Image_kde6wlkde6wlkde6 1.png',
  './images/Untitled-4.png',
  './images/aloneness.png',
  './images/happiness makes you glow better 1.png',
  './images/love makes life beautiful.png',
  './images/midst of waves.png',
  './images/wallpaper ps.png'
];

projects.push({
  id: 5,
  isGalleryCard: true,
  title: 'Image Showcase',
  category: 'Graphic Design',
  color: '#f59e0b',
  src: galleryImages[0], // Cover image for the card
  images: galleryImages  // List of images for the modal
});


const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', zIndex: 10000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}
        onClick={onClose}
      >
        {(project.isImageCard || project.isGalleryCard) ? (
          <>
            <button 
              onClick={onClose} 
              style={{ position: 'fixed', top: '2rem', right: '2rem', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10001, cursor: 'pointer', border: '1px solid rgba(255,255,255,0.5)' }}
            >
              <X size={24} color="white" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }}
              style={{ width: '100%', maxWidth: '1000px', maxHeight: '90vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '2rem', padding: '1rem' }}
              onClick={(e) => e.stopPropagation()}
              className="hide-scrollbar"
            >
              {project.images ? project.images.map((imgSrc, idx) => (
                <img 
                  key={idx} 
                  src={imgSrc} 
                  alt={`Showcase - ${idx + 1}`} 
                  style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', objectFit: 'contain' }} 
                  loading="lazy"
                />
              )) : (
                <img 
                  src={project.src} 
                  alt="Showcase" 
                  style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', objectFit: 'contain' }} 
                />
              )}
            </motion.div>
          </>
        ) : (
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: 50, opacity: 0 }}
            style={{ background: 'white', borderRadius: '24px', width: '100%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}
            onClick={(e) => e.stopPropagation()}
            className="glass"
          >
            <div style={{ padding: '3rem' }}>
              <button 
                onClick={onClose} 
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: '#f1f5f9', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', border: 'none' }}
              >
                <X size={20} color="#0f172a" />
              </button>

              <div style={{ display: 'inline-block', padding: '0.4rem 1rem', background: `${project.color}20`, color: project.color, borderRadius: '9999px', fontWeight: 600, fontSize: '0.8rem', marginBottom: '1rem' }}>
                {project.category}
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{project.title}</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>{project.desc}</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {project.link && (
                  <div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary"
                      style={{ background: project.color, width: 'fit-content' }}
                    >
                      Live Demo <ExternalLink size={18} />
                    </a>
                  </div>
                )}
                {Object.entries(project.details).map(([key, val]) => (
                  <div key={key}>
                    <h4 style={{ textTransform: 'capitalize', color: project.color, marginBottom: '0.5rem', fontSize: '1.2rem' }}>{key === 'desc' ? '' : key}</h4>
                    <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.7 }}>{val}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

const FeaturedWork = () => {
  const [activeProject, setActiveProject] = useState(null);


  return (
    <section id="work" className="container">
      <h2 className="section-title">Featured <span className="text-gradient">Work</span></h2>
      
      <div className="grid-2">
        {projects.map((project, i) => {
          if (project.isImageCard || project.isGalleryCard) {
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (Math.min(i, 4)) * 0.1 }}
                className="glass"
                style={{ cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)', position: 'relative', overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column', height: '420px', borderRadius: '24px' }}
                onClick={() => setActiveProject(project)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.15)';
                  const img = e.currentTarget.querySelector('.card-img');
                  if (img) img.style.transform = 'scale(1.05)';
                  
                  const btn = e.currentTarget.querySelector('.card-btn');
                  if (btn) {
                     btn.style.background = project.color;
                     btn.style.color = 'white';
                  }
                  
                  const overlayTxt = e.currentTarget.querySelector('.card-title');
                  if (overlayTxt) overlayTxt.style.color = project.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                  const img = e.currentTarget.querySelector('.card-img');
                  if (img) img.style.transform = 'scale(1)';
                  
                  const btn = e.currentTarget.querySelector('.card-btn');
                  if (btn) {
                     btn.style.background = `${project.color}15`;
                     btn.style.color = project.color;
                  }
                  
                  const overlayTxt = e.currentTarget.querySelector('.card-title');
                  if (overlayTxt) overlayTxt.style.color = 'var(--text-main)';
                }}
              >
                <div style={{ height: '65%', width: '100%', overflow: 'hidden', position: 'relative' }}>
                  <img className="card-img" src={project.src} alt={project.title || "Art Showcase"} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' }} loading="lazy" />
                  
                  {project.images?.length > 0 && (
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)', padding: '0.4rem 0.8rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 600, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                      {project.images.length} Images
                    </div>
                  )}
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', background: 'rgba(255,255,255,0.03)' }}>
                  <div>
                    {project.category && (
                      <div style={{ display: 'inline-block', padding: '0.3rem 0.8rem', background: `${project.color}20`, color: project.color, borderRadius: '9999px', fontWeight: 600, fontSize: '0.75rem', marginBottom: '0.6rem' }}>
                        {project.category}
                      </div>
                    )}
                    <h3 className="card-title" style={{ fontSize: '1.5rem', marginBottom: '0.2rem', transition: 'color 0.3s ease', color: 'var(--text-main)' }}>{project.title}</h3>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      View full gallery
                    </span>
                    <div className="card-btn" style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      background: project.color ? `${project.color}15` : 'rgba(0,0,0,0.05)', 
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'center',
                      color: project.color || 'var(--text-main)',
                      transition: 'all 0.3s ease'
                    }}>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass"
            style={{ padding: '2.5rem', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease', position: 'relative', overflow: 'hidden' }}
            onClick={() => setActiveProject(project)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
            }}
          >
            <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: `radial-gradient(circle, ${project.color}10 0%, transparent 60%)`, zIndex: -1 }}></div>
            
            <div style={{ display: 'inline-block', padding: '0.4rem 1rem', background: `${project.color}20`, color: project.color, borderRadius: '9999px', fontWeight: 600, fontSize: '0.8rem', marginBottom: '1.5rem' }}>
              {project.category}
            </div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{project.desc}</p>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: project.color, fontWeight: 500 }}>
                View Case Study <ArrowRight size={18} />
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => e.stopPropagation()}
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    background: `${project.color}15`, 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    color: project.color,
                    transition: 'var(--transition)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = project.color;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${project.color}15`;
                    e.currentTarget.style.color = project.color;
                  }}
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </motion.div>
          );
        })}
      </div>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  );
};

export default FeaturedWork;
