import { Main, AboutPageContainer} from "./components"
import {useLocation} from "react-router-dom";
function About() {
  const {pathname} = useLocation();
  return (
    <AboutPageContainer giveMarginToTop={!pathname.includes('user')}>
      <Main>
        <img src="/images/img/aboutpic.jpg" />
        <div className="about-text">
          <h1>Truly the Most Hearthfelt Animal Shelter... </h1>
          <br />
          <p>
            An animal shelter is a staffed facility where homeless animals and
            animals seized by authorities in cruelty cases find safety and
            comfort, are cared for, and are made available for adoption.
            Temporarily housing animals in shelters keeps them from being loose
            on the streets, where they struggle to find clean food and water,
            can be hit by cars, can be attacked by other animals or cruel
            humans, or face otherpotential dangers.
          </p>
          <br />
          <button className="readbtn" type="button">
            READ MORE
          </button>
        </div>
      </Main>
    </AboutPageContainer>
  );
}

export default About;