import heroImg from "../../assets/img/hero.png";
import StyledHero from "./StyledHero";

const Hero = () => {
  return (
    <StyledHero>
      <div className="hero__left">
        <h1 className="title">Covid ID</h1>
        <p className="subtitle">Monitoring Perkembangan Covid</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          quae autem aliquid, at tenetur aut, voluptatum totam aliquam debitis
          accusantium adipisci eius, quam cumque? Nam quibusdam odio vel nihil,
          distinctio mollitia reiciendis ratione possimus maiores.
        </p>
        <button className="btn">Vaccine</button>
      </div>
      <div>
        <img src={heroImg} alt="hero-img" />
      </div>
    </StyledHero>
  );
};

export default Hero;
