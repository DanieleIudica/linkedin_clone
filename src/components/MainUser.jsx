import { Container } from "react-bootstrap";
import { Experiences } from "./Experiences";

import ProfileBanner from "./ProfileBanner";
import ProfileInformation from "./ProfileInformation";

const MainUser = ({ user }) => {
    return (
        <Container>
            <ProfileBanner user={user} />
            <ProfileInformation user={user} />
            <Experiences user={user} />
        </Container>
    );
};

export default MainUser;
