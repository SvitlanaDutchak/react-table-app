interface AccountDataRenderProps {
  id: number;
  entity1: string;
  entity2: string;
  onClick?: any;
  date?: string;
}

const RenderData: React.FC<AccountDataRenderProps> = ({
  id,
  entity1,
  entity2,
  onClick,
  date,
}) => {
  const formattedDate = date
    ? new Date(date).toLocaleString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    : "";

  return (
    <>
      <tr onClick={onClick} style={{ cursor: "pointer" }}>
        <td>{id}</td>
        <td>{entity1}</td>
        <td>{entity2}</td>
        {date && <td>{formattedDate}</td>}
      </tr>
    </>
  );
};

export default RenderData;
