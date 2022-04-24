import styled from "styled-components";

export const Container = styled.div`
    

`

export const UserStats = styled.div`

    border-bottom: 1px solid #212529;
    padding-bottom: 34px;
    
    h1{
        margin-top: 35px;
        margin-left: 13px;
        font-family: 'Inter';
        color: #f8f9fa;
        font-size: 22px;
        font-weight: 700;
    }

    p{
        margin-top: 10px;
        margin-left: 13px;
        font-family: 'Inter';
        font-weight: 400;
        color: #868e96;
        font-size: 14px;
    }

`

export const UserSkills = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 26px;
    font-family: 'Inter';
    font-weight: 600;
    color: #f8f9fa;
    font-size: 14px;
    margin-bottom: 21px;

    h2{
        margin-left: 13px;
    }

    button{
        margin-right: 13px;
        background: #212529;
        border: none;
        border-radius: 4px;
        width: 32px;
        height: 32px;
        font-size: 22px;
        color: #ffffff;
        cursor: pointer;
    }

`



export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #212529;
    padding-bottom: 24px;
    padding-top: 10px;
    
    img{
        margin-left: 13px;
        margin-top: 5px;
    }
    
    button{
        margin-right: 13px;
    }
`

export const SelectSkills = styled.div`
        display: flex;
        flex-direction: column;
        width: 90vw;
        margin: 0 auto;
        padding: 1rem;

        h2{
            font-family: 'Inter';
            font-weight: bold;
            color: #f8f9fa;
            font-size: 14px;
        }

        

        div{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

`