import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../redux/details';

const Details = (props) => {
  const { url } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(url));
  }, []);

  const details = useSelector((state) => state.details);

  const populate = (data) => Object.entries(data).map((pair) => (
    <div key={pair[0]}>
      <h2>{pair[0]}</h2>
      {typeof pair[1] === 'string' ? pair[1] : populate(pair[1])}
    </div>
  ));

  return (
    <>
      {populate(details)}
    </>
  );
};

Details.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Details;
