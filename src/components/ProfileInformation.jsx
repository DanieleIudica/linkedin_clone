import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProfileInformation = () => {
    const me = useSelector((state) => state.user.me);
    return (
        <div className="mainDiv mb-2 ">
            <Container className="myContainer mt-3">
                <h5 className="mb-4">
                    <b> Informazioni</b>{" "}
                </h5>
                <p>{me.bio}</p>
            </Container>
        </div>
    );
};

export default ProfileInformation;
