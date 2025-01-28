import { useState } from 'react';
import { Hero } from './components/hero';
import { Navigation } from './components/navigation';
import { About } from './components/about';
import { Skills } from './components/skills';
import { Team } from './components/team';
import { Mentors } from './components/mentors';
import { Contact } from './components/contact';
import { Achievements } from './components/achievements';
import { PlanOfAction } from './components/planOfAction';

function App() {
  const [activeSection, setActiveSection] = useState('main'); // 'main', 'team', 'mentors', 'planOfAction', 'achievements', 'contact'

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation setActiveSection={setActiveSection} />

      {/* Main Interface */}
      {activeSection === 'main' && (
        <>
          <Hero />
          <About />
          <Skills />
          <Contact />
        </>
      )}

      {/* Team Section */}
      {activeSection === 'team' && (
        <div className="min-h-screen bg-white">
          <button
            onClick={() => setActiveSection('main')}
            className="absolute top-16 left-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
          >
            Back
          </button>
          <Team />
          <Contact />
        </div>
      )}

      {/* Mentors Section */}
      {activeSection === 'mentors' && (
        <div className="min-h-screen bg-white">
          <button
            onClick={() => setActiveSection('main')}
            className="absolute top-16 left-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
          >
            Back
          </button>
          <Mentors />
          <Contact />
        </div>
      )}

      {/* Achievements Section */}
      {activeSection === 'achievements' && (
        <div className="min-h-screen bg-white">
          <button
            onClick={() => setActiveSection('main')}
            className="absolute top-16 left-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
          >
            Back
          </button>
          <Achievements />
          <Contact />
        </div>
      )}

      {/* Plan of Action Section */}
      {activeSection === 'planOfAction' && (
        <div className="min-h-screen bg-white">
          <button
            onClick={() => setActiveSection('main')}
            className="absolute top-16 left-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
          >
            Back
          </button>
          <PlanOfAction />
          <Contact />
        </div>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <div className="min-h-screen bg-white">
          <button
            onClick={() => setActiveSection('main')}
            className="absolute top-16 left-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
          >
            Back
          </button>
          <Contact />
        </div>
      )}
    </main>
  );
}

export default App;
