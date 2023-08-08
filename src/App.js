import React from "react"
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./routes/About"
import Home from "./routes/Home"
import Navigation from "./component/Navigation"
import Detail from "./routes/Detail"

function App() {
  return (
    <HashRouter>
      <Navigation path="/" exact={true} element={<Home />}></Navigation>
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/movie-detail" element={<Detail />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App;