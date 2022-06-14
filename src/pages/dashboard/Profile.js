import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { FormRow } from '../../components';
import { updateUser } from '../../features/user/userSlice';

const Profile = () => {
  const { user, isLoading } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user.name || '',
    email: user.email || '',
    lastName: user.lastName || '',
    location: user.location || '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Hello');
    const { name, email, lastName, location } = userData;

    if (!name || !email || !lastName || !location) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    dispatch(updateUser(userData));
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile Page</h3>
        <div className="form-center">
          <FormRow type="text" name="name" value={userData.name} handleChange={handleChange} />

          <FormRow
            type="text"
            name="last name"
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow type="email" name="email" value={userData.email} handleChange={handleChange} />
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? 'Please Wait ...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;

export default Profile;
