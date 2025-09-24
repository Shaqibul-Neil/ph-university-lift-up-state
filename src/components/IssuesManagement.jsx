import BannerCountBoxes from "./BannerCountBoxes";
import ToggleButtons from "./ToggleButtons";
import Issue from "./Issue";
import Container from "./Container";
import { use, useState } from "react";

const IssuesManagement = ({ fetchPromise }) => {
  const [toggle, setToggle] = useState("All");
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);

  const filteredData =
    toggle === "All" ? data : data.filter((el) => el.status === toggle);

  return (
    <>
      <BannerCountBoxes data={data} />
      <ToggleButtons toggle={toggle} setToggle={setToggle} />
      <Container>
        {filteredData.length === 0 ? (
          <h2 className="text-4xl font-bold text-center mb-24 text-purple-500">
            No Data
          </h2>
        ) : (
          <div className="grid grid-cols-3 gap-4 mb-24">
            {filteredData.map((issue) => (
              <Issue
                issue={issue}
                key={issue.ticketId}
                data={data}
                setData={setData}
              />
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default IssuesManagement;
