import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "CS50's Introduction to Programming with Python",
      issuer: "Harvard University (CS50)",
      date: "Recent",
      url: "/certificates/CS50P.png"
    },
    {
      title: "Python Certification",
      issuer: "Technical Certification",
      date: "Recent",
      url: "/certificates/python.jpeg"
    },
    {
      title: "C++ Certification",
      issuer: "Technical Certification",
      date: "Recent",
      url: "/certificates/cpp.jpeg"
    },
    {
      title: "JavaScript Certification",
      issuer: "Technical Certification",
      date: "Recent",
      url: "/certificates/javascript.jpeg"
    },
    {
      title: "Hackathon Participation Certificate",
      issuer: "Hackathon Event",
      date: "Recent",
      url: "/certificates/hackathon.jpeg"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-800/50 mt-1">
                  <Award className="text-blue-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-gray-400 font-medium">{cert.issuer}</p>
                </div>
              </div>
              
              <a 
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-gray-700 w-full sm:w-auto justify-center"
              >
                View Certificate
                <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
