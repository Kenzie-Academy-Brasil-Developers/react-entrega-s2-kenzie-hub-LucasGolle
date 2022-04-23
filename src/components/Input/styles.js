import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  div{
    color: #f8f9fa;
    margin-bottom: 5px;
    span{
      color: #c53030;
    }
  }
`;

export const InputContainer = styled.div`
  background: #343b41;
  border-radius: 4px;
  border: none;
  color: #666360;
  padding: 14px;
  width: 100%;
  display: flex;
  transition: 0.4s;

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 20px;
  }
`;
