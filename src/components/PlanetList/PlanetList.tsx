import React from 'react';
import PlanetCard from '../PlanetCard/PlanetCard';

type Props = {
  planets: Planet[];
};

const PlanetList: React.FC<Props> = ({ planets }) => {
  return (
    <>
      <div className="PlanetCard">
        {planets.map(planet => (
          <PlanetCard key={planet.id} planet={planet} />
        ))}

      </div>

    </>
  );
};

export default PlanetList;
