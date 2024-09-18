import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./shared-components/ScrollToTop";
import HomePage from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/portfolio" element={<HomePage />} />
        {/* <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/plants" element={<PlantListPage />} />
      <Route path="/plants/:plantId" element={<PlantShowPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
