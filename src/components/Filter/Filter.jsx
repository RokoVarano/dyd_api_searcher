import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../redux/categories';

const Filter = () => {
  const searchInput = useRef();
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <input type="search" placeholder="filter" ref={searchInput} />
      <button
        type="button"
        onClick={() => dispatch(getCategories(searchInput.current.value))}
      >
        <i className="fas fa-eye" />
      </button>
    </div>
  );
};

export default Filter;
