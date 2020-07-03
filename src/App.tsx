// import React, { useState, useEffect } from 'react';
import React, { useState, useMemo } from 'react';

import './App.scss';
import { useHistory, useLocation } from 'react-router-dom';
import planets from './api/data_for_test.json';
import PlanetList from './components/PlanetList/PlanetList';

// import PlanetDetails from './components/PlanetDetails/PlanetDetails';
// import { getPlanets } from './helpers/api';

// type Props = {
//   planets:Planet[];
// }

const App = () => {
  const [query, setQuery] = useState('');
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sortBy = useMemo(() => searchParams.get('sortBy') || '', [searchParams]);
  const sortOrder = useMemo(() => searchParams.get('sortOrder') || '', [searchParams]);
  // const [sortField,setSortField]=useState('name')
  // const isReversed=true;

  const SORT_OPTIONS = ['name', 'equatorialRadius', 'moons'];

  const searchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.value;

    setQuery(target);
  };

  const filteredPlanets = useMemo(() => planets.filter(planet => {
    return (planet.name + planet.atmosphericConstituents.list + planet.id)
      .toLowerCase().includes(query.trim().toLowerCase());
  }), [query]);

  const sortingBy = (sortField: string) => {
    if (sortBy === sortField && sortOrder === 'asc') {
      searchParams.set('sortOrder', 'desc');
    } else {
      searchParams.set('sortOrder', 'asc');
    }

    searchParams.set('sortBy', sortField);
    history.push({
      search: searchParams.toString(),
    });
  };

  useMemo(() => {
    switch (sortOrder) {
      case 'asc':
        switch (sortBy) {
          case 'name':
            filteredPlanets.sort((a, b) => b.name.localeCompare(a.name));
            break;

          case 'equatorialRadius':
            filteredPlanets.sort((a, b) => b.equatorialRadius.value - a.equatorialRadius.value);
            break;

          case 'moons':
            filteredPlanets.sort((a: Planet, b: Planet) => b.moons.count - a.moons.count);
            break;

          default: filteredPlanets.sort((a, b) => b.name.localeCompare(a.name));
        }

        break;
      case 'desc':
        filteredPlanets.reverse();
        break;
      default: filteredPlanets.sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [filteredPlanets, sortBy, sortOrder]);

  return (
    <div className="App">
      <div className="input">
        <input
          type="text-area"
          className="input__value"
          placeholder="what you search"
          onChange={searchQuery}
        />
      </div>
      <div className="button">
        {SORT_OPTIONS.map(sortField => (
          <button
            type="button"
            className="button__sort"
            onClick={() => sortingBy(sortField)}
          >
            {sortField}
          </button>
        ))}
      </div>

      <PlanetList planets={filteredPlanets} />
    </div>
  );
};

export default App;
