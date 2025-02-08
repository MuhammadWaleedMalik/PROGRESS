import { useState } from "react";
import { Provider } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { store } from "./store/store.ts";
import Sidebar from "./components/Sidebar.tsx";
import Header from "./components/Header.tsx";
import Breadcrumb from "./components/Breadcrumb.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import General from "./pages/info/General.tsx";
import AddressData from "./pages/info/AddressData.tsx";
import Configurations from "./pages/info/Configurations.tsx";
import ResultsList from "./pages/results/ResultsList.tsx";
import ResultsOverview from "./pages/results/ResultsOverview.tsx";
import Enrollment from "./pages/Enrollment/Enrollment.tsx";
import Footer from "./components/Footer.tsx";
import Login from "./pages/Login/Login.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status: boolean) => {
    setIsLoggedIn(status);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set isLoggedIn to false on logout
  };

  return (
    <Provider store={store}>
      <ErrorBoundary> 
      <div className="flex min-h-screen bg-white">
        {isLoggedIn && <Sidebar />}
        <div className="flex-1 flex flex-col min-h-screen">
          {isLoggedIn && <Header onLogout={handleLogout} />} {/* Pass handleLogout to Header */}
          {isLoggedIn && <Breadcrumb />}
          <main className="p-6 flex-1">
            <Routes>
              <Route
                path="/login"
                element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
              />
              <Route path="/" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
              <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
              <Route path="/info/general" element={isLoggedIn ? <General /> : <Navigate to="/login" />} />
              <Route path="/info/address-data" element={isLoggedIn ? <AddressData /> : <Navigate to="/login" />} />
              <Route
                path="/info/configurations"
                element={isLoggedIn ? <Configurations /> : <Navigate to="/login" />}
              />
              <Route path="/results" element={isLoggedIn ? <ResultsList /> : <Navigate to="/login" />} />
              <Route path="/enrolling" element={isLoggedIn ? <Enrollment /> : <Navigate to="/login" />} />
              <Route
                path="/results/:programId"
                element={isLoggedIn ? <ResultsOverview /> : <Navigate to="/login" />}
              />
            </Routes>
          </main>
          {isLoggedIn && <Footer />}
        </div>
      </div>  
      </ErrorBoundary>
      
    </Provider>
  );
}

export default App;