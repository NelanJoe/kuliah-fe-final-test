import Situation from "../../components/Situation";
import Hero from "../../components/Hero/Hero";
import Layout from "../../components/Layout";
import Regions from "../../components/Regions";

import useSWR from "swr";

const Home = () => {
  const { data, error, isLoading } = useSWR(
    "https://covid-fe-2023.vercel.app/api/global.json"
  );

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
