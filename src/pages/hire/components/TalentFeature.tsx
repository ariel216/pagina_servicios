import { CheckCircle, Award, User2, MessageSquare } from "lucide-react";
import FeatureItem from "./FeatureItem";
import content from "../../../data/content.json";

const iconsMap = {
  CheckCircle,
  Award,
  User2,
  MessageSquare,
};

const TalentFeatures = () => {
  const { features } = content.talent;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {features.map((feature, index) => {
        const IconComponent = iconsMap[feature.icon];
        return <FeatureItem key={index} icon={IconComponent} text={feature.text} />;
      })}
    </div>
  );
};

export default TalentFeatures;
