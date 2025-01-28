import { motion } from 'framer-motion';
import { Container } from './ui/container';

const plans = [
  {
    title: "Personalized Learning Paths",
    description: "Tailored learning experiences to meet individual student needs.",
  },
  {
    title: "Hands-On Projects",
    description: "Real-world projects to apply theoretical knowledge.",
  },
  {
    title: "Expert Mentorship",
    description: "Guidance from industry experts and experienced educators.",
  },
  {
    title: "Collaborative Learning",
    description: "Group activities and peer-to-peer learning opportunities.",
  },
  {
    title: "Continuous Assessment",
    description: "Regular evaluations to track progress and provide feedback.",
  },
];

export function PlanOfAction() {
  return (
    <section id="plan-of-action" className="py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Plan of Action
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our comprehensive plan of action ensures that students receive the best education and training to excel in their careers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-gray-600">{plan.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}