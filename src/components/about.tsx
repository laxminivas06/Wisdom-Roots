import { motion } from "framer-motion";
import { Container } from "./ui/container";
import {
  Brain,
  Cloud,
  Rocket,
  Lightbulb,
  Book,
  Compass,
  GraduationCap,
  ChevronDown,  // Arrow icon
} from "lucide-react"; // Additional icons imported
import { useState } from "react"; // Import useState for managing the animation trigger

const aboutMessage = `Founded in December 2024, Wisdom Roots is dedicated to bridging the gap between traditional academics and practical expertise. 
We are committed to shaping the next generation of innovators by equipping students with hands-on learning experiences and real-world applications. 
At Wisdom Roots, our mission is to nurture confident, skilled individuals who are ready to embrace and overcome global challenges with passion and purpose.`;

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.02, // Add slight delay for each letter
    },
  }),
};

export function About() {
  const [showMessage, setShowMessage] = useState(false); // State to manage whether the message should be shown

  const handleTap = () => {
    setShowMessage(true); // Trigger the display of the "About Me" message
  };

  return (
    <section id="about" className="py-24 bg-gray-50 relative">
      <Container onClick={handleTap}> {/* Add the onClick handler here */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Tap Message */}
          {!showMessage && (
            <p className="text-lg font-semibold text-gray-700 mb-4">
              Tap on <span className="text-blue-500 font-bold">Wisdom Roots</span> 
              <motion.div
                animate={{
                  y: [0, 10, 0], // Bounce animation for the arrow
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="mx-auto inline-block mb-4"
              >
                <ChevronDown className="text-blue-500 w-8 h-8" /> {/* Arrow icon */}
              </motion.div>
              to view more
            </p>
          )}

          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            About Wisdom Roots
          </h2>

          {showMessage && (
            <motion.div
              className="text-lg text-gray-700 mb-8"
              style={{
                fontFamily: "Poppins",
                fontSize: "1.5rem",
                textAlign: "center",
                whiteSpace: "pre-wrap",
                lineHeight: "2rem",
              }}
            >
              {aboutMessage.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={letterAnimation}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Vision Container */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Brain className="text-purple-600 w-14 h-14 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Our Vision</h3>
              <blockquote
                className="text-gray-700 italic text-center"
                style={{ fontFamily: "Poppins", fontSize: "1.5rem" }}
              >
                "Dreams are not what you see in sleep; they are things that do not let you sleep."
                <footer className="text-sm mt-2">- Dr. Abdul Kalam</footer>
              </blockquote>
            </motion.div>

            {/* Values Container */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Lightbulb className="text-yellow-500 w-14 h-14 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-blue-500">Our Values</h3>
              <ul
                className="text-gray-700 space-y-2 text-center"
                style={{ fontFamily: "Poppins", fontSize: "1.5rem" }}
              >
                <li>
                  <Compass className="inline-block text-blue-500 w-5 h-5 mr-2" />
                  Practical Application
                </li>
                <li>
                  <Book className="inline-block text-green-500 w-5 h-5 mr-2" />
                  Real-World Exposure
                </li>
                <li>
                  <GraduationCap className="inline-block text-purple-500 w-5 h-5 mr-2" />
                  Enhancing Academic Learning
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Left Side Animated Icons */}
      <motion.div
        className="absolute left-4 top-1/4 transform -translate-y-1/4"
        animate={{ x: [-20, 20, -20] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Brain className="text-purple-600 w-12 h-12" />
      </motion.div>

      {/* Right Side Animated Icons */}
      <motion.div
        className="absolute right-4 top-1/4 transform -translate-y-1/4"
        animate={{ x: [20, -20, 20] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Rocket className="text-blue-500 w-12 h-12" />
      </motion.div>

      {/* Floating Cloud Icon */}
      <motion.div
        className="absolute right-8 bottom-4"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Cloud className="text-gray-500 w-12 h-12" />
      </motion.div>
    </section>
  );
}