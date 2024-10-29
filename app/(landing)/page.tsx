import AboutUs from "./components/AboutUs"
import Benefits from "./components/Benefits"
import Hero from "./components/Hero"


const page = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <Hero />
      <Benefits />
      <AboutUs />
    </main>
  )
}

export default page
