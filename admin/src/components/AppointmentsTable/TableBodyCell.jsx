const TableBodyCell = ({ data, text_position = "" }) => {
  const justifyClass =
    {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
    }[text_position] || "justify-start";

  return (
    <div
      className={`table-body-cell w-full flex items-center justify-center ${justifyClass} sm:min-w-15`}
    >
      {data}
    </div>
  );
};

export default TableBodyCell;
