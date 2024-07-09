import ClassesCard from "../../../components/admin/subjects/ClassesCard";
import "../../../assets/css/admin/classes.css";

const Classes = () => {
  return (
    <section className="classes">
      <div className="classes-container px-2">
        <h1 className="text-[32px]">Classes</h1>

        <div className="grid md:grid-cols-3 lg:mt-10 flex-col gap-8 p-8">
          <ClassesCard
            class={"Jss1"}
            description={"Junior Secondary School 1"}
          />

          <ClassesCard
            class={"Jss2"}
            description={"Junior Secondary School 2"}
          />
          <ClassesCard
            class={"Jss3"}
            description={"Junior Secondary School 3"}
          />
          <ClassesCard
            class={"Ss1"}
            description={"Senior Secondary School 1"}
          />
          <ClassesCard
            class={"Ss2"}
            description={"Senior Secondary School 2"}
          />
          <ClassesCard
            class={"Ss3"}
            description={"Senior Secondary School 3"}
          />
        </div>
      </div>
    </section>
  );
};

export default Classes;
