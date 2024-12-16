import content from "../../data/content.json";
import Container from "../ui/Container";
import Button from "../ui/Button";
import FeatureItem from "./FeatureItem";
import ProfileGrid from "./ProfileGrid";
import { icons } from "lucide-react";

const Hero = () => {
  const { features, title, description, buttons, images } = content.hero;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex space-x-4 mb-6">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon as keyof typeof icons}
                  text={feature.text}
                />
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {title.start}{" "}
              <span className="text-purple-600">{title.highlight}</span>{" "}
              {title.end}
            </h1>

            <p className="text-gray-600 mb-8">{description}</p>

            <div className="flex space-x-4">
              {buttons.map((button, index) => (
                <Button key={index} variant={button.variant as any}>
                  {button.text}
                </Button>
              ))}
            </div>
          </div>

          <ProfileGrid images={images} />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
