import { memo, useState } from 'react';
import { useAppDispatch } from '../../hooks';

import { setSort } from '../../store/rootAction';
import { TSortType } from '../../types/global';


function Sort (): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [currentType, setCurrentType] = useState<TSortType>('popular');

  const dispatch = useAppDispatch();

  const handleLiClick = (type: TSortType) => {
    dispatch(setSort(type.toLowerCase()));

    setOpen(false);
    setCurrentType(type);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" onClick={() => setOpen((state) => !state)} tabIndex={0} style={{ marginLeft: 5, textTransform: 'capitalize' }}>
        {currentType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen && 'places__options--opened'}`}>
        <li className={`places__option ${currentType === 'popular' && 'places__option--active'}`} onClick={() => handleLiClick('popular')} tabIndex={0}>Popular</li>
        <li className={`places__option ${currentType === 'price: low to high' && 'places__option--active'}`} onClick={() => handleLiClick('price: low to high')} tabIndex={0}>Price: low to high</li>
        <li className={`places__option ${currentType === 'price: high to low' && 'places__option--active'}`} onClick={() => handleLiClick('price: high to low')} tabIndex={0}>Price: high to low</li>
        <li className={`places__option ${currentType === 'top rated first' && 'places__option--active'}`} onClick={() => handleLiClick('top rated first')} tabIndex={0}>Top rated first</li>
      </ul>
    </form>
  );
}

export default memo(Sort);
