import "./App.css";
import { Suspense, lazy } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
const HeroSection = lazy(() => import("./components/HeroSection"));
const EcoSystem = lazy(() => import("./components/Ecosystem"));
const Products = lazy(() => import("./components/Products"));
const SoftwareServices = lazy(() => import("./components/SoftwareServices"));

function App() {
  return (
    <>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Header />
          <HeroSection />
          <EcoSystem />
          <Products />
          <SoftwareServices />
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
