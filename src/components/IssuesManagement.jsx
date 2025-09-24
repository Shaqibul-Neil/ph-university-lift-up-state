import BannerCountBoxes from "./BannerCountBoxes";
import ToggleButtons from "./ToggleButtons";
import Issue from "./Issue";
import Container from "./Container";
import { use, useState } from "react";

const IssuesManagement = ({ fetchPromise }) => {
  const [toggle, setToggle] = useState("All");
  const initialData = use(fetchPromise);

  return (
    <>
      <BannerCountBoxes fetchPromise={fetchPromise} />;
      <ToggleButtons toggle={toggle} setToggle={setToggle} />
      <Container>
        <div className="grid grid-cols-3 gap-6">
          {initialData.map((issue) => (
            <Issue issue={issue} key={issue.ticketId} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default IssuesManagement;
