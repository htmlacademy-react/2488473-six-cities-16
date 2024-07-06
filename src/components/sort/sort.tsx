import { useState } from 'react';

type TSortTypes = 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first';

function Sort (): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [currentType, setCurrentType] = useState<TSortTypes>('Popular');

  const handleLiClick = (type: TSortTypes) => {
    setOpen(false);
    setCurrentType(type);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" onClick={() => setOpen((state) => !state)} tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen && 'places__options--opened'}`}>
        <li className={`places__option ${currentType === 'Popular' && 'places__option--active'}`} onClick={() => handleLiClick('Popular')} tabIndex={0}>Popular</li>
        <li className={`places__option ${currentType === 'Price: low to high' && 'places__option--active'}`} onClick={() => handleLiClick('Price: low to high')} tabIndex={0}>Price: low to high</li>
        <li className={`places__option ${currentType === 'Price: high to low' && 'places__option--active'}`} onClick={() => handleLiClick('Price: high to low')} tabIndex={0}>Price: high to low</li>
        <li className={`places__option ${currentType === 'Top rated first' && 'places__option--active'}`} onClick={() => handleLiClick('Top rated first')} tabIndex={0}>Top rated first</li>
      </ul>
    </form>
  );
}

export default Sort;
