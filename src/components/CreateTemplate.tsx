import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { UserContext } from '../contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';

export const CreateTemplate = () => {
  const { infoAlert, setInfoAlert, setDetails } = useContext(UserContext);
  const history = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      key: '',
    },
    onSubmit: (values) => {
      setDetails(values);
      history('/menu');
    },
  });

  return (
    <>
      <h1>Add project details</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor=''>Name</label>
          <input
            name='name'
            id='name'
            type='text'
            placeholder='Enter a project name'
            onChange={formik.handleChange}
            onBlur={formik.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor=''>Key</label>
          <p onClick={() => setInfoAlert((state) => !state)}>(!)</p>
          {infoAlert && (
            <div>
              Choose a descriptive prefix for your project's issue keys to
              recognize work from this project.
            </div>
          )}
          <input
            name='key'
            id='key'
            type='text'
            placeholder='Key'
            onChange={formik.handleChange}
            onBlur={formik.handleChange}
            required
          />
        </div>
        <button type='submit'>Create project</button>
      </form>
    </>
  );
};
