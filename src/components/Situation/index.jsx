import StyledSituation from "./StyledSituation";

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
      <h1 className="title">{title || ""}</h1>
      <p className="subtitle">Data Covid Berdasarkan Global</p>
      <div className="container">{renderedCard}</div>
    </StyledSituation>
  );
};

export default Situation;
