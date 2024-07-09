import ClassesCard from "../../../components/admin/subjects/ClassesCard";
import "../../../assets/css/admin/classes.css";

const Subjects = () => {
  return (
    <section className="subjects w-full h-full">
      <div className="subject-container px-2">
        <h1 className="text-[32px]">Subjects</h1>

        <div className="grid md:grid-cols-3 lg:mt-10 flex-col gap-8 p-8">
          <ClassesCard
            class={"Jss1"}
            description={"Junior Secondary School 1"}
            subject={true}
          />

          <ClassesCard
            class={"Jss2"}
            description={"Junior Secondary School 2"}
            subject={true}
          />
          <ClassesCard
            class={"Jss3"}
            description={"Junior Secondary School 3"}
            subject={true}
          />
          <ClassesCard
            class={"Ss1"}
            description={"Senior Secondary School 1"}
            subject={true}
          />
          <ClassesCard
            class={"Ss2"}
            description={"Senior Secondary School 2"}
            subject={true}
          />
          <ClassesCard
            class={"Ss3"}
            description={"Senior Secondary School 3"}
            subject={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Subjects;
