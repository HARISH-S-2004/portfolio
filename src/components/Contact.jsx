import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Dribbble, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('submitting');
    
    try {
      // You might need to change the template_id and public_key to your own from your EmailJS dashboard
      await emailjs.sendForm(
        'service_1h6wr11',          // Your Service ID
        'template_iixd3hn',         // Your EmailJS Template ID
        form.current,
        'xCsC9gk2sDQj5LF_r'         // Your EmailJS Public Key
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error) {
      console.error('Error sending email via EmailJS:', error.text || error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" style={{ paddingBottom: '3rem' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass"
          style={{ padding: '4rem 2rem', borderRadius: '40px', textAlign: 'center', background: 'var(--surface)' }}
        >
          <div style={{ display: 'inline-block', padding: '0.4rem 1.5rem', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-1)', borderRadius: '9999px', fontWeight: 600, marginBottom: '1rem' }}>
            Get In Touch
          </div>
          
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Let's create something <span className="text-gradient">amazing.</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Have a project in mind, or just want to say hi? Feel free to drop a message. I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
          
          <form ref={form} onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
            <div>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                required
                style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '16px', border: '1px solid var(--surface-border)', background: 'rgba(255, 255, 255, 0.5)', fontFamily: 'Inter', fontSize: '1rem', outline: 'none', transition: 'box-shadow 0.2s', ...(status === 'submitting' && { opacity: 0.7, pointerEvents: 'none' }) }} 
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px rgba(99, 102, 241, 0.3)'} 
                onBlur={(e) => e.target.style.boxShadow = 'none'} 
              />
            </div>
            <div>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address" 
                required
                style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '16px', border: '1px solid var(--surface-border)', background: 'rgba(255, 255, 255, 0.5)', fontFamily: 'Inter', fontSize: '1rem', outline: 'none', transition: 'box-shadow 0.2s', ...(status === 'submitting' && { opacity: 0.7, pointerEvents: 'none' }) }} 
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px rgba(99, 102, 241, 0.3)'} 
                onBlur={(e) => e.target.style.boxShadow = 'none'} 
              />
            </div>
            <div>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project" 
                required
                rows={4} 
                style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '16px', border: '1px solid var(--surface-border)', background: 'rgba(255, 255, 255, 0.5)', fontFamily: 'Inter', fontSize: '1rem', outline: 'none', resize: 'vertical', transition: 'box-shadow 0.2s', ...(status === 'submitting' && { opacity: 0.7, pointerEvents: 'none' }) }} 
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px rgba(99, 102, 241, 0.3)'} 
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="btn btn-primary" 
              style={{ 
                padding: '1rem', 
                borderRadius: '16px', 
                fontWeight: 600, 
                fontSize: '1.1rem', 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '0.5rem',
                opacity: status === 'submitting' ? 0.7 : 1,
                cursor: status === 'submitting' ? 'wait' : 'pointer',
                transition: 'all 0.3s ease',
                background: status === 'success' ? '#22c55e' : status === 'error' ? '#ef4444' : ''
              }}
            >
              {status === 'idle' && <>Send Message <Send size={20} /></>}
              {status === 'submitting' && <>Sending...</>}
              {status === 'success' && <>Message Sent <CheckCircle2 size={20} /></>}
              {status === 'error' && <>Try Again <AlertCircle size={20} /></>}
            </button>
            
            {status === 'error' && (
              <p style={{ color: '#ef4444', fontSize: '0.9rem', textAlign: 'center', marginTop: '-0.5rem' }}>
                Failed to send message. Please ensure your EmailJS Template is configured correctly and your account is active.
              </p>
            )}
            {status === 'success' && (
              <p style={{ color: '#22c55e', fontSize: '0.9rem', textAlign: 'center', marginTop: '-0.5rem' }}>
                Thank you for your message!
              </p>
            )}
          </form>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="https://www.behance.net/harishselvam1/" target="_blank" rel="noreferrer" className="glass social-icon" style={{ width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', color: 'var(--text-main)', transition: 'transform 0.2s', padding: 0 }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
               {/* Custom Behance SVG since Lucide doesn't have one natively */}
               <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M22 7h-7v2h7V7zM11.5 14.5c0-1.4-1.2-2.5-3-2.5H4v5.3h4.4c1.9 0 3.1-1.3 3.1-2.8zM4 6.7h4c1.6 0 2.8.9 2.8 2.3 0 1.2-.8 1.9-1.8 2.1 1.3.2 2.3 1.2 2.3 2.6 0 1.8-1.5 3-3.6 3H4V6.7zM15 10c-2.3 0-4.1 1.6-4.1 3.8s1.8 4 4.3 4c1.7 0 3-.7 3.6-2H17c-.4 0-1 .4-1.8.4-1.3 0-2.2-.9-2.2-2.3H20v-.4c0-2-1.5-3.5-3-3.5zm-2 2.7c.3-1 1-1.5 2-1.5 1 0 1.7.6 1.8 1.5h-3.8z"/>
               </svg>
            </a>
            <a href="https://github.com/HARISH-S-2004" target="_blank" rel="noreferrer" className="glass social-icon" style={{ width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', color: 'var(--text-main)', transition: 'transform 0.2s', padding: 0 }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <Github size={22} />
            </a>
            <a href="mailto:harishselvam9998@gmail.com" className="glass social-icon" style={{ width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', color: 'var(--text-main)', transition: 'transform 0.2s', padding: 0 }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
