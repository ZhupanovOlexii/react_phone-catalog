import React from 'react';

type Props = {
  info: string;
};

const PlanetDetails: React.FC<Props> = ({ info }) => {
  return (
    <>
      <div className="PlanetCard__details">
        {info}
        hghgh

      </div>

    </>
  );
};

export default PlanetDetails;
