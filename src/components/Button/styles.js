import styled from "styled-components";

export const Container = styled.button`
    background: #212529;
    color: #f8f9fa;
    height: 32px;
    border-radius: 4px;
    border: none;
    margin-top: 12px;
    width: 56px;
    transition: 0.5s;
    cursor: pointer;

    &:hover{
        box-shadow: 10px 0 20px 1px #212529;
    }
`;