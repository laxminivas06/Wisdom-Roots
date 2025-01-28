import { motion } from 'framer-motion';
import { Container } from './ui/container';
import { Quote } from 'lucide-react';

const quotations = [
  {
    quote: "The best way to predict the future is to create it.",
    author: "Laxmi Nivas Morishetty",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "M Manikanta",
  },
];

export function Vision() {
  return (
    <section id="vision" className="py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Here are some inspiring quotations from our founders:
          </p>
        </motion.div>
        <div className="space-y-12">
          {quotations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-2xl text-gray-700 dark:text-gray-300 flex flex-col items-center"
            >
              <Quote className="w-10 h-10 text-purple-600 mb-4" />
              <p className="italic text-3xl mb-4 text-center">“{item.quote}”</p>
              <p className="text-xl font-semibold">- {item.author}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}