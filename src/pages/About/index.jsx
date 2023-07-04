import Hero from "../../components/Hero/Hero";
import Layout from "../../components/Layout";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { StyledAbout } from "./StyledAbout";

const AboutPage = () => {
  return (
    <Layout>
      <Hero />
      <StyledAbout>
        <h2>Sebuah Sisipan Kata</h2>
        <p>
          Hello ini adalah sebuah website yang didedikasikan untuk final test
          mata kuliah Frontend Programming,.
        </p>
        <p>Website ini dibuat menggunakan teknologi: </p>
        <div>
          <a href="https://react.dev" tager="_blank">
            <GrReactjs />
          </a>
          <a href="https://swr.vercel.app" tager="_blank">
            <IoLogoJavascript />
          </a>
          <a href="https://redux-toolkit.js.org" tager="_blank">
            <SiRedux />
          </a>
        </div>
      </StyledAbout>
    </Layout>
  );
};

export default AboutPage;
