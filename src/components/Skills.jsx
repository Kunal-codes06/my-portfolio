import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "Java", "C++", "JavaScript"]
    },
    {
      title: "AI / ML",
      skills: ["Machine Learning", "NumPy", "Pandas", "PyTorch (Basic)", "Data Analysis"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Flask", "Firebase"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Firebase"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, ranging from core programming languages 
            to specialized fields like artificial intelligence and modern web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-950 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-gray-900 text-gray-300 text-sm px-4 py-2 rounded-lg border border-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
