import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NotesPages } from "./pages/NotesPages";
import { NotesFormPage } from "./pages/NotesFormPage";
import { Navigation } from "./components/Navitation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/notes" />} />
          <Route path="/notes" element={<NotesPages />} />
          <Route path="/notes-create" element={<NotesFormPage />} />
          <Route path="/notes/:id" element={<NotesFormPage />} />
        </Routes>
        <Toaster></Toaster>
      </div>
    </BrowserRouter>
  );
}

export default App;
