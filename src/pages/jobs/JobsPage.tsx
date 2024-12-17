import CategoryFilter from "./components/CategoryFilter";
import ProjectCard from "./components/ProyectCard";
import content from "../../data/content.json";

const JobsPage = () => {
  const { projectData } = content.jobs;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <aside>
          <CategoryFilter />
        </aside>

        <section className="col-span-3">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default JobsPage;
