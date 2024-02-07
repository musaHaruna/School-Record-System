import styled from 'styled-components'

const Wrapper = styled.article`
  .teachers-profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
  }

  .teachers-img {
    width: 70px;
  }

  .teachers-img img {
    width: 100%;
    display: block;
  }

  .teachers-profile .content p {
    font-size: 12px;
    margin: 3px 0;
    color: rgba(33, 33, 33, 0.6);
  }

  .teachers-profile .content h5 {
    color: #101928;
    margin: 0;
  }

  .school-id span {
    color: #4a3aff;
  }
`

export default Wrapper
