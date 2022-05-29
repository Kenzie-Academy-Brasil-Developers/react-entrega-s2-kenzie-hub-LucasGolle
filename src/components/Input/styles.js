import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  div {
    color: #f8f9fa;
    margin-bottom: 5px;

    span {
      color: #c53030;
    }
  }
`;

export const InputContainer = styled.div`
  background: #343b41;
  border-radius: 4px;
  border: none;
  color: #666360;
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  input {
    background: transparent;
    background-color: #343b41 transparent;
    align-items: center;
    width: 100%;
    color: #f8faf9;
    flex: 1;
    border: 0;
    &textarea {
    background: #343b41 transparent;
    }
    &::placeholder {
      color: #f8faf9; 
      background: #343b41 transparent;
    }
    &:focus{
      color: #f8faf9;
      background: #343b41 transparent;
    }
  }

  


  svg {
    margin-right: 20px;
  }
`;
