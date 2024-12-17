import content from "../../../data/content.json";

const TalentHeader = () => {
  const { header } = content.talent;

  return (
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{header.title}</h1>
      <p className="text-gray-600 text-lg">{header.subtitle}</p>
    </div>
  );
};

export default TalentHeader;