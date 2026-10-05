import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 sm:pl-32 py-6 group"
          >
            {/* Timeline line */}
            <div className="hidden sm:block absolute left-16 top-0 bottom-0 w-px bg-gray-800 group-hover:bg-blue-900 transition-colors"></div>
            
            {/* Timeline dot */}
            <div className="hidden sm:flex absolute left-[3.8rem] top-8 w-4 h-4 rounded-full bg-gray-800 border-4 border-gray-900 group-hover:bg-blue-500 group-hover:border-gray-900 transition-colors z-10"></div>

            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors relative z-20 shadow-lg">
              <div className="flex items-start justify-between flex-col sm:flex-row gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">B.Tech in Artificial Intelligence & Machine Learning</h3>
                  <div className="flex items-center text-blue-400 font-medium gap-2">
                    <GraduationCap size={18} />
                    <span>Bansal College</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 text-sm text-gray-400 sm:text-right shrink-0">
                  <div className="flex items-center sm:justify-end gap-2">
                    <Calendar size={16} />
                    <span>Present</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-2">
                    <MapPin size={16} />
                    <span>Bhopal, India</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 mt-4 leading-relaxed">
                Currently pursuing an undergraduate degree with a specialization in Artificial Intelligence and Machine Learning. 
                Engaging in rigorous coursework covering data structures, algorithms, neural networks, and modern software engineering practices.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Education;
