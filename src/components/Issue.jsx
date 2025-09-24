const Issue = ({ issue, data, setData }) => {
  const {
    userImg,
    requestedBy,
    description,
    priority,
    status,
    subject,
    ticketId,
  } = issue;
  const handleStatusClasses = () => {
    if (status === "Pending")
      return `bg-red-100 text-red-500 rounded px-3 py-1`;
    if (status === "Submitted")
      return `bg-amber-100 text-amber-500 rounded px-3 py-1`;
    if (status === "Reviewed")
      return `bg-green-100 text-green-500 rounded px-3 py-1`;
  };

  const handlePriorityClasses = () => {
    if (priority === "High") return `bg-red-100 text-red-500 rounded px-3 py-1`;
    if (priority === "Medium")
      return `bg-amber-100 text-amber-500 rounded px-3 py-1`;
    if (priority === "Low")
      return `bg-green-100 text-green-500 rounded px-3 py-1`;
  };

  const handleIssueStatus = () => {
    const curData = data.find((el) => el.ticketId === ticketId);
    const restData = data.filter((el) => el.ticketId !== ticketId);
    curData.status === "Pending"
      ? (curData.status = "Submitted")
      : (curData.status = "Reviewed");
    setData([...restData, curData]);
    console.log({ curData, restData });
  };

  return (
    <div
      className="shadow-2xl p-4 rounded-md space-y-3 cursor-pointer"
      onClick={() => handleIssueStatus()}
    >
      <div className="w-16 h-16 ">
        <img
          src={userImg}
          alt={requestedBy}
          title={requestedBy}
          className="rounded-full"
        />
      </div>
      <h3 className="text-base font-bold">{requestedBy}</h3>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{subject}</h2>
        <div className="flex gap-2">
          <div className={`${handlePriorityClasses()}`}>{priority}</div>
          <div className={`${handleStatusClasses()}`}>{status}</div>
        </div>
      </div>
      <p className="text-slate-500">{description}</p>
    </div>
  );
};

export default Issue;
