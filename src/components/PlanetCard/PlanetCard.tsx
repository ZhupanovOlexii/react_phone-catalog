import React from 'react';
import './PlanetCard.scss';
// import PlanetDetails from '../PlanetDetails/PlanetDetails';

type Props = {
  planet: Planet;
};

const PlanetCard: React.FC<Props> = ({ planet }) => {
  //   const [info, setInfo] = useState('');

  // const getDetailInfo = (planet: Planet) => {
  //      setInfo(planet.description)
  // };

  return (
    <>

      <div className="PlanetCard__list">
        <div className="PlanetCard__info">
          <div className="PlanetCard__description">
            <p className="PlanetCard__title">
              Name
              {' '}
            </p>
            <p className="PlanetCard__value">
              {planet.name}
            </p>
          </div>

          <div className="PlanetCard__description">
            <p className="PlanetCard__title">
              Id
              {' '}
            </p>
            <p className="PlanetCard__value">
              {planet.id}
            </p>
          </div>

          <div className="PlanetCard__description">
            <p className="PlanetCard__title">
              Radius
              {' '}

            </p>
            <p className="PlanetCard__value">
              {planet.equatorialRadius.value}
              {planet.equatorialRadius.unit}
            </p>
          </div>
          <div className="PlanetCard__description">
            <p className="PlanetCard__title">
              Gravity
              {' '}
            </p>
            <p className="PlanetCard__value">
              {planet.surfaceGravity.value}
              {planet.surfaceGravity.unit}
            </p>
          </div>
          <div className="PlanetCard__description">
            <p className="PlanetCard__title">
              moons
              {' '}
            </p>
            <p className="PlanetCard__value">
              {planet.moons?.count}
            </p>
          </div>

        </div>

        <div className="PlanetCard__button">
          <button
            className="PlanetCard__button--info"
            type="button"
          >
            More info
          </button>
        </div>

        {/* <PlanetDetails info={info}/> */}
      </div>

    </>
  );
};

export default PlanetCard;
