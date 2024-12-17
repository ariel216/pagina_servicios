import TalentHeader from "./components/TalentHeader";
import TalentFeatures from "./components/TalentFeature";
import TalentGrid from "./components/TalentGrid";
import Container from "../../components/ui/Container";

const HirePage = () => {
  return (
    <div className="pt-24 pb-16">
      <Container>
        <TalentHeader />
        <TalentFeatures />
        <TalentGrid />
      </Container>
    </div>
  );
};

export default HirePage;
