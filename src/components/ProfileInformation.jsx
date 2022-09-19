import { Container } from "react-bootstrap"

const ProfileInformation = ({user}) => {
    return (

        <div className="mainDiv mb-5 ">
            <Container className="myContainer mt-3">

            <h5 className="mb-4"><b> Informazioni</b> </h5>
            <p>{user.bio}</p>
            </Container>
        </div>
        )
    
        
}

export default ProfileInformation