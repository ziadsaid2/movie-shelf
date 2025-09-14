import Navbar from "./components/navbar"
import ContactUs from "./components/Contactus"
import Cards from "./components/cards"
import Carousels from "./components/carasoul"
import Footer from "./components/footer"
import Button from "react-bootstrap/esm/Button"

function App() {

  return (
    <>
      <Navbar />
      <h3 style={{ color: '#D2C1B6', textAlign: 'center', marginBottom: ' 20px' }}>My favorite movies</h3>
      <Cards />
      <h3 style={{ color: '#D2C1B6', textAlign: 'center', marginTop: '20px' }}>images</h3>
      <Carousels />
      <h3 style={{ color: '#D2C1B6', textAlign: 'center', margin: '30px 0' }}>Contact Us</h3>
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
