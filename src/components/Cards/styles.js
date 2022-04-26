import styled from "styled-components"
import { keyframes } from "styled-components"


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

          animation: 2s animationCard;

          &:hover{  
          box-shadow: 0 0 20px 1px #ff577f;
    }

          @keyframes animationCard {
            10%{
              height: 48px;
              width: 10%;
                
            }

            100%{
              width: 100%;
            }
          }

          h2{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-size: 16px;
            color: #f8f9fa;
          }

          span{
            color: #868E96;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
          }

`