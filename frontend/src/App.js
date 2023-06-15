import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarComponent from "./Common/Navbar";
import AllocateClassrooms from "./Pages/AllocateClassrooms";
import AllocatedSubjects from "./Pages/AllocatedSubjects";
import StudentReport from "./Pages/StudentReport";
import Students from "./Pages/Students";

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
          <Routes>
            <Route path="/" element={<Students />} />
            <Route path="/allocatesubjects" element={<AllocatedSubjects />} />
            <Route path="/allocateclassroom" element={<AllocateClassrooms />} />
            <Route path="/report" element={<StudentReport />} />
          </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
</>
  );
}

export default App;
