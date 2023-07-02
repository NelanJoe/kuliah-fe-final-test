import Hero from "../../components/Hero/Hero";
import Layout from "../../components/Layout";
import Province from "../../components/Province/Province";
import Form from "../../components/Form/Form";
import Situation from "../../components/Situation";

import useSWR from "swr";

const IndonesianPage = () => {
  const {
    data: situations,
    error,
    isLoading,
  } = useSWR("https://covid-fe-2023.vercel.app/api/indonesia.json");

  const { data: provinces } = useSWR(
    "https://covid-fe-2023.vercel.app/api/indonesia.json"
  );

  if (error) <div>Error fetching data</div>;
  if (isLoading) <div>Loading...</div>;

  return (
    <Layout>
      <Hero />
      <Situation
        title="Indonesia Situation"
        situations={situations?.indonesia}
      />
      <Province provinces={provinces?.regions} />
    </Layout>
  );
};

export default IndonesianPage;
