import { useRef } from "react";

//useRef é um hook do React que permite criar uma referência mutável que persiste por todo o ciclo de vida do componente. 
// Ele é comumente usado para acessar diretamente elementos DOM ou para armazenar valores mutáveis que não causam uma nova renderização quando alterados.

function InputFoco(){
    const componenteRef = useRef(null); // Cria uma referência mutável inicializada com null

    const focar = () => {
        componenteRef.current.focus(); // Acessa o elemento DOM referenciado e chama o método focus() para focar no input
    };

    return(
        <div>
            <input ref={componenteRef} />
            <button onClick={focar}>Focar 🔦</button>
        </div>
    )
}
export default InputFoco;