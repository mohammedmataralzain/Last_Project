import DetailsPersonalHome from "../components/DetailsPersonalHome";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PersonalDetailsAside from "../components/PersonalDetailsAside";
import { Container } from "../components/style";
import TabsHome from "../components/TabsHome";
import WelcomeFreelance from "../components/WelcomeFreelance";
const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <WelcomeFreelance />
        <div className="flex">
          <TabsHome />
          <div>
            <PersonalDetailsAside />
            <DetailsPersonalHome />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
