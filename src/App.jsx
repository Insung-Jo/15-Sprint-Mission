import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path="/items" element={<ItemPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
