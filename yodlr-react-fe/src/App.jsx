import { useState } from "react";
import AppRoutes from "./Components/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorContentCard from "./Components/ErrorContentCard";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

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
          <NavBar></NavBar>
          <AppRoutes />
          <Footer></Footer>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
