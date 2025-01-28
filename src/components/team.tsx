import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/container';
import { Instagram, Linkedin,  Mail, Phone } from 'lucide-react';

// Team Data
const team = [
  {
    name: 'Laxmi Nivas Morishetty',
    role: 'Founder',
    image: 'https://i.postimg.cc/BbPXftTD/temp-Image-Cqq-Dp-J.avif',
    bio: '"Visionary leader with a passion for education technology"',
    about:'I am Laxmi Nivas Morishetty, an entrepreneur and tech enthusiast focused on bridging the gap between education, technology, and sustainability. After completing my schooling at Nagarjuna High School in 2021 and my intermediate studies at Little Flower Junior College with 94% in 2023, I’m  pursuing a B. Tech in Computer Science Engineering with a specialization in Cybersecurity at Sphoorthy Engineering College. I founded platforms such as Padma Tutorials, Smart and Light Innovation, Nivas Edits, Tech & Mech, and Wisdom Roots, with a focus on education, innovation, and technology. These platforms help students ranging from class 6 to B-Tech and provide guidance in both offline and online formats. I also created Laxmi Groups in 2023 to unify my ventures. Inspired by leaders like Alak Pandey, Elon Musk, and Dr. Abdul Kalam, I continuously evolve through boot camps and projects in technology and personal development. Currently, I’m working on impactful projects like HelloDoctor, HELP, VID, and Swasthya, with a vision to create practical solutions that make a lasting difference. My goal is not only personal growth but also the growth of my team. I believe in fostering a positive, well-mannered environment where everyone is valued and evaluated fairly, especially in challenging times.',
    contact: '+91 9059160424',
    mail:'morishettylaxminivas@gmail.com',
    instagram: 'https://www.instagram.com/laxminivasmorishetty/',
    twitter: 'https://twitter.com/laxmi',
    linkedin: 'https://www.linkedin.com/in/laxmi-nivas-morishetty-02468m/',
  },
  {
    name: 'M Manikanta',
    role: 'Founder',
    image: 'https://i.postimg.cc/m2MyQgvt/temp-Images-PZa3-N.avif',
    bio: '"Champion of modern learning solutions for future generations."',
about: `I’m Mani Kanta, a passionate seeker of knowledge and an aspiring entrepreneur with a strong foundation in web development (UI & UX) and digital marketing. With 3+ years of experience in designing and prompt engineering, I’ve developed expertise in the development sector. 
I’ve worked with 50+ clients in the past 7 months, including some with turnovers in the crores. I also developed a mobile application for my schoolmates, which went viral and garnered 25,000 downloads in just 2 weeks. 
As a front-end developer, I’ve completed internships with TCS, Infosys, and Accenture, gaining valuable industry experience. When I’m not coding or designing, I enjoy playing cricket, chess, and exploring the world. 
I'm dedicated to building my own empire, combining my passion for technology and my entrepreneurial spirit.`,
    contact: '+91 9392263051',
    mail:'techstudyinbox@gmail.com',
    instagram: 'https://www.instagram.com/hmani_143/',
    twitter: 'https://twitter.com/laxmi',
    linkedin: 'https://www.linkedin.com/in/techboymani/',
  },
  {
    name: 'Chirraiahgari Govardhini Reddy',
    role: 'Head of Executive Department',
    image: 'https://i.postimg.cc/d3DY9KSF/temp-Image-ZBPe-Wh.avif',
    bio: '“Empowering minds through visionary approaches to learning.”',
    about: 'I am Chirraiahgari Govardhini Reddy. I am a young and passionate individual with a deep love for innovation and creation. My journey is fueled by a strong desire to explore both technical and non-technical fields, and I strive to guide and mentor others along the way. With a kind-hearted nature, I am dedicated to helping those around me succeed. I completed my schooling at Jyothi Vidhya Nikethan CBSE School and then pursued my college education at Narayana Junior College. Currently, I am in my second year of B.Tech in Computer Science Engineering, specializing in Data Science. Alongside my academic studies, I am working on various projects related to Python and Natural Language Processing (NLP), constantly expanding my knowledge and skills. I am also passionate about monitoring, mentoring, and providing support to others. With some experience in editing, I am a co-founder at Laxmi Groups, where I contribute to the growth of our ventures. I am driven by my passion for innovation and am committed to shaping a better future through my work. ',
    contact: '+91 7780252246',
    mail:'govardhinireddychirraiahgari@gmail.com',
    instagram: 'https://www.instagram.com/govardhini__reddy_/',
    twitter: 'https://twitter.com/laxmi',
    linkedin: 'https://www.linkedin.com/in/chirraiahgari-govardhini-reddy-67a34a321/',
  },
  {
    name: 'Ankamgari Sheshank Goud',
    role: 'Head of Executive Department',
    image: 'https://i.postimg.cc/TPTL5dxM/temp-Imagefj-K3s2.avif',
    bio: '“Together, we share knowledge to empower every student’s potential.”',
    about: 'Hello! I’m Shashank, a dedicated second-year B.Tech student specializing in Artificial Intelligence at Anurag University. My academic journey began at Nagarjuna High School, where I graduated in 2020, followed by Sri Medha Junior College in 2021. Over the years, I’ve developed a passion for technology, creativity, and problem-solving, which drives me to excel in both academics and personal projects. Beyond my studies, I embrace my entrepreneurial spirit as a dropshipper and designer, combining skills in coding, design, and marketing to bridge the gap between innovation and practical application. I thrive on learning, experimenting, and pushing boundaries, always striving to create solutions that make a positive impact. In my free time, I enjoy reading, listening to music, photography, and design. I draw inspiration from visionaries like Abdul Kalam and entrepreneurs who have shaped the world through their innovation and determination. Through collaboration and continuous learning, I aspire to innovate and contribute to a tech-driven future, bringing ideas to life that inspire change. I am also a co-founder of Laxmi Groups, where I work alongside like-minded individuals to achieve our shared goals. ',
    contact: '+91 7993976247',
    mail:'ankamgarisheshank@gmail.com',
    instagram: 'https://www.instagram.com/_.bunny04._/',
    twitter: 'https://twitter.com/laxmi',
    linkedin: 'https://www.linkedin.com/in/ankamgari-sheshank-0272792a0/'
  },
  {
    name: 'Rithika Nemmaluri',
    role: 'Initiative Executive',
    image: 'https://i.postimg.cc/pXDKm1jj/rithika.png',
    bio: '“Inspiring progress by blending tradition with cutting-edge technology.”',
    about:'Hi, I’m Rithika, a B.Tech second-year student at Sphoorthy Engineering College. I’m someone who loves exploring life in different ways—whether it’s watching K-dramas, reading novels (my favorite is Twisted Love—I can’t wait for the movie!), or dancing to my favorite beats. I enjoy going out with my friends, having fun, and experimenting with different styles through fashion. I’ve also been a coordinator for several events, which has helped me improve my speaking skills and connect with people effortlessly. I believe in staying productive, being creative, and making a positive impact on the community in any way I can!',
    contact: '+91 8522943214',
    mail:'nemmaluririthika080606@gmail.com',
    instagram: 'https://www.instagram.com/riithikaaaa.__/',
    twitter: 'https://twitter.com/laxmi',
    linkedin: 'https://www.linkedin.com/in/rithika-nemmaluri-0a193328b/',
  },
  {
    name: 'K Soma Adithya',
    role: 'Initiative Executive',
    image: 'https://i.postimg.cc/MGkk9HTN/temp-Image-OGFkh-W.avif',
    bio: '“Advocate for accessible, technology-driven education for all.”',
    about:'heyyy people!!! my self k.soma adithya, a Btech 2nd year student at Sphoorthy Engineering College, i usually kill time time being at gym or play badminton cause i don’t have a mobile phone and watch all kind of movies and series as slave of tfi… apart from that i’m very serious in the work i’ve assigned and like to complete the tasks which i’ve given efficiently and produce the results up to the mark. i think i can fit myself in any team and the line of work and i’ll be a good helping hand can be good pillar in the team… i’m not much the talker cause i still need to fix my communication skills and i’ll develop myself by the time being',
    contact: '+91 7093643784',
    mail:'adithyasoma09@gmail.com',
    instagram: 'https://www.instagram.com/oreyyyyy_adithyaaaaa/',
    twitter: 'https://twitter.com/laxmi',
    linkedin: 'https://linkedin.com/in/laxmi',
  },
  {
    name: 'K Jagan mohan Reddy',
    role: 'Co- Initiative Executive',
    image: 'https://i.postimg.cc/cJSxJ22g/jagan.png',
    bio: '“Dedicated to advancing education through transformative tech solutions.”',
    about: 'Hi, I’m Kontham Jagan Mohan Reddy, a second-year B.Tech student and a passionate seeker of knowledge. With a growing expertise in front-end development (HTML, CSS, JavaScript), I’m on a journey to expand my technical skills while constantly challenging myself to learn more. I firmly believe in continuous growth and self-improvement. Three to Four years from now, I envision myself with a more advanced skill set, greater experience, and a well-rounded personality that reflects my dedication to balancing life and work. Beyond academics, I find joy in movies and cricket, which help me stay energized and connected. My ultimate goal is to make my parents proud through my achievements and contributions to the field I pursue.',
    contact: '+91 8050453043',
    mail:'konthamjaganmohanreddy@gmail.com',
    instagram: 'https://www.instagram.com/11_jagan_/',
    twitter: 'https://twitter.com/laxmi',
    linkedin: 'https://www.linkedin.com/in/jagan-mohan-reddy-kontham-445250293/',
  },
  {
    name: 'M Saahil',
    role: 'Co- Initiative Executive',
    image: 'https://i.pinimg.com/474x/8e/a9/c5/8ea9c5c30b0829b43d1310401c3dd4d3.jpg',
    bio: '“Driven by a mission to make learning smarter and more accessible.”',
    about: 'Hi, I\'m Saahil  I’m in my 2nd year of B.Tech at Spoorthy Engineering College. Nothing special about me, just a dark memer. In my life, sports Taekwondo, and NCC have had a significant impact, providing me with valuable opportunities. Watching anime is part of my daily routine, and arts and manga deeply inspire me. I admire the effort and passion artists put into their work. I\’m inspired by Sword Art Online because of its immersive virtual reality concept, thrilling action, and emotional depth. The way the show explores the intersection of technology and human connection really resonates with me. I have grown from NES and GBA retro gaming to the evolution of PS5, and the progress over the years has been impactful TATAKAE ',
    contact: '+91 9989250582',
    mail:'m.saahildbz12@gmail.com',
    instagram: 'https://www.instagram.com/saahilll.m/',
    twitter: 'https://twitter.com/laxmi',
    linkedin: 'https://linkedin.com/in/laxmi',
  },
  {
    name: 'P Amulya Reddy',
    role: 'Co-Initiative Executive',
    image: 'https://i.postimg.cc/85t0gzp1/temp-Image95w-Ku-E.avif',
    bio: 'Tech innovator focused on creating immersive learning experiences',
    about: 'Hi, I’m Amulya Reddy. I am pursuing my 2yr B.Tech in Keshav Memorial College of Engineering. I\'m passionate about finding meaning in my personal growth and I do believe in continuous learning. For me, life is about learning, connections, and contributing to something. I look for great opportunities which help me to grow personally and professionally.',
    contact: '+91  9346079081',
    mail:'amulyareddyp05@gmail.com',
    instagram: 'https://www.instagram.com/amxlyx_reddy_05/',
    twitter: 'https://twitter.com/laxmi',
    linkedin: 'https://linkedin.com/in/laxmi',
  },
  {
    name: 'Kaushik Singh Thakur',
    role: 'Co-Initiative Executive',
    image: 'https://i.postimg.cc/NFbKKY2w/koushik.png',
    bio: '  “Guiding education into the future with innovation and purpose.”',
    about: `YOO, I'm Thakur Kaushik Singh, a Second year B.Tech Student of Cyber security at Sphoorthy Engineering College, who is just a street smart guy and having a Good tech knowledge but not much in the academic one :) I'm very much interested into this current GenZ technology. I am good at Robotics, Cyber security, Photography, Video & Cinematography, Video editing. I'm a huge fan of Games. I'm also a retired PUBG MOBILE eSports player who experienced tiers like PMCO South Asia Quarters back in 2019. I play Valorant frequently and in Real Life sports I play Basketball, badminton etc. Where comes to my interest, after joining B.Tech are working on virtual things and learn everything through practical way not by all those book theory, and I like to teach and learn all the practical technology things. I like to motivate people around me to learn more technical skills and explore the outer world which is other than the basic life. Eat, Learn, Play, Travel`,
    contact: '+91 9553192446',
    mail:'thakurkaushiksingh31@gmail.com',
    instagram: 'https://www.instagram.com/kaushiksingh_31/',
    twitter: 'https://twitter.com/laxmi',
    linkedin: 'https://www.linkedin.com/in/kaushik-singh-thakur-b53b3a309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Ankamgari Sharanya Goud',
    role: 'Social Media Executive',
    image: 'https://i.postimg.cc/d1jKkFJX/temp-Imagetjs-H41.avif',
    bio: '“Strategists who turn trends into powerful engagement stories.”',
    instagram: 'https://www.instagram.com/shharanyaa_/',
    about:'Sharanya Ankamgari, a 12th-grade student at Little Flower Junior College. I am a passionate and creative individual with a strong interest in acting, bringing enthusiasm and dedication to every opportunity. I also excel in social media management, showcasing strategic thinking and effective communication skills. As a proud Telugu native, I strive to combine cultural values with professional growth.',
    contact: '+91 7993242759',
    mail:'sharanyaankamgari@gmail.com',
    twitter: 'https://twitter.com/laxmi',
    linkedin: 'https://www.linkedin.com/in/sharanya-ankamgari-59ab55337/',
  },
];

export function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section id="team" className="py-24 bg-white">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Our Team
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Meet the passionate individuals behind Wisdom Roots
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden relative group"
            >
              {/* Image */}
              <motion.div className="relative group-hover:opacity-70 transition-opacity duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 as number }}
                  className="absolute inset-0 bg-purple-600 bg-opacity-90 text-white p-4 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  
                  <div className="mt-4">
                    <button
                      onClick={() => openModal(member)}
                      className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
                    >
                      Know More
                    </button>
                  </div>
                </motion.div>
              </motion.div>

              {/* Content Below Image */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-purple-600 mb-2">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                {/* Social Media Links */}
                <div className="flex space-x-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-600"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-600"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-48 h-48 rounded-full mb-6 md:mb-0 md:mr-6"
              />
              <div>
                <h3 className="text-2xl font-bold" style={{ fontFamily: "Poppins", fontSize:"30px" }}>{selectedMember.name}</h3>
                <p className="text-purple-600" style={{ fontFamily: "Merriweather", fontSize:"20px" }}>{selectedMember.role}</p>
                <p className="mt-4 text-gray-700" style={{ fontFamily: "Poppins", fontSize:"20px" }}>{selectedMember.about}</p>
                <div className="mt-4 flex space-x-4">
                  {/* Contact Icon */}
                  <a
                    href={`tel:${selectedMember.contact}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-600"
                  >
                    <Phone className="w-6 h-6" />
                  </a>
                  {/* Mail Icon */}
                  <a
                    href={`mailto:${selectedMember.mail}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-600"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}