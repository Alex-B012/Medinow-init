const TableHeaderCell = ({ data, text_position = "" }) => {
  const textAlignClass =
    {
      left: "text-left",
      center: "text-center ",
      right: "text-right",
    }[text_position] || "";

  return (
    <div
      className={`table-header-cell w-full font-semibold  ${textAlignClass} sm:min-w-15`}
    >
      {data}
    </div>
  );
};

export default TableHeaderCell;
