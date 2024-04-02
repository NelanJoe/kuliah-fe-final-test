import heroImg from "../../assets/img/hero.png";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import StyledHero from "./StyledHero";

const Hero = () => {
  return (
    <StyledHero>
      <div className="hero__left">
        <Heading
          as={"h1"}
          $color={"primary"}
          $fontSize={"62px"}
          $fontWeight={700}
        >
          Covid ID
        </Heading>
        <Text $color={"secondary"} $mb={`1.2rem`}>
          Monitoring Perkembangan Wabah Covid
        </Text>
        <Text $mb={"1.2rem"}>
          Situs website COVID ID dibuat sebagai sarana informasi untuk
          mengatahui data terupdate wabah COVID 19!
        </Text>
        <button className="btn">Vaccine</button>
      </div>
      <div className="hero__right">
        <img src={heroImg} alt="hero-img" />
      </div>
    </StyledHero>
  );
};

export default Hero;
