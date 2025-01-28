import { motion } from 'framer-motion';
import { Container } from './ui/container';
import { useState, useRef } from 'react';
import { FaRocket, FaUsers, FaProjectDiagram, FaChalkboardTeacher, FaClipboardList, FaTools, FaGamepad, FaLevelUpAlt, FaLaptopCode, FaMoneyBillAlt, FaCertificate, FaUserGraduate, FaLightbulb } from "react-icons/fa";

const plans = [
  {
    title: "Personalized Learning Paths",
    description: "Tailored learning experiences to meet individual student needs.",
    icon: <FaRocket size={32} className="text-blue-500" />,
  },
  {
    title: "Hands-On Projects",
    description: "Real-world projects to apply theoretical knowledge.",
    icon: <FaProjectDiagram size={32} className="text-purple-500" />,
  },
  {
    title: "Expert Mentorship",
    description: "Guidance from industry experts and experienced educators.",
    icon: <FaChalkboardTeacher size={32} className="text-green-500" />,
  },
  {
    title: "Collaborative Learning",
    description: "Group activities and peer-to-peer learning opportunities.",
    icon: <FaUsers size={32} className="text-orange-500" />,
  },
  {
    title: "Continuous Assessment",
    description: "Regular evaluations to track progress and provide feedback.",
    icon: <FaClipboardList size={32} className="text-red-500" />,
  },
];

export function PlanOfAction() {
  const [isRevealed, setIsRevealed] = useState(false); // State for revealing content
  const [moved, setMoved] = useState(false); // State to track if containers have moved
  const [tapCount, setTapCount] = useState(0); // Track the number of taps
  const tapTimer = useRef<number | null>(null); // Timer reference to distinguish between single and double tap
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null); // Track the hovered plan

  // Handle tap event (single or double tap)
  const handleTap = () => {
    if (tapCount === 0) {
      setTapCount(1);
      tapTimer.current = window.setTimeout(() => {
        setTapCount(0); // Reset tap count after a short delay
      }, 300); // Timeout to detect double tap
    } else if (tapCount === 1) {
      clearTimeout(tapTimer.current!); // Clear the timeout if it's a double tap
      setTapCount(0);
      setMoved(!moved); // Toggle container movement

      if (!moved) {
        setTimeout(() => {
          setIsRevealed(true); // Reveal the main content after the containers move
        }, 600); // Delay to allow container move animation
      } else {
        setIsRevealed(false); // Hide the main content if moved back
      }
    }
  };

  return (
    <section
      id="plan-of-action"
      className="py-24 bg-white relative"
      onClick={handleTap} // Handle tap event
    >
      <Container>
        {!isRevealed && (
          <div className="absolute top-0 left-0 right-0 text-center z-10">
          
          </div>
        )}

        {/* Title with letter animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent animate__animated animate__fadeInUp">
            Plan of Action
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our comprehensive plan of action ensures that students receive the best education and training to excel in their careers.
          </p>
          <p className="text-lg text-gray-700 font-bold"> Double Tap anywhere to reveal or return the main content</p>
        </motion.div>

        {/* Main content section */}
        {isRevealed && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-blue-600">Our Detailed Plan of Action</h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg">
              At Wisdom Roots, we are committed to revolutionizing education by providing students with an interactive and engaging learning experience that bridges the gap between theoretical knowledge and practical application. Here’s a comprehensive overview of our approach:
            </p>
            <div className="text-left text-gray-800 space-y-8">
              <ol className="list-none space-y-6">
                <li className="flex items-start space-x-4">
                  <FaTools className="text-blue-500 text-3xl mt-1" />
                  <div>
                    <strong className="text-lg font-semibold text-blue-600">Hands-On Learning Sessions</strong>
                    <p className="text-gray-600 mt-2 text-lg font-bold">
                      • We organize interactive workshops and hands-on sessions for students from class 6 to 12, ensuring they gain practical exposure to the concepts they learn.
                      <br />• These sessions are designed to build real-world skills, enabling students to connect their classroom knowledge with tangible applications.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <FaGamepad className="text-purple-500 text-3xl mt-1" />
                  <div>
                    <strong className="text-lg font-semibold text-purple-600">Gamified and Engaging Curriculum</strong>
                    <p className="text-gray-600 mt-2 text-lg font-bold">
                      • Learning at Wisdom Roots is a fun and immersive experience. Our courses are structured with game-like elements, including:
                      <br />• Level-based progressions.
                      <br />• Rewards, prizes, and certificates at each milestone.
                      <br />• Activities that encourage creativity and problem-solving.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <FaLevelUpAlt className="text-green-500 text-3xl mt-1" />
                  <div>
                    <strong className="text-lg font-semibold text-green-600">Progressive Advancement Through Levels</strong>
                    <p className="text-gray-600 mt-2 text-lg font-bold">
                      • Our courses are divided into five levels, gradually increasing in complexity as students advance:
                      <br />• Level 1 focuses on fundamentals, ensuring students have a strong foundation.
                      <br />• Subsequent levels introduce advanced topics, real-world projects, and challenges that refine their skills.
                      <br />• Each level is followed by a test or practical task to evaluate their understanding and growth.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <FaChalkboardTeacher className="text-orange-500 text-3xl mt-1" />
                  <div>
                    <strong className="text-lg font-semibold text-orange-600">Bridging Theory and Practice</strong>
                    <p className="text-gray-600 mt-2 text-lg font-bold">
                      • We emphasize practical knowledge over rote learning, preparing students to apply their skills in real-world scenarios.
                      <br />• By integrating interactive projects, team collaborations, and problem-solving exercises, we ensure that every student develops the confidence to succeed.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <FaLaptopCode className="text-teal-500 text-3xl mt-1" />
                  <div>
                    <strong className="text-lg font-semibold text-teal-600">Career-Focused Skill Development</strong>
                    <p className="text-gray-600 mt-2 text-lg font-bold">
                      • Our curriculum is tailored to equip students with career-relevant skills, such as:
                      <br />• Coding and Programming (Python, C, Scratch).
                      <br />• Robotics and Artificial Intelligence.
                      <br />• Front-End Web Development (HTML, CSS, and design techniques).
                      <br />• Microsoft Office Tools (Excel, Word, PowerPoint).
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <FaMoneyBillAlt className="text-yellow-500 text-3xl mt-1" />
                  <div>
                    <strong className="text-lg font-semibold text-yellow-600">Affordable Education</strong>
                    <p className="text-gray-600 mt-2 text-lg font-bold">
                      • Wisdom Roots is committed to ensuring quality education remains accessible to all students. Our courses are designed to provide maximum value at an affordable price.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <FaProjectDiagram className="text-indigo-500 text-3xl mt-1" />
                  <div>
                    <strong className="text-lg font-semibold text-indigo-600">Practical Exposure with Real-Life Applications</strong>
                    <p className="text-gray-600 mt-2 text-lg font-bold">
                      • Students get opportunities to work on:
                      <br />• Projects that solve real-world problems.
                      <br />• Case studies that mimic industry scenarios.
                      <br />• Collaborative activities to develop teamwork and communication skills.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <FaCertificate className="text-red-500 text-3xl mt-1" />
                  <div>
                    <strong className="text-lg font-semibold text-red-600">Continuous Tracking and Certifications</strong>
                    <p className="text-gray-600 mt-2 text-lg font-bold">
                      • We provide performance tracking tools to monitor student progress, offering personalized feedback to help them improve.
                      <br />• Upon completing all five levels, students receive a certificate of achievement that showcases their skills and knowledge.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <FaUserGraduate className="text-pink-500 text-3xl mt-1" />
                  <div>
                    <strong className="text-lg font-semibold text-pink-600">Bridging the Skill Gap</strong>
                    <p className="text-gray-600 mt-2 text-lg font-bold">
                      • By focusing on 21st-century skills, we prepare students to meet the challenges of a technology-driven world.
                      <br />• Our programs aim to build digital literacy, critical thinking, and problem-solving abilities from a young age.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <FaLightbulb className="text-gray-500 text-3xl mt-1" />
                  <div>
                    <strong className="text-lg font-semibold text-gray-600">Cultivating a Growth Mindset</strong>
                    <p className="text-gray-600 mt-2 text-lg font-bold">
                      • Beyond technical skills, Wisdom Roots fosters a culture of lifelong learning, encouraging students to stay curious and adaptable in an ever-changing world.
                      <br />• Through our gamified and interactive approach, we help students develop the mindset needed for innovation and success.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>
        )}

        {/* Plans Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          animate={moved ? { x: '100%' } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setHoveredPlan(index)} // Set hovered plan
              onMouseLeave={() => setHoveredPlan(null)} // Clear hovered plan
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <div className="flex items-center mb-4">
                {plan.icon}
                <h3 className="text-2xl font-semibold ml-4">{plan.title}</h3>
              </div>
              <p className="text-gray-600">{plan.description}</p>
              {hoveredPlan === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-gray-500"
                >
                  <p>Additional detailed content for this plan can go here.</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}