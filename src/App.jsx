import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import StockList from "./components/StockList";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="p-6">
        <StockList />
      </main>
    </div>
  );
}

export default App;
