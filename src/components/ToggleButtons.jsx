import Container from "./Container";

const ToggleButtons = ({ toggle, setToggle }) => {
  const btns = ["All", "Pending", "Submitted", "Reviewed"];
  return (
    <Container>
      <div className="text-right mb-12">
        {btns.map((btn, i) => (
          <button
            className={`toggle-btn ${
              toggle === btn && "!bg-purple-500 !text-white"
            } ${i === 0 && "rounded-l-md"} ${
              i === btns.length - 1 && "rounded-r-md"
            }`}
            onClick={() => setToggle(btn)}
            key={i}
          >
            {btn}
          </button>
        ))}
      </div>
    </Container>
  );
};

export default ToggleButtons;
