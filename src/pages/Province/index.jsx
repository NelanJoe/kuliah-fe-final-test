import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Layout from "../../components/Layout";

import data from "../../utils/constant/provinces";
import Province from "../../components/Province/Province";
import Form from "../../components/Form/Form";

const ProvincePage = () => {
  const [provinces, setProvinces] = useState(data.provinces);

  return (
    <Layout>
      <Hero />
      <Province provinces={provinces} />
      <Form provinces={provinces} setProvinces={setProvinces} />
    </Layout>
  );
};

export default ProvincePage;
