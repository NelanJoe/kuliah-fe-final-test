import StyledRegion from "./StyledRegion.jsx";

const Region = ({ region }) => {
  return (
    <StyledRegion>
      <div className="card">
        <h2>{region?.name}</h2>
        <div className="situations">
          <div>
            <p className="situations-title">Confirmed</p>
            <p className="situations-confirmed">{region?.numbers?.confirmed}</p>
          </div>
          {/* icon here */}
          <p>10</p>
        </div>
        <div className="situations">
          <div>
            <p className="situations-title">Recovered</p>
            <p className="situations-recovered">{region?.numbers?.recovered}</p>
          </div>
          {/* icon here */}
          <p>10</p>
        </div>
        <div className="situations">
          <div>
            <p className="situations-title">Death</p>
            <p className="situations-death">{region?.numbers?.death}</p>
          </div>
          <p>10</p>
        </div>
      </div>
    </StyledRegion>
  );
};

export default Region;
