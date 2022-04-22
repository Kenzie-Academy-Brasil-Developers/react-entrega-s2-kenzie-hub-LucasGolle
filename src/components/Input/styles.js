import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  div{
    color: #f8f9fa;
    margin-bottom: 15px;
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
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
      svg{
        color: #c53030;
      }
    `}

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--black);
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 20px;
  }
`;
