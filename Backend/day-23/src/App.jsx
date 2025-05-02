import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { SearchPage } from "./pages/SearchPage";
import { SignupPage } from "./pages/SignupPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<div>Home</div>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
