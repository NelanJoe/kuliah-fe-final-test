import heroImg from "../../assets/img/hero.png";
import StyledHero from "./StyledHero";

const Hero = () => {
  return (
    <StyledHero>
      <div className="hero__left">
        <h1 className="title">Covid ID</h1>
        <p className="subtitle">Monitoring Perkembangan Covid</p>
        <p className="description">
          Situs website COVID ID dibuat sebagai sarana informasi untuk
          mengatahui data terupdate wabah COVID 19!
        </p>
        <button className="btn">Vaccine</button>
      </div>
      <div className="hero__right">
        <img src={heroImg} alt="hero-img" />
      </div>
    </StyledHero>
  );
};

export default Hero;
