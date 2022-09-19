
import { Container } from "react-bootstrap";

import ProfileBanner from "./ProfileBanner";

const MainUser = ({user}) => {


  return (
    <Container>
      <ProfileBanner user={user} />
    </Container>
  );
};

export default MainUser;
