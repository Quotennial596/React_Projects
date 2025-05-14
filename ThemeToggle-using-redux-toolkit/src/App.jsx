import "./App.css";
import Child1 from "./components/Child1";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <>
      <div
        id="container"
        style={{
          backgroundColor: theme === "light" ? "beige" : "black",
          minHeight: "100vh",
          padding: "2rem",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <h1>Theme Toggle using Redux Toolkit</h1>
        <Child1 />
      </div>
    </>
  );
}

export default App;
