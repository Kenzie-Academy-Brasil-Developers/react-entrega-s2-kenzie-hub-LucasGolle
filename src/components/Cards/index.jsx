import { Container } from "./styled" 

function Card ({title, status, onClick}){
    return(
        <Container onClick={onClick}>
            <div>
                <h2>{title}</h2>
                <span>{status}</span>
            </div>
        </Container>
    )
} 

export default Card