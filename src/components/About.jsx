import { motion } from 'framer-motion';
import { Terminal, BrainCircuit, Code2, Cpu } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <BrainCircuit className="text-blue-500" size={24} />,
      title: "AI & Machine Learning",
      description: "Exploring algorithms, data patterns, and building intelligent models to solve real-world problems."
    },
    {
      icon: <Code2 className="text-blue-500" size={24} />,
      title: "Web Development",
      description: "Creating responsive, user-friendly web applications using modern frameworks like React."
    },
    {
      icon: <Terminal className="text-blue-500" size={24} />,
      title: "Programming",
      description: "Writing clean, efficient, and maintainable code in Python, Java, C++, and JavaScript."
    },
    {
      icon: <Cpu className="text-blue-500" size={24} />,
      title: "Problem Solving",
      description: "Approaching challenges with analytical thinking and practical project-based solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-gray-400 leading-relaxed text-lg"
          >
            <p>
              I am an aspiring AI/ML and software developer, currently pursuing a B.Tech in Artificial Intelligence 
              and Machine Learning at Bansal College, Bhopal. My academic journey is driven by a deep curiosity 
              about how intelligent systems can transform data into actionable insights.
            </p>
            <p>
              Beyond the classroom, I am passionate about applying my knowledge to build practical projects. 
              Whether it's developing a machine learning recommendation system or crafting a responsive full-stack web 
              application, I focus on writing clean, efficient code and creating intuitive user experiences.
            </p>
            <p>
              I thrive on problem-solving and continuously seek to expand my skill set across the evolving landscape 
              of AI and software engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-gray-700 transition-colors"
              >
                <div className="bg-gray-950 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-gray-800">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-200 mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
