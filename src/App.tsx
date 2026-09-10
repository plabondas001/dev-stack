import { Suspense } from "react"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import TechData from "./components/techData.tsx/TechData"
import Technologies from "./components/Technologies"

// fetch technologies data
const technologiesPromise = async () => {
  const res = await fetch("/data.json")
  const data = await res.json()
  return data
}

function App() {

  const techDatas = technologiesPromise()

  return (
    <>

    {/* Navbar */}
    <Navbar/>

    {/* Banner */}
    <Banner/>

    {/* Technologies */}
    <Technologies/>

    {/* TechData */}
    <Suspense fallback = {<h1 className="text-center mt-12 text-3xl">Loading....</h1>}>
    <TechData techDatas={techDatas} />

    </Suspense>
    </>
  )
}

export default App
