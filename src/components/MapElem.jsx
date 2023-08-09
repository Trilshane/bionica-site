import { useState } from "react";

import location from "../images/location-icon.svg";

const MapElem = ({ photo, top, left }) => {
  const [hoverMapElem, setHoverMapElem] = useState(false);
  return (
    <div
      style={{ position: "absolute", top: top + "%", left: left + "%" }}
      onMouseEnter={() => setHoverMapElem(true)}
      onMouseLeave={() => setHoverMapElem(false)}
    >
      {hoverMapElem ? (
        <img
          style={{
            width: "250px",
            transition: "1s",
            position: "inherit",
            zIndex: 1,
          }}
          src={photo}
          alt="review"
        />
      ) : (
        <img
          style={{ width: "18px", transition: ".5s" }}
          src={location}
          alt="location"
        />
      )}
    </div>
  );
};
export default MapElem;
