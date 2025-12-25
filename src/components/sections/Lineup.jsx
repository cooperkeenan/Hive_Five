import { Section } from '../layout/Section';
import { ArtistCard } from './ArtistCard';
import { ARTISTS } from '../../constants/content';
import { fadeInUp } from '../../constants/animations';

export const Lineup = () => (
  <Section animation={fadeInUp} className="lineup">
    <h2 className="lineup__title">OUR<br />LINEUP</h2>
    <div className="lineup__artists">
      {ARTISTS.map(artist => (
        <ArtistCard key={artist.name} artist={artist} />
      ))}
    </div>
  </Section>
);