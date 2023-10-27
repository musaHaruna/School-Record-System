import styled from 'styled-components'

const Wrapper = styled.article`
  .modal {
    position: absolute;
    z-index: 2;
    top: 420px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 965px;

    border-radius: 10px;
    background-color: #ffffff;
    padding: 1rem;
  }

  .content {
    padding: 1rem;
    overflow-y: scroll;
    height: 500px;
  }

  input {
    display: block;
    width: 100%;
  }

  .personal-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .personal-details div {
    width: 100%;
  }
`
export default Wrapper
