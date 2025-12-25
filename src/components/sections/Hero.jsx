import { motion } from 'framer-motion';
import { Image } from '../common/Image';
import { Button } from '../common/Button';
import { fadeIn } from '../../constants/animations';

export const Hero = () => (
  <motion.div 
    className="hero"
    initial="hidden"
    animate="visible"
    variants={fadeIn}
  >
    <div className="hero__nav">
      <Button variant="primary">CONTACT</Button>
    </div>
    
    <div className="hero__content">
      <h1 className="hero__title">
        <span className="hero__title-main">HIVE</span>
        <span className="hero__title-outline">FIVE</span>
        <span className="hero__title-sub">MANAGEMENT</span>
      </h1>
      
      <div className="hero__image-wrapper">
        <Image 
          src="/assets/images/yellowCircle.png" 
          alt="Yellow circle" 
          className="hero__circle"
        />

      </div>
      
      <Button variant="primary">ABOUT US</Button>
    </div>
  </motion.div>
);