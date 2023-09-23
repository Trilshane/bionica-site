import AboutUsWorks from "../components/AboutUsWorks";
import FooterWorks from "../components/FooterWorks";
import HeadPageWorks from "../components/HeadPageWorks";
import WorkAdvantages from "../components/WorkAdvantages";
import WorksActiveVacancies from "../components/WorksActiveVacancies";

const Works = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <HeadPageWorks />
      <AboutUsWorks />
      <WorksActiveVacancies />
      <WorkAdvantages />
      <FooterWorks />
    </div>
  );
};
export default Works;
