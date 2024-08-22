import { useState } from "react";
import AppRoutes from "./Components/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorContentCard from "./Components/ErrorContentCard";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
// import "./App.css" //commented out because it's messing up the footer

const logErrorToConsole = (error, info) => {
  console.error("Error caught:", error, info);
};

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar></NavBar> */}
        <ErrorBoundary
          FallbackComponent={ErrorContentCard}
          onError={logErrorToConsole}
        >
          <AppRoutes />
        </ErrorBoundary>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </>
  );
}

export default App;
