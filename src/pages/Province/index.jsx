import Hero from "../../components/Hero/Hero";
import Layout from "../../components/Layout";

import Form from "../../components/Form/Form";
import Provinces from "../../components/Provinces/Provinces";

import { useSelector } from "react-redux";

const ProvincePage = () => {
  const provinces = useSelector((state) => state?.provinces?.value);

  return (
    <Layout>
      <Hero />
      <Provinces provinces={provinces} />
      <Form />
    </Layout>
  );
};

export default ProvincePage;
