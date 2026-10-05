import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { Github, Linkedin, LeetCode } from './Icons';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [imgSrc, setImgSrc] = useState('/profile.jpg');
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-blue-500 font-medium tracking-wide uppercase">Welcome to my portfolio</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hi, I'm <span className="text-blue-500">Kunal Gurmule</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300">
              AI/ML Student & Aspiring Software Developer
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              Passionate about building intelligent systems and solving complex problems. 
              Currently pursuing my B.Tech at Bansal College, Bhopal, with a focus on machine learning and modern web technologies.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="/#projects" 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/#contact" 
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium border border-gray-700 transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="https://github.com/Kunal-codes06" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors bg-gray-900 p-3 rounded-full">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kunal-gurmule-010126332" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors bg-gray-900 p-3 rounded-full">
              <Linkedin size={24} />
            </a>
            <a href="https://leetcode.com/u/Kunal446/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors bg-gray-900 p-3 rounded-full">
              <LeetCode size={24} />
            </a>
            <a href="mailto:kunalgurmule123@gmail.com" className="text-gray-400 hover:text-white transition-colors bg-gray-900 p-3 rounded-full">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex justify-center relative"
        >
          <div className="w-80 h-80 relative z-10 rounded-full overflow-hidden border border-gray-800 bg-gray-900 flex items-center justify-center shadow-2xl">
            {!imgError ? (
              <img 
                src={imgSrc} 
                alt="Kunal Gurmule" 
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
                <div className="w-48 h-48 rounded-full border border-blue-500/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                  <div className="w-32 h-32 rounded-full border border-blue-400/50 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/80 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                  </div>
                </div>
              </>
            )}
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
