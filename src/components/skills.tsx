import { motion } from "framer-motion";
import { useState } from "react";
import { Container } from "./ui/container";
import { Code, Brain, Notebook as Robot, Computer, Globe, Rocket, Target, Lightbulb } from "lucide-react";

const skills = [
  {
    title: "Computer Fundamentals",
    description: "Master cloud platforms and services",
    details: "Dive into AWS, Azure, and GCP for cloud-based solutions.",
    icon: Computer,
    image: "https://www.shutterstock.com/shutterstock/photos/2284126663/display_1500/stock-photo-data-science-and-big-data-technology-scientist-computing-analysing-and-visualizing-complex-data-2284126663.jpg", // Replace with actual image link
  },
  {
    title: "AI Tools",
    description: "Learn to leverage AI tools for enhanced productivity",
    details: "Explore machine learning models, data processing tools, and more.",
    icon: Brain,
    image: "https://images.ctfassets.net/lzny33ho1g45/6eeGs9L6ZzNxYackEk5Rgd/3758d4008628254a75b9632a1547229c/free-ai-tools-00-hero.jpg?w=1520&fm=jpg&q=31&fit=thumb&h=760", // Replace with actual image link
  },
  {
    title: "Robotics",
    description: "Hands-on experience with robotics and automation",
    details: "Build and program robots to solve real-world challenges.",
    icon: Robot,
    image: "https://assets.skyfilabs.com/playto/blog-images/robotics-for-beginners-v3.webp", // Replace with actual image link
  },
  {
    title: "Web Development",
    description: "Build modern web applications",
    details: "Learn HTML, CSS, JavaScript, and React for front-end development.",
    icon: Globe,
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg", // Replace with actual image link
  },
  {
    title: "Programming",
    description: "Learn multiple programming languages",
    details: "Master Python, Java, and C++ with hands-on projects.",
    icon: Code,
    image: "https://cdn.prod.website-files.com/5f2b1efb0f881760ffdc5c96/63c12849a1c7e9df64c819fc_programming-languages-shutterstock-1680857539.webp", // Replace with actual image link
  },
  {
    title: "Career Growth",
    description: "Develop professional skills for success",
    details: "Focus on communication, teamwork, and leadership skills.",
    icon: Rocket,
    image: "https://t3.ftcdn.net/jpg/01/08/48/24/360_F_108482452_tBhU0SNq9boBVxCL6dPuq6Rx7krHWGCF.jpg", // Replace with actual image link
  },
  {
    title: "Problem Solving",
    description: "Enhance analytical and logical thinking",
    details: "Tackle puzzles, challenges, and case studies.",
    icon: Target,
    image: "https://www.workitdaily.com/media-library/problem-solving-concept-technique.jpg?id=32029977&width=1200&height=800&quality=85&coordinates=0%2C18%2C0%2C18", // Replace with actual image link
  },
  {
    title: "Innovation",
    description: "Foster creativity and innovative thinking",
    details: "Learn how to generate, test, and implement groundbreaking ideas.",
    icon: Lightbulb,
    image: "https://nasscom.in/sites/default/files/styles/webp/public/event_details_image/innovation-process-1100-520.jpg.webp?itok=MXPYDF_n", // Replace with actual image link
  },
];

export function Skills() {
  // State to track random animation states for each container
  const [animationStates, setAnimationStates] = useState(() =>
    skills.map(() => ({ x: 0, y: 0, rotate: 0 }))
  );

  // Generate random movement and rotation
  const getRandomPosition = () => ({
    x: Math.random() * 200 - 100, // Random x between -100 and 100
    y: Math.random() * 200 - 100, // Random y between -100 and 100
    rotate: Math.random() * 360 - 180, // Random rotation between -180 and 180
  });

  // Handle individual container animation on tap
  const handleTap = (index) => {
    setAnimationStates((prevStates) =>
      prevStates.map((state, i) =>
        i === index ? getRandomPosition() : state // Only animate the tapped container
      )
    );
  };

  // Handle reset animation for all containers
  const handleReset = () => {
    setAnimationStates(skills.map(() => ({ x: 0, y: 0, rotate: 0 }))); // Reset to original position
  };

  return (
    <section
      id="skills"
      className="py-24 bg-white"
      onDoubleClick={handleReset} // Reset on double-tap anywhere
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Our Skills Program
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Develop essential skills for the modern world through our comprehensive programs.
          </p>
          <p className="text-lg text-gray-700 font-bold">Tap on a skills to see the magic unfold!</p> {/* Instructional message */}
         
        </motion.div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="relative group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer overflow-hidden"
              onTap={() => handleTap(index)} // Trigger animation on tap
              animate={{
                x: animationStates[index].x,
                y: animationStates[index].y,
                rotate: animationStates[index].rotate,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <skill.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>

              {/* Display Image inside Container */}
              <img src={skill.image} alt={skill.title} className="w-full h-48 object-cover mt-4 rounded-lg" />

              {/* Hover Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute top-0 left-0 w-full h-full bg-purple-50 p-4 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <h3 className="text-lg font-bold text-purple-600 mb-2">{skill.title}</h3>
                <p className="text-gray-700 text-center">{skill.details}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
       
      </Container>

      <p className="text-lg text-gray-1000 font-bold text-center mb-16 text-size-30px "> Double Tap  to return main</p> {/* Instructional message */}
    </section>
    
  );
}