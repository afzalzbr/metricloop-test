import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import AuthLayout from "./Components/Layout/AuthLayout";
import DashboardLayout from "./Components/Layout/DashboardLayout";
import EditorLayout from "./Components/Layout/EditorLayout";
import LoginPage from "./Components/Pages/Auth/Login/Login";
import RegisterPage from "./Components/Pages/Auth/Register/Register";
import BoardPage from "./Components/Pages/BoardPage/BoardPage";
import DataPage from "./Components/Pages/Dashboard/DataPage/Datapage";
import MatricsPage from "./Components/Pages/Dashboard/MetricsPage/MetricsPage";
import SegmentsPage from "./Components/Pages/Dashboard/SegmentsPage/SegmentsPage";
import ErrorPage from "./Components/Pages/Error/ErrorPage";
import HomePage from "./Components/Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/" element={<Navigate replace to="/" />} />
          <Route path="/" element={<HomePage />} />
          <Route path="board" element={<BoardPage />} />
          <Route path="data" element={<DataPage />} />
          <Route path="metrics" element={<MatricsPage />} />
          <Route path="segments" element={<SegmentsPage />} />
        </Route>
        <Route path="/editor" element={<EditorLayout />}></Route>
        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="/home" element={<HomePage />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
