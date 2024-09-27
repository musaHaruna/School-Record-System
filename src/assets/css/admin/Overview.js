import styled from "styled-components";

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  p {
    font-size: 14px;
  }

  h5,
  p,
  h4 {
    margin: 0.5rem 0;
    line-height: 1.3;
  }

  .personal-details-container {
    border: 1px solid #1e1e1e;
    border-radius: 15px;
    padding: 1rem;
  }

  .personal-details-container div {
    margin: 1rem 0;
  }
  .personal-details-container div h5 {
    margin: 0;
  }
  .personal-details-container div p {
    font-size: 14px;
    margin: 0.2rem 0;
  }
  .right-section section {
    margin: 2rem 3rem;
  }

  .left-section section {
    margin: 1.5rem 0;
  }

  .left-section .personal-details-container {
    height: 200px;
  }

  .left-section {
    margin: 2rem 0;
  }
`;

export default Wrapper;
