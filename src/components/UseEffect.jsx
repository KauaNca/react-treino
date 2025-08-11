import {useState,useEffect} from 'react'

//useEffect é um hook do React que permite executar efeitos colaterais em componentes funcionais.
// Ele é comumente usado para tarefas como buscar dados, configurar assinaturas, ou manipular o DOM diretamente.


function UseEffect(){
    const [contador,setContador] = useState(0);

    useEffect( 
        ()=> {
          if(contador === 5){
            alert("Chegou a 5");
          }  
        },[contador]); // O array de dependências [contador] indica que o efeito deve ser executado sempre que o valor de contador mudar.
        
    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    );
}

export default UseEffect;