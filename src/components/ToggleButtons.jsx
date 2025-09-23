import Container from "./Container";
const ToggleButtons = () => {
  return (
    <Container>
      <div className="text-right mb-12">
        <button className="toggle-btn rounded-l-md">All</button>
        <button className="toggle-btn">Pending</button>
        <button className="toggle-btn">Submitted</button>
        <button className="toggle-btn rounded-r-md">Reviewed</button>
      </div>
    </Container>
  );
};

export default ToggleButtons;
