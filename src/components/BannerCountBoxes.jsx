import CountBox from "./CountBox";
import Container from "./Container";

const BannerCountBoxes = ({ data }) => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-5 my-12">
        <CountBox data={data} />
      </div>
    </Container>
  );
};

export default BannerCountBoxes;
