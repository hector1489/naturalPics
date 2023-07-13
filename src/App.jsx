import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Browser from './components/Navbar/Browser'
import Home from './Views/Home'
import Favorites from "./Views/Favorites"
import DataContext from "./context/my_context"

function App() {
  const [data, setData] = useState([])

  const endpoint = "/fotos.json"
  const getData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setData(data.photos)
  }

  useEffect(() => {
    getData(endpoint)
  }, [])

  const globalState = {
    data,
    setData
  }

  return (
    <DataContext.Provider value={globalState}>
      <BrowserRouter>
        <Browser />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App
