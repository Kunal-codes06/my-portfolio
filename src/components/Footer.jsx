import { Mail } from 'lucide-react';
import { Github, Linkedin, LeetCode } from './Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white tracking-wider mb-2">
              Kunal Gurmule<span className="text-blue-500">.</span>
            </h2>
            <p className="text-gray-400">AI/ML Student & Aspiring Software Developer</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/Kunal-codes06" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/kunal-gurmule-010126332" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://leetcode.com/u/Kunal446/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <LeetCode size={20} />
              <span className="sr-only">LeetCode</span>
            </a>
            <a href="mailto:kunalgurmule123@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-900 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Kunal Gurmule. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
