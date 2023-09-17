import { styled } from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #f5f5f5;
  }

  span {
    flex: 1;
    font-size: 16px;
    margin-right: 10px;
  }

  button {
    background-color: #ff4b4b;
    color: #fff;
    padding: 5px 10px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #d32f2f;
  }
`;
