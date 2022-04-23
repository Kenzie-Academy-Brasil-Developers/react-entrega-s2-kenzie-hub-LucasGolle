import styled, { keyframes } from "styled-components"
import SignupImage from "../../assets/signup.jpg"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`
export const Background = styled.div`
    max-width: 50vw;
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
        width: 340px;
        height: 92vh;
        
        text-align: center;
        background-color: #212529;
        padding: 42px 22px;
        margin-bottom: 0px;
        
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
            background: #ff577f;
            color: ${(props) => (props.whiteSchema ? "#0c0d0d" : "#f5f5f5")};
            height: 45px;
            border-radius: 4px;
            border: 2px solid var(--black);
            font-family: 'Roboto Mono', monospace;
            margin-top: 46px;
            width: 100%;
            transition: 0.5s;
        }
    }
    @media (min-width: 1024px){
        form{
            width: 440px;
            margin-left: 150px;
        }
    }
    `

export const Button = styled.button`
background: #ff577f;
color: ${(props) => (props.whiteSchema ? "#0c0d0d" : "#f5f5f5")};
height: 45px;
border-radius: 4px;
border: 2px solid var(--black);
font-family: 'Roboto Mono', monospace;
margin-top: 46px;
width: 100%;
transition: 0.5s;
:hover{
    border: 2px solid #c85311;
}
`

export const NavBar = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    
    @media (min-width: 1024px){
        margin-left: 150px;
        a{
           margin-left: 270px;
        }
    }
`

export const ContainerSelect = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    select{
    background: #343b41;
    align-items: center;
    flex: 1;
    border: 0;
    border-radius: 4px;
    border: none;
    color: #666360;
    padding: 1rem;
    width: 100%;
    display: flex;
    transition: 0.4s;
    border-right: 16px solid transparent;
    font-size: 1rem;
    font-weight: 400;
    padding-left: 30px;
    }

    label{
        color: #f8f9fa;
        margin-bottom: 15px;
    }
`