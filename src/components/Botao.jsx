function Botao({tamanho = "100px",cor = "green", texto = "Botão sem texto", onClick=() => {}}) {
    return(
        <button onClick={onClick} style={{width:tamanho, height:tamanho, backgroundColor: cor  }}>{texto}</button>
    )
}


function BotaoChildren({children,cor = "purple"}) {
    return(
        <button style={{backgroundColor:cor}} >{children}</button>
    )

}
export {Botao, BotaoChildren};