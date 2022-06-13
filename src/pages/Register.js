import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import { Logo, FormRow } from '../components';

const initialState = {
  name: '',
  password: '',
  email: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState('second');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { name, password, email, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error('Please fill out all fields');
      return;
    }
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="fullpage">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>

        {/* Name Field */}
        {!values.isMember && (
          <FormRow type="text" name="name" value={values.name} handleChange={handleChange} />
        )}

        {/* Email Field */}
        <FormRow type="email" name="email" value={values.email} handleChange={handleChange} />

        {/* Passwrod Field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block">
          submit
        </button>

        <p>
          {values.isMember ? 'Not a member yet ?' : 'Already a member ?'}

          <button type="button" onClick={toggleMember} className="btn member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.4rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
    margin-left: 1rem;
  }
`;

export default Register;
