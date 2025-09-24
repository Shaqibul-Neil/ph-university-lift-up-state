const CountBox = ({ data }) => {
  const pendingData = data.filter((el) => el.status === "Pending");
  const submittedData = data.filter((el) => el.status === "Submitted");
  const reviewedData = data.filter((el) => el.status === "Reviewed");
  //console.log({ pendingData, submittedData, reviewedData });
  return (
    <>
      <div className="rounded-md p-7 text-white h-[250px] bg-gray-600 flex flex-col items-center justify-center gap-4">
        <h2 className="font-bold text-4xl">Pending</h2>
        <p className="font-semibold text-2xl">{pendingData.length}</p>
      </div>
      <div className="rounded-md p-7 text-white h-[250px] bg-purple-500 flex flex-col items-center justify-center gap-4">
        <h2 className="font-bold text-4xl">Submitted</h2>
        <p className="font-semibold text-2xl">{submittedData.length}</p>
      </div>
      <div className="rounded-md p-7 text-white h-[250px] bg-teal-500 flex flex-col items-center justify-center gap-4">
        <h2 className="font-bold text-4xl">Reviewed</h2>
        <p className="font-semibold text-2xl">{reviewedData.length}</p>
      </div>
    </>
  );
};

export default CountBox;
