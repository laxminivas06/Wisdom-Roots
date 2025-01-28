import { Hero } from './components/hero';
import { Navigation } from './components/navigation';
import { About } from './components/about';
import { Skills } from './components/skills';
import { Mentors } from './components/mentors';
import { Team } from './components/team';
import { Contact } from './components/contact';
import { Vision } from './components/Vision';
import { Achievements } from './components/Achievements';
import { PlanOfAction } from './components/PlanOfAction';


function App() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Mentors />
      <Team />
      <Vision />
      <Achievements/>
      <PlanOfAction />
      <Contact />

    </main>
  );
}

export default App;