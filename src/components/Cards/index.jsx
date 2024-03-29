import { Container } from "./styles" 

function Card ({title, status, onClick, id, animation}){
    return(
        <Container onClick={onClick}>
                <h2>{title}</h2>
                <span>{status}</span>
        </Container>
    )
} 

export default Card