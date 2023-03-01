import React, { Suspense, lazy, } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import AcceptAuthCode from "./Components/Pages/Auth/Google/GoogleAuthAccept";
import GoogleAuthPage from "./sections/@dashboard/googleAuth";

const AuthLayout = lazy(() => import('./Components/Layout/AuthLayout'));
const DashboardLayout = lazy(() => import('./Components/Layout/DashboardLayout'));
const EditorLayout = lazy(() => import('./Components/Layout/EditorLayout'));
const LoginPage = lazy(() => import('./Components/Pages/Auth/Login/Login'));
const RegisterPage = lazy(() => import('./Components/Pages/Auth/Register/Register'));
const BoardPage = lazy(() => import('./Components/Pages/BoardPage/BoardPage'));
const DataPage = lazy(() => import('./Components/Pages/Dashboard/DataPage/Datapage'));
const MatricsPage = lazy(() => import('./Components/Pages/Dashboard/MetricsPage/MetricsPage'));
const SegmentsPage = lazy(() => import('./Components/Pages/Dashboard/SegmentsPage/SegmentsPage'));
const ErrorPage = lazy(() => import('./Components/Pages/Error/ErrorPage'));
const HomePage = lazy(() => import('./Components/Pages/HomePage/HomePage'));

function App() {

  return (
    <div className="App">
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route path="/" element={<Navigate replace to="/" />} />
            <Route path="/" element={<HomePage />} />
            <Route path="board" element={<BoardPage />} />
            <Route path="data" element={<DataPage />} />
            <Route path="metrics" element={<MatricsPage />} />
            <Route path="segments" element={<SegmentsPage />} />
            <Route path="google" element={<GoogleAuthPage />} />
            <Route path="google-auth" element={<AcceptAuthCode />} />
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
      </Suspense>
    </div>
  );
}

export default App;
