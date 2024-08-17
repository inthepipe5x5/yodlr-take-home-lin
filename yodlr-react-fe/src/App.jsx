import { useState } from "react";
import "./App.css";
import AppRoutes from "./Components/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorContentCard from "./Components/ErrorContentCard";

// import NavBar from "./Components/NavBar";

const logErrorToConsole = (error, info) => {
  console.error("Error caught:", error, info);
};

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary
          FallbackComponent={ErrorContentCard}
          onError={logErrorToConsole}
        >
          <AppRoutes />
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
