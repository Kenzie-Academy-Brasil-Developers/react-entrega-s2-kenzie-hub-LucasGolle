import styled from "styled-components"


export const Container = styled.div`
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          background: #121214;
          height: 48px;
          margin-bottom: 16px;
          align-items: center;
          border-radius: 4px;
          width: 100%;
          cursor: pointer;

          &:hover{
           filter: brightness(0.9);
    }

          h2{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-size: 16px;
            color: #f8f9fa;
          }

          span{
            color: #868e96;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
          }

`