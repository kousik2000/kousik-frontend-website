import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import Account from "./components/Account";
import NotFound from "./components/NotFound";

import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/account" element={<Account />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
};

export default App;
