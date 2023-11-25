import { useEffect } from "react";
import useIntersectionObserver from "./useInersectionObserver";
export default function App() {
  const { ref, inView } = useIntersectionObserver();
  useEffect(() => {
    console.log(inView);
    if (inView) {
      alert("hi")
    }
  }, [inView]);
  return (
    <div className="App">
      <div style={{ height: "120vh" }}>
        <h2 style={{ textAlign: "center", color: "blueviolet" }}>
          Intersection Observer Testing
        </h2>
      </div>

      <h1
        ref={ref}
        style={{ background: "salmon", textAlign: "center", color: "white" }}
      >
        {inView ? "In View" : "Out of View"}
      </h1>

      <div style={{ height: "120vh", display: "flex", alignItems: "flex-end" }}>
        <h2 style={{ textAlign: "center", color: "#f50057" }}>
          Intersection Observer Testing
        </h2>
      </div>
    </div>
  );
}
