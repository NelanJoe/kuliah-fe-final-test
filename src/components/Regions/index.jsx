import Region from "../Region";
import Heading from "../ui/Heading";
import Title from "../ui/Title";
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
      <Heading
        as={"h1"}
        color={"primary"}
        $fontSize={"62px"}
        $textAlign={"center"}
        $mb={"0.4rem"}
      >
        Situation by Regions
      </Heading>
      <Title
        color={"secondary"}
        $fontSize={"24px"}
        $textAlign={"center"}
        $mb={"1.1rem"}
      >
        Bacaan Pilihan Covid
      </Title>
      <div className="container">
        {data?.regions?.map((region, idx) => (
          <Region key={idx} region={region} />
        ))}
      </div>
    </StyledRegions>
  );
};

export default Regions;
