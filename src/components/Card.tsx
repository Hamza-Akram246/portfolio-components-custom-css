import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../app/styles/card.css';

interface propsType {
  title: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, img, tags }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // Set the state based on window width
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth >= 640);
      };

      handleResize(); // Initial check
      window.addEventListener('resize', handleResize); // Listen for window resize

      return () => {
        window.removeEventListener('resize', handleResize); // Cleanup on component unmount
      };
    }
  }, []);

  return (
    <div className={`card ${isSmallScreen ? 'card-sm' : ''}`} data-aos="zoom-in-up">
      <div>
        <Image
          className={`card-image ${isSmallScreen ? 'card-image-sm' : ''}`}
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className="card-content">
        <div className="card-title">{title}</div>

        <div>
          {tags.map((el) => (
            <div className="card-tags" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
