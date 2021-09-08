import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../redux/details';
import capFirst from '../../utilities';

const Details = (props) => {
  const { url } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(url));
  }, []);

  const details = useSelector((state) => state.details);

  const populate = (data) => Object.entries(data).map((pair) => {
    if (pair[1] === null) return null;

    if (pair[0] === 'name') {
      return (
        <div key={pair[0]} className="details-item">
          <h3>
            <i className="fas fa-dragon" />
            {capFirst(pair[1])}
          </h3>
        </div>
      );
    }

    if (!['index', 'url'].includes(pair[0])) {
      return (
        <div key={pair[0]} className={`details-item ${['array', 'object'].includes(typeof pair[1]) || ['desc'].includes(pair[0]) ? 'border' : 'row'}`}>
          {Number.isNaN(Number(pair[0])) ? <h3>{capFirst(pair[0].replace('_', ' '))}</h3> : null}
          {['string', 'number'].includes(typeof pair[1]) ? <p className={pair[1].length > 10 ? '' : 'details-item-value'}>{pair[1]}</p> : populate(pair[1])}
        </div>
      );
    }

    return null;
  });

  return (
    <div className="details">
      {populate(details)}
    </div>
  );
};

Details.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Details;
