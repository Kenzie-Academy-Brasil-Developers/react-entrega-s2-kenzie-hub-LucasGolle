import styled, { keyframes } from "styled-components"
import SignupImage from "../../assets/signupBack.jpg"

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

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50px)
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
    animation: ${appearFromLeft} 1s;

    
    form {
        width: 340px;
        height: 92vh;
        
        text-align: center;
        background-color: #212529;
        padding: 15px 35px;
        margin-bottom: 0px;
        
        h2{
            margin-bottom: 12px;
            color: #f8f9fa;
        }
        
        > div{
            margin-top: 10px;
        }
        
        p{
            margin-top: 5px;
            color: #868e96;
            font-size: 12px;
        }
    }
    @media (min-width: 1024px){
        form{
            width: 440px;
        }
    }
    `

export const Button = styled.button`
background: #59323F;
color: ${(props) => (props.whiteSchema ? "#0c0d0d" : "#f5f5f5")};
height: 45px;
border-radius: 4px;
border: 2px solid var(--black);
font-family: 'Roboto Mono', monospace;
margin-top: 12px;
width: 100%;
transition: 0.5s;

`

export const NavBar = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    


    a{
        margin-left: 170px;
        background: #212529;
        padding: 0px,16px,0px,16px;
        height: 42px;
        width: 67px;
        border: none;
        border-radius: 4px;
        color: #f8f9fa;
        display: flex;
        justify-content: center;
        cursor: pointer;
        align-items: center;
    }
    @media (min-width: 1024px){
        /* margin-left: 150px; */
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