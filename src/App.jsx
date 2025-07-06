import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Navbar from './Componente/Navbar'

const App = () => {
    const[location , setlocation] = useState();
    const[opendropdown, setOpendropdown] = useState(false);


  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async position => {
      const { latitude, longitude } = position.coords; 
      console.log("Latitude: ", latitude, "Longitude: ", longitude);

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

      try {
        const location = await fetch(url);
        const data = await location.json();
        const exactLocation = data.address;
        setlocation(exactLocation);
        setOpendropdown(false); // Close dropdown after fetching location
        console.log("Location Data: ", data);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    }, error => {
      console.error("Geolocation error:", error); // Optional: catch permission or other geolocation issues
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <BrowserRouter>
      <Navbar location={location} getLocation={getLocation} opendropdown={opendropdown} setOpendropdown={setOpendropdown}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
