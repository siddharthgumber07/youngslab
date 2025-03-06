import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GreetingForm from "./components/GreetingForm.jsx";
import GreetingPage from "./components/GreetingPage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GreetingForm />} />
                <Route path="/greeting" element={<GreetingPage />} />
            </Routes>
        </Router>
    );
}

export default App;
