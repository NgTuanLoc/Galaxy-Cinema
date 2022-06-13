import styled from 'styled-components';

import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="Jobster Logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel alias earum molestias
            quidem rerum, consequatur nobis non excepturi vero vitae consectetur magni laboriosam
            illo quibusdam numquam dolor aliquid distinctio sequi?
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="main" className="img main-img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }

  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }

  p {
    color: var(--grey-600);
  }

  .main-img {
    display: none;
  }

  @media only screen and (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
