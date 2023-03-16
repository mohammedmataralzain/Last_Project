import { Container, StyleLayoutProfile } from "../components/style";
import DetailsPersonal from "../components/DetailsPersonal";
import DetailsProfile from "../components/DetailsProfile";
import HeaderProfile from "../components/HeaderProfile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <Container>
      <HeaderProfile />
        <StyleLayoutProfile>
          <DetailsPersonal />
          <DetailsProfile />
        </StyleLayoutProfile>
      </Container>
      <Footer/>
    </div>
  );
};

export default Profile;
