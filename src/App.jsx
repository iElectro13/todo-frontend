import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/pages/Landing";
import TaskList from "./components/pages/TaskList";
import CreateTask from "./components/pages/CreateTask";
import UpdateTask from "./components/pages/UpdateTask";
import About from "./components/pages/About";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";

function App() {
    return (
        <div className="bg-neutral-100 min-h-screen text-neutral-800 flex flex-col justify-between items-center">
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<Landing title="Welcome to: TO-DO" />}
                />
                <Route path="tasks" element={<TaskList title="Tasks" />} />
                <Route
                    path="tasks/new"
                    element={<CreateTask title="Creating new task" />}
                />
                <Route
                    path="tasks/update"
                    element={<UpdateTask title="Updating a task" />}
                />
                <Route
                    path="/about"
                    element={<About title="About this app" />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
