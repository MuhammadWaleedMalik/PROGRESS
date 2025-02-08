import { useState } from "react";
import { Provider } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { store } from "./store/store";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";
import Dashboard from "./pages/Dashboard";
import General from "./pages/info/General";
import AddressData from "./pages/info/AddressData";
import Configurations from "./pages/info/Configurations";
import ResultsList from "./pages/results/ResultsList";
import ResultsOverview from "./pages/results/ResultsOverview";
import Enrollment from "./pages/Enrollment/Enrollment";
import Footer from "./components/Footer";
import Login from "./pages/Login/Login";
import ErrorBoundary from "./components/ErrorBoundary";

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