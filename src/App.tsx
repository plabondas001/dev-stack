import { Suspense } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import TechData from "./components/techData.tsx/TechData";
import Technologies from "./components/Technologies";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

// fetch technologies data
const technologiesPromise = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const techDatas = technologiesPromise();

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Technologies */}
      <Technologies />

      {/* TechData */}
      <Suspense
        fallback={<h1 className="text-center mt-12 text-3xl">Loading....</h1>}
      >
        <TechData techDatas={techDatas} />
      </Suspense>


      {/* Footer */}
      <Footer/>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}

export default App;
