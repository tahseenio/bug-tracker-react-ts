import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <p>Want to create a bug tracking project?</p>
      <Link to={'/create'}>
        <button>Create Template</button>
      </Link>
    </>
  );
};
