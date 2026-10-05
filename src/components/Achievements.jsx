import { motion } from 'framer-motion';
import { Trophy, Star, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="text-yellow-500" size={24} />,
      title: "Hackathon Participation",
      description: "Actively participated and shortlisted in competitive collegiate hackathons, collaborating with teams to build innovative software solutions like 'Krishi Cart' under tight deadlines."
    },
    {
      icon: <Star className="text-blue-500" size={24} />,
      title: "Technical Activities",
      description: "Regularly engaged in coding challenges, technical workshops, and continuous learning to stay updated with the latest trends in Artificial Intelligence and Web Development."
    },
    {
      icon: <Target className="text-green-500" size={24} />,
      title: "Project Development",
      description: "Successfully developed and deployed full-stack web applications and machine learning models, demonstrating practical application of academic knowledge."
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Achievements & Activities</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-950 border border-gray-800 p-6 sm:p-8 rounded-2xl hover:border-gray-700 transition-colors"
            >
              <div className="bg-gray-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-gray-800">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
