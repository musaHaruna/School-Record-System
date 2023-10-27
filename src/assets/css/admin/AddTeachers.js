import styled from 'styled-components'

const Wrapper = styled.article`
  .modal {
    position: absolute;
    z-index: 2;
    top: 570px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 96%;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 1rem;
  }

  .modal h3 {
    font-size: 18px;
  }

  .custom-file-label.uploads {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(74, 58, 255, 0.06);
    margin: 0;

    border: dashed 1px;
  }

  .custom-file-label.uploads .import-icon {
    font-size: 40px;
  }

  .custom-file-label.uploads label {
    color: #1e1e1e;
    font-size: 14px;
  }

  .add-staff {
    width: 40%;
    margin: 1rem auto;
  }

  .add-staff button {
    display: block;
    width: 100%;
  }
  .certificates label span {
    color: #4a3aff;
  }
  .content section {
    margin-bottom: 3rem;
  }
  .details {
    margin-bottom: 2rem;
  }
  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .modal-header-container {
    margin: 1rem 0;
  }

  .modal-header h1 {
    font-size: 32px;
    color: #1e1e1e;
  }

  .modal-header .icon {
    padding: 0.3rem;
    font-size: 25px;
    color: #4a3aff;
    background-color: rgba(74, 58, 255, 0.22);
    border-radius: 50%;
  }

  .teacher-avatar {
    font-size: 150px;
    color: #4a3aff;
  }
  .content {
    padding: 1rem;
    overflow-y: scroll;
    height: 500px;
  }

  .update-btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .city,
  .zip-code {
    outline-color: #4a3aff;
  }

  label {
    font-size: 14px;
    font-weight: 600;
  }

  .content section div {
    margin: 1rem 0;
  }

  .content section .personal-details div {
    margin: 0;
  }

  input {
    display: block;
    width: 100%;
    border-radius: 4px;
    border: 0.5px solid #a7a7a7;
    font-size: 14px;
    color: #a7a7a7;
    padding: 0.3rem;
  }

  .content section div input:focus {
    outline-color: #4a3aff;
  }

  .personal-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }
  .select-number div {
    display: flex;
    align-self: flex-start;
    margin: 0;
  }

  .select-number select {
    display: inline-block;
    width: 10%;
    margin: 0;
  }

  .select-number select:focus {
    outline-color: #4a3aff;
  }
  .select-number input {
    margin: 0;
  }

  select {
    display: block;
    width: 100%;
    border-radius: 4px;
    border: 0.5px solid #a7a7a7;
    font-size: 14px;
    color: #a7a7a7;
    padding: 0.3rem;
  }

  .personal-details div {
    width: 100%;
  }
`
export default Wrapper
