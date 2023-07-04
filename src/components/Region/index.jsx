import StyledRegion from "./StyledRegion.jsx";
import { PiGhostBold, PiFaceMaskDuotone, PiSmileyBold } from "react-icons/pi";

const Region = ({ region }) => {
  return (
    <StyledRegion>
      <div className="card">
        <h2>{region?.name}</h2>
        <div className="situations">
          <div>
            <p className="situations-title">Confirmed</p>
            <p className="situations-confirmed">
              {region?.numbers?.confirmed.toLocaleString("id-ID")}
            </p>
          </div>
          <p className="situations-icon-confirmed">
            <PiFaceMaskDuotone />
          </p>
        </div>
        <div className="situations">
          <div>
            <p className="situations-title">Recovered</p>
            <p className="situations-recovered">
              {region?.numbers?.recovered.toLocaleString("id-ID")}
            </p>
          </div>
          <p className="situations-icon-recovered">
            <PiSmileyBold />
          </p>
        </div>
        <div className="situations">
          <div>
            <p className="situations-title">Death</p>
            <p className="situations-death">
              {region?.numbers?.death.toLocaleString("id-ID")}
            </p>
          </div>
          <p className="situations-icon-death">
            <PiGhostBold />
          </p>
        </div>
      </div>
    </StyledRegion>
  );
};

export default Region;
