import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Container } from './ui/container';
import { useEffect, useState } from 'react';

const skills = [
  'AI Tools',
  'Robotics',
  'Cloud Computing',
  'Personal Development',
  'Web Development',
  'Programming Languages',
  'Problem Solving',
  'Career Growth',
];

const quotes = [
  "Learning never exhausts the mind.",
  "Knowledge is power.",
  "Growth begins where comfort ends.",
  "The best investment is in yourself.",
  "Inspiration leads to innovation.",
];

// Advertisement data
const advertisements = [
  {
    title: "Upcoming Session",
    description: "Join our Free Hands on Session & enjoy !",
    image: "https://i.postimg.cc/YCFmWMRg/temp-Image-Qd88-SL.avif", // Replace with actual image link
  },
  
  {
    title: "New AI Course",
    description: "Learn AI tools with our latest course curriculum.",
    image: "https://informationage-production.s3.amazonaws.com/uploads/2022/10/ai-skills-ai-courses.jpeg", // Replace with actual image link
  },
];

export function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [counts, setCounts] = useState([0, 0, 0]);
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    // Skills animation
    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);

    // Quotes animation
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => {
      clearInterval(skillInterval);
      clearInterval(quoteInterval);
    };
  }, []);

  // Advertisement slider
  useEffect(() => {
    const adInterval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(adInterval);
  }, []);

  useEffect(() => {
    const intervals = counts.map((_, i) => {
      const endValue = i === 0 ? 95 : i === 1 ? 10 : 100;
      return setInterval(() => {
        setCounts((prev) =>
          prev.map((value, index) =>
            index === i ? Math.min(value + 1, endValue) : value
          )
        );
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-green-400 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 via-blue-500/50 to-green-400/50 mix-blend-multiply" />
      </div>

      {/* Main Content */}
      <Container className="relative pt-24 pb-20 text-center md:pt-32">
        {/* Advertisement Section */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-xl shadow-lg bg-white/10 backdrop-blur-lg">
            <motion.div
              key={currentAd}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center p-6"
            >
              <div className="text-center">
                <img
                  src={advertisements[currentAd].image}
                  alt={advertisements[currentAd].title}
                  className="mx-auto mb-4 rounded-lg max-h-40"
                />
                <h3 className="text-lg font-bold text-white mb-2">
                  {advertisements[currentAd].title}
                </h3>
                <p className="text-sm text-white/80">
                  {advertisements[currentAd].description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          {/* Logo and Heading */}
          <div className="flex flex-col items-center mb-8">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="mb-4"
            >
              <Sparkles className="w-12 h-12 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            >
              Wisdom Roots
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl font-medium text-white mb-8"
          >
            Grow with Network
          </motion.p>

          {/* Skills Animation */}
          <div className="h-16 mb-8 relative">
            <motion.div
              key={currentSkill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <p
                className="text-2xl text-white/90"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {skills[currentSkill]}
              </p>
            </motion.div>
          </div>

          {/* Quote Section */}
          <div className="h-16 mb-12 relative">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <p
                className="text-lg italic text-white/80"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {quotes[currentQuote]}
              </p>
            </motion.div>
          </div>

          {/* Statistics */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {[
              { value: `${counts[0]}%`, label: 'Skill Building' },
              { value: `${counts[1]}+`, label: 'Expert Mentors' },
              { value: `${counts[2]}%`, label: 'Confidence Building' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                className="p-6 rounded-lg bg-white/10 backdrop-blur-lg shadow-lg"
              >
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                <p className="text-white/90">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}