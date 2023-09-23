import { useState } from "react";

import location from "../images/location-icon.svg";

const MapElem = ({ photo, top, left }) => {
  const [hoverMapElem, setHoverMapElem] = useState(false);
  return (
    <div
      style={{
        position: "absolute",
        top: top + "%",
        left: left + "%",
      }}
      onMouseEnter={() => setHoverMapElem(true)}
      onMouseLeave={() => setHoverMapElem(false)}
    >
      <img
        style={
          hoverMapElem
            ? { display: "none" }
            : { width: "18px", transition: ".5s" }
        }
        loading="lazy"
        src={location}
        alt="location"
      />
      <img
        style={
          hoverMapElem
            ? {
                animation: "shows 1s",
                width: "250px",
                position: "inherit",
                zIndex: 1,
                opacity: 1,
                transition: "0.6s",
              }
            : {
                opacity: 0,
                transition: "0.6s",
                width: "18px",
              }
        }
        loading="lazy"
        src={photo}
        alt="review"
      />
    </div>
  );
};
export default MapElem;
