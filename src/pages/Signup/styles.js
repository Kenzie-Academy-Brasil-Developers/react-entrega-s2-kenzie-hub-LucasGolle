import styled, { keyframes } from "styled-components"
import SignupImage from "../../assets/signup.jpg"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`
export const Background = styled.div`
    @media (min-width: 1024px){
        background: radial-gradient( circle, rgba(10, 30, 50, 0.7) 0%, rgba(10, 30, 50, 0.7) 100%), url(${SignupImage}) no-repeat;
        flex: 1;
        background-size: cover;
        background-position-y: 30%;
        display: flex;
        flex-flow: column;
        align-items: center;
    }

`

export const Content = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 700px;
`

const appearFromRight = keyframes`
    from{
        opacity: 0;
        transform: translateX(50px)
    }

    to{
        opacity: 1;
        transform: translateX(0px)
    }

`

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${appearFromRight} 1s;

    form {
        margin: 40px 0;
        width: 340px;

        text-align: center;
        background-color: #212529;
        padding: 42px 22px;
       
        h2{
            margin-bottom: 22px;
            color: #f8f9fa;
        }

        > div{
            margin-top: 16px;
        }

        p{
            margin-top: 8px;
            color: #868e96;
            font-size: 12px;
        }
        a{
            font-weight: bold;
            color: var(--orange);
        }
    }
    `

export const Button = styled.button`
background: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#0c0d0d")};
color: ${(props) => (props.whiteSchema ? "#0c0d0d" : "#f5f5f5")};
height: 45px;
border-radius: 8px;
border: 2px solid var(--black);
font-family: 'Roboto Mono', monospace;
margin-top: 16px;
width: 100%;
transition: 0.5s;
:hover{
    border: 2px solid #c85311;
}
`

export const NavBar = styled.div`
    display: flex;
    align-items: center;
    button{
        margin-left: 170px;
        background: #212529;
        padding: 0px,16px,0px,16px;
        height: 32px;
        width: 67px;
        border: none;
        border-radius: 4px;
        color: #f8f9fa;
    }
`

export const ContainerSelect = styled.div`
    display: flex;
    flex-direction: column;
`