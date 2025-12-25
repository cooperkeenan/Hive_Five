import { Section } from '../layout/Section';
import { Image } from '../common/Image';
import { scaleIn } from '../../constants/animations';

export const ArtistCard = ({ artist }) => (
  <Section animation={scaleIn} className="artist-card">
    <h3 className="artist-card__name">{artist.name}</h3>
    <div className="artist-card__image-wrapper">
      <Image 
        src={artist.image} 
        alt={artist.name} 
        className="artist-card__image"
      />
    </div>
    <p className="artist-card__description">{artist.description}</p>
  </Section>
);