// App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
