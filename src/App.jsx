import BaseLayout from "pages/components/BaseLayout/BaseLayout";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/Home"));
const CountryDetail = lazy(() => import("./pages/CountryDetail/CountryDetail"));

function App() {
  return (
    <BaseLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:code" element={<CountryDetail />} />
        </Routes>
      </Suspense>
    </BaseLayout>
  );
}

export default App;
