import { CitiesLocations } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TCityName } from '../../types/global';
import { setCurrentCity } from '../../store/rootAction';

type TFilterElement = {
  city: TCityName;
}

function FilterElement ({ city }: TFilterElement): JSX.Element {
  const selectedCity = useAppSelector((state) => state.currentCity.name);

  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(
      setCurrentCity(CitiesLocations.filter((item) => item.name.toLowerCase() === city.toLowerCase())[0])
    );
  };

  return (
    <button className="locations__item" onClick={handleButtonClick} style={{background: 'transparent', border: 'none'}}>
      <a className={`locations__item-link tabs__item ${selectedCity.toLowerCase() === city.toLocaleLowerCase() && 'tabs__item--active'}`} href="#">
        <span>{city}</span>
      </a>
    </button>
  );
}

function Filter (): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CitiesLocations.map((item) => <FilterElement key={item.name} city={item.name} />)}
        </ul>
      </section>
    </div>
  );
}

export default Filter;
