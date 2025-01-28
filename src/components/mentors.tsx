import { motion } from 'framer-motion';
import { Container } from './ui/container';

const mentors = [
  {
    name: 'Dr.Kolavennu Subbarao',
    role: 'Cyber Security Expert',
    image: 'https://i.postimg.cc/wTMcWbWm/temp-Imagebzv8-T8.avif',
    bio: 'M. Tech, Ph.D. with 40+ years of industry experience',
  },
  {
    name: 'Elon Musk',
    role: 'SpaceX Engineer',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/800px-Elon_Musk_Royal_Society_crop.jpg',
    bio: 'Founder of SpaceX and Tesla, Inc.',
  },
  {
    name: 'Sundar Pichai',
    role: 'Cloud Computing Expert',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sundar_Pichai_-_2023_%28cropped%29.jpg/800px-Sundar_Pichai_-_2023_%28cropped%29.jpg',
    bio: 'CEO of Alphabet Inc. and its subsidiary Google LLC',
  },
  {
    name: 'Alakh Pandey',
    role: 'Physics Expert',
    image: 'https://pune.news/wp-content/uploads/2024/01/Physics-Wallah-Alakh-Pandey.webp',
    bio: 'Founder of Physics Wallah',
  },
];

export function Mentors() {
  return (
    <section id="mentors" className="py-24 bg-gray-50">
      <Container>
        {/* Container Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              Meet Our Mentors
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Learn from industry experts who are passionate about sharing their knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden relative group"
              >
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{mentor.name}</h3>
                  <p className="text-purple-600 mb-2">{mentor.role}</p>
                  <p className="text-gray-600 text-sm">{mentor.bio}</p>
                </div>

                {/* Hover Animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-purple-600 bg-opacity-80 text-white p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <h4 className="text-xl font-bold mb-2">Learn More</h4>
                  <p className="text-sm mb-4">
                    {mentor.name} is an industry leader with expertise in {mentor.role}. Explore their journey and experience.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Connect with {mentor.name}
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}