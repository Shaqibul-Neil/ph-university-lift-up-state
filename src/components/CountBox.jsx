const CountBox = () => {
  return (
    <>
      <div className="rounded-md p-7 text-white h-[250px] bg-gray-600 flex flex-col items-center justify-center gap-4">
        <h2 className="font-bold text-4xl">Pending</h2>
        <p className="font-semibold text-2xl">0</p>
      </div>
      <div className="rounded-md p-7 text-white h-[250px] bg-purple-500 flex flex-col items-center justify-center gap-4">
        <h2 className="font-bold text-4xl">Submitted</h2>
        <p className="font-semibold text-2xl">0</p>
      </div>
      <div className="rounded-md p-7 text-white h-[250px] bg-teal-500 flex flex-col items-center justify-center gap-4">
        <h2 className="font-bold text-4xl">Reviewed</h2>
        <p className="font-semibold text-2xl">0</p>
      </div>
    </>
  );
};

export default CountBox;
