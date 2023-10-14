// import React from 'react';
import PropTypes from 'prop-types';

import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Ratings = (props) => {
  let { rating, numRev } = props;

  let stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating >= 1) {
      stars.push(<BsStarFill key={i} />);
      rating--;
    } else if (rating >= 0.5) {
      stars.push(<BsStarHalf key={i} />);
    } else {
      stars.push(<BsStar key={i} />);
    }
  }

  return (
    <div className='flex'>
      <div className="flex px-2">
        {stars.map((star, index) => (
          <span key={index} className="text-[gold]">
            {star}
          </span>
        ))}
      </div>
      <p className='text-lg'>{numRev} reviews</p>
    </div>
  );
};

Ratings.propTypes = {
  rating: PropTypes.number.isRequired,
  numRev: PropTypes.number.isRequired,
};

export default Ratings;