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
import { Botao, BotaoChildren } from "./components/Botao";
import InputFoco from "./components/Input";
import UseEffect from "./components/UseEffect";
import UseContext from "./components/UseContext";
import Calculadora from "./components/UseMemo";

function App() {
  return (
    //TEMA: PROPS
    //1º Passando propriedades para o componente Botao
    <>
      <Botao tamanho="100px" cor="red" />
      <Botao texto="Botão verde" />
      <Botao
        onClick={() => alert("Tocou no botão")}
        tamanho="150px"
        cor="blue"
        texto="Botão azul"
      />
      {/*2º Children*/}
      <BotaoChildren>
        <span>Botão com children</span>
      </BotaoChildren>
      <br></br>
      //TEMA: useRef
      <InputFoco />

      <br></br>
      //TEMA: useEffect
      <UseEffect />

      <br></br>
      //TEMA: useContext
      <UseContext />

      <br></br>
      //TEMA: useMemo
      <Calculadora a='5' b='10'/>
    </>

    //AULA 15 - REACT ROUTER DOM
    // O Router é o componente que permite a navegação entre as páginas da aplicação.
    // As rotas definem quais componentes serão renderizados para cada caminho da URL. A troca é feito dentro deste componente
    /* <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/helloword" element={<HelloWorld />} />
      </Routes>
      <Footer />
    </Router> */
  );
}

export default App;
