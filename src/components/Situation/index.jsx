import StyledSituation from "./StyledSituation";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import Flex from "../ui/Flex";

const Situation = ({ title, situations }) => {
  const renderedCard = situations?.map((situation, idx) => {
    let textColor = "";
    if (situation.status === "confirmed") {
      textColor += "primary";
    } else if (situation.status === "recovered") {
      textColor += "secondary";
    } else {
      textColor += "danger";
    }

    return (
      <div className="card" key={idx}>
        <h1>{situation.status}</h1>
        <h2 className={textColor}>{situation.total.toLocaleString("id-ID")}</h2>
      </div>
    );
  });

  return (
    <StyledSituation>
      <Heading $fontSize={"62px"} $color={"primary"}>
        {title || ""}
      </Heading>
      <Text $fontSize={"24px"} $color={"secondary"} $mb={"1.2rem"}>
        Data Covid Berdasarkan Global
      </Text>
      <Flex
        $justifyContent={"center"}
        $alignItems={"center"}
        $gap={"1.5rem"}
        $flexWrap={"wrap"}
      >
        {renderedCard}
      </Flex>
    </StyledSituation>
  );
};

export default Situation;
