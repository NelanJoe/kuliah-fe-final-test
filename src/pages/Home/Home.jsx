import Situation from "../../components/Situation";
import Hero from "../../components/Hero/Hero";
import Layout from "../../components/Layout";
import Regions from "../../components/Regions";

import useSWR from "swr";
import { ENDPOINTS } from "../../utils/constant/endpoints";

const Home = () => {
  const { data, error, isLoading } = useSWR(ENDPOINTS.global);

  if (error) <div>Error fetching data</div>;
  if (isLoading) <div>Loading...</div>;

  return (
    <Layout>
      <Hero />
      <Situation title="Global Situation" situations={data?.global} />
      <Regions />
    </Layout>
  );
};

export default Home;
