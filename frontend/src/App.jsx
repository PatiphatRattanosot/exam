import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import EditFlight from "./pages/EditFlight";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit-flight/:id" element={<EditFlight />} />
      </Routes>
    </div>
  );
}

export default App;
