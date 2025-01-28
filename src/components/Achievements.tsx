import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/container';
import { FaAward, FaTrophy, FaMedal } from 'react-icons/fa'; // Imported icons for awards

const awards = [
  { title: "Best Startup 2023", description: "This award was given for our exceptional performance and growth in the startup ecosystem.", icon: <FaAward className="text-3xl text-blue-600" /> },
  { title: "10,000 Active Users", description: "Reaching 10,000 active users within a short time frame highlights our product's success and user satisfaction.", icon: <FaTrophy className="text-3xl text-yellow-500" /> },
  { title: "Launched 5 Products", description: "Our team successfully launched five innovative products that changed the way people interact with tech.", icon: <FaMedal className="text-3xl text-purple-600" /> },
];

const photos = [
  { src: "https://media.istockphoto.com/id/1400932923/photo/crystal-star-shape-trophy-against-blue-background.jpg?s=612x612&w=0&k=20&c=-DaH9jOXuYLRLipDQqGCYExLhgW0TgMBOMxFPAgfb1E=", title: "Award Ceremony", detail: "Details about the award ceremony and key moments from the event." },
  { src: "https://blog.velocity.in/wp-content/uploads/2023/05/Blog-Cover-Product-Launch-strategy.jpg", title: "Bundle Launch", detail: "This is a snapshot from our product launch event, showcasing the team and the excitement." },
  { src: "https://as1.ftcdn.net/jpg/03/03/32/62/1000_F_303326243_V6cffVpzBOI2L95CLa4XIbmobK7CpmFB.jpg", title: "Team Celebration", detail: "A memorable moment from our team celebration after hitting a big milestone." },
];

export function Achievements() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [popupImage, setPopupImage] = useState(""); // Added state for image URL

  const handlePhotoClick = (title: string, detail: string, src: string) => {
    setPopupContent(detail);
    setPopupImage(src);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupContent("");
    setPopupImage(""); // Reset image
  };

  return (
    <section id="achievements" className="py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Achievements & Awards
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We're proud of our team's accomplishments and the recognition we've received. Here are some highlights:
          </p>
          <p className="text-lg text-gray-700 font-bold">Tap anywhere to reveal or return the main content</p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-4">Awards and Rewards</h3>
          <div className="space-y-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => {
                  setPopupContent(award.description);
                  setShowPopup(true);
                }}
              >
                {award.icon}
                <p className="text-xl text-gray-700 dark:text-gray-300">{award.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Photo Section */}
        <div>
          <h3 className="text-3xl font-bold mb-4">Our Moments</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-64 object-cover rounded-t-xl cursor-pointer"
                  onClick={() => handlePhotoClick(photo.title, photo.detail, photo.src)}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white text-lg font-bold">
                  {photo.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Popup for Awards and Photos */}
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-gray-200 bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg mx-auto text-center">
              {popupImage && (
                <img
                  src={popupImage}
                  alt="Popup Image"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-2xl font-semibold mb-4">{popupContent}</h3>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <FaAward className="text-2xl text-blue-600" />
                <FaTrophy className="text-2xl text-yellow-500" />
                <FaMedal className="text-2xl text-purple-600" />
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}