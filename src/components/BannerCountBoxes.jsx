import { use } from "react";
import CountBox from "./CountBox";
import Container from "./Container";

const BannerCountBoxes = ({ fetchPromise }) => {
  const issuesData = use(fetchPromise);
  return (
    <Container>
      <div className="grid grid-cols-3 gap-5 my-12">
        <CountBox />
      </div>
    </Container>
  );
};

export default BannerCountBoxes;
