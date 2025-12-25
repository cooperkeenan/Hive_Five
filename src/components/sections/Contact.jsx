import { Section } from '../layout/Section';
import { Button } from '../common/Button';
import { fadeInUp } from '../../constants/animations';

export const Contact = () => (
  <Section animation={fadeInUp} className="contact">
    <h2 className="contact__title">LET'S<br />CHAT!</h2>
    <div className="contact__info">
      <h3 className="contact__subtitle">HIVEFIVE MANAGEMENT</h3>
      <p className="contact__text">
        start your journey in the music industry today
      </p>
      <p className="contact__email">hey@hivefivemgmt.com</p>
      <div className="contact__buttons">
        <Button variant="primary">LINK</Button>
        <Button variant="primary">INSTA</Button>
        <Button variant="primary">EMAIL</Button>
      </div>
    </div>
  </Section>
);