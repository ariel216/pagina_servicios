import content from "../../data/content.json";
import Container from "../ui/Container";
import FooterColumn from "./FooterColumn";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const { columns, social, copyright } = content.footer;

  return (
    <footer className="bg-gradient-to-r from-blue-50 to-purple-50 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {columns.map((column, index) => (
            <FooterColumn
              key={index}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">{copyright}</p>
            <SocialLinks links={social} />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
