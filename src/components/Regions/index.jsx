import Region from "../Region";
import StyledRegions from "./StyledRegions";

import useSWR from "swr";

const Regions = () => {
  const { data, error, isLoading } = useSWR(
    "https://covid-fe-2023.vercel.app/api/global.json"
  );

  if (error) <div>Error fetching data</div>;
  if (isLoading) <div>Loading...</div>;

  return (
    <StyledRegions>
      <h1 className="title">Situation by Regions</h1>
      <p className="subtitle">Bacaan Pilihan Covid</p>
      <div className="container">
        {data?.regions?.map((region, idx) => (
          <Region key={idx} region={region} />
        ))}
      </div>
    </StyledRegions>
  );
};

export default Regions;
