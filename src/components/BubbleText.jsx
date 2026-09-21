import "./bubble.css";

const BubbleText = ({ text }) => {
  return (
    <span>
      {text.split("").map((child, idx) => (
        <span className="hoverText" key={idx}>
          {child}
        </span>
      ))}
    </span>
  );
};

export default BubbleText;
