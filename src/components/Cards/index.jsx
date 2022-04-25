import { Container } from "./styles" 

function Card ({title, status, onClick, id}){
    return(
        <Container onClick={onClick} key={id}>
                <h2>{title}</h2>
                <span>{status}</span>
        </Container>
    )
} 

export default Card