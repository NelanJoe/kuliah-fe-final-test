import Hero from "../../components/Hero/Hero";
import Layout from "../../components/Layout";
import Situation from "../../components/Situation";

import useSWR from "swr";
import { ENDPOINTS } from "../../utils/constant/endpoints";
import Provinces from "../../components/Provinces/Provinces";

const IndonesianPage = () => {
  const { data: situations, error, isLoading } = useSWR(ENDPOINTS.indonesian);

  const {
    data: provinces,
    error: errorGetProvinces,
    isLoading: LoadingPageProvinces,
  } = useSWR(ENDPOINTS.indonesian);

  if (error) <div>Error fetching data</div>;
  if (errorGetProvinces) <div>Error fetching data</div>;

  if (isLoading) <div>Loading...</div>;
  if (LoadingPageProvinces) <div>Loading...</div>;

  return (
    <Layout>
      <Hero />
      <Situation
        title="Indonesia Situation"
        situations={situations?.indonesia}
      />
      <Provinces provinces={provinces?.regions} />
    </Layout>
  );
};

export default IndonesianPage;
