// import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import error from './404.png';

const Error = (props) => {
  const { errors } = props;

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 h-screen my-10'>
      <div className="flex flex-col justify-center items-start px-20">
        <p className="text-red-400 font-semibold text-lg">{errors}</p>
        <p className="font-bold text-5xl">
          Whoops! This is not <br />
          what you were looking
          <br />
          for
        </p>
        <p className="text-lg font-medium">
          but you just found the sock we&apos;d lost, thanks. <br />
          Try your luck by going back to the <Link to='/' className="list-none">Home page</Link>
        </p>
      </div>
      <div>
        <img src={error} alt='error Message' />
      </div>
    </div>
  );
};

Error.propTypes = {
  errors: PropTypes.string.isRequired,
};

export default Error;