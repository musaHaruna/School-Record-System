export const StudentDashboardHeader = ({
  children,
  primaryRoute,
  otherRoutes,
}) => {
  return (
    <div className=" flex flex-row justify-between items-end  py-[2.5vw]">
      {/* header */}
      <h1 className="text-[2.8rem]  font-500">{children}</h1>
      <p className="font-medium text-[1.4rem]">
        <span>{primaryRoute}</span>/{" "}
        {otherRoutes?.map((r, i) => (
          <>
            <span className="text-gray-900 font-medium" key={i + r}>
              {r}
            </span>
            {i !== otherRoutes.length - 1 ? "/" : ""}
          </>
        ))}
      </p>
    </div>
  );
};
