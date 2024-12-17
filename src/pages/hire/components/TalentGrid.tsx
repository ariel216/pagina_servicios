import TalentCard from "./TalentCard";
import content from "../../../data/content.json";

const TalentGrid = () => {
  const { talents } = content.talent;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {talents.map((talent, index) => (
        <TalentCard key={index} {...talent} />
      ))}
    </div>
  );
};

export default TalentGrid;
