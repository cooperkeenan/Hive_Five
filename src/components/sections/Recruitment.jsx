import { Section } from '../layout/Section';
import { Image } from '../common/Image';
import { Button } from '../common/Button';
import { fadeInUp } from '../../constants/animations';

export const Recruitment = () => (
  <Section animation={fadeInUp} className="recruitment">
    <div className="recruitment__image-wrapper">
      <h2 className="recruitment__title">
        WE WANT YOU<br />IN THE <br /> HIVE
      </h2>
      <Image 
        src="/assets/images/stage1.jpg" 
        alt="Stage performance" 
        className="recruitment__image"
      />
    </div>
    <p className="recruitment__text">
      We're always open to discovering new talent. If you're an artist
      with a clear vision, a strong sense of identity, and a desire to
      grow, we'd love to hear from you.
    </p>
    <Button href="#contact" variant="primary">JOIN THE COLLECTIVE</Button>
  </Section>
);