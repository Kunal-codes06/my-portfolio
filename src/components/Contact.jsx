import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { Github, Linkedin, LeetCode } from './Icons';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdekyadd", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="mailto:kunalgurmule123@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                  <div className="bg-gray-950 p-4 rounded-full border border-gray-800 group-hover:border-blue-500/50 transition-colors">
                    <Mail size={24} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <p className="text-lg">kunalgurmule123@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+918103318843" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                  <div className="bg-gray-950 p-4 rounded-full border border-gray-800 group-hover:border-blue-500/50 transition-colors">
                    <Phone size={24} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                    <p className="text-lg">+91 8103318843</p>
                  </div>
                </a>

                <a href="https://github.com/Kunal-codes06" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                  <div className="bg-gray-950 p-4 rounded-full border border-gray-800 group-hover:border-blue-500/50 transition-colors">
                    <Github size={24} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">GitHub</p>
                    <p className="text-lg">Kunal-codes06</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/kunal-gurmule-010126332" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                  <div className="bg-gray-950 p-4 rounded-full border border-gray-800 group-hover:border-blue-500/50 transition-colors">
                    <Linkedin size={24} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">LinkedIn</p>
                    <p className="text-lg">Kunal Gurmule</p>
                  </div>
                </a>

                <a href="https://leetcode.com/u/Kunal446/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                  <div className="bg-gray-950 p-4 rounded-full border border-gray-800 group-hover:border-blue-500/50 transition-colors">
                    <LeetCode size={24} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">LeetCode</p>
                    <p className="text-lg">Kunal446</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="bg-gray-900 border border-gray-800 p-8 rounded-2xl space-y-6" onSubmit={handleSubmit}>
              
              {status === 'success' && (
                <div className="bg-green-900/30 border border-green-800/50 text-green-400 px-4 py-3 rounded-lg flex items-center gap-3">
                  <CheckCircle2 size={20} />
                  <p>Thanks! Your message has been sent successfully.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-900/30 border border-red-800/50 text-red-400 px-4 py-3 rounded-lg flex items-center gap-3">
                  <AlertCircle size={20} />
                  <p>Oops! There was a problem submitting your form. Please try again.</p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Subject (Optional)"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows="4" 
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
