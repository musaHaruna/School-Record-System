import styled from "styled-components";

const Wrapper = styled.article`
  padding: 1rem;
  background-color: #fff;
  border-radius: 15px;
  margin-top: -2rem;

  .admin-dashboard .teachers-page .admin-dashboard-heading {
    margin-bottom: 1rem;
  }

  .banner-bg {
    width: 100%;
    height: 100px;
    background-color: #4a3aff;
    border-radius: 15px;
  }

  .profile-summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .profile-info {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }

  .profile-info div h2,
  p {
    margin: 0;
  }

  .profile-info div p {
    font-size: 12px;
  }
  .profile-img {
    width: 100px;
    margin-top: -3rem;
    border-radius: 50%;
    /* border: 2px solid #fff; */
  }

  .profile-details {
    margin: 4rem 0;
  }

  .tab-btn h4 {
    color: rgba(33, 33, 33, 0.6);
    font: 18px;
    cursor: pointer;
    font-weight: 500;
    margin: 0;
  }

  .tabs {
    display: flex;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid rgba(33, 33, 33, 0.6);
  }

  .tab-btn.active h4 {
    color: #4a3aff;
    border-bottom: 2px solid #4a3aff;
    padding-bottom: 3px;
  }

  .import-btn {
    background-color: #ebeafb;

    color: #4a3aff;
    padding: 0.4rem 1rem;
    border: none;
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #4a3aff;
    gap: 0.3rem;
  }
`;

export default Wrapper;
