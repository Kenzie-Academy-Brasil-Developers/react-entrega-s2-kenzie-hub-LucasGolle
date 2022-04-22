import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        background-color: #121214;
    }

    body, input{
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6{
        font-family: 'Inter', sans-serif;
        font-weight: 700;
    }

    button{
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        cursor: pointer;
        font-weight: 500;
    }

    a{
        text-decoration: none;
    }

`;
