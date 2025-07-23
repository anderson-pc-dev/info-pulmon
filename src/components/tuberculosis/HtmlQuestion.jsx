import { Html } from "@react-three/drei";

const HtmlQuestion = ({ position = [0, 2, 0], onClick }) => (
  <Html center position={position}>
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.6)",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        border: "2px solid #fff",
      }}
    >
      <span
        style={{
          fontSize: "1.5em",
          color: "yellow",
          fontWeight: "bold",
          userSelect: "none",
        }}
      >
        ?
      </span>
    </div>
  </Html>
);

export default HtmlQuestion;