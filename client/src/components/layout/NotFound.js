import React, { Fragment } from 'react';

function NotFound() {
  return (
    <Fragment>
      <h1 className='large text-primary'>
        <i className='fas fa-exclamation-triangle' /> Page Not Found
      </h1>
      <p className='lead'>Sorry, Page doesn't exist</p>
    </Fragment>
  );
}

export default NotFound;
