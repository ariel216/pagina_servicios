import content from "../../data/content.json";
import Container from "../ui/Container";
import ServiceCard from "./ServiceCard";
import Button from "../ui/Button";

const Services = () => {
  const { title, categories, cta } = content.services;

  return (
    <div className="py-16 bg-white">
      <Container>
        <h2 className="text-2xl font-bold text-center mb-12">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <ServiceCard
              key={index}
              title={category.title}
              icon={category.icon as any}
              color={category.color}
              items={category.items}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="primary"
            className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {cta}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Services;
