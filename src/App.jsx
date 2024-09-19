import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./shared-components/ScrollToTop";
import HomePage from "./pages/home";

const basename = import.meta.env.MODE === "production" ? "/Portfolio" : "";

const App = () => {
  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
