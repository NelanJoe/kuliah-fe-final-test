import { PiGhostBold, PiFaceMaskDuotone, PiSmileyBold } from "react-icons/pi";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import Card from "../ui/Card";
import Flex from "../ui/Flex";

const Region = ({ region }) => {
  return (
    <>
      <Card $width={"350px"} $p={"1.2rem"}>
        <Heading $fontSize={"26px"} $textAlign={"center"} $mb={"1rem"}>
          {region?.name}
        </Heading>
        <Flex
          $mb={"0.5rem"}
          $justifyContent={"space-between"}
          $alignItems={"center"}
        >
          <div>
            <Text $color={"slateGray"}>Confirmed</Text>
            <Text $color={"primary"} $fontSize={"25px"}>
              {region?.numbers?.confirmed.toLocaleString("id-ID")}
            </Text>
          </div>
          <Text $color={"primary"} $fontSize={"25px"}>
            <PiFaceMaskDuotone />
          </Text>
        </Flex>
        <Flex
          $mb={"0.5rem"}
          $justifyContent={"space-between"}
          $alignItems={"center"}
        >
          <div>
            <Text $color={"slateGray"}>Recovered</Text>
            <Text $color={"secondary"} $fontSize={"25px"}>
              {region?.numbers?.recovered.toLocaleString("id-ID")}
            </Text>
          </div>
          <Text $color={"secondary"} $fontSize={"25px"}>
            <PiSmileyBold />
          </Text>
        </Flex>
        <Flex
          $my={"1.2rem"}
          $justifyContent={"space-between"}
          $alignItems={"center"}
        >
          <div>
            <Text $color={"slateGray"}>Death</Text>
            <Text $color={"danger"} $fontSize={"25px"}>
              {region?.numbers?.death.toLocaleString("id-ID")}
            </Text>
          </div>
          <Text $color={"danger"} $fontSize={"25px"}>
            <PiGhostBold />
          </Text>
        </Flex>
      </Card>
    </>
  );
};

export default Region;
