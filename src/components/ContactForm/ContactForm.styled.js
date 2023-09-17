import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 500px;
  padding: 16px;
  gap: 20px;
  flex-wrap: wrap;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  label {
    width: 400px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 4px 5px;
  }

  input[type='text'],
  input[type='tel'] {
    height: 25px;
    padding: 4px;
    width: 300px;
    border-radius: 5px;
  }

  button[type='submit'] {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button[type='submit']:hover {
    background-color: #0056b3;
  }
`;
