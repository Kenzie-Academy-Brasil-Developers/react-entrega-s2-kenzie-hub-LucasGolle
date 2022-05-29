import styled from "styled-components";

export const Container = styled.div`
    
   
    
`

export const Hr = styled.hr`
    width: 100vw;
    border: 1px solid #212529;

`

export const UserStats = styled.div`

    padding-bottom: 34px;
    @media (min-width:1024px){
        width: 60%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 2rem;
    }
    
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

    @media (min-width:1024px){
        h1{
            margin-left: 0px;
            margin-top: 0px
        }

        p{
            margin-top: 0px;
            margin-left: 0px;
        }
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

    @media (min-width:1024px){
        width: 60%;
        margin: 0 auto;
        padding-top: 2rem;
        padding-bottom: 2rem;

        button{
            margin-right: 0px;
            &:hover{
        box-shadow: 10px 0 20px 1px #212529;
    }
        }

        
    }

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

    @media (min-width:1024px){
        button{
            margin-right: 0px;
        }

        h2{
            margin-left: 0px;
        }
    }


`



export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 24px;
    padding-top: 10px;

    @media (min-width:1024px){
        width: 60%;
        margin: 0 auto;
    }
    
    img{
        margin-left: 13px;
        margin-top: 5px;
    }
    
    button{
        margin-right: 13px;
    }

    @media (min-width:1024px){
        img{
        margin-left: 0px;
        margin-top: 0px;
    }

    button{
        margin-right: 0px;
    }
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
            color: #f8faf9;
            border: none;
        }

        select{
            width: 90%;
            padding: 10px;
            margin: 0 auto;
            font-size: 15px;
            margin-bottom: 16px;
            background: #343b41;
            cursor: pointer;
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
            &:hover{
      box-shadow: 10px 0 20px 1px #ff577f;
  }
        }

        div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #343b41;
            padding: 1rem;   
        }

`
export const GlobalPopUp = styled.div`
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

`

export const EditSkill = styled.form`
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
            color: #f8faf9;
            border: none;
        }

        select{
            width: 90%;
            padding: 10px;
            margin: 0 auto;
            margin-bottom: 16px;
            background: #343b41;
            border: none;
            font-size: 15px;
            color: #f8f9fa;
            cursor: pointer;
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


`

export const ButtonContainer = styled.div`

        display: flex;
        padding: 1rem; 
        width: 100%;
`

export const HeaderContainer = styled.div`

            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #343b41;
            padding: 1rem;   
`

export const ButtonLeft = styled.button`
       background: #59323f;
       cursor: pointer;
       padding: 1rem;
       width: 70%;
       margin-right: 17px;
       border-radius: 4px;
       text-align: center;
       font-family: 'Inter';
       font-size: 15px;
       color: #ffffff;

       &:hover{
        filter: brightness(0.9);
        box-shadow: 10px 0 20px 1px #59323f;
       }
`

export const ButtonRight = styled.div`
    background: #868e96;
    cursor: pointer;
    padding: 1rem;
    border-radius: 4px;
    text-align: center;
    font-family: 'Inter';
    font-size: 15px;
    color: #ffffff;
    
    &:hover{
        filter: brightness(0.9);
        box-shadow: 10px 0 20px 1px #868e96;
    }

`

export const SkillsContainer = styled.div`
    padding: 1rem;
    background: #212529;
    display: flex;
    flex-direction: column;
    width: 94vw;
    margin: 0 auto;

    @media (min-width:1024px){
        width: 60%;
        margin: 0 auto;
    }
`