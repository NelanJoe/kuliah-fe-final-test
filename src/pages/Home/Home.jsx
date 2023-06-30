import { useState } from "react";
import Situation from "../../components/Situation";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar";
import Province from "../../components/Province/Province";
import data from "../../utils/constant/provinces";
import Form from "../../components/Form/Form";
import Layout from "../../components/Layout";

const Home = () => {
  const [provinces, setProvinces] = useState(data.provinces);

  return (
    <Layout>
      <Hero />
      <Situation title="Global" />
      <Province provinces={provinces} />
      <Form provinces={provinces} setProvinces={setProvinces} />
    </Layout>
  );
};

export default Home;
