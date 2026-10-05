import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Github } from './Icons';

const projectData = {
  "krishi-cart": {
    title: "Krishi Cart",
    overview: "Krishi Cart is a digital farmer-to-consumer marketplace that connects farmers directly with consumers, retailers and local vendors, reducing dependency on intermediaries and improving transparency in agricultural trade.",
    problemStatement: "Farmers often depend on intermediaries to sell their agricultural produce, which can reduce price realization and transparency. Consumers also face difficulty in accessing fresh agricultural products directly from farmers.",
    solution: "Krishi Cart provides a digital marketplace where farmers can directly list their agricultural products with pricing and availability details. Consumers, retailers and local vendors can browse available products and purchase them through the platform, creating a more direct and transparent agricultural marketplace.",
    keyFeatures: [
      "Direct listing of agricultural products",
      "Product price and availability",
      "Product browsing",
      "Direct farmer-to-consumer marketplace",
      "Order management",
      "Delivery coordination",
      "Transparent pricing",
      "Marketplace for retailers and local vendors"
    ],
    technologyStack: {
      "Frontend": ["React", "Vite", "CSS", "Firebase"],
      "Backend": ["Node.js", "Express"],
      "Database": ["Supabase PostgreSQL"],
      "ML Backend": ["Python", "Flask / FastAPI", "Machine Learning Libraries"],
      "Dataset": ["CSV"]
    },
    github: "https://github.com/Kunal-codes06/Krishi-Cart",
    screenshots: [] // e.g., ["/projects/krishi-cart/1.jpg"]
  },
  "lost-and-found": {
    title: "Lost & Found",
    overview: "Lost & Found is a web application designed to help users report lost belongings and search for found items through a centralized platform.",
    problemStatement: "People often face difficulty recovering lost belongings because information about lost and found items is scattered and there is no simple centralized platform to report and search for them.",
    solution: "The Lost & Found application provides a centralized system where users can report lost items and search for found items. Location-based information helps users identify potentially matching items and makes the recovery process more organized.",
    keyFeatures: [
      "Add lost items",
      "Search found items",
      "Location-based search",
      "User-friendly interface",
      "Lost and found item management",
      "Notifications"
    ],
    technologyStack: {
      "Technologies": ["Python", "Flask", "HTML", "CSS", "SQLite"]
    },
    github: "https://github.com/Kunal-codes06/lost-and-found",
    screenshots: []
  },
  "music-mood-recommendation": {
    title: "Music Mood Recommendation System",
    overview: "Music Mood Recommendation System is a web application that recommends songs based on the user's mood using machine learning.",
    problemStatement: "Users often spend time searching for songs that match their current mood. Traditional music browsing can make it difficult to quickly find music that suits the user's emotional state.",
    solution: "The system uses machine-learning-based mood analysis to provide personalized song recommendations according to the user's mood, creating a more relevant and personalized music experience.",
    keyFeatures: [
      "Mood-based song recommendations",
      "Machine-learning-based recommendation",
      "Personalized music suggestions",
      "Interactive React interface",
      "Backend integration",
      "Mood-based recommendation workflow"
    ],
    technologyStack: {
      "Technologies": ["React", "Machine Learning", "Backend technologies", "Recommendation system"]
    },
    github: "https://github.com/Kunal-codes06/Music-Mood-Recommendation-System",
    screenshots: []
  },
  "monsoon-mitra": {
    title: "MonsoonMitra",
    subtitle: "Hyperlocal Monsoon Forecasting & Smart Farming Advisory",
    overview: "MonsoonMitra is an AI-powered agricultural decision-support and early-warning platform designed to provide hyperlocal monsoon forecasts and actionable farming insights at block, village and panchayat levels.",
    problemStatement: "No accurate block/village-level rainfall forecasts. Unpredictable monsoon breaks and dry spells. Uneven rainfall distribution within districts. Lack of crop-specific farming advice. Delayed and ineffective rainfall risk alerts.",
    solution: "Hyperlocal block/village-level rainfall prediction. 7-day monsoon forecasts. Dry-spell alerts. Interactive village-level rainfall risk maps. Crop-specific farming recommendations. Real-time alerts through SMS and mobile applications.",
    keyFeatures: [
      "Hyperlocal rainfall forecasting",
      "7/14/21/30-day forecast views",
      "Interactive risk maps",
      "Location-based forecasting",
      "Crop-specific advisory",
      "Historical climate analysis",
      "Climate signal monitoring",
      "Automated alerts",
      "English and Hindi advisory",
      "Dashboard with rainfall and risk indicators"
    ],
    technologyStack: {
      "ML / AI": ["XGBoost", "SHAP", "Isotonic Calibration", "Pandas", "NumPy"],
      "Frontend": ["React", "TypeScript", "Vite", "Tailwind CSS", "Leaflet", "React Leaflet", "Recharts"],
      "Backend": ["Python", "FastAPI", "SQLAlchemy", "APScheduler"],
      "Database": ["PostgreSQL", "Supabase"],
      "APIs": ["Open-Meteo", "Twilio"],
      "Deployment": ["Render", "GitHub"]
    },
    github: "https://github.com/Kunal-codes06/monsoon-prediction-sih",
    screenshots: []
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return <Navigate to="/" />;
  }

  return (
    <div className="py-24 bg-gray-950 min-h-screen text-gray-300 selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link 
          to="/#projects" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-8 sm:p-12 shadow-xl"
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">{project.title}</h1>
          {project.subtitle && (
            <h2 className="text-xl sm:text-2xl text-blue-400 mb-6">{project.subtitle}</h2>
          )}

          <div className="flex items-center gap-4 mt-6 mb-12">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-5 py-2.5 rounded-lg font-medium border border-gray-700 transition-colors"
            >
              <Github size={20} />
              GitHub Repository
            </a>
          </div>

          <div className="space-y-12">
            <section>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-600 rounded-full inline-block"></span>
                Overview
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">{project.overview}</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-gray-950/50 p-6 rounded-xl border border-gray-800/50">
                <h3 className="text-xl font-bold text-white mb-3 text-red-400">Problem Statement</h3>
                <p className="text-gray-400 leading-relaxed">{project.problemStatement}</p>
              </section>
              <section className="bg-gray-950/50 p-6 rounded-xl border border-gray-800/50">
                <h3 className="text-xl font-bold text-white mb-3 text-green-400">Solution</h3>
                <p className="text-gray-400 leading-relaxed">{project.solution}</p>
              </section>
            </div>

            <section>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-600 rounded-full inline-block"></span>
                Key Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-400">
                    <span className="text-blue-500 mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-600 rounded-full inline-block"></span>
                Technology Stack
              </h3>
              <div className="space-y-6">
                {Object.entries(project.technologyStack).map(([category, techs], idx) => (
                  <div key={idx}>
                    <h4 className="text-gray-200 font-semibold mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech, techIdx) => (
                         <span 
                           key={techIdx}
                           className="bg-gray-800 text-blue-300 text-sm px-3 py-1.5 rounded-lg border border-gray-700"
                         >
                           {tech}
                         </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {project.screenshots && project.screenshots.length > 0 && (
              <section>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-blue-600 rounded-full inline-block"></span>
                  Project Screenshots
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.screenshots.map((src, idx) => (
                    <img 
                      key={idx} 
                      src={src} 
                      alt={`${project.title} screenshot ${idx + 1}`} 
                      className="w-full h-auto rounded-xl border border-gray-800 shadow-lg"
                    />
                  ))}
                </div>
              </section>
            )}

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
