import "./App.css";

// bootstrap Link
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";

//components
import Navbar from "./Components/Navbar/navbar";
import Header from "./Components/header/header";
import Aboutme from "./Components/Aboutme/aboutme";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experiences";
import Portafolio from "./Components/Portafolio/Portafolios";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

//partycles

import Partycles from "react-particles-js";

function App() {
  return (
    <div>
      <BrowserRouter basename="/calendar">
        <Partycles
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
              shape: {
                type: "star",
                stroke: {
                  width: 6,
                  color: "#fff",
                },
              },
            },
          }}
        />
        <Navbar></Navbar>
        <Header></Header>
        <Aboutme></Aboutme>
        <Services></Services>
        <Experience />
        <Portafolio />
        <Contact />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
