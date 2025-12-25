import { Section } from '../layout/Section';
import { SUPPORTERS } from '../../constants/content';
import { fadeInUp } from '../../constants/animations';

export const Supporters = () => (
  <Section animation={fadeInUp} className="supporters">
    <h2 className="supporters__title">OUR<br />SUPPORTERS</h2>
    <p className="supporters__text">
      This year the Music NextGen Fund has been made possible thanks to
      the generous support from Music Performance Trust Fund
    </p>
    <div className="supporters__logos">
      {SUPPORTERS.map(supporter => (
        <div key={supporter} className="supporters__logo">{supporter}</div>
      ))}
    </div>
  </Section>
);