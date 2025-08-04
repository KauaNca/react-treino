/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contato from "./pages/Contato";
import HelloWorld from "./pages/HelloWorld";
import Inicio from "./pages/Inicio";
import Footer from "./components/Footer";

function App() {
  return (
    <Router> {/* O Router é o componente que permite a navegação entre as páginas da aplicação. */}
      <Navbar />
      <Routes> {/* As rotas definem quais componentes serão renderizados para cada caminho da URL. A troca é feito dentro deste componente*/}
        <Route path="/" element={<Inicio />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/helloword" element={<HelloWorld />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
