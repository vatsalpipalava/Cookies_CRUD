import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add from './Add';
import Display from './display'; // Assuming your component file is named Display

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Add />} />
                <Route path="/display" element={<Display />} />
            </Routes>
        </Router>
    );
}

export default App;
