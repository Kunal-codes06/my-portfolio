import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from './Icons';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: "krishi-cart",
      title: "Krishi Cart",
      description: "A digital farmer-to-consumer marketplace connecting farmers directly with consumers, retailers and local vendors.",
      tags: ["React", "Vite", "Node.js", "Express", "Supabase PostgreSQL", "Python", "Flask", "ML"],
      githubUrl: "https://github.com/Kunal-codes06/Krishi-Cart",
    },
    {
      id: "lost-and-found",
      title: "Lost & Found",
      description: "A centralized web application to help users report lost belongings and search for found items.",
      tags: ["Python", "Flask", "HTML", "CSS", "SQLite"],
      githubUrl: "https://github.com/Kunal-codes06/lost-and-found",
    },
    {
      id: "music-mood-recommendation",
      title: "Music Mood Recommendation System",
      description: "A web application that recommends personalized songs based on the user's mood using machine learning.",
      tags: ["React", "Machine Learning", "Backend technologies"],
      githubUrl: "https://github.com/Kunal-codes06/Music-Mood-Recommendation-System",
    },
    {
      id: "monsoon-mitra",
      title: "MonsoonMitra",
      description: "An AI-powered agricultural decision-support and early-warning platform for hyperlocal monsoon forecasts.",
      tags: ["React", "TypeScript", "Python", "FastAPI", "XGBoost", "PostgreSQL"],
      githubUrl: "https://github.com/Kunal-codes06/monsoon-prediction-sih",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent practical work, spanning web development, machine learning, and software utilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col h-full hover:border-gray-700 transition-colors group"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-blue-900/30 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-800">
                <Link 
                  to={`/projects/${project.id}`}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  View Details
                  <ExternalLink size={16} />
                </Link>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium ml-auto"
                  >
                    <Github size={20} />
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
