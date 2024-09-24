export const SelectFilter = ({
  handleChange,
  children,
  primaryLabel,
  value,
}) => {
  return (
    <div className="flex flex-col w-full md:w-[400px] ">
      <span className="font-inter text-[16px] font-medium mb-1">
        {primaryLabel}
      </span>
      <select
        className="font-inter text-[14px] p-2 shadow-sm rounded-sm"
        onChange={handleChange}
        value={value}
      >
        {children}
      </select>
    </div>
  );
};
