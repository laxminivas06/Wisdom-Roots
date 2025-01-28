import { motion } from 'framer-motion';
import { Container } from './container';

const AnimatedContainer = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        {children}
      </Container>
    </motion.div>
  );
};

export default AnimatedContainer;