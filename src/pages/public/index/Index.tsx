import { NavLink } from "react-router-dom";
import { Content, IndexPageContainer, Banner, About, Main } from "./components";
import { useLocation } from "react-router-dom";
const Index = (): JSX.Element => {
  const {pathname} = useLocation();
  return (
    <IndexPageContainer>
      <Banner>
        <Content>
          <h1>
            Redefining Shelter:
            <br />
            Website for Noahs
            <br />
            Ark Dog And Cat Shelter
          </h1>
          <h2>
            One Life <br /> At A Time
          </h2>

          {
            !pathname.includes('/user') && <div>
            <NavLink to={'login'}>
              <button className="btn" type="button">
                <span></span> LOG IN
              </button>
            </NavLink>
            <NavLink to={'signup'}>
              <button className="btn" type="button">
                <span></span>CREATE ACOUNT
              </button>
            </NavLink>
          </div>
          }
          
        </Content>
      </Banner>

      <About>
        <Main>
          <img src="/images/img/background2.jpg" />
          <div className="about-text">
            <h1>About </h1>
            <h1>Our Animal Sheter</h1>
            <br />
            <p>
              An animal shelter is a staffed facility where homeless animals and
              animals seized by authorities in cruelty cases find safety and
              comfort, are cared for, and are made available for adoption.
              Temporarily housing animals in shelters keeps them from being
              loose on the streets, where they struggle to find clean food and
              water, can be hit by cars, can be attacked by other animals or
              cruel humans, or face otherpotential dangers.
            </p>
            <br />
            <button className="readbtn" type="button">
              READ MORE
            </button>
          </div>
        </Main>
      </About>
    </IndexPageContainer>
  );
};

export default Index;
