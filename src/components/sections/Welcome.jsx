import { Section } from '../layout/Section';
import { fadeInUp } from '../../constants/animations';

export const Welcome = () => (
  <Section animation={fadeInUp} className="welcome">
    <h2 className="welcome__title">
      WELCOME TO<br />THE HIVE...
    </h2>
    <p className="welcome__text">
      We are an artist-led management company focused on developing, supporting,
      and elevating emerging talent across a diverse range of sounds and
      disciplines
    </p>
  </Section>
);