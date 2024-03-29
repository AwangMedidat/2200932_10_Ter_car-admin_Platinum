import Dashboard from "./pages/Dashboard";
import { Routes, Navigate } from "react-router-dom";
import EditPage from "./pages/EditPage";
import ListCar from "./pages/ListCar";

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Template from "./pages/Template";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddPage from "./pages/AddPage";
import ErrorPage from "./pages/ErrorPage";

import LoginPage from "./pages/LoginPage/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Template />} errorElement={<ErrorPage />}>
        <Route path="" element={<Dashboard />} />
        <Route path="cars" element={<ListCar />} />
        <Route path="cars/add" element={<AddPage />} />
        <Route path="cars/edit-car/:id" element={<EditPage />} />
      </Route>
    </Route>
  )
);

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
