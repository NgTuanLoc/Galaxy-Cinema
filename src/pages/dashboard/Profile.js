import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import { FormRow } from '../../components';
import styled from 'styled-components';

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
    const { name, email, lastName, location } = userData;

    if (!name || !email || !lastName || !location) {
      toast.error('Please Fill Out All Fields');
      return;
    }
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
        </div>
        <div className="form-center">
          <FormRow
            type="text"
            name="last name"
            value={userData.lastName}
            handleChange={handleChange}
          />
        </div>
        <div className="form-center">
          <FormRow type="email" name="email" value={userData.email} handleChange={handleChange} />
        </div>
        <div className="form-center">
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
        </div>
        <button type="button" className="btn btn-block" disabled={isLoading}>
          {isLoading ? 'Please Wait ...' : 'Save Changes'}
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Profile;
