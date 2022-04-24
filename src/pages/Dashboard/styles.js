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

export const SelectSkills = styled.form`
        display: flex;
        flex-direction: column;
        width: 90vw;
        top: 20;
        left: 0;
        right: 0;
    margin: auto;
        max-width: 369px;
        background: #212529;
        padding-bottom: 2rem;
        position: absolute;

        h2{
            font-family: 'Inter';
            font-weight: bold;
            color: #f8f9fa;
            font-size: 14px;
        }

        span{
            color: #868e96;
            cursor: pointer;
        }

        label{
            font-family: "Inter";
            font-weight: 400;
            color: #f8f9fa;
            padding: 1rem;
            font-size: 12px;

        }

        input{
            width: 90%;
            padding: 10px;
            margin: 0 auto;
            background: #343b41;
            border: none;
        }

        select{
            width: 90%;
            padding: 10px;
            margin: 0 auto;
            margin-bottom: 16px;
            background: #343b41;
            border: none;
            color: #f8f9fa;
            border-right: 16px solid transparent;
        }

        button{
            width: 90%;
            padding: 10px;
            margin: 0 auto;
            cursor: pointer;
            border: none;
            border-radius: 4px;
            background: #ff577f;
            color: #ffffff;
            font-family: 'Inter';
            font-size: 12px;
        }

        div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #343b41;
            padding: 1rem;   
        }

`

export const SkillsContainer = styled.div`
    padding: 1rem;
    background: #212529;
    width: 94vw;
    margin: 0 auto;
`