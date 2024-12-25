
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ImageEditor from "./components/ImageEditor"

const App = () => {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<ImageEditor />} />
      </Routes>
    </Router>
    );
};

export default App;
