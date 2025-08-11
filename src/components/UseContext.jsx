import {useContext, createContext} from "react";

// Criamos o "rádio" (contexto) com um valor padrão ("claro")
const TemaContext = createContext('claro'); // Tema padrão: claro

function UseContext() {
  return (
    <TemaContext.Provider value="escuro"> {/*Provider -> é como se fosse um "rádio", ele vai servir para os outros ouvirem. Ou seja, os outros podem usar o contexto */}
      <Filho /> {/*Componente filho que vai consumir o contexto*/}
      <TrocarCor/> {/*Função que recebe o tema e retorna um elemento com cor baseada no tema*/}
    </TemaContext.Provider>
  );
}

function Filho() {
  const tema = useContext(TemaContext); // Lê o tema
  return <div>O tema é {tema}!</div>;
}

//Agora com cores utilizando o contexto
function TrocarCor(){
    const tema = useContext(TemaContext); // Lê o tema onde está situado
    return(
        <h1 style={{color: tema == 'escuro' ? 'white' : 'black'}}>Meu nome é Kauã</h1>
    )
}


export default UseContext;