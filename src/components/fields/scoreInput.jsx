export const ScoreInputField = ({ value, name, handleChange, disabled }) => {
  return (
    <input
      type="number"
      min={0}
      name={name}
      disabled={disabled}
      value={value}
      onChange={handleChange}
      className="w-[8rem] h-[4rem] disabled:cursor-not-allowed hover:border-blue-800 focus:border-blue-800 border-[1px] border-solid border-slate-200"
    />
  );
};
