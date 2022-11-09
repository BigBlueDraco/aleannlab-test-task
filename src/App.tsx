import { Routes, Route } from "react-router-dom";
import { JobsListPage } from "./pages/JobsListPage/JobsListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<JobsListPage />} />
      <Route path="/:jobId" element={<JobsListPage />} />
    </Routes>
  );
}

export default App;
