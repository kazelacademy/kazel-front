import React from 'react'
import { Routes, Route } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </div>
  )
}

export default App