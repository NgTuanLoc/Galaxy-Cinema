import styled from 'styled-components';
import { Link } from 'react-router-dom';

import img from '../assets/images/not-found.svg';

const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>Error</h3>
        <p>Error</p>
        <Link to="/">Home</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }

  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

export default Error;
