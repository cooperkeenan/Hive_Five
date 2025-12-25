import { Container } from './components/layout/Container';
import { Hero } from './components/sections/Hero';
import { Welcome } from './components/sections/Welcome';
import { Lineup } from './components/sections/Lineup';
import { Recruitment } from './components/sections/Recruitment';
import { Supporters } from './components/sections/Supporters';
import { Contact } from './components/sections/Contact';
import './styles/global.css';

function App() {
  return (
    <Container>
      <Hero />
      <Welcome />
      <Lineup />
      <Recruitment />
      <Supporters />
      <Contact />
    </Container>
  );
}

export default App;