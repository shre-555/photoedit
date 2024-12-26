
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dropzone from "./components/Dropzone"
import ImageEditor from "./components/ImageEditor"

const App = () => {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Dropzone />} />
        <Route path="/img" element={<ImageEditor />} />
      </Routes>
    </Router>
    );
};

export default App;
