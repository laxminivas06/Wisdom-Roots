import { motion } from 'framer-motion';

interface Skill {
  title: string;
  description: string;
}

interface SkillPopupProps {
  skill: Skill;
  isVisible: boolean;
}

const SkillPopup: React.FC<SkillPopupProps> = ({ skill, isVisible }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-50"
      style={{ top: '100%', left: '50%', transform: 'translateX(-50%)', width: '300px' }}
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{skill.title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{skill.description}</p>
    </motion.div>
  );
};

export default SkillPopup;