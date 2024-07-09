import SubjectsCard from "../../../components/admin/subjects/SubjectsCard";
import "../../../assets/css/admin/classes.css";

const Subjects = () => {
  return (
    <section className="subjects w-full h-full">
      <div className="subject-container px-2">
        <h1 className="text-[32px]">All Subjects in Jss 1</h1>

        <div className="grid md:grid-cols-3 lg:mt-10 flex-col gap-8 p-8">
          <SubjectsCard
            title={"Mathematics"}
            
          />

          <SubjectsCard
            title={"Economics"}
            
          />
          <SubjectsCard
            title={"Home-Economics"}
           
          />
          <SubjectsCard
            title={"Social-Studies"}
           
          />
          <SubjectsCard
            title={"Civic-Education"}
           
          />
          <SubjectsCard
            title={"English"}
            
          />
        </div>
      </div>
    </section>
  );
};

export default Subjects;
